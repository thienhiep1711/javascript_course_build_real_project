import Search from './models/Search';
import Recipe from './models/Recipe';
import List from './models/List';
import Likes from './models/Likes';
import * as searchView from './views/searchView';
import * as recipeView from './views/recipeView';
import * as listView from './views/listView';
import * as likeView from './views/likeView';
import {
  elements,
  renderLoader,
  clearLoader,
} from './views/base';


/*
  ** Global state of the app
  - Search object
  - curent recipe object
  - Shoping list object
  - Liked recipe
*/


//Search controller

const state = {};
window.state = state;

const controlSearch = async () => {
  // 1.Get query from view
  const query = searchView.getInput();
  // const query ="pizza";
  console.log(query)

  if (query) {
    // 2. New search object and add to state
    state.search = new Search(query);
    // 3.prepare UI for results
    try {
      searchView.clearInput();
      searchView.clearResults();
      renderLoader(elements.searchRes)
      // 4. Search for recipes
      await state.search.getResults();
      // 5. Render results on UI
      clearLoader();
      searchView.renderResults(state.search.result)
    } catch (error) {
      console.log(error);
    }
  }
}

elements.searchForm.addEventListener('submit', e => {
  e.preventDefault();
  controlSearch();
})

// window.addEventListener('load', e => {
//   e.preventDefault();
//   controlSearch();
// })

elements.searchResPage.addEventListener('click', e => {
  const btn = e.target.closest('.btn-inline');
  if (btn) {
    const goToPage = parseInt(btn.dataset.goto, 10);
    searchView.clearResults();
    searchView.renderResults(state.search.result, goToPage)
  }
})


//Recipe controller

const controlRecipe = async () => {

  // get ID from url
  const id = window.location.hash.replace('#', '');
  if (id) {
    // Prepagre UI for changes
    recipeView.clearRecipe();
    renderLoader(elements.recipe);
    // Create new recipe object
    state.recipe = new Recipe(id);

    //Testing
    // window.r = state.recipe;

    // Highlight selected search item
    if (state.search) searchView.highlightSelected(id);
    
    try {
      // Get recipe data and parse ingredient
      await state.recipe.getRecipe();
      state.recipe.parseIngredients();
      //Calculate saving and time
      state.recipe.calcTime();
      state.recipe.calcServings();
      // Render recipe
      clearLoader();
      recipeView.renderRecipe(state.recipe, state.likes.isLiked(id));
    } catch (error) {
      console.log(error);
    }
  }
}

window.addEventListener('hashchange', controlRecipe);
window.addEventListener('load', controlRecipe);
['hashchange', 'load'].forEach(event => window.addEventListener(event, controlRecipe))




////List controller
//Handle recipe buttons click

const controlList = () => {
  // Create a new list IF there in none yet
  if (!state.list) state.list = new List();

  // Add each ingredient to the list and UI
  state.recipe.ingredients.forEach(el => {
    const item = state.list.addItem(el.count, el.unit, el.ingredient);
    listView.renderItem(item);
  })
}


// Handle delete and update list item events

elements.shopping.addEventListener('click', e => {
  const id = e.target.closest('.shopping__item').dataset.itemid;
  // Handle the delete buttons

  if (e.target.matches('.shopping__delete, .shopping__delete *')) {
    //Delete from state
    state.list.deleteItem(id);
    // Delete from UI
    listView.deleteItem(id);

  // Handle count update
  } else if (e.target.matches('.shopping__count-value')) {
    const val = parseFloat(e.target.value, 10);
    state.list.updateCount(id, val);
  }
})


/*
LIKE CONTROLLER
*/ 

state.likes = new Likes();
const controlLike = () => {
  if (!state.likes) state.likes = new Likes();
    const currentID = state.recipe.id;

    // User has Not yet liked current recipe
  if (!state.likes.isLiked()) {

     // Add like to the state
    const newLike = state.likes.addLike(currentID, state.recipe.title, state.recipe.author, state.recipe.img);

    // Toggle the like button
    likeView.toggleLikeBtn(true);
    // Add like to UI list
    console.log(state.likes);

    // User HAS yet liked current recipe
  } else {
    // Remove like from the state

    // Toggle the like button
    likeView.toggleLikeBtn(false);
    // Remove like in UI list
   

  }
};



elements.recipe.addEventListener('click', e => {

   if (e.target.matches('.btn-decrease, .btn-decrease * ')) {
      // Decreease
      if (state.recipe.servings > 1 ) {
        state.recipe.updateServings('dec');
        recipeView.updateServingsIngredients(state.recipe);
      }
   } else if (e.target.matches('.btn-increase, .btn-increase * ')) {
      state.recipe.updateServings('inc');
      recipeView.updateServingsIngredients(state.recipe);
   } else if (e.target.matches('.recipe__btn--add, .recipe__btn--add * ')) {
     controlList();
   } else if (e.target.matches('.recipe__love, .recipe__love *') ) {
      // Like controller
      controlLike();
   }
})


window.l = new List();