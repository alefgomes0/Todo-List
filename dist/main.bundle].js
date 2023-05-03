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
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: \"Abel\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"woff2\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"woff\");\n  font-style: normal;\n}\n* {\n  box-sizing: border-box;\n}\n\nbody,\nhtml {\n  font-family: \"Abel\", system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n  margin: 0;\n  padding: 0;\n  height: 100%;\n}\n\n.page-wrapper {\n  display: grid;\n  grid-template-rows: 2fr 8fr 1fr;\n  grid-template-columns: 1fr 6fr;\n  height: 100%;\n}\n\n.header > h1 {\n  font-size: 40px;\n  font-weight: 800;\n  color: #b2b8b7;\n}\n\n.header {\n  display: flex;\n  align-items: center;\n  grid-row: 1/2;\n  grid-column: 1/-1;\n  background: rgb(7, 18, 24);\n  background: linear-gradient(180deg, rgb(7, 18, 24) 25%, rgb(11, 19, 46) 50%, rgb(17, 29, 68) 75%, rgb(17, 29, 68) 100%);\n  gap: 15px;\n  padding: 0 30px;\n}\n\n.sidebar {\n  display: grid;\n  grid-row: 2/3;\n  grid-column: 1/2;\n  background-color: #b2b8b7;\n  color: #111D44;\n  align-content: start;\n  padding: 30px;\n  gap: 30px;\n  font-size: 27px;\n  font-weight: 600;\n}\n\n.sidebar > div:not(.projects) {\n  cursor: pointer;\n}\n\n.sidebar > div:hover:not(.projects) {\n  background-color: rgb(198, 209, 207);\n  border-radius: 10px;\n}\n\n.main-content {\n  display: grid;\n  grid-template-rows: auto 1fr;\n  grid-template-columns: auto 3fr 1fr 1fr;\n  grid-row: 2/3;\n  grid-column: 2/-1;\n  background-color: #dfd5d5;\n}\n\n.add-task {\n  display: inline-flex;\n  align-items: center;\n  margin: 0;\n  gap: 5px;\n  cursor: pointer;\n  margin: 20px 20px;\n  padding: 3px 6px;\n  grid-row: 1/2;\n  grid-column: 1/2;\n}\n\n.add-task > * {\n  margin: 0;\n  padding: 0;\n}\n\n.add-task:hover {\n  background-color: #b2b8b7;\n  border-radius: 8px;\n}\n\n.add-task:hover > svg {\n  transform: rotate(90deg);\n  transition: 0.4s ease-in-out;\n}\n\n.current-tab {\n  color: #111D44;\n  font-size: 30px;\n  font-weight: 600;\n  justify-self: center;\n  grid-column: 1/-1;\n  grid-row: 1/2;\n}\n\nform {\n  position: fixed;\n  display: none;\n  gap: 10px;\n  z-index: 99;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background-color: #b2b8b7;\n  color: #111D44;\n  font-weight: 500;\n  padding: 10px 20px;\n  border-radius: 10px;\n  box-shadow: 0 1px 1px;\n}\n\n.widget {\n  display: flex;\n  flex-direction: column;\n}\n\n.form-buttons {\n  display: flex;\n  justify-content: space-around;\n}\n\n.form-buttons > * {\n  cursor: pointer;\n}\n\n.form-buttons > svg:hover {\n  background-color: #c3c7c7;\n}\n\n.home-tasks {\n  display: grid;\n  grid-template-columns: 1fr 4fr 1fr;\n  grid-template-rows: repeat(auto-fit, minmax(auto, 1fr));\n  align-content: start;\n  grid-row: 2/-1;\n  grid-column: 1/-1;\n}\n\n.tasks-header {\n  display: inline-flex;\n  justify-content: space-between;\n  font-weight: 600;\n  padding: 0 10px;\n  padding-left: 40px;\n}\n\n.due {\n  padding-right: 30px;\n}\n\n.task,\n.task-project {\n  display: flex;\n  padding: 0 10px;\n}\n\n.task-done {\n  margin-right: 10px;\n}\n\n.task-n {\n  margin-right: auto;\n  cursor: pointer;\n}\n\n.task:hover {\n  background-color: #e6dede;\n}\n\n.task-date {\n  padding-right: 10px;\n}\n\n.home-tasks > * {\n  grid-column: 2/3;\n  border-bottom: 1px solid #111D44;\n}\n\n.delete-task,\n.delete-task-project {\n  cursor: pointer;\n}\n\n.delete-task:hover,\n.delete-task-project:hover {\n  animation: move-up 0.5s ease-in-out;\n}\n\n.info-display {\n  position: fixed;\n  display: grid;\n  grid-template-columns: auto;\n  grid-template-rows: auto;\n  width: 50%;\n  height: 50%;\n  gap: 5px;\n  z-index: 99;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background-color: #b2b8b7;\n  font-weight: 600;\n  padding: 10px 20px;\n  border-radius: 10px;\n  box-shadow: 0 1px 1px;\n  color: #111D44;\n  overflow-y: auto;\n}\n\n.close-info {\n  justify-self: end;\n  cursor: pointer;\n}\n\n.projects .new-project {\n  display: none;\n}\n.projects:hover .new-project {\n  display: block;\n  font-size: 15px;\n  padding: 10px 0;\n  padding-left: 20px;\n}\n\n.new-project:hover {\n  cursor: pointer;\n}\n\n.project-form {\n  position: fixed;\n  gap: 10px;\n  z-index: 99;\n  top: 50%;\n  left: 50%;\n  width: 200px;\n  height: 100px;\n  transform: translate(-50%, -50%);\n  background-color: #b2b8b7;\n  color: #111D44;\n  font-weight: 500;\n  padding: 10px 20px;\n  border-radius: 10px;\n  box-shadow: 0 1px 1px;\n}\n\n.submit-project,\n.cancel-project {\n  width: auto;\n  height: auto;\n  padding: 3px 9px;\n  cursor: pointer;\n  border-radius: 10px;\n}\n\n.submit-project {\n  background-color: #111D44;\n  color: #b2b8b7;\n}\n\n.submit-project:hover {\n  background-color: #2c3d74;\n  color: #a5b0ae;\n}\n\n.cancel-project {\n  background-color: #b2b8b7;\n  color: #111D44;\n}\n\n.cancel-project:hover {\n  background-color: #d4d9d8;\n  color: #152043;\n}\n\n.project {\n  cursor: pointer;\n  font-size: 16px;\n  padding-left: 15px;\n}\n\n.project:hover {\n  background-color: #d4d9d8;\n}\n\n.delete-project {\n  grid-row: 1/2;\n  grid-column: 3/4;\n  justify-self: end;\n  align-self: center;\n  cursor: pointer;\n  width: 32px;\n  height: 32px;\n}\n\n.delete-project:hover {\n  animation: move-up 0.5s ease-in-out;\n}\n\n@keyframes move-up {\n  0% {\n    transform: translateY(0);\n  }\n  50% {\n    transform: translateY(-5px);\n  }\n  100% {\n    transform: translateY(0);\n  }\n}\na {\n  text-decoration: none;\n  color: #b2b8b7;\n}\n\na:visited {\n  color: #b2b8b7;\n}\n\n.footer {\n  display: grid;\n  grid-row: -2/-1;\n  grid-column: 1/-1;\n  background-color: #111D44;\n  color: #b2b8b7;\n  padding: 0 20px;\n}\n\n@media (max-width: 500px) {\n  .main-content {\n    grid-template-rows: auto auto 1fr;\n  }\n  .current-tab {\n    grid-row: 2/3;\n  }\n  .task {\n    display: grid;\n    grid-template-rows: auto auto;\n    grid-template-columns: auto auto;\n    padding: 0 10px;\n  }\n  .home-tasks {\n    grid-row: 3/-1;\n  }\n  .tasks-header {\n    padding: 0;\n  }\n  .task-date {\n    padding-right: 0;\n    justify-self: end;\n  }\n  .task > img {\n    justify-self: end;\n    grid-column: 2/-1;\n    padding-right: 20px;\n    padding-bottom: 3px;\n  }\n  .info-display {\n    width: 50%;\n    height: 50%;\n  }\n  .due {\n    padding-right: 0;\n  }\n  .task > * {\n    font-size: 12px;\n  }\n}", "",{"version":3,"sources":["webpack://./src/styles.scss"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n  font-family: 'Abel';\n  src: url('./assets/fonts/abel-regular-webfont.woff2') format('woff2'),\n    url('./assets/fonts/abel-regular-webfont.woff') format('woff');\n    font-style: normal;\n}\n\n$primary-color: #111D44;\n$secondary-color: #b2b8b7;\n$complementary-color: #000;\n$yellow: #ffc600;\n$black: #272727;\n\n* {\n  box-sizing: border-box;\n}\n\nbody,\nhtml {\n  font-family: 'Abel', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n  margin: 0;\n  padding: 0;\n  height: 100%;\n}\n\n.page-wrapper {\n  display: grid;\n  grid-template-rows: 2fr 8fr 1fr;\n  grid-template-columns: 1fr 6fr;\n  height: 100%;\n}\n \n.header > h1 {\n  font-size: 40px;\n  font-weight: 800;\n  color: $secondary-color;\n}\n\n.header {\n  display: flex;\n  align-items: center;\n  grid-row: 1 / 2;\n  grid-column: 1 / -1;\n  background: rgb(7,18,24);\n  background: linear-gradient(180deg, rgba(7,18,24,1) 25%, rgba(11,19,46,1) 50%, rgba(17,29,68,1) 75%, rgba(17,29,68,1) 100%);\n  gap: 15px;\n  padding: 0 30px;\n}\n\n.sidebar {\n  display: grid;\n  grid-row: 2 / 3;\n  grid-column: 1 / 2;\n  background-color: $secondary-color;\n  color: $primary-color;\n  align-content: start;\n  padding: 30px;\n  gap: 30px;\n  font-size: 27px;\n  font-weight: 600;\n}\n\n.sidebar > div:not(.projects) {\n  cursor: pointer;\n}\n\n.sidebar > div:hover:not(.projects) {\n  background-color: rgb(198, 209, 207);\n  border-radius: 10px;\n}\n\n.main-content {\n  display: grid;\n  grid-template-rows: auto 1fr;\n  grid-template-columns: auto 3fr 1fr 1fr;\n  grid-row: 2 / 3;\n  grid-column: 2 / -1;\n  background-color: #dfd5d5;\n}\n\n.add-task {\n  display: inline-flex;\n  align-items: center;\n  margin: 0;\n  gap: 5px;\n  cursor: pointer;\n  margin: 20px 20px;\n  padding: 3px 6px;\n  grid-row: 1 / 2;\n  grid-column: 1 / 2;\n}\n\n.add-task > * {\n  margin: 0;\n  padding: 0;\n}\n\n.add-task:hover {\n  background-color: $secondary-color;\n  border-radius: 8px;\n}\n\n.add-task:hover > svg {\n  transform: rotate(90deg);\n  transition: 0.4s ease-in-out;\n}\n\n.current-tab {\n  color: $primary-color;\n  font-size: 30px;\n  font-weight: 600;\n  justify-self: center;\n  grid-column: 1 / -1;\n  grid-row: 1 / 2;\n}\n\nform {\n  position: fixed;\n  display: none;\n  gap: 10px;\n  z-index: 99;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background-color: $secondary-color;\n  color: $primary-color;\n  font-weight: 500;\n  padding: 10px 20px;\n  border-radius: 10px;\n  box-shadow: 0 1px 1px;\n}\n\n.widget {\n  display: flex;\n  flex-direction: column;\n}\n\n.form-buttons {\n  display: flex;\n  justify-content: space-around;\n}\n\n.form-buttons > * {\n  cursor: pointer;\n}\n\n.form-buttons > svg:hover {\n  background-color: #c3c7c7;\n}\n\n.home-tasks {\n  display: grid;\n  grid-template-columns: 1fr 4fr 1fr;\n  grid-template-rows: repeat(auto-fit, minmax(auto, 1fr));\n  align-content: start;\n  grid-row: 2 / -1;\n  grid-column: 1 / -1;\n}\n\n.tasks-header {\n  display: inline-flex;\n  justify-content: space-between;\n  font-weight: 600;\n  padding: 0 10px;\n  padding-left: 40px;\n}\n\n\n.due {\n  padding-right: 30px;\n}\n\n.task,\n.task-project {\n  display: flex;\n  padding: 0 10px;\n}\n\n.task-done {\n  margin-right: 10px;\n}\n\n.task-n {\n  margin-right: auto;\n  cursor: pointer;\n}\n\n.task:hover {\n  background-color: #e6dede;\n}\n\n.task-date {\n  padding-right: 10px;\n}\n\n.home-tasks > * {\n  grid-column: 2 / 3;\n  border-bottom: 1px solid $primary-color;\n}\n\n.delete-task,\n.delete-task-project {\n  cursor: pointer;\n}\n\n.delete-task:hover,\n.delete-task-project:hover {\n  animation: move-up 0.5s ease-in-out;\n}\n\n.info-display {\n  position: fixed;\n  display: grid;\n  grid-template-columns: auto;\n  grid-template-rows: auto;\n  width: 50%;\n  height: 50%;\n  gap: 5px;\n  z-index: 99;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background-color: $secondary-color;\n  font-weight: 600;\n  padding: 10px 20px;\n  border-radius: 10px;\n  box-shadow: 0 1px 1px;\n  color: $primary-color;\n  overflow-y: auto;\n}\n\n.close-info {\n  justify-self: end;\n  cursor: pointer;\n}\n\n.projects {\n  .new-project {\n    display: none;\n  }\n\n  &:hover .new-project {\n    display: block;\n    font-size: 15px;\n    padding: 10px 0;\n    padding-left: 20px;\n  }\n}\n\n.new-project:hover {\n  cursor: pointer;\n}\n\n.project-form {\n  position: fixed;\n  gap: 10px;\n  z-index: 99;\n  top: 50%;\n  left: 50%;\n  width: clamp(100px, 200px, 300px);\n  height: clamp(50px, 100px, 150px);\n  transform: translate(-50%, -50%);\n  background-color: $secondary-color;\n  color: $primary-color;\n  font-weight: 500;\n  padding: 10px 20px;\n  border-radius: 10px;\n  box-shadow: 0 1px 1px;\n}\n\n.submit-project,\n.cancel-project {\n  width: auto;\n  height: auto;\n  padding: 3px 9px;\n  cursor: pointer;\n  border-radius: 10px;\n}\n\n.submit-project {\n  background-color: $primary-color;\n  color: $secondary-color;\n}\n\n.submit-project:hover {\n  background-color: #2c3d74;\n  color: #a5b0ae;\n}\n\n.cancel-project {\n  background-color: $secondary-color;\n  color: $primary-color;\n}\n\n.cancel-project:hover {\n  background-color: #d4d9d8;\n  color: #152043;\n}\n\n.project {\n  cursor: pointer;\n  font-size: 16px;\n  padding-left: 15px;\n}\n\n.project:hover {\n  background-color: #d4d9d8;\n}\n\n.delete-project {\n  grid-row: 1 / 2;\n  grid-column: 3 /4;\n  justify-self: end;\n  align-self: center;\n  cursor: pointer;\n  width: 32px;\n  height: 32px;\n}\n\n.delete-project:hover {\n  animation: move-up 0.5s ease-in-out;\n}\n\n\n@keyframes move-up {\n  0% {\n    transform: translateY(0);\n  }\n  50% {\n    transform: translateY(-5px);\n  }\n  100% {\n    transform: translateY(0);\n  }\n}\n\n\na {\n  text-decoration: none;\n  color: $secondary-color;\n}\n\na:visited{\n  color: $secondary-color;\n}\n\n.footer {\n  display: grid;\n  grid-row: -2 / -1;\n  grid-column: 1 / -1;\n  background-color: $primary-color;\n  color: $secondary-color;\n  padding: 0 20px;\n}\n\n@media (max-width: 500px) {\n  .main-content {\n    grid-template-rows: auto auto 1fr;\n  }\n\n  .current-tab {\n    grid-row: 2 / 3;\n  }\n\n  .task {\n    display: grid;\n    grid-template-rows: auto auto;\n    grid-template-columns: auto auto;\n    padding: 0 10px;\n  }\n\n  .home-tasks {\n    grid-row: 3 / -1;\n  }\n\n  .tasks-header {\n    padding: 0;\n  }\n\n  .task-date {\n    padding-right: 0;\n    justify-self: end;\n  }\n\n  .task > img {\n    justify-self: end;\n    grid-column: 2 / -1;\n    padding-right: 20px;\n    padding-bottom: 3px;\n  }\n\n  .info-display {\n    width: 50%;\n    height: 50%;\n  }\n\n  .due {\n    padding-right: 0;\n  }\n  \n  .task > * {\n    font-size: 12px;\n  }\n}"],"sourceRoot":""}]);
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

/***/ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/defaultOptions/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getDefaultOptions": () => (/* binding */ getDefaultOptions),
/* harmony export */   "setDefaultOptions": () => (/* binding */ setDefaultOptions)
/* harmony export */ });
var defaultOptions = {};
function getDefaultOptions() {
  return defaultOptions;
}
function setDefaultOptions(newOptions) {
  defaultOptions = newOptions;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getTimezoneOffsetInMilliseconds)
/* harmony export */ });
/**
 * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.
 * They usually appear for dates that denote time before the timezones were introduced
 * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891
 * and GMT+01:00:00 after that date)
 *
 * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,
 * which would lead to incorrect calculations.
 *
 * This function returns the timezone offset in milliseconds that takes seconds in account.
 */
function getTimezoneOffsetInMilliseconds(date) {
  var utcDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()));
  utcDate.setUTCFullYear(date.getFullYear());
  return date.getTime() - utcDate.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/toInteger/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/toInteger/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toInteger)
/* harmony export */ });
function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }
  var number = Number(dirtyNumber);
  if (isNaN(number)) {
    return number;
  }
  return number < 0 ? Math.ceil(number) : Math.floor(number);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/constants/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/constants/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "daysInWeek": () => (/* binding */ daysInWeek),
/* harmony export */   "daysInYear": () => (/* binding */ daysInYear),
/* harmony export */   "maxTime": () => (/* binding */ maxTime),
/* harmony export */   "millisecondsInHour": () => (/* binding */ millisecondsInHour),
/* harmony export */   "millisecondsInMinute": () => (/* binding */ millisecondsInMinute),
/* harmony export */   "millisecondsInSecond": () => (/* binding */ millisecondsInSecond),
/* harmony export */   "minTime": () => (/* binding */ minTime),
/* harmony export */   "minutesInHour": () => (/* binding */ minutesInHour),
/* harmony export */   "monthsInQuarter": () => (/* binding */ monthsInQuarter),
/* harmony export */   "monthsInYear": () => (/* binding */ monthsInYear),
/* harmony export */   "quartersInYear": () => (/* binding */ quartersInYear),
/* harmony export */   "secondsInDay": () => (/* binding */ secondsInDay),
/* harmony export */   "secondsInHour": () => (/* binding */ secondsInHour),
/* harmony export */   "secondsInMinute": () => (/* binding */ secondsInMinute),
/* harmony export */   "secondsInMonth": () => (/* binding */ secondsInMonth),
/* harmony export */   "secondsInQuarter": () => (/* binding */ secondsInQuarter),
/* harmony export */   "secondsInWeek": () => (/* binding */ secondsInWeek),
/* harmony export */   "secondsInYear": () => (/* binding */ secondsInYear)
/* harmony export */ });
/**
 * Days in 1 week.
 *
 * @name daysInWeek
 * @constant
 * @type {number}
 * @default
 */
var daysInWeek = 7;

/**
 * Days in 1 year
 * One years equals 365.2425 days according to the formula:
 *
 * > Leap year occures every 4 years, except for years that are divisable by 100 and not divisable by 400.
 * > 1 mean year = (365+1/4-1/100+1/400) days = 365.2425 days
 *
 * @name daysInYear
 * @constant
 * @type {number}
 * @default
 */
var daysInYear = 365.2425;

/**
 * Maximum allowed time.
 *
 * @name maxTime
 * @constant
 * @type {number}
 * @default
 */
var maxTime = Math.pow(10, 8) * 24 * 60 * 60 * 1000;

/**
 * Milliseconds in 1 minute
 *
 * @name millisecondsInMinute
 * @constant
 * @type {number}
 * @default
 */
var millisecondsInMinute = 60000;

/**
 * Milliseconds in 1 hour
 *
 * @name millisecondsInHour
 * @constant
 * @type {number}
 * @default
 */
var millisecondsInHour = 3600000;

/**
 * Milliseconds in 1 second
 *
 * @name millisecondsInSecond
 * @constant
 * @type {number}
 * @default
 */
var millisecondsInSecond = 1000;

/**
 * Minimum allowed time.
 *
 * @name minTime
 * @constant
 * @type {number}
 * @default
 */
var minTime = -maxTime;

/**
 * Minutes in 1 hour
 *
 * @name minutesInHour
 * @constant
 * @type {number}
 * @default
 */
var minutesInHour = 60;

/**
 * Months in 1 quarter
 *
 * @name monthsInQuarter
 * @constant
 * @type {number}
 * @default
 */
var monthsInQuarter = 3;

/**
 * Months in 1 year
 *
 * @name monthsInYear
 * @constant
 * @type {number}
 * @default
 */
var monthsInYear = 12;

/**
 * Quarters in 1 year
 *
 * @name quartersInYear
 * @constant
 * @type {number}
 * @default
 */
var quartersInYear = 4;

/**
 * Seconds in 1 hour
 *
 * @name secondsInHour
 * @constant
 * @type {number}
 * @default
 */
var secondsInHour = 3600;

/**
 * Seconds in 1 minute
 *
 * @name secondsInMinute
 * @constant
 * @type {number}
 * @default
 */
var secondsInMinute = 60;

/**
 * Seconds in 1 day
 *
 * @name secondsInDay
 * @constant
 * @type {number}
 * @default
 */
var secondsInDay = secondsInHour * 24;

/**
 * Seconds in 1 week
 *
 * @name secondsInWeek
 * @constant
 * @type {number}
 * @default
 */
var secondsInWeek = secondsInDay * 7;

/**
 * Seconds in 1 year
 *
 * @name secondsInYear
 * @constant
 * @type {number}
 * @default
 */
var secondsInYear = secondsInDay * daysInYear;

/**
 * Seconds in 1 month
 *
 * @name secondsInMonth
 * @constant
 * @type {number}
 * @default
 */
var secondsInMonth = secondsInYear / 12;

/**
 * Seconds in 1 quarter
 *
 * @name secondsInQuarter
 * @constant
 * @type {number}
 * @default
 */
var secondsInQuarter = secondsInMonth * 3;

/***/ }),

/***/ "./node_modules/date-fns/esm/differenceInCalendarISOWeeks/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/date-fns/esm/differenceInCalendarISOWeeks/index.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ differenceInCalendarISOWeeks)
/* harmony export */ });
/* harmony import */ var _lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/getTimezoneOffsetInMilliseconds/index.js */ "./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js");
/* harmony import */ var _startOfISOWeek_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfISOWeek/index.js */ "./node_modules/date-fns/esm/startOfISOWeek/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



var MILLISECONDS_IN_WEEK = 604800000;

/**
 * @name differenceInCalendarISOWeeks
 * @category ISO Week Helpers
 * @summary Get the number of calendar ISO weeks between the given dates.
 *
 * @description
 * Get the number of calendar ISO weeks between the given dates.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @returns {Number} the number of calendar ISO weeks
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many calendar ISO weeks are between 6 July 2014 and 21 July 2014?
 * const result = differenceInCalendarISOWeeks(
 *   new Date(2014, 6, 21),
 *   new Date(2014, 6, 6)
 * )
 * //=> 3
 */
