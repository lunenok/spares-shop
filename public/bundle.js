/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_menu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/menu.js */ "./src/js/menu.js");
/* harmony import */ var _js_menu_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_js_menu_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _less_style_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./less/style.less */ "./src/less/style.less");
/* harmony import */ var _less_style_less__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_less_style_less__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _js_scrolls_chair_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/scrolls/chair.js */ "./src/js/scrolls/chair.js");
/* harmony import */ var _js_scrolls_chair_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_js_scrolls_chair_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _js_scrolls_review_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/scrolls/review.js */ "./src/js/scrolls/review.js");
/* harmony import */ var _js_scrolls_sale_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/scrolls/sale.js */ "./src/js/scrolls/sale.js");







/***/ }),

/***/ "./src/js/menu.js":
/*!************************!*\
  !*** ./src/js/menu.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

const menuButton = document.querySelector('.navigation__button');
const navigation = document.querySelector('.navigation');

menuButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  const menuButtonContainer = menuButton.querySelector('.nav-button');
  const isClosed = menuButtonContainer.classList.contains('nav-button--close')
  navigation.classList.toggle('navigation--open');
  if (isClosed) {
    menuButtonContainer.classList.add('nav-button--open');
    menuButtonContainer.classList.remove('nav-button--close');
  } else {
    menuButtonContainer.classList.remove('nav-button--open');
    menuButtonContainer.classList.add('nav-button--close');
  }
});


/***/ }),

/***/ "./src/js/scrolls/chair.js":
/*!*********************************!*\
  !*** ./src/js/scrolls/chair.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

const scrollItems = document.querySelectorAll(`.swiper__item`);
const scrollButtons = document.querySelectorAll(`.swiper__slider-button`);

function setMainButtonChecked(buttons ,index) {
  buttons.forEach((item, i) => {
    item.classList.remove(`swiper__slider-button--active`);
    if (i === index) {
      item.classList.add(`swiper__slider-button--active`);
    }
  })
}

scrollButtons.forEach((button, index) => {

  button.addEventListener(`click`, (evt) => {
    const currentPosition = evt.target.dataset.buttonId;
    const movePosition = currentPosition - 1;

    scrollItems.forEach((item) => {
      item.style.transform = `translateX(-${100 * movePosition}%)`;
    });

    setMainButtonChecked(scrollButtons, index);
  })

});


/***/ }),

/***/ "./src/js/scrolls/review.js":
/*!**********************************!*\
  !*** ./src/js/scrolls/review.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ "./src/js/scrolls/utils.js");


const REVIEW_ITEM_COUNT = 4;
const reviewIndicators = document.querySelectorAll('.reviews__slider-button');
const reviewScroller = document.querySelector('.reviews-container');
const backButton = document.querySelector(`.reviews__button--back`);
const forwardButton = document.querySelector(`.reviews__button--forward`)

function setReviewButtonChecked(buttons ,index) {
  buttons.forEach((item, i) => {
    item.classList.remove(`reviews__slider-button--active`);
    if (i === index) {
      item.classList.add(`reviews__slider-button--active`);
    }
  })
}

forwardButton.addEventListener('click', e => {
  e.preventDefault();
  const itemWidth = reviewScroller.scrollWidth / REVIEW_ITEM_COUNT;
  const currentPosition = reviewScroller.scrollLeft;
  const scrollLeft = currentPosition + itemWidth;
  Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["smoothScroll"])(reviewScroller, scrollLeft, true);
});

backButton.addEventListener('click', e => {
  e.preventDefault();
  const itemWidth = reviewScroller.scrollWidth / REVIEW_ITEM_COUNT;
  const currentPosition = reviewScroller.scrollLeft;
  const scrollLeft = currentPosition - itemWidth;
  Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["smoothScroll"])(reviewScroller, scrollLeft, true);
});

reviewIndicators.forEach((indicator, i) => {
  indicator.addEventListener('click', e => {
    e.preventDefault();
    e.stopPropagation();
    const scrollLeft = Math.floor(reviewScroller.scrollWidth * (i / REVIEW_ITEM_COUNT));
    Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["smoothScroll"])(reviewScroller, scrollLeft, true);
  })
});

reviewScroller.addEventListener('scroll', Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["debounce"])(() => {
  let index = Math.round((reviewScroller.scrollLeft / reviewScroller.scrollWidth) * REVIEW_ITEM_COUNT);
  setReviewButtonChecked(reviewIndicators, index);
}, 50))


/***/ }),

