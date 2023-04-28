"use strict";
(self["webpackChunktodo_list"] = self["webpackChunktodo_list"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss":
/*!******************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss ***!
  \******************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/fonts/abel-regular-webfont.woff2 */ "./src/assets/fonts/abel-regular-webfont.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/fonts/abel-regular-webfont.woff */ "./src/assets/fonts/abel-regular-webfont.woff"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: \"Abel\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"woff2\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"woff\");\n  font-style: normal;\n}\n* {\n  box-sizing: border-box;\n}\n\nbody,\nhtml {\n  font-family: \"Abel\", system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n  margin: 0;\n  padding: 0;\n  height: 100%;\n}\n\n.page-wrapper {\n  display: grid;\n  grid-template-rows: 2fr 8fr 1fr;\n  grid-template-columns: 1fr 6fr;\n  height: 100%;\n}\n\n.header > h1 {\n  font-size: 40px;\n  font-weight: 800;\n  color: #b2b8b7;\n}\n\n.header {\n  display: flex;\n  align-items: center;\n  grid-row: 1/2;\n  grid-column: 1/-1;\n  background: rgb(7, 18, 24);\n  background: linear-gradient(180deg, rgb(7, 18, 24) 25%, rgb(11, 19, 46) 50%, rgb(17, 29, 68) 75%, rgb(17, 29, 68) 100%);\n  gap: 15px;\n  padding: 0 30px;\n}\n\n.sidebar {\n  display: grid;\n  grid-row: 2/3;\n  grid-column: 1/2;\n  background-color: #b2b8b7;\n  color: #111D44;\n  align-content: start;\n  padding: 30px;\n  gap: 30px;\n  font-size: 27px;\n  font-weight: 600;\n}\n\n.sidebar > div {\n  cursor: pointer;\n}\n\n.sidebar > div:hover {\n  background-color: rgb(198, 209, 207);\n  border-radius: 10px;\n}\n\n.main-content {\n  display: grid;\n  grid-template-rows: auto 1fr;\n  grid-template-columns: auto 1fr;\n  grid-row: 2/3;\n  grid-column: 2/-1;\n  background-color: #dfd5d5;\n}\n\n.add-task {\n  display: inline-flex;\n  align-items: center;\n  margin: 0;\n  gap: 5px;\n  cursor: pointer;\n  margin: 20px 20px;\n  padding: 3px 6px;\n  grid-row: 1/2;\n  grid-column: 1/2;\n}\n\n.add-task > * {\n  margin: 0;\n  padding: 0;\n}\n\n.add-task:hover {\n  background-color: #b2b8b7;\n  border-radius: 8px;\n}\n\n.add-task:hover > svg {\n  transform: rotate(90deg);\n  transition: 0.4s ease-in-out;\n}\n\n.current-tab {\n  color: #111D44;\n  font-size: 30px;\n  font-weight: 600;\n  justify-self: center;\n  grid-column: 1/-1;\n  grid-row: 1/2;\n}\n\nform {\n  position: fixed;\n  display: none;\n  gap: 10px;\n  z-index: 99;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background-color: #b2b8b7;\n  color: #111D44;\n  font-weight: 500;\n  padding: 10px 20px;\n  border-radius: 10px;\n  box-shadow: 0 1px 1px;\n}\n\n.widget {\n  display: flex;\n  flex-direction: column;\n}\n\n.form-buttons {\n  display: flex;\n  justify-content: space-around;\n}\n\n.form-buttons > * {\n  cursor: pointer;\n}\n\n.home-tasks {\n  display: grid;\n  grid-template-columns: 1fr 4fr 1fr;\n  grid-template-rows: repeat(auto-fit, minmax(auto, 1fr));\n  align-content: start;\n  grid-row: 2/-1;\n  grid-column: 1/-1;\n}\n\n.tasks-header {\n  display: inline-flex;\n  justify-content: space-between;\n  font-weight: 600;\n  padding: 0 10px;\n}\n\n.due {\n  padding-right: 30px;\n}\n\n.task {\n  display: flex;\n  padding: 0 10px;\n}\n\n.task-n {\n  margin-right: auto;\n  cursor: pointer;\n}\n\n.task:hover {\n  background-color: #e6dede;\n}\n\n.task-date {\n  padding-right: 10px;\n}\n\n.home-tasks > * {\n  grid-column: 2/3;\n  border-bottom: 1px solid #111D44;\n}\n\n.delete-task {\n  cursor: pointer;\n}\n\n.delete-task:hover {\n  animation: move-up 0.5s ease-in-out;\n}\n\n.info-display {\n  position: fixed;\n  display: grid;\n  grid-template-columns: auto;\n  grid-template-rows: auto;\n  gap: 5px;\n  z-index: 99;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background-color: #b2b8b7;\n  font-weight: 600;\n  padding: 10px 20px;\n  border-radius: 10px;\n  box-shadow: 0 1px 1px;\n  color: #111D44;\n  overflow-y: auto;\n}\n\n.close-info {\n  justify-self: end;\n  cursor: pointer;\n}\n\n@keyframes move-up {\n  0% {\n    transform: translateY(0);\n  }\n  50% {\n    transform: translateY(-5px);\n  }\n  100% {\n    transform: translateY(0);\n  }\n}\na {\n  text-decoration: none;\n  color: #272727;\n}\n\n.footer {\n  display: grid;\n  grid-row: -2/-1;\n  grid-column: 1/-1;\n  background-color: #111D44;\n  color: #b2b8b7;\n}\n\n@media (max-width: 500px) {\n  .main-content {\n    grid-template-rows: auto auto 1fr;\n  }\n  .current-tab {\n    grid-row: 2/3;\n  }\n  .task {\n    display: grid;\n    grid-template-rows: auto auto;\n    grid-template-columns: auto auto;\n    padding: 0 10px;\n  }\n  .home-tasks {\n    grid-row: 3/-1;\n  }\n  .tasks-header {\n    padding: 0;\n  }\n  .task-date {\n    padding-right: 0;\n    justify-self: end;\n  }\n  .task > img {\n    justify-self: end;\n    grid-column: 2/-1;\n    padding-right: 20px;\n    padding-bottom: 3px;\n  }\n  .info-display {\n    width: 50%;\n    height: 50%;\n    overflow: auto;\n  }\n  .due {\n    padding-right: 0;\n  }\n  .task > * {\n    font-size: 12px;\n  }\n}", "",{"version":3,"sources":["webpack://./src/styles.scss"],"names":[],"mappings":"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","sourcesContent":["@font-face {\r\n  font-family: 'Abel';\r\n  src: url('./assets/fonts/abel-regular-webfont.woff2') format('woff2'),\r\n    url('./assets/fonts/abel-regular-webfont.woff') format('woff');\r\n    font-style: normal;\r\n}\r\n\r\n$primary-color: #111D44;\r\n$secondary-color: #b2b8b7;\r\n$complementary-color: #000;\r\n$yellow: #ffc600;\r\n$black: #272727;\r\n\r\n* {\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody,\r\nhtml {\r\n  font-family: 'Abel', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\r\n  margin: 0;\r\n  padding: 0;\r\n  height: 100%;\r\n}\r\n\r\n.page-wrapper {\r\n  display: grid;\r\n  grid-template-rows: 2fr 8fr 1fr;\r\n  grid-template-columns: 1fr 6fr;\r\n  height: 100%;\r\n}\r\n \r\n.header > h1 {\r\n  font-size: 40px;\r\n  font-weight: 800;\r\n  color: $secondary-color;\r\n}\r\n\r\n.header {\r\n  display: flex;\r\n  align-items: center;\r\n  grid-row: 1 / 2;\r\n  grid-column: 1 / -1;\r\n  background: rgb(7,18,24);\r\n  background: linear-gradient(180deg, rgba(7,18,24,1) 25%, rgba(11,19,46,1) 50%, rgba(17,29,68,1) 75%, rgba(17,29,68,1) 100%);\r\n  gap: 15px;\r\n  padding: 0 30px;\r\n}\r\n\r\n.sidebar {\r\n  display: grid;\r\n  grid-row: 2 / 3;\r\n  grid-column: 1 / 2;\r\n  background-color: $secondary-color;\r\n  color: $primary-color;\r\n  align-content: start;\r\n  padding: 30px;\r\n  gap: 30px;\r\n  font-size: 27px;\r\n  font-weight: 600;\r\n}\r\n\r\n.sidebar > div {\r\n  cursor: pointer;\r\n}\r\n\r\n.sidebar > div:hover {\r\n  background-color: rgb(198, 209, 207);\r\n  border-radius: 10px;\r\n}\r\n\r\n.main-content {\r\n  display: grid;\r\n  grid-template-rows: auto 1fr;\r\n  grid-template-columns: auto 1fr;\r\n  grid-row: 2 / 3;\r\n  grid-column: 2 / -1;\r\n  background-color: #dfd5d5;\r\n}\r\n\r\n.add-task {\r\n  display: inline-flex;\r\n  align-items: center;\r\n  margin: 0;\r\n  gap: 5px;\r\n  cursor: pointer;\r\n  margin: 20px 20px;\r\n  padding: 3px 6px;\r\n  grid-row: 1 / 2;\r\n  grid-column: 1 / 2;\r\n}\r\n\r\n.add-task > * {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n.add-task:hover {\r\n  background-color: $secondary-color;\r\n  border-radius: 8px;\r\n}\r\n\r\n.add-task:hover > svg {\r\n  transform: rotate(90deg);\r\n  transition: 0.4s ease-in-out;\r\n}\r\n\r\n.current-tab {\r\n  color: $primary-color;\r\n  font-size: 30px;\r\n  font-weight: 600;\r\n  justify-self: center;\r\n  grid-column: 1 / -1;\r\n  grid-row: 1 / 2;\r\n}\r\n\r\nform {\r\n  position: fixed;\r\n  display: none;\r\n  gap: 10px;\r\n  z-index: 99;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  background-color: $secondary-color;\r\n  color: $primary-color;\r\n  font-weight: 500;\r\n  padding: 10px 20px;\r\n  border-radius: 10px;\r\n  box-shadow: 0 1px 1px;\r\n}\r\n\r\n.widget {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.form-buttons {\r\n  display: flex;\r\n  justify-content: space-around;\r\n}\r\n\r\n.form-buttons > * {\r\n  cursor: pointer;\r\n}\r\n\r\n.home-tasks {\r\n  display: grid;\r\n  grid-template-columns: 1fr 4fr 1fr;\r\n  grid-template-rows: repeat(auto-fit, minmax(auto, 1fr));\r\n  align-content: start;\r\n  grid-row: 2 / -1;\r\n  grid-column: 1 / -1;\r\n}\r\n\r\n.tasks-header {\r\n  display: inline-flex;\r\n  justify-content: space-between;\r\n  font-weight: 600;\r\n  padding: 0 10px;\r\n}\r\n\r\n.due {\r\n  padding-right: 30px;\r\n}\r\n\r\n.task {\r\n  display: flex;\r\n  padding: 0 10px;\r\n}\r\n\r\n.task-n {\r\n  margin-right: auto;\r\n  cursor: pointer;\r\n}\r\n\r\n.task:hover {\r\n  background-color: #e6dede;\r\n}\r\n\r\n.task-date {\r\n  padding-right: 10px;\r\n}\r\n\r\n.home-tasks > * {\r\n  grid-column: 2 / 3;\r\n  border-bottom: 1px solid $primary-color;\r\n}\r\n\r\n.delete-task {\r\n  cursor: pointer;\r\n}\r\n\r\n.delete-task:hover {\r\n  animation: move-up 0.5s ease-in-out;\r\n}\r\n\r\n.info-display {\r\n  position: fixed;\r\n  display: grid;\r\n  grid-template-columns: auto;\r\n  grid-template-rows: auto;\r\n  gap: 5px;\r\n  z-index: 99;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  background-color: $secondary-color;\r\n  font-weight: 600;\r\n  padding: 10px 20px;\r\n  border-radius: 10px;\r\n  box-shadow: 0 1px 1px;\r\n  color: $primary-color;\r\n  overflow-y: auto;\r\n}\r\n\r\n.close-info {\r\n  justify-self: end;\r\n  cursor: pointer;\r\n}\r\n\r\n@keyframes move-up {\r\n  0% {\r\n    transform: translateY(0);\r\n  }\r\n  50% {\r\n    transform: translateY(-5px);\r\n  }\r\n  100% {\r\n    transform: translateY(0);\r\n  }\r\n}\r\n\r\n\r\na {\r\n  text-decoration: none;\r\n  color: $black;\r\n}\r\n\r\n.footer {\r\n  display: grid;\r\n  grid-row: -2 / -1;\r\n  grid-column: 1 / -1;\r\n  background-color: $primary-color;\r\n  color: $secondary-color;\r\n}\r\n\r\n@media (max-width: 500px) {\r\n  .main-content {\r\n    grid-template-rows: auto auto 1fr;\r\n  }\r\n\r\n  .current-tab {\r\n    grid-row: 2 / 3;\r\n  }\r\n\r\n  .task {\r\n    display: grid;\r\n    grid-template-rows: auto auto;\r\n    grid-template-columns: auto auto;\r\n    padding: 0 10px;\r\n  }\r\n\r\n  .home-tasks {\r\n    grid-row: 3 / -1;\r\n  }\r\n\r\n  .tasks-header {\r\n    padding: 0;\r\n  }\r\n\r\n  .task-date {\r\n    padding-right: 0;\r\n    justify-self: end;\r\n  }\r\n\r\n  .task > img {\r\n    justify-self: end;\r\n    grid-column: 2 / -1;\r\n    padding-right: 20px;\r\n    padding-bottom: 3px;\r\n  }\r\n\r\n  .info-display {\r\n    width: 50%;\r\n    height: 50%;\r\n    overflow: auto;\r\n  }\r\n\r\n  .due {\r\n    padding-right: 0;\r\n  }\r\n  \r\n  .task > * {\r\n    font-size: 12px;\r\n  }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./styles.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/createtask.js":
/*!***************************!*\
  !*** ./src/createtask.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTask": () => (/* binding */ createTask)
/* harmony export */ });
const createTask = () => ({
  name: document.querySelector('#task-name').value,
  description: document.querySelector('#task-description').value,
  dueDate: document.querySelector('#due-date').value,
  priority: document.querySelector('#priority').value,
});

/***/ }),