function differenceInCalendarISOWeeks(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var startOfISOWeekLeft = (0,_startOfISOWeek_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft);
  var startOfISOWeekRight = (0,_startOfISOWeek_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight);
  var timestampLeft = startOfISOWeekLeft.getTime() - (0,_lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(startOfISOWeekLeft);
  var timestampRight = startOfISOWeekRight.getTime() - (0,_lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(startOfISOWeekRight);

  // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)
  return Math.round((timestampLeft - timestampRight) / MILLISECONDS_IN_WEEK);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/endOfISOWeek/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/date-fns/esm/endOfISOWeek/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ endOfISOWeek)
/* harmony export */ });
/* harmony import */ var _endOfWeek_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../endOfWeek/index.js */ "./node_modules/date-fns/esm/endOfWeek/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name endOfISOWeek
 * @category ISO Week Helpers
 * @summary Return the end of an ISO week for the given date.
 *
 * @description
 * Return the end of an ISO week for the given date.
 * The result will be in the local timezone.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the end of an ISO week
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The end of an ISO week for 2 September 2014 11:55:00:
 * const result = endOfISOWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sun Sep 07 2014 23:59:59.999
 */
function endOfISOWeek(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  return (0,_endOfWeek_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate, {
    weekStartsOn: 1
  });
}

/***/ }),

/***/ "./node_modules/date-fns/esm/endOfWeek/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/endOfWeek/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ endOfWeek)
/* harmony export */ });
/* harmony import */ var _lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/defaultOptions/index.js */ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");




/**
 * @name endOfWeek
 * @category Week Helpers
 * @summary Return the end of a week for the given date.
 *
 * @description
 * Return the end of a week for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|Number} date - the original date
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Date} the end of a week
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // The end of a week for 2 September 2014 11:55:00:
 * const result = endOfWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sat Sep 06 2014 23:59:59.999
 *
 * @example
 * // If the week starts on Monday, the end of the week for 2 September 2014 11:55:00:
 * const result = endOfWeek(new Date(2014, 8, 2, 11, 55, 0), { weekStartsOn: 1 })
 * //=> Sun Sep 07 2014 23:59:59.999
 */
function endOfWeek(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$weekStartsOn, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var defaultOptions = (0,_lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();
  var weekStartsOn = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])((_ref = (_ref2 = (_ref3 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.weekStartsOn) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.weekStartsOn) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.weekStartsOn) !== null && _ref !== void 0 ? _ref : 0);

  // Test if weekStartsOn is between 0 and 6 _and_ is not NaN
  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(dirtyDate);
  var day = date.getDay();
  var diff = (day < weekStartsOn ? -7 : 0) + 6 - (day - weekStartsOn);
  date.setDate(date.getDate() + diff);
  date.setHours(23, 59, 59, 999);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/parseISO/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/esm/parseISO/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ parseISO)
/* harmony export */ });
/* harmony import */ var _constants_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/index.js */ "./node_modules/date-fns/esm/constants/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");



/**
 * @name parseISO
 * @category Common Helpers
 * @summary Parse ISO string
 *
 * @description
 * Parse the given string in ISO 8601 format and return an instance of Date.
 *
 * Function accepts complete ISO 8601 formats as well as partial implementations.
 * ISO 8601: http://en.wikipedia.org/wiki/ISO_8601
 *
 * If the argument isn't a string, the function cannot parse the string or
 * the values are invalid, it returns Invalid Date.
 *
 * @param {String} argument - the value to convert
 * @param {Object} [options] - an object with options.
 * @param {0|1|2} [options.additionalDigits=2] - the additional number of digits in the extended year format
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Convert string '2014-02-11T11:30:30' to date:
 * const result = parseISO('2014-02-11T11:30:30')
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert string '+02014101' to date,
 * // if the additional number of digits in the extended year format is 1:
 * const result = parseISO('+02014101', { additionalDigits: 1 })
 * //=> Fri Apr 11 2014 00:00:00
 */
function parseISO(argument, options) {
  var _options$additionalDi;
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var additionalDigits = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])((_options$additionalDi = options === null || options === void 0 ? void 0 : options.additionalDigits) !== null && _options$additionalDi !== void 0 ? _options$additionalDi : 2);
  if (additionalDigits !== 2 && additionalDigits !== 1 && additionalDigits !== 0) {
    throw new RangeError('additionalDigits must be 0, 1 or 2');
  }
  if (!(typeof argument === 'string' || Object.prototype.toString.call(argument) === '[object String]')) {
    return new Date(NaN);
  }
  var dateStrings = splitDateString(argument);
  var date;
  if (dateStrings.date) {
    var parseYearResult = parseYear(dateStrings.date, additionalDigits);
    date = parseDate(parseYearResult.restDateString, parseYearResult.year);
  }
  if (!date || isNaN(date.getTime())) {
    return new Date(NaN);
  }
  var timestamp = date.getTime();
  var time = 0;
  var offset;
  if (dateStrings.time) {
    time = parseTime(dateStrings.time);
    if (isNaN(time)) {
      return new Date(NaN);
    }
  }
  if (dateStrings.timezone) {
    offset = parseTimezone(dateStrings.timezone);
    if (isNaN(offset)) {
      return new Date(NaN);
    }
  } else {
    var dirtyDate = new Date(timestamp + time);
    // js parsed string assuming it's in UTC timezone
    // but we need it to be parsed in our timezone
    // so we use utc values to build date in our timezone.
    // Year values from 0 to 99 map to the years 1900 to 1999
    // so set year explicitly with setFullYear.
    var result = new Date(0);
    result.setFullYear(dirtyDate.getUTCFullYear(), dirtyDate.getUTCMonth(), dirtyDate.getUTCDate());
    result.setHours(dirtyDate.getUTCHours(), dirtyDate.getUTCMinutes(), dirtyDate.getUTCSeconds(), dirtyDate.getUTCMilliseconds());
    return result;
  }
  return new Date(timestamp + time + offset);
}
var patterns = {
  dateTimeDelimiter: /[T ]/,
  timeZoneDelimiter: /[Z ]/i,
  timezone: /([Z+-].*)$/
};
var dateRegex = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/;
var timeRegex = /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/;
var timezoneRegex = /^([+-])(\d{2})(?::?(\d{2}))?$/;
function splitDateString(dateString) {
  var dateStrings = {};
  var array = dateString.split(patterns.dateTimeDelimiter);
  var timeString;

  // The regex match should only return at maximum two array elements.
  // [date], [time], or [date, time].
  if (array.length > 2) {
    return dateStrings;
  }
  if (/:/.test(array[0])) {
    timeString = array[0];
  } else {
    dateStrings.date = array[0];
    timeString = array[1];
    if (patterns.timeZoneDelimiter.test(dateStrings.date)) {
      dateStrings.date = dateString.split(patterns.timeZoneDelimiter)[0];
      timeString = dateString.substr(dateStrings.date.length, dateString.length);
    }
  }
  if (timeString) {
    var token = patterns.timezone.exec(timeString);
    if (token) {
      dateStrings.time = timeString.replace(token[1], '');
      dateStrings.timezone = token[1];
    } else {
      dateStrings.time = timeString;
    }
  }
  return dateStrings;
}
function parseYear(dateString, additionalDigits) {
  var regex = new RegExp('^(?:(\\d{4}|[+-]\\d{' + (4 + additionalDigits) + '})|(\\d{2}|[+-]\\d{' + (2 + additionalDigits) + '})$)');
  var captures = dateString.match(regex);
  // Invalid ISO-formatted year
  if (!captures) return {
    year: NaN,
    restDateString: ''
  };
  var year = captures[1] ? parseInt(captures[1]) : null;
  var century = captures[2] ? parseInt(captures[2]) : null;

  // either year or century is null, not both
  return {
    year: century === null ? year : century * 100,
    restDateString: dateString.slice((captures[1] || captures[2]).length)
  };
}
function parseDate(dateString, year) {
  // Invalid ISO-formatted year
  if (year === null) return new Date(NaN);
  var captures = dateString.match(dateRegex);
  // Invalid ISO-formatted string
  if (!captures) return new Date(NaN);
  var isWeekDate = !!captures[4];
  var dayOfYear = parseDateUnit(captures[1]);
  var month = parseDateUnit(captures[2]) - 1;
  var day = parseDateUnit(captures[3]);
  var week = parseDateUnit(captures[4]);
  var dayOfWeek = parseDateUnit(captures[5]) - 1;
  if (isWeekDate) {
    if (!validateWeekDate(year, week, dayOfWeek)) {
      return new Date(NaN);
    }
    return dayOfISOWeekYear(year, week, dayOfWeek);
  } else {
    var date = new Date(0);
    if (!validateDate(year, month, day) || !validateDayOfYearDate(year, dayOfYear)) {
      return new Date(NaN);
    }
    date.setUTCFullYear(year, month, Math.max(dayOfYear, day));
    return date;
  }
}
function parseDateUnit(value) {
  return value ? parseInt(value) : 1;
}
function parseTime(timeString) {
  var captures = timeString.match(timeRegex);
  if (!captures) return NaN; // Invalid ISO-formatted time

  var hours = parseTimeUnit(captures[1]);
  var minutes = parseTimeUnit(captures[2]);
  var seconds = parseTimeUnit(captures[3]);
  if (!validateTime(hours, minutes, seconds)) {
    return NaN;
  }
  return hours * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInHour + minutes * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInMinute + seconds * 1000;
}
function parseTimeUnit(value) {
  return value && parseFloat(value.replace(',', '.')) || 0;
}
function parseTimezone(timezoneString) {
  if (timezoneString === 'Z') return 0;
  var captures = timezoneString.match(timezoneRegex);
  if (!captures) return 0;
  var sign = captures[1] === '+' ? -1 : 1;
  var hours = parseInt(captures[2]);
  var minutes = captures[3] && parseInt(captures[3]) || 0;
  if (!validateTimezone(hours, minutes)) {
    return NaN;
  }
  return sign * (hours * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInHour + minutes * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInMinute);
}
function dayOfISOWeekYear(isoWeekYear, week, day) {
  var date = new Date(0);
  date.setUTCFullYear(isoWeekYear, 0, 4);
  var fourthOfJanuaryDay = date.getUTCDay() || 7;
  var diff = (week - 1) * 7 + day + 1 - fourthOfJanuaryDay;
  date.setUTCDate(date.getUTCDate() + diff);
  return date;
}

// Validation functions

// February is null to handle the leap year (using ||)
var daysInMonths = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function isLeapYearIndex(year) {
  return year % 400 === 0 || year % 4 === 0 && year % 100 !== 0;
}
function validateDate(year, month, date) {
  return month >= 0 && month <= 11 && date >= 1 && date <= (daysInMonths[month] || (isLeapYearIndex(year) ? 29 : 28));
}
function validateDayOfYearDate(year, dayOfYear) {
  return dayOfYear >= 1 && dayOfYear <= (isLeapYearIndex(year) ? 366 : 365);
}
function validateWeekDate(_year, week, day) {
  return week >= 1 && week <= 53 && day >= 0 && day <= 6;
}
function validateTime(hours, minutes, seconds) {
  if (hours === 24) {
    return minutes === 0 && seconds === 0;
  }
  return seconds >= 0 && seconds < 60 && minutes >= 0 && minutes < 60 && hours >= 0 && hours < 25;
}
function validateTimezone(_hours, minutes) {
  return minutes >= 0 && minutes <= 59;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/startOfISOWeek/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfISOWeek/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfISOWeek)
/* harmony export */ });
/* harmony import */ var _startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfWeek/index.js */ "./node_modules/date-fns/esm/startOfWeek/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name startOfISOWeek
 * @category ISO Week Helpers
 * @summary Return the start of an ISO week for the given date.
 *
 * @description
 * Return the start of an ISO week for the given date.
 * The result will be in the local timezone.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the start of an ISO week
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of an ISO week for 2 September 2014 11:55:00:
 * const result = startOfISOWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Mon Sep 01 2014 00:00:00
 */
function startOfISOWeek(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  return (0,_startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate, {
    weekStartsOn: 1
  });
}

/***/ }),

/***/ "./node_modules/date-fns/esm/startOfWeek/index.js":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfWeek/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/defaultOptions/index.js */ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js");




/**
 * @name startOfWeek
 * @category Week Helpers
 * @summary Return the start of a week for the given date.
 *
 * @description
 * Return the start of a week for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|Number} date - the original date
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Date} the start of a week
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // The start of a week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sun Aug 31 2014 00:00:00
 *
 * @example
 * // If the week starts on Monday, the start of the week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0), { weekStartsOn: 1 })
 * //=> Mon Sep 01 2014 00:00:00
 */
function startOfWeek(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$weekStartsOn, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var defaultOptions = (0,_lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();
  var weekStartsOn = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])((_ref = (_ref2 = (_ref3 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.weekStartsOn) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.weekStartsOn) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.weekStartsOn) !== null && _ref !== void 0 ? _ref : 0);

  // Test if weekStartsOn is between 0 and 6 _and_ is not NaN
  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(dirtyDate);
  var day = date.getDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setDate(date.getDate() - diff);
  date.setHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */
function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(1, arguments);
  var argStr = Object.prototype.toString.call(argument);

  // Clone the date
  if (argument instanceof Date || (0,_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(argument) === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments");
      // eslint-disable-next-line no-console
      console.warn(new Error().stack);
    }
    return new Date(NaN);
  }
}

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
  name: document.querySelector("#task-name").value,
  description: document.querySelector("#task-description").value,
  dueDate: document.querySelector("#due-date").value,
  priority: document.querySelector("#priority").value,
});


/***/ }),

/***/ "./src/displayprojects.js":
/*!********************************!*\
  !*** ./src/displayprojects.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "deleteTasksProject": () => (/* binding */ deleteTasksProject),
/* harmony export */   "displayTasksProject": () => (/* binding */ displayTasksProject),
/* harmony export */   "findCurrentProjectIndex": () => (/* binding */ findCurrentProjectIndex)
/* harmony export */ });
/* harmony import */ var _informationholder_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./informationholder.js */ "./src/informationholder.js");
/* harmony import */ var _assets_icons_delete_icon_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/icons/delete-icon.svg */ "./src/assets/icons/delete-icon.svg");
/* harmony import */ var _assets_icons_close_info_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/icons/close-info.svg */ "./src/assets/icons/close-info.svg");




function displayTasksProject(
  iterateFrom = _informationholder_js__WEBPACK_IMPORTED_MODULE_0__.InformationHolder.projects[projectIndex].length - 1,
  projectIndex
) {
  const allTasks = document.querySelectorAll(".task");
  allTasks.forEach((task) => {
    task.style.display = "none";
  });

  const numberOfProjects = _informationholder_js__WEBPACK_IMPORTED_MODULE_0__.InformationHolder.projects[projectIndex].length;
  for (let i = iterateFrom; i < numberOfProjects; i++) {
    const div = document.createElement("div");
    div.classList.add("task-project");
    div.setAttribute("data-task-project", `${projectIndex}`);

    const taskDone = document.createElement("input");
    taskDone.type = "checkbox";
    taskDone.classList.add("task-done");
    div.appendChild(taskDone);

    const taskName = document.createElement("p");
    taskName.classList.add("task-n");
    taskName.textContent = _informationholder_js__WEBPACK_IMPORTED_MODULE_0__.InformationHolder.projects[projectIndex][i].name;
    div.appendChild(taskName);

    const taskDate = document.createElement("p");
    taskDate.classList.add("task-date");
    taskDate.textContent = _informationholder_js__WEBPACK_IMPORTED_MODULE_0__.InformationHolder.projects[projectIndex][i].dueDate;
    div.appendChild(taskDate);

    const deleteIcon = new Image();
    deleteIcon.classList.add("delete-task-project");
    deleteIcon.src = _assets_icons_delete_icon_svg__WEBPACK_IMPORTED_MODULE_1__;
    div.appendChild(deleteIcon);

    document.querySelector(".home-tasks").appendChild(div);
  }
}

function findCurrentProjectIndex() {
  const tabText = document.querySelector(".current-tab").textContent;
  const currentProject = Array.from(
    document.querySelectorAll(".projects > *")
  ).find((el) => el.textContent === `${tabText}`);
  return Number(currentProject.getAttribute("data-project-id"));
}

function deleteTasksProject() {
  const taskProject = Array.from(document.querySelectorAll(".task-project"));
  taskProject.forEach((task) => {
    task.remove();
  });
}


/***/ }),

/***/ "./src/displaytasks.js":
/*!*****************************!*\
  !*** ./src/displaytasks.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayAllTaskInfo": () => (/* binding */ displayAllTaskInfo),
/* harmony export */   "displayAllTasks": () => (/* binding */ displayAllTasks),
/* harmony export */   "displayTasks": () => (/* binding */ displayTasks),
/* harmony export */   "removeAllTasks": () => (/* binding */ removeAllTasks)
/* harmony export */ });
/* harmony import */ var _informationholder_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./informationholder.js */ "./src/informationholder.js");
/* harmony import */ var _assets_icons_delete_icon_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/icons/delete-icon.svg */ "./src/assets/icons/delete-icon.svg");
/* harmony import */ var _assets_icons_close_info_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/icons/close-info.svg */ "./src/assets/icons/close-info.svg");




function displayTasks(iterateFrom = _informationholder_js__WEBPACK_IMPORTED_MODULE_0__.InformationHolder.tasks.length - 1) {
  const homeTasks = document.querySelector(".home-tasks");
  for (let i = iterateFrom; i < _informationholder_js__WEBPACK_IMPORTED_MODULE_0__.InformationHolder.tasks.length; i++) {
    const div = document.createElement("div");
    div.classList.add("task");
    div.setAttribute("id", i);

    const taskDone = document.createElement("input");
    taskDone.type = "checkbox";
    taskDone.classList.add("task-done");
    div.appendChild(taskDone);

    const taskName = document.createElement("p");
    taskName.classList.add("task-n");
    taskName.textContent = _informationholder_js__WEBPACK_IMPORTED_MODULE_0__.InformationHolder.tasks[i].name;
    div.appendChild(taskName);

    const taskDate = document.createElement("p");
    taskDate.classList.add("task-date");
    taskDate.textContent = _informationholder_js__WEBPACK_IMPORTED_MODULE_0__.InformationHolder.tasks[i].dueDate;
    div.appendChild(taskDate);

    const deleteIcon = new Image();
    deleteIcon.classList.add("delete-task");
    deleteIcon.src = _assets_icons_delete_icon_svg__WEBPACK_IMPORTED_MODULE_1__;
    div.appendChild(deleteIcon);

    homeTasks.appendChild(div);
  }
}

function displayAllTaskInfo(arrayIndex) {
  const infoDisplay = document.createElement("div");
  infoDisplay.classList.add("info-display");

  const taskName = document.createElement("p");
  taskName.textContent = _informationholder_js__WEBPACK_IMPORTED_MODULE_0__.InformationHolder.tasks[arrayIndex].name;
  const taskDescription = document.createElement("p");
  taskDescription.textContent = _informationholder_js__WEBPACK_IMPORTED_MODULE_0__.InformationHolder.tasks[arrayIndex].description;
  const taskDate = document.createElement("p");
  taskDate.textContent = `Due: ${_informationholder_js__WEBPACK_IMPORTED_MODULE_0__.InformationHolder.tasks[arrayIndex].dueDate}`;
  const taskPriority = document.createElement("p");
  taskPriority.textContent = `Priority: ${_informationholder_js__WEBPACK_IMPORTED_MODULE_0__.InformationHolder.tasks[
    arrayIndex
  ].priority.toUpperCase()}`;

  const closeInfo = new Image();
  closeInfo.src = _assets_icons_close_info_svg__WEBPACK_IMPORTED_MODULE_2__;
  closeInfo.classList.add("close-info");

  const priorityColor = selectPriorityBorder(
    _informationholder_js__WEBPACK_IMPORTED_MODULE_0__.InformationHolder.tasks[arrayIndex].priority
  );
  infoDisplay.style.border = `2px solid ${priorityColor}`;
  taskPriority.style.color = priorityColor;

  infoDisplay.appendChild(closeInfo);
  infoDisplay.appendChild(taskName);
  infoDisplay.appendChild(taskDescription);
  infoDisplay.appendChild(taskDate);
  infoDisplay.appendChild(taskPriority);

  document.querySelector(".main-content").appendChild(infoDisplay);
}

function selectPriorityBorder(priority) {
  if (priority === "low") return "#2d7bd2";
  if (priority === "medium") return "#ffc600";
  return "#ff0018";
}

function displayAllTasks() {
  const allTasks = document.querySelectorAll(".task-date");
  allTasks.forEach((task) => {
    task.parentElement.style.display = "flex";
  });
}

function removeAllTasks() {
  const allTasks = document.querySelectorAll(
    ".home-tasks > :not(.tasks-header)"
  );
  allTasks.forEach((task) => task.remove());
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
/* harmony export */   "changeTabName": () => (/* binding */ changeTabName),
/* harmony export */   "tasksHeader": () => (/* binding */ tasksHeader)
/* harmony export */ });
/* harmony import */ var _assets_icons_check_icon_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/icons/check-icon.png */ "./src/assets/icons/check-icon.png");


function adjustTickMark() {
  const tickMark = new Image();
  tickMark.src = _assets_icons_check_icon_png__WEBPACK_IMPORTED_MODULE_0__;
  tickMark.style.width = "40px";
  tickMark.style.height = "40px";
  document.querySelector(".header").appendChild(tickMark);
}

function tasksHeader() {
  const div = document.createElement("div");
  div.classList.add("tasks-header");
  const h3 = document.createElement("h3");
  h3.textContent = "Name";
  const header3 = document.createElement("h3");
  header3.classList.add("due");
  header3.textContent = "Due Date";

  div.appendChild(h3);
  div.appendChild(header3);
  return div;
}

function changeTabName(name) {
  const currentTab = document.querySelector(".current-tab");
  currentTab.textContent = name;
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
/* harmony import */ var _projectform_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projectform.js */ "./src/projectform.js");
/* harmony import */ var _mediatordom_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mediatordom.js */ "./src/mediatordom.js");
/* harmony import */ var _displaytasks_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./displaytasks.js */ "./src/displaytasks.js");







(0,_header_js__WEBPACK_IMPORTED_MODULE_1__.adjustTickMark)();

_mediatordom_js__WEBPACK_IMPORTED_MODULE_4__.MediatorDOM.initialize();

const form = (0,_taskform_js__WEBPACK_IMPORTED_MODULE_2__.ManageForm)();
form.initialize();

const projectForm = (0,_projectform_js__WEBPACK_IMPORTED_MODULE_3__.ManageProjectForm)();
projectForm.initialize();