/***/ "./src/js/scrolls/sale.js":
/*!********************************!*\
  !*** ./src/js/scrolls/sale.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ "./src/js/scrolls/utils.js");


const SALE_ITEM_COUNT = 5;
const saleIndicators = document.querySelectorAll('.sale__slider-button')
const saleScroller  = document.querySelector('.sale__card-container')

function setButtonChecked(buttons ,index) {
  buttons.forEach((item, i) => {
    item.classList.remove(`sale__slider-button--active`);
    if (i === index) {
      item.classList.add(`sale__slider-button--active`);
    }
  })
}

saleIndicators.forEach((indicator, i) => {
  indicator.addEventListener('click', e => {
    e.preventDefault()
    e.stopPropagation()
    const scrollLeft = Math.floor(saleScroller.scrollWidth * (i / SALE_ITEM_COUNT))
    Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["smoothScroll"])(saleScroller , scrollLeft, true)
  })
})

saleScroller .addEventListener('scroll', Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["debounce"])(() => {
  let index = Math.round((saleScroller .scrollLeft / saleScroller .scrollWidth) * SALE_ITEM_COUNT)
  setButtonChecked(saleIndicators, index);
}, 50))


/***/ }),

/***/ "./src/js/scrolls/utils.js":
/*!*********************************!*\
  !*** ./src/js/scrolls/utils.js ***!
  \*********************************/
/*! exports provided: smoothScroll, debounce */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "smoothScroll", function() { return smoothScroll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "debounce", function() { return debounce; });
const easingOutQuint = (x, t, b, c, d) =>
  c * ((t = t / d - 1) * t * t * t * t + 1) + b

function smoothScrollPolyfill (node, key, target) {
  const startTime = Date.now()
  const offset = node[key]
  const gap = target - offset
  const duration = 1000
  let interrupt = false

  const step = () => {
    const elapsed = Date.now() - startTime
    const percentage = elapsed / duration

    if (interrupt) {
      return
    }

    if (percentage > 1) {
      cleanup()
      return
    }

    node[key] = easingOutQuint(0, elapsed, offset, gap, duration)
    requestAnimationFrame(step)
  }

  const cancel = () => {
    interrupt = true
    cleanup()
  }

  const cleanup = () => {
    node.removeEventListener('wheel', cancel)
    node.removeEventListener('touchstart', cancel)
  }

  node.addEventListener('wheel', cancel, { passive: true })
  node.addEventListener('touchstart', cancel, { passive: true })

  step()

  return cancel
}

function testSupportsSmoothScroll () {
  let supports = false
  try {
    let div = document.createElement('div')
    div.scrollTo({
      top: 0,
      get behavior () {
        supports = true
        return 'smooth'
      }
    })
  } catch (err) {} // Edge throws an error
  return supports
}

const hasNativeSmoothScroll = testSupportsSmoothScroll()

const smoothScroll = function (node, topOrLeft, horizontal) {
  if (hasNativeSmoothScroll) {
    return node.scrollTo({
      [horizontal ? 'left' : 'top']: topOrLeft,
      behavior: 'smooth'
    })
  } else {
    return smoothScrollPolyfill(node, horizontal ? 'scrollLeft' : 'scrollTop', topOrLeft)
  }
}

const debounce = function (func, ms) {
	let timeout
	return () => {
		clearTimeout(timeout)
		timeout = setTimeout(() => {
			timeout = null
      func()
		}, ms)
	}
}


/***/ }),

/***/ "./src/less/style.less":
/*!*****************************!*\
  !*** ./src/less/style.less ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map