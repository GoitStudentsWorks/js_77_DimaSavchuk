!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequire2391;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){o[e]=t},t.parcelRequire2391=r);var l=r("7dm53"),c=r("ebCjK"),a=r("bpxeT"),i=r("2TvXO"),s=(l=r("7dm53"),r("6JpON")),u={bestSellersGalery:document.querySelector(".bestsellers")};function d(){return f.apply(this,arguments)}function f(){return(f=e(a)(e(i).mark((function t(){return e(i).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:try{(0,l.topBooksRequest)().then((function(t){0!==t.length&&void 0!==t?u.bestSellersGalery.insertAdjacentHTML("beforeend",g(t)):e(s).Notify.failure("Sorry, we didn't find anything according to your request.")})).catch((function(e){return console.log(e)}))}catch(e){console.log(e.message)}case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function h(){return(h=e(a)(e(i).mark((function t(n){var o;return e(i).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("BUTTON"===n.target.nodeName){t.next=2;break}return t.abrupt("return");case 2:o=n.target.name;try{(0,l.categoryRequest)(o).then((function(t){0!==t.length&&void 0!==t?(u.bestSellersGalery.innerHTML="",m(t,o)):e(s).Notify.failure("Sorry, we didn't find anything according to your request.")})).catch((function(e){return console.log(e)}))}catch(e){console.log(e.message)}case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function g(e){return e.map((function(e){var t=e.list_name,n=e.books;return'<div class="bestsellers-card">\n            <h2 class="bestsellers-title-book">'.concat(t,'</h2>\n            <ul class="bestsellers-list">\n            ').concat(y(n),'\n                </ul>\n                <button class="bestsellers-btn" name="').concat(t,'" type="button">See more</button>\n            </div>')})).join("")}function y(e){return e.map((function(e){var t=e._id,n=e.book_image,o=e.title,r=e.author;return' \n      <li class="bestsellers-card-item" id="'.concat(t,'">\n      <a href="" class="bestsellers-link project-transit" id="').concat(t,'"> \n        \x3c!-- box-menu --\x3e\n        <div class="bestsellers-box-menu">\n            <p class = "bestsellers-overlay" id="').concat(t,'">Quick View</p>  \n            <img class="gallery__image" src="').concat(n,'" alt="').concat(o,'" id="').concat(t,'">\n            </div>\n         \x3c!-- box-menu --\x3e\n         <div class="text-box">\n          <h3 class="book-name" id="').concat(t,'">').concat(o,' </h3>\n          <p class="author" id="').concat(t,'">').concat(r,"</p>\n          </div>\n          </a>\n         </li>\n        ")})).join("")}function m(e,t){u.bestSellersGalery.innerHTML='<h2 class="bestsellers-title">'.concat(b(t),'</h2>\n                  <div class="bestsellers-category-item" name="').concat(t,'">\n                  <ul class="category-book-list">\n                 ').concat(y(e),"\n                  </ul>\n                  </div>")}function b(e){var t=e.trim().split(" "),n=t[t.length-1];return t.slice(0,t.length-1).join(" ")+' <span class="bestsellers-title-span">'.concat(n,"</span>")}window.addEventListener("DOMContentLoaded",d),u.bestSellersGalery.addEventListener("click",(function(e){return h.apply(this,arguments)})),window.addEventListener("resize",(function(){var e=Array.from(document.querySelectorAll(".bestsellers-list"));window.innerWidth<768&&e.forEach((function(e){for(var t=0;t<e.children.length;t+=1)e.children[t].hidden=0!==t}));window.innerWidth>=768&&window.innerWidth<1440&&e.forEach((function(e){for(var t=0;t<e.children.length;t+=1)e.children[t].hidden=!(t<=2)}));window.innerWidth>=1440&&e.forEach((function(e){for(var t=0;t<e.children.length;t+=1)e.children[t].hidden=!1}))})),window.addEventListener("DOMContentLoaded",(function(e){document.querySelector(".layout").classList.add("is-loading"),Promise.all([(0,c.authCheck)(),(0,l.topBooksRequest)(),d()]).then((function(){var e=document.querySelector(".js-loading"),t=document.querySelector(".layout");e.classList.add("loading-overlay-hide"),t.classList.remove("is-loading")}))})),r("ebCjK"),r("i8Q71");l=r("7dm53"),s=r("6JpON");var p=document.querySelector(".category-list"),v=document.querySelector(".bestsellers-title"),k=document.querySelector(".bestsellers");function E(t){t.preventDefault();var n=t.target;if(n.classList.contains("category-link")){var o=n.textContent;if(document.querySelectorAll(".category-item").forEach((function(e){e.classList.remove("active")})),n.parentNode.classList.add("active"),"All categories"==n.textContent)location.reload();else{v.innerHTML="".concat(b(o));try{(0,l.categoryRequest)(o).then((function(t){0!==t.length&&void 0!==t?(k.innerHTML="",m(t,o)):e(s).Notify.failure("Sorry, we didn't find anything according to your request.")})).catch((function(e){return console.log(e)}))}catch(e){console.log(e.message)}}}}r("xpKCW"),r("7hKzD"),r("5ZpUA"),fetch("https://books-backend.p.goit.global/books/category-list").then((function(e){return e.json()})).then((function(e){var t=[],n=!0,o=!1,r=void 0;try{for(var l,c=e[Symbol.iterator]();!(n=(l=c.next()).done);n=!0){var a=l.value.list_name;t.push(a)}}catch(e){o=!0,r=e}finally{try{n||null==c.return||c.return()}finally{if(o)throw r}}var i=t.map((function(e){return'<li class="category-item">\n        <a class="category-link" href="#">'.concat(e,"</a>\n        </li>")})).join("");p.insertAdjacentHTML("beforeend",i),p.addEventListener("click",E)})).catch((function(e){console.error("Сталася помилка при запиті:",e)}));var S={bodyEl:document.querySelector(".main-js"),headerEl:document.querySelector(".header-section"),headerNavLinkEl:document.querySelector(".shopping"),logoLightEl:document.querySelector(".light_icon"),logoDarkEl:document.querySelector(".dark_icon"),titleEl:document.querySelector(".bestsellers-title"),jsCategoryListEl:document.querySelector(".js-category-list"),footerEl:document.querySelector(".footer-js"),logoFooterLightEl:document.querySelector(".light_icon_footer"),logoFooterDarkEl:document.querySelector(".dark_icon_footer"),bookNameEl:document.querySelector(".bestsellers"),aboutTeamEL:document.querySelector(".about-team-window"),aboutBookModalEl:document.querySelector(".about-book-modal")},L=[S.bodyEl,S.headerEl,S.headerNavLinkEl,S.logoLightEl,S.logoDarkEl,S.titleEl,S.jsCategoryListEl,S.footerEl,S.logoFooterLightEl,S.logoFooterDarkEl,S.bookNameEl,S.aboutTeamEL,S.aboutBookModalEl],q=document.querySelector(".js-switch-theme"),w="dark-theme";q.addEventListener("click",(function(){if(L.map((function(e){return e.classList.toggle("dark-theme")})),"true"===localStorage.getItem(w))return void localStorage.removeItem(w);localStorage.setItem(w,!0)})),localStorage.getItem(w)&&(q.setAttribute("checked",!0),L.map((function(e){return e.classList.add("dark-theme")})))}();
//# sourceMappingURL=index.2eb4ca5f.js.map