if (JSON.parse(localStorage.getItem("tasks")).length > 0) {
  (0,_displaytasks_js__WEBPACK_IMPORTED_MODULE_5__.displayTasks)(0);
}


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
  static tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  static projects = JSON.parse(localStorage.getItem("project")) || [];
  static projectName = JSON.parse(localStorage.getItem("projectName")) || [];

  static addTask(someTask) {
    this.tasks.push(someTask);
    localStorage.setItem("tasks", JSON.stringify(this.tasks));
  }

  static removeTask(aTask) {
    const taskIndex = Number(aTask.id);
    this.tasks.splice(taskIndex, 1);
    this.#adjustId(taskIndex);
    localStorage.setItem("tasks", JSON.stringify(this.tasks));
  }

  static #adjustId(deletedId) {
    const divs = document.querySelectorAll(".task");
    if (divs.length > 0) {
      divs.forEach((div) => {
        if (div.id > deletedId) {
          const currentId = parseInt(div.id.match(/\d+/)[0]);
          div.id = div.id.replace(currentId, currentId - 1);
        }
      });
    }
  }

  static #adjustProjectId(deletedId) {
    const divs = document.querySelectorAll(".project");
    const deleteButtons = document.querySelectorAll(".delete-project");

    if (divs.length > 0) {
      divs.forEach((div) => {
        if (Number(div.getAttribute("data-project-id")) > deletedId) {
          const currentId = parseInt(
            div.getAttribute("data-project-id").match(/\d+/)[0]
          );
          div.setAttribute("data-project-id", currentId - 1);
        }
      });
    }

    if (deleteButtons.length > 0) {
      deleteButtons.forEach((button) => {
        if (Number(button.getAttribute("data-project-id")) > deletedId) {
          const id = Number(
            button.getAttribute("data-project-id").match(/\d+/)[0]
          );
          button.setAttribute("data-project-id", id - 1);
        }
      });
    }
  }

  static addProject(someProject) {
    this.projects.push(someProject);
    localStorage.setItem("project", JSON.stringify(this.projects));
  }

  static addTaskToProject(projectIndex, task) {
    this.projects[projectIndex].push(task);
    localStorage.setItem("project", JSON.stringify(this.projects));
  }

  static removeTaskFromProject(projectIndex, taskIndex) {
    this.projects[projectIndex].splice(taskIndex, 1);
    localStorage.setItem("project", JSON.stringify(this.projects));
  } 

  static removeProject(aProjectIndex) {
    this.projects.splice(aProjectIndex, 1);
    this.#adjustProjectId(aProjectIndex);
    localStorage.setItem("project", JSON.stringify(this.projects));
  }

  static addProjectName(someProjectName) {
    this.projectName.push(someProjectName);
    localStorage.setItem("projectName", JSON.stringify(this.projectName));
  }

  static removeProjectName(projectIndex) {
    this.projectName.splice(projectIndex, 1);
    localStorage.setItem("projectName", JSON.stringify(this.projectName));
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
/* harmony import */ var _header_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header.js */ "./src/header.js");
/* harmony import */ var _createtask_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createtask.js */ "./src/createtask.js");
/* harmony import */ var _informationholder_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./informationholder.js */ "./src/informationholder.js");
/* harmony import */ var _displaytasks_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./displaytasks.js */ "./src/displaytasks.js");
/* harmony import */ var _todaytasks_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./todaytasks.js */ "./src/todaytasks.js");
/* harmony import */ var _weektasks_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./weektasks.js */ "./src/weektasks.js");
/* harmony import */ var _assets_icons_delete_project_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/icons/delete-project.svg */ "./src/assets/icons/delete-project.svg");
/* harmony import */ var _displayprojects_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./displayprojects.js */ "./src/displayprojects.js");









class MediatorDOM {
  static insertTask() {
    document.querySelector(".submit").addEventListener("click", () => {
      const form = document.querySelector("form");
      const tabText = document.querySelector(".current-tab").textContent;

      if (form.checkValidity()) {
        if (tabText !== "Home" && tabText !== "Today" && tabText !== "Week") {
          const projectIndex = (0,_displayprojects_js__WEBPACK_IMPORTED_MODULE_7__.findCurrentProjectIndex)();
          console.log(projectIndex);
          _informationholder_js__WEBPACK_IMPORTED_MODULE_2__.InformationHolder.addTaskToProject(projectIndex, (0,_createtask_js__WEBPACK_IMPORTED_MODULE_1__.createTask)());
          const vsf = _informationholder_js__WEBPACK_IMPORTED_MODULE_2__.InformationHolder.projects[projectIndex].length - 1;
          (0,_displayprojects_js__WEBPACK_IMPORTED_MODULE_7__.displayTasksProject)(vsf, projectIndex);
        } else {
          _informationholder_js__WEBPACK_IMPORTED_MODULE_2__.InformationHolder.addTask((0,_createtask_js__WEBPACK_IMPORTED_MODULE_1__.createTask)());
          (0,_displaytasks_js__WEBPACK_IMPORTED_MODULE_3__.displayTasks)();
        }
      }
    });
  }

  static showTaskInfo() {
    document.querySelector(".main-content").addEventListener("click", (e) => {
      if (e.target.classList.contains("task-n")) {
        (0,_displaytasks_js__WEBPACK_IMPORTED_MODULE_3__.displayAllTaskInfo)(Number(e.target.parentElement.id));
      }
    });
  }

  static closeTaskInfo() {
    document.querySelector(".main-content").addEventListener("click", (e) => {
      if (e.target.classList.contains("close-info"))
        e.target.parentElement.remove();
    });
  }

  static crossTask() {
    document.querySelector(".main-content").addEventListener("click", (e) => {
      if (e.target.classList.contains("task-done")) {
        const tasksNameAndDate = Array.from(
          e.target.parentNode.querySelectorAll("p")
        );
        tasksNameAndDate.forEach((task) => {
          if (e.target.checked === true)
            task.style.textDecoration = "line-through";
          else task.style.textDecoration = "none";
        });
      }
    });
  }

  static deleteTask() {
    document.querySelector(".main-content").addEventListener("click", (e) => {
      if (e.target.classList.contains("delete-task")) {
        _informationholder_js__WEBPACK_IMPORTED_MODULE_2__.InformationHolder.removeTask(e.target.parentElement);
        e.target.parentElement.remove();
      }

      if (e.target.classList.contains("delete-task-project")) {
        const projectIndex = Number(
          e.target.parentElement.getAttribute("data-task-project")
        );
        const taskName =
          e.target.parentElement.querySelector("div > .task-n").textContent;
        const taskDate =
          e.target.parentElement.querySelector("div > .task-date").textContent;
        const taskIndex = Array.from(
          _informationholder_js__WEBPACK_IMPORTED_MODULE_2__.InformationHolder.projects[projectIndex]
        ).findIndex(
          (task) => task.name === taskName && task.dueDate === taskDate
        );
        e.target.parentElement.remove();
        _informationholder_js__WEBPACK_IMPORTED_MODULE_2__.InformationHolder.removeTaskFromProject(
          Number(projectIndex),
          Number(taskIndex)
        );
      }
    });
  }

  static showHomeTasks() {
    document.querySelector(".home").addEventListener("click", () => {
      (0,_header_js__WEBPACK_IMPORTED_MODULE_0__.changeTabName)("Home");
      (0,_displayprojects_js__WEBPACK_IMPORTED_MODULE_7__.deleteTasksProject)();
      (0,_displaytasks_js__WEBPACK_IMPORTED_MODULE_3__.displayAllTasks)();
    });
  }

  static showTodayTasks() {
    document.querySelector(".today").addEventListener("click", () => {
      (0,_header_js__WEBPACK_IMPORTED_MODULE_0__.changeTabName)("Today");
      (0,_displayprojects_js__WEBPACK_IMPORTED_MODULE_7__.deleteTasksProject)();
      (0,_todaytasks_js__WEBPACK_IMPORTED_MODULE_4__.displayTodayTasks)();
    });
  }

  static showWeekTasks() {
    document.querySelector(".week").addEventListener("click", () => {
      (0,_header_js__WEBPACK_IMPORTED_MODULE_0__.changeTabName)("Week");
      (0,_displayprojects_js__WEBPACK_IMPORTED_MODULE_7__.deleteTasksProject)();
      (0,_displaytasks_js__WEBPACK_IMPORTED_MODULE_3__.displayAllTasks)();
      (0,_weektasks_js__WEBPACK_IMPORTED_MODULE_5__.displayWeekTasks)();
    });
  }

  static updateTaskList() {
    const targetNode = document.querySelector(".home-tasks");
    const currentTab = document.querySelector(".current-tab");

    const config = { childList: true, subtree: true };
    const callback = (mutationList) => {
      for (const mutation of mutationList) {
        if (mutation.type === "childList" && mutation.addedNodes.length > 0) {
          if (
            currentTab.textContent === "Today" ||
            currentTab.textContent === "Week"
          ) {
            document
              .querySelector(`.${currentTab.textContent.toLowerCase()}`)
              .click();
          }
        }
      }
    };

    const observer = new MutationObserver(callback);
    observer.observe(targetNode, config);
  }

  static insertProject() {
    document.querySelector(".projects").addEventListener("click", (e) => {
      if (e.target.classList.contains("submit-project")) {
        const name = `-${
          e.target.parentNode.querySelector("form > input").value
        }`;
        _informationholder_js__WEBPACK_IMPORTED_MODULE_2__.InformationHolder.addProjectName(name);
        _informationholder_js__WEBPACK_IMPORTED_MODULE_2__.InformationHolder.addProject([]);
        this.createProjectDiv();
      }
    });
  }

  static createProjectDiv(iterateFrom = _informationholder_js__WEBPACK_IMPORTED_MODULE_2__.InformationHolder.projects.length - 1) {
    const numberOfProjects = _informationholder_js__WEBPACK_IMPORTED_MODULE_2__.InformationHolder.projects.length;
    for (let i = iterateFrom; i < numberOfProjects; i++) {
      if (numberOfProjects - 1 >= 0) {
        const deleteProject = new Image();
        deleteProject.src = _assets_icons_delete_project_svg__WEBPACK_IMPORTED_MODULE_6__;
        deleteProject.classList.add("delete-project");
        deleteProject.setAttribute("data-project-id", i);
        document.querySelector(".main-content").appendChild(deleteProject);

        const div = document.createElement("div");
        div.textContent = _informationholder_js__WEBPACK_IMPORTED_MODULE_2__.InformationHolder.projectName[i];
        div.classList.add("project");
        div.setAttribute("data-project-id", i);
        document.querySelector(".projects").appendChild(div);
      }
    }
  }

  static changeProjectTab() {
    document.querySelector(".projects").addEventListener("click", (e) => {
      if (e.target.classList.contains("project")) {
        (0,_header_js__WEBPACK_IMPORTED_MODULE_0__.changeTabName)(e.target.textContent);
        const deleteIcon = document.querySelectorAll(".delete-project");
        if (deleteIcon !== null)
          deleteIcon.forEach((icon) => {
            icon.style.display = "inline";
          });
        (0,_displayprojects_js__WEBPACK_IMPORTED_MODULE_7__.deleteTasksProject)();
        const projectIndex = (0,_displayprojects_js__WEBPACK_IMPORTED_MODULE_7__.findCurrentProjectIndex)();
        (0,_displayprojects_js__WEBPACK_IMPORTED_MODULE_7__.displayTasksProject)(0, projectIndex);
      }
    });
  }

  static deleteDeleteIcon() {
    document.querySelector(".sidebar").addEventListener("click", () => {
      const currentTab = document.querySelector(".current-tab").textContent;
      if (
        currentTab === "Home" ||
        currentTab === "Today" ||
        currentTab === "Week"
      ) {
        const deleteIcon = document.querySelectorAll(".delete-project");
        if (deleteIcon !== null)
          deleteIcon.forEach((icon) => {
            icon.style.display = "none";
          });
      }
    });
  }

  static deleteProject() {
    document.querySelector(".main-content").addEventListener("click", (e) => {
      if (e.target.classList.contains("delete-project")) {
        const projectIndex = (0,_displayprojects_js__WEBPACK_IMPORTED_MODULE_7__.findCurrentProjectIndex)();
        _informationholder_js__WEBPACK_IMPORTED_MODULE_2__.InformationHolder.removeProject(projectIndex);
        _informationholder_js__WEBPACK_IMPORTED_MODULE_2__.InformationHolder.removeProjectName(projectIndex);
        document
          .querySelector(`div[data-project-id="${projectIndex}"]`)
          .remove();
        document
          .querySelector(`img[data-project-id="${projectIndex}"]`)
          .remove();
        document.querySelector(".home").click();
      }
    });
  }

  static initialize() {
    this.insertTask();
    this.showTaskInfo();
    this.closeTaskInfo();
    this.crossTask();
    this.showHomeTasks();
    this.showTodayTasks();
    this.showWeekTasks();
    this.deleteTask();
    this.updateTaskList();
    this.insertProject();
    this.createProjectDiv(0);
    this.changeProjectTab();
    this.deleteDeleteIcon();
    this.deleteProject();
  }
}


/***/ }),

/***/ "./src/projectform.js":
/*!****************************!*\
  !*** ./src/projectform.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManageProjectForm": () => (/* binding */ ManageProjectForm)
/* harmony export */ });
const ManageProjectForm = () => ({
  addProjectButton: document.querySelector(".new-project"),
  projectTab: document.querySelector(".projects"),

  createForm() {
    const form = document.createElement("form");
    form.classList.add(".project-form");
    form.style.display = "grid";
    form.action = "#";
    form.method = "post";
    const projectNameLabel = document.createElement("label");
    projectNameLabel.textContent = "Project Name";
    const projectNameInput = document.createElement("input");
    projectNameInput.required = true;

    form.appendChild(projectNameLabel);
    form.appendChild(projectNameInput);

    const submitProjectButton = document.createElement("button");
    submitProjectButton.classList.add("submit-project");
    submitProjectButton.textContent = "Create Project";
    const notSubmitProjectButton = document.createElement("button");
    notSubmitProjectButton.classList.add("cancel-project");
    notSubmitProjectButton.textContent = "Cancel";
    form.appendChild(submitProjectButton);
    form.appendChild(notSubmitProjectButton);

    this.projectTab.appendChild(form);
  },

  showProjectForm() {
    this.projectTab.addEventListener("click", (e) => {
      if (e.target.classList.contains("new-project")) {
        this.createForm();
      }
    });
  },

  submitProjectForm() {
    this.projectTab.addEventListener("click", (e) => {
      if (e.target.classList.contains("submit-project")) {
        e.target.parentElement.remove();
      }
    });
  },

  closeProjectForm() {
    this.projectTab.addEventListener("click", (e) => {
      if (e.target.classList.contains("cancel-project")) {
        e.target.parentElement.remove();
      }
    });
  },

  initialize() {
    this.showProjectForm();
    this.submitProjectForm();
    this.closeProjectForm();
  },
});


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
  addTaskButton: document.querySelector(".add-task"),
  form: document.querySelector("form"),

  clearForm() {
    const formInputs = Array.from(document.querySelectorAll("form input"));
    formInputs.forEach((input) => {
      input.value = "";
    });
    document.querySelector("textarea").value = "";
  },

  openForm() {
    this.addTaskButton.addEventListener("click", () => {
      this.form.style.display = "grid";
    });
  },

  closeForm() {
    this.form.style.display = "none";
  },

  cancel() {
    const closeFormButton = document.querySelector(".cancel");
    closeFormButton.addEventListener("click", () => {
      this.closeForm();
      this.clearForm();
    });
  },

  submitForm() {
    const submitButton = document.querySelector(".submit");
    submitButton.addEventListener("click", () => {
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

/***/ "./src/todaytasks.js":
/*!***************************!*\
  !*** ./src/todaytasks.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayTodayTasks": () => (/* binding */ displayTodayTasks),
/* harmony export */   "getTodayDate": () => (/* binding */ getTodayDate)
/* harmony export */ });
function getTodayDate() {
  const date = new Date();
  const year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();

  if (month < 10) month = `0${month}`;
  if (day < 10) day = `0${day}`;

  return `${year}-${month}-${day}`;
}

function displayTodayTasks() {
  const todayDate = getTodayDate();
  const allTasks = document.querySelectorAll(".task-date");
  allTasks.forEach((task) => {
    if (task.textContent !== todayDate)
      task.parentElement.style.display = "none";
  });
}


/***/ }),

/***/ "./src/weektasks.js":
/*!**************************!*\
  !*** ./src/weektasks.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayWeekTasks": () => (/* binding */ displayWeekTasks),
/* harmony export */   "getWeek": () => (/* binding */ getWeek)
/* harmony export */ });
/* harmony import */ var date_fns___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns/ */ "./node_modules/date-fns/esm/endOfISOWeek/index.js");
/* harmony import */ var date_fns___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns/ */ "./node_modules/date-fns/esm/parseISO/index.js");
/* harmony import */ var date_fns___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns/ */ "./node_modules/date-fns/esm/differenceInCalendarISOWeeks/index.js");



function getWeek() {
  const today = new Date();
  const endOfWeek = (0,date_fns___WEBPACK_IMPORTED_MODULE_0__["default"])(today);

  const teste = "2023-05-21";
  const resultado = (0,date_fns___WEBPACK_IMPORTED_MODULE_1__["default"])(teste);

  const result = (0,date_fns___WEBPACK_IMPORTED_MODULE_2__["default"])(endOfWeek, resultado);

  console.log(result);
}

function displayWeekTasks() {
  const todayDate = new Date();
  const endOfWeek = (0,date_fns___WEBPACK_IMPORTED_MODULE_0__["default"])(todayDate);

  const allTasks = document.querySelectorAll(".task-date");
  allTasks.forEach((task) => {
    const taskDueDay = (0,date_fns___WEBPACK_IMPORTED_MODULE_1__["default"])(task.textContent);
    if ((0,date_fns___WEBPACK_IMPORTED_MODULE_2__["default"])(endOfWeek, taskDueDay) !== 0)
      task.parentElement.style.display = "none";
  });
}


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

/***/ }),

