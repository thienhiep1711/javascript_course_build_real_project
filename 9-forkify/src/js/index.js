import Search from './models/Search';
import Recipe from './models/Recipe';
import * as searchView from './views/searchView';
import * as recipeView from './views/recipeView';
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
      recipeView.renderRecipe(state.recipe)
    } catch (error) {
      console.log(error);
    }
  }
}

window.addEventListener('hashchange', controlRecipe);
window.addEventListener('load', controlRecipe);
['hashchange', 'load'].forEach(event => window.addEventListener(event, controlRecipe))

//Handle recipe buttons click

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
   }
})