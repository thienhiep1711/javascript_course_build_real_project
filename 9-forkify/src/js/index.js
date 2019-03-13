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
    try {
      // Get recipe data and parse ingredient
      await state.recipe.getRecipe();
      state.recipe.parseIngredients();
      //Calculate saving and time
      state.recipe.calcTime();
      state.recipe.calcSavings();
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

//6bb4b89ce1d6442b2ccd9d4ae3e678c5
//28e592731909380ad144cc3a33194f46
//102d4ce9e0c571fee1d297b272f43ae2 
//https://www.food2fork.com/api/search
//https://www.food2fork.com/api/get