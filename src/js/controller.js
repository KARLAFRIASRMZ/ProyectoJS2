const recipeContainer = document.querySelector('.recipe');

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

// Función asíncrona que obtiene una receta y la muestra en consola
async function showRecipe() {
  try {
    //  Hacer la petición
    const resp = await fetch(
      'https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc886'
    );

    // Convertir la respuesta a JSON
    const data = await resp.json();

    // Imprimir en consola
    console.log('Contenido de resp', resp);
    console.log('Contenido de data', data);

    //Extraer la receta que luego mostrarías en pantalla
    let recipe = data.data.recipe;
    /* console.log('Objeto recipe listo para renderizar', recipe); */
    // 
    recipe = {
      id: recipe.id,
      title: recipe.title,
      publisher: recipe.publisher,
      sourceUrl: recipe.source_url,
      image: recipe.image_url,
      servings: recipe.servings,
      cookTime: recipe.cooking_time,
      ingredients: recipe.ingredients,
    };

    console.log('recipe', recipe.id, recipe.title);

  } catch (err) {
    // Manejar errores
    alert(`Ups… algo salió mal \n${err}`);
  }
}

// Invocar la función
showRecipe("https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc886zzz");
