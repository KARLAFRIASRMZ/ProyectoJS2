
class SearchView{
_parentEl = document.querySelector('.search');

getQuery() {
    const query = this._parentEl.querySelector('.search__field').value;
    this.#clearInput();
    return query;
  }

   #clearInput() {
    this._parentEl.querySelector('.search__field').value = '';
  }

  // iii. Listener para escuchar el evento de clic (submit)
  addHandlerSearch(handler) {
    this._parentEl.addEventListener('submit', function (e) {
      e.preventDefault(); // Previene el envío del formulario
      handler(); // Ejecuta la función del controlador
    });
  }

}

export default new SearchView();