/***/ "./src/assets/icons/delete-project.svg":
/*!*********************************************!*\
  !*** ./src/assets/icons/delete-project.svg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "aa3d8c75e0579e21c699.svg";

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _typeof)
/* harmony export */ });
function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TSxLQUFLLGFBQWEsYUFBYSxNQUFNLEtBQUssV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxhQUFhLGFBQWEsWUFBWSxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsTUFBTSxLQUFLLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssV0FBVyxVQUFVLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxhQUFhLGFBQWEsV0FBVyxXQUFXLFdBQVcsV0FBVyxZQUFZLE1BQU0sS0FBSyxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxVQUFVLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxhQUFhLGFBQWEsWUFBWSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsUUFBUSxLQUFLLFdBQVcsVUFBVSxNQUFNLEtBQUssYUFBYSxhQUFhLFFBQVEsS0FBSyxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxXQUFXLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFB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Q1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNB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QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ2hETTtBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDhCQUE4QixNQUFNO0FBQ3BDLDBCQUEwQixJQUFJOztBQUU5QixZQUFZLEtBQUssR0FBRyxNQUFNLEdBQUcsSUFBSTtBQUNqQzs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmbUI7OztBQUdaO0FBQ1A7QUFDQSxvQkFBb0IscURBQVk7O0FBRWhDO0FBQ0Esb0JBQW9CLHFEQUFROztBQUU1QixpQkFBaUIscURBQTRCOztBQUU3QztBQUNBOztBQUVPO0FBQ1A7QUFDQSxvQkFBb0IscURBQVk7O0FBRWhDO0FBQ0E7QUFDQSx1QkFBdUIscURBQVE7QUFDL0IsUUFBUSxxREFBNEI7QUFDcEM7QUFDQSxHQUFHO0FBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdCZTtBQUNmOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxHQUFHO0FBQ0giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGVzLnNjc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9kZWZhdWx0T3B0aW9ucy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi90b0ludGVnZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9jb25zdGFudHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9kaWZmZXJlbmNlSW5DYWxlbmRhcklTT1dlZWtzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vZW5kT2ZJU09XZWVrL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vZW5kT2ZXZWVrL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vcGFyc2VJU08vaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9zdGFydE9mSVNPV2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3N0YXJ0T2ZXZWVrL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vdG9EYXRlL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZXMuc2Nzcz9hNjA5Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NyZWF0ZXRhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2Rpc3BsYXlwcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZGlzcGxheXRhc2tzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmZvcm1hdGlvbmhvbGRlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbWVkaWF0b3Jkb20uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Byb2plY3Rmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90YXNrZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdG9kYXl0YXNrcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvd2Vla3Rhc2tzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90eXBlb2YuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vYXNzZXRzL2ZvbnRzL2FiZWwtcmVndWxhci13ZWJmb250LndvZmYyXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvZm9udHMvYWJlbC1yZWd1bGFyLXdlYmZvbnQud29mZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQWJlbFxcXCI7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIikgZm9ybWF0KFxcXCJ3b2ZmMlxcXCIpLCB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpIGZvcm1hdChcXFwid29mZlxcXCIpO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG4qIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHksXFxuaHRtbCB7XFxuICBmb250LWZhbWlseTogXFxcIkFiZWxcXFwiLCBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXFxcIlNlZ29lIFVJXFxcIiwgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCBcXFwiT3BlbiBTYW5zXFxcIiwgXFxcIkhlbHZldGljYSBOZXVlXFxcIiwgc2Fucy1zZXJpZjtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5wYWdlLXdyYXBwZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMmZyIDhmciAxZnI7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA2ZnI7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5oZWFkZXIgPiBoMSB7XFxuICBmb250LXNpemU6IDQwcHg7XFxuICBmb250LXdlaWdodDogODAwO1xcbiAgY29sb3I6ICNiMmI4Yjc7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBncmlkLXJvdzogMS8yO1xcbiAgZ3JpZC1jb2x1bW46IDEvLTE7XFxuICBiYWNrZ3JvdW5kOiByZ2IoNywgMTgsIDI0KTtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIHJnYig3LCAxOCwgMjQpIDI1JSwgcmdiKDExLCAxOSwgNDYpIDUwJSwgcmdiKDE3LCAyOSwgNjgpIDc1JSwgcmdiKDE3LCAyOSwgNjgpIDEwMCUpO1xcbiAgZ2FwOiAxNXB4O1xcbiAgcGFkZGluZzogMCAzMHB4O1xcbn1cXG5cXG4uc2lkZWJhciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC1yb3c6IDIvMztcXG4gIGdyaWQtY29sdW1uOiAxLzI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjJiOGI3O1xcbiAgY29sb3I6ICMxMTFENDQ7XFxuICBhbGlnbi1jb250ZW50OiBzdGFydDtcXG4gIHBhZGRpbmc6IDMwcHg7XFxuICBnYXA6IDMwcHg7XFxuICBmb250LXNpemU6IDI3cHg7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4uc2lkZWJhciA+IGRpdjpub3QoLnByb2plY3RzKSB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5zaWRlYmFyID4gZGl2OmhvdmVyOm5vdCgucHJvamVjdHMpIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTgsIDIwOSwgMjA3KTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi5tYWluLWNvbnRlbnQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnI7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gM2ZyIDFmciAxZnI7XFxuICBncmlkLXJvdzogMi8zO1xcbiAgZ3JpZC1jb2x1bW46IDIvLTE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGZkNWQ1O1xcbn1cXG5cXG4uYWRkLXRhc2sge1xcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luOiAwO1xcbiAgZ2FwOiA1cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBtYXJnaW46IDIwcHggMjBweDtcXG4gIHBhZGRpbmc6IDNweCA2cHg7XFxuICBncmlkLXJvdzogMS8yO1xcbiAgZ3JpZC1jb2x1bW46IDEvMjtcXG59XFxuXFxuLmFkZC10YXNrID4gKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4uYWRkLXRhc2s6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2IyYjhiNztcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG59XFxuXFxuLmFkZC10YXNrOmhvdmVyID4gc3ZnIHtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcXG4gIHRyYW5zaXRpb246IDAuNHMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5jdXJyZW50LXRhYiB7XFxuICBjb2xvcjogIzExMUQ0NDtcXG4gIGZvbnQtc2l6ZTogMzBweDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gIGdyaWQtY29sdW1uOiAxLy0xO1xcbiAgZ3JpZC1yb3c6IDEvMjtcXG59XFxuXFxuZm9ybSB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgZ2FwOiAxMHB4O1xcbiAgei1pbmRleDogOTk7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2IyYjhiNztcXG4gIGNvbG9yOiAjMTExRDQ0O1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBib3gtc2hhZG93OiAwIDFweCAxcHg7XFxufVxcblxcbi53aWRnZXQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5mb3JtLWJ1dHRvbnMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbn1cXG5cXG4uZm9ybS1idXR0b25zID4gKiB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5mb3JtLWJ1dHRvbnMgPiBzdmc6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2MzYzdjNztcXG59XFxuXFxuLmhvbWUtdGFza3Mge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDRmciAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KGF1dG8sIDFmcikpO1xcbiAgYWxpZ24tY29udGVudDogc3RhcnQ7XFxuICBncmlkLXJvdzogMi8tMTtcXG4gIGdyaWQtY29sdW1uOiAxLy0xO1xcbn1cXG5cXG4udGFza3MtaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIHBhZGRpbmc6IDAgMTBweDtcXG4gIHBhZGRpbmctbGVmdDogNDBweDtcXG59XFxuXFxuLmR1ZSB7XFxuICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xcbn1cXG5cXG4udGFzayxcXG4udGFzay1wcm9qZWN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwYWRkaW5nOiAwIDEwcHg7XFxufVxcblxcbi50YXNrLWRvbmUge1xcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbn1cXG5cXG4udGFzay1uIHtcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRhc2s6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZGVkZTtcXG59XFxuXFxuLnRhc2stZGF0ZSB7XFxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcbn1cXG5cXG4uaG9tZS10YXNrcyA+ICoge1xcbiAgZ3JpZC1jb2x1bW46IDIvMztcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMTExRDQ0O1xcbn1cXG5cXG4uZGVsZXRlLXRhc2ssXFxuLmRlbGV0ZS10YXNrLXByb2plY3Qge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uZGVsZXRlLXRhc2s6aG92ZXIsXFxuLmRlbGV0ZS10YXNrLXByb2plY3Q6aG92ZXIge1xcbiAgYW5pbWF0aW9uOiBtb3ZlLXVwIDAuNXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5pbmZvLWRpc3BsYXkge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0bztcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0bztcXG4gIHdpZHRoOiA1MCU7XFxuICBoZWlnaHQ6IDUwJTtcXG4gIGdhcDogNXB4O1xcbiAgei1pbmRleDogOTk7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2IyYjhiNztcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYm94LXNoYWRvdzogMCAxcHggMXB4O1xcbiAgY29sb3I6ICMxMTFENDQ7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbn1cXG5cXG4uY2xvc2UtaW5mbyB7XFxuICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnByb2plY3RzIC5uZXctcHJvamVjdCB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG4ucHJvamVjdHM6aG92ZXIgLm5ldy1wcm9qZWN0IHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgZm9udC1zaXplOiAxNXB4O1xcbiAgcGFkZGluZzogMTBweCAwO1xcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcbn1cXG5cXG4ubmV3LXByb2plY3Q6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ucHJvamVjdC1mb3JtIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGdhcDogMTBweDtcXG4gIHotaW5kZXg6IDk5O1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICB3aWR0aDogMjAwcHg7XFxuICBoZWlnaHQ6IDEwMHB4O1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjJiOGI3O1xcbiAgY29sb3I6ICMxMTFENDQ7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgcGFkZGluZzogMTBweCAyMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJveC1zaGFkb3c6IDAgMXB4IDFweDtcXG59XFxuXFxuLnN1Ym1pdC1wcm9qZWN0LFxcbi5jYW5jZWwtcHJvamVjdCB7XFxuICB3aWR0aDogYXV0bztcXG4gIGhlaWdodDogYXV0bztcXG4gIHBhZGRpbmc6IDNweCA5cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4uc3VibWl0LXByb2plY3Qge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzExMUQ0NDtcXG4gIGNvbG9yOiAjYjJiOGI3O1xcbn1cXG5cXG4uc3VibWl0LXByb2plY3Q6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJjM2Q3NDtcXG4gIGNvbG9yOiAjYTViMGFlO1xcbn1cXG5cXG4uY2FuY2VsLXByb2plY3Qge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2IyYjhiNztcXG4gIGNvbG9yOiAjMTExRDQ0O1xcbn1cXG5cXG4uY2FuY2VsLXByb2plY3Q6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q0ZDlkODtcXG4gIGNvbG9yOiAjMTUyMDQzO1xcbn1cXG5cXG4ucHJvamVjdCB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XFxufVxcblxcbi5wcm9qZWN0OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkNGQ5ZDg7XFxufVxcblxcbi5kZWxldGUtcHJvamVjdCB7XFxuICBncmlkLXJvdzogMS8yO1xcbiAgZ3JpZC1jb2x1bW46IDMvNDtcXG4gIGp1c3RpZnktc2VsZjogZW5kO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgd2lkdGg6IDMycHg7XFxuICBoZWlnaHQ6IDMycHg7XFxufVxcblxcbi5kZWxldGUtcHJvamVjdDpob3ZlciB7XFxuICBhbmltYXRpb246IG1vdmUtdXAgMC41cyBlYXNlLWluLW91dDtcXG59XFxuXFxuQGtleWZyYW1lcyBtb3ZlLXVwIHtcXG4gIDAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcbiAgfVxcbiAgNTAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcXG4gIH1cXG59XFxuYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjb2xvcjogI2IyYjhiNztcXG59XFxuXFxuYTp2aXNpdGVkIHtcXG4gIGNvbG9yOiAjYjJiOGI3O1xcbn1cXG5cXG4uZm9vdGVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXJvdzogLTIvLTE7XFxuICBncmlkLWNvbHVtbjogMS8tMTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxMTFENDQ7XFxuICBjb2xvcjogI2IyYjhiNztcXG4gIHBhZGRpbmc6IDAgMjBweDtcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KSB7XFxuICAubWFpbi1jb250ZW50IHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIGF1dG8gMWZyO1xcbiAgfVxcbiAgLmN1cnJlbnQtdGFiIHtcXG4gICAgZ3JpZC1yb3c6IDIvMztcXG4gIH1cXG4gIC50YXNrIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIGF1dG87XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvO1xcbiAgICBwYWRkaW5nOiAwIDEwcHg7XFxuICB9XFxuICAuaG9tZS10YXNrcyB7XFxuICAgIGdyaWQtcm93OiAzLy0xO1xcbiAgfVxcbiAgLnRhc2tzLWhlYWRlciB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICB9XFxuICAudGFzay1kYXRlIHtcXG4gICAgcGFkZGluZy1yaWdodDogMDtcXG4gICAganVzdGlmeS1zZWxmOiBlbmQ7XFxuICB9XFxuICAudGFzayA+IGltZyB7XFxuICAgIGp1c3RpZnktc2VsZjogZW5kO1xcbiAgICBncmlkLWNvbHVtbjogMi8tMTtcXG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcXG4gICAgcGFkZGluZy1ib3R0b206IDNweDtcXG4gIH1cXG4gIC5pbmZvLWRpc3BsYXkge1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBoZWlnaHQ6IDUwJTtcXG4gIH1cXG4gIC5kdWUge1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAwO1xcbiAgfVxcbiAgLnRhc2sgPiAqIHtcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcbiAgfVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxt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O0lBQ0UsZ0JBQUE7SUFDQSxpQkFBQTtFQW5CRjtFQXNCQTtJQUNFLGlCQUFBO0lBQ0EsaUJBQUE7SUFDQSxtQkFBQTtJQUNBLG1CQUFBO0VBcEJGO0VBdUJBO0lBQ0UsVUFBQTtJQUNBLFdBQUE7RUFyQkY7RUF3QkE7SUFDRSxnQkFBQTtFQXRCRjtFQXlCQTtJQUNFLGVBQUE7RUF2QkY7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnQWJlbCc7XFxuICBzcmM6IHVybCgnLi9hc3NldHMvZm9udHMvYWJlbC1yZWd1bGFyLXdlYmZvbnQud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksXFxuICAgIHVybCgnLi9hc3NldHMvZm9udHMvYWJlbC1yZWd1bGFyLXdlYmZvbnQud29mZicpIGZvcm1hdCgnd29mZicpO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbiRwcmltYXJ5LWNvbG9yOiAjMTExRDQ0O1xcbiRzZWNvbmRhcnktY29sb3I6ICNiMmI4Yjc7XFxuJGNvbXBsZW1lbnRhcnktY29sb3I6ICMwMDA7XFxuJHllbGxvdzogI2ZmYzYwMDtcXG4kYmxhY2s6ICMyNzI3Mjc7XFxuXFxuKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5LFxcbmh0bWwge1xcbiAgZm9udC1mYW1pbHk6ICdBYmVsJywgc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4ucGFnZS13cmFwcGVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDJmciA4ZnIgMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNmZyO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG4gXFxuLmhlYWRlciA+IGgxIHtcXG4gIGZvbnQtc2l6ZTogNDBweDtcXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XFxuICBjb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcXG59XFxuXFxuLmhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdyaWQtcm93OiAxIC8gMjtcXG4gIGdyaWQtY29sdW1uOiAxIC8gLTE7XFxuICBiYWNrZ3JvdW5kOiByZ2IoNywxOCwyNCk7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCByZ2JhKDcsMTgsMjQsMSkgMjUlLCByZ2JhKDExLDE5LDQ2LDEpIDUwJSwgcmdiYSgxNywyOSw2OCwxKSA3NSUsIHJnYmEoMTcsMjksNjgsMSkgMTAwJSk7XFxuICBnYXA6IDE1cHg7XFxuICBwYWRkaW5nOiAwIDMwcHg7XFxufVxcblxcbi5zaWRlYmFyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXJvdzogMiAvIDM7XFxuICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xcbiAgY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xcbiAgYWxpZ24tY29udGVudDogc3RhcnQ7XFxuICBwYWRkaW5nOiAzMHB4O1xcbiAgZ2FwOiAzMHB4O1xcbiAgZm9udC1zaXplOiAyN3B4O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuLnNpZGViYXIgPiBkaXY6bm90KC5wcm9qZWN0cykge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uc2lkZWJhciA+IGRpdjpob3Zlcjpub3QoLnByb2plY3RzKSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTk4LCAyMDksIDIwNyk7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4ubWFpbi1jb250ZW50IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDNmciAxZnIgMWZyO1xcbiAgZ3JpZC1yb3c6IDIgLyAzO1xcbiAgZ3JpZC1jb2x1bW46IDIgLyAtMTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkZmQ1ZDU7XFxufVxcblxcbi5hZGQtdGFzayB7XFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW46IDA7XFxuICBnYXA6IDVweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG1hcmdpbjogMjBweCAyMHB4O1xcbiAgcGFkZGluZzogM3B4IDZweDtcXG4gIGdyaWQtcm93OiAxIC8gMjtcXG4gIGdyaWQtY29sdW1uOiAxIC8gMjtcXG59XFxuXFxuLmFkZC10YXNrID4gKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4uYWRkLXRhc2s6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG59XFxuXFxuLmFkZC10YXNrOmhvdmVyID4gc3ZnIHtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcXG4gIHRyYW5zaXRpb246IDAuNHMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5jdXJyZW50LXRhYiB7XFxuICBjb2xvcjogJHByaW1hcnktY29sb3I7XFxuICBmb250LXNpemU6IDMwcHg7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICBncmlkLWNvbHVtbjogMSAvIC0xO1xcbiAgZ3JpZC1yb3c6IDEgLyAyO1xcbn1cXG5cXG5mb3JtIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBnYXA6IDEwcHg7XFxuICB6LWluZGV4OiA5OTtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xcbiAgY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBib3gtc2hhZG93OiAwIDFweCAxcHg7XFxufVxcblxcbi53aWRnZXQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5mb3JtLWJ1dHRvbnMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbn1cXG5cXG4uZm9ybS1idXR0b25zID4gKiB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5mb3JtLWJ1dHRvbnMgPiBzdmc6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2MzYzdjNztcXG59XFxuXFxuLmhvbWUtdGFza3Mge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDRmciAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KGF1dG8sIDFmcikpO1xcbiAgYWxpZ24tY29udGVudDogc3RhcnQ7XFxuICBncmlkLXJvdzogMiAvIC0xO1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcXG59XFxuXFxuLnRhc2tzLWhlYWRlciB7XFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBwYWRkaW5nOiAwIDEwcHg7XFxuICBwYWRkaW5nLWxlZnQ6IDQwcHg7XFxufVxcblxcblxcbi5kdWUge1xcbiAgcGFkZGluZy1yaWdodDogMzBweDtcXG59XFxuXFxuLnRhc2ssXFxuLnRhc2stcHJvamVjdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcGFkZGluZzogMCAxMHB4O1xcbn1cXG5cXG4udGFzay1kb25lIHtcXG4gIG1hcmdpbi1yaWdodDogMTBweDtcXG59XFxuXFxuLnRhc2stbiB7XFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50YXNrOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlNmRlZGU7XFxufVxcblxcbi50YXNrLWRhdGUge1xcbiAgcGFkZGluZy1yaWdodDogMTBweDtcXG59XFxuXFxuLmhvbWUtdGFza3MgPiAqIHtcXG4gIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkcHJpbWFyeS1jb2xvcjtcXG59XFxuXFxuLmRlbGV0ZS10YXNrLFxcbi5kZWxldGUtdGFzay1wcm9qZWN0IHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmRlbGV0ZS10YXNrOmhvdmVyLFxcbi5kZWxldGUtdGFzay1wcm9qZWN0OmhvdmVyIHtcXG4gIGFuaW1hdGlvbjogbW92ZS11cCAwLjVzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4uaW5mby1kaXNwbGF5IHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG87XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG87XFxuICB3aWR0aDogNTAlO1xcbiAgaGVpZ2h0OiA1MCU7XFxuICBnYXA6IDVweDtcXG4gIHotaW5kZXg6IDk5O1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgcGFkZGluZzogMTBweCAyMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJveC1zaGFkb3c6IDAgMXB4IDFweDtcXG4gIGNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxufVxcblxcbi5jbG9zZS1pbmZvIHtcXG4gIGp1c3RpZnktc2VsZjogZW5kO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ucHJvamVjdHMge1xcbiAgLm5ldy1wcm9qZWN0IHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG5cXG4gICY6aG92ZXIgLm5ldy1wcm9qZWN0IHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgcGFkZGluZzogMTBweCAwO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxuICB9XFxufVxcblxcbi5uZXctcHJvamVjdDpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5wcm9qZWN0LWZvcm0ge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgZ2FwOiAxMHB4O1xcbiAgei1pbmRleDogOTk7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHdpZHRoOiBjbGFtcCgxMDBweCwgMjAwcHgsIDMwMHB4KTtcXG4gIGhlaWdodDogY2xhbXAoNTBweCwgMTAwcHgsIDE1MHB4KTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcXG4gIGNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYm94LXNoYWRvdzogMCAxcHggMXB4O1xcbn1cXG5cXG4uc3VibWl0LXByb2plY3QsXFxuLmNhbmNlbC1wcm9qZWN0IHtcXG4gIHdpZHRoOiBhdXRvO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgcGFkZGluZzogM3B4IDlweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi5zdWJtaXQtcHJvamVjdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcXG4gIGNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xcbn1cXG5cXG4uc3VibWl0LXByb2plY3Q6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJjM2Q3NDtcXG4gIGNvbG9yOiAjYTViMGFlO1xcbn1cXG5cXG4uY2FuY2VsLXByb2plY3Qge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcXG4gIGNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcXG59XFxuXFxuLmNhbmNlbC1wcm9qZWN0OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkNGQ5ZDg7XFxuICBjb2xvcjogIzE1MjA0MztcXG59XFxuXFxuLnByb2plY3Qge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xcbn1cXG5cXG4ucHJvamVjdDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDRkOWQ4O1xcbn1cXG5cXG4uZGVsZXRlLXByb2plY3Qge1xcbiAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgZ3JpZC1jb2x1bW46IDMgLzQ7XFxuICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHdpZHRoOiAzMnB4O1xcbiAgaGVpZ2h0OiAzMnB4O1xcbn1cXG5cXG4uZGVsZXRlLXByb2plY3Q6aG92ZXIge1xcbiAgYW5pbWF0aW9uOiBtb3ZlLXVwIDAuNXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcblxcbkBrZXlmcmFtZXMgbW92ZS11cCB7XFxuICAwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcXG4gIH1cXG4gIDUwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNXB4KTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XFxuICB9XFxufVxcblxcblxcbmEge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XFxufVxcblxcbmE6dmlzaXRlZHtcXG4gIGNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xcbn1cXG5cXG4uZm9vdGVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXJvdzogLTIgLyAtMTtcXG4gIGdyaWQtY29sdW1uOiAxIC8gLTE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcXG4gIGNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xcbiAgcGFkZGluZzogMCAyMHB4O1xcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcXG4gIC5tYWluLWNvbnRlbnQge1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gYXV0byAxZnI7XFxuICB9XFxuXFxuICAuY3VycmVudC10YWIge1xcbiAgICBncmlkLXJvdzogMiAvIDM7XFxuICB9XFxuXFxuICAudGFzayB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byBhdXRvO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0bztcXG4gICAgcGFkZGluZzogMCAxMHB4O1xcbiAgfVxcblxcbiAgLmhvbWUtdGFza3Mge1xcbiAgICBncmlkLXJvdzogMyAvIC0xO1xcbiAgfVxcblxcbiAgLnRhc2tzLWhlYWRlciB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICB9XFxuXFxuICAudGFzay1kYXRlIHtcXG4gICAgcGFkZGluZy1yaWdodDogMDtcXG4gICAganVzdGlmeS1zZWxmOiBlbmQ7XFxuICB9XFxuXFxuICAudGFzayA+IGltZyB7XFxuICAgIGp1c3RpZnktc2VsZjogZW5kO1xcbiAgICBncmlkLWNvbHVtbjogMiAvIC0xO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogM3B4O1xcbiAgfVxcblxcbiAgLmluZm8tZGlzcGxheSB7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIGhlaWdodDogNTAlO1xcbiAgfVxcblxcbiAgLmR1ZSB7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDA7XFxuICB9XFxuICBcXG4gIC50YXNrID4gKiB7XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gIH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwidmFyIGRlZmF1bHRPcHRpb25zID0ge307XG5leHBvcnQgZnVuY3Rpb24gZ2V0RGVmYXVsdE9wdGlvbnMoKSB7XG4gIHJldHVybiBkZWZhdWx0T3B0aW9ucztcbn1cbmV4cG9ydCBmdW5jdGlvbiBzZXREZWZhdWx0T3B0aW9ucyhuZXdPcHRpb25zKSB7XG4gIGRlZmF1bHRPcHRpb25zID0gbmV3T3B0aW9ucztcbn0iLCIvKipcbiAqIEdvb2dsZSBDaHJvbWUgYXMgb2YgNjcuMC4zMzk2Ljg3IGludHJvZHVjZWQgdGltZXpvbmVzIHdpdGggb2Zmc2V0IHRoYXQgaW5jbHVkZXMgc2Vjb25kcy5cbiAqIFRoZXkgdXN1YWxseSBhcHBlYXIgZm9yIGRhdGVzIHRoYXQgZGVub3RlIHRpbWUgYmVmb3JlIHRoZSB0aW1lem9uZXMgd2VyZSBpbnRyb2R1Y2VkXG4gKiAoZS5nLiBmb3IgJ0V1cm9wZS9QcmFndWUnIHRpbWV6b25lIHRoZSBvZmZzZXQgaXMgR01UKzAwOjU3OjQ0IGJlZm9yZSAxIE9jdG9iZXIgMTg5MVxuICogYW5kIEdNVCswMTowMDowMCBhZnRlciB0aGF0IGRhdGUpXG4gKlxuICogRGF0ZSNnZXRUaW1lem9uZU9mZnNldCByZXR1cm5zIHRoZSBvZmZzZXQgaW4gbWludXRlcyBhbmQgd291bGQgcmV0dXJuIDU3IGZvciB0aGUgZXhhbXBsZSBhYm92ZSxcbiAqIHdoaWNoIHdvdWxkIGxlYWQgdG8gaW5jb3JyZWN0IGNhbGN1bGF0aW9ucy5cbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIHJldHVybnMgdGhlIHRpbWV6b25lIG9mZnNldCBpbiBtaWxsaXNlY29uZHMgdGhhdCB0YWtlcyBzZWNvbmRzIGluIGFjY291bnQuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMoZGF0ZSkge1xuICB2YXIgdXRjRGF0ZSA9IG5ldyBEYXRlKERhdGUuVVRDKGRhdGUuZ2V0RnVsbFllYXIoKSwgZGF0ZS5nZXRNb250aCgpLCBkYXRlLmdldERhdGUoKSwgZGF0ZS5nZXRIb3VycygpLCBkYXRlLmdldE1pbnV0ZXMoKSwgZGF0ZS5nZXRTZWNvbmRzKCksIGRhdGUuZ2V0TWlsbGlzZWNvbmRzKCkpKTtcbiAgdXRjRGF0ZS5zZXRVVENGdWxsWWVhcihkYXRlLmdldEZ1bGxZZWFyKCkpO1xuICByZXR1cm4gZGF0ZS5nZXRUaW1lKCkgLSB1dGNEYXRlLmdldFRpbWUoKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXF1aXJlZEFyZ3MocmVxdWlyZWQsIGFyZ3MpIHtcbiAgaWYgKGFyZ3MubGVuZ3RoIDwgcmVxdWlyZWQpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHJlcXVpcmVkICsgJyBhcmd1bWVudCcgKyAocmVxdWlyZWQgPiAxID8gJ3MnIDogJycpICsgJyByZXF1aXJlZCwgYnV0IG9ubHkgJyArIGFyZ3MubGVuZ3RoICsgJyBwcmVzZW50Jyk7XG4gIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0ludGVnZXIoZGlydHlOdW1iZXIpIHtcbiAgaWYgKGRpcnR5TnVtYmVyID09PSBudWxsIHx8IGRpcnR5TnVtYmVyID09PSB0cnVlIHx8IGRpcnR5TnVtYmVyID09PSBmYWxzZSkge1xuICAgIHJldHVybiBOYU47XG4gIH1cbiAgdmFyIG51bWJlciA9IE51bWJlcihkaXJ0eU51bWJlcik7XG4gIGlmIChpc05hTihudW1iZXIpKSB7XG4gICAgcmV0dXJuIG51bWJlcjtcbiAgfVxuICByZXR1cm4gbnVtYmVyIDwgMCA/IE1hdGguY2VpbChudW1iZXIpIDogTWF0aC5mbG9vcihudW1iZXIpO1xufSIsIi8qKlxuICogRGF5cyBpbiAxIHdlZWsuXG4gKlxuICogQG5hbWUgZGF5c0luV2Vla1xuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuZXhwb3J0IHZhciBkYXlzSW5XZWVrID0gNztcblxuLyoqXG4gKiBEYXlzIGluIDEgeWVhclxuICogT25lIHllYXJzIGVxdWFscyAzNjUuMjQyNSBkYXlzIGFjY29yZGluZyB0byB0aGUgZm9ybXVsYTpcbiAqXG4gKiA+IExlYXAgeWVhciBvY2N1cmVzIGV2ZXJ5IDQgeWVhcnMsIGV4Y2VwdCBmb3IgeWVhcnMgdGhhdCBhcmUgZGl2aXNhYmxlIGJ5IDEwMCBhbmQgbm90IGRpdmlzYWJsZSBieSA0MDAuXG4gKiA+IDEgbWVhbiB5ZWFyID0gKDM2NSsxLzQtMS8xMDArMS80MDApIGRheXMgPSAzNjUuMjQyNSBkYXlzXG4gKlxuICogQG5hbWUgZGF5c0luWWVhclxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuZXhwb3J0IHZhciBkYXlzSW5ZZWFyID0gMzY1LjI0MjU7XG5cbi8qKlxuICogTWF4aW11bSBhbGxvd2VkIHRpbWUuXG4gKlxuICogQG5hbWUgbWF4VGltZVxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuZXhwb3J0IHZhciBtYXhUaW1lID0gTWF0aC5wb3coMTAsIDgpICogMjQgKiA2MCAqIDYwICogMTAwMDtcblxuLyoqXG4gKiBNaWxsaXNlY29uZHMgaW4gMSBtaW51dGVcbiAqXG4gKiBAbmFtZSBtaWxsaXNlY29uZHNJbk1pbnV0ZVxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuZXhwb3J0IHZhciBtaWxsaXNlY29uZHNJbk1pbnV0ZSA9IDYwMDAwO1xuXG4vKipcbiAqIE1pbGxpc2Vjb25kcyBpbiAxIGhvdXJcbiAqXG4gKiBAbmFtZSBtaWxsaXNlY29uZHNJbkhvdXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cbmV4cG9ydCB2YXIgbWlsbGlzZWNvbmRzSW5Ib3VyID0gMzYwMDAwMDtcblxuLyoqXG4gKiBNaWxsaXNlY29uZHMgaW4gMSBzZWNvbmRcbiAqXG4gKiBAbmFtZSBtaWxsaXNlY29uZHNJblNlY29uZFxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuZXhwb3J0IHZhciBtaWxsaXNlY29uZHNJblNlY29uZCA9IDEwMDA7XG5cbi8qKlxuICogTWluaW11bSBhbGxvd2VkIHRpbWUuXG4gKlxuICogQG5hbWUgbWluVGltZVxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuZXhwb3J0IHZhciBtaW5UaW1lID0gLW1heFRpbWU7XG5cbi8qKlxuICogTWludXRlcyBpbiAxIGhvdXJcbiAqXG4gKiBAbmFtZSBtaW51dGVzSW5Ib3VyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5leHBvcnQgdmFyIG1pbnV0ZXNJbkhvdXIgPSA2MDtcblxuLyoqXG4gKiBNb250aHMgaW4gMSBxdWFydGVyXG4gKlxuICogQG5hbWUgbW9udGhzSW5RdWFydGVyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5leHBvcnQgdmFyIG1vbnRoc0luUXVhcnRlciA9IDM7XG5cbi8qKlxuICogTW9udGhzIGluIDEgeWVhclxuICpcbiAqIEBuYW1lIG1vbnRoc0luWWVhclxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuZXhwb3J0IHZhciBtb250aHNJblllYXIgPSAxMjtcblxuLyoqXG4gKiBRdWFydGVycyBpbiAxIHllYXJcbiAqXG4gKiBAbmFtZSBxdWFydGVyc0luWWVhclxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuZXhwb3J0IHZhciBxdWFydGVyc0luWWVhciA9IDQ7XG5cbi8qKlxuICogU2Vjb25kcyBpbiAxIGhvdXJcbiAqXG4gKiBAbmFtZSBzZWNvbmRzSW5Ib3VyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5leHBvcnQgdmFyIHNlY29uZHNJbkhvdXIgPSAzNjAwO1xuXG4vKipcbiAqIFNlY29uZHMgaW4gMSBtaW51dGVcbiAqXG4gKiBAbmFtZSBzZWNvbmRzSW5NaW51dGVcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cbmV4cG9ydCB2YXIgc2Vjb25kc0luTWludXRlID0gNjA7XG5cbi8qKlxuICogU2Vjb25kcyBpbiAxIGRheVxuICpcbiAqIEBuYW1lIHNlY29uZHNJbkRheVxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuZXhwb3J0IHZhciBzZWNvbmRzSW5EYXkgPSBzZWNvbmRzSW5Ib3VyICogMjQ7XG5cbi8qKlxuICogU2Vjb25kcyBpbiAxIHdlZWtcbiAqXG4gKiBAbmFtZSBzZWNvbmRzSW5XZWVrXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5leHBvcnQgdmFyIHNlY29uZHNJbldlZWsgPSBzZWNvbmRzSW5EYXkgKiA3O1xuXG4vKipcbiAqIFNlY29uZHMgaW4gMSB5ZWFyXG4gKlxuICogQG5hbWUgc2Vjb25kc0luWWVhclxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuZXhwb3J0IHZhciBzZWNvbmRzSW5ZZWFyID0gc2Vjb25kc0luRGF5ICogZGF5c0luWWVhcjtcblxuLyoqXG4gKiBTZWNvbmRzIGluIDEgbW9udGhcbiAqXG4gKiBAbmFtZSBzZWNvbmRzSW5Nb250aFxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuZXhwb3J0IHZhciBzZWNvbmRzSW5Nb250aCA9IHNlY29uZHNJblllYXIgLyAxMjtcblxuLyoqXG4gKiBTZWNvbmRzIGluIDEgcXVhcnRlclxuICpcbiAqIEBuYW1lIHNlY29uZHNJblF1YXJ0ZXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cbmV4cG9ydCB2YXIgc2Vjb25kc0luUXVhcnRlciA9IHNlY29uZHNJbk1vbnRoICogMzsiLCJpbXBvcnQgZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyBmcm9tIFwiLi4vX2xpYi9nZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZklTT1dlZWsgZnJvbSBcIi4uL3N0YXJ0T2ZJU09XZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xudmFyIE1JTExJU0VDT05EU19JTl9XRUVLID0gNjA0ODAwMDAwO1xuXG4vKipcbiAqIEBuYW1lIGRpZmZlcmVuY2VJbkNhbGVuZGFySVNPV2Vla3NcbiAqIEBjYXRlZ29yeSBJU08gV2VlayBIZWxwZXJzXG4gKiBAc3VtbWFyeSBHZXQgdGhlIG51bWJlciBvZiBjYWxlbmRhciBJU08gd2Vla3MgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBHZXQgdGhlIG51bWJlciBvZiBjYWxlbmRhciBJU08gd2Vla3MgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMuXG4gKlxuICogSVNPIHdlZWstbnVtYmVyaW5nIHllYXI6IGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSVNPX3dlZWtfZGF0ZVxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVMZWZ0IC0gdGhlIGxhdGVyIGRhdGVcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVSaWdodCAtIHRoZSBlYXJsaWVyIGRhdGVcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IHRoZSBudW1iZXIgb2YgY2FsZW5kYXIgSVNPIHdlZWtzXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEhvdyBtYW55IGNhbGVuZGFyIElTTyB3ZWVrcyBhcmUgYmV0d2VlbiA2IEp1bHkgMjAxNCBhbmQgMjEgSnVseSAyMDE0P1xuICogY29uc3QgcmVzdWx0ID0gZGlmZmVyZW5jZUluQ2FsZW5kYXJJU09XZWVrcyhcbiAqICAgbmV3IERhdGUoMjAxNCwgNiwgMjEpLFxuICogICBuZXcgRGF0ZSgyMDE0LCA2LCA2KVxuICogKVxuICogLy89PiAzXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRpZmZlcmVuY2VJbkNhbGVuZGFySVNPV2Vla3MoZGlydHlEYXRlTGVmdCwgZGlydHlEYXRlUmlnaHQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBzdGFydE9mSVNPV2Vla0xlZnQgPSBzdGFydE9mSVNPV2VlayhkaXJ0eURhdGVMZWZ0KTtcbiAgdmFyIHN0YXJ0T2ZJU09XZWVrUmlnaHQgPSBzdGFydE9mSVNPV2VlayhkaXJ0eURhdGVSaWdodCk7XG4gIHZhciB0aW1lc3RhbXBMZWZ0ID0gc3RhcnRPZklTT1dlZWtMZWZ0LmdldFRpbWUoKSAtIGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMoc3RhcnRPZklTT1dlZWtMZWZ0KTtcbiAgdmFyIHRpbWVzdGFtcFJpZ2h0ID0gc3RhcnRPZklTT1dlZWtSaWdodC5nZXRUaW1lKCkgLSBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzKHN0YXJ0T2ZJU09XZWVrUmlnaHQpO1xuXG4gIC8vIFJvdW5kIHRoZSBudW1iZXIgb2YgZGF5cyB0byB0aGUgbmVhcmVzdCBpbnRlZ2VyXG4gIC8vIGJlY2F1c2UgdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgaW4gYSB3ZWVrIGlzIG5vdCBjb25zdGFudFxuICAvLyAoZS5nLiBpdCdzIGRpZmZlcmVudCBpbiB0aGUgd2VlayBvZiB0aGUgZGF5bGlnaHQgc2F2aW5nIHRpbWUgY2xvY2sgc2hpZnQpXG4gIHJldHVybiBNYXRoLnJvdW5kKCh0aW1lc3RhbXBMZWZ0IC0gdGltZXN0YW1wUmlnaHQpIC8gTUlMTElTRUNPTkRTX0lOX1dFRUspO1xufSIsImltcG9ydCBlbmRPZldlZWsgZnJvbSBcIi4uL2VuZE9mV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgZW5kT2ZJU09XZWVrXG4gKiBAY2F0ZWdvcnkgSVNPIFdlZWsgSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBlbmQgb2YgYW4gSVNPIHdlZWsgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBlbmQgb2YgYW4gSVNPIHdlZWsgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIHJlc3VsdCB3aWxsIGJlIGluIHRoZSBsb2NhbCB0aW1lem9uZS5cbiAqXG4gKiBJU08gd2Vlay1udW1iZXJpbmcgeWVhcjogaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fd2Vla19kYXRlXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBvcmlnaW5hbCBkYXRlXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIGVuZCBvZiBhbiBJU08gd2Vla1xuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBlbmQgb2YgYW4gSVNPIHdlZWsgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBlbmRPZklTT1dlZWsobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSlcbiAqIC8vPT4gU3VuIFNlcCAwNyAyMDE0IDIzOjU5OjU5Ljk5OVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBlbmRPZklTT1dlZWsoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICByZXR1cm4gZW5kT2ZXZWVrKGRpcnR5RGF0ZSwge1xuICAgIHdlZWtTdGFydHNPbjogMVxuICB9KTtcbn0iLCJpbXBvcnQgeyBnZXREZWZhdWx0T3B0aW9ucyB9IGZyb20gXCIuLi9fbGliL2RlZmF1bHRPcHRpb25zL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBlbmRPZldlZWtcbiAqIEBjYXRlZ29yeSBXZWVrIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgZW5kIG9mIGEgd2VlayBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIGVuZCBvZiBhIHdlZWsgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIHJlc3VsdCB3aWxsIGJlIGluIHRoZSBsb2NhbCB0aW1lem9uZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIG9yaWdpbmFsIGRhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSBhbiBvYmplY3Qgd2l0aCBvcHRpb25zLlxuICogQHBhcmFtIHtMb2NhbGV9IFtvcHRpb25zLmxvY2FsZT1kZWZhdWx0TG9jYWxlXSAtIHRoZSBsb2NhbGUgb2JqZWN0LiBTZWUgW0xvY2FsZV17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9Mb2NhbGV9XG4gKiBAcGFyYW0gezB8MXwyfDN8NHw1fDZ9IFtvcHRpb25zLndlZWtTdGFydHNPbj0wXSAtIHRoZSBpbmRleCBvZiB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrICgwIC0gU3VuZGF5KVxuICogQHJldHVybnMge0RhdGV9IHRoZSBlbmQgb2YgYSB3ZWVrXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLndlZWtTdGFydHNPbmAgbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDZcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIGVuZCBvZiBhIHdlZWsgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBlbmRPZldlZWsobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSlcbiAqIC8vPT4gU2F0IFNlcCAwNiAyMDE0IDIzOjU5OjU5Ljk5OVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0aGUgd2VlayBzdGFydHMgb24gTW9uZGF5LCB0aGUgZW5kIG9mIHRoZSB3ZWVrIGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gZW5kT2ZXZWVrKG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCksIHsgd2Vla1N0YXJ0c09uOiAxIH0pXG4gKiAvLz0+IFN1biBTZXAgMDcgMjAxNCAyMzo1OTo1OS45OTlcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZW5kT2ZXZWVrKGRpcnR5RGF0ZSwgb3B0aW9ucykge1xuICB2YXIgX3JlZiwgX3JlZjIsIF9yZWYzLCBfb3B0aW9ucyR3ZWVrU3RhcnRzT24sIF9vcHRpb25zJGxvY2FsZSwgX29wdGlvbnMkbG9jYWxlJG9wdGlvLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwsIF9kZWZhdWx0T3B0aW9ucyRsb2NhbDI7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGVmYXVsdE9wdGlvbnMgPSBnZXREZWZhdWx0T3B0aW9ucygpO1xuICB2YXIgd2Vla1N0YXJ0c09uID0gdG9JbnRlZ2VyKChfcmVmID0gKF9yZWYyID0gKF9yZWYzID0gKF9vcHRpb25zJHdlZWtTdGFydHNPbiA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9vcHRpb25zJHdlZWtTdGFydHNPbiAhPT0gdm9pZCAwID8gX29wdGlvbnMkd2Vla1N0YXJ0c09uIDogb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlID0gb3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZSRvcHRpbyA9IF9vcHRpb25zJGxvY2FsZS5vcHRpb25zKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUkb3B0aW8gPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9vcHRpb25zJGxvY2FsZSRvcHRpby53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9yZWYzICE9PSB2b2lkIDAgPyBfcmVmMyA6IGRlZmF1bHRPcHRpb25zLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX3JlZjIgIT09IHZvaWQgMCA/IF9yZWYyIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9IGRlZmF1bHRPcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9IF9kZWZhdWx0T3B0aW9ucyRsb2NhbC5vcHRpb25zKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX3JlZiAhPT0gdm9pZCAwID8gX3JlZiA6IDApO1xuXG4gIC8vIFRlc3QgaWYgd2Vla1N0YXJ0c09uIGlzIGJldHdlZW4gMCBhbmQgNiBfYW5kXyBpcyBub3QgTmFOXG4gIGlmICghKHdlZWtTdGFydHNPbiA+PSAwICYmIHdlZWtTdGFydHNPbiA8PSA2KSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCd3ZWVrU3RhcnRzT24gbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDYgaW5jbHVzaXZlbHknKTtcbiAgfVxuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgZGF5ID0gZGF0ZS5nZXREYXkoKTtcbiAgdmFyIGRpZmYgPSAoZGF5IDwgd2Vla1N0YXJ0c09uID8gLTcgOiAwKSArIDYgLSAoZGF5IC0gd2Vla1N0YXJ0c09uKTtcbiAgZGF0ZS5zZXREYXRlKGRhdGUuZ2V0RGF0ZSgpICsgZGlmZik7XG4gIGRhdGUuc2V0SG91cnMoMjMsIDU5LCA1OSwgOTk5KTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IHsgbWlsbGlzZWNvbmRzSW5Ib3VyLCBtaWxsaXNlY29uZHNJbk1pbnV0ZSB9IGZyb20gXCIuLi9jb25zdGFudHMvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBwYXJzZUlTT1xuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBQYXJzZSBJU08gc3RyaW5nXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBQYXJzZSB0aGUgZ2l2ZW4gc3RyaW5nIGluIElTTyA4NjAxIGZvcm1hdCBhbmQgcmV0dXJuIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogRnVuY3Rpb24gYWNjZXB0cyBjb21wbGV0ZSBJU08gODYwMSBmb3JtYXRzIGFzIHdlbGwgYXMgcGFydGlhbCBpbXBsZW1lbnRhdGlvbnMuXG4gKiBJU08gODYwMTogaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fODYwMVxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpc24ndCBhIHN0cmluZywgdGhlIGZ1bmN0aW9uIGNhbm5vdCBwYXJzZSB0aGUgc3RyaW5nIG9yXG4gKiB0aGUgdmFsdWVzIGFyZSBpbnZhbGlkLCBpdCByZXR1cm5zIEludmFsaWQgRGF0ZS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gYXJndW1lbnQgLSB0aGUgdmFsdWUgdG8gY29udmVydFxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIGFuIG9iamVjdCB3aXRoIG9wdGlvbnMuXG4gKiBAcGFyYW0gezB8MXwyfSBbb3B0aW9ucy5hZGRpdGlvbmFsRGlnaXRzPTJdIC0gdGhlIGFkZGl0aW9uYWwgbnVtYmVyIG9mIGRpZ2l0cyBpbiB0aGUgZXh0ZW5kZWQgeWVhciBmb3JtYXRcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgcGFyc2VkIGRhdGUgaW4gdGhlIGxvY2FsIHRpbWUgem9uZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy5hZGRpdGlvbmFsRGlnaXRzYCBtdXN0IGJlIDAsIDEgb3IgMlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHN0cmluZyAnMjAxNC0wMi0xMVQxMTozMDozMCcgdG8gZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHBhcnNlSVNPKCcyMDE0LTAyLTExVDExOjMwOjMwJylcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbnZlcnQgc3RyaW5nICcrMDIwMTQxMDEnIHRvIGRhdGUsXG4gKiAvLyBpZiB0aGUgYWRkaXRpb25hbCBudW1iZXIgb2YgZGlnaXRzIGluIHRoZSBleHRlbmRlZCB5ZWFyIGZvcm1hdCBpcyAxOlxuICogY29uc3QgcmVzdWx0ID0gcGFyc2VJU08oJyswMjAxNDEwMScsIHsgYWRkaXRpb25hbERpZ2l0czogMSB9KVxuICogLy89PiBGcmkgQXByIDExIDIwMTQgMDA6MDA6MDBcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcGFyc2VJU08oYXJndW1lbnQsIG9wdGlvbnMpIHtcbiAgdmFyIF9vcHRpb25zJGFkZGl0aW9uYWxEaTtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBhZGRpdGlvbmFsRGlnaXRzID0gdG9JbnRlZ2VyKChfb3B0aW9ucyRhZGRpdGlvbmFsRGkgPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuYWRkaXRpb25hbERpZ2l0cykgIT09IG51bGwgJiYgX29wdGlvbnMkYWRkaXRpb25hbERpICE9PSB2b2lkIDAgPyBfb3B0aW9ucyRhZGRpdGlvbmFsRGkgOiAyKTtcbiAgaWYgKGFkZGl0aW9uYWxEaWdpdHMgIT09IDIgJiYgYWRkaXRpb25hbERpZ2l0cyAhPT0gMSAmJiBhZGRpdGlvbmFsRGlnaXRzICE9PSAwKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ2FkZGl0aW9uYWxEaWdpdHMgbXVzdCBiZSAwLCAxIG9yIDInKTtcbiAgfVxuICBpZiAoISh0eXBlb2YgYXJndW1lbnQgPT09ICdzdHJpbmcnIHx8IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudCkgPT09ICdbb2JqZWN0IFN0cmluZ10nKSkge1xuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG4gIHZhciBkYXRlU3RyaW5ncyA9IHNwbGl0RGF0ZVN0cmluZyhhcmd1bWVudCk7XG4gIHZhciBkYXRlO1xuICBpZiAoZGF0ZVN0cmluZ3MuZGF0ZSkge1xuICAgIHZhciBwYXJzZVllYXJSZXN1bHQgPSBwYXJzZVllYXIoZGF0ZVN0cmluZ3MuZGF0ZSwgYWRkaXRpb25hbERpZ2l0cyk7XG4gICAgZGF0ZSA9IHBhcnNlRGF0ZShwYXJzZVllYXJSZXN1bHQucmVzdERhdGVTdHJpbmcsIHBhcnNlWWVhclJlc3VsdC55ZWFyKTtcbiAgfVxuICBpZiAoIWRhdGUgfHwgaXNOYU4oZGF0ZS5nZXRUaW1lKCkpKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cbiAgdmFyIHRpbWVzdGFtcCA9IGRhdGUuZ2V0VGltZSgpO1xuICB2YXIgdGltZSA9IDA7XG4gIHZhciBvZmZzZXQ7XG4gIGlmIChkYXRlU3RyaW5ncy50aW1lKSB7XG4gICAgdGltZSA9IHBhcnNlVGltZShkYXRlU3RyaW5ncy50aW1lKTtcbiAgICBpZiAoaXNOYU4odGltZSkpIHtcbiAgICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICAgIH1cbiAgfVxuICBpZiAoZGF0ZVN0cmluZ3MudGltZXpvbmUpIHtcbiAgICBvZmZzZXQgPSBwYXJzZVRpbWV6b25lKGRhdGVTdHJpbmdzLnRpbWV6b25lKTtcbiAgICBpZiAoaXNOYU4ob2Zmc2V0KSkge1xuICAgICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHZhciBkaXJ0eURhdGUgPSBuZXcgRGF0ZSh0aW1lc3RhbXAgKyB0aW1lKTtcbiAgICAvLyBqcyBwYXJzZWQgc3RyaW5nIGFzc3VtaW5nIGl0J3MgaW4gVVRDIHRpbWV6b25lXG4gICAgLy8gYnV0IHdlIG5lZWQgaXQgdG8gYmUgcGFyc2VkIGluIG91ciB0aW1lem9uZVxuICAgIC8vIHNvIHdlIHVzZSB1dGMgdmFsdWVzIHRvIGJ1aWxkIGRhdGUgaW4gb3VyIHRpbWV6b25lLlxuICAgIC8vIFllYXIgdmFsdWVzIGZyb20gMCB0byA5OSBtYXAgdG8gdGhlIHllYXJzIDE5MDAgdG8gMTk5OVxuICAgIC8vIHNvIHNldCB5ZWFyIGV4cGxpY2l0bHkgd2l0aCBzZXRGdWxsWWVhci5cbiAgICB2YXIgcmVzdWx0ID0gbmV3IERhdGUoMCk7XG4gICAgcmVzdWx0LnNldEZ1bGxZZWFyKGRpcnR5RGF0ZS5nZXRVVENGdWxsWWVhcigpLCBkaXJ0eURhdGUuZ2V0VVRDTW9udGgoKSwgZGlydHlEYXRlLmdldFVUQ0RhdGUoKSk7XG4gICAgcmVzdWx0LnNldEhvdXJzKGRpcnR5RGF0ZS5nZXRVVENIb3VycygpLCBkaXJ0eURhdGUuZ2V0VVRDTWludXRlcygpLCBkaXJ0eURhdGUuZ2V0VVRDU2Vjb25kcygpLCBkaXJ0eURhdGUuZ2V0VVRDTWlsbGlzZWNvbmRzKCkpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbiAgcmV0dXJuIG5ldyBEYXRlKHRpbWVzdGFtcCArIHRpbWUgKyBvZmZzZXQpO1xufVxudmFyIHBhdHRlcm5zID0ge1xuICBkYXRlVGltZURlbGltaXRlcjogL1tUIF0vLFxuICB0aW1lWm9uZURlbGltaXRlcjogL1taIF0vaSxcbiAgdGltZXpvbmU6IC8oW1orLV0uKikkL1xufTtcbnZhciBkYXRlUmVnZXggPSAvXi0/KD86KFxcZHszfSl8KFxcZHsyfSkoPzotPyhcXGR7Mn0pKT98VyhcXGR7Mn0pKD86LT8oXFxkezF9KSk/fCkkLztcbnZhciB0aW1lUmVnZXggPSAvXihcXGR7Mn0oPzpbLixdXFxkKik/KSg/Ojo/KFxcZHsyfSg/OlsuLF1cXGQqKT8pKT8oPzo6PyhcXGR7Mn0oPzpbLixdXFxkKik/KSk/JC87XG52YXIgdGltZXpvbmVSZWdleCA9IC9eKFsrLV0pKFxcZHsyfSkoPzo6PyhcXGR7Mn0pKT8kLztcbmZ1bmN0aW9uIHNwbGl0RGF0ZVN0cmluZyhkYXRlU3RyaW5nKSB7XG4gIHZhciBkYXRlU3RyaW5ncyA9IHt9O1xuICB2YXIgYXJyYXkgPSBkYXRlU3RyaW5nLnNwbGl0KHBhdHRlcm5zLmRhdGVUaW1lRGVsaW1pdGVyKTtcbiAgdmFyIHRpbWVTdHJpbmc7XG5cbiAgLy8gVGhlIHJlZ2V4IG1hdGNoIHNob3VsZCBvbmx5IHJldHVybiBhdCBtYXhpbXVtIHR3byBhcnJheSBlbGVtZW50cy5cbiAgLy8gW2RhdGVdLCBbdGltZV0sIG9yIFtkYXRlLCB0aW1lXS5cbiAgaWYgKGFycmF5Lmxlbmd0aCA+IDIpIHtcbiAgICByZXR1cm4gZGF0ZVN0cmluZ3M7XG4gIH1cbiAgaWYgKC86Ly50ZXN0KGFycmF5WzBdKSkge1xuICAgIHRpbWVTdHJpbmcgPSBhcnJheVswXTtcbiAgfSBlbHNlIHtcbiAgICBkYXRlU3RyaW5ncy5kYXRlID0gYXJyYXlbMF07XG4gICAgdGltZVN0cmluZyA9IGFycmF5WzFdO1xuICAgIGlmIChwYXR0ZXJucy50aW1lWm9uZURlbGltaXRlci50ZXN0KGRhdGVTdHJpbmdzLmRhdGUpKSB7XG4gICAgICBkYXRlU3RyaW5ncy5kYXRlID0gZGF0ZVN0cmluZy5zcGxpdChwYXR0ZXJucy50aW1lWm9uZURlbGltaXRlcilbMF07XG4gICAgICB0aW1lU3RyaW5nID0gZGF0ZVN0cmluZy5zdWJzdHIoZGF0ZVN0cmluZ3MuZGF0ZS5sZW5ndGgsIGRhdGVTdHJpbmcubGVuZ3RoKTtcbiAgICB9XG4gIH1cbiAgaWYgKHRpbWVTdHJpbmcpIHtcbiAgICB2YXIgdG9rZW4gPSBwYXR0ZXJucy50aW1lem9uZS5leGVjKHRpbWVTdHJpbmcpO1xuICAgIGlmICh0b2tlbikge1xuICAgICAgZGF0ZVN0cmluZ3MudGltZSA9IHRpbWVTdHJpbmcucmVwbGFjZSh0b2tlblsxXSwgJycpO1xuICAgICAgZGF0ZVN0cmluZ3MudGltZXpvbmUgPSB0b2tlblsxXTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGF0ZVN0cmluZ3MudGltZSA9IHRpbWVTdHJpbmc7XG4gICAgfVxuICB9XG4gIHJldHVybiBkYXRlU3RyaW5ncztcbn1cbmZ1bmN0aW9uIHBhcnNlWWVhcihkYXRlU3RyaW5nLCBhZGRpdGlvbmFsRGlnaXRzKSB7XG4gIHZhciByZWdleCA9IG5ldyBSZWdFeHAoJ14oPzooXFxcXGR7NH18WystXVxcXFxkeycgKyAoNCArIGFkZGl0aW9uYWxEaWdpdHMpICsgJ30pfChcXFxcZHsyfXxbKy1dXFxcXGR7JyArICgyICsgYWRkaXRpb25hbERpZ2l0cykgKyAnfSkkKScpO1xuICB2YXIgY2FwdHVyZXMgPSBkYXRlU3RyaW5nLm1hdGNoKHJlZ2V4KTtcbiAgLy8gSW52YWxpZCBJU08tZm9ybWF0dGVkIHllYXJcbiAgaWYgKCFjYXB0dXJlcykgcmV0dXJuIHtcbiAgICB5ZWFyOiBOYU4sXG4gICAgcmVzdERhdGVTdHJpbmc6ICcnXG4gIH07XG4gIHZhciB5ZWFyID0gY2FwdHVyZXNbMV0gPyBwYXJzZUludChjYXB0dXJlc1sxXSkgOiBudWxsO1xuICB2YXIgY2VudHVyeSA9IGNhcHR1cmVzWzJdID8gcGFyc2VJbnQoY2FwdHVyZXNbMl0pIDogbnVsbDtcblxuICAvLyBlaXRoZXIgeWVhciBvciBjZW50dXJ5IGlzIG51bGwsIG5vdCBib3RoXG4gIHJldHVybiB7XG4gICAgeWVhcjogY2VudHVyeSA9PT0gbnVsbCA/IHllYXIgOiBjZW50dXJ5ICogMTAwLFxuICAgIHJlc3REYXRlU3RyaW5nOiBkYXRlU3RyaW5nLnNsaWNlKChjYXB0dXJlc1sxXSB8fCBjYXB0dXJlc1syXSkubGVuZ3RoKVxuICB9O1xufVxuZnVuY3Rpb24gcGFyc2VEYXRlKGRhdGVTdHJpbmcsIHllYXIpIHtcbiAgLy8gSW52YWxpZCBJU08tZm9ybWF0dGVkIHllYXJcbiAgaWYgKHllYXIgPT09IG51bGwpIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB2YXIgY2FwdHVyZXMgPSBkYXRlU3RyaW5nLm1hdGNoKGRhdGVSZWdleCk7XG4gIC8vIEludmFsaWQgSVNPLWZvcm1hdHRlZCBzdHJpbmdcbiAgaWYgKCFjYXB0dXJlcykgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIHZhciBpc1dlZWtEYXRlID0gISFjYXB0dXJlc1s0XTtcbiAgdmFyIGRheU9mWWVhciA9IHBhcnNlRGF0ZVVuaXQoY2FwdHVyZXNbMV0pO1xuICB2YXIgbW9udGggPSBwYXJzZURhdGVVbml0KGNhcHR1cmVzWzJdKSAtIDE7XG4gIHZhciBkYXkgPSBwYXJzZURhdGVVbml0KGNhcHR1cmVzWzNdKTtcbiAgdmFyIHdlZWsgPSBwYXJzZURhdGVVbml0KGNhcHR1cmVzWzRdKTtcbiAgdmFyIGRheU9mV2VlayA9IHBhcnNlRGF0ZVVuaXQoY2FwdHVyZXNbNV0pIC0gMTtcbiAgaWYgKGlzV2Vla0RhdGUpIHtcbiAgICBpZiAoIXZhbGlkYXRlV2Vla0RhdGUoeWVhciwgd2VlaywgZGF5T2ZXZWVrKSkge1xuICAgICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gICAgfVxuICAgIHJldHVybiBkYXlPZklTT1dlZWtZZWFyKHllYXIsIHdlZWssIGRheU9mV2Vlayk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGRhdGUgPSBuZXcgRGF0ZSgwKTtcbiAgICBpZiAoIXZhbGlkYXRlRGF0ZSh5ZWFyLCBtb250aCwgZGF5KSB8fCAhdmFsaWRhdGVEYXlPZlllYXJEYXRlKHllYXIsIGRheU9mWWVhcikpIHtcbiAgICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICAgIH1cbiAgICBkYXRlLnNldFVUQ0Z1bGxZZWFyKHllYXIsIG1vbnRoLCBNYXRoLm1heChkYXlPZlllYXIsIGRheSkpO1xuICAgIHJldHVybiBkYXRlO1xuICB9XG59XG5mdW5jdGlvbiBwYXJzZURhdGVVbml0KHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSA/IHBhcnNlSW50KHZhbHVlKSA6IDE7XG59XG5mdW5jdGlvbiBwYXJzZVRpbWUodGltZVN0cmluZykge1xuICB2YXIgY2FwdHVyZXMgPSB0aW1lU3RyaW5nLm1hdGNoKHRpbWVSZWdleCk7XG4gIGlmICghY2FwdHVyZXMpIHJldHVybiBOYU47IC8vIEludmFsaWQgSVNPLWZvcm1hdHRlZCB0aW1lXG5cbiAgdmFyIGhvdXJzID0gcGFyc2VUaW1lVW5pdChjYXB0dXJlc1sxXSk7XG4gIHZhciBtaW51dGVzID0gcGFyc2VUaW1lVW5pdChjYXB0dXJlc1syXSk7XG4gIHZhciBzZWNvbmRzID0gcGFyc2VUaW1lVW5pdChjYXB0dXJlc1szXSk7XG4gIGlmICghdmFsaWRhdGVUaW1lKGhvdXJzLCBtaW51dGVzLCBzZWNvbmRzKSkge1xuICAgIHJldHVybiBOYU47XG4gIH1cbiAgcmV0dXJuIGhvdXJzICogbWlsbGlzZWNvbmRzSW5Ib3VyICsgbWludXRlcyAqIG1pbGxpc2Vjb25kc0luTWludXRlICsgc2Vjb25kcyAqIDEwMDA7XG59XG5mdW5jdGlvbiBwYXJzZVRpbWVVbml0KHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAmJiBwYXJzZUZsb2F0KHZhbHVlLnJlcGxhY2UoJywnLCAnLicpKSB8fCAwO1xufVxuZnVuY3Rpb24gcGFyc2VUaW1lem9uZSh0aW1lem9uZVN0cmluZykge1xuICBpZiAodGltZXpvbmVTdHJpbmcgPT09ICdaJykgcmV0dXJuIDA7XG4gIHZhciBjYXB0dXJlcyA9IHRpbWV6b25lU3RyaW5nLm1hdGNoKHRpbWV6b25lUmVnZXgpO1xuICBpZiAoIWNhcHR1cmVzKSByZXR1cm4gMDtcbiAgdmFyIHNpZ24gPSBjYXB0dXJlc1sxXSA9PT0gJysnID8gLTEgOiAxO1xuICB2YXIgaG91cnMgPSBwYXJzZUludChjYXB0dXJlc1syXSk7XG4gIHZhciBtaW51dGVzID0gY2FwdHVyZXNbM10gJiYgcGFyc2VJbnQoY2FwdHVyZXNbM10pIHx8IDA7XG4gIGlmICghdmFsaWRhdGVUaW1lem9uZShob3VycywgbWludXRlcykpIHtcbiAgICByZXR1cm4gTmFOO1xuICB9XG4gIHJldHVybiBzaWduICogKGhvdXJzICogbWlsbGlzZWNvbmRzSW5Ib3VyICsgbWludXRlcyAqIG1pbGxpc2Vjb25kc0luTWludXRlKTtcbn1cbmZ1bmN0aW9uIGRheU9mSVNPV2Vla1llYXIoaXNvV2Vla1llYXIsIHdlZWssIGRheSkge1xuICB2YXIgZGF0ZSA9IG5ldyBEYXRlKDApO1xuICBkYXRlLnNldFVUQ0Z1bGxZZWFyKGlzb1dlZWtZZWFyLCAwLCA0KTtcbiAgdmFyIGZvdXJ0aE9mSmFudWFyeURheSA9IGRhdGUuZ2V0VVRDRGF5KCkgfHwgNztcbiAgdmFyIGRpZmYgPSAod2VlayAtIDEpICogNyArIGRheSArIDEgLSBmb3VydGhPZkphbnVhcnlEYXk7XG4gIGRhdGUuc2V0VVRDRGF0ZShkYXRlLmdldFVUQ0RhdGUoKSArIGRpZmYpO1xuICByZXR1cm4gZGF0ZTtcbn1cblxuLy8gVmFsaWRhdGlvbiBmdW5jdGlvbnNcblxuLy8gRmVicnVhcnkgaXMgbnVsbCB0byBoYW5kbGUgdGhlIGxlYXAgeWVhciAodXNpbmcgfHwpXG52YXIgZGF5c0luTW9udGhzID0gWzMxLCBudWxsLCAzMSwgMzAsIDMxLCAzMCwgMzEsIDMxLCAzMCwgMzEsIDMwLCAzMV07XG5mdW5jdGlvbiBpc0xlYXBZZWFySW5kZXgoeWVhcikge1xuICByZXR1cm4geWVhciAlIDQwMCA9PT0gMCB8fCB5ZWFyICUgNCA9PT0gMCAmJiB5ZWFyICUgMTAwICE9PSAwO1xufVxuZnVuY3Rpb24gdmFsaWRhdGVEYXRlKHllYXIsIG1vbnRoLCBkYXRlKSB7XG4gIHJldHVybiBtb250aCA+PSAwICYmIG1vbnRoIDw9IDExICYmIGRhdGUgPj0gMSAmJiBkYXRlIDw9IChkYXlzSW5Nb250aHNbbW9udGhdIHx8IChpc0xlYXBZZWFySW5kZXgoeWVhcikgPyAyOSA6IDI4KSk7XG59XG5mdW5jdGlvbiB2YWxpZGF0ZURheU9mWWVhckRhdGUoeWVhciwgZGF5T2ZZZWFyKSB7XG4gIHJldHVybiBkYXlPZlllYXIgPj0gMSAmJiBkYXlPZlllYXIgPD0gKGlzTGVhcFllYXJJbmRleCh5ZWFyKSA/IDM2NiA6IDM2NSk7XG59XG5mdW5jdGlvbiB2YWxpZGF0ZVdlZWtEYXRlKF95ZWFyLCB3ZWVrLCBkYXkpIHtcbiAgcmV0dXJuIHdlZWsgPj0gMSAmJiB3ZWVrIDw9IDUzICYmIGRheSA+PSAwICYmIGRheSA8PSA2O1xufVxuZnVuY3Rpb24gdmFsaWRhdGVUaW1lKGhvdXJzLCBtaW51dGVzLCBzZWNvbmRzKSB7XG4gIGlmIChob3VycyA9PT0gMjQpIHtcbiAgICByZXR1cm4gbWludXRlcyA9PT0gMCAmJiBzZWNvbmRzID09PSAwO1xuICB9XG4gIHJldHVybiBzZWNvbmRzID49IDAgJiYgc2Vjb25kcyA8IDYwICYmIG1pbnV0ZXMgPj0gMCAmJiBtaW51dGVzIDwgNjAgJiYgaG91cnMgPj0gMCAmJiBob3VycyA8IDI1O1xufVxuZnVuY3Rpb24gdmFsaWRhdGVUaW1lem9uZShfaG91cnMsIG1pbnV0ZXMpIHtcbiAgcmV0dXJuIG1pbnV0ZXMgPj0gMCAmJiBtaW51dGVzIDw9IDU5O1xufSIsImltcG9ydCBzdGFydE9mV2VlayBmcm9tIFwiLi4vc3RhcnRPZldlZWsvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHN0YXJ0T2ZJU09XZWVrXG4gKiBAY2F0ZWdvcnkgSVNPIFdlZWsgSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBzdGFydCBvZiBhbiBJU08gd2VlayBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIHN0YXJ0IG9mIGFuIElTTyB3ZWVrIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqIFRoZSByZXN1bHQgd2lsbCBiZSBpbiB0aGUgbG9jYWwgdGltZXpvbmUuXG4gKlxuICogSVNPIHdlZWstbnVtYmVyaW5nIHllYXI6IGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSVNPX3dlZWtfZGF0ZVxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgb3JpZ2luYWwgZGF0ZVxuICogQHJldHVybnMge0RhdGV9IHRoZSBzdGFydCBvZiBhbiBJU08gd2Vla1xuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBzdGFydCBvZiBhbiBJU08gd2VlayBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZJU09XZWVrKG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCkpXG4gKiAvLz0+IE1vbiBTZXAgMDEgMjAxNCAwMDowMDowMFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mSVNPV2VlayhkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHJldHVybiBzdGFydE9mV2VlayhkaXJ0eURhdGUsIHtcbiAgICB3ZWVrU3RhcnRzT246IDFcbiAgfSk7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmltcG9ydCB7IGdldERlZmF1bHRPcHRpb25zIH0gZnJvbSBcIi4uL19saWIvZGVmYXVsdE9wdGlvbnMvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgc3RhcnRPZldlZWtcbiAqIEBjYXRlZ29yeSBXZWVrIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgc3RhcnQgb2YgYSB3ZWVrIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgc3RhcnQgb2YgYSB3ZWVrIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqIFRoZSByZXN1bHQgd2lsbCBiZSBpbiB0aGUgbG9jYWwgdGltZXpvbmUuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBvcmlnaW5hbCBkYXRlXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gYW4gb2JqZWN0IHdpdGggb3B0aW9ucy5cbiAqIEBwYXJhbSB7TG9jYWxlfSBbb3B0aW9ucy5sb2NhbGU9ZGVmYXVsdExvY2FsZV0gLSB0aGUgbG9jYWxlIG9iamVjdC4gU2VlIFtMb2NhbGVde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvTG9jYWxlfVxuICogQHBhcmFtIHswfDF8MnwzfDR8NXw2fSBbb3B0aW9ucy53ZWVrU3RhcnRzT249MF0gLSB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2VlayAoMCAtIFN1bmRheSlcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgc3RhcnQgb2YgYSB3ZWVrXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLndlZWtTdGFydHNPbmAgbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDZcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIHN0YXJ0IG9mIGEgd2VlayBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZXZWVrKG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCkpXG4gKiAvLz0+IFN1biBBdWcgMzEgMjAxNCAwMDowMDowMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0aGUgd2VlayBzdGFydHMgb24gTW9uZGF5LCB0aGUgc3RhcnQgb2YgdGhlIHdlZWsgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mV2VlayhuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApLCB7IHdlZWtTdGFydHNPbjogMSB9KVxuICogLy89PiBNb24gU2VwIDAxIDIwMTQgMDA6MDA6MDBcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZldlZWsoZGlydHlEYXRlLCBvcHRpb25zKSB7XG4gIHZhciBfcmVmLCBfcmVmMiwgX3JlZjMsIF9vcHRpb25zJHdlZWtTdGFydHNPbiwgX29wdGlvbnMkbG9jYWxlLCBfb3B0aW9ucyRsb2NhbGUkb3B0aW8sIF9kZWZhdWx0T3B0aW9ucyRsb2NhbCwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMjtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkZWZhdWx0T3B0aW9ucyA9IGdldERlZmF1bHRPcHRpb25zKCk7XG4gIHZhciB3ZWVrU3RhcnRzT24gPSB0b0ludGVnZXIoKF9yZWYgPSAoX3JlZjIgPSAoX3JlZjMgPSAoX29wdGlvbnMkd2Vla1N0YXJ0c09uID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX29wdGlvbnMkd2Vla1N0YXJ0c09uICE9PSB2b2lkIDAgPyBfb3B0aW9ucyR3ZWVrU3RhcnRzT24gOiBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUgPSBvcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlJG9wdGlvID0gX29wdGlvbnMkbG9jYWxlLm9wdGlvbnMpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZSRvcHRpbyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX29wdGlvbnMkbG9jYWxlJG9wdGlvLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX3JlZjMgIT09IHZvaWQgMCA/IF9yZWYzIDogZGVmYXVsdE9wdGlvbnMud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmMiAhPT0gdm9pZCAwID8gX3JlZjIgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsID0gZGVmYXVsdE9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID0gX2RlZmF1bHRPcHRpb25zJGxvY2FsLm9wdGlvbnMpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmICE9PSB2b2lkIDAgPyBfcmVmIDogMCk7XG5cbiAgLy8gVGVzdCBpZiB3ZWVrU3RhcnRzT24gaXMgYmV0d2VlbiAwIGFuZCA2IF9hbmRfIGlzIG5vdCBOYU5cbiAgaWYgKCEod2Vla1N0YXJ0c09uID49IDAgJiYgd2Vla1N0YXJ0c09uIDw9IDYpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ3dlZWtTdGFydHNPbiBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNiBpbmNsdXNpdmVseScpO1xuICB9XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBkYXkgPSBkYXRlLmdldERheSgpO1xuICB2YXIgZGlmZiA9IChkYXkgPCB3ZWVrU3RhcnRzT24gPyA3IDogMCkgKyBkYXkgLSB3ZWVrU3RhcnRzT247XG4gIGRhdGUuc2V0RGF0ZShkYXRlLmdldERhdGUoKSAtIGRpZmYpO1xuICBkYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJpbXBvcnQgX3R5cGVvZiBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdHlwZW9mXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSB0b0RhdGVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGFuIGluc3RhbmNlIG9mIERhdGUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIGl0cyBjbG9uZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYSBudW1iZXIsIGl0IGlzIHRyZWF0ZWQgYXMgYSB0aW1lc3RhbXAuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIG5vbmUgb2YgdGhlIGFib3ZlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBJbnZhbGlkIERhdGUuXG4gKlxuICogKipOb3RlKio6ICphbGwqIERhdGUgYXJndW1lbnRzIHBhc3NlZCB0byBhbnkgKmRhdGUtZm5zKiBmdW5jdGlvbiBpcyBwcm9jZXNzZWQgYnkgYHRvRGF0ZWAuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gYXJndW1lbnQgLSB0aGUgdmFsdWUgdG8gY29udmVydFxuICogQHJldHVybnMge0RhdGV9IHRoZSBwYXJzZWQgZGF0ZSBpbiB0aGUgbG9jYWwgdGltZSB6b25lXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ2xvbmUgdGhlIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUobmV3IERhdGUoMjAxNCwgMSwgMTEsIDExLCAzMCwgMzApKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCB0aGUgdGltZXN0YW1wIHRvIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUoMTM5MjA5ODQzMDAwMClcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvRGF0ZShhcmd1bWVudCkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGFyZ1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudCk7XG5cbiAgLy8gQ2xvbmUgdGhlIGRhdGVcbiAgaWYgKGFyZ3VtZW50IGluc3RhbmNlb2YgRGF0ZSB8fCBfdHlwZW9mKGFyZ3VtZW50KSA9PT0gJ29iamVjdCcgJiYgYXJnU3RyID09PSAnW29iamVjdCBEYXRlXScpIHtcbiAgICAvLyBQcmV2ZW50IHRoZSBkYXRlIHRvIGxvc2UgdGhlIG1pbGxpc2Vjb25kcyB3aGVuIHBhc3NlZCB0byBuZXcgRGF0ZSgpIGluIElFMTBcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQuZ2V0VGltZSgpKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgYXJndW1lbnQgPT09ICdudW1iZXInIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgTnVtYmVyXScpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQpO1xuICB9IGVsc2Uge1xuICAgIGlmICgodHlwZW9mIGFyZ3VtZW50ID09PSAnc3RyaW5nJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IFN0cmluZ10nKSAmJiB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLndhcm4oXCJTdGFydGluZyB3aXRoIHYyLjAuMC1iZXRhLjEgZGF0ZS1mbnMgZG9lc24ndCBhY2NlcHQgc3RyaW5ncyBhcyBkYXRlIGFyZ3VtZW50cy4gUGxlYXNlIHVzZSBgcGFyc2VJU09gIHRvIHBhcnNlIHN0cmluZ3MuIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI3N0cmluZy1hcmd1bWVudHNcIik7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS53YXJuKG5ldyBFcnJvcigpLnN0YWNrKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cbn0iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBjb25zdCBjcmVhdGVUYXNrID0gKCkgPT4gKHtcbiAgbmFtZTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrLW5hbWVcIikudmFsdWUsXG4gIGRlc2NyaXB0aW9uOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2stZGVzY3JpcHRpb25cIikudmFsdWUsXG4gIGR1ZURhdGU6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZHVlLWRhdGVcIikudmFsdWUsXG4gIHByaW9yaXR5OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3ByaW9yaXR5XCIpLnZhbHVlLFxufSk7XG4iLCJpbXBvcnQgeyBJbmZvcm1hdGlvbkhvbGRlciB9IGZyb20gXCIuL2luZm9ybWF0aW9uaG9sZGVyLmpzXCI7XG5pbXBvcnQgZGVsZXRlSWNvblBhdGggZnJvbSBcIi4vYXNzZXRzL2ljb25zL2RlbGV0ZS1pY29uLnN2Z1wiO1xuaW1wb3J0IGNsb3NlSW5mb1BhdGggZnJvbSBcIi4vYXNzZXRzL2ljb25zL2Nsb3NlLWluZm8uc3ZnXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5VGFza3NQcm9qZWN0KFxuICBpdGVyYXRlRnJvbSA9IEluZm9ybWF0aW9uSG9sZGVyLnByb2plY3RzW3Byb2plY3RJbmRleF0ubGVuZ3RoIC0gMSxcbiAgcHJvamVjdEluZGV4XG4pIHtcbiAgY29uc3QgYWxsVGFza3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRhc2tcIik7XG4gIGFsbFRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcbiAgICB0YXNrLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgfSk7XG5cbiAgY29uc3QgbnVtYmVyT2ZQcm9qZWN0cyA9IEluZm9ybWF0aW9uSG9sZGVyLnByb2plY3RzW3Byb2plY3RJbmRleF0ubGVuZ3RoO1xuICBmb3IgKGxldCBpID0gaXRlcmF0ZUZyb207IGkgPCBudW1iZXJPZlByb2plY3RzOyBpKyspIHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRpdi5jbGFzc0xpc3QuYWRkKFwidGFzay1wcm9qZWN0XCIpO1xuICAgIGRpdi5zZXRBdHRyaWJ1dGUoXCJkYXRhLXRhc2stcHJvamVjdFwiLCBgJHtwcm9qZWN0SW5kZXh9YCk7XG5cbiAgICBjb25zdCB0YXNrRG9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICB0YXNrRG9uZS50eXBlID0gXCJjaGVja2JveFwiO1xuICAgIHRhc2tEb25lLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWRvbmVcIik7XG4gICAgZGl2LmFwcGVuZENoaWxkKHRhc2tEb25lKTtcblxuICAgIGNvbnN0IHRhc2tOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgdGFza05hbWUuY2xhc3NMaXN0LmFkZChcInRhc2stblwiKTtcbiAgICB0YXNrTmFtZS50ZXh0Q29udGVudCA9IEluZm9ybWF0aW9uSG9sZGVyLnByb2plY3RzW3Byb2plY3RJbmRleF1baV0ubmFtZTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQodGFza05hbWUpO1xuXG4gICAgY29uc3QgdGFza0RhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICB0YXNrRGF0ZS5jbGFzc0xpc3QuYWRkKFwidGFzay1kYXRlXCIpO1xuICAgIHRhc2tEYXRlLnRleHRDb250ZW50ID0gSW5mb3JtYXRpb25Ib2xkZXIucHJvamVjdHNbcHJvamVjdEluZGV4XVtpXS5kdWVEYXRlO1xuICAgIGRpdi5hcHBlbmRDaGlsZCh0YXNrRGF0ZSk7XG5cbiAgICBjb25zdCBkZWxldGVJY29uID0gbmV3IEltYWdlKCk7XG4gICAgZGVsZXRlSWNvbi5jbGFzc0xpc3QuYWRkKFwiZGVsZXRlLXRhc2stcHJvamVjdFwiKTtcbiAgICBkZWxldGVJY29uLnNyYyA9IGRlbGV0ZUljb25QYXRoO1xuICAgIGRpdi5hcHBlbmRDaGlsZChkZWxldGVJY29uKTtcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaG9tZS10YXNrc1wiKS5hcHBlbmRDaGlsZChkaXYpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaW5kQ3VycmVudFByb2plY3RJbmRleCgpIHtcbiAgY29uc3QgdGFiVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY3VycmVudC10YWJcIikudGV4dENvbnRlbnQ7XG4gIGNvbnN0IGN1cnJlbnRQcm9qZWN0ID0gQXJyYXkuZnJvbShcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByb2plY3RzID4gKlwiKVxuICApLmZpbmQoKGVsKSA9PiBlbC50ZXh0Q29udGVudCA9PT0gYCR7dGFiVGV4dH1gKTtcbiAgcmV0dXJuIE51bWJlcihjdXJyZW50UHJvamVjdC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXByb2plY3QtaWRcIikpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsZXRlVGFza3NQcm9qZWN0KCkge1xuICBjb25zdCB0YXNrUHJvamVjdCA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50YXNrLXByb2plY3RcIikpO1xuICB0YXNrUHJvamVjdC5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgdGFzay5yZW1vdmUoKTtcbiAgfSk7XG59XG4iLCJpbXBvcnQgeyBJbmZvcm1hdGlvbkhvbGRlciB9IGZyb20gXCIuL2luZm9ybWF0aW9uaG9sZGVyLmpzXCI7XG5pbXBvcnQgZGVsZXRlSWNvblBhdGggZnJvbSBcIi4vYXNzZXRzL2ljb25zL2RlbGV0ZS1pY29uLnN2Z1wiO1xuaW1wb3J0IGNsb3NlSW5mb1BhdGggZnJvbSBcIi4vYXNzZXRzL2ljb25zL2Nsb3NlLWluZm8uc3ZnXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5VGFza3MoaXRlcmF0ZUZyb20gPSBJbmZvcm1hdGlvbkhvbGRlci50YXNrcy5sZW5ndGggLSAxKSB7XG4gIGNvbnN0IGhvbWVUYXNrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaG9tZS10YXNrc1wiKTtcbiAgZm9yIChsZXQgaSA9IGl0ZXJhdGVGcm9tOyBpIDwgSW5mb3JtYXRpb25Ib2xkZXIudGFza3MubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRpdi5jbGFzc0xpc3QuYWRkKFwidGFza1wiKTtcbiAgICBkaXYuc2V0QXR0cmlidXRlKFwiaWRcIiwgaSk7XG5cbiAgICBjb25zdCB0YXNrRG9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICB0YXNrRG9uZS50eXBlID0gXCJjaGVja2JveFwiO1xuICAgIHRhc2tEb25lLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWRvbmVcIik7XG4gICAgZGl2LmFwcGVuZENoaWxkKHRhc2tEb25lKTtcblxuICAgIGNvbnN0IHRhc2tOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgdGFza05hbWUuY2xhc3NMaXN0LmFkZChcInRhc2stblwiKTtcbiAgICB0YXNrTmFtZS50ZXh0Q29udGVudCA9IEluZm9ybWF0aW9uSG9sZGVyLnRhc2tzW2ldLm5hbWU7XG4gICAgZGl2LmFwcGVuZENoaWxkKHRhc2tOYW1lKTtcblxuICAgIGNvbnN0IHRhc2tEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgdGFza0RhdGUuY2xhc3NMaXN0LmFkZChcInRhc2stZGF0ZVwiKTtcbiAgICB0YXNrRGF0ZS50ZXh0Q29udGVudCA9IEluZm9ybWF0aW9uSG9sZGVyLnRhc2tzW2ldLmR1ZURhdGU7XG4gICAgZGl2LmFwcGVuZENoaWxkKHRhc2tEYXRlKTtcblxuICAgIGNvbnN0IGRlbGV0ZUljb24gPSBuZXcgSW1hZ2UoKTtcbiAgICBkZWxldGVJY29uLmNsYXNzTGlzdC5hZGQoXCJkZWxldGUtdGFza1wiKTtcbiAgICBkZWxldGVJY29uLnNyYyA9IGRlbGV0ZUljb25QYXRoO1xuICAgIGRpdi5hcHBlbmRDaGlsZChkZWxldGVJY29uKTtcblxuICAgIGhvbWVUYXNrcy5hcHBlbmRDaGlsZChkaXYpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5QWxsVGFza0luZm8oYXJyYXlJbmRleCkge1xuICBjb25zdCBpbmZvRGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGluZm9EaXNwbGF5LmNsYXNzTGlzdC5hZGQoXCJpbmZvLWRpc3BsYXlcIik7XG5cbiAgY29uc3QgdGFza05hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgdGFza05hbWUudGV4dENvbnRlbnQgPSBJbmZvcm1hdGlvbkhvbGRlci50YXNrc1thcnJheUluZGV4XS5uYW1lO1xuICBjb25zdCB0YXNrRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgdGFza0Rlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gSW5mb3JtYXRpb25Ib2xkZXIudGFza3NbYXJyYXlJbmRleF0uZGVzY3JpcHRpb247XG4gIGNvbnN0IHRhc2tEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHRhc2tEYXRlLnRleHRDb250ZW50ID0gYER1ZTogJHtJbmZvcm1hdGlvbkhvbGRlci50YXNrc1thcnJheUluZGV4XS5kdWVEYXRlfWA7XG4gIGNvbnN0IHRhc2tQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICB0YXNrUHJpb3JpdHkudGV4dENvbnRlbnQgPSBgUHJpb3JpdHk6ICR7SW5mb3JtYXRpb25Ib2xkZXIudGFza3NbXG4gICAgYXJyYXlJbmRleFxuICBdLnByaW9yaXR5LnRvVXBwZXJDYXNlKCl9YDtcblxuICBjb25zdCBjbG9zZUluZm8gPSBuZXcgSW1hZ2UoKTtcbiAgY2xvc2VJbmZvLnNyYyA9IGNsb3NlSW5mb1BhdGg7XG4gIGNsb3NlSW5mby5jbGFzc0xpc3QuYWRkKFwiY2xvc2UtaW5mb1wiKTtcblxuICBjb25zdCBwcmlvcml0eUNvbG9yID0gc2VsZWN0UHJpb3JpdHlCb3JkZXIoXG4gICAgSW5mb3JtYXRpb25Ib2xkZXIudGFza3NbYXJyYXlJbmRleF0ucHJpb3JpdHlcbiAgKTtcbiAgaW5mb0Rpc3BsYXkuc3R5bGUuYm9yZGVyID0gYDJweCBzb2xpZCAke3ByaW9yaXR5Q29sb3J9YDtcbiAgdGFza1ByaW9yaXR5LnN0eWxlLmNvbG9yID0gcHJpb3JpdHlDb2xvcjtcblxuICBpbmZvRGlzcGxheS5hcHBlbmRDaGlsZChjbG9zZUluZm8pO1xuICBpbmZvRGlzcGxheS5hcHBlbmRDaGlsZCh0YXNrTmFtZSk7XG4gIGluZm9EaXNwbGF5LmFwcGVuZENoaWxkKHRhc2tEZXNjcmlwdGlvbik7XG4gIGluZm9EaXNwbGF5LmFwcGVuZENoaWxkKHRhc2tEYXRlKTtcbiAgaW5mb0Rpc3BsYXkuYXBwZW5kQ2hpbGQodGFza1ByaW9yaXR5KTtcblxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW4tY29udGVudFwiKS5hcHBlbmRDaGlsZChpbmZvRGlzcGxheSk7XG59XG5cbmZ1bmN0aW9uIHNlbGVjdFByaW9yaXR5Qm9yZGVyKHByaW9yaXR5KSB7XG4gIGlmIChwcmlvcml0eSA9PT0gXCJsb3dcIikgcmV0dXJuIFwiIzJkN2JkMlwiO1xuICBpZiAocHJpb3JpdHkgPT09IFwibWVkaXVtXCIpIHJldHVybiBcIiNmZmM2MDBcIjtcbiAgcmV0dXJuIFwiI2ZmMDAxOFwiO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheUFsbFRhc2tzKCkge1xuICBjb25zdCBhbGxUYXNrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGFzay1kYXRlXCIpO1xuICBhbGxUYXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgdGFzay5wYXJlbnRFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVBbGxUYXNrcygpIHtcbiAgY29uc3QgYWxsVGFza3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxuICAgIFwiLmhvbWUtdGFza3MgPiA6bm90KC50YXNrcy1oZWFkZXIpXCJcbiAgKTtcbiAgYWxsVGFza3MuZm9yRWFjaCgodGFzaykgPT4gdGFzay5yZW1vdmUoKSk7XG59XG4iLCJpbXBvcnQgdGljayBmcm9tIFwiLi9hc3NldHMvaWNvbnMvY2hlY2staWNvbi5wbmdcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGFkanVzdFRpY2tNYXJrKCkge1xuICBjb25zdCB0aWNrTWFyayA9IG5ldyBJbWFnZSgpO1xuICB0aWNrTWFyay5zcmMgPSB0aWNrO1xuICB0aWNrTWFyay5zdHlsZS53aWR0aCA9IFwiNDBweFwiO1xuICB0aWNrTWFyay5zdHlsZS5oZWlnaHQgPSBcIjQwcHhcIjtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkZXJcIikuYXBwZW5kQ2hpbGQodGlja01hcmspO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGFza3NIZWFkZXIoKSB7XG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGRpdi5jbGFzc0xpc3QuYWRkKFwidGFza3MtaGVhZGVyXCIpO1xuICBjb25zdCBoMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgaDMudGV4dENvbnRlbnQgPSBcIk5hbWVcIjtcbiAgY29uc3QgaGVhZGVyMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgaGVhZGVyMy5jbGFzc0xpc3QuYWRkKFwiZHVlXCIpO1xuICBoZWFkZXIzLnRleHRDb250ZW50ID0gXCJEdWUgRGF0ZVwiO1xuXG4gIGRpdi5hcHBlbmRDaGlsZChoMyk7XG4gIGRpdi5hcHBlbmRDaGlsZChoZWFkZXIzKTtcbiAgcmV0dXJuIGRpdjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZVRhYk5hbWUobmFtZSkge1xuICBjb25zdCBjdXJyZW50VGFiID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jdXJyZW50LXRhYlwiKTtcbiAgY3VycmVudFRhYi50ZXh0Q29udGVudCA9IG5hbWU7XG59XG4iLCJpbXBvcnQgXCIuL3N0eWxlcy5zY3NzXCI7XG5pbXBvcnQgeyBhZGp1c3RUaWNrTWFyayB9IGZyb20gXCIuL2hlYWRlci5qc1wiO1xuaW1wb3J0IHsgTWFuYWdlRm9ybSB9IGZyb20gXCIuL3Rhc2tmb3JtLmpzXCI7XG5pbXBvcnQgeyBNYW5hZ2VQcm9qZWN0Rm9ybSB9IGZyb20gXCIuL3Byb2plY3Rmb3JtLmpzXCI7XG5pbXBvcnQgeyBNZWRpYXRvckRPTSB9IGZyb20gXCIuL21lZGlhdG9yZG9tLmpzXCI7XG5pbXBvcnQgeyBkaXNwbGF5VGFza3MgfSBmcm9tIFwiLi9kaXNwbGF5dGFza3MuanNcIjtcblxuYWRqdXN0VGlja01hcmsoKTtcblxuTWVkaWF0b3JET00uaW5pdGlhbGl6ZSgpO1xuXG5jb25zdCBmb3JtID0gTWFuYWdlRm9ybSgpO1xuZm9ybS5pbml0aWFsaXplKCk7XG5cbmNvbnN0IHByb2plY3RGb3JtID0gTWFuYWdlUHJvamVjdEZvcm0oKTtcbnByb2plY3RGb3JtLmluaXRpYWxpemUoKTtcblxuaWYgKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0YXNrc1wiKSkubGVuZ3RoID4gMCkge1xuICBkaXNwbGF5VGFza3MoMCk7XG59XG4iLCJleHBvcnQgY2xhc3MgSW5mb3JtYXRpb25Ib2xkZXIge1xuICBzdGF0aWMgdGFza3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidGFza3NcIikpIHx8IFtdO1xuICBzdGF0aWMgcHJvamVjdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdFwiKSkgfHwgW107XG4gIHN0YXRpYyBwcm9qZWN0TmFtZSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0TmFtZVwiKSkgfHwgW107XG5cbiAgc3RhdGljIGFkZFRhc2soc29tZVRhc2spIHtcbiAgICB0aGlzLnRhc2tzLnB1c2goc29tZVRhc2spO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGFza3NcIiwgSlNPTi5zdHJpbmdpZnkodGhpcy50YXNrcykpO1xuICB9XG5cbiAgc3RhdGljIHJlbW92ZVRhc2soYVRhc2spIHtcbiAgICBjb25zdCB0YXNrSW5kZXggPSBOdW1iZXIoYVRhc2suaWQpO1xuICAgIHRoaXMudGFza3Muc3BsaWNlKHRhc2tJbmRleCwgMSk7XG4gICAgdGhpcy4jYWRqdXN0SWQodGFza0luZGV4KTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRhc2tzXCIsIEpTT04uc3RyaW5naWZ5KHRoaXMudGFza3MpKTtcbiAgfVxuXG4gIHN0YXRpYyAjYWRqdXN0SWQoZGVsZXRlZElkKSB7XG4gICAgY29uc3QgZGl2cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGFza1wiKTtcbiAgICBpZiAoZGl2cy5sZW5ndGggPiAwKSB7XG4gICAgICBkaXZzLmZvckVhY2goKGRpdikgPT4ge1xuICAgICAgICBpZiAoZGl2LmlkID4gZGVsZXRlZElkKSB7XG4gICAgICAgICAgY29uc3QgY3VycmVudElkID0gcGFyc2VJbnQoZGl2LmlkLm1hdGNoKC9cXGQrLylbMF0pO1xuICAgICAgICAgIGRpdi5pZCA9IGRpdi5pZC5yZXBsYWNlKGN1cnJlbnRJZCwgY3VycmVudElkIC0gMSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyAjYWRqdXN0UHJvamVjdElkKGRlbGV0ZWRJZCkge1xuICAgIGNvbnN0IGRpdnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByb2plY3RcIik7XG4gICAgY29uc3QgZGVsZXRlQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZGVsZXRlLXByb2plY3RcIik7XG5cbiAgICBpZiAoZGl2cy5sZW5ndGggPiAwKSB7XG4gICAgICBkaXZzLmZvckVhY2goKGRpdikgPT4ge1xuICAgICAgICBpZiAoTnVtYmVyKGRpdi5nZXRBdHRyaWJ1dGUoXCJkYXRhLXByb2plY3QtaWRcIikpID4gZGVsZXRlZElkKSB7XG4gICAgICAgICAgY29uc3QgY3VycmVudElkID0gcGFyc2VJbnQoXG4gICAgICAgICAgICBkaXYuZ2V0QXR0cmlidXRlKFwiZGF0YS1wcm9qZWN0LWlkXCIpLm1hdGNoKC9cXGQrLylbMF1cbiAgICAgICAgICApO1xuICAgICAgICAgIGRpdi5zZXRBdHRyaWJ1dGUoXCJkYXRhLXByb2plY3QtaWRcIiwgY3VycmVudElkIC0gMSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChkZWxldGVCdXR0b25zLmxlbmd0aCA+IDApIHtcbiAgICAgIGRlbGV0ZUJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgICAgIGlmIChOdW1iZXIoYnV0dG9uLmdldEF0dHJpYnV0ZShcImRhdGEtcHJvamVjdC1pZFwiKSkgPiBkZWxldGVkSWQpIHtcbiAgICAgICAgICBjb25zdCBpZCA9IE51bWJlcihcbiAgICAgICAgICAgIGJ1dHRvbi5nZXRBdHRyaWJ1dGUoXCJkYXRhLXByb2plY3QtaWRcIikubWF0Y2goL1xcZCsvKVswXVxuICAgICAgICAgICk7XG4gICAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZShcImRhdGEtcHJvamVjdC1pZFwiLCBpZCAtIDEpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgYWRkUHJvamVjdChzb21lUHJvamVjdCkge1xuICAgIHRoaXMucHJvamVjdHMucHVzaChzb21lUHJvamVjdCk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0XCIsIEpTT04uc3RyaW5naWZ5KHRoaXMucHJvamVjdHMpKTtcbiAgfVxuXG4gIHN0YXRpYyBhZGRUYXNrVG9Qcm9qZWN0KHByb2plY3RJbmRleCwgdGFzaykge1xuICAgIHRoaXMucHJvamVjdHNbcHJvamVjdEluZGV4XS5wdXNoKHRhc2spO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdFwiLCBKU09OLnN0cmluZ2lmeSh0aGlzLnByb2plY3RzKSk7XG4gIH1cblxuICBzdGF0aWMgcmVtb3ZlVGFza0Zyb21Qcm9qZWN0KHByb2plY3RJbmRleCwgdGFza0luZGV4KSB7XG4gICAgdGhpcy5wcm9qZWN0c1twcm9qZWN0SW5kZXhdLnNwbGljZSh0YXNrSW5kZXgsIDEpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdFwiLCBKU09OLnN0cmluZ2lmeSh0aGlzLnByb2plY3RzKSk7XG4gIH0gXG5cbiAgc3RhdGljIHJlbW92ZVByb2plY3QoYVByb2plY3RJbmRleCkge1xuICAgIHRoaXMucHJvamVjdHMuc3BsaWNlKGFQcm9qZWN0SW5kZXgsIDEpO1xuICAgIHRoaXMuI2FkanVzdFByb2plY3RJZChhUHJvamVjdEluZGV4KTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RcIiwgSlNPTi5zdHJpbmdpZnkodGhpcy5wcm9qZWN0cykpO1xuICB9XG5cbiAgc3RhdGljIGFkZFByb2plY3ROYW1lKHNvbWVQcm9qZWN0TmFtZSkge1xuICAgIHRoaXMucHJvamVjdE5hbWUucHVzaChzb21lUHJvamVjdE5hbWUpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdE5hbWVcIiwgSlNPTi5zdHJpbmdpZnkodGhpcy5wcm9qZWN0TmFtZSkpO1xuICB9XG5cbiAgc3RhdGljIHJlbW92ZVByb2plY3ROYW1lKHByb2plY3RJbmRleCkge1xuICAgIHRoaXMucHJvamVjdE5hbWUuc3BsaWNlKHByb2plY3RJbmRleCwgMSk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0TmFtZVwiLCBKU09OLnN0cmluZ2lmeSh0aGlzLnByb2plY3ROYW1lKSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IGNoYW5nZVRhYk5hbWUgfSBmcm9tIFwiLi9oZWFkZXIuanNcIjtcbmltcG9ydCB7IGNyZWF0ZVRhc2sgfSBmcm9tIFwiLi9jcmVhdGV0YXNrLmpzXCI7XG5pbXBvcnQgeyBJbmZvcm1hdGlvbkhvbGRlciB9IGZyb20gXCIuL2luZm9ybWF0aW9uaG9sZGVyLmpzXCI7XG5pbXBvcnQge1xuICBkaXNwbGF5VGFza3MsXG4gIGRpc3BsYXlBbGxUYXNrcyxcbiAgZGlzcGxheUFsbFRhc2tJbmZvLFxufSBmcm9tIFwiLi9kaXNwbGF5dGFza3MuanNcIjtcbmltcG9ydCB7IGRpc3BsYXlUb2RheVRhc2tzIH0gZnJvbSBcIi4vdG9kYXl0YXNrcy5qc1wiO1xuaW1wb3J0IHsgZGlzcGxheVdlZWtUYXNrcyB9IGZyb20gXCIuL3dlZWt0YXNrcy5qc1wiO1xuaW1wb3J0IGRlbGV0ZVByb2plY3RJY29uIGZyb20gXCIuL2Fzc2V0cy9pY29ucy9kZWxldGUtcHJvamVjdC5zdmdcIjtcbmltcG9ydCB7XG4gIGRpc3BsYXlUYXNrc1Byb2plY3QsXG4gIGRlbGV0ZVRhc2tzUHJvamVjdCxcbiAgZmluZEN1cnJlbnRQcm9qZWN0SW5kZXgsXG59IGZyb20gXCIuL2Rpc3BsYXlwcm9qZWN0cy5qc1wiO1xuXG5leHBvcnQgY2xhc3MgTWVkaWF0b3JET00ge1xuICBzdGF0aWMgaW5zZXJ0VGFzaygpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnN1Ym1pdFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJmb3JtXCIpO1xuICAgICAgY29uc3QgdGFiVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY3VycmVudC10YWJcIikudGV4dENvbnRlbnQ7XG5cbiAgICAgIGlmIChmb3JtLmNoZWNrVmFsaWRpdHkoKSkge1xuICAgICAgICBpZiAodGFiVGV4dCAhPT0gXCJIb21lXCIgJiYgdGFiVGV4dCAhPT0gXCJUb2RheVwiICYmIHRhYlRleHQgIT09IFwiV2Vla1wiKSB7XG4gICAgICAgICAgY29uc3QgcHJvamVjdEluZGV4ID0gZmluZEN1cnJlbnRQcm9qZWN0SW5kZXgoKTtcbiAgICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0SW5kZXgpO1xuICAgICAgICAgIEluZm9ybWF0aW9uSG9sZGVyLmFkZFRhc2tUb1Byb2plY3QocHJvamVjdEluZGV4LCBjcmVhdGVUYXNrKCkpO1xuICAgICAgICAgIGNvbnN0IHZzZiA9IEluZm9ybWF0aW9uSG9sZGVyLnByb2plY3RzW3Byb2plY3RJbmRleF0ubGVuZ3RoIC0gMTtcbiAgICAgICAgICBkaXNwbGF5VGFza3NQcm9qZWN0KHZzZiwgcHJvamVjdEluZGV4KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBJbmZvcm1hdGlvbkhvbGRlci5hZGRUYXNrKGNyZWF0ZVRhc2soKSk7XG4gICAgICAgICAgZGlzcGxheVRhc2tzKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBzaG93VGFza0luZm8oKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluLWNvbnRlbnRcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwidGFzay1uXCIpKSB7XG4gICAgICAgIGRpc3BsYXlBbGxUYXNrSW5mbyhOdW1iZXIoZS50YXJnZXQucGFyZW50RWxlbWVudC5pZCkpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGNsb3NlVGFza0luZm8oKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluLWNvbnRlbnRcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiY2xvc2UtaW5mb1wiKSlcbiAgICAgICAgZS50YXJnZXQucGFyZW50RWxlbWVudC5yZW1vdmUoKTtcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBjcm9zc1Rhc2soKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluLWNvbnRlbnRcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwidGFzay1kb25lXCIpKSB7XG4gICAgICAgIGNvbnN0IHRhc2tzTmFtZUFuZERhdGUgPSBBcnJheS5mcm9tKFxuICAgICAgICAgIGUudGFyZ2V0LnBhcmVudE5vZGUucXVlcnlTZWxlY3RvckFsbChcInBcIilcbiAgICAgICAgKTtcbiAgICAgICAgdGFza3NOYW1lQW5kRGF0ZS5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICAgICAgaWYgKGUudGFyZ2V0LmNoZWNrZWQgPT09IHRydWUpXG4gICAgICAgICAgICB0YXNrLnN0eWxlLnRleHREZWNvcmF0aW9uID0gXCJsaW5lLXRocm91Z2hcIjtcbiAgICAgICAgICBlbHNlIHRhc2suc3R5bGUudGV4dERlY29yYXRpb24gPSBcIm5vbmVcIjtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZGVsZXRlVGFzaygpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW4tY29udGVudFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJkZWxldGUtdGFza1wiKSkge1xuICAgICAgICBJbmZvcm1hdGlvbkhvbGRlci5yZW1vdmVUYXNrKGUudGFyZ2V0LnBhcmVudEVsZW1lbnQpO1xuICAgICAgICBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnJlbW92ZSgpO1xuICAgICAgfVxuXG4gICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZGVsZXRlLXRhc2stcHJvamVjdFwiKSkge1xuICAgICAgICBjb25zdCBwcm9qZWN0SW5kZXggPSBOdW1iZXIoXG4gICAgICAgICAgZS50YXJnZXQucGFyZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXRhc2stcHJvamVjdFwiKVxuICAgICAgICApO1xuICAgICAgICBjb25zdCB0YXNrTmFtZSA9XG4gICAgICAgICAgZS50YXJnZXQucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiZGl2ID4gLnRhc2stblwiKS50ZXh0Q29udGVudDtcbiAgICAgICAgY29uc3QgdGFza0RhdGUgPVxuICAgICAgICAgIGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcihcImRpdiA+IC50YXNrLWRhdGVcIikudGV4dENvbnRlbnQ7XG4gICAgICAgIGNvbnN0IHRhc2tJbmRleCA9IEFycmF5LmZyb20oXG4gICAgICAgICAgSW5mb3JtYXRpb25Ib2xkZXIucHJvamVjdHNbcHJvamVjdEluZGV4XVxuICAgICAgICApLmZpbmRJbmRleChcbiAgICAgICAgICAodGFzaykgPT4gdGFzay5uYW1lID09PSB0YXNrTmFtZSAmJiB0YXNrLmR1ZURhdGUgPT09IHRhc2tEYXRlXG4gICAgICAgICk7XG4gICAgICAgIGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucmVtb3ZlKCk7XG4gICAgICAgIEluZm9ybWF0aW9uSG9sZGVyLnJlbW92ZVRhc2tGcm9tUHJvamVjdChcbiAgICAgICAgICBOdW1iZXIocHJvamVjdEluZGV4KSxcbiAgICAgICAgICBOdW1iZXIodGFza0luZGV4KVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIHNob3dIb21lVGFza3MoKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ob21lXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBjaGFuZ2VUYWJOYW1lKFwiSG9tZVwiKTtcbiAgICAgIGRlbGV0ZVRhc2tzUHJvamVjdCgpO1xuICAgICAgZGlzcGxheUFsbFRhc2tzKCk7XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgc2hvd1RvZGF5VGFza3MoKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2RheVwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgY2hhbmdlVGFiTmFtZShcIlRvZGF5XCIpO1xuICAgICAgZGVsZXRlVGFza3NQcm9qZWN0KCk7XG4gICAgICBkaXNwbGF5VG9kYXlUYXNrcygpO1xuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIHNob3dXZWVrVGFza3MoKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53ZWVrXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBjaGFuZ2VUYWJOYW1lKFwiV2Vla1wiKTtcbiAgICAgIGRlbGV0ZVRhc2tzUHJvamVjdCgpO1xuICAgICAgZGlzcGxheUFsbFRhc2tzKCk7XG4gICAgICBkaXNwbGF5V2Vla1Rhc2tzKCk7XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgdXBkYXRlVGFza0xpc3QoKSB7XG4gICAgY29uc3QgdGFyZ2V0Tm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaG9tZS10YXNrc1wiKTtcbiAgICBjb25zdCBjdXJyZW50VGFiID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jdXJyZW50LXRhYlwiKTtcblxuICAgIGNvbnN0IGNvbmZpZyA9IHsgY2hpbGRMaXN0OiB0cnVlLCBzdWJ0cmVlOiB0cnVlIH07XG4gICAgY29uc3QgY2FsbGJhY2sgPSAobXV0YXRpb25MaXN0KSA9PiB7XG4gICAgICBmb3IgKGNvbnN0IG11dGF0aW9uIG9mIG11dGF0aW9uTGlzdCkge1xuICAgICAgICBpZiAobXV0YXRpb24udHlwZSA9PT0gXCJjaGlsZExpc3RcIiAmJiBtdXRhdGlvbi5hZGRlZE5vZGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICBjdXJyZW50VGFiLnRleHRDb250ZW50ID09PSBcIlRvZGF5XCIgfHxcbiAgICAgICAgICAgIGN1cnJlbnRUYWIudGV4dENvbnRlbnQgPT09IFwiV2Vla1wiXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICBkb2N1bWVudFxuICAgICAgICAgICAgICAucXVlcnlTZWxlY3RvcihgLiR7Y3VycmVudFRhYi50ZXh0Q29udGVudC50b0xvd2VyQ2FzZSgpfWApXG4gICAgICAgICAgICAgIC5jbGljaygpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKGNhbGxiYWNrKTtcbiAgICBvYnNlcnZlci5vYnNlcnZlKHRhcmdldE5vZGUsIGNvbmZpZyk7XG4gIH1cblxuICBzdGF0aWMgaW5zZXJ0UHJvamVjdCgpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RzXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcInN1Ym1pdC1wcm9qZWN0XCIpKSB7XG4gICAgICAgIGNvbnN0IG5hbWUgPSBgLSR7XG4gICAgICAgICAgZS50YXJnZXQucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKFwiZm9ybSA+IGlucHV0XCIpLnZhbHVlXG4gICAgICAgIH1gO1xuICAgICAgICBJbmZvcm1hdGlvbkhvbGRlci5hZGRQcm9qZWN0TmFtZShuYW1lKTtcbiAgICAgICAgSW5mb3JtYXRpb25Ib2xkZXIuYWRkUHJvamVjdChbXSk7XG4gICAgICAgIHRoaXMuY3JlYXRlUHJvamVjdERpdigpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGNyZWF0ZVByb2plY3REaXYoaXRlcmF0ZUZyb20gPSBJbmZvcm1hdGlvbkhvbGRlci5wcm9qZWN0cy5sZW5ndGggLSAxKSB7XG4gICAgY29uc3QgbnVtYmVyT2ZQcm9qZWN0cyA9IEluZm9ybWF0aW9uSG9sZGVyLnByb2plY3RzLmxlbmd0aDtcbiAgICBmb3IgKGxldCBpID0gaXRlcmF0ZUZyb207IGkgPCBudW1iZXJPZlByb2plY3RzOyBpKyspIHtcbiAgICAgIGlmIChudW1iZXJPZlByb2plY3RzIC0gMSA+PSAwKSB7XG4gICAgICAgIGNvbnN0IGRlbGV0ZVByb2plY3QgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgZGVsZXRlUHJvamVjdC5zcmMgPSBkZWxldGVQcm9qZWN0SWNvbjtcbiAgICAgICAgZGVsZXRlUHJvamVjdC5jbGFzc0xpc3QuYWRkKFwiZGVsZXRlLXByb2plY3RcIik7XG4gICAgICAgIGRlbGV0ZVByb2plY3Quc2V0QXR0cmlidXRlKFwiZGF0YS1wcm9qZWN0LWlkXCIsIGkpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW4tY29udGVudFwiKS5hcHBlbmRDaGlsZChkZWxldGVQcm9qZWN0KTtcblxuICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBkaXYudGV4dENvbnRlbnQgPSBJbmZvcm1hdGlvbkhvbGRlci5wcm9qZWN0TmFtZVtpXTtcbiAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0XCIpO1xuICAgICAgICBkaXYuc2V0QXR0cmlidXRlKFwiZGF0YS1wcm9qZWN0LWlkXCIsIGkpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RzXCIpLmFwcGVuZENoaWxkKGRpdik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGNoYW5nZVByb2plY3RUYWIoKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0c1wiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJwcm9qZWN0XCIpKSB7XG4gICAgICAgIGNoYW5nZVRhYk5hbWUoZS50YXJnZXQudGV4dENvbnRlbnQpO1xuICAgICAgICBjb25zdCBkZWxldGVJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5kZWxldGUtcHJvamVjdFwiKTtcbiAgICAgICAgaWYgKGRlbGV0ZUljb24gIT09IG51bGwpXG4gICAgICAgICAgZGVsZXRlSWNvbi5mb3JFYWNoKChpY29uKSA9PiB7XG4gICAgICAgICAgICBpY29uLnN0eWxlLmRpc3BsYXkgPSBcImlubGluZVwiO1xuICAgICAgICAgIH0pO1xuICAgICAgICBkZWxldGVUYXNrc1Byb2plY3QoKTtcbiAgICAgICAgY29uc3QgcHJvamVjdEluZGV4ID0gZmluZEN1cnJlbnRQcm9qZWN0SW5kZXgoKTtcbiAgICAgICAgZGlzcGxheVRhc2tzUHJvamVjdCgwLCBwcm9qZWN0SW5kZXgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGRlbGV0ZURlbGV0ZUljb24oKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaWRlYmFyXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBjb25zdCBjdXJyZW50VGFiID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jdXJyZW50LXRhYlwiKS50ZXh0Q29udGVudDtcbiAgICAgIGlmIChcbiAgICAgICAgY3VycmVudFRhYiA9PT0gXCJIb21lXCIgfHxcbiAgICAgICAgY3VycmVudFRhYiA9PT0gXCJUb2RheVwiIHx8XG4gICAgICAgIGN1cnJlbnRUYWIgPT09IFwiV2Vla1wiXG4gICAgICApIHtcbiAgICAgICAgY29uc3QgZGVsZXRlSWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZGVsZXRlLXByb2plY3RcIik7XG4gICAgICAgIGlmIChkZWxldGVJY29uICE9PSBudWxsKVxuICAgICAgICAgIGRlbGV0ZUljb24uZm9yRWFjaCgoaWNvbikgPT4ge1xuICAgICAgICAgICAgaWNvbi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZGVsZXRlUHJvamVjdCgpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW4tY29udGVudFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJkZWxldGUtcHJvamVjdFwiKSkge1xuICAgICAgICBjb25zdCBwcm9qZWN0SW5kZXggPSBmaW5kQ3VycmVudFByb2plY3RJbmRleCgpO1xuICAgICAgICBJbmZvcm1hdGlvbkhvbGRlci5yZW1vdmVQcm9qZWN0KHByb2plY3RJbmRleCk7XG4gICAgICAgIEluZm9ybWF0aW9uSG9sZGVyLnJlbW92ZVByb2plY3ROYW1lKHByb2plY3RJbmRleCk7XG4gICAgICAgIGRvY3VtZW50XG4gICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoYGRpdltkYXRhLXByb2plY3QtaWQ9XCIke3Byb2plY3RJbmRleH1cIl1gKVxuICAgICAgICAgIC5yZW1vdmUoKTtcbiAgICAgICAgZG9jdW1lbnRcbiAgICAgICAgICAucXVlcnlTZWxlY3RvcihgaW1nW2RhdGEtcHJvamVjdC1pZD1cIiR7cHJvamVjdEluZGV4fVwiXWApXG4gICAgICAgICAgLnJlbW92ZSgpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhvbWVcIikuY2xpY2soKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBpbml0aWFsaXplKCkge1xuICAgIHRoaXMuaW5zZXJ0VGFzaygpO1xuICAgIHRoaXMuc2hvd1Rhc2tJbmZvKCk7XG4gICAgdGhpcy5jbG9zZVRhc2tJbmZvKCk7XG4gICAgdGhpcy5jcm9zc1Rhc2soKTtcbiAgICB0aGlzLnNob3dIb21lVGFza3MoKTtcbiAgICB0aGlzLnNob3dUb2RheVRhc2tzKCk7XG4gICAgdGhpcy5zaG93V2Vla1Rhc2tzKCk7XG4gICAgdGhpcy5kZWxldGVUYXNrKCk7XG4gICAgdGhpcy51cGRhdGVUYXNrTGlzdCgpO1xuICAgIHRoaXMuaW5zZXJ0UHJvamVjdCgpO1xuICAgIHRoaXMuY3JlYXRlUHJvamVjdERpdigwKTtcbiAgICB0aGlzLmNoYW5nZVByb2plY3RUYWIoKTtcbiAgICB0aGlzLmRlbGV0ZURlbGV0ZUljb24oKTtcbiAgICB0aGlzLmRlbGV0ZVByb2plY3QoKTtcbiAgfVxufVxuIiwiZXhwb3J0IGNvbnN0IE1hbmFnZVByb2plY3RGb3JtID0gKCkgPT4gKHtcbiAgYWRkUHJvamVjdEJ1dHRvbjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uZXctcHJvamVjdFwiKSxcbiAgcHJvamVjdFRhYjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0c1wiKSxcblxuICBjcmVhdGVGb3JtKCkge1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgICBmb3JtLmNsYXNzTGlzdC5hZGQoXCIucHJvamVjdC1mb3JtXCIpO1xuICAgIGZvcm0uc3R5bGUuZGlzcGxheSA9IFwiZ3JpZFwiO1xuICAgIGZvcm0uYWN0aW9uID0gXCIjXCI7XG4gICAgZm9ybS5tZXRob2QgPSBcInBvc3RcIjtcbiAgICBjb25zdCBwcm9qZWN0TmFtZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIHByb2plY3ROYW1lTGFiZWwudGV4dENvbnRlbnQgPSBcIlByb2plY3QgTmFtZVwiO1xuICAgIGNvbnN0IHByb2plY3ROYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgcHJvamVjdE5hbWVJbnB1dC5yZXF1aXJlZCA9IHRydWU7XG5cbiAgICBmb3JtLmFwcGVuZENoaWxkKHByb2plY3ROYW1lTGFiZWwpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQocHJvamVjdE5hbWVJbnB1dCk7XG5cbiAgICBjb25zdCBzdWJtaXRQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBzdWJtaXRQcm9qZWN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJzdWJtaXQtcHJvamVjdFwiKTtcbiAgICBzdWJtaXRQcm9qZWN0QnV0dG9uLnRleHRDb250ZW50ID0gXCJDcmVhdGUgUHJvamVjdFwiO1xuICAgIGNvbnN0IG5vdFN1Ym1pdFByb2plY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIG5vdFN1Ym1pdFByb2plY3RCdXR0b24uY2xhc3NMaXN0LmFkZChcImNhbmNlbC1wcm9qZWN0XCIpO1xuICAgIG5vdFN1Ym1pdFByb2plY3RCdXR0b24udGV4dENvbnRlbnQgPSBcIkNhbmNlbFwiO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoc3VibWl0UHJvamVjdEJ1dHRvbik7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChub3RTdWJtaXRQcm9qZWN0QnV0dG9uKTtcblxuICAgIHRoaXMucHJvamVjdFRhYi5hcHBlbmRDaGlsZChmb3JtKTtcbiAgfSxcblxuICBzaG93UHJvamVjdEZvcm0oKSB7XG4gICAgdGhpcy5wcm9qZWN0VGFiLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcIm5ldy1wcm9qZWN0XCIpKSB7XG4gICAgICAgIHRoaXMuY3JlYXRlRm9ybSgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9LFxuXG4gIHN1Ym1pdFByb2plY3RGb3JtKCkge1xuICAgIHRoaXMucHJvamVjdFRhYi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJzdWJtaXQtcHJvamVjdFwiKSkge1xuICAgICAgICBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnJlbW92ZSgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9LFxuXG4gIGNsb3NlUHJvamVjdEZvcm0oKSB7XG4gICAgdGhpcy5wcm9qZWN0VGFiLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImNhbmNlbC1wcm9qZWN0XCIpKSB7XG4gICAgICAgIGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucmVtb3ZlKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sXG5cbiAgaW5pdGlhbGl6ZSgpIHtcbiAgICB0aGlzLnNob3dQcm9qZWN0Rm9ybSgpO1xuICAgIHRoaXMuc3VibWl0UHJvamVjdEZvcm0oKTtcbiAgICB0aGlzLmNsb3NlUHJvamVjdEZvcm0oKTtcbiAgfSxcbn0pO1xuIiwiZXhwb3J0IGNvbnN0IE1hbmFnZUZvcm0gPSAoKSA9PiAoe1xuICBhZGRUYXNrQnV0dG9uOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC10YXNrXCIpLFxuICBmb3JtOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZm9ybVwiKSxcblxuICBjbGVhckZvcm0oKSB7XG4gICAgY29uc3QgZm9ybUlucHV0cyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImZvcm0gaW5wdXRcIikpO1xuICAgIGZvcm1JbnB1dHMuZm9yRWFjaCgoaW5wdXQpID0+IHtcbiAgICAgIGlucHV0LnZhbHVlID0gXCJcIjtcbiAgICB9KTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwidGV4dGFyZWFcIikudmFsdWUgPSBcIlwiO1xuICB9LFxuXG4gIG9wZW5Gb3JtKCkge1xuICAgIHRoaXMuYWRkVGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgdGhpcy5mb3JtLnN0eWxlLmRpc3BsYXkgPSBcImdyaWRcIjtcbiAgICB9KTtcbiAgfSxcblxuICBjbG9zZUZvcm0oKSB7XG4gICAgdGhpcy5mb3JtLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgfSxcblxuICBjYW5jZWwoKSB7XG4gICAgY29uc3QgY2xvc2VGb3JtQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYW5jZWxcIik7XG4gICAgY2xvc2VGb3JtQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICB0aGlzLmNsb3NlRm9ybSgpO1xuICAgICAgdGhpcy5jbGVhckZvcm0oKTtcbiAgICB9KTtcbiAgfSxcblxuICBzdWJtaXRGb3JtKCkge1xuICAgIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3VibWl0XCIpO1xuICAgIHN1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuZm9ybS5jaGVja1ZhbGlkaXR5KCkpIHtcbiAgICAgICAgdGhpcy5jbG9zZUZvcm0oKTtcbiAgICAgICAgdGhpcy5jbGVhckZvcm0oKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KTtcbiAgfSxcblxuICBpbml0aWFsaXplKCkge1xuICAgIHRoaXMub3BlbkZvcm0oKTtcbiAgICB0aGlzLmNhbmNlbCgpO1xuICAgIHRoaXMuc3VibWl0Rm9ybSgpO1xuICB9LFxufSk7XG4iLCJleHBvcnQgZnVuY3Rpb24gZ2V0VG9kYXlEYXRlKCkge1xuICBjb25zdCBkYXRlID0gbmV3IERhdGUoKTtcbiAgY29uc3QgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcbiAgbGV0IG1vbnRoID0gZGF0ZS5nZXRNb250aCgpICsgMTtcbiAgbGV0IGRheSA9IGRhdGUuZ2V0RGF0ZSgpO1xuXG4gIGlmIChtb250aCA8IDEwKSBtb250aCA9IGAwJHttb250aH1gO1xuICBpZiAoZGF5IDwgMTApIGRheSA9IGAwJHtkYXl9YDtcblxuICByZXR1cm4gYCR7eWVhcn0tJHttb250aH0tJHtkYXl9YDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlUb2RheVRhc2tzKCkge1xuICBjb25zdCB0b2RheURhdGUgPSBnZXRUb2RheURhdGUoKTtcbiAgY29uc3QgYWxsVGFza3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRhc2stZGF0ZVwiKTtcbiAgYWxsVGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgIGlmICh0YXNrLnRleHRDb250ZW50ICE9PSB0b2RheURhdGUpXG4gICAgICB0YXNrLnBhcmVudEVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICB9KTtcbn1cbiIsImltcG9ydCB7XG4gIGRpZmZlcmVuY2VJbkNhbGVuZGFySVNPV2Vla3MsXG4gIGVuZE9mSVNPV2VlayxcbiAgcGFyc2VJU08sXG59IGZyb20gXCJkYXRlLWZucy9cIjtcblxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0V2VlaygpIHtcbiAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuICBjb25zdCBlbmRPZldlZWsgPSBlbmRPZklTT1dlZWsodG9kYXkpO1xuXG4gIGNvbnN0IHRlc3RlID0gXCIyMDIzLTA1LTIxXCI7XG4gIGNvbnN0IHJlc3VsdGFkbyA9IHBhcnNlSVNPKHRlc3RlKTtcblxuICBjb25zdCByZXN1bHQgPSBkaWZmZXJlbmNlSW5DYWxlbmRhcklTT1dlZWtzKGVuZE9mV2VlaywgcmVzdWx0YWRvKTtcblxuICBjb25zb2xlLmxvZyhyZXN1bHQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheVdlZWtUYXNrcygpIHtcbiAgY29uc3QgdG9kYXlEYXRlID0gbmV3IERhdGUoKTtcbiAgY29uc3QgZW5kT2ZXZWVrID0gZW5kT2ZJU09XZWVrKHRvZGF5RGF0ZSk7XG5cbiAgY29uc3QgYWxsVGFza3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRhc2stZGF0ZVwiKTtcbiAgYWxsVGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgIGNvbnN0IHRhc2tEdWVEYXkgPSBwYXJzZUlTTyh0YXNrLnRleHRDb250ZW50KTtcbiAgICBpZiAoZGlmZmVyZW5jZUluQ2FsZW5kYXJJU09XZWVrcyhlbmRPZldlZWssIHRhc2tEdWVEYXkpICE9PSAwKVxuICAgICAgdGFzay5wYXJlbnRFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgfSk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgcmV0dXJuIF90eXBlb2YgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBcInN5bWJvbFwiID09IHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPyBmdW5jdGlvbiAob2JqKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gIH0gOiBmdW5jdGlvbiAob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgfSwgX3R5cGVvZihvYmopO1xufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==