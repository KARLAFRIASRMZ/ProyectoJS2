// ------------------------------------------
// MODELO
// ------------------------------------------

import { API_URL, TIMEOUT_SEC, RES_PER_PAGE } from "./config.js";
import { timeout, getJSON } from "./helpers.js";


// i.  Objeto state con recipe vacío
export const state = {
  recipe: {}, // ← punto i
  search: {
    query: '',
    results: [],
    page: 1,
    resultsPerPage: RES_PER_PAGE,
  },
};

// iii. Función asíncrona loadRecipe
export const loadRecipe = async function (id) {
  try {
    const data = await getJSON(`${API_URL}${id}`);

    // v‑1‑d‑i. desestructuración de recipe
    const { recipe } = data.data;

    // 3b) declaramos const recipeFormatted
    const recipeFormatted = {
      id: recipe.id,
      title: recipe.title,
      publisher: recipe.publisher,
      sourceUrl: recipe.source_url,
      image: recipe.image_url,
      servings: recipe.servings,
      cookingTime: recipe.cooking_time,
      ingredients: recipe.ingredients,
    };

    // 3c) anteponemos state al recipe formateado
    state.recipe = recipeFormatted;

    // v‑1‑d‑ii y 3d) console.log del objeto dentro de state
    console.log('state.recipe →', state.recipe);
  } catch (err) {
    // v‑2. catch: alerta
    console.log(`${err} 💥💥💥💥`);
    alert(err);
    throw err; // propagamos por si el controlador quiere manejarlo
  }
}

export const loadSearchResults = async function (query) {
  try {
    state.search.query = query;

    const data = await getJSON(`${API_URL}/?search=${query}`);

    state.search.results = data.data.recipes.map(rec => {
      return {
        id: rec.id,
        title: rec.title,
        publisher: rec.publisher,
        image: rec.image_url,
      };
    });
    //console.log("hola");
    //console.log(state.search.results); // iii. Para verificar resultados
  } catch (err) {
    console.log(`${err} 💥💥💥💥`);
  }
}

export const getSearchResultsPage = function (page = state.search.page) {
state.search.page = page;
const start = (page - 1) * state.search.resultsPerPage;
const end = page * state.search.resultsPerPage;

return state.search.results.slice(start, end);
}