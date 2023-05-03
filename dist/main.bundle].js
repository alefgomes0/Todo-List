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
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: \"Abel\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"woff2\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"woff\");\n  font-style: normal;\n}\n* {\n  box-sizing: border-box;\n}\n\nbody,\nhtml {\n  font-family: \"Abel\", system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n  margin: 0;\n  padding: 0;\n  height: 100%;\n}\n\n.page-wrapper {\n  display: grid;\n  grid-template-rows: 2fr 8fr 1fr;\n  grid-template-columns: 1fr 6fr;\n  height: 100%;\n}\n\n.header > h1 {\n  font-size: 40px;\n  font-weight: 800;\n  color: #b2b8b7;\n}\n\n.header {\n  display: flex;\n  align-items: center;\n  grid-row: 1/2;\n  grid-column: 1/-1;\n  background: rgb(7, 18, 24);\n  background: linear-gradient(180deg, rgb(7, 18, 24) 25%, rgb(11, 19, 46) 50%, rgb(17, 29, 68) 75%, rgb(17, 29, 68) 100%);\n  gap: 15px;\n  padding: 0 30px;\n}\n\n.sidebar {\n  display: grid;\n  grid-row: 2/3;\n  grid-column: 1/2;\n  background-color: #b2b8b7;\n  color: #111D44;\n  align-content: start;\n  padding: 30px;\n  gap: 30px;\n  font-size: 27px;\n  font-weight: 600;\n}\n\n.sidebar > div:not(.projects) {\n  cursor: pointer;\n}\n\n.sidebar > div:hover:not(.projects) {\n  background-color: rgb(198, 209, 207);\n  border-radius: 10px;\n}\n\n.main-content {\n  display: grid;\n  grid-template-rows: auto 1fr;\n  grid-template-columns: auto 3fr 1fr 1fr;\n  grid-row: 2/3;\n  grid-column: 2/-1;\n  background-color: #dfd5d5;\n}\n\n.add-task {\n  display: inline-flex;\n  align-items: center;\n  margin: 0;\n  gap: 5px;\n  cursor: pointer;\n  margin: 20px 20px;\n  padding: 3px 6px;\n  grid-row: 1/2;\n  grid-column: 1/2;\n}\n\n.add-task > * {\n  margin: 0;\n  padding: 0;\n}\n\n.add-task:hover {\n  background-color: #b2b8b7;\n  border-radius: 8px;\n}\n\n.add-task:hover > svg {\n  transform: rotate(90deg);\n  transition: 0.4s ease-in-out;\n}\n\n.current-tab {\n  color: #111D44;\n  font-size: 30px;\n  font-weight: 600;\n  justify-self: center;\n  grid-column: 1/-1;\n  grid-row: 1/2;\n}\n\nform {\n  position: fixed;\n  display: none;\n  gap: 10px;\n  z-index: 99;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background-color: #b2b8b7;\n  color: #111D44;\n  font-weight: 500;\n  padding: 10px 20px;\n  border-radius: 10px;\n  box-shadow: 0 1px 1px;\n}\n\n.widget {\n  display: flex;\n  flex-direction: column;\n}\n\n.form-buttons {\n  display: flex;\n  justify-content: space-around;\n}\n\n.form-buttons > * {\n  cursor: pointer;\n}\n\n.form-buttons > svg:hover {\n  background-color: #c3c7c7;\n}\n\n.home-tasks {\n  display: grid;\n  grid-template-columns: 1fr 4fr 1fr;\n  grid-template-rows: repeat(auto-fit, minmax(auto, 1fr));\n  align-content: start;\n  grid-row: 2/-1;\n  grid-column: 1/-1;\n}\n\n.tasks-header {\n  display: inline-flex;\n  justify-content: space-between;\n  font-weight: 600;\n  padding: 0 10px;\n  padding-left: 40px;\n}\n\n.due {\n  padding-right: 30px;\n}\n\n.task,\n.task-project {\n  display: flex;\n  padding: 0 10px;\n}\n\n.task-done {\n  margin-right: 10px;\n}\n\n.task-n {\n  margin-right: auto;\n  cursor: pointer;\n}\n\n.task:hover,\n.task-project:hover {\n  background-color: #e6dede;\n}\n\n.task-date {\n  padding-right: 10px;\n}\n\n.home-tasks > * {\n  grid-column: 2/3;\n  border-bottom: 1px solid #111D44;\n}\n\n.delete-task,\n.delete-task-project {\n  cursor: pointer;\n}\n\n.delete-task:hover,\n.delete-task-project:hover {\n  animation: move-up 0.5s ease-in-out;\n}\n\n.info-display {\n  position: fixed;\n  display: grid;\n  grid-template-columns: auto;\n  grid-template-rows: auto;\n  width: 50%;\n  height: 50%;\n  gap: 5px;\n  z-index: 99;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background-color: #b2b8b7;\n  font-weight: 600;\n  padding: 10px 20px;\n  border-radius: 10px;\n  box-shadow: 0 1px 1px;\n  color: #111D44;\n  overflow-y: auto;\n}\n\n.close-info {\n  justify-self: end;\n  cursor: pointer;\n}\n\n.projects .new-project {\n  display: none;\n}\n.projects:hover .new-project {\n  display: block;\n  font-size: 15px;\n  padding: 10px 0;\n  padding-left: 20px;\n}\n\n.new-project:hover {\n  cursor: pointer;\n}\n\n.project-form {\n  position: fixed;\n  gap: 10px;\n  z-index: 99;\n  top: 50%;\n  left: 50%;\n  width: 200px;\n  height: 100px;\n  transform: translate(-50%, -50%);\n  background-color: #b2b8b7;\n  color: #111D44;\n  font-weight: 500;\n  padding: 10px 20px;\n  border-radius: 10px;\n  box-shadow: 0 1px 1px;\n}\n\n.submit-project,\n.cancel-project {\n  width: auto;\n  height: auto;\n  padding: 3px 9px;\n  cursor: pointer;\n  border-radius: 10px;\n}\n\n.submit-project {\n  background-color: #111D44;\n  color: #b2b8b7;\n}\n\n.submit-project:hover {\n  background-color: #2c3d74;\n  color: #a5b0ae;\n}\n\n.cancel-project {\n  background-color: #b2b8b7;\n  color: #111D44;\n}\n\n.cancel-project:hover {\n  background-color: #d4d9d8;\n  color: #152043;\n}\n\n.project {\n  cursor: pointer;\n  font-size: 16px;\n  padding-left: 15px;\n}\n\n.project:hover {\n  background-color: #d4d9d8;\n}\n\n.delete-project {\n  grid-row: 1/2;\n  grid-column: 3/4;\n  justify-self: end;\n  align-self: center;\n  cursor: pointer;\n  width: 32px;\n  height: 32px;\n}\n\n.delete-project:hover {\n  animation: move-up 0.5s ease-in-out;\n}\n\n@keyframes move-up {\n  0% {\n    transform: translateY(0);\n  }\n  50% {\n    transform: translateY(-5px);\n  }\n  100% {\n    transform: translateY(0);\n  }\n}\na {\n  text-decoration: none;\n  color: #b2b8b7;\n}\n\na:visited {\n  color: #b2b8b7;\n}\n\n.footer {\n  display: grid;\n  grid-row: -2/-1;\n  grid-column: 1/-1;\n  background-color: #111D44;\n  color: #b2b8b7;\n  padding: 0 20px;\n}\n\n@media (max-width: 500px) {\n  .main-content {\n    grid-template-rows: auto auto 1fr;\n  }\n  .current-tab {\n    grid-row: 2/3;\n  }\n  .task {\n    display: grid;\n    grid-template-rows: auto auto;\n    grid-template-columns: auto auto;\n    padding: 0 10px;\n  }\n  .home-tasks {\n    grid-row: 3/-1;\n  }\n  .tasks-header {\n    padding: 0;\n  }\n  .task-date {\n    padding-right: 0;\n    justify-self: end;\n  }\n  .task > img {\n    justify-self: end;\n    grid-column: 2/-1;\n    padding-right: 20px;\n    padding-bottom: 3px;\n  }\n  .info-display {\n    width: 50%;\n    height: 50%;\n  }\n  .due {\n    padding-right: 0;\n  }\n  .task > * {\n    font-size: 12px;\n  }\n}", "",{"version":3,"sources":["webpack://./src/styles.scss"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n  font-family: 'Abel';\n  src: url('./assets/fonts/abel-regular-webfont.woff2') format('woff2'),\n    url('./assets/fonts/abel-regular-webfont.woff') format('woff');\n    font-style: normal;\n}\n\n$primary-color: #111D44;\n$secondary-color: #b2b8b7;\n$complementary-color: #000;\n$yellow: #ffc600;\n$black: #272727;\n\n* {\n  box-sizing: border-box;\n}\n\nbody,\nhtml {\n  font-family: 'Abel', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n  margin: 0;\n  padding: 0;\n  height: 100%;\n}\n\n.page-wrapper {\n  display: grid;\n  grid-template-rows: 2fr 8fr 1fr;\n  grid-template-columns: 1fr 6fr;\n  height: 100%;\n}\n \n.header > h1 {\n  font-size: 40px;\n  font-weight: 800;\n  color: $secondary-color;\n}\n\n.header {\n  display: flex;\n  align-items: center;\n  grid-row: 1 / 2;\n  grid-column: 1 / -1;\n  background: rgb(7,18,24);\n  background: linear-gradient(180deg, rgba(7,18,24,1) 25%, rgba(11,19,46,1) 50%, rgba(17,29,68,1) 75%, rgba(17,29,68,1) 100%);\n  gap: 15px;\n  padding: 0 30px;\n}\n\n.sidebar {\n  display: grid;\n  grid-row: 2 / 3;\n  grid-column: 1 / 2;\n  background-color: $secondary-color;\n  color: $primary-color;\n  align-content: start;\n  padding: 30px;\n  gap: 30px;\n  font-size: 27px;\n  font-weight: 600;\n}\n\n.sidebar > div:not(.projects) {\n  cursor: pointer;\n}\n\n.sidebar > div:hover:not(.projects) {\n  background-color: rgb(198, 209, 207);\n  border-radius: 10px;\n}\n\n.main-content {\n  display: grid;\n  grid-template-rows: auto 1fr;\n  grid-template-columns: auto 3fr 1fr 1fr;\n  grid-row: 2 / 3;\n  grid-column: 2 / -1;\n  background-color: #dfd5d5;\n}\n\n.add-task {\n  display: inline-flex;\n  align-items: center;\n  margin: 0;\n  gap: 5px;\n  cursor: pointer;\n  margin: 20px 20px;\n  padding: 3px 6px;\n  grid-row: 1 / 2;\n  grid-column: 1 / 2;\n}\n\n.add-task > * {\n  margin: 0;\n  padding: 0;\n}\n\n.add-task:hover {\n  background-color: $secondary-color;\n  border-radius: 8px;\n}\n\n.add-task:hover > svg {\n  transform: rotate(90deg);\n  transition: 0.4s ease-in-out;\n}\n\n.current-tab {\n  color: $primary-color;\n  font-size: 30px;\n  font-weight: 600;\n  justify-self: center;\n  grid-column: 1 / -1;\n  grid-row: 1 / 2;\n}\n\nform {\n  position: fixed;\n  display: none;\n  gap: 10px;\n  z-index: 99;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background-color: $secondary-color;\n  color: $primary-color;\n  font-weight: 500;\n  padding: 10px 20px;\n  border-radius: 10px;\n  box-shadow: 0 1px 1px;\n}\n\n.widget {\n  display: flex;\n  flex-direction: column;\n}\n\n.form-buttons {\n  display: flex;\n  justify-content: space-around;\n}\n\n.form-buttons > * {\n  cursor: pointer;\n}\n\n.form-buttons > svg:hover {\n  background-color: #c3c7c7;\n}\n\n.home-tasks {\n  display: grid;\n  grid-template-columns: 1fr 4fr 1fr;\n  grid-template-rows: repeat(auto-fit, minmax(auto, 1fr));\n  align-content: start;\n  grid-row: 2 / -1;\n  grid-column: 1 / -1;\n}\n\n.tasks-header {\n  display: inline-flex;\n  justify-content: space-between;\n  font-weight: 600;\n  padding: 0 10px;\n  padding-left: 40px;\n}\n\n\n.due {\n  padding-right: 30px;\n}\n\n.task,\n.task-project {\n  display: flex;\n  padding: 0 10px;\n}\n\n.task-done {\n  margin-right: 10px;\n}\n\n.task-n {\n  margin-right: auto;\n  cursor: pointer;\n}\n\n.task:hover,\n.task-project:hover {\n  background-color: #e6dede;\n}\n\n.task-date {\n  padding-right: 10px;\n}\n\n.home-tasks > * {\n  grid-column: 2 / 3;\n  border-bottom: 1px solid $primary-color;\n}\n\n.delete-task,\n.delete-task-project {\n  cursor: pointer;\n}\n\n.delete-task:hover,\n.delete-task-project:hover {\n  animation: move-up 0.5s ease-in-out;\n}\n\n.info-display {\n  position: fixed;\n  display: grid;\n  grid-template-columns: auto;\n  grid-template-rows: auto;\n  width: 50%;\n  height: 50%;\n  gap: 5px;\n  z-index: 99;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background-color: $secondary-color;\n  font-weight: 600;\n  padding: 10px 20px;\n  border-radius: 10px;\n  box-shadow: 0 1px 1px;\n  color: $primary-color;\n  overflow-y: auto;\n}\n\n.close-info {\n  justify-self: end;\n  cursor: pointer;\n}\n\n.projects {\n  .new-project {\n    display: none;\n  }\n\n  &:hover .new-project {\n    display: block;\n    font-size: 15px;\n    padding: 10px 0;\n    padding-left: 20px;\n  }\n}\n\n.new-project:hover {\n  cursor: pointer;\n}\n\n.project-form {\n  position: fixed;\n  gap: 10px;\n  z-index: 99;\n  top: 50%;\n  left: 50%;\n  width: clamp(100px, 200px, 300px);\n  height: clamp(50px, 100px, 150px);\n  transform: translate(-50%, -50%);\n  background-color: $secondary-color;\n  color: $primary-color;\n  font-weight: 500;\n  padding: 10px 20px;\n  border-radius: 10px;\n  box-shadow: 0 1px 1px;\n}\n\n.submit-project,\n.cancel-project {\n  width: auto;\n  height: auto;\n  padding: 3px 9px;\n  cursor: pointer;\n  border-radius: 10px;\n}\n\n.submit-project {\n  background-color: $primary-color;\n  color: $secondary-color;\n}\n\n.submit-project:hover {\n  background-color: #2c3d74;\n  color: #a5b0ae;\n}\n\n.cancel-project {\n  background-color: $secondary-color;\n  color: $primary-color;\n}\n\n.cancel-project:hover {\n  background-color: #d4d9d8;\n  color: #152043;\n}\n\n.project {\n  cursor: pointer;\n  font-size: 16px;\n  padding-left: 15px;\n}\n\n.project:hover {\n  background-color: #d4d9d8;\n}\n\n.delete-project {\n  grid-row: 1 / 2;\n  grid-column: 3 /4;\n  justify-self: end;\n  align-self: center;\n  cursor: pointer;\n  width: 32px;\n  height: 32px;\n}\n\n.delete-project:hover {\n  animation: move-up 0.5s ease-in-out;\n}\n\n\n@keyframes move-up {\n  0% {\n    transform: translateY(0);\n  }\n  50% {\n    transform: translateY(-5px);\n  }\n  100% {\n    transform: translateY(0);\n  }\n}\n\n\na {\n  text-decoration: none;\n  color: $secondary-color;\n}\n\na:visited{\n  color: $secondary-color;\n}\n\n.footer {\n  display: grid;\n  grid-row: -2 / -1;\n  grid-column: 1 / -1;\n  background-color: $primary-color;\n  color: $secondary-color;\n  padding: 0 20px;\n}\n\n@media (max-width: 500px) {\n  .main-content {\n    grid-template-rows: auto auto 1fr;\n  }\n\n  .current-tab {\n    grid-row: 2 / 3;\n  }\n\n  .task {\n    display: grid;\n    grid-template-rows: auto auto;\n    grid-template-columns: auto auto;\n    padding: 0 10px;\n  }\n\n  .home-tasks {\n    grid-row: 3 / -1;\n  }\n\n  .tasks-header {\n    padding: 0;\n  }\n\n  .task-date {\n    padding-right: 0;\n    justify-self: end;\n  }\n\n  .task > img {\n    justify-self: end;\n    grid-column: 2 / -1;\n    padding-right: 20px;\n    padding-bottom: 3px;\n  }\n\n  .info-display {\n    width: 50%;\n    height: 50%;\n  }\n\n  .due {\n    padding-right: 0;\n  }\n  \n  .task > * {\n    font-size: 12px;\n  }\n}"],"sourceRoot":""}]);
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
/* harmony export */   "displayTaskInfo": () => (/* binding */ displayTaskInfo),
/* harmony export */   "displayTasksProject": () => (/* binding */ displayTasksProject),
/* harmony export */   "findCurrentProjectIndex": () => (/* binding */ findCurrentProjectIndex),
/* harmony export */   "findTaskIndex": () => (/* binding */ findTaskIndex)
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

function displayTaskInfo(projectIndex, arrayIndex) {
  const infoDisplay = document.createElement("div");
  infoDisplay.classList.add("info-display");

  const taskName = document.createElement("p");
  taskName.textContent =
    _informationholder_js__WEBPACK_IMPORTED_MODULE_0__.InformationHolder.projects[projectIndex][arrayIndex].name;
  const taskDescription = document.createElement("p");
  taskDescription.textContent =
    _informationholder_js__WEBPACK_IMPORTED_MODULE_0__.InformationHolder.projects[projectIndex][arrayIndex].description;
  const taskDate = document.createElement("p");
  taskDate.textContent = `Due: ${_informationholder_js__WEBPACK_IMPORTED_MODULE_0__.InformationHolder.projects[projectIndex][arrayIndex].dueDate}`;
  const taskPriority = document.createElement("p");
  taskPriority.textContent = `Priority: ${_informationholder_js__WEBPACK_IMPORTED_MODULE_0__.InformationHolder.projects[
    projectIndex
  ][arrayIndex].priority.toUpperCase()}`;

  const closeInfo = new Image();
  closeInfo.src = _assets_icons_close_info_svg__WEBPACK_IMPORTED_MODULE_2__;
  closeInfo.classList.add("close-info");

  const priorityColor = selectPriorityBorder(
    _informationholder_js__WEBPACK_IMPORTED_MODULE_0__.InformationHolder.projects[projectIndex][arrayIndex].priority
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

function findTaskIndex(element, projectIndex) {
  const taskName =
    element.parentElement.querySelector("div > .task-n").textContent;
  const taskDate =
    element.parentElement.querySelector("div > .task-date").textContent;
  return Array.from(_informationholder_js__WEBPACK_IMPORTED_MODULE_0__.InformationHolder.projects[projectIndex]).findIndex(
    (task) => task.name === taskName && task.dueDate === taskDate
  );
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
      if (
        e.target.classList.contains("task-n") &&
        e.target.parentElement.classList.contains("task-project")
      ) {
        const projectIndex = Number(
          e.target.parentElement.getAttribute("data-task-project")
        );
        const taskIndex = Number((0,_displayprojects_js__WEBPACK_IMPORTED_MODULE_7__.findTaskIndex)(e.target, projectIndex));
        (0,_displayprojects_js__WEBPACK_IMPORTED_MODULE_7__.displayTaskInfo)(projectIndex, taskIndex);
      } else if (
        e.target.classList.contains("task-n") &&
        e.target.parentElement.classList.contains("task")
      ) {
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
        const taskIndex = (0,_displayprojects_js__WEBPACK_IMPORTED_MODULE_7__.findTaskIndex)(e.target, projectIndex);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TSxLQUFLLGFBQWEsYUFBYSxNQUFNLEtBQUssV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxhQUFhLGFBQWEsWUFBWSxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsTUFBTSxLQUFLLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxhQUFhLGFBQWEsV0FBVyxXQUFXLFdBQVcsV0FBVyxZQUFZLE1BQU0sS0FBSyxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxVQUFVLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxhQUFhLGFBQWEsWUFBWSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsUUFBUSxLQUFLLFdBQVcsVUFBVSxNQUFNLEtBQUssYUFBYSxhQUFhLFFBQVEsS0FBSyxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxXQUFXLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFB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Q1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNB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dUIscURBQVE7QUFDL0IsUUFBUSxxREFBNEI7QUFDcEM7QUFDQSxHQUFHO0FBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdCZTtBQUNmOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxHQUFHO0FBQ0giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGVzLnNjc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9kZWZhdWx0T3B0aW9ucy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi90b0ludGVnZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9jb25zdGFudHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9kaWZmZXJlbmNlSW5DYWxlbmRhcklTT1dlZWtzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vZW5kT2ZJU09XZWVrL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vZW5kT2ZXZWVrL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vcGFyc2VJU08vaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9zdGFydE9mSVNPV2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3N0YXJ0T2ZXZWVrL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vdG9EYXRlL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZXMuc2Nzcz9hNjA5Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NyZWF0ZXRhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2Rpc3BsYXlwcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZGlzcGxheXRhc2tzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmZvcm1hdGlvbmhvbGRlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbWVkaWF0b3Jkb20uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Byb2plY3Rmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90YXNrZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdG9kYXl0YXNrcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvd2Vla3Rhc2tzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90eXBlb2YuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vYXNzZXRzL2ZvbnRzL2FiZWwtcmVndWxhci13ZWJmb250LndvZmYyXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvZm9udHMvYWJlbC1yZWd1bGFyLXdlYmZvbnQud29mZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQWJlbFxcXCI7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIikgZm9ybWF0KFxcXCJ3b2ZmMlxcXCIpLCB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpIGZvcm1hdChcXFwid29mZlxcXCIpO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG4qIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHksXFxuaHRtbCB7XFxuICBmb250LWZhbWlseTogXFxcIkFiZWxcXFwiLCBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXFxcIlNlZ29lIFVJXFxcIiwgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCBcXFwiT3BlbiBTYW5zXFxcIiwgXFxcIkhlbHZldGljYSBOZXVlXFxcIiwgc2Fucy1zZXJpZjtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5wYWdlLXdyYXBwZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMmZyIDhmciAxZnI7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA2ZnI7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5oZWFkZXIgPiBoMSB7XFxuICBmb250LXNpemU6IDQwcHg7XFxuICBmb250LXdlaWdodDogODAwO1xcbiAgY29sb3I6ICNiMmI4Yjc7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBncmlkLXJvdzogMS8yO1xcbiAgZ3JpZC1jb2x1bW46IDEvLTE7XFxuICBiYWNrZ3JvdW5kOiByZ2IoNywgMTgsIDI0KTtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIHJnYig3LCAxOCwgMjQpIDI1JSwgcmdiKDExLCAxOSwgNDYpIDUwJSwgcmdiKDE3LCAyOSwgNjgpIDc1JSwgcmdiKDE3LCAyOSwgNjgpIDEwMCUpO1xcbiAgZ2FwOiAxNXB4O1xcbiAgcGFkZGluZzogMCAzMHB4O1xcbn1cXG5cXG4uc2lkZWJhciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC1yb3c6IDIvMztcXG4gIGdyaWQtY29sdW1uOiAxLzI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjJiOGI3O1xcbiAgY29sb3I6ICMxMTFENDQ7XFxuICBhbGlnbi1jb250ZW50OiBzdGFydDtcXG4gIHBhZGRpbmc6IDMwcHg7XFxuICBnYXA6IDMwcHg7XFxuICBmb250LXNpemU6IDI3cHg7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4uc2lkZWJhciA+IGRpdjpub3QoLnByb2plY3RzKSB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5zaWRlYmFyID4gZGl2OmhvdmVyOm5vdCgucHJvamVjdHMpIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTgsIDIwOSwgMjA3KTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi5tYWluLWNvbnRlbnQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnI7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gM2ZyIDFmciAxZnI7XFxuICBncmlkLXJvdzogMi8zO1xcbiAgZ3JpZC1jb2x1bW46IDIvLTE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGZkNWQ1O1xcbn1cXG5cXG4uYWRkLXRhc2sge1xcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luOiAwO1xcbiAgZ2FwOiA1cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBtYXJnaW46IDIwcHggMjBweDtcXG4gIHBhZGRpbmc6IDNweCA2cHg7XFxuICBncmlkLXJvdzogMS8yO1xcbiAgZ3JpZC1jb2x1bW46IDEvMjtcXG59XFxuXFxuLmFkZC10YXNrID4gKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4uYWRkLXRhc2s6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2IyYjhiNztcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG59XFxuXFxuLmFkZC10YXNrOmhvdmVyID4gc3ZnIHtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcXG4gIHRyYW5zaXRpb246IDAuNHMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5jdXJyZW50LXRhYiB7XFxuICBjb2xvcjogIzExMUQ0NDtcXG4gIGZvbnQtc2l6ZTogMzBweDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gIGdyaWQtY29sdW1uOiAxLy0xO1xcbiAgZ3JpZC1yb3c6IDEvMjtcXG59XFxuXFxuZm9ybSB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgZ2FwOiAxMHB4O1xcbiAgei1pbmRleDogOTk7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2IyYjhiNztcXG4gIGNvbG9yOiAjMTExRDQ0O1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBib3gtc2hhZG93OiAwIDFweCAxcHg7XFxufVxcblxcbi53aWRnZXQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5mb3JtLWJ1dHRvbnMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbn1cXG5cXG4uZm9ybS1idXR0b25zID4gKiB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5mb3JtLWJ1dHRvbnMgPiBzdmc6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2MzYzdjNztcXG59XFxuXFxuLmhvbWUtdGFza3Mge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDRmciAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KGF1dG8sIDFmcikpO1xcbiAgYWxpZ24tY29udGVudDogc3RhcnQ7XFxuICBncmlkLXJvdzogMi8tMTtcXG4gIGdyaWQtY29sdW1uOiAxLy0xO1xcbn1cXG5cXG4udGFza3MtaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIHBhZGRpbmc6IDAgMTBweDtcXG4gIHBhZGRpbmctbGVmdDogNDBweDtcXG59XFxuXFxuLmR1ZSB7XFxuICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xcbn1cXG5cXG4udGFzayxcXG4udGFzay1wcm9qZWN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwYWRkaW5nOiAwIDEwcHg7XFxufVxcblxcbi50YXNrLWRvbmUge1xcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbn1cXG5cXG4udGFzay1uIHtcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRhc2s6aG92ZXIsXFxuLnRhc2stcHJvamVjdDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTZkZWRlO1xcbn1cXG5cXG4udGFzay1kYXRlIHtcXG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XFxufVxcblxcbi5ob21lLXRhc2tzID4gKiB7XFxuICBncmlkLWNvbHVtbjogMi8zO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMxMTFENDQ7XFxufVxcblxcbi5kZWxldGUtdGFzayxcXG4uZGVsZXRlLXRhc2stcHJvamVjdCB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5kZWxldGUtdGFzazpob3ZlcixcXG4uZGVsZXRlLXRhc2stcHJvamVjdDpob3ZlciB7XFxuICBhbmltYXRpb246IG1vdmUtdXAgMC41cyBlYXNlLWluLW91dDtcXG59XFxuXFxuLmluZm8tZGlzcGxheSB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvO1xcbiAgd2lkdGg6IDUwJTtcXG4gIGhlaWdodDogNTAlO1xcbiAgZ2FwOiA1cHg7XFxuICB6LWluZGV4OiA5OTtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjJiOGI3O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBib3gtc2hhZG93OiAwIDFweCAxcHg7XFxuICBjb2xvcjogIzExMUQ0NDtcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxufVxcblxcbi5jbG9zZS1pbmZvIHtcXG4gIGp1c3RpZnktc2VsZjogZW5kO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ucHJvamVjdHMgLm5ldy1wcm9qZWN0IHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5wcm9qZWN0czpob3ZlciAubmV3LXByb2plY3Qge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBmb250LXNpemU6IDE1cHg7XFxuICBwYWRkaW5nOiAxMHB4IDA7XFxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxufVxcblxcbi5uZXctcHJvamVjdDpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5wcm9qZWN0LWZvcm0ge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgZ2FwOiAxMHB4O1xcbiAgei1pbmRleDogOTk7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHdpZHRoOiAyMDBweDtcXG4gIGhlaWdodDogMTAwcHg7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNiMmI4Yjc7XFxuICBjb2xvcjogIzExMUQ0NDtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYm94LXNoYWRvdzogMCAxcHggMXB4O1xcbn1cXG5cXG4uc3VibWl0LXByb2plY3QsXFxuLmNhbmNlbC1wcm9qZWN0IHtcXG4gIHdpZHRoOiBhdXRvO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgcGFkZGluZzogM3B4IDlweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi5zdWJtaXQtcHJvamVjdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTExRDQ0O1xcbiAgY29sb3I6ICNiMmI4Yjc7XFxufVxcblxcbi5zdWJtaXQtcHJvamVjdDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmMzZDc0O1xcbiAgY29sb3I6ICNhNWIwYWU7XFxufVxcblxcbi5jYW5jZWwtcHJvamVjdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjJiOGI3O1xcbiAgY29sb3I6ICMxMTFENDQ7XFxufVxcblxcbi5jYW5jZWwtcHJvamVjdDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDRkOWQ4O1xcbiAgY29sb3I6ICMxNTIwNDM7XFxufVxcblxcbi5wcm9qZWN0IHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIHBhZGRpbmctbGVmdDogMTVweDtcXG59XFxuXFxuLnByb2plY3Q6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q0ZDlkODtcXG59XFxuXFxuLmRlbGV0ZS1wcm9qZWN0IHtcXG4gIGdyaWQtcm93OiAxLzI7XFxuICBncmlkLWNvbHVtbjogMy80O1xcbiAganVzdGlmeS1zZWxmOiBlbmQ7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB3aWR0aDogMzJweDtcXG4gIGhlaWdodDogMzJweDtcXG59XFxuXFxuLmRlbGV0ZS1wcm9qZWN0OmhvdmVyIHtcXG4gIGFuaW1hdGlvbjogbW92ZS11cCAwLjVzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIG1vdmUtdXAge1xcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XFxuICB9XFxuICA1MCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTVweCk7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcbiAgfVxcbn1cXG5hIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiAjYjJiOGI3O1xcbn1cXG5cXG5hOnZpc2l0ZWQge1xcbiAgY29sb3I6ICNiMmI4Yjc7XFxufVxcblxcbi5mb290ZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtcm93OiAtMi8tMTtcXG4gIGdyaWQtY29sdW1uOiAxLy0xO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzExMUQ0NDtcXG4gIGNvbG9yOiAjYjJiOGI3O1xcbiAgcGFkZGluZzogMCAyMHB4O1xcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcXG4gIC5tYWluLWNvbnRlbnQge1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gYXV0byAxZnI7XFxuICB9XFxuICAuY3VycmVudC10YWIge1xcbiAgICBncmlkLXJvdzogMi8zO1xcbiAgfVxcbiAgLnRhc2sge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gYXV0bztcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG87XFxuICAgIHBhZGRpbmc6IDAgMTBweDtcXG4gIH1cXG4gIC5ob21lLXRhc2tzIHtcXG4gICAgZ3JpZC1yb3c6IDMvLTE7XFxuICB9XFxuICAudGFza3MtaGVhZGVyIHtcXG4gICAgcGFkZGluZzogMDtcXG4gIH1cXG4gIC50YXNrLWRhdGUge1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAwO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG4gIH1cXG4gIC50YXNrID4gaW1nIHtcXG4gICAganVzdGlmeS1zZWxmOiBlbmQ7XFxuICAgIGdyaWQtY29sdW1uOiAyLy0xO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogM3B4O1xcbiAgfVxcbiAgLmluZm8tZGlzcGxheSB7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIGhlaWdodDogNTAlO1xcbiAgfVxcbiAgLmR1ZSB7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDA7XFxuICB9XFxuICAudGFzayA+ICoge1xcbiAgICBmb250LXNpemU6IDEycHg7XFxuICB9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLG1CQUFBO0VBQ0Esb0hBQUE7RUFFRSxrQkFBQTtBQUFKO0FBU0E7RUFDRSxzQkFBQTtBQVBGOztBQVVBOztFQUVFLDJKQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FBUEY7O0FBVUE7RUFDRSxhQUFBO0VBQ0EsK0JBQUE7RUFDQSw4QkFBQTtFQUNBLFlBQUE7QUFQRjs7QUFVQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBM0JnQjtBQW9CbEI7O0FBVUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSwwQkFBQTtFQUNBLHVIQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7QUFQRjs7QUFVQTtFQUNFLGFBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkE3Q2dCO0VBOENoQixjQS9DYztFQWdEZCxvQkFBQTtFQUNBLGFBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBUEY7O0FBVUE7RUFDRSxlQUFBO0FBUEY7O0FBVUE7RUFDRSxvQ0FBQTtFQUNBLG1CQUFB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LGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBWEY7O0FBY0E7RUFDRSxtQ0FBQTtBQVhGOztBQWVBO0VBQ0U7SUFDRSx3QkFBQTtFQVpGO0VBY0E7SUFDRSwyQkFBQTtFQVpGO0VBY0E7SUFDRSx3QkFBQTtFQVpGO0FBQ0Y7QUFnQkE7RUFDRSxxQkFBQTtFQUNBLGNBNVVnQjtBQThUbEI7O0FBaUJBO0VBQ0UsY0FoVmdCO0FBa1VsQjs7QUFpQkE7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBeFZjO0VBeVZkLGNBeFZnQjtFQXlWaEIsZUFBQTtBQWRGOztBQWlCQTtFQUNFO0lBQ0UsaUNBQUE7RUFkRjtFQWlCQTtJQUNFLGFBQUE7RUFmRjtFQWtCQTtJQUNFLGFBQUE7SUFDQSw2QkFBQTtJQUNBLGdDQUFBO0lBQ0EsZUFBQTtFQWhCRjtFQW1CQTtJQUNFLGNBQUE7RUFqQkY7RUFvQkE7SUFDRSxVQUFBO0VBbEJGO0VBcUJBO0lBQ0UsZ0JBQUE7SUFDQSxpQkFBQTtFQW5CRjtFQXNCQTtJQUNFLGlCQUFBO0lBQ0EsaUJBQUE7SUFDQSxtQkFBQTtJQUNBLG1CQUFBO0VBcEJGO0VBdUJBO0lBQ0UsVUFBQTtJQUNBLFdBQUE7RUFyQkY7RUF3QkE7SUFDRSxnQkFBQTtFQXRCRjtFQXlCQTtJQUNFLGVBQUE7RUF2QkY7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnQWJlbCc7XFxuICBzcmM6IHVybCgnLi9hc3NldHMvZm9udHMvYWJlbC1yZWd1bGFyLXdlYmZvbnQud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksXFxuICAgIHVybCgnLi9hc3NldHMvZm9udHMvYWJlbC1yZWd1bGFyLXdlYmZvbnQud29mZicpIGZvcm1hdCgnd29mZicpO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbiRwcmltYXJ5LWNvbG9yOiAjMTExRDQ0O1xcbiRzZWNvbmRhcnktY29sb3I6ICNiMmI4Yjc7XFxuJGNvbXBsZW1lbnRhcnktY29sb3I6ICMwMDA7XFxuJHllbGxvdzogI2ZmYzYwMDtcXG4kYmxhY2s6ICMyNzI3Mjc7XFxuXFxuKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5LFxcbmh0bWwge1xcbiAgZm9udC1mYW1pbHk6ICdBYmVsJywgc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4ucGFnZS13cmFwcGVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDJmciA4ZnIgMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNmZyO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG4gXFxuLmhlYWRlciA+IGgxIHtcXG4gIGZvbnQtc2l6ZTogNDBweDtcXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XFxuICBjb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcXG59XFxuXFxuLmhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdyaWQtcm93OiAxIC8gMjtcXG4gIGdyaWQtY29sdW1uOiAxIC8gLTE7XFxuICBiYWNrZ3JvdW5kOiByZ2IoNywxOCwyNCk7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCByZ2JhKDcsMTgsMjQsMSkgMjUlLCByZ2JhKDExLDE5LDQ2LDEpIDUwJSwgcmdiYSgxNywyOSw2OCwxKSA3NSUsIHJnYmEoMTcsMjksNjgsMSkgMTAwJSk7XFxuICBnYXA6IDE1cHg7XFxuICBwYWRkaW5nOiAwIDMwcHg7XFxufVxcblxcbi5zaWRlYmFyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXJvdzogMiAvIDM7XFxuICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xcbiAgY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xcbiAgYWxpZ24tY29udGVudDogc3RhcnQ7XFxuICBwYWRkaW5nOiAzMHB4O1xcbiAgZ2FwOiAzMHB4O1xcbiAgZm9udC1zaXplOiAyN3B4O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuLnNpZGViYXIgPiBkaXY6bm90KC5wcm9qZWN0cykge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uc2lkZWJhciA+IGRpdjpob3Zlcjpub3QoLnByb2plY3RzKSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTk4LCAyMDksIDIwNyk7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4ubWFpbi1jb250ZW50IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDNmciAxZnIgMWZyO1xcbiAgZ3JpZC1yb3c6IDIgLyAzO1xcbiAgZ3JpZC1jb2x1bW46IDIgLyAtMTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkZmQ1ZDU7XFxufVxcblxcbi5hZGQtdGFzayB7XFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW46IDA7XFxuICBnYXA6IDVweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG1hcmdpbjogMjBweCAyMHB4O1xcbiAgcGFkZGluZzogM3B4IDZweDtcXG4gIGdyaWQtcm93OiAxIC8gMjtcXG4gIGdyaWQtY29sdW1uOiAxIC8gMjtcXG59XFxuXFxuLmFkZC10YXNrID4gKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4uYWRkLXRhc2s6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG59XFxuXFxuLmFkZC10YXNrOmhvdmVyID4gc3ZnIHtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcXG4gIHRyYW5zaXRpb246IDAuNHMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5jdXJyZW50LXRhYiB7XFxuICBjb2xvcjogJHByaW1hcnktY29sb3I7XFxuICBmb250LXNpemU6IDMwcHg7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICBncmlkLWNvbHVtbjogMSAvIC0xO1xcbiAgZ3JpZC1yb3c6IDEgLyAyO1xcbn1cXG5cXG5mb3JtIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBnYXA6IDEwcHg7XFxuICB6LWluZGV4OiA5OTtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xcbiAgY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBib3gtc2hhZG93OiAwIDFweCAxcHg7XFxufVxcblxcbi53aWRnZXQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5mb3JtLWJ1dHRvbnMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbn1cXG5cXG4uZm9ybS1idXR0b25zID4gKiB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5mb3JtLWJ1dHRvbnMgPiBzdmc6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2MzYzdjNztcXG59XFxuXFxuLmhvbWUtdGFza3Mge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDRmciAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KGF1dG8sIDFmcikpO1xcbiAgYWxpZ24tY29udGVudDogc3RhcnQ7XFxuICBncmlkLXJvdzogMiAvIC0xO1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcXG59XFxuXFxuLnRhc2tzLWhlYWRlciB7XFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBwYWRkaW5nOiAwIDEwcHg7XFxuICBwYWRkaW5nLWxlZnQ6IDQwcHg7XFxufVxcblxcblxcbi5kdWUge1xcbiAgcGFkZGluZy1yaWdodDogMzBweDtcXG59XFxuXFxuLnRhc2ssXFxuLnRhc2stcHJvamVjdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcGFkZGluZzogMCAxMHB4O1xcbn1cXG5cXG4udGFzay1kb25lIHtcXG4gIG1hcmdpbi1yaWdodDogMTBweDtcXG59XFxuXFxuLnRhc2stbiB7XFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50YXNrOmhvdmVyLFxcbi50YXNrLXByb2plY3Q6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZGVkZTtcXG59XFxuXFxuLnRhc2stZGF0ZSB7XFxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcbn1cXG5cXG4uaG9tZS10YXNrcyA+ICoge1xcbiAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICRwcmltYXJ5LWNvbG9yO1xcbn1cXG5cXG4uZGVsZXRlLXRhc2ssXFxuLmRlbGV0ZS10YXNrLXByb2plY3Qge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uZGVsZXRlLXRhc2s6aG92ZXIsXFxuLmRlbGV0ZS10YXNrLXByb2plY3Q6aG92ZXIge1xcbiAgYW5pbWF0aW9uOiBtb3ZlLXVwIDAuNXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5pbmZvLWRpc3BsYXkge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0bztcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0bztcXG4gIHdpZHRoOiA1MCU7XFxuICBoZWlnaHQ6IDUwJTtcXG4gIGdhcDogNXB4O1xcbiAgei1pbmRleDogOTk7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYm94LXNoYWRvdzogMCAxcHggMXB4O1xcbiAgY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xcbiAgb3ZlcmZsb3cteTogYXV0bztcXG59XFxuXFxuLmNsb3NlLWluZm8ge1xcbiAganVzdGlmeS1zZWxmOiBlbmQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5wcm9qZWN0cyB7XFxuICAubmV3LXByb2plY3Qge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcblxcbiAgJjpob3ZlciAubmV3LXByb2plY3Qge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICBwYWRkaW5nOiAxMHB4IDA7XFxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcXG4gIH1cXG59XFxuXFxuLm5ldy1wcm9qZWN0OmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnByb2plY3QtZm9ybSB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBnYXA6IDEwcHg7XFxuICB6LWluZGV4OiA5OTtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgd2lkdGg6IGNsYW1wKDEwMHB4LCAyMDBweCwgMzAwcHgpO1xcbiAgaGVpZ2h0OiBjbGFtcCg1MHB4LCAxMDBweCwgMTUwcHgpO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xcbiAgY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBib3gtc2hhZG93OiAwIDFweCAxcHg7XFxufVxcblxcbi5zdWJtaXQtcHJvamVjdCxcXG4uY2FuY2VsLXByb2plY3Qge1xcbiAgd2lkdGg6IGF1dG87XFxuICBoZWlnaHQ6IGF1dG87XFxuICBwYWRkaW5nOiAzcHggOXB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuLnN1Ym1pdC1wcm9qZWN0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xcbiAgY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XFxufVxcblxcbi5zdWJtaXQtcHJvamVjdDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmMzZDc0O1xcbiAgY29sb3I6ICNhNWIwYWU7XFxufVxcblxcbi5jYW5jZWwtcHJvamVjdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xcbiAgY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xcbn1cXG5cXG4uY2FuY2VsLXByb2plY3Q6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q0ZDlkODtcXG4gIGNvbG9yOiAjMTUyMDQzO1xcbn1cXG5cXG4ucHJvamVjdCB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XFxufVxcblxcbi5wcm9qZWN0OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkNGQ5ZDg7XFxufVxcblxcbi5kZWxldGUtcHJvamVjdCB7XFxuICBncmlkLXJvdzogMSAvIDI7XFxuICBncmlkLWNvbHVtbjogMyAvNDtcXG4gIGp1c3RpZnktc2VsZjogZW5kO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgd2lkdGg6IDMycHg7XFxuICBoZWlnaHQ6IDMycHg7XFxufVxcblxcbi5kZWxldGUtcHJvamVjdDpob3ZlciB7XFxuICBhbmltYXRpb246IG1vdmUtdXAgMC41cyBlYXNlLWluLW91dDtcXG59XFxuXFxuXFxuQGtleWZyYW1lcyBtb3ZlLXVwIHtcXG4gIDAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcbiAgfVxcbiAgNTAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcXG4gIH1cXG59XFxuXFxuXFxuYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcXG59XFxuXFxuYTp2aXNpdGVke1xcbiAgY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XFxufVxcblxcbi5mb290ZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtcm93OiAtMiAvIC0xO1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xcbiAgY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XFxuICBwYWRkaW5nOiAwIDIwcHg7XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xcbiAgLm1haW4tY29udGVudCB7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byBhdXRvIDFmcjtcXG4gIH1cXG5cXG4gIC5jdXJyZW50LXRhYiB7XFxuICAgIGdyaWQtcm93OiAyIC8gMztcXG4gIH1cXG5cXG4gIC50YXNrIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIGF1dG87XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvO1xcbiAgICBwYWRkaW5nOiAwIDEwcHg7XFxuICB9XFxuXFxuICAuaG9tZS10YXNrcyB7XFxuICAgIGdyaWQtcm93OiAzIC8gLTE7XFxuICB9XFxuXFxuICAudGFza3MtaGVhZGVyIHtcXG4gICAgcGFkZGluZzogMDtcXG4gIH1cXG5cXG4gIC50YXNrLWRhdGUge1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAwO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG4gIH1cXG5cXG4gIC50YXNrID4gaW1nIHtcXG4gICAganVzdGlmeS1zZWxmOiBlbmQ7XFxuICAgIGdyaWQtY29sdW1uOiAyIC8gLTE7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XFxuICAgIHBhZGRpbmctYm90dG9tOiAzcHg7XFxuICB9XFxuXFxuICAuaW5mby1kaXNwbGF5IHtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgaGVpZ2h0OiA1MCU7XFxuICB9XFxuXFxuICAuZHVlIHtcXG4gICAgcGFkZGluZy1yaWdodDogMDtcXG4gIH1cXG4gIFxcbiAgLnRhc2sgPiAqIHtcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcbiAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJ2YXIgZGVmYXVsdE9wdGlvbnMgPSB7fTtcbmV4cG9ydCBmdW5jdGlvbiBnZXREZWZhdWx0T3B0aW9ucygpIHtcbiAgcmV0dXJuIGRlZmF1bHRPcHRpb25zO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHNldERlZmF1bHRPcHRpb25zKG5ld09wdGlvbnMpIHtcbiAgZGVmYXVsdE9wdGlvbnMgPSBuZXdPcHRpb25zO1xufSIsIi8qKlxuICogR29vZ2xlIENocm9tZSBhcyBvZiA2Ny4wLjMzOTYuODcgaW50cm9kdWNlZCB0aW1lem9uZXMgd2l0aCBvZmZzZXQgdGhhdCBpbmNsdWRlcyBzZWNvbmRzLlxuICogVGhleSB1c3VhbGx5IGFwcGVhciBmb3IgZGF0ZXMgdGhhdCBkZW5vdGUgdGltZSBiZWZvcmUgdGhlIHRpbWV6b25lcyB3ZXJlIGludHJvZHVjZWRcbiAqIChlLmcuIGZvciAnRXVyb3BlL1ByYWd1ZScgdGltZXpvbmUgdGhlIG9mZnNldCBpcyBHTVQrMDA6NTc6NDQgYmVmb3JlIDEgT2N0b2JlciAxODkxXG4gKiBhbmQgR01UKzAxOjAwOjAwIGFmdGVyIHRoYXQgZGF0ZSlcbiAqXG4gKiBEYXRlI2dldFRpbWV6b25lT2Zmc2V0IHJldHVybnMgdGhlIG9mZnNldCBpbiBtaW51dGVzIGFuZCB3b3VsZCByZXR1cm4gNTcgZm9yIHRoZSBleGFtcGxlIGFib3ZlLFxuICogd2hpY2ggd291bGQgbGVhZCB0byBpbmNvcnJlY3QgY2FsY3VsYXRpb25zLlxuICpcbiAqIFRoaXMgZnVuY3Rpb24gcmV0dXJucyB0aGUgdGltZXpvbmUgb2Zmc2V0IGluIG1pbGxpc2Vjb25kcyB0aGF0IHRha2VzIHNlY29uZHMgaW4gYWNjb3VudC5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyhkYXRlKSB7XG4gIHZhciB1dGNEYXRlID0gbmV3IERhdGUoRGF0ZS5VVEMoZGF0ZS5nZXRGdWxsWWVhcigpLCBkYXRlLmdldE1vbnRoKCksIGRhdGUuZ2V0RGF0ZSgpLCBkYXRlLmdldEhvdXJzKCksIGRhdGUuZ2V0TWludXRlcygpLCBkYXRlLmdldFNlY29uZHMoKSwgZGF0ZS5nZXRNaWxsaXNlY29uZHMoKSkpO1xuICB1dGNEYXRlLnNldFVUQ0Z1bGxZZWFyKGRhdGUuZ2V0RnVsbFllYXIoKSk7XG4gIHJldHVybiBkYXRlLmdldFRpbWUoKSAtIHV0Y0RhdGUuZ2V0VGltZSgpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlcXVpcmVkQXJncyhyZXF1aXJlZCwgYXJncykge1xuICBpZiAoYXJncy5sZW5ndGggPCByZXF1aXJlZCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocmVxdWlyZWQgKyAnIGFyZ3VtZW50JyArIChyZXF1aXJlZCA+IDEgPyAncycgOiAnJykgKyAnIHJlcXVpcmVkLCBidXQgb25seSAnICsgYXJncy5sZW5ndGggKyAnIHByZXNlbnQnKTtcbiAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvSW50ZWdlcihkaXJ0eU51bWJlcikge1xuICBpZiAoZGlydHlOdW1iZXIgPT09IG51bGwgfHwgZGlydHlOdW1iZXIgPT09IHRydWUgfHwgZGlydHlOdW1iZXIgPT09IGZhbHNlKSB7XG4gICAgcmV0dXJuIE5hTjtcbiAgfVxuICB2YXIgbnVtYmVyID0gTnVtYmVyKGRpcnR5TnVtYmVyKTtcbiAgaWYgKGlzTmFOKG51bWJlcikpIHtcbiAgICByZXR1cm4gbnVtYmVyO1xuICB9XG4gIHJldHVybiBudW1iZXIgPCAwID8gTWF0aC5jZWlsKG51bWJlcikgOiBNYXRoLmZsb29yKG51bWJlcik7XG59IiwiLyoqXG4gKiBEYXlzIGluIDEgd2Vlay5cbiAqXG4gKiBAbmFtZSBkYXlzSW5XZWVrXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5leHBvcnQgdmFyIGRheXNJbldlZWsgPSA3O1xuXG4vKipcbiAqIERheXMgaW4gMSB5ZWFyXG4gKiBPbmUgeWVhcnMgZXF1YWxzIDM2NS4yNDI1IGRheXMgYWNjb3JkaW5nIHRvIHRoZSBmb3JtdWxhOlxuICpcbiAqID4gTGVhcCB5ZWFyIG9jY3VyZXMgZXZlcnkgNCB5ZWFycywgZXhjZXB0IGZvciB5ZWFycyB0aGF0IGFyZSBkaXZpc2FibGUgYnkgMTAwIGFuZCBub3QgZGl2aXNhYmxlIGJ5IDQwMC5cbiAqID4gMSBtZWFuIHllYXIgPSAoMzY1KzEvNC0xLzEwMCsxLzQwMCkgZGF5cyA9IDM2NS4yNDI1IGRheXNcbiAqXG4gKiBAbmFtZSBkYXlzSW5ZZWFyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5leHBvcnQgdmFyIGRheXNJblllYXIgPSAzNjUuMjQyNTtcblxuLyoqXG4gKiBNYXhpbXVtIGFsbG93ZWQgdGltZS5cbiAqXG4gKiBAbmFtZSBtYXhUaW1lXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5leHBvcnQgdmFyIG1heFRpbWUgPSBNYXRoLnBvdygxMCwgOCkgKiAyNCAqIDYwICogNjAgKiAxMDAwO1xuXG4vKipcbiAqIE1pbGxpc2Vjb25kcyBpbiAxIG1pbnV0ZVxuICpcbiAqIEBuYW1lIG1pbGxpc2Vjb25kc0luTWludXRlXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5leHBvcnQgdmFyIG1pbGxpc2Vjb25kc0luTWludXRlID0gNjAwMDA7XG5cbi8qKlxuICogTWlsbGlzZWNvbmRzIGluIDEgaG91clxuICpcbiAqIEBuYW1lIG1pbGxpc2Vjb25kc0luSG91clxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuZXhwb3J0IHZhciBtaWxsaXNlY29uZHNJbkhvdXIgPSAzNjAwMDAwO1xuXG4vKipcbiAqIE1pbGxpc2Vjb25kcyBpbiAxIHNlY29uZFxuICpcbiAqIEBuYW1lIG1pbGxpc2Vjb25kc0luU2Vjb25kXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5leHBvcnQgdmFyIG1pbGxpc2Vjb25kc0luU2Vjb25kID0gMTAwMDtcblxuLyoqXG4gKiBNaW5pbXVtIGFsbG93ZWQgdGltZS5cbiAqXG4gKiBAbmFtZSBtaW5UaW1lXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5leHBvcnQgdmFyIG1pblRpbWUgPSAtbWF4VGltZTtcblxuLyoqXG4gKiBNaW51dGVzIGluIDEgaG91clxuICpcbiAqIEBuYW1lIG1pbnV0ZXNJbkhvdXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cbmV4cG9ydCB2YXIgbWludXRlc0luSG91ciA9IDYwO1xuXG4vKipcbiAqIE1vbnRocyBpbiAxIHF1YXJ0ZXJcbiAqXG4gKiBAbmFtZSBtb250aHNJblF1YXJ0ZXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cbmV4cG9ydCB2YXIgbW9udGhzSW5RdWFydGVyID0gMztcblxuLyoqXG4gKiBNb250aHMgaW4gMSB5ZWFyXG4gKlxuICogQG5hbWUgbW9udGhzSW5ZZWFyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5leHBvcnQgdmFyIG1vbnRoc0luWWVhciA9IDEyO1xuXG4vKipcbiAqIFF1YXJ0ZXJzIGluIDEgeWVhclxuICpcbiAqIEBuYW1lIHF1YXJ0ZXJzSW5ZZWFyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5leHBvcnQgdmFyIHF1YXJ0ZXJzSW5ZZWFyID0gNDtcblxuLyoqXG4gKiBTZWNvbmRzIGluIDEgaG91clxuICpcbiAqIEBuYW1lIHNlY29uZHNJbkhvdXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cbmV4cG9ydCB2YXIgc2Vjb25kc0luSG91ciA9IDM2MDA7XG5cbi8qKlxuICogU2Vjb25kcyBpbiAxIG1pbnV0ZVxuICpcbiAqIEBuYW1lIHNlY29uZHNJbk1pbnV0ZVxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuZXhwb3J0IHZhciBzZWNvbmRzSW5NaW51dGUgPSA2MDtcblxuLyoqXG4gKiBTZWNvbmRzIGluIDEgZGF5XG4gKlxuICogQG5hbWUgc2Vjb25kc0luRGF5XG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5leHBvcnQgdmFyIHNlY29uZHNJbkRheSA9IHNlY29uZHNJbkhvdXIgKiAyNDtcblxuLyoqXG4gKiBTZWNvbmRzIGluIDEgd2Vla1xuICpcbiAqIEBuYW1lIHNlY29uZHNJbldlZWtcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cbmV4cG9ydCB2YXIgc2Vjb25kc0luV2VlayA9IHNlY29uZHNJbkRheSAqIDc7XG5cbi8qKlxuICogU2Vjb25kcyBpbiAxIHllYXJcbiAqXG4gKiBAbmFtZSBzZWNvbmRzSW5ZZWFyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5leHBvcnQgdmFyIHNlY29uZHNJblllYXIgPSBzZWNvbmRzSW5EYXkgKiBkYXlzSW5ZZWFyO1xuXG4vKipcbiAqIFNlY29uZHMgaW4gMSBtb250aFxuICpcbiAqIEBuYW1lIHNlY29uZHNJbk1vbnRoXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5leHBvcnQgdmFyIHNlY29uZHNJbk1vbnRoID0gc2Vjb25kc0luWWVhciAvIDEyO1xuXG4vKipcbiAqIFNlY29uZHMgaW4gMSBxdWFydGVyXG4gKlxuICogQG5hbWUgc2Vjb25kc0luUXVhcnRlclxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuZXhwb3J0IHZhciBzZWNvbmRzSW5RdWFydGVyID0gc2Vjb25kc0luTW9udGggKiAzOyIsImltcG9ydCBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzIGZyb20gXCIuLi9fbGliL2dldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mSVNPV2VlayBmcm9tIFwiLi4vc3RhcnRPZklTT1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG52YXIgTUlMTElTRUNPTkRTX0lOX1dFRUsgPSA2MDQ4MDAwMDA7XG5cbi8qKlxuICogQG5hbWUgZGlmZmVyZW5jZUluQ2FsZW5kYXJJU09XZWVrc1xuICogQGNhdGVnb3J5IElTTyBXZWVrIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEdldCB0aGUgbnVtYmVyIG9mIGNhbGVuZGFyIElTTyB3ZWVrcyBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcy5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEdldCB0aGUgbnVtYmVyIG9mIGNhbGVuZGFyIElTTyB3ZWVrcyBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcy5cbiAqXG4gKiBJU08gd2Vlay1udW1iZXJpbmcgeWVhcjogaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fd2Vla19kYXRlXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZUxlZnQgLSB0aGUgbGF0ZXIgZGF0ZVxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZVJpZ2h0IC0gdGhlIGVhcmxpZXIgZGF0ZVxuICogQHJldHVybnMge051bWJlcn0gdGhlIG51bWJlciBvZiBjYWxlbmRhciBJU08gd2Vla3NcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSG93IG1hbnkgY2FsZW5kYXIgSVNPIHdlZWtzIGFyZSBiZXR3ZWVuIDYgSnVseSAyMDE0IGFuZCAyMSBKdWx5IDIwMTQ/XG4gKiBjb25zdCByZXN1bHQgPSBkaWZmZXJlbmNlSW5DYWxlbmRhcklTT1dlZWtzKFxuICogICBuZXcgRGF0ZSgyMDE0LCA2LCAyMSksXG4gKiAgIG5ldyBEYXRlKDIwMTQsIDYsIDYpXG4gKiApXG4gKiAvLz0+IDNcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGlmZmVyZW5jZUluQ2FsZW5kYXJJU09XZWVrcyhkaXJ0eURhdGVMZWZ0LCBkaXJ0eURhdGVSaWdodCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIHN0YXJ0T2ZJU09XZWVrTGVmdCA9IHN0YXJ0T2ZJU09XZWVrKGRpcnR5RGF0ZUxlZnQpO1xuICB2YXIgc3RhcnRPZklTT1dlZWtSaWdodCA9IHN0YXJ0T2ZJU09XZWVrKGRpcnR5RGF0ZVJpZ2h0KTtcbiAgdmFyIHRpbWVzdGFtcExlZnQgPSBzdGFydE9mSVNPV2Vla0xlZnQuZ2V0VGltZSgpIC0gZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyhzdGFydE9mSVNPV2Vla0xlZnQpO1xuICB2YXIgdGltZXN0YW1wUmlnaHQgPSBzdGFydE9mSVNPV2Vla1JpZ2h0LmdldFRpbWUoKSAtIGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMoc3RhcnRPZklTT1dlZWtSaWdodCk7XG5cbiAgLy8gUm91bmQgdGhlIG51bWJlciBvZiBkYXlzIHRvIHRoZSBuZWFyZXN0IGludGVnZXJcbiAgLy8gYmVjYXVzZSB0aGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBpbiBhIHdlZWsgaXMgbm90IGNvbnN0YW50XG4gIC8vIChlLmcuIGl0J3MgZGlmZmVyZW50IGluIHRoZSB3ZWVrIG9mIHRoZSBkYXlsaWdodCBzYXZpbmcgdGltZSBjbG9jayBzaGlmdClcbiAgcmV0dXJuIE1hdGgucm91bmQoKHRpbWVzdGFtcExlZnQgLSB0aW1lc3RhbXBSaWdodCkgLyBNSUxMSVNFQ09ORFNfSU5fV0VFSyk7XG59IiwiaW1wb3J0IGVuZE9mV2VlayBmcm9tIFwiLi4vZW5kT2ZXZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBlbmRPZklTT1dlZWtcbiAqIEBjYXRlZ29yeSBJU08gV2VlayBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIGVuZCBvZiBhbiBJU08gd2VlayBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIGVuZCBvZiBhbiBJU08gd2VlayBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxuICpcbiAqIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyOiBodHRwOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0lTT193ZWVrX2RhdGVcbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIG9yaWdpbmFsIGRhdGVcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgZW5kIG9mIGFuIElTTyB3ZWVrXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIGVuZCBvZiBhbiBJU08gd2VlayBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IGVuZE9mSVNPV2VlayhuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApKVxuICogLy89PiBTdW4gU2VwIDA3IDIwMTQgMjM6NTk6NTkuOTk5XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGVuZE9mSVNPV2VlayhkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHJldHVybiBlbmRPZldlZWsoZGlydHlEYXRlLCB7XG4gICAgd2Vla1N0YXJ0c09uOiAxXG4gIH0pO1xufSIsImltcG9ydCB7IGdldERlZmF1bHRPcHRpb25zIH0gZnJvbSBcIi4uL19saWIvZGVmYXVsdE9wdGlvbnMvaW5kZXguanNcIjtcbmltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGVuZE9mV2Vla1xuICogQGNhdGVnb3J5IFdlZWsgSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBlbmQgb2YgYSB3ZWVrIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgZW5kIG9mIGEgd2VlayBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgb3JpZ2luYWwgZGF0ZVxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIGFuIG9iamVjdCB3aXRoIG9wdGlvbnMuXG4gKiBAcGFyYW0ge0xvY2FsZX0gW29wdGlvbnMubG9jYWxlPWRlZmF1bHRMb2NhbGVdIC0gdGhlIGxvY2FsZSBvYmplY3QuIFNlZSBbTG9jYWxlXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL0xvY2FsZX1cbiAqIEBwYXJhbSB7MHwxfDJ8M3w0fDV8Nn0gW29wdGlvbnMud2Vla1N0YXJ0c09uPTBdIC0gdGhlIGluZGV4IG9mIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsgKDAgLSBTdW5kYXkpXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIGVuZCBvZiBhIHdlZWtcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMud2Vla1N0YXJ0c09uYCBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgZW5kIG9mIGEgd2VlayBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IGVuZE9mV2VlayhuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApKVxuICogLy89PiBTYXQgU2VwIDA2IDIwMTQgMjM6NTk6NTkuOTk5XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRoZSB3ZWVrIHN0YXJ0cyBvbiBNb25kYXksIHRoZSBlbmQgb2YgdGhlIHdlZWsgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBlbmRPZldlZWsobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSwgeyB3ZWVrU3RhcnRzT246IDEgfSlcbiAqIC8vPT4gU3VuIFNlcCAwNyAyMDE0IDIzOjU5OjU5Ljk5OVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBlbmRPZldlZWsoZGlydHlEYXRlLCBvcHRpb25zKSB7XG4gIHZhciBfcmVmLCBfcmVmMiwgX3JlZjMsIF9vcHRpb25zJHdlZWtTdGFydHNPbiwgX29wdGlvbnMkbG9jYWxlLCBfb3B0aW9ucyRsb2NhbGUkb3B0aW8sIF9kZWZhdWx0T3B0aW9ucyRsb2NhbCwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMjtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkZWZhdWx0T3B0aW9ucyA9IGdldERlZmF1bHRPcHRpb25zKCk7XG4gIHZhciB3ZWVrU3RhcnRzT24gPSB0b0ludGVnZXIoKF9yZWYgPSAoX3JlZjIgPSAoX3JlZjMgPSAoX29wdGlvbnMkd2Vla1N0YXJ0c09uID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX29wdGlvbnMkd2Vla1N0YXJ0c09uICE9PSB2b2lkIDAgPyBfb3B0aW9ucyR3ZWVrU3RhcnRzT24gOiBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUgPSBvcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlJG9wdGlvID0gX29wdGlvbnMkbG9jYWxlLm9wdGlvbnMpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZSRvcHRpbyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX29wdGlvbnMkbG9jYWxlJG9wdGlvLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX3JlZjMgIT09IHZvaWQgMCA/IF9yZWYzIDogZGVmYXVsdE9wdGlvbnMud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmMiAhPT0gdm9pZCAwID8gX3JlZjIgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsID0gZGVmYXVsdE9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID0gX2RlZmF1bHRPcHRpb25zJGxvY2FsLm9wdGlvbnMpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmICE9PSB2b2lkIDAgPyBfcmVmIDogMCk7XG5cbiAgLy8gVGVzdCBpZiB3ZWVrU3RhcnRzT24gaXMgYmV0d2VlbiAwIGFuZCA2IF9hbmRfIGlzIG5vdCBOYU5cbiAgaWYgKCEod2Vla1N0YXJ0c09uID49IDAgJiYgd2Vla1N0YXJ0c09uIDw9IDYpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ3dlZWtTdGFydHNPbiBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNiBpbmNsdXNpdmVseScpO1xuICB9XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBkYXkgPSBkYXRlLmdldERheSgpO1xuICB2YXIgZGlmZiA9IChkYXkgPCB3ZWVrU3RhcnRzT24gPyAtNyA6IDApICsgNiAtIChkYXkgLSB3ZWVrU3RhcnRzT24pO1xuICBkYXRlLnNldERhdGUoZGF0ZS5nZXREYXRlKCkgKyBkaWZmKTtcbiAgZGF0ZS5zZXRIb3VycygyMywgNTksIDU5LCA5OTkpO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJpbXBvcnQgeyBtaWxsaXNlY29uZHNJbkhvdXIsIG1pbGxpc2Vjb25kc0luTWludXRlIH0gZnJvbSBcIi4uL2NvbnN0YW50cy9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHBhcnNlSVNPXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFBhcnNlIElTTyBzdHJpbmdcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFBhcnNlIHRoZSBnaXZlbiBzdHJpbmcgaW4gSVNPIDg2MDEgZm9ybWF0IGFuZCByZXR1cm4gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBGdW5jdGlvbiBhY2NlcHRzIGNvbXBsZXRlIElTTyA4NjAxIGZvcm1hdHMgYXMgd2VsbCBhcyBwYXJ0aWFsIGltcGxlbWVudGF0aW9ucy5cbiAqIElTTyA4NjAxOiBodHRwOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0lTT184NjAxXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzbid0IGEgc3RyaW5nLCB0aGUgZnVuY3Rpb24gY2Fubm90IHBhcnNlIHRoZSBzdHJpbmcgb3JcbiAqIHRoZSB2YWx1ZXMgYXJlIGludmFsaWQsIGl0IHJldHVybnMgSW52YWxpZCBEYXRlLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBhcmd1bWVudCAtIHRoZSB2YWx1ZSB0byBjb252ZXJ0XG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gYW4gb2JqZWN0IHdpdGggb3B0aW9ucy5cbiAqIEBwYXJhbSB7MHwxfDJ9IFtvcHRpb25zLmFkZGl0aW9uYWxEaWdpdHM9Ml0gLSB0aGUgYWRkaXRpb25hbCBudW1iZXIgb2YgZGlnaXRzIGluIHRoZSBleHRlbmRlZCB5ZWFyIGZvcm1hdFxuICogQHJldHVybnMge0RhdGV9IHRoZSBwYXJzZWQgZGF0ZSBpbiB0aGUgbG9jYWwgdGltZSB6b25lXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLmFkZGl0aW9uYWxEaWdpdHNgIG11c3QgYmUgMCwgMSBvciAyXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbnZlcnQgc3RyaW5nICcyMDE0LTAyLTExVDExOjMwOjMwJyB0byBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gcGFyc2VJU08oJzIwMTQtMDItMTFUMTE6MzA6MzAnKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCBzdHJpbmcgJyswMjAxNDEwMScgdG8gZGF0ZSxcbiAqIC8vIGlmIHRoZSBhZGRpdGlvbmFsIG51bWJlciBvZiBkaWdpdHMgaW4gdGhlIGV4dGVuZGVkIHllYXIgZm9ybWF0IGlzIDE6XG4gKiBjb25zdCByZXN1bHQgPSBwYXJzZUlTTygnKzAyMDE0MTAxJywgeyBhZGRpdGlvbmFsRGlnaXRzOiAxIH0pXG4gKiAvLz0+IEZyaSBBcHIgMTEgMjAxNCAwMDowMDowMFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwYXJzZUlTTyhhcmd1bWVudCwgb3B0aW9ucykge1xuICB2YXIgX29wdGlvbnMkYWRkaXRpb25hbERpO1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGFkZGl0aW9uYWxEaWdpdHMgPSB0b0ludGVnZXIoKF9vcHRpb25zJGFkZGl0aW9uYWxEaSA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5hZGRpdGlvbmFsRGlnaXRzKSAhPT0gbnVsbCAmJiBfb3B0aW9ucyRhZGRpdGlvbmFsRGkgIT09IHZvaWQgMCA/IF9vcHRpb25zJGFkZGl0aW9uYWxEaSA6IDIpO1xuICBpZiAoYWRkaXRpb25hbERpZ2l0cyAhPT0gMiAmJiBhZGRpdGlvbmFsRGlnaXRzICE9PSAxICYmIGFkZGl0aW9uYWxEaWdpdHMgIT09IDApIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignYWRkaXRpb25hbERpZ2l0cyBtdXN0IGJlIDAsIDEgb3IgMicpO1xuICB9XG4gIGlmICghKHR5cGVvZiBhcmd1bWVudCA9PT0gJ3N0cmluZycgfHwgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZ3VtZW50KSA9PT0gJ1tvYmplY3QgU3RyaW5nXScpKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cbiAgdmFyIGRhdGVTdHJpbmdzID0gc3BsaXREYXRlU3RyaW5nKGFyZ3VtZW50KTtcbiAgdmFyIGRhdGU7XG4gIGlmIChkYXRlU3RyaW5ncy5kYXRlKSB7XG4gICAgdmFyIHBhcnNlWWVhclJlc3VsdCA9IHBhcnNlWWVhcihkYXRlU3RyaW5ncy5kYXRlLCBhZGRpdGlvbmFsRGlnaXRzKTtcbiAgICBkYXRlID0gcGFyc2VEYXRlKHBhcnNlWWVhclJlc3VsdC5yZXN0RGF0ZVN0cmluZywgcGFyc2VZZWFyUmVzdWx0LnllYXIpO1xuICB9XG4gIGlmICghZGF0ZSB8fCBpc05hTihkYXRlLmdldFRpbWUoKSkpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxuICB2YXIgdGltZXN0YW1wID0gZGF0ZS5nZXRUaW1lKCk7XG4gIHZhciB0aW1lID0gMDtcbiAgdmFyIG9mZnNldDtcbiAgaWYgKGRhdGVTdHJpbmdzLnRpbWUpIHtcbiAgICB0aW1lID0gcGFyc2VUaW1lKGRhdGVTdHJpbmdzLnRpbWUpO1xuICAgIGlmIChpc05hTih0aW1lKSkge1xuICAgICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gICAgfVxuICB9XG4gIGlmIChkYXRlU3RyaW5ncy50aW1lem9uZSkge1xuICAgIG9mZnNldCA9IHBhcnNlVGltZXpvbmUoZGF0ZVN0cmluZ3MudGltZXpvbmUpO1xuICAgIGlmIChpc05hTihvZmZzZXQpKSB7XG4gICAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdmFyIGRpcnR5RGF0ZSA9IG5ldyBEYXRlKHRpbWVzdGFtcCArIHRpbWUpO1xuICAgIC8vIGpzIHBhcnNlZCBzdHJpbmcgYXNzdW1pbmcgaXQncyBpbiBVVEMgdGltZXpvbmVcbiAgICAvLyBidXQgd2UgbmVlZCBpdCB0byBiZSBwYXJzZWQgaW4gb3VyIHRpbWV6b25lXG4gICAgLy8gc28gd2UgdXNlIHV0YyB2YWx1ZXMgdG8gYnVpbGQgZGF0ZSBpbiBvdXIgdGltZXpvbmUuXG4gICAgLy8gWWVhciB2YWx1ZXMgZnJvbSAwIHRvIDk5IG1hcCB0byB0aGUgeWVhcnMgMTkwMCB0byAxOTk5XG4gICAgLy8gc28gc2V0IHllYXIgZXhwbGljaXRseSB3aXRoIHNldEZ1bGxZZWFyLlxuICAgIHZhciByZXN1bHQgPSBuZXcgRGF0ZSgwKTtcbiAgICByZXN1bHQuc2V0RnVsbFllYXIoZGlydHlEYXRlLmdldFVUQ0Z1bGxZZWFyKCksIGRpcnR5RGF0ZS5nZXRVVENNb250aCgpLCBkaXJ0eURhdGUuZ2V0VVRDRGF0ZSgpKTtcbiAgICByZXN1bHQuc2V0SG91cnMoZGlydHlEYXRlLmdldFVUQ0hvdXJzKCksIGRpcnR5RGF0ZS5nZXRVVENNaW51dGVzKCksIGRpcnR5RGF0ZS5nZXRVVENTZWNvbmRzKCksIGRpcnR5RGF0ZS5nZXRVVENNaWxsaXNlY29uZHMoKSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuICByZXR1cm4gbmV3IERhdGUodGltZXN0YW1wICsgdGltZSArIG9mZnNldCk7XG59XG52YXIgcGF0dGVybnMgPSB7XG4gIGRhdGVUaW1lRGVsaW1pdGVyOiAvW1QgXS8sXG4gIHRpbWVab25lRGVsaW1pdGVyOiAvW1ogXS9pLFxuICB0aW1lem9uZTogLyhbWistXS4qKSQvXG59O1xudmFyIGRhdGVSZWdleCA9IC9eLT8oPzooXFxkezN9KXwoXFxkezJ9KSg/Oi0/KFxcZHsyfSkpP3xXKFxcZHsyfSkoPzotPyhcXGR7MX0pKT98KSQvO1xudmFyIHRpbWVSZWdleCA9IC9eKFxcZHsyfSg/OlsuLF1cXGQqKT8pKD86Oj8oXFxkezJ9KD86Wy4sXVxcZCopPykpPyg/Ojo/KFxcZHsyfSg/OlsuLF1cXGQqKT8pKT8kLztcbnZhciB0aW1lem9uZVJlZ2V4ID0gL14oWystXSkoXFxkezJ9KSg/Ojo/KFxcZHsyfSkpPyQvO1xuZnVuY3Rpb24gc3BsaXREYXRlU3RyaW5nKGRhdGVTdHJpbmcpIHtcbiAgdmFyIGRhdGVTdHJpbmdzID0ge307XG4gIHZhciBhcnJheSA9IGRhdGVTdHJpbmcuc3BsaXQocGF0dGVybnMuZGF0ZVRpbWVEZWxpbWl0ZXIpO1xuICB2YXIgdGltZVN0cmluZztcblxuICAvLyBUaGUgcmVnZXggbWF0Y2ggc2hvdWxkIG9ubHkgcmV0dXJuIGF0IG1heGltdW0gdHdvIGFycmF5IGVsZW1lbnRzLlxuICAvLyBbZGF0ZV0sIFt0aW1lXSwgb3IgW2RhdGUsIHRpbWVdLlxuICBpZiAoYXJyYXkubGVuZ3RoID4gMikge1xuICAgIHJldHVybiBkYXRlU3RyaW5ncztcbiAgfVxuICBpZiAoLzovLnRlc3QoYXJyYXlbMF0pKSB7XG4gICAgdGltZVN0cmluZyA9IGFycmF5WzBdO1xuICB9IGVsc2Uge1xuICAgIGRhdGVTdHJpbmdzLmRhdGUgPSBhcnJheVswXTtcbiAgICB0aW1lU3RyaW5nID0gYXJyYXlbMV07XG4gICAgaWYgKHBhdHRlcm5zLnRpbWVab25lRGVsaW1pdGVyLnRlc3QoZGF0ZVN0cmluZ3MuZGF0ZSkpIHtcbiAgICAgIGRhdGVTdHJpbmdzLmRhdGUgPSBkYXRlU3RyaW5nLnNwbGl0KHBhdHRlcm5zLnRpbWVab25lRGVsaW1pdGVyKVswXTtcbiAgICAgIHRpbWVTdHJpbmcgPSBkYXRlU3RyaW5nLnN1YnN0cihkYXRlU3RyaW5ncy5kYXRlLmxlbmd0aCwgZGF0ZVN0cmluZy5sZW5ndGgpO1xuICAgIH1cbiAgfVxuICBpZiAodGltZVN0cmluZykge1xuICAgIHZhciB0b2tlbiA9IHBhdHRlcm5zLnRpbWV6b25lLmV4ZWModGltZVN0cmluZyk7XG4gICAgaWYgKHRva2VuKSB7XG4gICAgICBkYXRlU3RyaW5ncy50aW1lID0gdGltZVN0cmluZy5yZXBsYWNlKHRva2VuWzFdLCAnJyk7XG4gICAgICBkYXRlU3RyaW5ncy50aW1lem9uZSA9IHRva2VuWzFdO1xuICAgIH0gZWxzZSB7XG4gICAgICBkYXRlU3RyaW5ncy50aW1lID0gdGltZVN0cmluZztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGRhdGVTdHJpbmdzO1xufVxuZnVuY3Rpb24gcGFyc2VZZWFyKGRhdGVTdHJpbmcsIGFkZGl0aW9uYWxEaWdpdHMpIHtcbiAgdmFyIHJlZ2V4ID0gbmV3IFJlZ0V4cCgnXig/OihcXFxcZHs0fXxbKy1dXFxcXGR7JyArICg0ICsgYWRkaXRpb25hbERpZ2l0cykgKyAnfSl8KFxcXFxkezJ9fFsrLV1cXFxcZHsnICsgKDIgKyBhZGRpdGlvbmFsRGlnaXRzKSArICd9KSQpJyk7XG4gIHZhciBjYXB0dXJlcyA9IGRhdGVTdHJpbmcubWF0Y2gocmVnZXgpO1xuICAvLyBJbnZhbGlkIElTTy1mb3JtYXR0ZWQgeWVhclxuICBpZiAoIWNhcHR1cmVzKSByZXR1cm4ge1xuICAgIHllYXI6IE5hTixcbiAgICByZXN0RGF0ZVN0cmluZzogJydcbiAgfTtcbiAgdmFyIHllYXIgPSBjYXB0dXJlc1sxXSA/IHBhcnNlSW50KGNhcHR1cmVzWzFdKSA6IG51bGw7XG4gIHZhciBjZW50dXJ5ID0gY2FwdHVyZXNbMl0gPyBwYXJzZUludChjYXB0dXJlc1syXSkgOiBudWxsO1xuXG4gIC8vIGVpdGhlciB5ZWFyIG9yIGNlbnR1cnkgaXMgbnVsbCwgbm90IGJvdGhcbiAgcmV0dXJuIHtcbiAgICB5ZWFyOiBjZW50dXJ5ID09PSBudWxsID8geWVhciA6IGNlbnR1cnkgKiAxMDAsXG4gICAgcmVzdERhdGVTdHJpbmc6IGRhdGVTdHJpbmcuc2xpY2UoKGNhcHR1cmVzWzFdIHx8IGNhcHR1cmVzWzJdKS5sZW5ndGgpXG4gIH07XG59XG5mdW5jdGlvbiBwYXJzZURhdGUoZGF0ZVN0cmluZywgeWVhcikge1xuICAvLyBJbnZhbGlkIElTTy1mb3JtYXR0ZWQgeWVhclxuICBpZiAoeWVhciA9PT0gbnVsbCkgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIHZhciBjYXB0dXJlcyA9IGRhdGVTdHJpbmcubWF0Y2goZGF0ZVJlZ2V4KTtcbiAgLy8gSW52YWxpZCBJU08tZm9ybWF0dGVkIHN0cmluZ1xuICBpZiAoIWNhcHR1cmVzKSByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgdmFyIGlzV2Vla0RhdGUgPSAhIWNhcHR1cmVzWzRdO1xuICB2YXIgZGF5T2ZZZWFyID0gcGFyc2VEYXRlVW5pdChjYXB0dXJlc1sxXSk7XG4gIHZhciBtb250aCA9IHBhcnNlRGF0ZVVuaXQoY2FwdHVyZXNbMl0pIC0gMTtcbiAgdmFyIGRheSA9IHBhcnNlRGF0ZVVuaXQoY2FwdHVyZXNbM10pO1xuICB2YXIgd2VlayA9IHBhcnNlRGF0ZVVuaXQoY2FwdHVyZXNbNF0pO1xuICB2YXIgZGF5T2ZXZWVrID0gcGFyc2VEYXRlVW5pdChjYXB0dXJlc1s1XSkgLSAxO1xuICBpZiAoaXNXZWVrRGF0ZSkge1xuICAgIGlmICghdmFsaWRhdGVXZWVrRGF0ZSh5ZWFyLCB3ZWVrLCBkYXlPZldlZWspKSB7XG4gICAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgICB9XG4gICAgcmV0dXJuIGRheU9mSVNPV2Vla1llYXIoeWVhciwgd2VlaywgZGF5T2ZXZWVrKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgZGF0ZSA9IG5ldyBEYXRlKDApO1xuICAgIGlmICghdmFsaWRhdGVEYXRlKHllYXIsIG1vbnRoLCBkYXkpIHx8ICF2YWxpZGF0ZURheU9mWWVhckRhdGUoeWVhciwgZGF5T2ZZZWFyKSkge1xuICAgICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gICAgfVxuICAgIGRhdGUuc2V0VVRDRnVsbFllYXIoeWVhciwgbW9udGgsIE1hdGgubWF4KGRheU9mWWVhciwgZGF5KSk7XG4gICAgcmV0dXJuIGRhdGU7XG4gIH1cbn1cbmZ1bmN0aW9uIHBhcnNlRGF0ZVVuaXQodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlID8gcGFyc2VJbnQodmFsdWUpIDogMTtcbn1cbmZ1bmN0aW9uIHBhcnNlVGltZSh0aW1lU3RyaW5nKSB7XG4gIHZhciBjYXB0dXJlcyA9IHRpbWVTdHJpbmcubWF0Y2godGltZVJlZ2V4KTtcbiAgaWYgKCFjYXB0dXJlcykgcmV0dXJuIE5hTjsgLy8gSW52YWxpZCBJU08tZm9ybWF0dGVkIHRpbWVcblxuICB2YXIgaG91cnMgPSBwYXJzZVRpbWVVbml0KGNhcHR1cmVzWzFdKTtcbiAgdmFyIG1pbnV0ZXMgPSBwYXJzZVRpbWVVbml0KGNhcHR1cmVzWzJdKTtcbiAgdmFyIHNlY29uZHMgPSBwYXJzZVRpbWVVbml0KGNhcHR1cmVzWzNdKTtcbiAgaWYgKCF2YWxpZGF0ZVRpbWUoaG91cnMsIG1pbnV0ZXMsIHNlY29uZHMpKSB7XG4gICAgcmV0dXJuIE5hTjtcbiAgfVxuICByZXR1cm4gaG91cnMgKiBtaWxsaXNlY29uZHNJbkhvdXIgKyBtaW51dGVzICogbWlsbGlzZWNvbmRzSW5NaW51dGUgKyBzZWNvbmRzICogMTAwMDtcbn1cbmZ1bmN0aW9uIHBhcnNlVGltZVVuaXQodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICYmIHBhcnNlRmxvYXQodmFsdWUucmVwbGFjZSgnLCcsICcuJykpIHx8IDA7XG59XG5mdW5jdGlvbiBwYXJzZVRpbWV6b25lKHRpbWV6b25lU3RyaW5nKSB7XG4gIGlmICh0aW1lem9uZVN0cmluZyA9PT0gJ1onKSByZXR1cm4gMDtcbiAgdmFyIGNhcHR1cmVzID0gdGltZXpvbmVTdHJpbmcubWF0Y2godGltZXpvbmVSZWdleCk7XG4gIGlmICghY2FwdHVyZXMpIHJldHVybiAwO1xuICB2YXIgc2lnbiA9IGNhcHR1cmVzWzFdID09PSAnKycgPyAtMSA6IDE7XG4gIHZhciBob3VycyA9IHBhcnNlSW50KGNhcHR1cmVzWzJdKTtcbiAgdmFyIG1pbnV0ZXMgPSBjYXB0dXJlc1szXSAmJiBwYXJzZUludChjYXB0dXJlc1szXSkgfHwgMDtcbiAgaWYgKCF2YWxpZGF0ZVRpbWV6b25lKGhvdXJzLCBtaW51dGVzKSkge1xuICAgIHJldHVybiBOYU47XG4gIH1cbiAgcmV0dXJuIHNpZ24gKiAoaG91cnMgKiBtaWxsaXNlY29uZHNJbkhvdXIgKyBtaW51dGVzICogbWlsbGlzZWNvbmRzSW5NaW51dGUpO1xufVxuZnVuY3Rpb24gZGF5T2ZJU09XZWVrWWVhcihpc29XZWVrWWVhciwgd2VlaywgZGF5KSB7XG4gIHZhciBkYXRlID0gbmV3IERhdGUoMCk7XG4gIGRhdGUuc2V0VVRDRnVsbFllYXIoaXNvV2Vla1llYXIsIDAsIDQpO1xuICB2YXIgZm91cnRoT2ZKYW51YXJ5RGF5ID0gZGF0ZS5nZXRVVENEYXkoKSB8fCA3O1xuICB2YXIgZGlmZiA9ICh3ZWVrIC0gMSkgKiA3ICsgZGF5ICsgMSAtIGZvdXJ0aE9mSmFudWFyeURheTtcbiAgZGF0ZS5zZXRVVENEYXRlKGRhdGUuZ2V0VVRDRGF0ZSgpICsgZGlmZik7XG4gIHJldHVybiBkYXRlO1xufVxuXG4vLyBWYWxpZGF0aW9uIGZ1bmN0aW9uc1xuXG4vLyBGZWJydWFyeSBpcyBudWxsIHRvIGhhbmRsZSB0aGUgbGVhcCB5ZWFyICh1c2luZyB8fClcbnZhciBkYXlzSW5Nb250aHMgPSBbMzEsIG51bGwsIDMxLCAzMCwgMzEsIDMwLCAzMSwgMzEsIDMwLCAzMSwgMzAsIDMxXTtcbmZ1bmN0aW9uIGlzTGVhcFllYXJJbmRleCh5ZWFyKSB7XG4gIHJldHVybiB5ZWFyICUgNDAwID09PSAwIHx8IHllYXIgJSA0ID09PSAwICYmIHllYXIgJSAxMDAgIT09IDA7XG59XG5mdW5jdGlvbiB2YWxpZGF0ZURhdGUoeWVhciwgbW9udGgsIGRhdGUpIHtcbiAgcmV0dXJuIG1vbnRoID49IDAgJiYgbW9udGggPD0gMTEgJiYgZGF0ZSA+PSAxICYmIGRhdGUgPD0gKGRheXNJbk1vbnRoc1ttb250aF0gfHwgKGlzTGVhcFllYXJJbmRleCh5ZWFyKSA/IDI5IDogMjgpKTtcbn1cbmZ1bmN0aW9uIHZhbGlkYXRlRGF5T2ZZZWFyRGF0ZSh5ZWFyLCBkYXlPZlllYXIpIHtcbiAgcmV0dXJuIGRheU9mWWVhciA+PSAxICYmIGRheU9mWWVhciA8PSAoaXNMZWFwWWVhckluZGV4KHllYXIpID8gMzY2IDogMzY1KTtcbn1cbmZ1bmN0aW9uIHZhbGlkYXRlV2Vla0RhdGUoX3llYXIsIHdlZWssIGRheSkge1xuICByZXR1cm4gd2VlayA+PSAxICYmIHdlZWsgPD0gNTMgJiYgZGF5ID49IDAgJiYgZGF5IDw9IDY7XG59XG5mdW5jdGlvbiB2YWxpZGF0ZVRpbWUoaG91cnMsIG1pbnV0ZXMsIHNlY29uZHMpIHtcbiAgaWYgKGhvdXJzID09PSAyNCkge1xuICAgIHJldHVybiBtaW51dGVzID09PSAwICYmIHNlY29uZHMgPT09IDA7XG4gIH1cbiAgcmV0dXJuIHNlY29uZHMgPj0gMCAmJiBzZWNvbmRzIDwgNjAgJiYgbWludXRlcyA+PSAwICYmIG1pbnV0ZXMgPCA2MCAmJiBob3VycyA+PSAwICYmIGhvdXJzIDwgMjU7XG59XG5mdW5jdGlvbiB2YWxpZGF0ZVRpbWV6b25lKF9ob3VycywgbWludXRlcykge1xuICByZXR1cm4gbWludXRlcyA+PSAwICYmIG1pbnV0ZXMgPD0gNTk7XG59IiwiaW1wb3J0IHN0YXJ0T2ZXZWVrIGZyb20gXCIuLi9zdGFydE9mV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgc3RhcnRPZklTT1dlZWtcbiAqIEBjYXRlZ29yeSBJU08gV2VlayBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIHN0YXJ0IG9mIGFuIElTTyB3ZWVrIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgc3RhcnQgb2YgYW4gSVNPIHdlZWsgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIHJlc3VsdCB3aWxsIGJlIGluIHRoZSBsb2NhbCB0aW1lem9uZS5cbiAqXG4gKiBJU08gd2Vlay1udW1iZXJpbmcgeWVhcjogaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fd2Vla19kYXRlXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBvcmlnaW5hbCBkYXRlXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHN0YXJ0IG9mIGFuIElTTyB3ZWVrXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIHN0YXJ0IG9mIGFuIElTTyB3ZWVrIGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZklTT1dlZWsobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSlcbiAqIC8vPT4gTW9uIFNlcCAwMSAyMDE0IDAwOjAwOjAwXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZJU09XZWVrKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgcmV0dXJuIHN0YXJ0T2ZXZWVrKGRpcnR5RGF0ZSwge1xuICAgIHdlZWtTdGFydHNPbjogMVxuICB9KTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuaW1wb3J0IHsgZ2V0RGVmYXVsdE9wdGlvbnMgfSBmcm9tIFwiLi4vX2xpYi9kZWZhdWx0T3B0aW9ucy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBzdGFydE9mV2Vla1xuICogQGNhdGVnb3J5IFdlZWsgSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBzdGFydCBvZiBhIHdlZWsgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBzdGFydCBvZiBhIHdlZWsgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIHJlc3VsdCB3aWxsIGJlIGluIHRoZSBsb2NhbCB0aW1lem9uZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIG9yaWdpbmFsIGRhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSBhbiBvYmplY3Qgd2l0aCBvcHRpb25zLlxuICogQHBhcmFtIHtMb2NhbGV9IFtvcHRpb25zLmxvY2FsZT1kZWZhdWx0TG9jYWxlXSAtIHRoZSBsb2NhbGUgb2JqZWN0LiBTZWUgW0xvY2FsZV17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9Mb2NhbGV9XG4gKiBAcGFyYW0gezB8MXwyfDN8NHw1fDZ9IFtvcHRpb25zLndlZWtTdGFydHNPbj0wXSAtIHRoZSBpbmRleCBvZiB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrICgwIC0gU3VuZGF5KVxuICogQHJldHVybnMge0RhdGV9IHRoZSBzdGFydCBvZiBhIHdlZWtcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMud2Vla1N0YXJ0c09uYCBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgc3RhcnQgb2YgYSB3ZWVrIGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZldlZWsobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSlcbiAqIC8vPT4gU3VuIEF1ZyAzMSAyMDE0IDAwOjAwOjAwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRoZSB3ZWVrIHN0YXJ0cyBvbiBNb25kYXksIHRoZSBzdGFydCBvZiB0aGUgd2VlayBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZXZWVrKG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCksIHsgd2Vla1N0YXJ0c09uOiAxIH0pXG4gKiAvLz0+IE1vbiBTZXAgMDEgMjAxNCAwMDowMDowMFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mV2VlayhkaXJ0eURhdGUsIG9wdGlvbnMpIHtcbiAgdmFyIF9yZWYsIF9yZWYyLCBfcmVmMywgX29wdGlvbnMkd2Vla1N0YXJ0c09uLCBfb3B0aW9ucyRsb2NhbGUsIF9vcHRpb25zJGxvY2FsZSRvcHRpbywgX2RlZmF1bHRPcHRpb25zJGxvY2FsLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyO1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRlZmF1bHRPcHRpb25zID0gZ2V0RGVmYXVsdE9wdGlvbnMoKTtcbiAgdmFyIHdlZWtTdGFydHNPbiA9IHRvSW50ZWdlcigoX3JlZiA9IChfcmVmMiA9IChfcmVmMyA9IChfb3B0aW9ucyR3ZWVrU3RhcnRzT24gPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfb3B0aW9ucyR3ZWVrU3RhcnRzT24gIT09IHZvaWQgMCA/IF9vcHRpb25zJHdlZWtTdGFydHNPbiA6IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZSA9IG9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUkb3B0aW8gPSBfb3B0aW9ucyRsb2NhbGUub3B0aW9ucykgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlJG9wdGlvID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfb3B0aW9ucyRsb2NhbGUkb3B0aW8ud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmMyAhPT0gdm9pZCAwID8gX3JlZjMgOiBkZWZhdWx0T3B0aW9ucy53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9yZWYyICE9PSB2b2lkIDAgPyBfcmVmMiA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwgPSBkZWZhdWx0T3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIgPSBfZGVmYXVsdE9wdGlvbnMkbG9jYWwub3B0aW9ucykgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2RlZmF1bHRPcHRpb25zJGxvY2FsMi53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9yZWYgIT09IHZvaWQgMCA/IF9yZWYgOiAwKTtcblxuICAvLyBUZXN0IGlmIHdlZWtTdGFydHNPbiBpcyBiZXR3ZWVuIDAgYW5kIDYgX2FuZF8gaXMgbm90IE5hTlxuICBpZiAoISh3ZWVrU3RhcnRzT24gPj0gMCAmJiB3ZWVrU3RhcnRzT24gPD0gNikpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignd2Vla1N0YXJ0c09uIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2IGluY2x1c2l2ZWx5Jyk7XG4gIH1cbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGRheSA9IGRhdGUuZ2V0RGF5KCk7XG4gIHZhciBkaWZmID0gKGRheSA8IHdlZWtTdGFydHNPbiA/IDcgOiAwKSArIGRheSAtIHdlZWtTdGFydHNPbjtcbiAgZGF0ZS5zZXREYXRlKGRhdGUuZ2V0RGF0ZSgpIC0gZGlmZik7XG4gIGRhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCBfdHlwZW9mIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90eXBlb2ZcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHRvRGF0ZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYW4gaW5zdGFuY2Ugb2YgRGF0ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgaXRzIGNsb25lLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhIG51bWJlciwgaXQgaXMgdHJlYXRlZCBhcyBhIHRpbWVzdGFtcC5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgbm9uZSBvZiB0aGUgYWJvdmUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIEludmFsaWQgRGF0ZS5cbiAqXG4gKiAqKk5vdGUqKjogKmFsbCogRGF0ZSBhcmd1bWVudHMgcGFzc2VkIHRvIGFueSAqZGF0ZS1mbnMqIGZ1bmN0aW9uIGlzIHByb2Nlc3NlZCBieSBgdG9EYXRlYC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBhcmd1bWVudCAtIHRoZSB2YWx1ZSB0byBjb252ZXJ0XG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHBhcnNlZCBkYXRlIGluIHRoZSBsb2NhbCB0aW1lIHpvbmVcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDbG9uZSB0aGUgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZShuZXcgRGF0ZSgyMDE0LCAxLCAxMSwgMTEsIDMwLCAzMCkpXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHRoZSB0aW1lc3RhbXAgdG8gZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZSgxMzkyMDk4NDMwMDAwKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9EYXRlKGFyZ3VtZW50KSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgYXJnU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZ3VtZW50KTtcblxuICAvLyBDbG9uZSB0aGUgZGF0ZVxuICBpZiAoYXJndW1lbnQgaW5zdGFuY2VvZiBEYXRlIHx8IF90eXBlb2YoYXJndW1lbnQpID09PSAnb2JqZWN0JyAmJiBhcmdTdHIgPT09ICdbb2JqZWN0IERhdGVdJykge1xuICAgIC8vIFByZXZlbnQgdGhlIGRhdGUgdG8gbG9zZSB0aGUgbWlsbGlzZWNvbmRzIHdoZW4gcGFzc2VkIHRvIG5ldyBEYXRlKCkgaW4gSUUxMFxuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudC5nZXRUaW1lKCkpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBhcmd1bWVudCA9PT0gJ251bWJlcicgfHwgYXJnU3RyID09PSAnW29iamVjdCBOdW1iZXJdJykge1xuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudCk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKCh0eXBlb2YgYXJndW1lbnQgPT09ICdzdHJpbmcnIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgU3RyaW5nXScpICYmIHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUud2FybihcIlN0YXJ0aW5nIHdpdGggdjIuMC4wLWJldGEuMSBkYXRlLWZucyBkb2Vzbid0IGFjY2VwdCBzdHJpbmdzIGFzIGRhdGUgYXJndW1lbnRzLiBQbGVhc2UgdXNlIGBwYXJzZUlTT2AgdG8gcGFyc2Ugc3RyaW5ncy4gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjc3RyaW5nLWFyZ3VtZW50c1wiKTtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLndhcm4obmV3IEVycm9yKCkuc3RhY2spO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxufSIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGNvbnN0IGNyZWF0ZVRhc2sgPSAoKSA9PiAoe1xuICBuYW1lOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2stbmFtZVwiKS52YWx1ZSxcbiAgZGVzY3JpcHRpb246IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFzay1kZXNjcmlwdGlvblwiKS52YWx1ZSxcbiAgZHVlRGF0ZTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkdWUtZGF0ZVwiKS52YWx1ZSxcbiAgcHJpb3JpdHk6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJpb3JpdHlcIikudmFsdWUsXG59KTtcbiIsImltcG9ydCB7IEluZm9ybWF0aW9uSG9sZGVyIH0gZnJvbSBcIi4vaW5mb3JtYXRpb25ob2xkZXIuanNcIjtcbmltcG9ydCBkZWxldGVJY29uUGF0aCBmcm9tIFwiLi9hc3NldHMvaWNvbnMvZGVsZXRlLWljb24uc3ZnXCI7XG5pbXBvcnQgY2xvc2VJbmZvUGF0aCBmcm9tIFwiLi9hc3NldHMvaWNvbnMvY2xvc2UtaW5mby5zdmdcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlUYXNrc1Byb2plY3QoXG4gIGl0ZXJhdGVGcm9tID0gSW5mb3JtYXRpb25Ib2xkZXIucHJvamVjdHNbcHJvamVjdEluZGV4XS5sZW5ndGggLSAxLFxuICBwcm9qZWN0SW5kZXhcbikge1xuICBjb25zdCBhbGxUYXNrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGFza1wiKTtcbiAgYWxsVGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgIHRhc2suc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICB9KTtcblxuICBjb25zdCBudW1iZXJPZlByb2plY3RzID0gSW5mb3JtYXRpb25Ib2xkZXIucHJvamVjdHNbcHJvamVjdEluZGV4XS5sZW5ndGg7XG4gIGZvciAobGV0IGkgPSBpdGVyYXRlRnJvbTsgaSA8IG51bWJlck9mUHJvamVjdHM7IGkrKykge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGl2LmNsYXNzTGlzdC5hZGQoXCJ0YXNrLXByb2plY3RcIik7XG4gICAgZGl2LnNldEF0dHJpYnV0ZShcImRhdGEtdGFzay1wcm9qZWN0XCIsIGAke3Byb2plY3RJbmRleH1gKTtcblxuICAgIGNvbnN0IHRhc2tEb25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIHRhc2tEb25lLnR5cGUgPSBcImNoZWNrYm94XCI7XG4gICAgdGFza0RvbmUuY2xhc3NMaXN0LmFkZChcInRhc2stZG9uZVwiKTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQodGFza0RvbmUpO1xuXG4gICAgY29uc3QgdGFza05hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICB0YXNrTmFtZS5jbGFzc0xpc3QuYWRkKFwidGFzay1uXCIpO1xuICAgIHRhc2tOYW1lLnRleHRDb250ZW50ID0gSW5mb3JtYXRpb25Ib2xkZXIucHJvamVjdHNbcHJvamVjdEluZGV4XVtpXS5uYW1lO1xuICAgIGRpdi5hcHBlbmRDaGlsZCh0YXNrTmFtZSk7XG5cbiAgICBjb25zdCB0YXNrRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHRhc2tEYXRlLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWRhdGVcIik7XG4gICAgdGFza0RhdGUudGV4dENvbnRlbnQgPSBJbmZvcm1hdGlvbkhvbGRlci5wcm9qZWN0c1twcm9qZWN0SW5kZXhdW2ldLmR1ZURhdGU7XG4gICAgZGl2LmFwcGVuZENoaWxkKHRhc2tEYXRlKTtcblxuICAgIGNvbnN0IGRlbGV0ZUljb24gPSBuZXcgSW1hZ2UoKTtcbiAgICBkZWxldGVJY29uLmNsYXNzTGlzdC5hZGQoXCJkZWxldGUtdGFzay1wcm9qZWN0XCIpO1xuICAgIGRlbGV0ZUljb24uc3JjID0gZGVsZXRlSWNvblBhdGg7XG4gICAgZGl2LmFwcGVuZENoaWxkKGRlbGV0ZUljb24pO1xuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ob21lLXRhc2tzXCIpLmFwcGVuZENoaWxkKGRpdik7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlUYXNrSW5mbyhwcm9qZWN0SW5kZXgsIGFycmF5SW5kZXgpIHtcbiAgY29uc3QgaW5mb0Rpc3BsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBpbmZvRGlzcGxheS5jbGFzc0xpc3QuYWRkKFwiaW5mby1kaXNwbGF5XCIpO1xuXG4gIGNvbnN0IHRhc2tOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHRhc2tOYW1lLnRleHRDb250ZW50ID1cbiAgICBJbmZvcm1hdGlvbkhvbGRlci5wcm9qZWN0c1twcm9qZWN0SW5kZXhdW2FycmF5SW5kZXhdLm5hbWU7XG4gIGNvbnN0IHRhc2tEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICB0YXNrRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPVxuICAgIEluZm9ybWF0aW9uSG9sZGVyLnByb2plY3RzW3Byb2plY3RJbmRleF1bYXJyYXlJbmRleF0uZGVzY3JpcHRpb247XG4gIGNvbnN0IHRhc2tEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHRhc2tEYXRlLnRleHRDb250ZW50ID0gYER1ZTogJHtJbmZvcm1hdGlvbkhvbGRlci5wcm9qZWN0c1twcm9qZWN0SW5kZXhdW2FycmF5SW5kZXhdLmR1ZURhdGV9YDtcbiAgY29uc3QgdGFza1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHRhc2tQcmlvcml0eS50ZXh0Q29udGVudCA9IGBQcmlvcml0eTogJHtJbmZvcm1hdGlvbkhvbGRlci5wcm9qZWN0c1tcbiAgICBwcm9qZWN0SW5kZXhcbiAgXVthcnJheUluZGV4XS5wcmlvcml0eS50b1VwcGVyQ2FzZSgpfWA7XG5cbiAgY29uc3QgY2xvc2VJbmZvID0gbmV3IEltYWdlKCk7XG4gIGNsb3NlSW5mby5zcmMgPSBjbG9zZUluZm9QYXRoO1xuICBjbG9zZUluZm8uY2xhc3NMaXN0LmFkZChcImNsb3NlLWluZm9cIik7XG5cbiAgY29uc3QgcHJpb3JpdHlDb2xvciA9IHNlbGVjdFByaW9yaXR5Qm9yZGVyKFxuICAgIEluZm9ybWF0aW9uSG9sZGVyLnByb2plY3RzW3Byb2plY3RJbmRleF1bYXJyYXlJbmRleF0ucHJpb3JpdHlcbiAgKTtcbiAgaW5mb0Rpc3BsYXkuc3R5bGUuYm9yZGVyID0gYDJweCBzb2xpZCAke3ByaW9yaXR5Q29sb3J9YDtcbiAgdGFza1ByaW9yaXR5LnN0eWxlLmNvbG9yID0gcHJpb3JpdHlDb2xvcjtcblxuICBpbmZvRGlzcGxheS5hcHBlbmRDaGlsZChjbG9zZUluZm8pO1xuICBpbmZvRGlzcGxheS5hcHBlbmRDaGlsZCh0YXNrTmFtZSk7XG4gIGluZm9EaXNwbGF5LmFwcGVuZENoaWxkKHRhc2tEZXNjcmlwdGlvbik7XG4gIGluZm9EaXNwbGF5LmFwcGVuZENoaWxkKHRhc2tEYXRlKTtcbiAgaW5mb0Rpc3BsYXkuYXBwZW5kQ2hpbGQodGFza1ByaW9yaXR5KTtcblxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW4tY29udGVudFwiKS5hcHBlbmRDaGlsZChpbmZvRGlzcGxheSk7XG59XG5cbmZ1bmN0aW9uIHNlbGVjdFByaW9yaXR5Qm9yZGVyKHByaW9yaXR5KSB7XG4gIGlmIChwcmlvcml0eSA9PT0gXCJsb3dcIikgcmV0dXJuIFwiIzJkN2JkMlwiO1xuICBpZiAocHJpb3JpdHkgPT09IFwibWVkaXVtXCIpIHJldHVybiBcIiNmZmM2MDBcIjtcbiAgcmV0dXJuIFwiI2ZmMDAxOFwiO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZmluZEN1cnJlbnRQcm9qZWN0SW5kZXgoKSB7XG4gIGNvbnN0IHRhYlRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmN1cnJlbnQtdGFiXCIpLnRleHRDb250ZW50O1xuICBjb25zdCBjdXJyZW50UHJvamVjdCA9IEFycmF5LmZyb20oXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcm9qZWN0cyA+ICpcIilcbiAgKS5maW5kKChlbCkgPT4gZWwudGV4dENvbnRlbnQgPT09IGAke3RhYlRleHR9YCk7XG4gIHJldHVybiBOdW1iZXIoY3VycmVudFByb2plY3QuZ2V0QXR0cmlidXRlKFwiZGF0YS1wcm9qZWN0LWlkXCIpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZVRhc2tzUHJvamVjdCgpIHtcbiAgY29uc3QgdGFza1Byb2plY3QgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGFzay1wcm9qZWN0XCIpKTtcbiAgdGFza1Byb2plY3QuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgIHRhc2sucmVtb3ZlKCk7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZmluZFRhc2tJbmRleChlbGVtZW50LCBwcm9qZWN0SW5kZXgpIHtcbiAgY29uc3QgdGFza05hbWUgPVxuICAgIGVsZW1lbnQucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiZGl2ID4gLnRhc2stblwiKS50ZXh0Q29udGVudDtcbiAgY29uc3QgdGFza0RhdGUgPVxuICAgIGVsZW1lbnQucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiZGl2ID4gLnRhc2stZGF0ZVwiKS50ZXh0Q29udGVudDtcbiAgcmV0dXJuIEFycmF5LmZyb20oSW5mb3JtYXRpb25Ib2xkZXIucHJvamVjdHNbcHJvamVjdEluZGV4XSkuZmluZEluZGV4KFxuICAgICh0YXNrKSA9PiB0YXNrLm5hbWUgPT09IHRhc2tOYW1lICYmIHRhc2suZHVlRGF0ZSA9PT0gdGFza0RhdGVcbiAgKTtcbn1cbiIsImltcG9ydCB7IEluZm9ybWF0aW9uSG9sZGVyIH0gZnJvbSBcIi4vaW5mb3JtYXRpb25ob2xkZXIuanNcIjtcbmltcG9ydCBkZWxldGVJY29uUGF0aCBmcm9tIFwiLi9hc3NldHMvaWNvbnMvZGVsZXRlLWljb24uc3ZnXCI7XG5pbXBvcnQgY2xvc2VJbmZvUGF0aCBmcm9tIFwiLi9hc3NldHMvaWNvbnMvY2xvc2UtaW5mby5zdmdcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlUYXNrcyhpdGVyYXRlRnJvbSA9IEluZm9ybWF0aW9uSG9sZGVyLnRhc2tzLmxlbmd0aCAtIDEpIHtcbiAgY29uc3QgaG9tZVRhc2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ob21lLXRhc2tzXCIpO1xuICBmb3IgKGxldCBpID0gaXRlcmF0ZUZyb207IGkgPCBJbmZvcm1hdGlvbkhvbGRlci50YXNrcy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGl2LmNsYXNzTGlzdC5hZGQoXCJ0YXNrXCIpO1xuICAgIGRpdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBpKTtcblxuICAgIGNvbnN0IHRhc2tEb25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIHRhc2tEb25lLnR5cGUgPSBcImNoZWNrYm94XCI7XG4gICAgdGFza0RvbmUuY2xhc3NMaXN0LmFkZChcInRhc2stZG9uZVwiKTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQodGFza0RvbmUpO1xuXG4gICAgY29uc3QgdGFza05hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICB0YXNrTmFtZS5jbGFzc0xpc3QuYWRkKFwidGFzay1uXCIpO1xuICAgIHRhc2tOYW1lLnRleHRDb250ZW50ID0gSW5mb3JtYXRpb25Ib2xkZXIudGFza3NbaV0ubmFtZTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQodGFza05hbWUpO1xuXG4gICAgY29uc3QgdGFza0RhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICB0YXNrRGF0ZS5jbGFzc0xpc3QuYWRkKFwidGFzay1kYXRlXCIpO1xuICAgIHRhc2tEYXRlLnRleHRDb250ZW50ID0gSW5mb3JtYXRpb25Ib2xkZXIudGFza3NbaV0uZHVlRGF0ZTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQodGFza0RhdGUpO1xuXG4gICAgY29uc3QgZGVsZXRlSWNvbiA9IG5ldyBJbWFnZSgpO1xuICAgIGRlbGV0ZUljb24uY2xhc3NMaXN0LmFkZChcImRlbGV0ZS10YXNrXCIpO1xuICAgIGRlbGV0ZUljb24uc3JjID0gZGVsZXRlSWNvblBhdGg7XG4gICAgZGl2LmFwcGVuZENoaWxkKGRlbGV0ZUljb24pO1xuXG4gICAgaG9tZVRhc2tzLmFwcGVuZENoaWxkKGRpdik7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlBbGxUYXNrSW5mbyhhcnJheUluZGV4KSB7XG4gIGNvbnN0IGluZm9EaXNwbGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaW5mb0Rpc3BsYXkuY2xhc3NMaXN0LmFkZChcImluZm8tZGlzcGxheVwiKTtcblxuICBjb25zdCB0YXNrTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICB0YXNrTmFtZS50ZXh0Q29udGVudCA9IEluZm9ybWF0aW9uSG9sZGVyLnRhc2tzW2FycmF5SW5kZXhdLm5hbWU7XG4gIGNvbnN0IHRhc2tEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICB0YXNrRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBJbmZvcm1hdGlvbkhvbGRlci50YXNrc1thcnJheUluZGV4XS5kZXNjcmlwdGlvbjtcbiAgY29uc3QgdGFza0RhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgdGFza0RhdGUudGV4dENvbnRlbnQgPSBgRHVlOiAke0luZm9ybWF0aW9uSG9sZGVyLnRhc2tzW2FycmF5SW5kZXhdLmR1ZURhdGV9YDtcbiAgY29uc3QgdGFza1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHRhc2tQcmlvcml0eS50ZXh0Q29udGVudCA9IGBQcmlvcml0eTogJHtJbmZvcm1hdGlvbkhvbGRlci50YXNrc1tcbiAgICBhcnJheUluZGV4XG4gIF0ucHJpb3JpdHkudG9VcHBlckNhc2UoKX1gO1xuXG4gIGNvbnN0IGNsb3NlSW5mbyA9IG5ldyBJbWFnZSgpO1xuICBjbG9zZUluZm8uc3JjID0gY2xvc2VJbmZvUGF0aDtcbiAgY2xvc2VJbmZvLmNsYXNzTGlzdC5hZGQoXCJjbG9zZS1pbmZvXCIpO1xuXG4gIGNvbnN0IHByaW9yaXR5Q29sb3IgPSBzZWxlY3RQcmlvcml0eUJvcmRlcihcbiAgICBJbmZvcm1hdGlvbkhvbGRlci50YXNrc1thcnJheUluZGV4XS5wcmlvcml0eVxuICApO1xuICBpbmZvRGlzcGxheS5zdHlsZS5ib3JkZXIgPSBgMnB4IHNvbGlkICR7cHJpb3JpdHlDb2xvcn1gO1xuICB0YXNrUHJpb3JpdHkuc3R5bGUuY29sb3IgPSBwcmlvcml0eUNvbG9yO1xuXG4gIGluZm9EaXNwbGF5LmFwcGVuZENoaWxkKGNsb3NlSW5mbyk7XG4gIGluZm9EaXNwbGF5LmFwcGVuZENoaWxkKHRhc2tOYW1lKTtcbiAgaW5mb0Rpc3BsYXkuYXBwZW5kQ2hpbGQodGFza0Rlc2NyaXB0aW9uKTtcbiAgaW5mb0Rpc3BsYXkuYXBwZW5kQ2hpbGQodGFza0RhdGUpO1xuICBpbmZvRGlzcGxheS5hcHBlbmRDaGlsZCh0YXNrUHJpb3JpdHkpO1xuXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbi1jb250ZW50XCIpLmFwcGVuZENoaWxkKGluZm9EaXNwbGF5KTtcbn1cblxuZnVuY3Rpb24gc2VsZWN0UHJpb3JpdHlCb3JkZXIocHJpb3JpdHkpIHtcbiAgaWYgKHByaW9yaXR5ID09PSBcImxvd1wiKSByZXR1cm4gXCIjMmQ3YmQyXCI7XG4gIGlmIChwcmlvcml0eSA9PT0gXCJtZWRpdW1cIikgcmV0dXJuIFwiI2ZmYzYwMFwiO1xuICByZXR1cm4gXCIjZmYwMDE4XCI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5QWxsVGFza3MoKSB7XG4gIGNvbnN0IGFsbFRhc2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50YXNrLWRhdGVcIik7XG4gIGFsbFRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcbiAgICB0YXNrLnBhcmVudEVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUFsbFRhc2tzKCkge1xuICBjb25zdCBhbGxUYXNrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgXCIuaG9tZS10YXNrcyA+IDpub3QoLnRhc2tzLWhlYWRlcilcIlxuICApO1xuICBhbGxUYXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB0YXNrLnJlbW92ZSgpKTtcbn1cbiIsImltcG9ydCB0aWNrIGZyb20gXCIuL2Fzc2V0cy9pY29ucy9jaGVjay1pY29uLnBuZ1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gYWRqdXN0VGlja01hcmsoKSB7XG4gIGNvbnN0IHRpY2tNYXJrID0gbmV3IEltYWdlKCk7XG4gIHRpY2tNYXJrLnNyYyA9IHRpY2s7XG4gIHRpY2tNYXJrLnN0eWxlLndpZHRoID0gXCI0MHB4XCI7XG4gIHRpY2tNYXJrLnN0eWxlLmhlaWdodCA9IFwiNDBweFwiO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlclwiKS5hcHBlbmRDaGlsZCh0aWNrTWFyayk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0YXNrc0hlYWRlcigpIHtcbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZGl2LmNsYXNzTGlzdC5hZGQoXCJ0YXNrcy1oZWFkZXJcIik7XG4gIGNvbnN0IGgzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICBoMy50ZXh0Q29udGVudCA9IFwiTmFtZVwiO1xuICBjb25zdCBoZWFkZXIzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICBoZWFkZXIzLmNsYXNzTGlzdC5hZGQoXCJkdWVcIik7XG4gIGhlYWRlcjMudGV4dENvbnRlbnQgPSBcIkR1ZSBEYXRlXCI7XG5cbiAgZGl2LmFwcGVuZENoaWxkKGgzKTtcbiAgZGl2LmFwcGVuZENoaWxkKGhlYWRlcjMpO1xuICByZXR1cm4gZGl2O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlVGFiTmFtZShuYW1lKSB7XG4gIGNvbnN0IGN1cnJlbnRUYWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmN1cnJlbnQtdGFiXCIpO1xuICBjdXJyZW50VGFiLnRleHRDb250ZW50ID0gbmFtZTtcbn1cbiIsImltcG9ydCBcIi4vc3R5bGVzLnNjc3NcIjtcbmltcG9ydCB7IGFkanVzdFRpY2tNYXJrIH0gZnJvbSBcIi4vaGVhZGVyLmpzXCI7XG5pbXBvcnQgeyBNYW5hZ2VGb3JtIH0gZnJvbSBcIi4vdGFza2Zvcm0uanNcIjtcbmltcG9ydCB7IE1hbmFnZVByb2plY3RGb3JtIH0gZnJvbSBcIi4vcHJvamVjdGZvcm0uanNcIjtcbmltcG9ydCB7IE1lZGlhdG9yRE9NIH0gZnJvbSBcIi4vbWVkaWF0b3Jkb20uanNcIjtcbmltcG9ydCB7IGRpc3BsYXlUYXNrcyB9IGZyb20gXCIuL2Rpc3BsYXl0YXNrcy5qc1wiO1xuXG5hZGp1c3RUaWNrTWFyaygpO1xuXG5NZWRpYXRvckRPTS5pbml0aWFsaXplKCk7XG5cbmNvbnN0IGZvcm0gPSBNYW5hZ2VGb3JtKCk7XG5mb3JtLmluaXRpYWxpemUoKTtcblxuY29uc3QgcHJvamVjdEZvcm0gPSBNYW5hZ2VQcm9qZWN0Rm9ybSgpO1xucHJvamVjdEZvcm0uaW5pdGlhbGl6ZSgpO1xuXG5pZiAoSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRhc2tzXCIpKS5sZW5ndGggPiAwKSB7XG4gIGRpc3BsYXlUYXNrcygwKTtcbn1cbiIsImV4cG9ydCBjbGFzcyBJbmZvcm1hdGlvbkhvbGRlciB7XG4gIHN0YXRpYyB0YXNrcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0YXNrc1wiKSkgfHwgW107XG4gIHN0YXRpYyBwcm9qZWN0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0XCIpKSB8fCBbXTtcbiAgc3RhdGljIHByb2plY3ROYW1lID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3ROYW1lXCIpKSB8fCBbXTtcblxuICBzdGF0aWMgYWRkVGFzayhzb21lVGFzaykge1xuICAgIHRoaXMudGFza3MucHVzaChzb21lVGFzayk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0YXNrc1wiLCBKU09OLnN0cmluZ2lmeSh0aGlzLnRhc2tzKSk7XG4gIH1cblxuICBzdGF0aWMgcmVtb3ZlVGFzayhhVGFzaykge1xuICAgIGNvbnN0IHRhc2tJbmRleCA9IE51bWJlcihhVGFzay5pZCk7XG4gICAgdGhpcy50YXNrcy5zcGxpY2UodGFza0luZGV4LCAxKTtcbiAgICB0aGlzLiNhZGp1c3RJZCh0YXNrSW5kZXgpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGFza3NcIiwgSlNPTi5zdHJpbmdpZnkodGhpcy50YXNrcykpO1xuICB9XG5cbiAgc3RhdGljICNhZGp1c3RJZChkZWxldGVkSWQpIHtcbiAgICBjb25zdCBkaXZzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50YXNrXCIpO1xuICAgIGlmIChkaXZzLmxlbmd0aCA+IDApIHtcbiAgICAgIGRpdnMuZm9yRWFjaCgoZGl2KSA9PiB7XG4gICAgICAgIGlmIChkaXYuaWQgPiBkZWxldGVkSWQpIHtcbiAgICAgICAgICBjb25zdCBjdXJyZW50SWQgPSBwYXJzZUludChkaXYuaWQubWF0Y2goL1xcZCsvKVswXSk7XG4gICAgICAgICAgZGl2LmlkID0gZGl2LmlkLnJlcGxhY2UoY3VycmVudElkLCBjdXJyZW50SWQgLSAxKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljICNhZGp1c3RQcm9qZWN0SWQoZGVsZXRlZElkKSB7XG4gICAgY29uc3QgZGl2cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJvamVjdFwiKTtcbiAgICBjb25zdCBkZWxldGVCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5kZWxldGUtcHJvamVjdFwiKTtcblxuICAgIGlmIChkaXZzLmxlbmd0aCA+IDApIHtcbiAgICAgIGRpdnMuZm9yRWFjaCgoZGl2KSA9PiB7XG4gICAgICAgIGlmIChOdW1iZXIoZGl2LmdldEF0dHJpYnV0ZShcImRhdGEtcHJvamVjdC1pZFwiKSkgPiBkZWxldGVkSWQpIHtcbiAgICAgICAgICBjb25zdCBjdXJyZW50SWQgPSBwYXJzZUludChcbiAgICAgICAgICAgIGRpdi5nZXRBdHRyaWJ1dGUoXCJkYXRhLXByb2plY3QtaWRcIikubWF0Y2goL1xcZCsvKVswXVxuICAgICAgICAgICk7XG4gICAgICAgICAgZGl2LnNldEF0dHJpYnV0ZShcImRhdGEtcHJvamVjdC1pZFwiLCBjdXJyZW50SWQgLSAxKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKGRlbGV0ZUJ1dHRvbnMubGVuZ3RoID4gMCkge1xuICAgICAgZGVsZXRlQnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICAgICAgaWYgKE51bWJlcihidXR0b24uZ2V0QXR0cmlidXRlKFwiZGF0YS1wcm9qZWN0LWlkXCIpKSA+IGRlbGV0ZWRJZCkge1xuICAgICAgICAgIGNvbnN0IGlkID0gTnVtYmVyKFxuICAgICAgICAgICAgYnV0dG9uLmdldEF0dHJpYnV0ZShcImRhdGEtcHJvamVjdC1pZFwiKS5tYXRjaCgvXFxkKy8pWzBdXG4gICAgICAgICAgKTtcbiAgICAgICAgICBidXR0b24uc2V0QXR0cmlidXRlKFwiZGF0YS1wcm9qZWN0LWlkXCIsIGlkIC0gMSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBhZGRQcm9qZWN0KHNvbWVQcm9qZWN0KSB7XG4gICAgdGhpcy5wcm9qZWN0cy5wdXNoKHNvbWVQcm9qZWN0KTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RcIiwgSlNPTi5zdHJpbmdpZnkodGhpcy5wcm9qZWN0cykpO1xuICB9XG5cbiAgc3RhdGljIGFkZFRhc2tUb1Byb2plY3QocHJvamVjdEluZGV4LCB0YXNrKSB7XG4gICAgdGhpcy5wcm9qZWN0c1twcm9qZWN0SW5kZXhdLnB1c2godGFzayk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0XCIsIEpTT04uc3RyaW5naWZ5KHRoaXMucHJvamVjdHMpKTtcbiAgfVxuXG4gIHN0YXRpYyByZW1vdmVUYXNrRnJvbVByb2plY3QocHJvamVjdEluZGV4LCB0YXNrSW5kZXgpIHtcbiAgICB0aGlzLnByb2plY3RzW3Byb2plY3RJbmRleF0uc3BsaWNlKHRhc2tJbmRleCwgMSk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0XCIsIEpTT04uc3RyaW5naWZ5KHRoaXMucHJvamVjdHMpKTtcbiAgfSBcblxuICBzdGF0aWMgcmVtb3ZlUHJvamVjdChhUHJvamVjdEluZGV4KSB7XG4gICAgdGhpcy5wcm9qZWN0cy5zcGxpY2UoYVByb2plY3RJbmRleCwgMSk7XG4gICAgdGhpcy4jYWRqdXN0UHJvamVjdElkKGFQcm9qZWN0SW5kZXgpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdFwiLCBKU09OLnN0cmluZ2lmeSh0aGlzLnByb2plY3RzKSk7XG4gIH1cblxuICBzdGF0aWMgYWRkUHJvamVjdE5hbWUoc29tZVByb2plY3ROYW1lKSB7XG4gICAgdGhpcy5wcm9qZWN0TmFtZS5wdXNoKHNvbWVQcm9qZWN0TmFtZSk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0TmFtZVwiLCBKU09OLnN0cmluZ2lmeSh0aGlzLnByb2plY3ROYW1lKSk7XG4gIH1cblxuICBzdGF0aWMgcmVtb3ZlUHJvamVjdE5hbWUocHJvamVjdEluZGV4KSB7XG4gICAgdGhpcy5wcm9qZWN0TmFtZS5zcGxpY2UocHJvamVjdEluZGV4LCAxKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3ROYW1lXCIsIEpTT04uc3RyaW5naWZ5KHRoaXMucHJvamVjdE5hbWUpKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgY2hhbmdlVGFiTmFtZSB9IGZyb20gXCIuL2hlYWRlci5qc1wiO1xuaW1wb3J0IHsgY3JlYXRlVGFzayB9IGZyb20gXCIuL2NyZWF0ZXRhc2suanNcIjtcbmltcG9ydCB7IEluZm9ybWF0aW9uSG9sZGVyIH0gZnJvbSBcIi4vaW5mb3JtYXRpb25ob2xkZXIuanNcIjtcbmltcG9ydCB7XG4gIGRpc3BsYXlUYXNrcyxcbiAgZGlzcGxheUFsbFRhc2tzLFxuICBkaXNwbGF5QWxsVGFza0luZm8sXG59IGZyb20gXCIuL2Rpc3BsYXl0YXNrcy5qc1wiO1xuaW1wb3J0IHsgZGlzcGxheVRvZGF5VGFza3MgfSBmcm9tIFwiLi90b2RheXRhc2tzLmpzXCI7XG5pbXBvcnQgeyBkaXNwbGF5V2Vla1Rhc2tzIH0gZnJvbSBcIi4vd2Vla3Rhc2tzLmpzXCI7XG5pbXBvcnQgZGVsZXRlUHJvamVjdEljb24gZnJvbSBcIi4vYXNzZXRzL2ljb25zL2RlbGV0ZS1wcm9qZWN0LnN2Z1wiO1xuaW1wb3J0IHtcbiAgZGlzcGxheVRhc2tzUHJvamVjdCxcbiAgZGVsZXRlVGFza3NQcm9qZWN0LFxuICBmaW5kQ3VycmVudFByb2plY3RJbmRleCxcbiAgZmluZFRhc2tJbmRleCxcbiAgZGlzcGxheVRhc2tJbmZvLFxufSBmcm9tIFwiLi9kaXNwbGF5cHJvamVjdHMuanNcIjtcblxuZXhwb3J0IGNsYXNzIE1lZGlhdG9yRE9NIHtcbiAgc3RhdGljIGluc2VydFRhc2soKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdWJtaXRcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZm9ybVwiKTtcbiAgICAgIGNvbnN0IHRhYlRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmN1cnJlbnQtdGFiXCIpLnRleHRDb250ZW50O1xuXG4gICAgICBpZiAoZm9ybS5jaGVja1ZhbGlkaXR5KCkpIHtcbiAgICAgICAgaWYgKHRhYlRleHQgIT09IFwiSG9tZVwiICYmIHRhYlRleHQgIT09IFwiVG9kYXlcIiAmJiB0YWJUZXh0ICE9PSBcIldlZWtcIikge1xuICAgICAgICAgIGNvbnN0IHByb2plY3RJbmRleCA9IGZpbmRDdXJyZW50UHJvamVjdEluZGV4KCk7XG4gICAgICAgICAgY29uc29sZS5sb2cocHJvamVjdEluZGV4KTtcbiAgICAgICAgICBJbmZvcm1hdGlvbkhvbGRlci5hZGRUYXNrVG9Qcm9qZWN0KHByb2plY3RJbmRleCwgY3JlYXRlVGFzaygpKTtcbiAgICAgICAgICBjb25zdCB2c2YgPSBJbmZvcm1hdGlvbkhvbGRlci5wcm9qZWN0c1twcm9qZWN0SW5kZXhdLmxlbmd0aCAtIDE7XG4gICAgICAgICAgZGlzcGxheVRhc2tzUHJvamVjdCh2c2YsIHByb2plY3RJbmRleCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgSW5mb3JtYXRpb25Ib2xkZXIuYWRkVGFzayhjcmVhdGVUYXNrKCkpO1xuICAgICAgICAgIGRpc3BsYXlUYXNrcygpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgc2hvd1Rhc2tJbmZvKCkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbi1jb250ZW50XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgaWYgKFxuICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJ0YXNrLW5cIikgJiZcbiAgICAgICAgZS50YXJnZXQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJ0YXNrLXByb2plY3RcIilcbiAgICAgICkge1xuICAgICAgICBjb25zdCBwcm9qZWN0SW5kZXggPSBOdW1iZXIoXG4gICAgICAgICAgZS50YXJnZXQucGFyZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXRhc2stcHJvamVjdFwiKVxuICAgICAgICApO1xuICAgICAgICBjb25zdCB0YXNrSW5kZXggPSBOdW1iZXIoZmluZFRhc2tJbmRleChlLnRhcmdldCwgcHJvamVjdEluZGV4KSk7XG4gICAgICAgIGRpc3BsYXlUYXNrSW5mbyhwcm9qZWN0SW5kZXgsIHRhc2tJbmRleCk7XG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJ0YXNrLW5cIikgJiZcbiAgICAgICAgZS50YXJnZXQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJ0YXNrXCIpXG4gICAgICApIHtcbiAgICAgICAgZGlzcGxheUFsbFRhc2tJbmZvKE51bWJlcihlLnRhcmdldC5wYXJlbnRFbGVtZW50LmlkKSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgY2xvc2VUYXNrSW5mbygpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW4tY29udGVudFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJjbG9zZS1pbmZvXCIpKVxuICAgICAgICBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnJlbW92ZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGNyb3NzVGFzaygpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW4tY29udGVudFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJ0YXNrLWRvbmVcIikpIHtcbiAgICAgICAgY29uc3QgdGFza3NOYW1lQW5kRGF0ZSA9IEFycmF5LmZyb20oXG4gICAgICAgICAgZS50YXJnZXQucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yQWxsKFwicFwiKVxuICAgICAgICApO1xuICAgICAgICB0YXNrc05hbWVBbmREYXRlLmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgICAgICBpZiAoZS50YXJnZXQuY2hlY2tlZCA9PT0gdHJ1ZSlcbiAgICAgICAgICAgIHRhc2suc3R5bGUudGV4dERlY29yYXRpb24gPSBcImxpbmUtdGhyb3VnaFwiO1xuICAgICAgICAgIGVsc2UgdGFzay5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9IFwibm9uZVwiO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBkZWxldGVUYXNrKCkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbi1jb250ZW50XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImRlbGV0ZS10YXNrXCIpKSB7XG4gICAgICAgIEluZm9ybWF0aW9uSG9sZGVyLnJlbW92ZVRhc2soZS50YXJnZXQucGFyZW50RWxlbWVudCk7XG4gICAgICAgIGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucmVtb3ZlKCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJkZWxldGUtdGFzay1wcm9qZWN0XCIpKSB7XG4gICAgICAgIGNvbnN0IHByb2plY3RJbmRleCA9IE51bWJlcihcbiAgICAgICAgICBlLnRhcmdldC5wYXJlbnRFbGVtZW50LmdldEF0dHJpYnV0ZShcImRhdGEtdGFzay1wcm9qZWN0XCIpXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IHRhc2tJbmRleCA9IGZpbmRUYXNrSW5kZXgoZS50YXJnZXQsIHByb2plY3RJbmRleCk7XG4gICAgICAgIGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucmVtb3ZlKCk7XG4gICAgICAgIEluZm9ybWF0aW9uSG9sZGVyLnJlbW92ZVRhc2tGcm9tUHJvamVjdChcbiAgICAgICAgICBOdW1iZXIocHJvamVjdEluZGV4KSxcbiAgICAgICAgICBOdW1iZXIodGFza0luZGV4KVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIHNob3dIb21lVGFza3MoKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ob21lXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBjaGFuZ2VUYWJOYW1lKFwiSG9tZVwiKTtcbiAgICAgIGRlbGV0ZVRhc2tzUHJvamVjdCgpO1xuICAgICAgZGlzcGxheUFsbFRhc2tzKCk7XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgc2hvd1RvZGF5VGFza3MoKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2RheVwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgY2hhbmdlVGFiTmFtZShcIlRvZGF5XCIpO1xuICAgICAgZGVsZXRlVGFza3NQcm9qZWN0KCk7XG4gICAgICBkaXNwbGF5VG9kYXlUYXNrcygpO1xuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIHNob3dXZWVrVGFza3MoKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53ZWVrXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBjaGFuZ2VUYWJOYW1lKFwiV2Vla1wiKTtcbiAgICAgIGRlbGV0ZVRhc2tzUHJvamVjdCgpO1xuICAgICAgZGlzcGxheUFsbFRhc2tzKCk7XG4gICAgICBkaXNwbGF5V2Vla1Rhc2tzKCk7XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgdXBkYXRlVGFza0xpc3QoKSB7XG4gICAgY29uc3QgdGFyZ2V0Tm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaG9tZS10YXNrc1wiKTtcbiAgICBjb25zdCBjdXJyZW50VGFiID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jdXJyZW50LXRhYlwiKTtcblxuICAgIGNvbnN0IGNvbmZpZyA9IHsgY2hpbGRMaXN0OiB0cnVlLCBzdWJ0cmVlOiB0cnVlIH07XG4gICAgY29uc3QgY2FsbGJhY2sgPSAobXV0YXRpb25MaXN0KSA9PiB7XG4gICAgICBmb3IgKGNvbnN0IG11dGF0aW9uIG9mIG11dGF0aW9uTGlzdCkge1xuICAgICAgICBpZiAobXV0YXRpb24udHlwZSA9PT0gXCJjaGlsZExpc3RcIiAmJiBtdXRhdGlvbi5hZGRlZE5vZGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICBjdXJyZW50VGFiLnRleHRDb250ZW50ID09PSBcIlRvZGF5XCIgfHxcbiAgICAgICAgICAgIGN1cnJlbnRUYWIudGV4dENvbnRlbnQgPT09IFwiV2Vla1wiXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICBkb2N1bWVudFxuICAgICAgICAgICAgICAucXVlcnlTZWxlY3RvcihgLiR7Y3VycmVudFRhYi50ZXh0Q29udGVudC50b0xvd2VyQ2FzZSgpfWApXG4gICAgICAgICAgICAgIC5jbGljaygpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKGNhbGxiYWNrKTtcbiAgICBvYnNlcnZlci5vYnNlcnZlKHRhcmdldE5vZGUsIGNvbmZpZyk7XG4gIH1cblxuICBzdGF0aWMgaW5zZXJ0UHJvamVjdCgpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RzXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcInN1Ym1pdC1wcm9qZWN0XCIpKSB7XG4gICAgICAgIGNvbnN0IG5hbWUgPSBgLSR7XG4gICAgICAgICAgZS50YXJnZXQucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKFwiZm9ybSA+IGlucHV0XCIpLnZhbHVlXG4gICAgICAgIH1gO1xuICAgICAgICBJbmZvcm1hdGlvbkhvbGRlci5hZGRQcm9qZWN0TmFtZShuYW1lKTtcbiAgICAgICAgSW5mb3JtYXRpb25Ib2xkZXIuYWRkUHJvamVjdChbXSk7XG4gICAgICAgIHRoaXMuY3JlYXRlUHJvamVjdERpdigpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGNyZWF0ZVByb2plY3REaXYoaXRlcmF0ZUZyb20gPSBJbmZvcm1hdGlvbkhvbGRlci5wcm9qZWN0cy5sZW5ndGggLSAxKSB7XG4gICAgY29uc3QgbnVtYmVyT2ZQcm9qZWN0cyA9IEluZm9ybWF0aW9uSG9sZGVyLnByb2plY3RzLmxlbmd0aDtcbiAgICBmb3IgKGxldCBpID0gaXRlcmF0ZUZyb207IGkgPCBudW1iZXJPZlByb2plY3RzOyBpKyspIHtcbiAgICAgIGlmIChudW1iZXJPZlByb2plY3RzIC0gMSA+PSAwKSB7XG4gICAgICAgIGNvbnN0IGRlbGV0ZVByb2plY3QgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgZGVsZXRlUHJvamVjdC5zcmMgPSBkZWxldGVQcm9qZWN0SWNvbjtcbiAgICAgICAgZGVsZXRlUHJvamVjdC5jbGFzc0xpc3QuYWRkKFwiZGVsZXRlLXByb2plY3RcIik7XG4gICAgICAgIGRlbGV0ZVByb2plY3Quc2V0QXR0cmlidXRlKFwiZGF0YS1wcm9qZWN0LWlkXCIsIGkpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW4tY29udGVudFwiKS5hcHBlbmRDaGlsZChkZWxldGVQcm9qZWN0KTtcblxuICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBkaXYudGV4dENvbnRlbnQgPSBJbmZvcm1hdGlvbkhvbGRlci5wcm9qZWN0TmFtZVtpXTtcbiAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0XCIpO1xuICAgICAgICBkaXYuc2V0QXR0cmlidXRlKFwiZGF0YS1wcm9qZWN0LWlkXCIsIGkpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RzXCIpLmFwcGVuZENoaWxkKGRpdik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGNoYW5nZVByb2plY3RUYWIoKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0c1wiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJwcm9qZWN0XCIpKSB7XG4gICAgICAgIGNoYW5nZVRhYk5hbWUoZS50YXJnZXQudGV4dENvbnRlbnQpO1xuICAgICAgICBjb25zdCBkZWxldGVJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5kZWxldGUtcHJvamVjdFwiKTtcbiAgICAgICAgaWYgKGRlbGV0ZUljb24gIT09IG51bGwpXG4gICAgICAgICAgZGVsZXRlSWNvbi5mb3JFYWNoKChpY29uKSA9PiB7XG4gICAgICAgICAgICBpY29uLnN0eWxlLmRpc3BsYXkgPSBcImlubGluZVwiO1xuICAgICAgICAgIH0pO1xuICAgICAgICBkZWxldGVUYXNrc1Byb2plY3QoKTtcbiAgICAgICAgY29uc3QgcHJvamVjdEluZGV4ID0gZmluZEN1cnJlbnRQcm9qZWN0SW5kZXgoKTtcbiAgICAgICAgZGlzcGxheVRhc2tzUHJvamVjdCgwLCBwcm9qZWN0SW5kZXgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGRlbGV0ZURlbGV0ZUljb24oKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaWRlYmFyXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBjb25zdCBjdXJyZW50VGFiID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jdXJyZW50LXRhYlwiKS50ZXh0Q29udGVudDtcbiAgICAgIGlmIChcbiAgICAgICAgY3VycmVudFRhYiA9PT0gXCJIb21lXCIgfHxcbiAgICAgICAgY3VycmVudFRhYiA9PT0gXCJUb2RheVwiIHx8XG4gICAgICAgIGN1cnJlbnRUYWIgPT09IFwiV2Vla1wiXG4gICAgICApIHtcbiAgICAgICAgY29uc3QgZGVsZXRlSWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZGVsZXRlLXByb2plY3RcIik7XG4gICAgICAgIGlmIChkZWxldGVJY29uICE9PSBudWxsKVxuICAgICAgICAgIGRlbGV0ZUljb24uZm9yRWFjaCgoaWNvbikgPT4ge1xuICAgICAgICAgICAgaWNvbi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZGVsZXRlUHJvamVjdCgpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW4tY29udGVudFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJkZWxldGUtcHJvamVjdFwiKSkge1xuICAgICAgICBjb25zdCBwcm9qZWN0SW5kZXggPSBmaW5kQ3VycmVudFByb2plY3RJbmRleCgpO1xuICAgICAgICBJbmZvcm1hdGlvbkhvbGRlci5yZW1vdmVQcm9qZWN0KHByb2plY3RJbmRleCk7XG4gICAgICAgIEluZm9ybWF0aW9uSG9sZGVyLnJlbW92ZVByb2plY3ROYW1lKHByb2plY3RJbmRleCk7XG4gICAgICAgIGRvY3VtZW50XG4gICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoYGRpdltkYXRhLXByb2plY3QtaWQ9XCIke3Byb2plY3RJbmRleH1cIl1gKVxuICAgICAgICAgIC5yZW1vdmUoKTtcbiAgICAgICAgZG9jdW1lbnRcbiAgICAgICAgICAucXVlcnlTZWxlY3RvcihgaW1nW2RhdGEtcHJvamVjdC1pZD1cIiR7cHJvamVjdEluZGV4fVwiXWApXG4gICAgICAgICAgLnJlbW92ZSgpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhvbWVcIikuY2xpY2soKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBpbml0aWFsaXplKCkge1xuICAgIHRoaXMuaW5zZXJ0VGFzaygpO1xuICAgIHRoaXMuc2hvd1Rhc2tJbmZvKCk7XG4gICAgdGhpcy5jbG9zZVRhc2tJbmZvKCk7XG4gICAgdGhpcy5jcm9zc1Rhc2soKTtcbiAgICB0aGlzLnNob3dIb21lVGFza3MoKTtcbiAgICB0aGlzLnNob3dUb2RheVRhc2tzKCk7XG4gICAgdGhpcy5zaG93V2Vla1Rhc2tzKCk7XG4gICAgdGhpcy5kZWxldGVUYXNrKCk7XG4gICAgdGhpcy51cGRhdGVUYXNrTGlzdCgpO1xuICAgIHRoaXMuaW5zZXJ0UHJvamVjdCgpO1xuICAgIHRoaXMuY3JlYXRlUHJvamVjdERpdigwKTtcbiAgICB0aGlzLmNoYW5nZVByb2plY3RUYWIoKTtcbiAgICB0aGlzLmRlbGV0ZURlbGV0ZUljb24oKTtcbiAgICB0aGlzLmRlbGV0ZVByb2plY3QoKTtcbiAgfVxufVxuIiwiZXhwb3J0IGNvbnN0IE1hbmFnZVByb2plY3RGb3JtID0gKCkgPT4gKHtcbiAgYWRkUHJvamVjdEJ1dHRvbjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uZXctcHJvamVjdFwiKSxcbiAgcHJvamVjdFRhYjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0c1wiKSxcblxuICBjcmVhdGVGb3JtKCkge1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgICBmb3JtLmNsYXNzTGlzdC5hZGQoXCIucHJvamVjdC1mb3JtXCIpO1xuICAgIGZvcm0uc3R5bGUuZGlzcGxheSA9IFwiZ3JpZFwiO1xuICAgIGZvcm0uYWN0aW9uID0gXCIjXCI7XG4gICAgZm9ybS5tZXRob2QgPSBcInBvc3RcIjtcbiAgICBjb25zdCBwcm9qZWN0TmFtZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIHByb2plY3ROYW1lTGFiZWwudGV4dENvbnRlbnQgPSBcIlByb2plY3QgTmFtZVwiO1xuICAgIGNvbnN0IHByb2plY3ROYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgcHJvamVjdE5hbWVJbnB1dC5yZXF1aXJlZCA9IHRydWU7XG5cbiAgICBmb3JtLmFwcGVuZENoaWxkKHByb2plY3ROYW1lTGFiZWwpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQocHJvamVjdE5hbWVJbnB1dCk7XG5cbiAgICBjb25zdCBzdWJtaXRQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBzdWJtaXRQcm9qZWN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJzdWJtaXQtcHJvamVjdFwiKTtcbiAgICBzdWJtaXRQcm9qZWN0QnV0dG9uLnRleHRDb250ZW50ID0gXCJDcmVhdGUgUHJvamVjdFwiO1xuICAgIGNvbnN0IG5vdFN1Ym1pdFByb2plY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIG5vdFN1Ym1pdFByb2plY3RCdXR0b24uY2xhc3NMaXN0LmFkZChcImNhbmNlbC1wcm9qZWN0XCIpO1xuICAgIG5vdFN1Ym1pdFByb2plY3RCdXR0b24udGV4dENvbnRlbnQgPSBcIkNhbmNlbFwiO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoc3VibWl0UHJvamVjdEJ1dHRvbik7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChub3RTdWJtaXRQcm9qZWN0QnV0dG9uKTtcblxuICAgIHRoaXMucHJvamVjdFRhYi5hcHBlbmRDaGlsZChmb3JtKTtcbiAgfSxcblxuICBzaG93UHJvamVjdEZvcm0oKSB7XG4gICAgdGhpcy5wcm9qZWN0VGFiLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcIm5ldy1wcm9qZWN0XCIpKSB7XG4gICAgICAgIHRoaXMuY3JlYXRlRm9ybSgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9LFxuXG4gIHN1Ym1pdFByb2plY3RGb3JtKCkge1xuICAgIHRoaXMucHJvamVjdFRhYi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJzdWJtaXQtcHJvamVjdFwiKSkge1xuICAgICAgICBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnJlbW92ZSgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9LFxuXG4gIGNsb3NlUHJvamVjdEZvcm0oKSB7XG4gICAgdGhpcy5wcm9qZWN0VGFiLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImNhbmNlbC1wcm9qZWN0XCIpKSB7XG4gICAgICAgIGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucmVtb3ZlKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sXG5cbiAgaW5pdGlhbGl6ZSgpIHtcbiAgICB0aGlzLnNob3dQcm9qZWN0Rm9ybSgpO1xuICAgIHRoaXMuc3VibWl0UHJvamVjdEZvcm0oKTtcbiAgICB0aGlzLmNsb3NlUHJvamVjdEZvcm0oKTtcbiAgfSxcbn0pO1xuIiwiZXhwb3J0IGNvbnN0IE1hbmFnZUZvcm0gPSAoKSA9PiAoe1xuICBhZGRUYXNrQnV0dG9uOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC10YXNrXCIpLFxuICBmb3JtOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZm9ybVwiKSxcblxuICBjbGVhckZvcm0oKSB7XG4gICAgY29uc3QgZm9ybUlucHV0cyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImZvcm0gaW5wdXRcIikpO1xuICAgIGZvcm1JbnB1dHMuZm9yRWFjaCgoaW5wdXQpID0+IHtcbiAgICAgIGlucHV0LnZhbHVlID0gXCJcIjtcbiAgICB9KTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwidGV4dGFyZWFcIikudmFsdWUgPSBcIlwiO1xuICB9LFxuXG4gIG9wZW5Gb3JtKCkge1xuICAgIHRoaXMuYWRkVGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgdGhpcy5mb3JtLnN0eWxlLmRpc3BsYXkgPSBcImdyaWRcIjtcbiAgICB9KTtcbiAgfSxcblxuICBjbG9zZUZvcm0oKSB7XG4gICAgdGhpcy5mb3JtLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgfSxcblxuICBjYW5jZWwoKSB7XG4gICAgY29uc3QgY2xvc2VGb3JtQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYW5jZWxcIik7XG4gICAgY2xvc2VGb3JtQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICB0aGlzLmNsb3NlRm9ybSgpO1xuICAgICAgdGhpcy5jbGVhckZvcm0oKTtcbiAgICB9KTtcbiAgfSxcblxuICBzdWJtaXRGb3JtKCkge1xuICAgIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3VibWl0XCIpO1xuICAgIHN1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuZm9ybS5jaGVja1ZhbGlkaXR5KCkpIHtcbiAgICAgICAgdGhpcy5jbG9zZUZvcm0oKTtcbiAgICAgICAgdGhpcy5jbGVhckZvcm0oKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KTtcbiAgfSxcblxuICBpbml0aWFsaXplKCkge1xuICAgIHRoaXMub3BlbkZvcm0oKTtcbiAgICB0aGlzLmNhbmNlbCgpO1xuICAgIHRoaXMuc3VibWl0Rm9ybSgpO1xuICB9LFxufSk7XG4iLCJleHBvcnQgZnVuY3Rpb24gZ2V0VG9kYXlEYXRlKCkge1xuICBjb25zdCBkYXRlID0gbmV3IERhdGUoKTtcbiAgY29uc3QgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcbiAgbGV0IG1vbnRoID0gZGF0ZS5nZXRNb250aCgpICsgMTtcbiAgbGV0IGRheSA9IGRhdGUuZ2V0RGF0ZSgpO1xuXG4gIGlmIChtb250aCA8IDEwKSBtb250aCA9IGAwJHttb250aH1gO1xuICBpZiAoZGF5IDwgMTApIGRheSA9IGAwJHtkYXl9YDtcblxuICByZXR1cm4gYCR7eWVhcn0tJHttb250aH0tJHtkYXl9YDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlUb2RheVRhc2tzKCkge1xuICBjb25zdCB0b2RheURhdGUgPSBnZXRUb2RheURhdGUoKTtcbiAgY29uc3QgYWxsVGFza3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRhc2stZGF0ZVwiKTtcbiAgYWxsVGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgIGlmICh0YXNrLnRleHRDb250ZW50ICE9PSB0b2RheURhdGUpXG4gICAgICB0YXNrLnBhcmVudEVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICB9KTtcbn1cbiIsImltcG9ydCB7XG4gIGRpZmZlcmVuY2VJbkNhbGVuZGFySVNPV2Vla3MsXG4gIGVuZE9mSVNPV2VlayxcbiAgcGFyc2VJU08sXG59IGZyb20gXCJkYXRlLWZucy9cIjtcblxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0V2VlaygpIHtcbiAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuICBjb25zdCBlbmRPZldlZWsgPSBlbmRPZklTT1dlZWsodG9kYXkpO1xuXG4gIGNvbnN0IHRlc3RlID0gXCIyMDIzLTA1LTIxXCI7XG4gIGNvbnN0IHJlc3VsdGFkbyA9IHBhcnNlSVNPKHRlc3RlKTtcblxuICBjb25zdCByZXN1bHQgPSBkaWZmZXJlbmNlSW5DYWxlbmRhcklTT1dlZWtzKGVuZE9mV2VlaywgcmVzdWx0YWRvKTtcblxuICBjb25zb2xlLmxvZyhyZXN1bHQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheVdlZWtUYXNrcygpIHtcbiAgY29uc3QgdG9kYXlEYXRlID0gbmV3IERhdGUoKTtcbiAgY29uc3QgZW5kT2ZXZWVrID0gZW5kT2ZJU09XZWVrKHRvZGF5RGF0ZSk7XG5cbiAgY29uc3QgYWxsVGFza3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRhc2stZGF0ZVwiKTtcbiAgYWxsVGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgIGNvbnN0IHRhc2tEdWVEYXkgPSBwYXJzZUlTTyh0YXNrLnRleHRDb250ZW50KTtcbiAgICBpZiAoZGlmZmVyZW5jZUluQ2FsZW5kYXJJU09XZWVrcyhlbmRPZldlZWssIHRhc2tEdWVEYXkpICE9PSAwKVxuICAgICAgdGFzay5wYXJlbnRFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgfSk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgcmV0dXJuIF90eXBlb2YgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBcInN5bWJvbFwiID09IHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPyBmdW5jdGlvbiAob2JqKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gIH0gOiBmdW5jdGlvbiAob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgfSwgX3R5cGVvZihvYmopO1xufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==