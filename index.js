/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/app/app.js":
/*!***********************************!*\
  !*** ./src/components/app/app.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var _app_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.scss */ \"./src/components/app/app.scss\");\n/* harmony import */ var _input_area_input_area__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../input-area/input-area */ \"./src/components/input-area/input-area.js\");\n/* harmony import */ var _keyboard_keyboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../keyboard/keyboard */ \"./src/components/keyboard/keyboard.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\n\n\n\nvar keyList = __webpack_require__(/*! ./keys.json */ \"./src/components/app/keys.json\");\nvar App = /*#__PURE__*/function () {\n  function App() {\n    _classCallCheck(this, App);\n    this.app = document.createElement('div');\n    this.app.className = 'app';\n    var inputAreaObj = new _input_area_input_area__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n    var inputArea = inputAreaObj.inputArea;\n    this.app.appendChild(inputArea);\n    var keyboardObj = new _keyboard_keyboard__WEBPACK_IMPORTED_MODULE_2__[\"default\"](keyList);\n    var keyboard = keyboardObj.keyboard;\n    this.app.appendChild(keyboard);\n    var buttons = keyboard.querySelectorAll('.key__button');\n    var letters = keyboard.querySelectorAll('[data-key-code*=\"Key\"]');\n    var capsMode = false;\n    function keyActivator(btns) {\n      var shift = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;\n      btns.forEach(function (btn) {\n        var btnValus = btn.querySelectorAll('.key__value');\n        btnValus.forEach(function (value) {\n          value.classList.remove('key__value_active');\n        });\n        if (shift) {\n          btn.querySelector('.key__value-en-shift').classList.add('key__value_active');\n        } else {\n          btn.querySelector('.key__value-en-default').classList.add('key__value_active');\n        }\n      });\n    }\n    function keyHandler(keyItem, event) {\n      if (keyItem.code === 'ShiftLeft' || keyItem.code === 'ShiftRight') {\n        keyActivator(buttons, event.shiftKey);\n      } else if (event.shiftKey) {\n        inputAreaObj.setValue(keyItem.key.en.shift);\n      } else if (keyItem.code === 'ControlLeft' || keyItem.code === 'ControlRight') {\n        //\n      } else if (keyItem.code === 'AltLeft' || keyItem.code === 'AltRight') {\n        //\n      } else if (keyItem.code === 'MetaLeft') {\n        //\n      } else if (keyItem.code === 'CapsLock') {\n        capsMode = !capsMode;\n        keyActivator(letters, capsMode);\n      } else if (keyItem.code === 'Backspace') {\n        //\n      } else if (keyItem.code === 'Space') {\n        inputAreaObj.setValue(' ');\n      } else if (keyItem.code === 'Tab') {\n        inputAreaObj.setValue('  ');\n      } else if (keyItem.code === 'Enter') {\n        inputAreaObj.setValue('\\n');\n      } else {\n        inputAreaObj.setValue(keyItem.key.en[\"default\"]);\n      }\n    }\n    window.addEventListener('keydown', function (event) {\n      event.preventDefault();\n      keyList.forEach(function (keyItem) {\n        if (keyItem.code === event.code) {\n          keyHandler(keyItem, event);\n        }\n      });\n      var key = keyboard.querySelector(\"[data-key-code=\\\"\".concat(event.code, \"\\\"]\"));\n      if (key) {\n        key.classList.add('key__button_active');\n      }\n    });\n    window.addEventListener('keyup', function (event) {\n      event.preventDefault();\n      if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {\n        keyActivator(buttons, event.shiftKey);\n      }\n      buttons.forEach(function (button) {\n        button.classList.remove('key__button_active');\n      });\n    });\n    keyboard.addEventListener('mousedown', function (event) {\n      event.preventDefault();\n      var btn = event.target.closest('.key__button');\n      var _ref = btn ? btn.dataset : '',\n        keyCode = _ref.keyCode;\n      keyList.forEach(function (keyItem) {\n        if (keyItem.code === keyCode) {\n          keyHandler(keyItem, event);\n        }\n      });\n    });\n    keyboard.addEventListener('mouseup', function (event) {\n      event.preventDefault();\n      buttons.forEach(function (button) {\n        button.classList.remove('key__button_active');\n      });\n    });\n  }\n  _createClass(App, [{\n    key: \"App\",\n    get: function get() {\n      return this.app;\n    }\n  }]);\n  return App;\n}();\n\n\n//# sourceURL=webpack://virtual-keyboard/./src/components/app/app.js?");

