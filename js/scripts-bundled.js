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
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/App.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/App.js":
/*!*******************!*\
  !*** ./js/App.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _Main = __webpack_require__(/*! ./modules/Main */ \"./js/modules/Main.js\");\n\nvar _Main2 = _interopRequireDefault(_Main);\n\nvar _Isotope = __webpack_require__(/*! ./modules/Isotope */ \"./js/modules/Isotope.js\");\n\nvar _Isotope2 = _interopRequireDefault(_Isotope);\n\nvar _Swiper = __webpack_require__(/*! ./modules/Swiper */ \"./js/modules/Swiper.js\");\n\nvar _Swiper2 = _interopRequireDefault(_Swiper);\n\nvar _Filtering = __webpack_require__(/*! ./modules/Filtering */ \"./js/modules/Filtering.js\");\n\nvar _Filtering2 = _interopRequireDefault(_Filtering);\n\nvar _Mail = __webpack_require__(/*! ./modules/Mail */ \"./js/modules/Mail.js\");\n\nvar _Mail2 = _interopRequireDefault(_Mail);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar main = new _Main2.default();\nvar isotope = new _Isotope2.default();\nvar slider = new _Swiper2.default();\nvar filtering = new _Filtering2.default();\nvar mail = new _Mail2.default();\n\n//# sourceURL=webpack:///./js/App.js?");

/***/ }),

/***/ "./js/modules/Filtering.js":
/*!*********************************!*\
  !*** ./js/modules/Filtering.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Filtering = function () {\n  function Filtering() {\n    _classCallCheck(this, Filtering);\n\n    this.loader = $('.products__loader');\n    this.products_layout = $('.products__right');\n    this.is_filter_running = false;\n\n    this.filter_data = {\n      category: [],\n      color: [],\n      size: [],\n      physical: [],\n      watts: [],\n      cct: [],\n      cri: []\n    };\n\n    this.filter_items = $('.filter__list li');\n    this.events();\n  }\n\n  _createClass(Filtering, [{\n    key: 'events',\n    value: function events() {\n      this.filter_items.on('click', this.filter_items_onClick.bind(this));\n    }\n\n    // filter list item on click\n\n  }, {\n    key: 'filter_items_onClick',\n    value: function filter_items_onClick(e) {\n      if (this.is_filter_running) return;\n\n      var target = $(e.target).is('li') ? $(e.target) : $(e.target).closest('li'),\n          filter_name = target.closest('.filter').attr('data-filter-name'),\n          filter_items = target.closest('.filter').find('li');\n\n      target.toggleClass('checked');\n\n      // unique functionality for categories\n      if (target.hasClass('category__parent')) {\n        target.hasClass('checked') ? target.find('.category__child').addClass('checked') : target.find('.category__child').removeClass('checked');\n      } else if (target.hasClass('category__child')) {\n        target.closest('.category__parent').removeClass('checked');\n      }\n\n      this.filter_data[filter_name] = [];\n      var $this = this;\n      filter_items.each(function () {\n        if ($(this).hasClass('checked')) $this.filter_data[filter_name].push($(this).attr('data-term'));\n      });\n\n      this.get_filtered_items();\n    }\n\n    // filtering process\n\n  }, {\n    key: 'get_filtered_items',\n    value: function get_filtered_items() {\n      var _this = this;\n\n      this.loader.addClass('visible');\n      this.is_filter_running = true;\n\n      var ajax_data = {\n        action: 'get_filtered_items',\n        class: this.products_layout.attr('data-class'),\n        category: this.filter_data.category,\n        size: this.filter_data.size,\n        physical: this.filter_data.physical,\n        watts: this.filter_data.watts,\n        cct: this.filter_data.cct,\n        cri: this.filter_data.cri,\n        color: this.filter_data.color\n      };\n\n      $.post(GoledData.admin_ajax, ajax_data, function (result) {\n        var result = JSON.parse(result);\n\n        if (result.products.length) {\n          _this.products_layout.html('\\n        ' + result.products.map(function (item) {\n            return '\\n            <a href=\"' + item.link + '\" class=\"item\">\\n            <div class=\"item__image\" style=\"background-image: url(' + item.image + ')\"></div>\\n            <div class=\"item__name\">' + item.title + '</div>\\n            </a>\\n            ';\n          }).join('') + '\\n        ');\n        } else {\n          _this.products_layout.html('<div class=\"nothing-found\">Nothing found, please try other parameters</div>');\n        }\n\n        _this.loader.removeClass('visible');\n        _this.is_filter_running = false;\n      });\n    }\n  }]);\n\n  return Filtering;\n}();\n\nexports.default = Filtering;\n\n//# sourceURL=webpack:///./js/modules/Filtering.js?");

/***/ }),