/***/ "./src/displaytasks.js":
/*!*****************************!*\
  !*** ./src/displaytasks.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayAllTaskInfo": () => (/* binding */ displayAllTaskInfo),
/* harmony export */   "displayTasks": () => (/* binding */ displayTasks)
/* harmony export */ });
/* harmony import */ var _informationholder_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./informationholder.js */ "./src/informationholder.js");
/* harmony import */ var _assets_icons_delete_icon_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/icons/delete-icon.svg */ "./src/assets/icons/delete-icon.svg");
/* harmony import */ var _assets_icons_close_info_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/icons/close-info.svg */ "./src/assets/icons/close-info.svg");




function displayTasks() {
  const homeTasks = document.querySelector('.home-tasks');
  const tasksLength = _informationholder_js__WEBPACK_IMPORTED_MODULE_0__.InformationHolder.tasks.length;
  for (let i = tasksLength - 1; i < tasksLength; i++) {
    const div = document.createElement('div');
    div.classList.add('task');
    div.setAttribute('id', i);

    const taskName = document.createElement('p');
    taskName.classList.add('task-n');
    taskName.textContent = _informationholder_js__WEBPACK_IMPORTED_MODULE_0__.InformationHolder.tasks[i].name;
    div.appendChild(taskName);

    const taskDate = document.createElement('p');
    taskDate.classList.add('task-date');
    taskDate.textContent = _informationholder_js__WEBPACK_IMPORTED_MODULE_0__.InformationHolder.tasks[i].dueDate;
    div.appendChild(taskDate);


    const deleteIcon = new Image();
    deleteIcon.classList.add('delete-task');
    deleteIcon.src = _assets_icons_delete_icon_svg__WEBPACK_IMPORTED_MODULE_1__;
    div.appendChild(deleteIcon);

    homeTasks.appendChild(div);
  }
}

