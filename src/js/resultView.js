import View from './view.js';
import icons from "url:../img/icons.svg";

class ResultsView extends View {
  _parentElement = document.querySelector('.results'); // iii.
  _errorMessage = 'No se encontraron recetas. ¡Intenta otra búsqueda!';
  _message = '';

  _generateMarkup() {
    return this._data.map(this._generateMarkupPreview).join('');
  }

 _generateMarkupPreview(result) {
    return `
      <li class="preview">
        <a class="preview__link" href="#${result.id}">
          <figure class="preview__fig">
            <img src="${result.image}" alt="${result.title}" />
          </figure>
          <div class="preview__data">
            <h4 class="preview__title">${result.title}</h4>
            <p class="preview__publisher">${result.publisher}</p>
            <div class="preview__user-generated">
              <svg>
                <use href="${icons}#icon-user"></use>
              </svg>
            </div>
          </div>
        </a>
      </li>
    `;
  }
}

export default new ResultsView(); // iv.