/***/ "./js/modules/Isotope.js":
/*!*******************************!*\
  !*** ./js/modules/Isotope.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Isotope = function () {\n  function Isotope() {\n    _classCallCheck(this, Isotope);\n\n    this.events();\n  }\n\n  _createClass(Isotope, [{\n    key: 'events',\n    value: function events() {\n      this.iniIsotope();\n    }\n  }, {\n    key: 'iniIsotope',\n    value: function iniIsotope() {\n      var $grid = $('.grid').isotope({\n        itemSelector: '.grid-item',\n        layoutMode: 'fitRows'\n      });\n\n      $('.projects__buttons button').on('click', function (e) {\n        $('.projects__buttons button').each(function (index, element) {\n          $(this).removeClass('active');\n        });\n        $(e.target).addClass('active');\n      });\n\n      // filter functions\n      var filterFns = {\n        // show if number is greater than 50\n        numberGreaterThan50: function numberGreaterThan50() {\n          var number = $(this).find('.number').text();\n          return parseInt(number, 10) > 50;\n        },\n        // show if name ends with -ium\n        ium: function ium() {\n          var name = $(this).find('.name').text();\n          return name.match(/ium$/);\n        }\n\n        // bind filter button click\n      };$('.projects__buttons').on('click', 'button', function () {\n        var filterValue = $(this).attr('data-filter');\n        // use filterFn if matches value\n        filterValue = filterFns[filterValue] || filterValue;\n        $grid.isotope({ filter: filterValue });\n      });\n    }\n  }]);\n\n  return Isotope;\n}();\n\nexports.default = Isotope;\n\n//# sourceURL=webpack:///./js/modules/Isotope.js?");

/***/ }),

/***/ "./js/modules/Mail.js":
/*!****************************!*\
  !*** ./js/modules/Mail.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Mail = function () {\n  function Mail() {\n    _classCallCheck(this, Mail);\n\n    this.submit_btn = $('#main-form button[type=submit]');\n    this.is_email_sending = false;\n    this.events();\n  }\n\n  _createClass(Mail, [{\n    key: 'events',\n    value: function events() {\n      this.submit_btn.on('click', this.submit_btn_onClick.bind(this));\n    }\n  }, {\n    key: 'submit_btn_onClick',\n    value: function submit_btn_onClick(e) {\n      var _this = this;\n\n      e.preventDefault();\n\n      if (this.is_email_sending) {\n        console.log('Email is sending...');\n        return;\n      }\n\n      var submit_btn = $(e.target),\n          submit_btn_text = submit_btn.text(),\n          form = submit_btn.closest('form');\n\n      var ajax_data = {\n        action: 'send_mail',\n        name: form.find('input[name=name]').val(),\n        email: form.find('input[name=email]').val(),\n        message: form.find('textarea[name=message]').val()\n\n        // validation\n      };if (ajax_data.email && !validate_email(ajax_data.email)) ajax_data.email = 'invalid';\n\n      // check inputs (might be invalid or empty)\n      if (!ajax_data.name || !ajax_data.email || ajax_data.email == 'invalid') {\n        check_input(form.find('input[name=name]'), ajax_data.name, true);\n        check_input(form.find('input[name=email]'), ajax_data.email, true);\n        check_input(form.find('textarea[name=message]'), ajax_data.message);\n        return;\n      }\n\n      form.find('input').removeClass('error');\n\n      submit_btn.text('Sending...');\n      this.is_email_sending = true;\n\n      $.post(GoledData.admin_ajax, ajax_data, function (result) {\n        setTimeout(function () {\n          // clean all inputs\n          submit_btn.text(result);\n          if (result == 'Success') form.find('input:not([type=submit])').each(function (index) {\n            $(this).val('');\n          });\n          form.find('textarea').val('');\n          _this.is_email_sending = false;\n\n          setTimeout(function () {\n            submit_btn.text(submit_btn_text);\n          }, 2000);\n        }, 2000);\n      });\n\n      // check if input isn't empty or invalid after submit\n      function check_input(input, input_value) {\n        var required = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;\n\n        if (required && !input_value || input_value == 'invalid') {\n          input.addClass('error');\n        } else {\n          input.removeClass('error');\n        }\n      }\n\n      // validator for email\n      function validate_email(email) {\n        return email.match(/\\S+@\\S+\\.\\S+/) != null;\n      }\n    }\n  }]);\n\n  return Mail;\n}();\n\nexports.default = Mail;\n\n//# sourceURL=webpack:///./js/modules/Mail.js?");

/***/ }),