function displayAllTaskInfo(arrayIndex) {
  const infoDisplay = document.createElement('div');
  infoDisplay.classList.add('info-display');
  
  const taskName = document.createElement('p');
  taskName.textContent = _informationholder_js__WEBPACK_IMPORTED_MODULE_0__.InformationHolder.tasks[arrayIndex].name;
  const taskDescription = document.createElement('p');
  taskDescription.textContent = _informationholder_js__WEBPACK_IMPORTED_MODULE_0__.InformationHolder.tasks[arrayIndex].description;
  const taskDate = document.createElement('p');
  taskDate.textContent = `Due: ${_informationholder_js__WEBPACK_IMPORTED_MODULE_0__.InformationHolder.tasks[arrayIndex].dueDate}`;
  const taskPriority = document.createElement('p');
  taskPriority.textContent = `Priority: ${_informationholder_js__WEBPACK_IMPORTED_MODULE_0__.InformationHolder.tasks[arrayIndex].priority.toUpperCase()}`; 

  const closeInfo = new Image();
  closeInfo.src = _assets_icons_close_info_svg__WEBPACK_IMPORTED_MODULE_2__;
  closeInfo.classList.add('close-info');
  
  const border = selectPriorityBorder(_informationholder_js__WEBPACK_IMPORTED_MODULE_0__.InformationHolder.tasks[arrayIndex].priority);
  infoDisplay.style.border = border;

  infoDisplay.appendChild(closeInfo);
  infoDisplay.appendChild(taskName);
  infoDisplay.appendChild(taskDescription);
  infoDisplay.appendChild(taskDate);
  infoDisplay.appendChild(taskPriority);

  document.querySelector('.main-content').appendChild(infoDisplay);
}

function selectPriorityBorder(priority) {
  if (priority === 'low') return '2px solid #2d7bd2';
  if (priority === 'medium') return '2px solid #ffc600';
  return '2px solid #ff0018';
}


/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "adjustTickMark": () => (/* binding */ adjustTickMark),
/* harmony export */   "tasksHeader": () => (/* binding */ tasksHeader)
/* harmony export */ });
/* harmony import */ var _assets_icons_check_icon_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/icons/check-icon.png */ "./src/assets/icons/check-icon.png");


function adjustTickMark() {
  const tickMark = new Image();
  tickMark.src = _assets_icons_check_icon_png__WEBPACK_IMPORTED_MODULE_0__;
  tickMark.style.width = '40px';
  tickMark.style.height = '40px';
  document.querySelector('.header').appendChild(tickMark);
}

function tasksHeader() {
  const div = document.createElement('div');
  div.classList.add('tasks-header');
  const h3 = document.createElement('h3');
  h3.textContent = 'Name';
  const header3 = document.createElement('h3');
  header3.classList.add('due');
  header3.textContent = 'Due Date';

  div.appendChild(h3);
  div.appendChild(header3);
  return div;
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.scss */ "./src/styles.scss");
/* harmony import */ var _header_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.js */ "./src/header.js");
/* harmony import */ var _taskform_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./taskform.js */ "./src/taskform.js");
/* harmony import */ var _informationholder_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./informationholder.js */ "./src/informationholder.js");
/* harmony import */ var _createtask_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./createtask.js */ "./src/createtask.js");
/* harmony import */ var _mediatordom_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mediatordom.js */ "./src/mediatordom.js");
/* harmony import */ var _displaytasks_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./displaytasks.js */ "./src/displaytasks.js");









(0,_header_js__WEBPACK_IMPORTED_MODULE_1__.adjustTickMark)();
_mediatordom_js__WEBPACK_IMPORTED_MODULE_5__.MediatorDOM.initialize();
const form = (0,_taskform_js__WEBPACK_IMPORTED_MODULE_2__.ManageForm)();
form.initialize();



/***/ }),

/***/ "./src/informationholder.js":
/*!**********************************!*\
  !*** ./src/informationholder.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InformationHolder": () => (/* binding */ InformationHolder)
/* harmony export */ });
class InformationHolder {
  static tasks = [];

  static projects = [];

  static addTask(someTask) {
    return this.tasks.push(someTask);
  }

  static removeTask(aTask) {
    const taskIndex = Number(aTask.id);
    this.tasks.splice(taskIndex, 1);
    this.#adjustTasksId(taskIndex);
  }

  static #adjustTasksId(deletedTaskId) {
    const divs = document.querySelectorAll(".task");
    if (divs.length > 0) {
      divs.forEach(div => {
        if (div.id > deletedTaskId) {
          const currentId = parseInt(div.id.match(/\d+/)[0]);
          div.id = div.id.replace(currentId, currentId - 1);
        }
      });
    }
  }

  static addProject(someProject) {
    return this.projects.push(someProject);
  }

  static removeProject(aProject) {
    return this.projects.splice(aProject, 1);
  }
}


/***/ }),

/***/ "./src/mediatordom.js":
/*!****************************!*\
  !*** ./src/mediatordom.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MediatorDOM": () => (/* binding */ MediatorDOM)
/* harmony export */ });
/* harmony import */ var _createtask_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createtask.js */ "./src/createtask.js");
/* harmony import */ var _informationholder_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./informationholder.js */ "./src/informationholder.js");
/* harmony import */ var _displaytasks_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./displaytasks.js */ "./src/displaytasks.js");





class MediatorDOM {
  static insertTaskDOM() {
    document.querySelector('.submit').addEventListener('click', () => {
      if (document.querySelector('form').checkValidity()) {
        _informationholder_js__WEBPACK_IMPORTED_MODULE_1__.InformationHolder.addTask((0,_createtask_js__WEBPACK_IMPORTED_MODULE_0__.createTask)());
        (0,_displaytasks_js__WEBPACK_IMPORTED_MODULE_2__.displayTasks)();
      }
    });
  };

  static showTaskInfo() {
    document.querySelector('.main-content').addEventListener('click', (e) => {
      if (e.target.classList.contains('task-n')) {
        (0,_displaytasks_js__WEBPACK_IMPORTED_MODULE_2__.displayAllTaskInfo)(Number(e.target.parentElement.id));
      }
    });
  };

  static closeTaskInfo() {
    document.querySelector('.main-content').addEventListener('click', (e) => {
      if (e.target.classList.contains('close-info')) e.target.parentElement.remove();
    });
  }

  static deleteTaskDOM() {
    document.querySelector('.main-content').addEventListener('click', (e) => {
      if (e.target.classList.contains('delete-task')) {
        _informationholder_js__WEBPACK_IMPORTED_MODULE_1__.InformationHolder.removeTask(e.target.parentElement);
        e.target.parentElement.remove();
      }
    });
  };

