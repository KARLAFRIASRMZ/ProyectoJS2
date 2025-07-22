# Diagrama UML - Aplicación Forkify

## Descripción del Proyecto

**Forkify** es una aplicación web de recetas que permite a los usuarios buscar, visualizar y explorar recetas de cocina. La aplicación está construida con JavaScript vanilla siguiendo el patrón arquitectural **MVC (Model-View-Controller)**.

## Arquitectura del Sistema

El diagrama UML muestra la estructura completa de la aplicación Forkify, organizada en los siguientes paquetes:

### 📋 Paquetes Principales

#### 1. **Configuration**
- **Config**: Contiene las constantes de configuración de la aplicación
  - `API_URL`: URL base de la API de recetas
  - `TIMEOUT_SEC`: Tiempo límite para peticiones HTTP
  - `RES_PER_PAGE`: Número de resultados por página

#### 2. **Helpers** 
- **Helpers**: Funciones utilitarias para operaciones comunes
  - `timeout()`: Maneja timeouts de peticiones
  - `getJSON()`: Realiza peticiones HTTP y maneja respuestas JSON

#### 3. **Model** 
- **Model**: Gestiona el estado de la aplicación y las operaciones de datos
- **State**: Objeto central que contiene el estado de la aplicación
- **Recipe**: Representa una receta individual con todos sus datos
- **SearchState**: Maneja el estado de búsquedas y paginación
- **Ingredient**: Representa un ingrediente de una receta

#### 4. **Views**
- **View** (Clase Abstracta): Clase base para todas las vistas
- **RecipeView**: Muestra los detalles de una receta individual
- **SearchView**: Maneja la interfaz de búsqueda
- **ResultsView**: Muestra la lista de resultados de búsqueda
- **PaginationView**: Controla la navegación por páginas

#### 5. **Controller**
- **Controller**: Coordina la comunicación entre el Model y las Views

## 🔄 Flujo de la Aplicación

1. **Búsqueda de Recetas**:
   - Usuario ingresa término de búsqueda → SearchView → Controller → Model → API
   - Resultados se muestran en ResultsView con paginación

2. **Visualización de Receta**:
   - Usuario selecciona una receta → Controller → Model → RecipeView

3. **Paginación**:
   - Usuario navega páginas → PaginationView → Controller → ResultsView

## 🏗️ Patrones de Diseño Utilizados

### **MVC (Model-View-Controller)**
- **Model**: Gestiona datos y lógica de negocio
- **View**: Maneja la presentación e interfaz de usuario
- **Controller**: Coordina entre Model y View

### **Observer Pattern**
- Las Views notifican al Controller sobre eventos del usuario
- El Controller actualiza las Views basado en cambios en el Model

### **Inheritance**
- Todas las vistas específicas extienden de la clase base `View`
- Reutilización de código común (renderizado, spinner, errores)

## 📁 Estructura de Archivos

```
src/
├── js/
│   ├── controller.js      # Controlador principal
│   ├── model.js           # Modelo de datos
│   ├── view.js            # Vista base abstracta
│   ├── RecipeView.js      # Vista de receta individual
│   ├── searchView.js      # Vista de búsqueda
│   ├── resultView.js      # Vista de resultados
│   ├── paginationView.js  # Vista de paginación
│   ├── helpers.js         # Funciones utilitarias
│   └── config.js          # Configuración
├── sass/                  # Estilos SASS
└── img/                   # Imágenes y recursos
```

## 🔗 Relaciones Principales

- **Composición**: State contiene Recipe y SearchState
- **Agregación**: SearchState contiene múltiples Recipe objects
- **Herencia**: Views específicas extienden de View base
- **Dependencia**: Controller usa Model y Views
- **Asociación**: Views notifican al Controller

## 📊 Archivos Generados

- `uml-diagram.puml`: Código fuente PlantUML
- `Forkify Application UML Diagram.png`: Imagen PNG del diagrama
- `Forkify Application UML Diagram.svg`: Imagen SVG del diagrama

## 🛠️ Tecnologías Utilizadas

- **JavaScript ES6+**: Lenguaje principal
- **Parcel**: Bundler y servidor de desarrollo
- **SASS**: Preprocesador CSS
- **Fracty**: Librería para manejo de fracciones
- **PlantUML**: Generación de diagramas UML

## 📝 Notas Técnicas

- La aplicación utiliza **Singleton Pattern** para las vistas (exportadas como instancias)
- **Async/Await** para manejo de operaciones asíncronas
- **Event Delegation** para manejo eficiente de eventos
- **API RESTful** para obtención de datos de recetas

---

*Este diagrama UML proporciona una visión completa de la arquitectura y relaciones entre componentes de la aplicación Forkify.*