/***/ }),

/***/ "./src/components/input-area/input-area.js":
/*!*************************************************!*\
  !*** ./src/components/input-area/input-area.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ InputArea)\n/* harmony export */ });\n/* harmony import */ var _input_area_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./input-area.scss */ \"./src/components/input-area/input-area.scss\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\n\nvar InputArea = /*#__PURE__*/function () {\n  function InputArea() {\n    _classCallCheck(this, InputArea);\n    this.inputArea = document.createElement('div');\n    this.inputArea.className = 'input-area';\n    this.inputTextarea = document.createElement('textarea');\n    this.inputTextarea.className = 'input-area__textarea';\n    this.inputTextarea.setAttribute('autofocus', '');\n    this.inputArea.appendChild(this.inputTextarea);\n  }\n  _createClass(InputArea, [{\n    key: \"setValue\",\n    value: function setValue(key) {\n      var temp = this.inputTextarea.value;\n      this.inputTextarea.value = temp + key;\n    }\n  }, {\n    key: \"InputArea\",\n    get: function get() {\n      return this.InputArea;\n    }\n  }]);\n  return InputArea;\n}();\n\n\n//# sourceURL=webpack://virtual-keyboard/./src/components/input-area/input-area.js?");

/***/ }),

/***/ "./src/components/key/key.js":
/*!***********************************!*\
  !*** ./src/components/key/key.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Key)\n/* harmony export */ });\n/* harmony import */ var _key_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./key.scss */ \"./src/components/key/key.scss\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\n\nvar Key = /*#__PURE__*/function () {\n  function Key(keyItem) {\n    _classCallCheck(this, Key);\n    this.key = document.createElement('li');\n    this.key.className = 'key keyboard__item';\n    var keyButton = document.createElement('button');\n    keyButton.className = 'key__button';\n    keyButton.dataset.keyCode = keyItem.code;\n    var template = \"\\n    <span class=\\\"key__value key__value-en-default key__value_active\\\">\".concat(keyItem.key.en[\"default\"], \"</span>\\n    <span class=\\\"key__value key__value-en-shift\\\">\").concat(keyItem.key.en.shift, \"</span>\\n    <span class=\\\"key__value key__value-ru-default\\\">\").concat(keyItem.key.ru[\"default\"], \"</span>\\n    <span class=\\\"key__value key__value-ru-shift\\\">\").concat(keyItem.key.ru.shift, \"</span>\");\n    keyButton.innerHTML = template;\n    this.key.appendChild(keyButton);\n  }\n  _createClass(Key, [{\n    key: \"Key\",\n    get: function get() {\n      return this.key;\n    }\n  }]);\n  return Key;\n}();\n\n\n//# sourceURL=webpack://virtual-keyboard/./src/components/key/key.js?");

/***/ }),

/***/ "./src/components/keyboard/keyboard.js":
/*!*********************************************!*\
  !*** ./src/components/keyboard/keyboard.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Keyboard)\n/* harmony export */ });\n/* harmony import */ var _keyboard_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./keyboard.scss */ \"./src/components/keyboard/keyboard.scss\");\n/* harmony import */ var _key_key__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../key/key */ \"./src/components/key/key.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\n\n\nvar Keyboard = /*#__PURE__*/function () {\n  function Keyboard(keyList) {\n    _classCallCheck(this, Keyboard);\n    this.keyboard = document.createElement('div');\n    this.keyboard.className = 'keyboard';\n    var keyboardList = document.createElement('ul');\n    keyboardList.className = 'keyboard__list';\n    keyList.forEach(function (keyItem) {\n      var keyObj = new _key_key__WEBPACK_IMPORTED_MODULE_1__[\"default\"](keyItem);\n      var key = keyObj.key;\n      keyboardList.appendChild(key);\n    });\n    this.keyboard.appendChild(keyboardList);\n  }\n  _createClass(Keyboard, [{\n    key: \"Keyboard\",\n    get: function get() {\n      return this.keyboard;\n    }\n  }]);\n  return Keyboard;\n}();\n\n\n//# sourceURL=webpack://virtual-keyboard/./src/components/keyboard/keyboard.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var normalize_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! normalize.css */ \"./node_modules/normalize.css/normalize.css\");\n/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.html */ \"./src/index.html\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ \"./src/style.scss\");\n/* harmony import */ var _components_app_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/app/app */ \"./src/components/app/app.js\");\n\n\n\n\nvar appObj = new _components_app_app__WEBPACK_IMPORTED_MODULE_3__[\"default\"]();\nvar app = appObj.app;\ndocument.getElementById('root').appendChild(app);\n\n//# sourceURL=webpack://virtual-keyboard/./src/main.js?");