  static adjustDeleteIcon() {
    let messageDisplayed = false;

    window.addEventListener('resize', () => {
      if (window.innerWidth <= 500 && !messageDisplayed) {
        console.log('...');
        messageDisplayed = true;
      } else if (window.innerWidth > 500) {
        messageDisplayed = false;
      }
    });
  };

  static initialize() {
    this.insertTaskDOM();
    this.showTaskInfo();
    this.closeTaskInfo();
    this.deleteTaskDOM();
    this.adjustDeleteIcon();
  }
};


/***/ }),

/***/ "./src/taskform.js":
/*!*************************!*\
  !*** ./src/taskform.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManageForm": () => (/* binding */ ManageForm)
/* harmony export */ });
const ManageForm = () => ({
  addTaskButton: document.querySelector('.add-task'),
  form: document.querySelector('form'),

  clearForm() {
    const formInputs = Array.from(document.querySelectorAll('form input'));
    formInputs.forEach((input) => {
      input.value = '';
    })
    document.querySelector('textarea').value = '';
  },

  openForm() {
    this.addTaskButton.addEventListener('click', () => {
      this.form.style.display = 'grid';
    });
  },

  closeForm() {
    this.form.style.display = 'none';
  },

  cancel() {
    const closeFormButton = document.querySelector('.cancel');
    closeFormButton.addEventListener('click', () => {
      this.closeForm();
      this.clearForm();
    });
  },

  submitForm() {
    const submitButton = document.querySelector('.submit');
    submitButton.addEventListener('click', () => {
      if (this.form.checkValidity()) {
        this.closeForm();
        this.clearForm();
        return true;
      }

      return false;
    });
  },

  initialize() {
    this.openForm();
    this.cancel();
    this.submitForm();
  },
});


/***/ }),

/***/ "./src/assets/fonts/abel-regular-webfont.woff":
/*!****************************************************!*\
  !*** ./src/assets/fonts/abel-regular-webfont.woff ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7a423a6e19129cf6b48f.woff";

/***/ }),

/***/ "./src/assets/fonts/abel-regular-webfont.woff2":
/*!*****************************************************!*\
  !*** ./src/assets/fonts/abel-regular-webfont.woff2 ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0202877b1a4aed664274.woff2";

/***/ }),

/***/ "./src/assets/icons/check-icon.png":
/*!*****************************************!*\
  !*** ./src/assets/icons/check-icon.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d51444f1845654c8b120.png";

/***/ }),

/***/ "./src/assets/icons/close-info.svg":
/*!*****************************************!*\
  !*** ./src/assets/icons/close-info.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "78da3440b620f9079ad0.svg";

/***/ }),

