import View from "./view.js";
import icons from "url:../img/icons.svg";

class paginationView extends View{
 _parentElement = document.querySelector('.pagination');

 addHandlerClick(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline'); // a.ii
      if (!btn) return;

      const goToPage = +btn.dataset.goto; // a.iii
      console.log(goToPage); // a.iv

      handler(goToPage); // invoca el controlador con la página
    });
  }
 
  _generateMarkup(){
    const curPage = this._data.page; // iii.2
    const numPages = Math.ceil(this._data.results.length / this._data.resultsPerPage); // 3.a

    // b.i. Página 1 y más páginas
    if (curPage === 1 && numPages > 1) {
      return `
        <button data-goto="${curPage + 1}" class="btn--inline pagination__btn--next">
          <span>Page ${curPage + 1}</span>
          <svg class="search__icon">
            <use href="${icons}#icon-arrow-right"></use>
          </svg>
        </button>
      `;
    }

    // b.ii. Última página
    if (curPage === numPages && numPages > 1) {
      return `
        <button data-goto="${curPage - 1}" class="btn--inline pagination__btn--prev">
          <svg class="search__icon">
            <use href="${icons}#icon-arrow-left"></use>
          </svg>
          <span>Page ${curPage - 1}</span>
        </button>
      `;
    }

    // b.iii. Página intermedia
    if (curPage < numPages) {
      return `
        <button data-goto="${curPage - 1}" class="btn--inline pagination__btn--prev">
          <svg class="search__icon">
            <use href="${icons}#icon-arrow-left"></use>
          </svg>
          <span>Page ${curPage - 1}</span>
        </button>
        <button data-goto="${curPage + 1}" class="btn--inline pagination__btn--next">
          <span>Page ${curPage + 1}</span>
          <svg class="search__icon">
            <use href="${icons}#icon-arrow-right"></use>
          </svg>
        </button>
      `;
    }

    // b.iv. Solo una página
    return '';
  }
}

export default new paginationView();