/***/ }),

/***/ "./src/index.html":
/*!************************!*\
  !*** ./src/index.html ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ \"./node_modules/html-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./favicon.png */ \"./src/favicon.png\"), __webpack_require__.b);\n// Module\nvar ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);\nvar code = \"<!DOCTYPE html>\\r\\n<html lang=\\\"en\\\">\\r\\n<head>\\r\\n  <meta charset=\\\"UTF-8\\\">\\r\\n  <meta http-equiv=\\\"X-UA-Compatible\\\" content=\\\"IE=edge\\\">\\r\\n  <meta name=\\\"viewport\\\" content=\\\"width=860, initial-scale=1.0\\\">\\r\\n  <link rel=\\\"shortcut icon\\\" href=\\\"\" + ___HTML_LOADER_REPLACEMENT_0___ + \"\\\" type=\\\"image/x-icon\\\">\\r\\n  <title>Keyboard</title>\\r\\n</head>\\r\\n<body id=\\\"root\\\">\\r\\n</body>\\r\\n</html>\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack://virtual-keyboard/./src/index.html?");

/***/ }),

/***/ "./node_modules/html-loader/dist/runtime/getUrl.js":
/*!*********************************************************!*\
  !*** ./node_modules/html-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = String(url.__esModule ? url.default : url);\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  }\n\n  if (options.maybeNeedQuotes && /[\\t\\n\\f\\r \"'=<>`]/.test(url)) {\n    return \"\\\"\".concat(url, \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://virtual-keyboard/./node_modules/html-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/normalize.css/normalize.css":
/*!**************************************************!*\
  !*** ./node_modules/normalize.css/normalize.css ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://virtual-keyboard/./node_modules/normalize.css/normalize.css?");

/***/ }),

/***/ "./src/components/app/app.scss":
/*!*************************************!*\
  !*** ./src/components/app/app.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://virtual-keyboard/./src/components/app/app.scss?");

/***/ }),

/***/ "./src/components/input-area/input-area.scss":
/*!***************************************************!*\
  !*** ./src/components/input-area/input-area.scss ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://virtual-keyboard/./src/components/input-area/input-area.scss?");

/***/ }),

/***/ "./src/components/key/key.scss":
/*!*************************************!*\
  !*** ./src/components/key/key.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://virtual-keyboard/./src/components/key/key.scss?");

/***/ }),

/***/ "./src/components/keyboard/keyboard.scss":
/*!***********************************************!*\
  !*** ./src/components/keyboard/keyboard.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://virtual-keyboard/./src/components/keyboard/keyboard.scss?");

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://virtual-keyboard/./src/style.scss?");

/***/ }),

/***/ "./src/favicon.png":
/*!*************************!*\
  !*** ./src/favicon.png ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"img/favicon.png\";\n\n//# sourceURL=webpack://virtual-keyboard/./src/favicon.png?");

/***/ }),

/***/ "./src/components/app/keys.json":
/*!**************************************!*\
  !*** ./src/components/app/keys.json ***!
  \**************************************/
