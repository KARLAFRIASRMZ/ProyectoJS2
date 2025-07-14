import * as model from './model.js';
import RecipeView from './RecipeView.js';
import searchView from './searchView.js';
import resultsView from './resultView.js';
import icons from "url:../img/icons.svg";
import paginationView from './paginationView.js';

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);
    if (!id) return;

    RecipeView.renderSpinner(); // muestra el spinner

    await model.loadRecipe(id); // obtiene la receta y la guarda en model.state

    //  Aquí es donde debes colocar la instancia que pide el enunciado:
    RecipeView.render(model.state.recipe); //  AQUÍ SE CUMPLE TU INSTRUCCIÓN
  } catch (err) {
    RecipeView.renderError();
    //console.log("hay error", err);
  }
};


const controlSearchResults = async function (query) {
  try {
    const query = searchView.getQuery();

        //Validar que no esté vacío
    if (!query) return;

    resultsView.renderSpinner();

    await model.loadSearchResults(query);
    //console.log(model.state.search.results);

    //resultsView.render(model.state.search.results)  .....antes
    resultsView.render(model.getSearchResultsPage()); 
    // Mostrar botones de paginación
    paginationView.render(model.state.search); 

  } catch (err) {
    console.log("hay error", err);
  }

}

const controlPagination = function (goToPage) {
  // 1. Mostrar los nuevos resultados
  resultsView.render(model.getSearchResultsPage(goToPage));

  // 2. Mostrar los nuevos botones de paginación
  paginationView.render(model.state.search);
};

const init = function () {
  RecipeView.addHandlerRender(controlRecipes);
  searchView.addHandlerSearch(controlSearchResults);
  paginationView.addHandlerClick(controlPagination);
};

init();

/* ['hashchange', 'load'].forEach(ev =>
  window.addEventListener(ev, controlRecipes)
); */