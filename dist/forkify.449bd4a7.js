function e(e){return e&&e.__esModule?e.default:e}const t="https://forkify-api.herokuapp.com/api/v2/recipes/",r=async function(e){try{let t=fetch(e),r=await Promise.race([t,new Promise((e,t)=>{setTimeout(()=>{t(Error("Request took too long! Timeout after 5 second(s)"))},5e3)})]),s=await r.json();if(!r.ok)throw Error(`${s.message} (${r.status})`);return s}catch(e){throw e}},s={recipe:{},search:{query:"",results:[],page:1,resultsPerPage:10}},n=async function(e){try{let{recipe:n}=(await r(`${t}${e}`)).data;s.recipe={id:n.id,title:n.title,publisher:n.publisher,sourceUrl:n.source_url,image:n.image_url,servings:n.servings,cookingTime:n.cooking_time,ingredients:n.ingredients},console.log("state.recipe →",s.recipe)}catch(e){throw console.log(`${e} \u{1F4A5}\u{1F4A5}\u{1F4A5}\u{1F4A5}`),alert(e),e}},i=async function(e){try{s.search.query=e;let n=await r(`${t}/?search=${e}`);s.search.results=n.data.recipes.map(e=>({id:e.id,title:e.title,publisher:e.publisher,image:e.image_url}))}catch(e){console.log(`${e} \u{1F4A5}\u{1F4A5}\u{1F4A5}\u{1F4A5}`)}},a=function(e=s.search.page){s.search.page=e;let t=(e-1)*s.search.resultsPerPage,r=e*s.search.resultsPerPage;return s.search.results.slice(t,r)};var c={};c=import.meta.resolve("eyyUD");var l={};function o(e,t,r,s,n){var i,a,c,l;let o=[2,3,5];if(!0===n)for(let t=3;t*t<=e;t+=2)e%t==0&&o.push(t);let u=0,d=e,p=t;for(;u<=o.length;)d%o[u]==0&&p%o[u]==0?(o[u],d/=o[u],p/=o[u]):u++;return i=p,a=d,c=r,l=s,1===i&&1===a?(c=`${l}${(parseInt(c)+1).toString()}`,`${c}`):0===a?`${l}${c}`:"0"==c?`${l}${a}/${i}`:`${l}${c} ${a}/${i}`}l=function(e){let t,r;if(e<0?(e=Math.abs(e),t="-"):t="",void 0===e)return"Your input was undefined.";if(isNaN(e))return`"${e}" is not a number.`;if(1e16==e)return`${t}9999999999999999`;if(e>1e16)return"Too many digits in your integer to maintain IEEE 754 Floating Point conversion accuracy.";if(Number.isInteger(e))return`${t}${e}`;if(e<1e-6)return"0";let s=e.toString(),n=s.split("."),i=n[0];if("0"==r&&"0"!==i)return i;if("0"==r&&"0"==i)return"0";if("99"==(r=s.length>=17?n[1].slice(0,n[1].length-1):n[1])&&"0"!==i)return`${i} 99/100`;if("99"==r&&"0"==i)return"99/100";if(1-parseFloat(`.${r}`)<.0011&&(r="999"),void 0==r)return i;let a=r.split("").reverse().join("").match(/^(\d+)\1{1,2}/);if(!a||!(r.length>2)){var c,l,u;return c=r,l=i,u=t,o(parseInt(c,10),Math.pow(10,c.length),l,u,!1)}{let e=a[0].split("").reverse().join(""),s=a[1].split("").reverse().join("");if(s.length>1){let e=s.split(""),t=1;for(let r=0;r<e.length;r++)t/=e[0]/e[r];1===t&&(s=e[0])}return s.length>1&&s.length%2==0&&(s=parseInt(s.slice(0,s.length/2),10)-parseInt(s.slice(s.length/2,s.length),10)==0?s.slice(0,s.length/2):s),function(e,t,r,s,n){let i=e.length-r.length>=1?e.length-r.length:1,a=Math.pow(10,i),c=parseFloat(`0.${e}`),l=Math.pow(10,t.length);return o(Math.round((c*l-c)*Math.pow(10,i)),(l-1)*a,s,n,!0)}(r,s,e,i,t)}};class u{_data;render(e){if(!e||Array.isArray(e)&&0===e.length)return this.renderError();this._data=e;let t=this._generateMarkup();this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}_clear(){this._parentElement.innerHTML=""}renderSpinner(){let t=`
      <div class="spinner">
        <svg>
          <use href="${e(c)}#icon-loader"></use>
        </svg>
      </div>
    `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}renderError(t=this._errorMessage){let r=`
      <div class="error">
        <div>
          <svg>
            <use href="${e(c)}#icon-alert-triangle"></use>
          </svg>
        </div>
        <p>${t}</p>
      </div>
    `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",r)}renderMessage(t=this._message){let r=`
      <div class="message">
        <div>
          <svg>
            <use href="${e(c)}#icon-smile"></use>
          </svg>
        </div>
        <p>${t}</p>
      </div>
    `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",r)}}class d{_parentElement=document.querySelector(".recipe");_data;_errorMessage="We could not find that recipe. Please try another one!";_message="Operation was successful!";render(e){this._data=e;let t=this.#e();this.#t(),this._parentElement.insertAdjacentHTML("afterbegin",t)}renderSpinner(){let t=`
      <div class="spinner">
        <svg>
          <use href="${e(c)}#icon-loader"></use>
        </svg>
      </div>
    `;this._parentElement.innerHTML="",this._parentElement.insertAdjacentHTML("afterbegin",t)}addHandlerRender(e){["hashchange","load"].forEach(t=>window.addEventListener(t,e))}renderError(t=this._errorMessage){let r=`
<div class="error">
    <div>
         <svg>
              <use href="${e(c)}#icon-alert-triangle"></use>
        </svg>
   </div>
  <p>${t}</p>
  </div>
  `;this.#t(),this._parentElement.insertAdjacentHTML("afterbegin",r)}renderMessage(t=this._message){let r=`
    <div class="message">
      <div>
        <svg>
          <use href="${e(c)}#icon-smile"></use>
        </svg>
      </div>
      <p>${t}</p>
    </div>
  `;this.#t(),this._parentElement.insertAdjacentHTML("afterbegin",r)}addHandlerRender(e){["hashchange","load"].forEach(t=>window.addEventListener(t,e))}#t(){this._parentElement.innerHTML=""}#e(){return`
    <figure class="recipe__fig">
          <img src="${this._data.image}" alt="${this._data.title}" class="recipe__img" />
          <h1 class="recipe__title"> <span>
          ${this._data.title}</span>
          </h1>
        </figure>

        <div class="recipe__details">
          <div class="recipe__info">
            <svg class="recipe__info-icon">
              <use href="${e(c)}#icon-clock"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--minutes">${this._data.cookTime}</span>
            <span class="recipe__info-text">minutes</span>
          </div>

          <div class="recipe__info">
            <svg class="recipe__info-icon">
              <use href="${e(c)}#icon-users"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>
            <span class="recipe__info-text">servings</span>

            <div class="recipe__info-buttons">
              <button class="btn--tiny btn--increase-servings">
                <svg>
                  <use href="${e(c)}#icon-minus-circle"></use>
                </svg>
              </button>
              <button class="btn--tiny btn--increase-servings">
                <svg>
                  <use href="${e(c)}#icon-plus-circle"></use>
                </svg>
              </button>
            </div>
          </div>

          <div class="recipe__user-generated">
            <svg>
              <use href="${e(c)}#icon-user"></use>
            </svg>
          </div>
          <button class="btn--round">
            <svg class="">
              <use href="${e(c)}#icon-bookmark-fill"></use>
            </svg>
          </button>
        </div>

        <div class="recipe__ingredients">
          <h2 class="heading--2">Recipe ingredients</h2>
          <ul class="recipe__ingredient-list">${this._data.ingredients.map(t=>`
            <li class="recipe__ingredient">
            <svg class="recipe__icon">
                <use href="${e(c)}#icon-check"></use>
              </svg>
            <div class="recipe__quantity">${t.quantity?e(l)(t.quantity).toString():""}</div>
            <div class="recipe__description">
             <span class="recipe__unit">${t.unit}</span>
             ${t.description}
              </div>
            </li> `).join("")}
            </ul>
            </div>

        
        <div class="recipe__directions">
          <h2 class="heading--2">How to cook it</h2>
          <p class="recipe__directions-text">
            This recipe was carefully designed and tested by
            <span class="recipe__publisher">${this._data.publisher}</span>. Please check out
            directions at their website.
          </p>
          <a
            class="btn--small recipe__btn"
            href="${this._data.sourceUrl}" target="_blank">
            <span>Directions</span>
            <svg class="search__icon">
              <use href="${e(c)}#icon-arrow-right"></use>
            </svg>
          </a>
        </div>
        `}}var p=new d;class g{_parentEl=document.querySelector(".search");getQuery(){let e=this._parentEl.querySelector(".search__field").value;return this.#r(),e}#r(){this._parentEl.querySelector(".search__field").value=""}addHandlerSearch(e){this._parentEl.addEventListener("submit",function(t){t.preventDefault(),e()})}}var h=new g;class _ extends u{_parentElement=document.querySelector(".results");_errorMessage="No se encontraron recetas. ¡Intenta otra búsqueda!";_message="";_generateMarkup(){return this._data.map(this._generateMarkupPreview).join("")}_generateMarkupPreview(t){return`
      <li class="preview">
        <a class="preview__link" href="#${t.id}">
          <figure class="preview__fig">
            <img src="${t.image}" alt="${t.title}" />
          </figure>
          <div class="preview__data">
            <h4 class="preview__title">${t.title}</h4>
            <p class="preview__publisher">${t.publisher}</p>
            <div class="preview__user-generated">
              <svg>
                <use href="${e(c)}#icon-user"></use>
              </svg>
            </div>
          </div>
        </a>
      </li>
    `}}var v=new _;class f extends u{_parentElement=document.querySelector(".pagination");addHandlerClick(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest(".btn--inline");if(!r)return;let s=+r.dataset.goto;console.log(s),e(s)})}_generateMarkup(){let t=this._data.page,r=Math.ceil(this._data.results.length/this._data.resultsPerPage);return 1===t&&r>1?`
        <button data-goto="${t+1}" class="btn--inline pagination__btn--next">
          <span>Page ${t+1}</span>
          <svg class="search__icon">
            <use href="${e(c)}#icon-arrow-right"></use>
          </svg>
        </button>
      `:t===r&&r>1?`
        <button data-goto="${t-1}" class="btn--inline pagination__btn--prev">
          <svg class="search__icon">
            <use href="${e(c)}#icon-arrow-left"></use>
          </svg>
          <span>Page ${t-1}</span>
        </button>
      `:t<r?`
        <button data-goto="${t-1}" class="btn--inline pagination__btn--prev">
          <svg class="search__icon">
            <use href="${e(c)}#icon-arrow-left"></use>
          </svg>
          <span>Page ${t-1}</span>
        </button>
        <button data-goto="${t+1}" class="btn--inline pagination__btn--next">
          <span>Page ${t+1}</span>
          <svg class="search__icon">
            <use href="${e(c)}#icon-arrow-right"></use>
          </svg>
        </button>
      `:""}}var $=new f;const m=async function(){try{let e=window.location.hash.slice(1);if(!e)return;p.renderSpinner(),await n(e),p.render(s.recipe)}catch(e){p.renderError()}},b=async function(e){try{let e=h.getQuery();if(!e)return;v.renderSpinner(),await i(e),v.render(a()),$.render(s.search)}catch(e){console.log("hay error",e)}};p.addHandlerRender(m),h.addHandlerSearch(b),$.addHandlerClick(function(e){v.render(a(e)),$.render(s.search)});
//# sourceMappingURL=forkify.449bd4a7.js.map