/***/ ((module) => {

eval("module.exports = JSON.parse('[{\"code\":\"Backquote\",\"key\":{\"en\":{\"default\":\"`\",\"shift\":\"~\"},\"ru\":{\"default\":\"ё\",\"shift\":\"Ё\"}}},{\"code\":\"Digit1\",\"key\":{\"en\":{\"default\":\"1\",\"shift\":\"!\"},\"ru\":{\"default\":\"1\",\"shift\":\"!\"}}},{\"code\":\"Digit2\",\"key\":{\"en\":{\"default\":\"2\",\"shift\":\"@\"},\"ru\":{\"default\":\"2\",\"shift\":\"\\\\\"\"}}},{\"code\":\"Digit3\",\"key\":{\"en\":{\"default\":\"3\",\"shift\":\"#\"},\"ru\":{\"default\":\"3\",\"shift\":\"№\"}}},{\"code\":\"Digit4\",\"key\":{\"en\":{\"default\":\"4\",\"shift\":\"$\"},\"ru\":{\"default\":\"4\",\"shift\":\";\"}}},{\"code\":\"Digit5\",\"key\":{\"en\":{\"default\":\"5\",\"shift\":\"%\"},\"ru\":{\"default\":\"5\",\"shift\":\"%\"}}},{\"code\":\"Digit7\",\"key\":{\"en\":{\"default\":\"7\",\"shift\":\"&\"},\"ru\":{\"default\":\"7\",\"shift\":\"?\"}}},{\"code\":\"Digit8\",\"key\":{\"en\":{\"default\":\"8\",\"shift\":\"*\"},\"ru\":{\"default\":\"8\",\"shift\":\"*\"}}},{\"code\":\"Digit9\",\"key\":{\"en\":{\"default\":\"9\",\"shift\":\"(\"},\"ru\":{\"default\":\"9\",\"shift\":\"(\"}}},{\"code\":\"Digit0\",\"key\":{\"en\":{\"default\":\"0\",\"shift\":\")\"},\"ru\":{\"default\":\"0\",\"shift\":\")\"}}},{\"code\":\"Minus\",\"key\":{\"en\":{\"default\":\"-\",\"shift\":\"_\"},\"ru\":{\"default\":\"-\",\"shift\":\"_\"}}},{\"code\":\"Equal\",\"key\":{\"en\":{\"default\":\"=\",\"shift\":\"+\"},\"ru\":{\"default\":\"=\",\"shift\":\"+\"}}},{\"code\":\"Backspace\",\"key\":{\"en\":{\"default\":\"Backspace\",\"shift\":\"Backspace\"},\"ru\":{\"default\":\"Backspace\",\"shift\":\"Backspace\"}}},{\"code\":\"Tab\",\"key\":{\"en\":{\"default\":\"Tab\",\"shift\":\"Tab\"},\"ru\":{\"default\":\"Tab\",\"shift\":\"Tab\"}}},{\"code\":\"KeyQ\",\"key\":{\"en\":{\"default\":\"q\",\"shift\":\"Q\"},\"ru\":{\"default\":\"й\",\"shift\":\"Й\"}}},{\"code\":\"KeyW\",\"key\":{\"en\":{\"default\":\"w\",\"shift\":\"W\"},\"ru\":{\"default\":\"ц\",\"shift\":\"Ц\"}}},{\"code\":\"KeyE\",\"key\":{\"en\":{\"default\":\"e\",\"shift\":\"E\"},\"ru\":{\"default\":\"у\",\"shift\":\"У\"}}},{\"code\":\"KeyR\",\"key\":{\"en\":{\"default\":\"r\",\"shift\":\"R\"},\"ru\":{\"default\":\"к\",\"shift\":\"К\"}}},{\"code\":\"KeyT\",\"key\":{\"en\":{\"default\":\"t\",\"shift\":\"T\"},\"ru\":{\"default\":\"е\",\"shift\":\"Е\"}}},{\"code\":\"KeyY\",\"key\":{\"en\":{\"default\":\"y\",\"shift\":\"Y\"},\"ru\":{\"default\":\"н\",\"shift\":\"Н\"}}},{\"code\":\"KeyU\",\"key\":{\"en\":{\"default\":\"u\",\"shift\":\"U\"},\"ru\":{\"default\":\"г\",\"shift\":\"Г\"}}},{\"code\":\"KeyI\",\"key\":{\"en\":{\"default\":\"i\",\"shift\":\"I\"},\"ru\":{\"default\":\"ш\",\"shift\":\"Ш\"}}},{\"code\":\"KeyO\",\"key\":{\"en\":{\"default\":\"o\",\"shift\":\"O\"},\"ru\":{\"default\":\"щ\",\"shift\":\"Щ\"}}},{\"code\":\"KeyP\",\"key\":{\"en\":{\"default\":\"p\",\"shift\":\"P\"},\"ru\":{\"default\":\"з\",\"shift\":\"З\"}}},{\"code\":\"BracketLeft\",\"key\":{\"en\":{\"default\":\"[\",\"shift\":\"{\"},\"ru\":{\"default\":\"х\",\"shift\":\"Х\"}}},{\"code\":\"BracketRight\",\"key\":{\"en\":{\"default\":\"]\",\"shift\":\"}\"},\"ru\":{\"default\":\"ъ\",\"shift\":\"Ъ\"}}},{\"code\":\"Backslash\",\"key\":{\"en\":{\"default\":\"\\\\\\\\\",\"shift\":\"|\"},\"ru\":{\"default\":\"\\\\\\\\\",\"shift\":\"/\"}}},{\"code\":\"Delete\",\"key\":{\"en\":{\"default\":\"Del\",\"shift\":\"Del\"},\"ru\":{\"default\":\"Del\",\"shift\":\"Del\"}}},{\"code\":\"CapsLock\",\"key\":{\"en\":{\"default\":\"CapsLock\",\"shift\":\"CapsLock\"},\"ru\":{\"default\":\"CapsLock\",\"shift\":\"CapsLock\"}}},{\"code\":\"KeyA\",\"key\":{\"en\":{\"default\":\"a\",\"shift\":\"A\"},\"ru\":{\"default\":\"ф\",\"shift\":\"Ф\"}}},{\"code\":\"KeyS\",\"key\":{\"en\":{\"default\":\"s\",\"shift\":\"S\"},\"ru\":{\"default\":\"ы\",\"shift\":\"Ы\"}}},{\"code\":\"KeyD\",\"key\":{\"en\":{\"default\":\"d\",\"shift\":\"D\"},\"ru\":{\"default\":\"в\",\"shift\":\"В\"}}},{\"code\":\"KeyF\",\"key\":{\"en\":{\"default\":\"f\",\"shift\":\"F\"},\"ru\":{\"default\":\"а\",\"shift\":\"А\"}}},{\"code\":\"KeyG\",\"key\":{\"en\":{\"default\":\"g\",\"shift\":\"G\"},\"ru\":{\"default\":\"п\",\"shift\":\"П\"}}},{\"code\":\"KeyH\",\"key\":{\"en\":{\"default\":\"h\",\"shift\":\"H\"},\"ru\":{\"default\":\"р\",\"shift\":\"Р\"}}},{\"code\":\"KeyJ\",\"key\":{\"en\":{\"default\":\"j\",\"shift\":\"J\"},\"ru\":{\"default\":\"о\",\"shift\":\"О\"}}},{\"code\":\"KeyK\",\"key\":{\"en\":{\"default\":\"k\",\"shift\":\"K\"},\"ru\":{\"default\":\"л\",\"shift\":\"Л\"}}},{\"code\":\"KeyL\",\"key\":{\"en\":{\"default\":\"l\",\"shift\":\"L\"},\"ru\":{\"default\":\"д\",\"shift\":\"Д\"}}},{\"code\":\"Semicolon\",\"key\":{\"en\":{\"default\":\";\",\"shift\":\":\"},\"ru\":{\"default\":\"ж\",\"shift\":\"Ж\"}}},{\"code\":\"Quote\",\"key\":{\"en\":{\"default\":\"\\'\",\"shift\":\"\\\\\"\"},\"ru\":{\"default\":\"э\",\"shift\":\"Э\"}}},{\"code\":\"Enter\",\"key\":{\"en\":{\"default\":\"Enter\",\"shift\":\"Enter\"},\"ru\":{\"default\":\"Enter\",\"shift\":\"Enter\"}}},{\"code\":\"ShiftLeft\",\"key\":{\"en\":{\"default\":\"Shift\",\"shift\":\"Shift\"},\"ru\":{\"default\":\"Shift\",\"shift\":\"Shift\"}}},{\"code\":\"KeyZ\",\"key\":{\"en\":{\"default\":\"z\",\"shift\":\"Z\"},\"ru\":{\"default\":\"я\",\"shift\":\"Я\"}}},{\"code\":\"KeyX\",\"key\":{\"en\":{\"default\":\"x\",\"shift\":\"X\"},\"ru\":{\"default\":\"ч\",\"shift\":\"Ч\"}}},{\"code\":\"KeyC\",\"key\":{\"en\":{\"default\":\"c\",\"shift\":\"C\"},\"ru\":{\"default\":\"с\",\"shift\":\"С\"}}},{\"code\":\"KeyV\",\"key\":{\"en\":{\"default\":\"v\",\"shift\":\"V\"},\"ru\":{\"default\":\"м\",\"shift\":\"М\"}}},{\"code\":\"KeyB\",\"key\":{\"en\":{\"default\":\"b\",\"shift\":\"B\"},\"ru\":{\"default\":\"и\",\"shift\":\"И\"}}},{\"code\":\"KeyN\",\"key\":{\"en\":{\"default\":\"n\",\"shift\":\"N\"},\"ru\":{\"default\":\"т\",\"shift\":\"Т\"}}},{\"code\":\"KeyM\",\"key\":{\"en\":{\"default\":\"m\",\"shift\":\"M\"},\"ru\":{\"default\":\"ь\",\"shift\":\"Ь\"}}},{\"code\":\"Comma\",\"key\":{\"en\":{\"default\":\",\",\"shift\":\"<\"},\"ru\":{\"default\":\"б\",\"shift\":\"Б\"}}},{\"code\":\"Period\",\"key\":{\"en\":{\"default\":\".\",\"shift\":\">\"},\"ru\":{\"default\":\"ю\",\"shift\":\"Ю\"}}},{\"code\":\"Slash\",\"key\":{\"en\":{\"default\":\"/\",\"shift\":\"?\"},\"ru\":{\"default\":\".\",\"shift\":\",\"}}},{\"code\":\"ArrowUp\",\"key\":{\"en\":{\"default\":\"▲\",\"shift\":\"▲\"},\"ru\":{\"default\":\"▲\",\"shift\":\"▲\"}}},{\"code\":\"ShiftRight\",\"key\":{\"en\":{\"default\":\"Shift\",\"shift\":\"Shift\"},\"ru\":{\"default\":\"Shift\",\"shift\":\"Shift\"}}},{\"code\":\"ControlLeft\",\"key\":{\"en\":{\"default\":\"Ctrl\",\"shift\":\"Ctrl\"},\"ru\":{\"default\":\"Ctrl\",\"shift\":\"Ctrl\"}}},{\"code\":\"MetaLeft\",\"key\":{\"en\":{\"default\":\"Win\",\"shift\":\"Win\"},\"ru\":{\"default\":\"Win\",\"shift\":\"Win\"}}},{\"code\":\"AltLeft\",\"key\":{\"en\":{\"default\":\"Alt\",\"shift\":\"Alt\"},\"ru\":{\"default\":\"Alt\",\"shift\":\"Alt\"}}},{\"code\":\"Space\",\"key\":{\"en\":{\"default\":\" _______________________________ \",\"shift\":\" \"},\"ru\":{\"default\":\" \",\"shift\":\" \"}}},{\"code\":\"AltRight\",\"key\":{\"en\":{\"default\":\"Alt\",\"shift\":\"Alt\"},\"ru\":{\"default\":\"Alt\",\"shift\":\"Alt\"}}},{\"code\":\"ArrowLeft\",\"key\":{\"en\":{\"default\":\"◄\",\"shift\":\"◄\"},\"ru\":{\"default\":\"◄\",\"shift\":\"◄\"}}},{\"code\":\"ArrowDown\",\"key\":{\"en\":{\"default\":\"▼\",\"shift\":\"▼\"},\"ru\":{\"default\":\"▼\",\"shift\":\"▼\"}}},{\"code\":\"ArrowRight\",\"key\":{\"en\":{\"default\":\"►\",\"shift\":\"►\"},\"ru\":{\"default\":\"►\",\"shift\":\"►\"}}},{\"code\":\"ControlRight\",\"key\":{\"en\":{\"default\":\"Ctrl\",\"shift\":\"Ctrl\"},\"ru\":{\"default\":\"Ctrl\",\"shift\":\"Ctrl\"}}}]');\n\n//# sourceURL=webpack://virtual-keyboard/./src/components/app/keys.json?");

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.js");
/******/ 	
/******/ })()
;