/***/ "./js/modules/Main.js":
/*!****************************!*\
  !*** ./js/modules/Main.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Main = function () {\n  function Main() {\n    _classCallCheck(this, Main);\n\n    this.filter_name = $('.filter .filter__name');\n    this.is_filter_processing = false;\n    this.tab_button = $('.product-tabs .tabs li');\n    this.product_filters = $('.products__left');\n    this.events();\n  }\n\n  _createClass(Main, [{\n    key: 'events',\n    value: function events() {\n      $(document).ready(this.document_onReady.bind(this));\n      $(window).on('load', this.window_onLoad);\n      this.filter_name.on('click', this.filter_name_onClick);\n      this.tab_button.on('click', this.tab_button_onClick.bind(this));\n    }\n  }, {\n    key: 'window_onLoad',\n    value: function window_onLoad() {\n      // remove preloader\n      setTimeout(function () {\n        $('.body__loader').removeClass('visible');\n\n        // wow animation\n        if ($(window).outerWidth() > 992) new WOW().init();\n      }, 200);\n\n      // spy scroll\n      if ($('body').hasClass('front-page')) $(window).scroll(function () {\n        var scrollpos = $(window).scrollTop();\n        if (scrollpos <= 0) $('.navbar__nav li a.active').removeClass('active');\n        $('section').not('.ego').each(function (i) {\n          if ($(this).position().top <= scrollpos + 200) {\n            $('.navbar__nav li a.active').removeClass('active');\n            $('.navbar__nav li a').eq(i).addClass('active');\n          }\n        });\n      });\n    }\n  }, {\n    key: 'document_onReady',\n    value: function document_onReady() {\n      var _this = this;\n\n      // fixed navbar on scroll\n      if ($(window).outerWidth() > 992) {\n        if ($(window).scrollTop() > 0) {\n          $('.header').addClass('scrolled');\n        }\n\n        $(window).scroll(function (e) {\n          $(window).scrollTop() > 0 ? $('.header').addClass('scrolled') : $('.header').removeClass('scrolled');\n        });\n      }\n\n      // mobile menu toggle\n      $('.header .mobile-menu').on('click', function () {\n        $('.navbar__nav').slideToggle();\n      });\n\n      // products filter menu\n      $('.products__filter-icon').on('click', function () {\n        _this.product_filters.addClass('visible');\n        $('body').addClass('inactive');\n      });\n\n      // filter toggler on mobile\n      $('body, html').on('click', function (e) {\n        var filter_btn_clicked = $(e.target).hasClass('products__filter-icon') || $(e.target).parent().hasClass('products__filter-icon') ? true : false;\n        if (!$(e.target).closest('.products__left').length && _this.product_filters.hasClass('visible') && !filter_btn_clicked && !_this.is_filter_processing) {\n          _this.product_filters.removeClass('visible');\n          $('body').removeClass('inactive');\n        }\n      });\n    }\n  }, {\n    key: 'tab_button_onClick',\n    value: function tab_button_onClick(e) {\n      this.tab_button.removeClass('active');\n      $('.tab-content').removeClass('active visible');\n\n      var tab_button = $(e.target),\n          tab_content = $(tab_button.attr('data-target'));\n\n      tab_button.addClass('active');\n      tab_content.addClass('active');\n      setTimeout(function () {\n        tab_content.addClass('visible');\n      }, 100);\n    }\n\n    // filter slides on click\n\n  }, {\n    key: 'filter_name_onClick',\n    value: function filter_name_onClick(e) {\n      $(e.target).toggleClass('active').siblings('.filter__list').slideToggle('fast');\n    }\n  }]);\n\n  return Main;\n}();\n\nexports.default = Main;\n\n//# sourceURL=webpack:///./js/modules/Main.js?");

/***/ }),

/***/ "./js/modules/Swiper.js":
/*!******************************!*\
  !*** ./js/modules/Swiper.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Slider = function () {\n  function Slider() {\n    _classCallCheck(this, Slider);\n\n    this.events();\n  }\n\n  _createClass(Slider, [{\n    key: 'events',\n    value: function events() {\n      this.ini_swiper();\n    }\n  }, {\n    key: 'ini_swiper',\n    value: function ini_swiper() {\n      var galleryThumbs = new Swiper('.gallery-thumbs', {\n        spaceBetween: 10,\n        slidesPerView: 3,\n        // freeMode: true,\n        direction: 'vertical',\n        loopedSlides: 2, //looped slides should be the same\n        watchSlidesVisibility: true,\n        watchSlidesProgress: true,\n        breakpoints: {\n          767: _defineProperty({\n            slidesPerView: 2,\n            spaceBetween: 20,\n            direction: 'horizontal'\n          }, 'spaceBetween', 24),\n          992: _defineProperty({\n            slidesPerView: 3,\n            spaceBetween: 20,\n            direction: 'horizontal'\n          }, 'spaceBetween', 24)\n        }\n      });\n      var galleryTop = new Swiper('.gallery-top', {\n        spaceBetween: 10,\n        loopedSlides: 2, //looped slides should be the same\n        thumbs: {\n          swiper: galleryThumbs\n        }\n      });\n    }\n  }]);\n\n  return Slider;\n}();\n\nexports.default = Slider;\n\n//# sourceURL=webpack:///./js/modules/Swiper.js?");

/***/ })

/******/ });