/***/ "./src/assets/icons/delete-icon.svg":
/*!******************************************!*\
  !*** ./src/assets/icons/delete-icon.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "be8a48f7e287cfceaf67.svg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUssS0FBSyxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFdBQVcsWUFBWSxRQUFRLEtBQUssVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsV0FBVyxhQUFhLGFBQWEsWUFBWSxVQUFVLFVBQVUsVUFBVSxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxhQUFhLGFBQWEsTUFBTSxLQUFLLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsYUFBYSxhQUFhLFlBQVksV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsVUFBVSxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxXQUFXLFVBQVUsTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsYUFBYSxhQUFhLFdBQVcsV0FBVyxXQUFXLFdBQVcsWUFBWSxNQUFNLEtBQUssV0FBVyxVQUFVLE1BQU0sS0FBSyxLQUFLLFdB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QUFDYztBQUNVO0FBQ3JFO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBLFFBQVEsNEVBQXlCLENBQUMsMERBQVU7QUFDNUMsUUFBUSw4REFBWTtBQUNwQjtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxvRUFBa0I7QUFDMUI7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSwrRUFBNEI7QUFDcEM7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDMURPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZXMuc2NzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlcy5zY3NzP2E2MDkiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY3JlYXRldGFzay5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZGlzcGxheXRhc2tzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmZvcm1hdGlvbmhvbGRlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbWVkaWF0b3Jkb20uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Rhc2tmb3JtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9mb250cy9hYmVsLXJlZ3VsYXItd2ViZm9udC53b2ZmMlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vYXNzZXRzL2ZvbnRzL2FiZWwtcmVndWxhci13ZWJmb250LndvZmZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIkFiZWxcXFwiO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpIGZvcm1hdChcXFwid29mZjJcXFwiKSwgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKSBmb3JtYXQoXFxcIndvZmZcXFwiKTtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5LFxcbmh0bWwge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJBYmVsXFxcIiwgc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFxcXCJTZWdvZSBVSVxcXCIsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgXFxcIk9wZW4gU2Fuc1xcXCIsIFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsIHNhbnMtc2VyaWY7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4ucGFnZS13cmFwcGVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDJmciA4ZnIgMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNmZyO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4uaGVhZGVyID4gaDEge1xcbiAgZm9udC1zaXplOiA0MHB4O1xcbiAgZm9udC13ZWlnaHQ6IDgwMDtcXG4gIGNvbG9yOiAjYjJiOGI3O1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ3JpZC1yb3c6IDEvMjtcXG4gIGdyaWQtY29sdW1uOiAxLy0xO1xcbiAgYmFja2dyb3VuZDogcmdiKDcsIDE4LCAyNCk7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCByZ2IoNywgMTgsIDI0KSAyNSUsIHJnYigxMSwgMTksIDQ2KSA1MCUsIHJnYigxNywgMjksIDY4KSA3NSUsIHJnYigxNywgMjksIDY4KSAxMDAlKTtcXG4gIGdhcDogMTVweDtcXG4gIHBhZGRpbmc6IDAgMzBweDtcXG59XFxuXFxuLnNpZGViYXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtcm93OiAyLzM7XFxuICBncmlkLWNvbHVtbjogMS8yO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2IyYjhiNztcXG4gIGNvbG9yOiAjMTExRDQ0O1xcbiAgYWxpZ24tY29udGVudDogc3RhcnQ7XFxuICBwYWRkaW5nOiAzMHB4O1xcbiAgZ2FwOiAzMHB4O1xcbiAgZm9udC1zaXplOiAyN3B4O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuLnNpZGViYXIgPiBkaXYge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uc2lkZWJhciA+IGRpdjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTk4LCAyMDksIDIwNyk7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4ubWFpbi1jb250ZW50IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDFmcjtcXG4gIGdyaWQtcm93OiAyLzM7XFxuICBncmlkLWNvbHVtbjogMi8tMTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkZmQ1ZDU7XFxufVxcblxcbi5hZGQtdGFzayB7XFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW46IDA7XFxuICBnYXA6IDVweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG1hcmdpbjogMjBweCAyMHB4O1xcbiAgcGFkZGluZzogM3B4IDZweDtcXG4gIGdyaWQtcm93OiAxLzI7XFxuICBncmlkLWNvbHVtbjogMS8yO1xcbn1cXG5cXG4uYWRkLXRhc2sgPiAqIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi5hZGQtdGFzazpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjJiOGI3O1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbn1cXG5cXG4uYWRkLXRhc2s6aG92ZXIgPiBzdmcge1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xcbiAgdHJhbnNpdGlvbjogMC40cyBlYXNlLWluLW91dDtcXG59XFxuXFxuLmN1cnJlbnQtdGFiIHtcXG4gIGNvbG9yOiAjMTExRDQ0O1xcbiAgZm9udC1zaXplOiAzMHB4O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgZ3JpZC1jb2x1bW46IDEvLTE7XFxuICBncmlkLXJvdzogMS8yO1xcbn1cXG5cXG5mb3JtIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBnYXA6IDEwcHg7XFxuICB6LWluZGV4OiA5OTtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjJiOGI3O1xcbiAgY29sb3I6ICMxMTFENDQ7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgcGFkZGluZzogMTBweCAyMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJveC1zaGFkb3c6IDAgMXB4IDFweDtcXG59XFxuXFxuLndpZGdldCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmZvcm0tYnV0dG9ucyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxufVxcblxcbi5mb3JtLWJ1dHRvbnMgPiAqIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmhvbWUtdGFza3Mge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDRmciAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KGF1dG8sIDFmcikpO1xcbiAgYWxpZ24tY29udGVudDogc3RhcnQ7XFxuICBncmlkLXJvdzogMi8tMTtcXG4gIGdyaWQtY29sdW1uOiAxLy0xO1xcbn1cXG5cXG4udGFza3MtaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIHBhZGRpbmc6IDAgMTBweDtcXG59XFxuXFxuLmR1ZSB7XFxuICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xcbn1cXG5cXG4udGFzayB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcGFkZGluZzogMCAxMHB4O1xcbn1cXG5cXG4udGFzay1uIHtcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRhc2s6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZGVkZTtcXG59XFxuXFxuLnRhc2stZGF0ZSB7XFxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcbn1cXG5cXG4uaG9tZS10YXNrcyA+ICoge1xcbiAgZ3JpZC1jb2x1bW46IDIvMztcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMTExRDQ0O1xcbn1cXG5cXG4uZGVsZXRlLXRhc2sge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uZGVsZXRlLXRhc2s6aG92ZXIge1xcbiAgYW5pbWF0aW9uOiBtb3ZlLXVwIDAuNXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5pbmZvLWRpc3BsYXkge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0bztcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0bztcXG4gIGdhcDogNXB4O1xcbiAgei1pbmRleDogOTk7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2IyYjhiNztcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYm94LXNoYWRvdzogMCAxcHggMXB4O1xcbiAgY29sb3I6ICMxMTFENDQ7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbn1cXG5cXG4uY2xvc2UtaW5mbyB7XFxuICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuQGtleWZyYW1lcyBtb3ZlLXVwIHtcXG4gIDAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcbiAgfVxcbiAgNTAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcXG4gIH1cXG59XFxuYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjb2xvcjogIzI3MjcyNztcXG59XFxuXFxuLmZvb3RlciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC1yb3c6IC0yLy0xO1xcbiAgZ3JpZC1jb2x1bW46IDEvLTE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTExRDQ0O1xcbiAgY29sb3I6ICNiMmI4Yjc7XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xcbiAgLm1haW4tY29udGVudCB7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byBhdXRvIDFmcjtcXG4gIH1cXG4gIC5jdXJyZW50LXRhYiB7XFxuICAgIGdyaWQtcm93OiAyLzM7XFxuICB9XFxuICAudGFzayB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byBhdXRvO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0bztcXG4gICAgcGFkZGluZzogMCAxMHB4O1xcbiAgfVxcbiAgLmhvbWUtdGFza3Mge1xcbiAgICBncmlkLXJvdzogMy8tMTtcXG4gIH1cXG4gIC50YXNrcy1oZWFkZXIge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgfVxcbiAgLnRhc2stZGF0ZSB7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDA7XFxuICAgIGp1c3RpZnktc2VsZjogZW5kO1xcbiAgfVxcbiAgLnRhc2sgPiBpbWcge1xcbiAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG4gICAgZ3JpZC1jb2x1bW46IDIvLTE7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XFxuICAgIHBhZGRpbmctYm90dG9tOiAzcHg7XFxuICB9XFxuICAuaW5mby1kaXNwbGF5IHtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgaGVpZ2h0OiA1MCU7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgfVxcbiAgLmR1ZSB7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDA7XFxuICB9XFxuICAudGFzayA+ICoge1xcbiAgICBmb250LXNpemU6IDEycHg7XFxuICB9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLG1CQUFBO0VBQ0Esb0hBQUE7RUFFRSxrQkFBQTtBQUFKO0FBU0E7RUFDRSxzQkFBQTtBQVBGOztBQVVBOztFQUVFLDJKQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FBUEY7O0FBVUE7RUFDRSxhQUFBO0VBQ0EsK0JBQUE7RUFDQSw4QkFBQTtFQUNBLFlBQUE7QUFQ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Q0EsaUJBQUE7RUFkRjtFQWlCQTtJQUNFLGlCQUFBO0lBQ0EsaUJBQUE7SUFDQSxtQkFBQTtJQUNBLG1CQUFBO0VBZkY7RUFrQkE7SUFDRSxVQUFBO0lBQ0EsV0FBQTtJQUNBLGNBQUE7RUFoQkY7RUFtQkE7SUFDRSxnQkFBQTtFQWpCRjtFQW9CQTtJQUNFLGVBQUE7RUFsQkY7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnQWJlbCc7XFxyXFxuICBzcmM6IHVybCgnLi9hc3NldHMvZm9udHMvYWJlbC1yZWd1bGFyLXdlYmZvbnQud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksXFxyXFxuICAgIHVybCgnLi9hc3NldHMvZm9udHMvYWJlbC1yZWd1bGFyLXdlYmZvbnQud29mZicpIGZvcm1hdCgnd29mZicpO1xcclxcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxufVxcclxcblxcclxcbiRwcmltYXJ5LWNvbG9yOiAjMTExRDQ0O1xcclxcbiRzZWNvbmRhcnktY29sb3I6ICNiMmI4Yjc7XFxyXFxuJGNvbXBsZW1lbnRhcnktY29sb3I6ICMwMDA7XFxyXFxuJHllbGxvdzogI2ZmYzYwMDtcXHJcXG4kYmxhY2s6ICMyNzI3Mjc7XFxyXFxuXFxyXFxuKiB7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5LFxcclxcbmh0bWwge1xcclxcbiAgZm9udC1mYW1pbHk6ICdBYmVsJywgc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4ucGFnZS13cmFwcGVyIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDJmciA4ZnIgMWZyO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNmZyO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG4gXFxyXFxuLmhlYWRlciA+IGgxIHtcXHJcXG4gIGZvbnQtc2l6ZTogNDBweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XFxyXFxuICBjb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdyaWQtcm93OiAxIC8gMjtcXHJcXG4gIGdyaWQtY29sdW1uOiAxIC8gLTE7XFxyXFxuICBiYWNrZ3JvdW5kOiByZ2IoNywxOCwyNCk7XFxyXFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCByZ2JhKDcsMTgsMjQsMSkgMjUlLCByZ2JhKDExLDE5LDQ2LDEpIDUwJSwgcmdiYSgxNywyOSw2OCwxKSA3NSUsIHJnYmEoMTcsMjksNjgsMSkgMTAwJSk7XFxyXFxuICBnYXA6IDE1cHg7XFxyXFxuICBwYWRkaW5nOiAwIDMwcHg7XFxyXFxufVxcclxcblxcclxcbi5zaWRlYmFyIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXJvdzogMiAvIDM7XFxyXFxuICBncmlkLWNvbHVtbjogMSAvIDI7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xcclxcbiAgY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xcclxcbiAgYWxpZ24tY29udGVudDogc3RhcnQ7XFxyXFxuICBwYWRkaW5nOiAzMHB4O1xcclxcbiAgZ2FwOiAzMHB4O1xcclxcbiAgZm9udC1zaXplOiAyN3B4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZGViYXIgPiBkaXYge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uc2lkZWJhciA+IGRpdjpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTk4LCAyMDksIDIwNyk7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbi1jb250ZW50IHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDFmcjtcXHJcXG4gIGdyaWQtcm93OiAyIC8gMztcXHJcXG4gIGdyaWQtY29sdW1uOiAyIC8gLTE7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGZkNWQ1O1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkLXRhc2sge1xcclxcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgZ2FwOiA1cHg7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBtYXJnaW46IDIwcHggMjBweDtcXHJcXG4gIHBhZGRpbmc6IDNweCA2cHg7XFxyXFxuICBncmlkLXJvdzogMSAvIDI7XFxyXFxuICBncmlkLWNvbHVtbjogMSAvIDI7XFxyXFxufVxcclxcblxcclxcbi5hZGQtdGFzayA+ICoge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZC10YXNrOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XFxyXFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxufVxcclxcblxcclxcbi5hZGQtdGFzazpob3ZlciA+IHN2ZyB7XFxyXFxuICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XFxyXFxuICB0cmFuc2l0aW9uOiAwLjRzIGVhc2UtaW4tb3V0O1xcclxcbn1cXHJcXG5cXHJcXG4uY3VycmVudC10YWIge1xcclxcbiAgY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xcclxcbiAgZm9udC1zaXplOiAzMHB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcclxcbiAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcXHJcXG4gIGdyaWQtcm93OiAxIC8gMjtcXHJcXG59XFxyXFxuXFxyXFxuZm9ybSB7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbiAgZ2FwOiAxMHB4O1xcclxcbiAgei1pbmRleDogOTk7XFxyXFxuICB0b3A6IDUwJTtcXHJcXG4gIGxlZnQ6IDUwJTtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcXHJcXG4gIGNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgYm94LXNoYWRvdzogMCAxcHggMXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ud2lkZ2V0IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybS1idXR0b25zIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0tYnV0dG9ucyA+ICoge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uaG9tZS10YXNrcyB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNGZyIDFmcjtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoYXV0bywgMWZyKSk7XFxyXFxuICBhbGlnbi1jb250ZW50OiBzdGFydDtcXHJcXG4gIGdyaWQtcm93OiAyIC8gLTE7XFxyXFxuICBncmlkLWNvbHVtbjogMSAvIC0xO1xcclxcbn1cXHJcXG5cXHJcXG4udGFza3MtaGVhZGVyIHtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gIHBhZGRpbmc6IDAgMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmR1ZSB7XFxyXFxuICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4udGFzayB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgcGFkZGluZzogMCAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay1uIHtcXHJcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2s6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZGVkZTtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2stZGF0ZSB7XFxyXFxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaG9tZS10YXNrcyA+ICoge1xcclxcbiAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICRwcmltYXJ5LWNvbG9yO1xcclxcbn1cXHJcXG5cXHJcXG4uZGVsZXRlLXRhc2sge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZGVsZXRlLXRhc2s6aG92ZXIge1xcclxcbiAgYW5pbWF0aW9uOiBtb3ZlLXVwIDAuNXMgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcblxcclxcbi5pbmZvLWRpc3BsYXkge1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0bztcXHJcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0bztcXHJcXG4gIGdhcDogNXB4O1xcclxcbiAgei1pbmRleDogOTk7XFxyXFxuICB0b3A6IDUwJTtcXHJcXG4gIGxlZnQ6IDUwJTtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgYm94LXNoYWRvdzogMCAxcHggMXB4O1xcclxcbiAgY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xcclxcbiAgb3ZlcmZsb3cteTogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLmNsb3NlLWluZm8ge1xcclxcbiAganVzdGlmeS1zZWxmOiBlbmQ7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgbW92ZS11cCB7XFxyXFxuICAwJSB7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcXHJcXG4gIH1cXHJcXG4gIDUwJSB7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNXB4KTtcXHJcXG4gIH1cXHJcXG4gIDEwMCUge1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcblxcclxcbmEge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgY29sb3I6ICRibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3RlciB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC1yb3c6IC0yIC8gLTE7XFxyXFxuICBncmlkLWNvbHVtbjogMSAvIC0xO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnktY29sb3I7XFxyXFxuICBjb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KSB7XFxyXFxuICAubWFpbi1jb250ZW50IHtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIGF1dG8gMWZyO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmN1cnJlbnQtdGFiIHtcXHJcXG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnRhc2sge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gYXV0bztcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG87XFxyXFxuICAgIHBhZGRpbmc6IDAgMTBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5ob21lLXRhc2tzIHtcXHJcXG4gICAgZ3JpZC1yb3c6IDMgLyAtMTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC50YXNrcy1oZWFkZXIge1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnRhc2stZGF0ZSB7XFxyXFxuICAgIHBhZGRpbmctcmlnaHQ6IDA7XFxyXFxuICAgIGp1c3RpZnktc2VsZjogZW5kO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnRhc2sgPiBpbWcge1xcclxcbiAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcXHJcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAtMTtcXHJcXG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDNweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5pbmZvLWRpc3BsYXkge1xcclxcbiAgICB3aWR0aDogNTAlO1xcclxcbiAgICBoZWlnaHQ6IDUwJTtcXHJcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuZHVlIHtcXHJcXG4gICAgcGFkZGluZy1yaWdodDogMDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLnRhc2sgPiAqIHtcXHJcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcclxcbiAgfVxcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBjb25zdCBjcmVhdGVUYXNrID0gKCkgPT4gKHtcclxuICBuYW1lOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1uYW1lJykudmFsdWUsXHJcbiAgZGVzY3JpcHRpb246IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLWRlc2NyaXB0aW9uJykudmFsdWUsXHJcbiAgZHVlRGF0ZTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2R1ZS1kYXRlJykudmFsdWUsXHJcbiAgcHJpb3JpdHk6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcmlvcml0eScpLnZhbHVlLFxyXG59KTsiLCJpbXBvcnQge0luZm9ybWF0aW9uSG9sZGVyfSBmcm9tICcuL2luZm9ybWF0aW9uaG9sZGVyLmpzJztcclxuaW1wb3J0IGRlbGV0ZUljb25QYXRoIGZyb20gJy4vYXNzZXRzL2ljb25zL2RlbGV0ZS1pY29uLnN2Zyc7XHJcbmltcG9ydCBjbG9zZUluZm9QYXRoIGZyb20gJy4vYXNzZXRzL2ljb25zL2Nsb3NlLWluZm8uc3ZnJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5VGFza3MoKSB7XHJcbiAgY29uc3QgaG9tZVRhc2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhvbWUtdGFza3MnKTtcclxuICBjb25zdCB0YXNrc0xlbmd0aCA9IEluZm9ybWF0aW9uSG9sZGVyLnRhc2tzLmxlbmd0aDtcclxuICBmb3IgKGxldCBpID0gdGFza3NMZW5ndGggLSAxOyBpIDwgdGFza3NMZW5ndGg7IGkrKykge1xyXG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBkaXYuY2xhc3NMaXN0LmFkZCgndGFzaycpO1xyXG4gICAgZGl2LnNldEF0dHJpYnV0ZSgnaWQnLCBpKTtcclxuXHJcbiAgICBjb25zdCB0YXNrTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIHRhc2tOYW1lLmNsYXNzTGlzdC5hZGQoJ3Rhc2stbicpO1xyXG4gICAgdGFza05hbWUudGV4dENvbnRlbnQgPSBJbmZvcm1hdGlvbkhvbGRlci50YXNrc1tpXS5uYW1lO1xyXG4gICAgZGl2LmFwcGVuZENoaWxkKHRhc2tOYW1lKTtcclxuXHJcbiAgICBjb25zdCB0YXNrRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIHRhc2tEYXRlLmNsYXNzTGlzdC5hZGQoJ3Rhc2stZGF0ZScpO1xyXG4gICAgdGFza0RhdGUudGV4dENvbnRlbnQgPSBJbmZvcm1hdGlvbkhvbGRlci50YXNrc1tpXS5kdWVEYXRlO1xyXG4gICAgZGl2LmFwcGVuZENoaWxkKHRhc2tEYXRlKTtcclxuXHJcblxyXG4gICAgY29uc3QgZGVsZXRlSWNvbiA9IG5ldyBJbWFnZSgpO1xyXG4gICAgZGVsZXRlSWNvbi5jbGFzc0xpc3QuYWRkKCdkZWxldGUtdGFzaycpO1xyXG4gICAgZGVsZXRlSWNvbi5zcmMgPSBkZWxldGVJY29uUGF0aDtcclxuICAgIGRpdi5hcHBlbmRDaGlsZChkZWxldGVJY29uKTtcclxuXHJcbiAgICBob21lVGFza3MuYXBwZW5kQ2hpbGQoZGl2KTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5QWxsVGFza0luZm8oYXJyYXlJbmRleCkge1xyXG4gIGNvbnN0IGluZm9EaXNwbGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgaW5mb0Rpc3BsYXkuY2xhc3NMaXN0LmFkZCgnaW5mby1kaXNwbGF5Jyk7XHJcbiAgXHJcbiAgY29uc3QgdGFza05hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgdGFza05hbWUudGV4dENvbnRlbnQgPSBJbmZvcm1hdGlvbkhvbGRlci50YXNrc1thcnJheUluZGV4XS5uYW1lO1xyXG4gIGNvbnN0IHRhc2tEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICB0YXNrRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBJbmZvcm1hdGlvbkhvbGRlci50YXNrc1thcnJheUluZGV4XS5kZXNjcmlwdGlvbjtcclxuICBjb25zdCB0YXNrRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICB0YXNrRGF0ZS50ZXh0Q29udGVudCA9IGBEdWU6ICR7SW5mb3JtYXRpb25Ib2xkZXIudGFza3NbYXJyYXlJbmRleF0uZHVlRGF0ZX1gO1xyXG4gIGNvbnN0IHRhc2tQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICB0YXNrUHJpb3JpdHkudGV4dENvbnRlbnQgPSBgUHJpb3JpdHk6ICR7SW5mb3JtYXRpb25Ib2xkZXIudGFza3NbYXJyYXlJbmRleF0ucHJpb3JpdHkudG9VcHBlckNhc2UoKX1gOyBcclxuXHJcbiAgY29uc3QgY2xvc2VJbmZvID0gbmV3IEltYWdlKCk7XHJcbiAgY2xvc2VJbmZvLnNyYyA9IGNsb3NlSW5mb1BhdGg7XHJcbiAgY2xvc2VJbmZvLmNsYXNzTGlzdC5hZGQoJ2Nsb3NlLWluZm8nKTtcclxuICBcclxuICBjb25zdCBib3JkZXIgPSBzZWxlY3RQcmlvcml0eUJvcmRlcihJbmZvcm1hdGlvbkhvbGRlci50YXNrc1thcnJheUluZGV4XS5wcmlvcml0eSk7XHJcbiAgaW5mb0Rpc3BsYXkuc3R5bGUuYm9yZGVyID0gYm9yZGVyO1xyXG5cclxuICBpbmZvRGlzcGxheS5hcHBlbmRDaGlsZChjbG9zZUluZm8pO1xyXG4gIGluZm9EaXNwbGF5LmFwcGVuZENoaWxkKHRhc2tOYW1lKTtcclxuICBpbmZvRGlzcGxheS5hcHBlbmRDaGlsZCh0YXNrRGVzY3JpcHRpb24pO1xyXG4gIGluZm9EaXNwbGF5LmFwcGVuZENoaWxkKHRhc2tEYXRlKTtcclxuICBpbmZvRGlzcGxheS5hcHBlbmRDaGlsZCh0YXNrUHJpb3JpdHkpO1xyXG5cclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1jb250ZW50JykuYXBwZW5kQ2hpbGQoaW5mb0Rpc3BsYXkpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZWxlY3RQcmlvcml0eUJvcmRlcihwcmlvcml0eSkge1xyXG4gIGlmIChwcmlvcml0eSA9PT0gJ2xvdycpIHJldHVybiAnMnB4IHNvbGlkICMyZDdiZDInO1xyXG4gIGlmIChwcmlvcml0eSA9PT0gJ21lZGl1bScpIHJldHVybiAnMnB4IHNvbGlkICNmZmM2MDAnO1xyXG4gIHJldHVybiAnMnB4IHNvbGlkICNmZjAwMTgnO1xyXG59XHJcbiIsImltcG9ydCB0aWNrIGZyb20gJy4vYXNzZXRzL2ljb25zL2NoZWNrLWljb24ucG5nJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhZGp1c3RUaWNrTWFyaygpIHtcclxuICBjb25zdCB0aWNrTWFyayA9IG5ldyBJbWFnZSgpO1xyXG4gIHRpY2tNYXJrLnNyYyA9IHRpY2s7XHJcbiAgdGlja01hcmsuc3R5bGUud2lkdGggPSAnNDBweCc7XHJcbiAgdGlja01hcmsuc3R5bGUuaGVpZ2h0ID0gJzQwcHgnO1xyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXInKS5hcHBlbmRDaGlsZCh0aWNrTWFyayk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB0YXNrc0hlYWRlcigpIHtcclxuICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBkaXYuY2xhc3NMaXN0LmFkZCgndGFza3MtaGVhZGVyJyk7XHJcbiAgY29uc3QgaDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG4gIGgzLnRleHRDb250ZW50ID0gJ05hbWUnO1xyXG4gIGNvbnN0IGhlYWRlcjMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG4gIGhlYWRlcjMuY2xhc3NMaXN0LmFkZCgnZHVlJyk7XHJcbiAgaGVhZGVyMy50ZXh0Q29udGVudCA9ICdEdWUgRGF0ZSc7XHJcblxyXG4gIGRpdi5hcHBlbmRDaGlsZChoMyk7XHJcbiAgZGl2LmFwcGVuZENoaWxkKGhlYWRlcjMpO1xyXG4gIHJldHVybiBkaXY7XHJcbn0iLCJpbXBvcnQgJy4vc3R5bGVzLnNjc3MnO1xyXG5pbXBvcnQge2FkanVzdFRpY2tNYXJrfSBmcm9tICcuL2hlYWRlci5qcyc7XHJcbmltcG9ydCB7TWFuYWdlRm9ybX0gZnJvbSAnLi90YXNrZm9ybS5qcyc7XHJcbmltcG9ydCB7SW5mb3JtYXRpb25Ib2xkZXJ9IGZyb20gJy4vaW5mb3JtYXRpb25ob2xkZXIuanMnO1xyXG5pbXBvcnQge2NyZWF0ZVRhc2t9IGZyb20gJy4vY3JlYXRldGFzay5qcyc7XHJcbmltcG9ydCB7TWVkaWF0b3JET019IGZyb20gJy4vbWVkaWF0b3Jkb20uanMnO1xyXG5pbXBvcnQge2Rpc3BsYXlUYXNrc30gZnJvbSAnLi9kaXNwbGF5dGFza3MuanMnO1xyXG5cclxuXHJcbmFkanVzdFRpY2tNYXJrKCk7XHJcbk1lZGlhdG9yRE9NLmluaXRpYWxpemUoKTtcclxuY29uc3QgZm9ybSA9IE1hbmFnZUZvcm0oKTtcclxuZm9ybS5pbml0aWFsaXplKCk7XHJcblxyXG4iLCJleHBvcnQgY2xhc3MgSW5mb3JtYXRpb25Ib2xkZXIge1xyXG4gIHN0YXRpYyB0YXNrcyA9IFtdO1xyXG5cclxuICBzdGF0aWMgcHJvamVjdHMgPSBbXTtcclxuXHJcbiAgc3RhdGljIGFkZFRhc2soc29tZVRhc2spIHtcclxuICAgIHJldHVybiB0aGlzLnRhc2tzLnB1c2goc29tZVRhc2spO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIHJlbW92ZVRhc2soYVRhc2spIHtcclxuICAgIGNvbnN0IHRhc2tJbmRleCA9IE51bWJlcihhVGFzay5pZCk7XHJcbiAgICB0aGlzLnRhc2tzLnNwbGljZSh0YXNrSW5kZXgsIDEpO1xyXG4gICAgdGhpcy4jYWRqdXN0VGFza3NJZCh0YXNrSW5kZXgpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljICNhZGp1c3RUYXNrc0lkKGRlbGV0ZWRUYXNrSWQpIHtcclxuICAgIGNvbnN0IGRpdnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRhc2tcIik7XHJcbiAgICBpZiAoZGl2cy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGRpdnMuZm9yRWFjaChkaXYgPT4ge1xyXG4gICAgICAgIGlmIChkaXYuaWQgPiBkZWxldGVkVGFza0lkKSB7XHJcbiAgICAgICAgICBjb25zdCBjdXJyZW50SWQgPSBwYXJzZUludChkaXYuaWQubWF0Y2goL1xcZCsvKVswXSk7XHJcbiAgICAgICAgICBkaXYuaWQgPSBkaXYuaWQucmVwbGFjZShjdXJyZW50SWQsIGN1cnJlbnRJZCAtIDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgYWRkUHJvamVjdChzb21lUHJvamVjdCkge1xyXG4gICAgcmV0dXJuIHRoaXMucHJvamVjdHMucHVzaChzb21lUHJvamVjdCk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgcmVtb3ZlUHJvamVjdChhUHJvamVjdCkge1xyXG4gICAgcmV0dXJuIHRoaXMucHJvamVjdHMuc3BsaWNlKGFQcm9qZWN0LCAxKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgY3JlYXRlVGFzayB9IGZyb20gXCIuL2NyZWF0ZXRhc2suanNcIjtcclxuaW1wb3J0IHsgSW5mb3JtYXRpb25Ib2xkZXIgfSBmcm9tIFwiLi9pbmZvcm1hdGlvbmhvbGRlci5qc1wiO1xyXG5pbXBvcnQgeyBkaXNwbGF5VGFza3MsIGRpc3BsYXlBbGxUYXNrSW5mbyB9IGZyb20gXCIuL2Rpc3BsYXl0YXNrcy5qc1wiO1xyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBNZWRpYXRvckRPTSB7XHJcbiAgc3RhdGljIGluc2VydFRhc2tET00oKSB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3VibWl0JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtJykuY2hlY2tWYWxpZGl0eSgpKSB7XHJcbiAgICAgICAgSW5mb3JtYXRpb25Ib2xkZXIuYWRkVGFzayhjcmVhdGVUYXNrKCkpO1xyXG4gICAgICAgIGRpc3BsYXlUYXNrcygpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBzdGF0aWMgc2hvd1Rhc2tJbmZvKCkge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tY29udGVudCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygndGFzay1uJykpIHtcclxuICAgICAgICBkaXNwbGF5QWxsVGFza0luZm8oTnVtYmVyKGUudGFyZ2V0LnBhcmVudEVsZW1lbnQuaWQpKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgc3RhdGljIGNsb3NlVGFza0luZm8oKSB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1jb250ZW50JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjbG9zZS1pbmZvJykpIGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucmVtb3ZlKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBkZWxldGVUYXNrRE9NKCkge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tY29udGVudCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnZGVsZXRlLXRhc2snKSkge1xyXG4gICAgICAgIEluZm9ybWF0aW9uSG9sZGVyLnJlbW92ZVRhc2soZS50YXJnZXQucGFyZW50RWxlbWVudCk7XHJcbiAgICAgICAgZS50YXJnZXQucGFyZW50RWxlbWVudC5yZW1vdmUoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgc3RhdGljIGFkanVzdERlbGV0ZUljb24oKSB7XHJcbiAgICBsZXQgbWVzc2FnZURpc3BsYXllZCA9IGZhbHNlO1xyXG5cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKSA9PiB7XHJcbiAgICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8PSA1MDAgJiYgIW1lc3NhZ2VEaXNwbGF5ZWQpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnLi4uJyk7XHJcbiAgICAgICAgbWVzc2FnZURpc3BsYXllZCA9IHRydWU7XHJcbiAgICAgIH0gZWxzZSBpZiAod2luZG93LmlubmVyV2lkdGggPiA1MDApIHtcclxuICAgICAgICBtZXNzYWdlRGlzcGxheWVkID0gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHN0YXRpYyBpbml0aWFsaXplKCkge1xyXG4gICAgdGhpcy5pbnNlcnRUYXNrRE9NKCk7XHJcbiAgICB0aGlzLnNob3dUYXNrSW5mbygpO1xyXG4gICAgdGhpcy5jbG9zZVRhc2tJbmZvKCk7XHJcbiAgICB0aGlzLmRlbGV0ZVRhc2tET00oKTtcclxuICAgIHRoaXMuYWRqdXN0RGVsZXRlSWNvbigpO1xyXG4gIH1cclxufTtcclxuIiwiZXhwb3J0IGNvbnN0IE1hbmFnZUZvcm0gPSAoKSA9PiAoe1xyXG4gIGFkZFRhc2tCdXR0b246IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtdGFzaycpLFxyXG4gIGZvcm06IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0nKSxcclxuXHJcbiAgY2xlYXJGb3JtKCkge1xyXG4gICAgY29uc3QgZm9ybUlucHV0cyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnZm9ybSBpbnB1dCcpKTtcclxuICAgIGZvcm1JbnB1dHMuZm9yRWFjaCgoaW5wdXQpID0+IHtcclxuICAgICAgaW5wdXQudmFsdWUgPSAnJztcclxuICAgIH0pXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCd0ZXh0YXJlYScpLnZhbHVlID0gJyc7XHJcbiAgfSxcclxuXHJcbiAgb3BlbkZvcm0oKSB7XHJcbiAgICB0aGlzLmFkZFRhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIHRoaXMuZm9ybS5zdHlsZS5kaXNwbGF5ID0gJ2dyaWQnO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuXHJcbiAgY2xvc2VGb3JtKCkge1xyXG4gICAgdGhpcy5mb3JtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgfSxcclxuXHJcbiAgY2FuY2VsKCkge1xyXG4gICAgY29uc3QgY2xvc2VGb3JtQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhbmNlbCcpO1xyXG4gICAgY2xvc2VGb3JtQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICB0aGlzLmNsb3NlRm9ybSgpO1xyXG4gICAgICB0aGlzLmNsZWFyRm9ybSgpO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuXHJcbiAgc3VibWl0Rm9ybSgpIHtcclxuICAgIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdWJtaXQnKTtcclxuICAgIHN1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgaWYgKHRoaXMuZm9ybS5jaGVja1ZhbGlkaXR5KCkpIHtcclxuICAgICAgICB0aGlzLmNsb3NlRm9ybSgpO1xyXG4gICAgICAgIHRoaXMuY2xlYXJGb3JtKCk7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0pO1xyXG4gIH0sXHJcblxyXG4gIGluaXRpYWxpemUoKSB7XHJcbiAgICB0aGlzLm9wZW5Gb3JtKCk7XHJcbiAgICB0aGlzLmNhbmNlbCgpO1xyXG4gICAgdGhpcy5zdWJtaXRGb3JtKCk7XHJcbiAgfSxcclxufSk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==