# Diagrama UML - Aplicación Forkify

## Descripción del Proyecto

**Forkify** es una aplicación web de búsqueda y visualización de recetas de cocina desarrollada en JavaScript vanilla siguiendo el patrón arquitectónico **MVC (Model-View-Controller)**. La aplicación permite a los usuarios buscar recetas, ver detalles completos y navegar por resultados paginados.

## Arquitectura del Sistema

El proyecto está organizado en las siguientes capas principales:

### 1. **Capa de Configuración**
- **Config**: Clase estática que contiene las constantes de configuración
  - `API_URL`: URL de la API de recetas
  - `TIMEOUT_SEC`: Tiempo de espera para requests
  - `RES_PER_PAGE`: Número de resultados por página

### 2. **Capa de Utilidades**
- **Helpers**: Clase estática con funciones auxiliares
  - `timeout()`: Maneja timeouts para requests HTTP
  - `getJSON()`: Realiza peticiones HTTP y maneja errores

### 3. **Capa del Modelo (Model Layer)**

#### Entidades de Datos:
- **Recipe**: Entidad principal que representa una receta completa
  - Propiedades: id, title, publisher, sourceUrl, image, servings, cookingTime, ingredients
- **Ingredient**: Representa un ingrediente de la receta
  - Propiedades: quantity, unit, description
- **SearchResult**: Versión simplificada de receta para resultados de búsqueda
  - Propiedades: id, title, publisher, image
- **SearchState**: Estado de la búsqueda actual
  - Propiedades: query, results, page, resultsPerPage

#### Gestión del Estado:
- **State**: Objeto que mantiene el estado global de la aplicación
- **Model**: Clase estática que gestiona la lógica de negocio
  - `loadRecipe()`: Carga una receta específica desde la API
  - `loadSearchResults()`: Realiza búsquedas de recetas
  - `getSearchResultsPage()`: Obtiene resultados paginados

### 4. **Capa de Vista (View Layer)**

#### Jerarquía de Vistas:
- **View**: Clase abstracta base para todas las vistas
  - Funcionalidad común: render, renderSpinner, renderError, renderMessage
- **RecipeView**: Muestra los detalles completos de una receta
- **SearchView**: Maneja el formulario de búsqueda
- **ResultsView**: Muestra la lista de resultados de búsqueda
- **PaginationView**: Controla la navegación por páginas

### 5. **Capa del Controlador (Controller Layer)**
- **Controller**: Clase estática que coordina entre Model y Views
  - `controlRecipes()`: Maneja la carga y visualización de recetas
  - `controlSearchResults()`: Gestiona las búsquedas
  - `controlPagination()`: Controla la paginación
  - `init()`: Inicializa la aplicación y configura event listeners

## Patrones de Diseño Implementados

### 1. **MVC (Model-View-Controller)**
- **Separación de responsabilidades**: Cada capa tiene una función específica
- **Bajo acoplamiento**: Las capas se comunican a través de interfaces bien definidas

### 2. **Observer Pattern**
- Las vistas notifican al controlador sobre eventos del usuario
- El controlador actualiza el modelo y las vistas correspondientes

### 3. **Singleton Pattern**
- Las clases Model, Controller, Config y Helpers son estáticas
- Las instancias de vistas se exportan como singletons

### 4. **Template Method Pattern**
- La clase View define el algoritmo general para renderizado
- Las clases hijas implementan `_generateMarkup()` específico

## Flujo de Datos

### Búsqueda de Recetas:
1. Usuario ingresa término en SearchView
2. SearchView notifica al Controller
3. Controller llama a Model.loadSearchResults()
4. Model hace request a la API usando Helpers
5. Model actualiza el State con los resultados
6. Controller actualiza ResultsView y PaginationView

### Visualización de Receta:
1. Usuario hace clic en una receta
2. RecipeView notifica al Controller
3. Controller llama a Model.loadRecipe()
4. Model carga datos completos de la receta
5. Controller actualiza RecipeView con los datos

## Beneficios de la Arquitectura

1. **Mantenibilidad**: Código organizado y fácil de modificar
2. **Escalabilidad**: Fácil agregar nuevas funcionalidades
3. **Testabilidad**: Separación de responsabilidades facilita testing
4. **Reutilización**: Componentes modulares y reutilizables
5. **Legibilidad**: Estructura clara y documentada

## Archivos del Proyecto

```
src/js/
├── config.js          # Configuración
├── helpers.js         # Utilidades
├── model.js          # Lógica de negocio
├── controller.js     # Coordinador principal
├── view.js           # Clase base de vistas
├── RecipeView.js     # Vista de receta
├── searchView.js     # Vista de búsqueda
├── resultView.js     # Vista de resultados
└── paginationView.js # Vista de paginación
```

## Tecnologías Utilizadas

- **JavaScript ES6+**: Lenguaje principal
- **Parcel**: Bundler para desarrollo
- **Sass**: Preprocesador CSS
- **API REST**: Forkify API para datos de recetas
- **Fracty**: Librería para fracciones en ingredientes

---

*Este diagrama UML representa la arquitectura completa de la aplicación Forkify, mostrando las relaciones entre componentes y el flujo de datos en el sistema.*