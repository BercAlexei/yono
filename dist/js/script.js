/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/func.js":
/*!********************************!*\
  !*** ./src/js/modules/func.js ***!
  \********************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ changeSize; }
/* harmony export */ });
/* harmony import */ var _services_getResourse_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../services/getResourse.js */ "./src/js/services/getResourse.js");
/* harmony import */ var _services_createSize_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../services/createSize.js */ "./src/js/services/createSize.js");




async function changeSize() {
  const setSize = document.querySelector('.promo__size'),
        priceSpan = document.querySelector('.promo__price span');
  let hero = await (0,_services_getResourse_js__WEBPACK_IMPORTED_MODULE_0__.getResource)('db.json').then(res => res.Hero);
  hero.forEach(({
    size
  }) => {
    new _services_createSize_js__WEBPACK_IMPORTED_MODULE_1__.CreateSize(size).render();
  });
  const sizeChecked = setSize.querySelectorAll('input')[0];
  let sizeLabel = `${sizeChecked.getAttribute('id')}`;
  sizeChecked.checked = true;

  function filterArrHero() {
    hero.filter(({
      price,
      size
    }) => {
      if (size === sizeLabel) {
        priceSpan.innerHTML = `${price}`;
      }
    });
  }

  filterArrHero();
  setSize.addEventListener('click', event => {
    if (event.target.getAttribute('data-size') !== '' && event.target.tagName == 'LABEL') {
      sizeLabel = event.target.getAttribute('data-size');
      filterArrHero();
    }
  });
}

/***/ }),

/***/ "./src/js/services/createSize.js":
/*!***************************************!*\
  !*** ./src/js/services/createSize.js ***!
  \***************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateSize": function() { return /* binding */ CreateSize; }
/* harmony export */ });
class CreateSize {
  constructor(size) {
    this.size = size;
  }

  render() {
    const setSize = document.querySelector('.promo__size');
    let sizeLabel = document.createElement('div');
    sizeLabel.style.display = 'inline-block';
    sizeLabel.innerHTML = `
            <input name='size' id=${this.size} type="radio">
            <label data-size=${this.size} for=${this.size}>${this.size}</label>
        `;
    setSize.append(sizeLabel);
  }

}



/***/ }),

/***/ "./src/js/services/getResourse.js":
/*!****************************************!*\
  !*** ./src/js/services/getResourse.js ***!
  \****************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getResource": function() { return /* binding */ getResource; }
/* harmony export */ });
const getResource = async url => {
  let res = await fetch(url);
  return await res.json(res => res);
};



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!***************************!*\
  !*** ./src/js/_script.js ***!
  \***************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_func_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/func.js */ "./src/js/modules/func.js");



document.addEventListener('DOMContentLoaded', () => {
  (0,_modules_func_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
});
}();
/******/ })()
;
//# sourceMappingURL=script.js.map