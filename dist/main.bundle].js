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
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: \"Abel\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"woff2\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"woff\");\n  font-style: normal;\n}\n* {\n  box-sizing: border-box;\n}\n\nbody,\nhtml {\n  font-family: \"Abel\", system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n  margin: 0;\n  padding: 0;\n  height: 100%;\n}\n\n.page-wrapper {\n  display: grid;\n  grid-template-rows: 2fr 8fr 1fr;\n  grid-template-columns: 1fr 6fr;\n  height: 100%;\n}\n\n.header > h1 {\n  font-size: 40px;\n  font-weight: 800;\n  color: #b2b8b7;\n}\n\n.header {\n  display: flex;\n  align-items: center;\n  grid-row: 1/2;\n  grid-column: 1/-1;\n  background: rgb(7, 18, 24);\n  background: linear-gradient(180deg, rgb(7, 18, 24) 25%, rgb(11, 19, 46) 50%, rgb(17, 29, 68) 75%, rgb(17, 29, 68) 100%);\n  gap: 15px;\n  padding: 0 30px;\n}\n\n.sidebar {\n  display: grid;\n  grid-row: 2/3;\n  grid-column: 1/2;\n  background-color: #b2b8b7;\n  color: #111D44;\n  align-content: start;\n  padding: 30px;\n  gap: 30px;\n  font-size: 27px;\n  font-weight: 600;\n}\n\n.sidebar > div:not(.projects) {\n  cursor: pointer;\n}\n\n.sidebar > div:hover:not(.projects) {\n  background-color: rgb(198, 209, 207);\n  border-radius: 10px;\n}\n\n.main-content {\n  display: grid;\n  grid-template-rows: auto 1fr;\n  grid-template-columns: auto 3fr 1fr 1fr;\n  grid-row: 2/3;\n  grid-column: 2/-1;\n  background-color: #dfd5d5;\n}\n\n.add-task {\n  display: inline-flex;\n  align-items: center;\n  margin: 0;\n  gap: 5px;\n  cursor: pointer;\n  margin: 20px 20px;\n  padding: 3px 6px;\n  grid-row: 1/2;\n  grid-column: 1/2;\n}\n\n.add-task > * {\n  margin: 0;\n  padding: 0;\n}\n\n.add-task:hover {\n  background-color: #b2b8b7;\n  border-radius: 8px;\n}\n\n.add-task:hover > svg {\n  transform: rotate(90deg);\n  transition: 0.4s ease-in-out;\n}\n\n.current-tab {\n  color: #111D44;\n  font-size: 30px;\n  font-weight: 600;\n  justify-self: center;\n  grid-column: 1/-1;\n  grid-row: 1/2;\n}\n\nform {\n  position: fixed;\n  display: none;\n  gap: 10px;\n  z-index: 99;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background-color: #b2b8b7;\n  color: #111D44;\n  font-weight: 500;\n  padding: 10px 20px;\n  border-radius: 10px;\n  box-shadow: 0 1px 1px;\n}\n\n.widget {\n  display: flex;\n  flex-direction: column;\n}\n\n.form-buttons {\n  display: flex;\n  justify-content: space-around;\n}\n\n.form-buttons > * {\n  cursor: pointer;\n}\n\n.form-buttons > svg:hover {\n  background-color: #c3c7c7;\n}\n\n.home-tasks {\n  display: grid;\n  grid-template-columns: 1fr 4fr 1fr;\n  grid-template-rows: repeat(auto-fit, minmax(auto, 1fr));\n  align-content: start;\n  grid-row: 2/-1;\n  grid-column: 1/-1;\n}\n\n.tasks-header {\n  display: inline-flex;\n  justify-content: space-between;\n  font-weight: 600;\n  padding: 0 10px;\n  padding-left: 40px;\n}\n\n.due {\n  padding-right: 30px;\n}\n\n.task {\n  display: flex;\n  padding: 0 10px;\n}\n\n.task-done {\n  margin-right: 10px;\n}\n\n.task-n {\n  margin-right: auto;\n  cursor: pointer;\n}\n\n.task:hover {\n  background-color: #e6dede;\n}\n\n.task-date {\n  padding-right: 10px;\n}\n\n.home-tasks > * {\n  grid-column: 2/3;\n  border-bottom: 1px solid #111D44;\n}\n\n.delete-task {\n  cursor: pointer;\n}\n\n.delete-task:hover {\n  animation: move-up 0.5s ease-in-out;\n}\n\n.info-display {\n  position: fixed;\n  display: grid;\n  grid-template-columns: auto;\n  grid-template-rows: auto;\n  width: 50%;\n  height: 50%;\n  gap: 5px;\n  z-index: 99;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background-color: #b2b8b7;\n  font-weight: 600;\n  padding: 10px 20px;\n  border-radius: 10px;\n  box-shadow: 0 1px 1px;\n  color: #111D44;\n  overflow-y: auto;\n}\n\n.close-info {\n  justify-self: end;\n  cursor: pointer;\n}\n\n.projects .new-project {\n  display: none;\n}\n.projects:hover .new-project {\n  display: block;\n  font-size: 15px;\n  padding: 10px 0;\n  padding-left: 20px;\n}\n\n.new-project:hover {\n  cursor: pointer;\n}\n\n.project-form {\n  position: fixed;\n  gap: 10px;\n  z-index: 99;\n  top: 50%;\n  left: 50%;\n  width: 200px;\n  height: 100px;\n  transform: translate(-50%, -50%);\n  background-color: #b2b8b7;\n  color: #111D44;\n  font-weight: 500;\n  padding: 10px 20px;\n  border-radius: 10px;\n  box-shadow: 0 1px 1px;\n}\n\n.submit-project,\n.cancel-project {\n  width: auto;\n  height: auto;\n  padding: 3px 9px;\n  cursor: pointer;\n  border-radius: 10px;\n}\n\n.submit-project {\n  background-color: #111D44;\n  color: #b2b8b7;\n}\n\n.submit-project:hover {\n  background-color: #2c3d74;\n  color: #a5b0ae;\n}\n\n.cancel-project {\n  background-color: #b2b8b7;\n  color: #111D44;\n}\n\n.cancel-project:hover {\n  background-color: #d4d9d8;\n  color: #152043;\n}\n\n.project {\n  cursor: pointer;\n  font-size: 16px;\n  padding-left: 15px;\n}\n\n.project:hover {\n  background-color: #d4d9d8;\n}\n\n.delete-project {\n  grid-row: 1/2;\n  grid-column: 3/4;\n  justify-self: end;\n  align-self: center;\n  cursor: pointer;\n  width: 32px;\n  height: 32px;\n}\n\n.delete-project:hover {\n  animation: move-up 0.5s ease-in-out;\n}\n\n@keyframes move-up {\n  0% {\n    transform: translateY(0);\n  }\n  50% {\n    transform: translateY(-5px);\n  }\n  100% {\n    transform: translateY(0);\n  }\n}\na {\n  text-decoration: none;\n  color: #b2b8b7;\n}\n\na:visited {\n  color: #b2b8b7;\n}\n\n.footer {\n  display: grid;\n  grid-row: -2/-1;\n  grid-column: 1/-1;\n  background-color: #111D44;\n  color: #b2b8b7;\n  padding: 0 20px;\n}\n\n@media (max-width: 500px) {\n  .main-content {\n    grid-template-rows: auto auto 1fr;\n  }\n  .current-tab {\n    grid-row: 2/3;\n  }\n  .task {\n    display: grid;\n    grid-template-rows: auto auto;\n    grid-template-columns: auto auto;\n    padding: 0 10px;\n  }\n  .home-tasks {\n    grid-row: 3/-1;\n  }\n  .tasks-header {\n    padding: 0;\n  }\n  .task-date {\n    padding-right: 0;\n    justify-self: end;\n  }\n  .task > img {\n    justify-self: end;\n    grid-column: 2/-1;\n    padding-right: 20px;\n    padding-bottom: 3px;\n  }\n  .info-display {\n    width: 50%;\n    height: 50%;\n  }\n  .due {\n    padding-right: 0;\n  }\n  .task > * {\n    font-size: 12px;\n  }\n}", "",{"version":3,"sources":["webpack://./src/styles.scss"],"names":[],"mappings":"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","sourcesContent":["@font-face {\r\n  font-family: 'Abel';\r\n  src: url('./assets/fonts/abel-regular-webfont.woff2') format('woff2'),\r\n    url('./assets/fonts/abel-regular-webfont.woff') format('woff');\r\n    font-style: normal;\r\n}\r\n\r\n$primary-color: #111D44;\r\n$secondary-color: #b2b8b7;\r\n$complementary-color: #000;\r\n$yellow: #ffc600;\r\n$black: #272727;\r\n\r\n* {\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody,\r\nhtml {\r\n  font-family: 'Abel', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\r\n  margin: 0;\r\n  padding: 0;\r\n  height: 100%;\r\n}\r\n\r\n.page-wrapper {\r\n  display: grid;\r\n  grid-template-rows: 2fr 8fr 1fr;\r\n  grid-template-columns: 1fr 6fr;\r\n  height: 100%;\r\n}\r\n \r\n.header > h1 {\r\n  font-size: 40px;\r\n  font-weight: 800;\r\n  color: $secondary-color;\r\n}\r\n\r\n.header {\r\n  display: flex;\r\n  align-items: center;\r\n  grid-row: 1 / 2;\r\n  grid-column: 1 / -1;\r\n  background: rgb(7,18,24);\r\n  background: linear-gradient(180deg, rgba(7,18,24,1) 25%, rgba(11,19,46,1) 50%, rgba(17,29,68,1) 75%, rgba(17,29,68,1) 100%);\r\n  gap: 15px;\r\n  padding: 0 30px;\r\n}\r\n\r\n.sidebar {\r\n  display: grid;\r\n  grid-row: 2 / 3;\r\n  grid-column: 1 / 2;\r\n  background-color: $secondary-color;\r\n  color: $primary-color;\r\n  align-content: start;\r\n  padding: 30px;\r\n  gap: 30px;\r\n  font-size: 27px;\r\n  font-weight: 600;\r\n}\r\n\r\n.sidebar > div:not(.projects) {\r\n  cursor: pointer;\r\n}\r\n\r\n.sidebar > div:hover:not(.projects) {\r\n  background-color: rgb(198, 209, 207);\r\n  border-radius: 10px;\r\n}\r\n\r\n.main-content {\r\n  display: grid;\r\n  grid-template-rows: auto 1fr;\r\n  grid-template-columns: auto 3fr 1fr 1fr;\r\n  grid-row: 2 / 3;\r\n  grid-column: 2 / -1;\r\n  background-color: #dfd5d5;\r\n}\r\n\r\n.add-task {\r\n  display: inline-flex;\r\n  align-items: center;\r\n  margin: 0;\r\n  gap: 5px;\r\n  cursor: pointer;\r\n  margin: 20px 20px;\r\n  padding: 3px 6px;\r\n  grid-row: 1 / 2;\r\n  grid-column: 1 / 2;\r\n}\r\n\r\n.add-task > * {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n.add-task:hover {\r\n  background-color: $secondary-color;\r\n  border-radius: 8px;\r\n}\r\n\r\n.add-task:hover > svg {\r\n  transform: rotate(90deg);\r\n  transition: 0.4s ease-in-out;\r\n}\r\n\r\n.current-tab {\r\n  color: $primary-color;\r\n  font-size: 30px;\r\n  font-weight: 600;\r\n  justify-self: center;\r\n  grid-column: 1 / -1;\r\n  grid-row: 1 / 2;\r\n}\r\n\r\nform {\r\n  position: fixed;\r\n  display: none;\r\n  gap: 10px;\r\n  z-index: 99;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  background-color: $secondary-color;\r\n  color: $primary-color;\r\n  font-weight: 500;\r\n  padding: 10px 20px;\r\n  border-radius: 10px;\r\n  box-shadow: 0 1px 1px;\r\n}\r\n\r\n.widget {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.form-buttons {\r\n  display: flex;\r\n  justify-content: space-around;\r\n}\r\n\r\n.form-buttons > * {\r\n  cursor: pointer;\r\n}\r\n\r\n.form-buttons > svg:hover {\r\n  background-color: #c3c7c7;\r\n}\r\n\r\n.home-tasks {\r\n  display: grid;\r\n  grid-template-columns: 1fr 4fr 1fr;\r\n  grid-template-rows: repeat(auto-fit, minmax(auto, 1fr));\r\n  align-content: start;\r\n  grid-row: 2 / -1;\r\n  grid-column: 1 / -1;\r\n}\r\n\r\n.tasks-header {\r\n  display: inline-flex;\r\n  justify-content: space-between;\r\n  font-weight: 600;\r\n  padding: 0 10px;\r\n  padding-left: 40px;\r\n}\r\n\r\n\r\n.due {\r\n  padding-right: 30px;\r\n}\r\n\r\n.task {\r\n  display: flex;\r\n  padding: 0 10px;\r\n}\r\n\r\n.task-done {\r\n  margin-right: 10px;\r\n}\r\n\r\n.task-n {\r\n  margin-right: auto;\r\n  cursor: pointer;\r\n}\r\n\r\n.task:hover {\r\n  background-color: #e6dede;\r\n}\r\n\r\n.task-date {\r\n  padding-right: 10px;\r\n}\r\n\r\n.home-tasks > * {\r\n  grid-column: 2 / 3;\r\n  border-bottom: 1px solid $primary-color;\r\n}\r\n\r\n.delete-task {\r\n  cursor: pointer;\r\n}\r\n\r\n.delete-task:hover {\r\n  animation: move-up 0.5s ease-in-out;\r\n}\r\n\r\n.info-display {\r\n  position: fixed;\r\n  display: grid;\r\n  grid-template-columns: auto;\r\n  grid-template-rows: auto;\r\n  width: 50%;\r\n  height: 50%;\r\n  gap: 5px;\r\n  z-index: 99;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  background-color: $secondary-color;\r\n  font-weight: 600;\r\n  padding: 10px 20px;\r\n  border-radius: 10px;\r\n  box-shadow: 0 1px 1px;\r\n  color: $primary-color;\r\n  overflow-y: auto;\r\n}\r\n\r\n.close-info {\r\n  justify-self: end;\r\n  cursor: pointer;\r\n}\r\n\r\n.projects {\r\n  .new-project {\r\n    display: none;\r\n  }\r\n\r\n  &:hover .new-project {\r\n    display: block;\r\n    font-size: 15px;\r\n    padding: 10px 0;\r\n    padding-left: 20px;\r\n  }\r\n}\r\n\r\n.new-project:hover {\r\n  cursor: pointer;\r\n}\r\n\r\n.project-form {\r\n  position: fixed;\r\n  gap: 10px;\r\n  z-index: 99;\r\n  top: 50%;\r\n  left: 50%;\r\n  width: clamp(100px, 200px, 300px);\r\n  height: clamp(50px, 100px, 150px);\r\n  transform: translate(-50%, -50%);\r\n  background-color: $secondary-color;\r\n  color: $primary-color;\r\n  font-weight: 500;\r\n  padding: 10px 20px;\r\n  border-radius: 10px;\r\n  box-shadow: 0 1px 1px;\r\n}\r\n\r\n.submit-project,\r\n.cancel-project {\r\n  width: auto;\r\n  height: auto;\r\n  padding: 3px 9px;\r\n  cursor: pointer;\r\n  border-radius: 10px;\r\n}\r\n\r\n.submit-project {\r\n  background-color: $primary-color;\r\n  color: $secondary-color;\r\n}\r\n\r\n.submit-project:hover {\r\n  background-color: #2c3d74;\r\n  color: #a5b0ae;\r\n}\r\n\r\n.cancel-project {\r\n  background-color: $secondary-color;\r\n  color: $primary-color;\r\n}\r\n\r\n.cancel-project:hover {\r\n  background-color: #d4d9d8;\r\n  color: #152043;\r\n}\r\n\r\n.project {\r\n  cursor: pointer;\r\n  font-size: 16px;\r\n  padding-left: 15px;\r\n}\r\n\r\n.project:hover {\r\n  background-color: #d4d9d8;\r\n}\r\n\r\n.delete-project {\r\n  grid-row: 1 / 2;\r\n  grid-column: 3 /4;\r\n  justify-self: end;\r\n  align-self: center;\r\n  cursor: pointer;\r\n  width: 32px;\r\n  height: 32px;\r\n}\r\n\r\n.delete-project:hover {\r\n  animation: move-up 0.5s ease-in-out;\r\n}\r\n\r\n\r\n@keyframes move-up {\r\n  0% {\r\n    transform: translateY(0);\r\n  }\r\n  50% {\r\n    transform: translateY(-5px);\r\n  }\r\n  100% {\r\n    transform: translateY(0);\r\n  }\r\n}\r\n\r\n\r\na {\r\n  text-decoration: none;\r\n  color: $secondary-color;\r\n}\r\n\r\na:visited{\r\n  color: $secondary-color;\r\n}\r\n\r\n.footer {\r\n  display: grid;\r\n  grid-row: -2 / -1;\r\n  grid-column: 1 / -1;\r\n  background-color: $primary-color;\r\n  color: $secondary-color;\r\n  padding: 0 20px;\r\n}\r\n\r\n@media (max-width: 500px) {\r\n  .main-content {\r\n    grid-template-rows: auto auto 1fr;\r\n  }\r\n\r\n  .current-tab {\r\n    grid-row: 2 / 3;\r\n  }\r\n\r\n  .task {\r\n    display: grid;\r\n    grid-template-rows: auto auto;\r\n    grid-template-columns: auto auto;\r\n    padding: 0 10px;\r\n  }\r\n\r\n  .home-tasks {\r\n    grid-row: 3 / -1;\r\n  }\r\n\r\n  .tasks-header {\r\n    padding: 0;\r\n  }\r\n\r\n  .task-date {\r\n    padding-right: 0;\r\n    justify-self: end;\r\n  }\r\n\r\n  .task > img {\r\n    justify-self: end;\r\n    grid-column: 2 / -1;\r\n    padding-right: 20px;\r\n    padding-bottom: 3px;\r\n  }\r\n\r\n  .info-display {\r\n    width: 50%;\r\n    height: 50%;\r\n  }\r\n\r\n  .due {\r\n    padding-right: 0;\r\n  }\r\n  \r\n  .task > * {\r\n    font-size: 12px;\r\n  }\r\n}"],"sourceRoot":""}]);
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
/* harmony export */   "displayAllTasks": () => (/* binding */ displayAllTasks),
/* harmony export */   "displayTasks": () => (/* binding */ displayTasks),
/* harmony export */   "removeAllTasks": () => (/* binding */ removeAllTasks)
/* harmony export */ });
/* harmony import */ var _informationholder_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./informationholder.js */ "./src/informationholder.js");
/* harmony import */ var _assets_icons_delete_icon_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/icons/delete-icon.svg */ "./src/assets/icons/delete-icon.svg");
/* harmony import */ var _assets_icons_close_info_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/icons/close-info.svg */ "./src/assets/icons/close-info.svg");





function displayTasks(iterateFrom = _informationholder_js__WEBPACK_IMPORTED_MODULE_0__.InformationHolder.tasks.length -1) {
  const homeTasks = document.querySelector('.home-tasks');
  for (let i = iterateFrom; i < _informationholder_js__WEBPACK_IMPORTED_MODULE_0__.InformationHolder.tasks.length; i++) {
    const div = document.createElement('div');
    div.classList.add('task');
    div.setAttribute('id', i);

    const taskDone = document.createElement('input');
    taskDone.type = 'checkbox';
    taskDone.classList.add('task-done');
    div.appendChild(taskDone);

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
  
  const priorityColor = selectPriorityBorder(_informationholder_js__WEBPACK_IMPORTED_MODULE_0__.InformationHolder.tasks[arrayIndex].priority);
  infoDisplay.style.border = `2px solid ${priorityColor}`;
  taskPriority.style.color = priorityColor;

  infoDisplay.appendChild(closeInfo);
  infoDisplay.appendChild(taskName);
  infoDisplay.appendChild(taskDescription);
  infoDisplay.appendChild(taskDate);
  infoDisplay.appendChild(taskPriority);

  document.querySelector('.main-content').appendChild(infoDisplay);
}

function selectPriorityBorder(priority) {
  if (priority === 'low') return '#2d7bd2';
  if (priority === 'medium') return '#ffc600';
  return '#ff0018';
}

function displayAllTasks() {
  const allTasks = document.querySelectorAll('.task-date');
  allTasks.forEach(task => {
    task.parentElement.style.display = 'flex';
  });
}

function removeAllTasks() {
  const allTasks = document.querySelectorAll('.home-tasks > :not(.tasks-header)');
  allTasks.forEach(task => task.remove());
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

function changeTabName(name) {
  const currentTab = document.querySelector('.current-tab');
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

if (JSON.parse(localStorage.getItem('tasks')).length > 0) {
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
  static tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  static projects = JSON.parse(localStorage.getItem('project')) || [];
  static projectName = JSON.parse(localStorage.getItem('projectName')) || [];

  
  static addTask(someTask) {
    this.tasks.push(someTask);
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  static removeTask(aTask) {
    const taskIndex = Number(aTask.id);
    this.tasks.splice(taskIndex, 1);
    this.#adjustId(taskIndex);
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  static #adjustId(deletedId) {
    const divs = document.querySelectorAll(".task");
    if (divs.length > 0) {
      divs.forEach(div => {
        if (div.id > deletedId) {
          const currentId = parseInt(div.id.match(/\d+/)[0]);
          div.id = div.id.replace(currentId, currentId - 1);
        }
      });
    }
  }

  static addProject(someProject) {
    this.projects.push(someProject);
    localStorage.setItem('project', JSON.stringify(this.projects));
  }

/*   static removeProject(aProject) {
    const projectIndex = Number(aTask.id);
    this.projects.splice(projectIndex, 1);
    this.#adjustId(taskIndex);
    localStorage.setItem('project', JSON.stringify(this.projects));
  } */

  static addProjectName(someProjectName) {
    this.projectName.push(someProjectName);
    localStorage.setItem('projectName', JSON.stringify(this.projectName));
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









class MediatorDOM {
  static insertTask() {
    document.querySelector('.submit').addEventListener('click', () => {
      if (document.querySelector('form').checkValidity()) {
        _informationholder_js__WEBPACK_IMPORTED_MODULE_2__.InformationHolder.addTask((0,_createtask_js__WEBPACK_IMPORTED_MODULE_1__.createTask)());
        (0,_displaytasks_js__WEBPACK_IMPORTED_MODULE_3__.displayTasks)();
      }
    });
  };

  static showTaskInfo() {
    document.querySelector('.main-content').addEventListener('click', (e) => {
      if (e.target.classList.contains('task-n')) {
        (0,_displaytasks_js__WEBPACK_IMPORTED_MODULE_3__.displayAllTaskInfo)(Number(e.target.parentElement.id));
      }
    });
  };

  static closeTaskInfo() {
    document.querySelector('.main-content').addEventListener('click', (e) => {
      if (e.target.classList.contains('close-info')) e.target.parentElement.remove();
    });
  }

  static crossTask() {
    document.querySelector('.main-content').addEventListener('click', (e) => {
      if (e.target.classList.contains('task-done')) {
        const tasksNameAndDate = Array.from(e.target.parentNode.querySelectorAll('p'));
        tasksNameAndDate.forEach((task) => {
          if (e.target.checked === true) task.style.textDecoration = 'line-through';
          else task.style.textDecoration = 'none';
        })
      }
    });
  }

  static deleteTask() {
    document.querySelector('.main-content').addEventListener('click', (e) => {
      if (e.target.classList.contains('delete-task')) {
        _informationholder_js__WEBPACK_IMPORTED_MODULE_2__.InformationHolder.removeTask(e.target.parentElement);
        e.target.parentElement.remove();
      }
    });
  };

  static showHomeTasks() {
    document.querySelector('.home').addEventListener('click', () => {
      (0,_header_js__WEBPACK_IMPORTED_MODULE_0__.changeTabName)('Home');
      (0,_displaytasks_js__WEBPACK_IMPORTED_MODULE_3__.displayAllTasks)();
    });
  }
 
  static showTodayTasks() {
    document.querySelector('.today').addEventListener('click', () => {
      (0,_header_js__WEBPACK_IMPORTED_MODULE_0__.changeTabName)('Today');
      (0,_todaytasks_js__WEBPACK_IMPORTED_MODULE_4__.displayTodayTasks)();
    });
  }

  static showWeekTasks() {
    document.querySelector('.week').addEventListener('click', () => {
      (0,_header_js__WEBPACK_IMPORTED_MODULE_0__.changeTabName)('Week');
      (0,_displaytasks_js__WEBPACK_IMPORTED_MODULE_3__.displayAllTasks)();
      (0,_weektasks_js__WEBPACK_IMPORTED_MODULE_5__.displayWeekTasks)();
    });
  }


  static updateTaskList() {
    const targetNode = document.querySelector('.home-tasks');
    const currentTab = document.querySelector('.current-tab');

    const config = {childList: true, subtree: true };
    const callback = (mutationList) => {
      for (const mutation of mutationList) {
        if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
          if (currentTab.textContent === 'Today' || currentTab.textContent === 'Week') {
            document.querySelector(`.${currentTab.textContent.toLowerCase()}`).click();
          }
        }
      }
    };

    const observer = new MutationObserver(callback);
    observer.observe(targetNode, config);
  }


  static insertProject() {
    document.querySelector('.projects').addEventListener('click', (e) => {
      if (e.target.classList.contains('submit-project')) {
        const name = `-${e.target.parentNode.querySelector('form > input').value}`;
        _informationholder_js__WEBPACK_IMPORTED_MODULE_2__.InformationHolder.addProjectName(name);
        _informationholder_js__WEBPACK_IMPORTED_MODULE_2__.InformationHolder.addProject([]);
        this.createProjectDiv();
      }
    });
  }

  static createProjectDiv() {
    const numberOfProjects = _informationholder_js__WEBPACK_IMPORTED_MODULE_2__.InformationHolder.projects.length;
    _informationholder_js__WEBPACK_IMPORTED_MODULE_2__.InformationHolder.projectName.forEach((project) => {
      const div = document.createElement('div');
      div.textContent = project;
      div.classList.add('project');
      div.setAttribute('data-project-id', numberOfProjects - 1);
      document.querySelector('.projects').appendChild(div);
    });
  }

  static changeProjectTab() {
    document.querySelector('.projects').addEventListener('click', (e) => {
      if (e.target.classList.contains('project')) {
        (0,_header_js__WEBPACK_IMPORTED_MODULE_0__.changeTabName)(e.target.textContent);
        const deleteProject = new Image();
        deleteProject.src = _assets_icons_delete_project_svg__WEBPACK_IMPORTED_MODULE_6__;
        deleteProject.classList.add('delete-project');
        document.querySelector('.main-content').appendChild(deleteProject);
      }
    });
  }

  static deleteDeleteIcon() {
    document.querySelector('.sidebar').addEventListener('click', () => {
      const currentTab = document.querySelector('.current-tab').textContent;
      if (currentTab === 'Home' || currentTab === 'Today' || currentTab === 'Week') {
        const deleteIcon = document.querySelector('.delete-project');
      if (deleteIcon !== null) deleteIcon.remove();
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
    this.createProjectDiv();
    this.changeProjectTab();
    this.deleteDeleteIcon();
  }
};


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
  addProjectButton: document.querySelector('.new-project'),
  projectTab: document.querySelector('.projects'),

  createForm() {
    const form = document.createElement('form');
    form.classList.add('.project-form');
    form.style.display = 'grid';
    form.action = '#';
    form.method = 'post';
    const projectNameLabel = document.createElement('label');
    projectNameLabel.textContent = 'Project Name';
    const projectNameInput = document.createElement('input');
    projectNameInput.required = true;
  

    form.appendChild(projectNameLabel);
    form.appendChild(projectNameInput);

    const submitProjectButton = document.createElement('button');
    submitProjectButton.classList.add('submit-project')
    submitProjectButton.textContent = 'Create Project';
    const notSubmitProjectButton = document.createElement('button');
    notSubmitProjectButton.classList.add('cancel-project');
    notSubmitProjectButton.textContent = 'Cancel';
    form.appendChild(submitProjectButton);
    form.appendChild(notSubmitProjectButton);

    this.projectTab.appendChild(form);
  },

  showProjectForm() {
    this.projectTab.addEventListener('click', (e) => {
      if (e.target.classList.contains('new-project')) {
        this.createForm();
      }
    })
  },

  submitProjectForm() {
    this.projectTab.addEventListener('click', (e) => {
      if (e.target.classList.contains('submit-project')) {
        e.target.parentElement.remove();
      }
    })
  },

  closeProjectForm() {
    this.projectTab.addEventListener('click', (e) => {
      if (e.target.classList.contains('cancel-project')) {
        e.target.parentElement.remove();
      }
    })
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
  const allTasks = document.querySelectorAll('.task-date');
  allTasks.forEach(task => {
    if (task.textContent !== todayDate) task.parentElement.style.display = 'none';
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
/* harmony import */ var date_fns___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns/ */ "./node_modules/date-fns/esm/endOfISOWeek/index.js");
/* harmony import */ var date_fns___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns/ */ "./node_modules/date-fns/esm/parseISO/index.js");
/* harmony import */ var date_fns___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns/ */ "./node_modules/date-fns/esm/differenceInCalendarISOWeeks/index.js");
/* harmony import */ var _todaytasks_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todaytasks.js */ "./src/todaytasks.js");




function getWeek() {
  const today = new Date();
  const endOfWeek = (0,date_fns___WEBPACK_IMPORTED_MODULE_1__["default"])(today);

  const teste = '2023-05-21';
  const resultado = (0,date_fns___WEBPACK_IMPORTED_MODULE_2__["default"])(teste);

  const result = (0,date_fns___WEBPACK_IMPORTED_MODULE_3__["default"])(
    endOfWeek,
    resultado
  )

  console.log(result);
}


function displayWeekTasks() {
  const todayDate = new Date();
  const endOfWeek = (0,date_fns___WEBPACK_IMPORTED_MODULE_1__["default"])(todayDate);

  const allTasks = document.querySelectorAll('.task-date');
  allTasks.forEach(task => {
    const taskDueDay = (0,date_fns___WEBPACK_IMPORTED_MODULE_2__["default"])(task.textContent);
    if ((0,date_fns___WEBPACK_IMPORTED_MODULE_3__["default"])(endOfWeek, taskDueDay) !== 0) task.parentElement.style.display = 'none';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGVdLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUNPO0FBQ2hHLDRDQUE0QywrSkFBNEQ7QUFDeEcsNENBQTRDLDZKQUEyRDtBQUN2Ryw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBLHNEQUFzRCwwQkFBMEIsNklBQTZJLHVCQUF1QixHQUFHLEtBQUssMkJBQTJCLEdBQUcsaUJBQWlCLHdLQUF3SyxjQUFjLGVBQWUsaUJBQWlCLEdBQUcsbUJBQW1CLGtCQUFrQixvQ0FBb0MsbUNBQW1DLGlCQUFpQixHQUFHLGtCQUFrQixvQkFBb0IscUJBQXFCLG1CQUFtQixHQUFHLGFBQWEsa0JBQWtCLHdCQUF3QixrQkFBa0Isc0JBQXNCLCtCQUErQiw0SEFBNEgsY0FBYyxvQkFBb0IsR0FBRyxjQUFjLGtCQUFrQixrQkFBa0IscUJBQXFCLDhCQUE4QixtQkFBbUIseUJBQXlCLGtCQUFrQixjQUFjLG9CQUFvQixxQkFBcUIsR0FBRyxtQ0FBbUMsb0JBQW9CLEdBQUcseUNBQXlDLHlDQUF5Qyx3QkFBd0IsR0FBRyxtQkFBbUIsa0JBQWtCLGlDQUFpQyw0Q0FBNEMsa0JBQWtCLHNCQUFzQiw4QkFBOEIsR0FBRyxlQUFlLHlCQUF5Qix3QkFBd0IsY0FBYyxhQUFhLG9CQUFvQixzQkFBc0IscUJBQXFCLGtCQUFrQixxQkFBcUIsR0FBRyxtQkFBbUIsY0FBYyxlQUFlLEdBQUcscUJBQXFCLDhCQUE4Qix1QkFBdUIsR0FBRywyQkFBMkIsNkJBQTZCLGlDQUFpQyxHQUFHLGtCQUFrQixtQkFBbUIsb0JBQW9CLHFCQUFxQix5QkFBeUIsc0JBQXNCLGtCQUFrQixHQUFHLFVBQVUsb0JBQW9CLGtCQUFrQixjQUFjLGdCQUFnQixhQUFhLGNBQWMscUNBQXFDLDhCQUE4QixtQkFBbUIscUJBQXFCLHVCQUF1Qix3QkFBd0IsMEJBQTBCLEdBQUcsYUFBYSxrQkFBa0IsMkJBQTJCLEdBQUcsbUJBQW1CLGtCQUFrQixrQ0FBa0MsR0FBRyx1QkFBdUIsb0JBQW9CLEdBQUcsK0JBQStCLDhCQUE4QixHQUFHLGlCQUFpQixrQkFBa0IsdUNBQXVDLDREQUE0RCx5QkFBeUIsbUJBQW1CLHNCQUFzQixHQUFHLG1CQUFtQix5QkFBeUIsbUNBQW1DLHFCQUFxQixvQkFBb0IsdUJBQXVCLEdBQUcsVUFBVSx3QkFBd0IsR0FBRyxXQUFXLGtCQUFrQixvQkFBb0IsR0FBRyxnQkFBZ0IsdUJBQXVCLEdBQUcsYUFBYSx1QkFBdUIsb0JBQW9CLEdBQUcsaUJBQWlCLDhCQUE4QixHQUFHLGdCQUFnQix3QkFBd0IsR0FBRyxxQkFBcUIscUJBQXFCLHFDQUFxQyxHQUFHLGtCQUFrQixvQkFBb0IsR0FBRyx3QkFBd0Isd0NBQXdDLEdBQUcsbUJBQW1CLG9CQUFvQixrQkFBa0IsZ0NBQWdDLDZCQUE2QixlQUFlLGdCQUFnQixhQUFhLGdCQUFnQixhQUFhLGNBQWMscUNBQXFDLDhCQUE4QixxQkFBcUIsdUJBQXVCLHdCQUF3QiwwQkFBMEIsbUJBQW1CLHFCQUFxQixHQUFHLGlCQUFpQixzQkFBc0Isb0JBQW9CLEdBQUcsNEJBQTRCLGtCQUFrQixHQUFHLGdDQUFnQyxtQkFBbUIsb0JBQW9CLG9CQUFvQix1QkFBdUIsR0FBRyx3QkFBd0Isb0JBQW9CLEdBQUcsbUJBQW1CLG9CQUFvQixjQUFjLGdCQUFnQixhQUFhLGNBQWMsaUJBQWlCLGtCQUFrQixxQ0FBcUMsOEJBQThCLG1CQUFtQixxQkFBcUIsdUJBQXVCLHdCQUF3QiwwQkFBMEIsR0FBRyx1Q0FBdUMsZ0JBQWdCLGlCQUFpQixxQkFBcUIsb0JBQW9CLHdCQUF3QixHQUFHLHFCQUFxQiw4QkFBOEIsbUJBQW1CLEdBQUcsMkJBQTJCLDhCQUE4QixtQkFBbUIsR0FBRyxxQkFBcUIsOEJBQThCLG1CQUFtQixHQUFHLDJCQUEyQiw4QkFBOEIsbUJBQW1CLEdBQUcsY0FBYyxvQkFBb0Isb0JBQW9CLHVCQUF1QixHQUFHLG9CQUFvQiw4QkFBOEIsR0FBRyxxQkFBcUIsa0JBQWtCLHFCQUFxQixzQkFBc0IsdUJBQXVCLG9CQUFvQixnQkFBZ0IsaUJBQWlCLEdBQUcsMkJBQTJCLHdDQUF3QyxHQUFHLHdCQUF3QixRQUFRLCtCQUErQixLQUFLLFNBQVMsa0NBQWtDLEtBQUssVUFBVSwrQkFBK0IsS0FBSyxHQUFHLEtBQUssMEJBQTBCLG1CQUFtQixHQUFHLGVBQWUsbUJBQW1CLEdBQUcsYUFBYSxrQkFBa0Isb0JBQW9CLHNCQUFzQiw4QkFBOEIsbUJBQW1CLG9CQUFvQixHQUFHLCtCQUErQixtQkFBbUIsd0NBQXdDLEtBQUssa0JBQWtCLG9CQUFvQixLQUFLLFdBQVcsb0JBQW9CLG9DQUFvQyx1Q0FBdUMsc0JBQXNCLEtBQUssaUJBQWlCLHFCQUFxQixLQUFLLG1CQUFtQixpQkFBaUIsS0FBSyxnQkFBZ0IsdUJBQXVCLHdCQUF3QixLQUFLLGlCQUFpQix3QkFBd0Isd0JBQXdCLDBCQUEwQiwwQkFBMEIsS0FBSyxtQkFBbUIsaUJBQWlCLGtCQUFrQixLQUFLLFVBQVUsdUJBQXVCLEtBQUssZUFBZSxzQkFBc0IsS0FBSyxHQUFHLE9BQU8sa0ZBQWtGLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFdBQVcsWUFBWSxRQUFRLEtBQUssVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsV0FBVyxhQUFhLGFBQWEsWUFBWSxVQUFVLFVBQVUsVUFBVSxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxhQUFhLGFBQWEsTUFBTSxLQUFLLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsYUFBYSxhQUFhLFlBQVksV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFdBQVcsVUFBVSxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsYUFBYSxhQUFhLFdBQVcsV0FBVyxXQUFXLFdBQVcsWUFBWSxNQUFNLEtBQUssV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsVUFBVSxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsYUFBYSxhQUFhLFlBQVksV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLFFBQVEsS0FBSyxXQUFXLFVBQVUsTUFBTSxLQUFLLGFBQWEsYUFBYSxRQUFRLEtBQUssV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsV0FBVyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUs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O0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFD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QUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLG9GQUFpQztBQUM5RCxJQUFJLHdGQUFxQztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHlEQUFhO0FBQ3JCO0FBQ0EsNEJBQTRCLDZEQUFpQjtBQUM3QztBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUM3Sk87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7QUM3RE07QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDaERNO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixNQUFNO0FBQ3BDLDBCQUEwQixJQUFJO0FBQzlCO0FBQ0EsWUFBWSxLQUFLLEdBQUcsTUFBTSxHQUFHLElBQUk7QUFDakM7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25CMEY7QUFDN0M7QUFDN0M7QUFDQTtBQUNPO0FBQ1A7QUFDQSxvQkFBb0IscURBQVk7QUFDaEM7QUFDQTtBQUNBLG9CQUFvQixxREFBUTtBQUM1QjtBQUNBLGlCQUFpQixxREFBNEI7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQSxvQkFBb0IscURBQVk7QUFDaEM7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHFEQUFRO0FBQy9CLFFBQVEscURBQTRCO0FBQ3BDLEdBQUc7QUFDSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3QmU7QUFDZjs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsR0FBRztBQUNIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlcy5zY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZGVmYXVsdE9wdGlvbnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2dldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vY29uc3RhbnRzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vZGlmZmVyZW5jZUluQ2FsZW5kYXJJU09XZWVrcy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2VuZE9mSVNPV2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2VuZE9mV2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3BhcnNlSVNPL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vc3RhcnRPZklTT1dlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9zdGFydE9mV2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3RvRGF0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGVzLnNjc3M/YTYwOSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jcmVhdGV0YXNrLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9kaXNwbGF5dGFza3MuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2hlYWRlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZm9ybWF0aW9uaG9sZGVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tZWRpYXRvcmRvbS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcHJvamVjdGZvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Rhc2tmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90b2RheXRhc2tzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy93ZWVrdGFza3MuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3R5cGVvZi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvZm9udHMvYWJlbC1yZWd1bGFyLXdlYmZvbnQud29mZjJcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9mb250cy9hYmVsLXJlZ3VsYXItd2ViZm9udC53b2ZmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJBYmVsXFxcIjtcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSBmb3JtYXQoXFxcIndvZmYyXFxcIiksIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIikgZm9ybWF0KFxcXCJ3b2ZmXFxcIik7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcbioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSxcXG5odG1sIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQWJlbFxcXCIsIHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcXFwiU2Vnb2UgVUlcXFwiLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsIFxcXCJPcGVuIFNhbnNcXFwiLCBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLCBzYW5zLXNlcmlmO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLnBhZ2Utd3JhcHBlciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyZnIgOGZyIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDZmcjtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLmhlYWRlciA+IGgxIHtcXG4gIGZvbnQtc2l6ZTogNDBweDtcXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XFxuICBjb2xvcjogI2IyYjhiNztcXG59XFxuXFxuLmhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdyaWQtcm93OiAxLzI7XFxuICBncmlkLWNvbHVtbjogMS8tMTtcXG4gIGJhY2tncm91bmQ6IHJnYig3LCAxOCwgMjQpO1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgcmdiKDcsIDE4LCAyNCkgMjUlLCByZ2IoMTEsIDE5LCA0NikgNTAlLCByZ2IoMTcsIDI5LCA2OCkgNzUlLCByZ2IoMTcsIDI5LCA2OCkgMTAwJSk7XFxuICBnYXA6IDE1cHg7XFxuICBwYWRkaW5nOiAwIDMwcHg7XFxufVxcblxcbi5zaWRlYmFyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXJvdzogMi8zO1xcbiAgZ3JpZC1jb2x1bW46IDEvMjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNiMmI4Yjc7XFxuICBjb2xvcjogIzExMUQ0NDtcXG4gIGFsaWduLWNvbnRlbnQ6IHN0YXJ0O1xcbiAgcGFkZGluZzogMzBweDtcXG4gIGdhcDogMzBweDtcXG4gIGZvbnQtc2l6ZTogMjdweDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbi5zaWRlYmFyID4gZGl2Om5vdCgucHJvamVjdHMpIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnNpZGViYXIgPiBkaXY6aG92ZXI6bm90KC5wcm9qZWN0cykge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5OCwgMjA5LCAyMDcpO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuLm1haW4tY29udGVudCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAzZnIgMWZyIDFmcjtcXG4gIGdyaWQtcm93OiAyLzM7XFxuICBncmlkLWNvbHVtbjogMi8tMTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkZmQ1ZDU7XFxufVxcblxcbi5hZGQtdGFzayB7XFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW46IDA7XFxuICBnYXA6IDVweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG1hcmdpbjogMjBweCAyMHB4O1xcbiAgcGFkZGluZzogM3B4IDZweDtcXG4gIGdyaWQtcm93OiAxLzI7XFxuICBncmlkLWNvbHVtbjogMS8yO1xcbn1cXG5cXG4uYWRkLXRhc2sgPiAqIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi5hZGQtdGFzazpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjJiOGI3O1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbn1cXG5cXG4uYWRkLXRhc2s6aG92ZXIgPiBzdmcge1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xcbiAgdHJhbnNpdGlvbjogMC40cyBlYXNlLWluLW91dDtcXG59XFxuXFxuLmN1cnJlbnQtdGFiIHtcXG4gIGNvbG9yOiAjMTExRDQ0O1xcbiAgZm9udC1zaXplOiAzMHB4O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgZ3JpZC1jb2x1bW46IDEvLTE7XFxuICBncmlkLXJvdzogMS8yO1xcbn1cXG5cXG5mb3JtIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBnYXA6IDEwcHg7XFxuICB6LWluZGV4OiA5OTtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjJiOGI3O1xcbiAgY29sb3I6ICMxMTFENDQ7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgcGFkZGluZzogMTBweCAyMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJveC1zaGFkb3c6IDAgMXB4IDFweDtcXG59XFxuXFxuLndpZGdldCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmZvcm0tYnV0dG9ucyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxufVxcblxcbi5mb3JtLWJ1dHRvbnMgPiAqIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmZvcm0tYnV0dG9ucyA+IHN2Zzpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzNjN2M3O1xcbn1cXG5cXG4uaG9tZS10YXNrcyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNGZyIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoYXV0bywgMWZyKSk7XFxuICBhbGlnbi1jb250ZW50OiBzdGFydDtcXG4gIGdyaWQtcm93OiAyLy0xO1xcbiAgZ3JpZC1jb2x1bW46IDEvLTE7XFxufVxcblxcbi50YXNrcy1oZWFkZXIge1xcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgcGFkZGluZzogMCAxMHB4O1xcbiAgcGFkZGluZy1sZWZ0OiA0MHB4O1xcbn1cXG5cXG4uZHVlIHtcXG4gIHBhZGRpbmctcmlnaHQ6IDMwcHg7XFxufVxcblxcbi50YXNrIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwYWRkaW5nOiAwIDEwcHg7XFxufVxcblxcbi50YXNrLWRvbmUge1xcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbn1cXG5cXG4udGFzay1uIHtcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRhc2s6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZGVkZTtcXG59XFxuXFxuLnRhc2stZGF0ZSB7XFxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcbn1cXG5cXG4uaG9tZS10YXNrcyA+ICoge1xcbiAgZ3JpZC1jb2x1bW46IDIvMztcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMTExRDQ0O1xcbn1cXG5cXG4uZGVsZXRlLXRhc2sge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uZGVsZXRlLXRhc2s6aG92ZXIge1xcbiAgYW5pbWF0aW9uOiBtb3ZlLXVwIDAuNXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5pbmZvLWRpc3BsYXkge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0bztcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0bztcXG4gIHdpZHRoOiA1MCU7XFxuICBoZWlnaHQ6IDUwJTtcXG4gIGdhcDogNXB4O1xcbiAgei1pbmRleDogOTk7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2IyYjhiNztcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYm94LXNoYWRvdzogMCAxcHggMXB4O1xcbiAgY29sb3I6ICMxMTFENDQ7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbn1cXG5cXG4uY2xvc2UtaW5mbyB7XFxuICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnByb2plY3RzIC5uZXctcHJvamVjdCB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG4ucHJvamVjdHM6aG92ZXIgLm5ldy1wcm9qZWN0IHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgZm9udC1zaXplOiAxNXB4O1xcbiAgcGFkZGluZzogMTBweCAwO1xcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcbn1cXG5cXG4ubmV3LXByb2plY3Q6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ucHJvamVjdC1mb3JtIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGdhcDogMTBweDtcXG4gIHotaW5kZXg6IDk5O1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICB3aWR0aDogMjAwcHg7XFxuICBoZWlnaHQ6IDEwMHB4O1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjJiOGI3O1xcbiAgY29sb3I6ICMxMTFENDQ7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgcGFkZGluZzogMTBweCAyMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJveC1zaGFkb3c6IDAgMXB4IDFweDtcXG59XFxuXFxuLnN1Ym1pdC1wcm9qZWN0LFxcbi5jYW5jZWwtcHJvamVjdCB7XFxuICB3aWR0aDogYXV0bztcXG4gIGhlaWdodDogYXV0bztcXG4gIHBhZGRpbmc6IDNweCA5cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4uc3VibWl0LXByb2plY3Qge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzExMUQ0NDtcXG4gIGNvbG9yOiAjYjJiOGI3O1xcbn1cXG5cXG4uc3VibWl0LXByb2plY3Q6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJjM2Q3NDtcXG4gIGNvbG9yOiAjYTViMGFlO1xcbn1cXG5cXG4uY2FuY2VsLXByb2plY3Qge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2IyYjhiNztcXG4gIGNvbG9yOiAjMTExRDQ0O1xcbn1cXG5cXG4uY2FuY2VsLXByb2plY3Q6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q0ZDlkODtcXG4gIGNvbG9yOiAjMTUyMDQzO1xcbn1cXG5cXG4ucHJvamVjdCB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XFxufVxcblxcbi5wcm9qZWN0OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkNGQ5ZDg7XFxufVxcblxcbi5kZWxldGUtcHJvamVjdCB7XFxuICBncmlkLXJvdzogMS8yO1xcbiAgZ3JpZC1jb2x1bW46IDMvNDtcXG4gIGp1c3RpZnktc2VsZjogZW5kO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgd2lkdGg6IDMycHg7XFxuICBoZWlnaHQ6IDMycHg7XFxufVxcblxcbi5kZWxldGUtcHJvamVjdDpob3ZlciB7XFxuICBhbmltYXRpb246IG1vdmUtdXAgMC41cyBlYXNlLWluLW91dDtcXG59XFxuXFxuQGtleWZyYW1lcyBtb3ZlLXVwIHtcXG4gIDAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcbiAgfVxcbiAgNTAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcXG4gIH1cXG59XFxuYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjb2xvcjogI2IyYjhiNztcXG59XFxuXFxuYTp2aXNpdGVkIHtcXG4gIGNvbG9yOiAjYjJiOGI3O1xcbn1cXG5cXG4uZm9vdGVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXJvdzogLTIvLTE7XFxuICBncmlkLWNvbHVtbjogMS8tMTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxMTFENDQ7XFxuICBjb2xvcjogI2IyYjhiNztcXG4gIHBhZGRpbmc6IDAgMjBweDtcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KSB7XFxuICAubWFpbi1jb250ZW50IHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIGF1dG8gMWZyO1xcbiAgfVxcbiAgLmN1cnJlbnQtdGFiIHtcXG4gICAgZ3JpZC1yb3c6IDIvMztcXG4gIH1cXG4gIC50YXNrIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIGF1dG87XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvO1xcbiAgICBwYWRkaW5nOiAwIDEwcHg7XFxuICB9XFxuICAuaG9tZS10YXNrcyB7XFxuICAgIGdyaWQtcm93OiAzLy0xO1xcbiAgfVxcbiAgLnRhc2tzLWhlYWRlciB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICB9XFxuICAudGFzay1kYXRlIHtcXG4gICAgcGFkZGluZy1yaWdodDogMDtcXG4gICAganVzdGlmeS1zZWxmOiBlbmQ7XFxuICB9XFxuICAudGFzayA+IGltZyB7XFxuICAgIGp1c3RpZnktc2VsZjogZW5kO1xcbiAgICBncmlkLWNvbHVtbjogMi8tMTtcXG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcXG4gICAgcGFkZGluZy1ib3R0b206IDNweDtcXG4gIH1cXG4gIC5pbmZvLWRpc3BsYXkge1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBoZWlnaHQ6IDUwJTtcXG4gIH1cXG4gIC5kdWUge1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAwO1xcbiAgfVxcbiAgLnRhc2sgPiAqIHtcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcbiAgfVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxtQkFBQTtFQUNBLG9IQUFBO0VBRUUsa0JBQUE7QUFBSjtBQVNBO0VBQ0Usc0JBQUE7QUFQRjs7QUFVQTs7RUFFRSwySkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtB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LFdBQUE7RUFyQkY7RUF3QkE7SUFDRSxnQkFBQTtFQXRCRjtFQXlCQTtJQUNFLGVBQUE7RUF2QkY7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnQWJlbCc7XFxyXFxuICBzcmM6IHVybCgnLi9hc3NldHMvZm9udHMvYWJlbC1yZWd1bGFyLXdlYmZvbnQud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksXFxyXFxuICAgIHVybCgnLi9hc3NldHMvZm9udHMvYWJlbC1yZWd1bGFyLXdlYmZvbnQud29mZicpIGZvcm1hdCgnd29mZicpO1xcclxcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxufVxcclxcblxcclxcbiRwcmltYXJ5LWNvbG9yOiAjMTExRDQ0O1xcclxcbiRzZWNvbmRhcnktY29sb3I6ICNiMmI4Yjc7XFxyXFxuJGNvbXBsZW1lbnRhcnktY29sb3I6ICMwMDA7XFxyXFxuJHllbGxvdzogI2ZmYzYwMDtcXHJcXG4kYmxhY2s6ICMyNzI3Mjc7XFxyXFxuXFxyXFxuKiB7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5LFxcclxcbmh0bWwge1xcclxcbiAgZm9udC1mYW1pbHk6ICdBYmVsJywgc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4ucGFnZS13cmFwcGVyIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDJmciA4ZnIgMWZyO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNmZyO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG4gXFxyXFxuLmhlYWRlciA+IGgxIHtcXHJcXG4gIGZvbnQtc2l6ZTogNDBweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XFxyXFxuICBjb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdyaWQtcm93OiAxIC8gMjtcXHJcXG4gIGdyaWQtY29sdW1uOiAxIC8gLTE7XFxyXFxuICBiYWNrZ3JvdW5kOiByZ2IoNywxOCwyNCk7XFxyXFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCByZ2JhKDcsMTgsMjQsMSkgMjUlLCByZ2JhKDExLDE5LDQ2LDEpIDUwJSwgcmdiYSgxNywyOSw2OCwxKSA3NSUsIHJnYmEoMTcsMjksNjgsMSkgMTAwJSk7XFxyXFxuICBnYXA6IDE1cHg7XFxyXFxuICBwYWRkaW5nOiAwIDMwcHg7XFxyXFxufVxcclxcblxcclxcbi5zaWRlYmFyIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXJvdzogMiAvIDM7XFxyXFxuICBncmlkLWNvbHVtbjogMSAvIDI7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xcclxcbiAgY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xcclxcbiAgYWxpZ24tY29udGVudDogc3RhcnQ7XFxyXFxuICBwYWRkaW5nOiAzMHB4O1xcclxcbiAgZ2FwOiAzMHB4O1xcclxcbiAgZm9udC1zaXplOiAyN3B4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZGViYXIgPiBkaXY6bm90KC5wcm9qZWN0cykge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uc2lkZWJhciA+IGRpdjpob3Zlcjpub3QoLnByb2plY3RzKSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTk4LCAyMDksIDIwNyk7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbi1jb250ZW50IHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDNmciAxZnIgMWZyO1xcclxcbiAgZ3JpZC1yb3c6IDIgLyAzO1xcclxcbiAgZ3JpZC1jb2x1bW46IDIgLyAtMTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkZmQ1ZDU7XFxyXFxufVxcclxcblxcclxcbi5hZGQtdGFzayB7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBnYXA6IDVweDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIG1hcmdpbjogMjBweCAyMHB4O1xcclxcbiAgcGFkZGluZzogM3B4IDZweDtcXHJcXG4gIGdyaWQtcm93OiAxIC8gMjtcXHJcXG4gIGdyaWQtY29sdW1uOiAxIC8gMjtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZC10YXNrID4gKiB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkLXRhc2s6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZC10YXNrOmhvdmVyID4gc3ZnIHtcXHJcXG4gIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcXHJcXG4gIHRyYW5zaXRpb246IDAuNHMgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcblxcclxcbi5jdXJyZW50LXRhYiB7XFxyXFxuICBjb2xvcjogJHByaW1hcnktY29sb3I7XFxyXFxuICBmb250LXNpemU6IDMwcHg7XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxyXFxuICBncmlkLWNvbHVtbjogMSAvIC0xO1xcclxcbiAgZ3JpZC1yb3c6IDEgLyAyO1xcclxcbn1cXHJcXG5cXHJcXG5mb3JtIHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuICBnYXA6IDEwcHg7XFxyXFxuICB6LWluZGV4OiA5OTtcXHJcXG4gIHRvcDogNTAlO1xcclxcbiAgbGVmdDogNTAlO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xcclxcbiAgY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xcclxcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICBib3gtc2hhZG93OiAwIDFweCAxcHg7XFxyXFxufVxcclxcblxcclxcbi53aWRnZXQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbi5mb3JtLWJ1dHRvbnMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybS1idXR0b25zID4gKiB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5mb3JtLWJ1dHRvbnMgPiBzdmc6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2MzYzdjNztcXHJcXG59XFxyXFxuXFxyXFxuLmhvbWUtdGFza3Mge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDRmciAxZnI7XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KGF1dG8sIDFmcikpO1xcclxcbiAgYWxpZ24tY29udGVudDogc3RhcnQ7XFxyXFxuICBncmlkLXJvdzogMiAvIC0xO1xcclxcbiAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2tzLWhlYWRlciB7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICBwYWRkaW5nOiAwIDEwcHg7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDQwcHg7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5kdWUge1xcclxcbiAgcGFkZGluZy1yaWdodDogMzBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2sge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIHBhZGRpbmc6IDAgMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2stZG9uZSB7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi50YXNrLW4ge1xcclxcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzazpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTZkZWRlO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay1kYXRlIHtcXHJcXG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5ob21lLXRhc2tzID4gKiB7XFxyXFxuICBncmlkLWNvbHVtbjogMiAvIDM7XFxyXFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJHByaW1hcnktY29sb3I7XFxyXFxufVxcclxcblxcclxcbi5kZWxldGUtdGFzayB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5kZWxldGUtdGFzazpob3ZlciB7XFxyXFxuICBhbmltYXRpb246IG1vdmUtdXAgMC41cyBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuLmluZm8tZGlzcGxheSB7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvO1xcclxcbiAgd2lkdGg6IDUwJTtcXHJcXG4gIGhlaWdodDogNTAlO1xcclxcbiAgZ2FwOiA1cHg7XFxyXFxuICB6LWluZGV4OiA5OTtcXHJcXG4gIHRvcDogNTAlO1xcclxcbiAgbGVmdDogNTAlO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICBib3gtc2hhZG93OiAwIDFweCAxcHg7XFxyXFxuICBjb2xvcjogJHByaW1hcnktY29sb3I7XFxyXFxuICBvdmVyZmxvdy15OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4uY2xvc2UtaW5mbyB7XFxyXFxuICBqdXN0aWZ5LXNlbGY6IGVuZDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3RzIHtcXHJcXG4gIC5uZXctcHJvamVjdCB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmOmhvdmVyIC5uZXctcHJvamVjdCB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBmb250LXNpemU6IDE1cHg7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHggMDtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4ubmV3LXByb2plY3Q6aG92ZXIge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1mb3JtIHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIGdhcDogMTBweDtcXHJcXG4gIHotaW5kZXg6IDk5O1xcclxcbiAgdG9wOiA1MCU7XFxyXFxuICBsZWZ0OiA1MCU7XFxyXFxuICB3aWR0aDogY2xhbXAoMTAwcHgsIDIwMHB4LCAzMDBweCk7XFxyXFxuICBoZWlnaHQ6IGNsYW1wKDUwcHgsIDEwMHB4LCAxNTBweCk7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XFxyXFxuICBjb2xvcjogJHByaW1hcnktY29sb3I7XFxyXFxuICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgcGFkZGluZzogMTBweCAyMHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIGJveC1zaGFkb3c6IDAgMXB4IDFweDtcXHJcXG59XFxyXFxuXFxyXFxuLnN1Ym1pdC1wcm9qZWN0LFxcclxcbi5jYW5jZWwtcHJvamVjdCB7XFxyXFxuICB3aWR0aDogYXV0bztcXHJcXG4gIGhlaWdodDogYXV0bztcXHJcXG4gIHBhZGRpbmc6IDNweCA5cHg7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc3VibWl0LXByb2plY3Qge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnktY29sb3I7XFxyXFxuICBjb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcXHJcXG59XFxyXFxuXFxyXFxuLnN1Ym1pdC1wcm9qZWN0OmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyYzNkNzQ7XFxyXFxuICBjb2xvcjogI2E1YjBhZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNhbmNlbC1wcm9qZWN0IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XFxyXFxuICBjb2xvcjogJHByaW1hcnktY29sb3I7XFxyXFxufVxcclxcblxcclxcbi5jYW5jZWwtcHJvamVjdDpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDRkOWQ4O1xcclxcbiAgY29sb3I6ICMxNTIwNDM7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0IHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gIHBhZGRpbmctbGVmdDogMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3Q6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q0ZDlkODtcXHJcXG59XFxyXFxuXFxyXFxuLmRlbGV0ZS1wcm9qZWN0IHtcXHJcXG4gIGdyaWQtcm93OiAxIC8gMjtcXHJcXG4gIGdyaWQtY29sdW1uOiAzIC80O1xcclxcbiAganVzdGlmeS1zZWxmOiBlbmQ7XFxyXFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICB3aWR0aDogMzJweDtcXHJcXG4gIGhlaWdodDogMzJweDtcXHJcXG59XFxyXFxuXFxyXFxuLmRlbGV0ZS1wcm9qZWN0OmhvdmVyIHtcXHJcXG4gIGFuaW1hdGlvbjogbW92ZS11cCAwLjVzIGVhc2UtaW4tb3V0O1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIG1vdmUtdXAge1xcclxcbiAgMCUge1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XFxyXFxuICB9XFxyXFxuICA1MCUge1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTVweCk7XFxyXFxuICB9XFxyXFxuICAxMDAlIHtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5hIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xcclxcbn1cXHJcXG5cXHJcXG5hOnZpc2l0ZWR7XFxyXFxuICBjb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3RlciB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC1yb3c6IC0yIC8gLTE7XFxyXFxuICBncmlkLWNvbHVtbjogMSAvIC0xO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnktY29sb3I7XFxyXFxuICBjb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcXHJcXG4gIHBhZGRpbmc6IDAgMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KSB7XFxyXFxuICAubWFpbi1jb250ZW50IHtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIGF1dG8gMWZyO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmN1cnJlbnQtdGFiIHtcXHJcXG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnRhc2sge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gYXV0bztcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG87XFxyXFxuICAgIHBhZGRpbmc6IDAgMTBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5ob21lLXRhc2tzIHtcXHJcXG4gICAgZ3JpZC1yb3c6IDMgLyAtMTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC50YXNrcy1oZWFkZXIge1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnRhc2stZGF0ZSB7XFxyXFxuICAgIHBhZGRpbmctcmlnaHQ6IDA7XFxyXFxuICAgIGp1c3RpZnktc2VsZjogZW5kO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnRhc2sgPiBpbWcge1xcclxcbiAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcXHJcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAtMTtcXHJcXG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDNweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5pbmZvLWRpc3BsYXkge1xcclxcbiAgICB3aWR0aDogNTAlO1xcclxcbiAgICBoZWlnaHQ6IDUwJTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5kdWUge1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiAwO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAudGFzayA+ICoge1xcclxcbiAgICBmb250LXNpemU6IDEycHg7XFxyXFxuICB9XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsInZhciBkZWZhdWx0T3B0aW9ucyA9IHt9O1xuZXhwb3J0IGZ1bmN0aW9uIGdldERlZmF1bHRPcHRpb25zKCkge1xuICByZXR1cm4gZGVmYXVsdE9wdGlvbnM7XG59XG5leHBvcnQgZnVuY3Rpb24gc2V0RGVmYXVsdE9wdGlvbnMobmV3T3B0aW9ucykge1xuICBkZWZhdWx0T3B0aW9ucyA9IG5ld09wdGlvbnM7XG59IiwiLyoqXG4gKiBHb29nbGUgQ2hyb21lIGFzIG9mIDY3LjAuMzM5Ni44NyBpbnRyb2R1Y2VkIHRpbWV6b25lcyB3aXRoIG9mZnNldCB0aGF0IGluY2x1ZGVzIHNlY29uZHMuXG4gKiBUaGV5IHVzdWFsbHkgYXBwZWFyIGZvciBkYXRlcyB0aGF0IGRlbm90ZSB0aW1lIGJlZm9yZSB0aGUgdGltZXpvbmVzIHdlcmUgaW50cm9kdWNlZFxuICogKGUuZy4gZm9yICdFdXJvcGUvUHJhZ3VlJyB0aW1lem9uZSB0aGUgb2Zmc2V0IGlzIEdNVCswMDo1Nzo0NCBiZWZvcmUgMSBPY3RvYmVyIDE4OTFcbiAqIGFuZCBHTVQrMDE6MDA6MDAgYWZ0ZXIgdGhhdCBkYXRlKVxuICpcbiAqIERhdGUjZ2V0VGltZXpvbmVPZmZzZXQgcmV0dXJucyB0aGUgb2Zmc2V0IGluIG1pbnV0ZXMgYW5kIHdvdWxkIHJldHVybiA1NyBmb3IgdGhlIGV4YW1wbGUgYWJvdmUsXG4gKiB3aGljaCB3b3VsZCBsZWFkIHRvIGluY29ycmVjdCBjYWxjdWxhdGlvbnMuXG4gKlxuICogVGhpcyBmdW5jdGlvbiByZXR1cm5zIHRoZSB0aW1lem9uZSBvZmZzZXQgaW4gbWlsbGlzZWNvbmRzIHRoYXQgdGFrZXMgc2Vjb25kcyBpbiBhY2NvdW50LlxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzKGRhdGUpIHtcbiAgdmFyIHV0Y0RhdGUgPSBuZXcgRGF0ZShEYXRlLlVUQyhkYXRlLmdldEZ1bGxZZWFyKCksIGRhdGUuZ2V0TW9udGgoKSwgZGF0ZS5nZXREYXRlKCksIGRhdGUuZ2V0SG91cnMoKSwgZGF0ZS5nZXRNaW51dGVzKCksIGRhdGUuZ2V0U2Vjb25kcygpLCBkYXRlLmdldE1pbGxpc2Vjb25kcygpKSk7XG4gIHV0Y0RhdGUuc2V0VVRDRnVsbFllYXIoZGF0ZS5nZXRGdWxsWWVhcigpKTtcbiAgcmV0dXJuIGRhdGUuZ2V0VGltZSgpIC0gdXRjRGF0ZS5nZXRUaW1lKCk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVxdWlyZWRBcmdzKHJlcXVpcmVkLCBhcmdzKSB7XG4gIGlmIChhcmdzLmxlbmd0aCA8IHJlcXVpcmVkKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihyZXF1aXJlZCArICcgYXJndW1lbnQnICsgKHJlcXVpcmVkID4gMSA/ICdzJyA6ICcnKSArICcgcmVxdWlyZWQsIGJ1dCBvbmx5ICcgKyBhcmdzLmxlbmd0aCArICcgcHJlc2VudCcpO1xuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9JbnRlZ2VyKGRpcnR5TnVtYmVyKSB7XG4gIGlmIChkaXJ0eU51bWJlciA9PT0gbnVsbCB8fCBkaXJ0eU51bWJlciA9PT0gdHJ1ZSB8fCBkaXJ0eU51bWJlciA9PT0gZmFsc2UpIHtcbiAgICByZXR1cm4gTmFOO1xuICB9XG4gIHZhciBudW1iZXIgPSBOdW1iZXIoZGlydHlOdW1iZXIpO1xuICBpZiAoaXNOYU4obnVtYmVyKSkge1xuICAgIHJldHVybiBudW1iZXI7XG4gIH1cbiAgcmV0dXJuIG51bWJlciA8IDAgPyBNYXRoLmNlaWwobnVtYmVyKSA6IE1hdGguZmxvb3IobnVtYmVyKTtcbn0iLCIvKipcbiAqIERheXMgaW4gMSB3ZWVrLlxuICpcbiAqIEBuYW1lIGRheXNJbldlZWtcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cbmV4cG9ydCB2YXIgZGF5c0luV2VlayA9IDc7XG5cbi8qKlxuICogRGF5cyBpbiAxIHllYXJcbiAqIE9uZSB5ZWFycyBlcXVhbHMgMzY1LjI0MjUgZGF5cyBhY2NvcmRpbmcgdG8gdGhlIGZvcm11bGE6XG4gKlxuICogPiBMZWFwIHllYXIgb2NjdXJlcyBldmVyeSA0IHllYXJzLCBleGNlcHQgZm9yIHllYXJzIHRoYXQgYXJlIGRpdmlzYWJsZSBieSAxMDAgYW5kIG5vdCBkaXZpc2FibGUgYnkgNDAwLlxuICogPiAxIG1lYW4geWVhciA9ICgzNjUrMS80LTEvMTAwKzEvNDAwKSBkYXlzID0gMzY1LjI0MjUgZGF5c1xuICpcbiAqIEBuYW1lIGRheXNJblllYXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cbmV4cG9ydCB2YXIgZGF5c0luWWVhciA9IDM2NS4yNDI1O1xuXG4vKipcbiAqIE1heGltdW0gYWxsb3dlZCB0aW1lLlxuICpcbiAqIEBuYW1lIG1heFRpbWVcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cbmV4cG9ydCB2YXIgbWF4VGltZSA9IE1hdGgucG93KDEwLCA4KSAqIDI0ICogNjAgKiA2MCAqIDEwMDA7XG5cbi8qKlxuICogTWlsbGlzZWNvbmRzIGluIDEgbWludXRlXG4gKlxuICogQG5hbWUgbWlsbGlzZWNvbmRzSW5NaW51dGVcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cbmV4cG9ydCB2YXIgbWlsbGlzZWNvbmRzSW5NaW51dGUgPSA2MDAwMDtcblxuLyoqXG4gKiBNaWxsaXNlY29uZHMgaW4gMSBob3VyXG4gKlxuICogQG5hbWUgbWlsbGlzZWNvbmRzSW5Ib3VyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5leHBvcnQgdmFyIG1pbGxpc2Vjb25kc0luSG91ciA9IDM2MDAwMDA7XG5cbi8qKlxuICogTWlsbGlzZWNvbmRzIGluIDEgc2Vjb25kXG4gKlxuICogQG5hbWUgbWlsbGlzZWNvbmRzSW5TZWNvbmRcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cbmV4cG9ydCB2YXIgbWlsbGlzZWNvbmRzSW5TZWNvbmQgPSAxMDAwO1xuXG4vKipcbiAqIE1pbmltdW0gYWxsb3dlZCB0aW1lLlxuICpcbiAqIEBuYW1lIG1pblRpbWVcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cbmV4cG9ydCB2YXIgbWluVGltZSA9IC1tYXhUaW1lO1xuXG4vKipcbiAqIE1pbnV0ZXMgaW4gMSBob3VyXG4gKlxuICogQG5hbWUgbWludXRlc0luSG91clxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuZXhwb3J0IHZhciBtaW51dGVzSW5Ib3VyID0gNjA7XG5cbi8qKlxuICogTW9udGhzIGluIDEgcXVhcnRlclxuICpcbiAqIEBuYW1lIG1vbnRoc0luUXVhcnRlclxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuZXhwb3J0IHZhciBtb250aHNJblF1YXJ0ZXIgPSAzO1xuXG4vKipcbiAqIE1vbnRocyBpbiAxIHllYXJcbiAqXG4gKiBAbmFtZSBtb250aHNJblllYXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cbmV4cG9ydCB2YXIgbW9udGhzSW5ZZWFyID0gMTI7XG5cbi8qKlxuICogUXVhcnRlcnMgaW4gMSB5ZWFyXG4gKlxuICogQG5hbWUgcXVhcnRlcnNJblllYXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cbmV4cG9ydCB2YXIgcXVhcnRlcnNJblllYXIgPSA0O1xuXG4vKipcbiAqIFNlY29uZHMgaW4gMSBob3VyXG4gKlxuICogQG5hbWUgc2Vjb25kc0luSG91clxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuZXhwb3J0IHZhciBzZWNvbmRzSW5Ib3VyID0gMzYwMDtcblxuLyoqXG4gKiBTZWNvbmRzIGluIDEgbWludXRlXG4gKlxuICogQG5hbWUgc2Vjb25kc0luTWludXRlXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5leHBvcnQgdmFyIHNlY29uZHNJbk1pbnV0ZSA9IDYwO1xuXG4vKipcbiAqIFNlY29uZHMgaW4gMSBkYXlcbiAqXG4gKiBAbmFtZSBzZWNvbmRzSW5EYXlcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cbmV4cG9ydCB2YXIgc2Vjb25kc0luRGF5ID0gc2Vjb25kc0luSG91ciAqIDI0O1xuXG4vKipcbiAqIFNlY29uZHMgaW4gMSB3ZWVrXG4gKlxuICogQG5hbWUgc2Vjb25kc0luV2Vla1xuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuZXhwb3J0IHZhciBzZWNvbmRzSW5XZWVrID0gc2Vjb25kc0luRGF5ICogNztcblxuLyoqXG4gKiBTZWNvbmRzIGluIDEgeWVhclxuICpcbiAqIEBuYW1lIHNlY29uZHNJblllYXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cbmV4cG9ydCB2YXIgc2Vjb25kc0luWWVhciA9IHNlY29uZHNJbkRheSAqIGRheXNJblllYXI7XG5cbi8qKlxuICogU2Vjb25kcyBpbiAxIG1vbnRoXG4gKlxuICogQG5hbWUgc2Vjb25kc0luTW9udGhcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cbmV4cG9ydCB2YXIgc2Vjb25kc0luTW9udGggPSBzZWNvbmRzSW5ZZWFyIC8gMTI7XG5cbi8qKlxuICogU2Vjb25kcyBpbiAxIHF1YXJ0ZXJcbiAqXG4gKiBAbmFtZSBzZWNvbmRzSW5RdWFydGVyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5leHBvcnQgdmFyIHNlY29uZHNJblF1YXJ0ZXIgPSBzZWNvbmRzSW5Nb250aCAqIDM7IiwiaW1wb3J0IGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMgZnJvbSBcIi4uL19saWIvZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcy9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZJU09XZWVrIGZyb20gXCIuLi9zdGFydE9mSVNPV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbnZhciBNSUxMSVNFQ09ORFNfSU5fV0VFSyA9IDYwNDgwMDAwMDtcblxuLyoqXG4gKiBAbmFtZSBkaWZmZXJlbmNlSW5DYWxlbmRhcklTT1dlZWtzXG4gKiBAY2F0ZWdvcnkgSVNPIFdlZWsgSGVscGVyc1xuICogQHN1bW1hcnkgR2V0IHRoZSBudW1iZXIgb2YgY2FsZW5kYXIgSVNPIHdlZWtzIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogR2V0IHRoZSBudW1iZXIgb2YgY2FsZW5kYXIgSVNPIHdlZWtzIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzLlxuICpcbiAqIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyOiBodHRwOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0lTT193ZWVrX2RhdGVcbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlTGVmdCAtIHRoZSBsYXRlciBkYXRlXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlUmlnaHQgLSB0aGUgZWFybGllciBkYXRlXG4gKiBAcmV0dXJucyB7TnVtYmVyfSB0aGUgbnVtYmVyIG9mIGNhbGVuZGFyIElTTyB3ZWVrc1xuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBIb3cgbWFueSBjYWxlbmRhciBJU08gd2Vla3MgYXJlIGJldHdlZW4gNiBKdWx5IDIwMTQgYW5kIDIxIEp1bHkgMjAxND9cbiAqIGNvbnN0IHJlc3VsdCA9IGRpZmZlcmVuY2VJbkNhbGVuZGFySVNPV2Vla3MoXG4gKiAgIG5ldyBEYXRlKDIwMTQsIDYsIDIxKSxcbiAqICAgbmV3IERhdGUoMjAxNCwgNiwgNilcbiAqIClcbiAqIC8vPT4gM1xuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkaWZmZXJlbmNlSW5DYWxlbmRhcklTT1dlZWtzKGRpcnR5RGF0ZUxlZnQsIGRpcnR5RGF0ZVJpZ2h0KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgc3RhcnRPZklTT1dlZWtMZWZ0ID0gc3RhcnRPZklTT1dlZWsoZGlydHlEYXRlTGVmdCk7XG4gIHZhciBzdGFydE9mSVNPV2Vla1JpZ2h0ID0gc3RhcnRPZklTT1dlZWsoZGlydHlEYXRlUmlnaHQpO1xuICB2YXIgdGltZXN0YW1wTGVmdCA9IHN0YXJ0T2ZJU09XZWVrTGVmdC5nZXRUaW1lKCkgLSBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzKHN0YXJ0T2ZJU09XZWVrTGVmdCk7XG4gIHZhciB0aW1lc3RhbXBSaWdodCA9IHN0YXJ0T2ZJU09XZWVrUmlnaHQuZ2V0VGltZSgpIC0gZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyhzdGFydE9mSVNPV2Vla1JpZ2h0KTtcblxuICAvLyBSb3VuZCB0aGUgbnVtYmVyIG9mIGRheXMgdG8gdGhlIG5lYXJlc3QgaW50ZWdlclxuICAvLyBiZWNhdXNlIHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGluIGEgd2VlayBpcyBub3QgY29uc3RhbnRcbiAgLy8gKGUuZy4gaXQncyBkaWZmZXJlbnQgaW4gdGhlIHdlZWsgb2YgdGhlIGRheWxpZ2h0IHNhdmluZyB0aW1lIGNsb2NrIHNoaWZ0KVxuICByZXR1cm4gTWF0aC5yb3VuZCgodGltZXN0YW1wTGVmdCAtIHRpbWVzdGFtcFJpZ2h0KSAvIE1JTExJU0VDT05EU19JTl9XRUVLKTtcbn0iLCJpbXBvcnQgZW5kT2ZXZWVrIGZyb20gXCIuLi9lbmRPZldlZWsvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGVuZE9mSVNPV2Vla1xuICogQGNhdGVnb3J5IElTTyBXZWVrIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgZW5kIG9mIGFuIElTTyB3ZWVrIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgZW5kIG9mIGFuIElTTyB3ZWVrIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqIFRoZSByZXN1bHQgd2lsbCBiZSBpbiB0aGUgbG9jYWwgdGltZXpvbmUuXG4gKlxuICogSVNPIHdlZWstbnVtYmVyaW5nIHllYXI6IGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSVNPX3dlZWtfZGF0ZVxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgb3JpZ2luYWwgZGF0ZVxuICogQHJldHVybnMge0RhdGV9IHRoZSBlbmQgb2YgYW4gSVNPIHdlZWtcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgZW5kIG9mIGFuIElTTyB3ZWVrIGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gZW5kT2ZJU09XZWVrKG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCkpXG4gKiAvLz0+IFN1biBTZXAgMDcgMjAxNCAyMzo1OTo1OS45OTlcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZW5kT2ZJU09XZWVrKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgcmV0dXJuIGVuZE9mV2VlayhkaXJ0eURhdGUsIHtcbiAgICB3ZWVrU3RhcnRzT246IDFcbiAgfSk7XG59IiwiaW1wb3J0IHsgZ2V0RGVmYXVsdE9wdGlvbnMgfSBmcm9tIFwiLi4vX2xpYi9kZWZhdWx0T3B0aW9ucy9pbmRleC5qc1wiO1xuaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgZW5kT2ZXZWVrXG4gKiBAY2F0ZWdvcnkgV2VlayBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIGVuZCBvZiBhIHdlZWsgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBlbmQgb2YgYSB3ZWVrIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqIFRoZSByZXN1bHQgd2lsbCBiZSBpbiB0aGUgbG9jYWwgdGltZXpvbmUuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBvcmlnaW5hbCBkYXRlXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gYW4gb2JqZWN0IHdpdGggb3B0aW9ucy5cbiAqIEBwYXJhbSB7TG9jYWxlfSBbb3B0aW9ucy5sb2NhbGU9ZGVmYXVsdExvY2FsZV0gLSB0aGUgbG9jYWxlIG9iamVjdC4gU2VlIFtMb2NhbGVde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvTG9jYWxlfVxuICogQHBhcmFtIHswfDF8MnwzfDR8NXw2fSBbb3B0aW9ucy53ZWVrU3RhcnRzT249MF0gLSB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2VlayAoMCAtIFN1bmRheSlcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgZW5kIG9mIGEgd2Vla1xuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy53ZWVrU3RhcnRzT25gIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBlbmQgb2YgYSB3ZWVrIGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gZW5kT2ZXZWVrKG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCkpXG4gKiAvLz0+IFNhdCBTZXAgMDYgMjAxNCAyMzo1OTo1OS45OTlcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdGhlIHdlZWsgc3RhcnRzIG9uIE1vbmRheSwgdGhlIGVuZCBvZiB0aGUgd2VlayBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IGVuZE9mV2VlayhuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApLCB7IHdlZWtTdGFydHNPbjogMSB9KVxuICogLy89PiBTdW4gU2VwIDA3IDIwMTQgMjM6NTk6NTkuOTk5XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGVuZE9mV2VlayhkaXJ0eURhdGUsIG9wdGlvbnMpIHtcbiAgdmFyIF9yZWYsIF9yZWYyLCBfcmVmMywgX29wdGlvbnMkd2Vla1N0YXJ0c09uLCBfb3B0aW9ucyRsb2NhbGUsIF9vcHRpb25zJGxvY2FsZSRvcHRpbywgX2RlZmF1bHRPcHRpb25zJGxvY2FsLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyO1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRlZmF1bHRPcHRpb25zID0gZ2V0RGVmYXVsdE9wdGlvbnMoKTtcbiAgdmFyIHdlZWtTdGFydHNPbiA9IHRvSW50ZWdlcigoX3JlZiA9IChfcmVmMiA9IChfcmVmMyA9IChfb3B0aW9ucyR3ZWVrU3RhcnRzT24gPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfb3B0aW9ucyR3ZWVrU3RhcnRzT24gIT09IHZvaWQgMCA/IF9vcHRpb25zJHdlZWtTdGFydHNPbiA6IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZSA9IG9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUkb3B0aW8gPSBfb3B0aW9ucyRsb2NhbGUub3B0aW9ucykgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlJG9wdGlvID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfb3B0aW9ucyRsb2NhbGUkb3B0aW8ud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmMyAhPT0gdm9pZCAwID8gX3JlZjMgOiBkZWZhdWx0T3B0aW9ucy53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9yZWYyICE9PSB2b2lkIDAgPyBfcmVmMiA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwgPSBkZWZhdWx0T3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIgPSBfZGVmYXVsdE9wdGlvbnMkbG9jYWwub3B0aW9ucykgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2RlZmF1bHRPcHRpb25zJGxvY2FsMi53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9yZWYgIT09IHZvaWQgMCA/IF9yZWYgOiAwKTtcblxuICAvLyBUZXN0IGlmIHdlZWtTdGFydHNPbiBpcyBiZXR3ZWVuIDAgYW5kIDYgX2FuZF8gaXMgbm90IE5hTlxuICBpZiAoISh3ZWVrU3RhcnRzT24gPj0gMCAmJiB3ZWVrU3RhcnRzT24gPD0gNikpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignd2Vla1N0YXJ0c09uIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2IGluY2x1c2l2ZWx5Jyk7XG4gIH1cbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGRheSA9IGRhdGUuZ2V0RGF5KCk7XG4gIHZhciBkaWZmID0gKGRheSA8IHdlZWtTdGFydHNPbiA/IC03IDogMCkgKyA2IC0gKGRheSAtIHdlZWtTdGFydHNPbik7XG4gIGRhdGUuc2V0RGF0ZShkYXRlLmdldERhdGUoKSArIGRpZmYpO1xuICBkYXRlLnNldEhvdXJzKDIzLCA1OSwgNTksIDk5OSk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCB7IG1pbGxpc2Vjb25kc0luSG91ciwgbWlsbGlzZWNvbmRzSW5NaW51dGUgfSBmcm9tIFwiLi4vY29uc3RhbnRzL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgcGFyc2VJU09cbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgUGFyc2UgSVNPIHN0cmluZ1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUGFyc2UgdGhlIGdpdmVuIHN0cmluZyBpbiBJU08gODYwMSBmb3JtYXQgYW5kIHJldHVybiBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIEZ1bmN0aW9uIGFjY2VwdHMgY29tcGxldGUgSVNPIDg2MDEgZm9ybWF0cyBhcyB3ZWxsIGFzIHBhcnRpYWwgaW1wbGVtZW50YXRpb25zLlxuICogSVNPIDg2MDE6IGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSVNPXzg2MDFcbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXNuJ3QgYSBzdHJpbmcsIHRoZSBmdW5jdGlvbiBjYW5ub3QgcGFyc2UgdGhlIHN0cmluZyBvclxuICogdGhlIHZhbHVlcyBhcmUgaW52YWxpZCwgaXQgcmV0dXJucyBJbnZhbGlkIERhdGUuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGFyZ3VtZW50IC0gdGhlIHZhbHVlIHRvIGNvbnZlcnRcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSBhbiBvYmplY3Qgd2l0aCBvcHRpb25zLlxuICogQHBhcmFtIHswfDF8Mn0gW29wdGlvbnMuYWRkaXRpb25hbERpZ2l0cz0yXSAtIHRoZSBhZGRpdGlvbmFsIG51bWJlciBvZiBkaWdpdHMgaW4gdGhlIGV4dGVuZGVkIHllYXIgZm9ybWF0XG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHBhcnNlZCBkYXRlIGluIHRoZSBsb2NhbCB0aW1lIHpvbmVcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMuYWRkaXRpb25hbERpZ2l0c2AgbXVzdCBiZSAwLCAxIG9yIDJcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCBzdHJpbmcgJzIwMTQtMDItMTFUMTE6MzA6MzAnIHRvIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBwYXJzZUlTTygnMjAxNC0wMi0xMVQxMTozMDozMCcpXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHN0cmluZyAnKzAyMDE0MTAxJyB0byBkYXRlLFxuICogLy8gaWYgdGhlIGFkZGl0aW9uYWwgbnVtYmVyIG9mIGRpZ2l0cyBpbiB0aGUgZXh0ZW5kZWQgeWVhciBmb3JtYXQgaXMgMTpcbiAqIGNvbnN0IHJlc3VsdCA9IHBhcnNlSVNPKCcrMDIwMTQxMDEnLCB7IGFkZGl0aW9uYWxEaWdpdHM6IDEgfSlcbiAqIC8vPT4gRnJpIEFwciAxMSAyMDE0IDAwOjAwOjAwXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBhcnNlSVNPKGFyZ3VtZW50LCBvcHRpb25zKSB7XG4gIHZhciBfb3B0aW9ucyRhZGRpdGlvbmFsRGk7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgYWRkaXRpb25hbERpZ2l0cyA9IHRvSW50ZWdlcigoX29wdGlvbnMkYWRkaXRpb25hbERpID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmFkZGl0aW9uYWxEaWdpdHMpICE9PSBudWxsICYmIF9vcHRpb25zJGFkZGl0aW9uYWxEaSAhPT0gdm9pZCAwID8gX29wdGlvbnMkYWRkaXRpb25hbERpIDogMik7XG4gIGlmIChhZGRpdGlvbmFsRGlnaXRzICE9PSAyICYmIGFkZGl0aW9uYWxEaWdpdHMgIT09IDEgJiYgYWRkaXRpb25hbERpZ2l0cyAhPT0gMCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdhZGRpdGlvbmFsRGlnaXRzIG11c3QgYmUgMCwgMSBvciAyJyk7XG4gIH1cbiAgaWYgKCEodHlwZW9mIGFyZ3VtZW50ID09PSAnc3RyaW5nJyB8fCBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJndW1lbnQpID09PSAnW29iamVjdCBTdHJpbmddJykpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxuICB2YXIgZGF0ZVN0cmluZ3MgPSBzcGxpdERhdGVTdHJpbmcoYXJndW1lbnQpO1xuICB2YXIgZGF0ZTtcbiAgaWYgKGRhdGVTdHJpbmdzLmRhdGUpIHtcbiAgICB2YXIgcGFyc2VZZWFyUmVzdWx0ID0gcGFyc2VZZWFyKGRhdGVTdHJpbmdzLmRhdGUsIGFkZGl0aW9uYWxEaWdpdHMpO1xuICAgIGRhdGUgPSBwYXJzZURhdGUocGFyc2VZZWFyUmVzdWx0LnJlc3REYXRlU3RyaW5nLCBwYXJzZVllYXJSZXN1bHQueWVhcik7XG4gIH1cbiAgaWYgKCFkYXRlIHx8IGlzTmFOKGRhdGUuZ2V0VGltZSgpKSkge1xuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG4gIHZhciB0aW1lc3RhbXAgPSBkYXRlLmdldFRpbWUoKTtcbiAgdmFyIHRpbWUgPSAwO1xuICB2YXIgb2Zmc2V0O1xuICBpZiAoZGF0ZVN0cmluZ3MudGltZSkge1xuICAgIHRpbWUgPSBwYXJzZVRpbWUoZGF0ZVN0cmluZ3MudGltZSk7XG4gICAgaWYgKGlzTmFOKHRpbWUpKSB7XG4gICAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgICB9XG4gIH1cbiAgaWYgKGRhdGVTdHJpbmdzLnRpbWV6b25lKSB7XG4gICAgb2Zmc2V0ID0gcGFyc2VUaW1lem9uZShkYXRlU3RyaW5ncy50aW1lem9uZSk7XG4gICAgaWYgKGlzTmFOKG9mZnNldCkpIHtcbiAgICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB2YXIgZGlydHlEYXRlID0gbmV3IERhdGUodGltZXN0YW1wICsgdGltZSk7XG4gICAgLy8ganMgcGFyc2VkIHN0cmluZyBhc3N1bWluZyBpdCdzIGluIFVUQyB0aW1lem9uZVxuICAgIC8vIGJ1dCB3ZSBuZWVkIGl0IHRvIGJlIHBhcnNlZCBpbiBvdXIgdGltZXpvbmVcbiAgICAvLyBzbyB3ZSB1c2UgdXRjIHZhbHVlcyB0byBidWlsZCBkYXRlIGluIG91ciB0aW1lem9uZS5cbiAgICAvLyBZZWFyIHZhbHVlcyBmcm9tIDAgdG8gOTkgbWFwIHRvIHRoZSB5ZWFycyAxOTAwIHRvIDE5OTlcbiAgICAvLyBzbyBzZXQgeWVhciBleHBsaWNpdGx5IHdpdGggc2V0RnVsbFllYXIuXG4gICAgdmFyIHJlc3VsdCA9IG5ldyBEYXRlKDApO1xuICAgIHJlc3VsdC5zZXRGdWxsWWVhcihkaXJ0eURhdGUuZ2V0VVRDRnVsbFllYXIoKSwgZGlydHlEYXRlLmdldFVUQ01vbnRoKCksIGRpcnR5RGF0ZS5nZXRVVENEYXRlKCkpO1xuICAgIHJlc3VsdC5zZXRIb3VycyhkaXJ0eURhdGUuZ2V0VVRDSG91cnMoKSwgZGlydHlEYXRlLmdldFVUQ01pbnV0ZXMoKSwgZGlydHlEYXRlLmdldFVUQ1NlY29uZHMoKSwgZGlydHlEYXRlLmdldFVUQ01pbGxpc2Vjb25kcygpKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG4gIHJldHVybiBuZXcgRGF0ZSh0aW1lc3RhbXAgKyB0aW1lICsgb2Zmc2V0KTtcbn1cbnZhciBwYXR0ZXJucyA9IHtcbiAgZGF0ZVRpbWVEZWxpbWl0ZXI6IC9bVCBdLyxcbiAgdGltZVpvbmVEZWxpbWl0ZXI6IC9bWiBdL2ksXG4gIHRpbWV6b25lOiAvKFtaKy1dLiopJC9cbn07XG52YXIgZGF0ZVJlZ2V4ID0gL14tPyg/OihcXGR7M30pfChcXGR7Mn0pKD86LT8oXFxkezJ9KSk/fFcoXFxkezJ9KSg/Oi0/KFxcZHsxfSkpP3wpJC87XG52YXIgdGltZVJlZ2V4ID0gL14oXFxkezJ9KD86Wy4sXVxcZCopPykoPzo6PyhcXGR7Mn0oPzpbLixdXFxkKik/KSk/KD86Oj8oXFxkezJ9KD86Wy4sXVxcZCopPykpPyQvO1xudmFyIHRpbWV6b25lUmVnZXggPSAvXihbKy1dKShcXGR7Mn0pKD86Oj8oXFxkezJ9KSk/JC87XG5mdW5jdGlvbiBzcGxpdERhdGVTdHJpbmcoZGF0ZVN0cmluZykge1xuICB2YXIgZGF0ZVN0cmluZ3MgPSB7fTtcbiAgdmFyIGFycmF5ID0gZGF0ZVN0cmluZy5zcGxpdChwYXR0ZXJucy5kYXRlVGltZURlbGltaXRlcik7XG4gIHZhciB0aW1lU3RyaW5nO1xuXG4gIC8vIFRoZSByZWdleCBtYXRjaCBzaG91bGQgb25seSByZXR1cm4gYXQgbWF4aW11bSB0d28gYXJyYXkgZWxlbWVudHMuXG4gIC8vIFtkYXRlXSwgW3RpbWVdLCBvciBbZGF0ZSwgdGltZV0uXG4gIGlmIChhcnJheS5sZW5ndGggPiAyKSB7XG4gICAgcmV0dXJuIGRhdGVTdHJpbmdzO1xuICB9XG4gIGlmICgvOi8udGVzdChhcnJheVswXSkpIHtcbiAgICB0aW1lU3RyaW5nID0gYXJyYXlbMF07XG4gIH0gZWxzZSB7XG4gICAgZGF0ZVN0cmluZ3MuZGF0ZSA9IGFycmF5WzBdO1xuICAgIHRpbWVTdHJpbmcgPSBhcnJheVsxXTtcbiAgICBpZiAocGF0dGVybnMudGltZVpvbmVEZWxpbWl0ZXIudGVzdChkYXRlU3RyaW5ncy5kYXRlKSkge1xuICAgICAgZGF0ZVN0cmluZ3MuZGF0ZSA9IGRhdGVTdHJpbmcuc3BsaXQocGF0dGVybnMudGltZVpvbmVEZWxpbWl0ZXIpWzBdO1xuICAgICAgdGltZVN0cmluZyA9IGRhdGVTdHJpbmcuc3Vic3RyKGRhdGVTdHJpbmdzLmRhdGUubGVuZ3RoLCBkYXRlU3RyaW5nLmxlbmd0aCk7XG4gICAgfVxuICB9XG4gIGlmICh0aW1lU3RyaW5nKSB7XG4gICAgdmFyIHRva2VuID0gcGF0dGVybnMudGltZXpvbmUuZXhlYyh0aW1lU3RyaW5nKTtcbiAgICBpZiAodG9rZW4pIHtcbiAgICAgIGRhdGVTdHJpbmdzLnRpbWUgPSB0aW1lU3RyaW5nLnJlcGxhY2UodG9rZW5bMV0sICcnKTtcbiAgICAgIGRhdGVTdHJpbmdzLnRpbWV6b25lID0gdG9rZW5bMV07XG4gICAgfSBlbHNlIHtcbiAgICAgIGRhdGVTdHJpbmdzLnRpbWUgPSB0aW1lU3RyaW5nO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZGF0ZVN0cmluZ3M7XG59XG5mdW5jdGlvbiBwYXJzZVllYXIoZGF0ZVN0cmluZywgYWRkaXRpb25hbERpZ2l0cykge1xuICB2YXIgcmVnZXggPSBuZXcgUmVnRXhwKCdeKD86KFxcXFxkezR9fFsrLV1cXFxcZHsnICsgKDQgKyBhZGRpdGlvbmFsRGlnaXRzKSArICd9KXwoXFxcXGR7Mn18WystXVxcXFxkeycgKyAoMiArIGFkZGl0aW9uYWxEaWdpdHMpICsgJ30pJCknKTtcbiAgdmFyIGNhcHR1cmVzID0gZGF0ZVN0cmluZy5tYXRjaChyZWdleCk7XG4gIC8vIEludmFsaWQgSVNPLWZvcm1hdHRlZCB5ZWFyXG4gIGlmICghY2FwdHVyZXMpIHJldHVybiB7XG4gICAgeWVhcjogTmFOLFxuICAgIHJlc3REYXRlU3RyaW5nOiAnJ1xuICB9O1xuICB2YXIgeWVhciA9IGNhcHR1cmVzWzFdID8gcGFyc2VJbnQoY2FwdHVyZXNbMV0pIDogbnVsbDtcbiAgdmFyIGNlbnR1cnkgPSBjYXB0dXJlc1syXSA/IHBhcnNlSW50KGNhcHR1cmVzWzJdKSA6IG51bGw7XG5cbiAgLy8gZWl0aGVyIHllYXIgb3IgY2VudHVyeSBpcyBudWxsLCBub3QgYm90aFxuICByZXR1cm4ge1xuICAgIHllYXI6IGNlbnR1cnkgPT09IG51bGwgPyB5ZWFyIDogY2VudHVyeSAqIDEwMCxcbiAgICByZXN0RGF0ZVN0cmluZzogZGF0ZVN0cmluZy5zbGljZSgoY2FwdHVyZXNbMV0gfHwgY2FwdHVyZXNbMl0pLmxlbmd0aClcbiAgfTtcbn1cbmZ1bmN0aW9uIHBhcnNlRGF0ZShkYXRlU3RyaW5nLCB5ZWFyKSB7XG4gIC8vIEludmFsaWQgSVNPLWZvcm1hdHRlZCB5ZWFyXG4gIGlmICh5ZWFyID09PSBudWxsKSByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgdmFyIGNhcHR1cmVzID0gZGF0ZVN0cmluZy5tYXRjaChkYXRlUmVnZXgpO1xuICAvLyBJbnZhbGlkIElTTy1mb3JtYXR0ZWQgc3RyaW5nXG4gIGlmICghY2FwdHVyZXMpIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB2YXIgaXNXZWVrRGF0ZSA9ICEhY2FwdHVyZXNbNF07XG4gIHZhciBkYXlPZlllYXIgPSBwYXJzZURhdGVVbml0KGNhcHR1cmVzWzFdKTtcbiAgdmFyIG1vbnRoID0gcGFyc2VEYXRlVW5pdChjYXB0dXJlc1syXSkgLSAxO1xuICB2YXIgZGF5ID0gcGFyc2VEYXRlVW5pdChjYXB0dXJlc1szXSk7XG4gIHZhciB3ZWVrID0gcGFyc2VEYXRlVW5pdChjYXB0dXJlc1s0XSk7XG4gIHZhciBkYXlPZldlZWsgPSBwYXJzZURhdGVVbml0KGNhcHR1cmVzWzVdKSAtIDE7XG4gIGlmIChpc1dlZWtEYXRlKSB7XG4gICAgaWYgKCF2YWxpZGF0ZVdlZWtEYXRlKHllYXIsIHdlZWssIGRheU9mV2VlaykpIHtcbiAgICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICAgIH1cbiAgICByZXR1cm4gZGF5T2ZJU09XZWVrWWVhcih5ZWFyLCB3ZWVrLCBkYXlPZldlZWspO1xuICB9IGVsc2Uge1xuICAgIHZhciBkYXRlID0gbmV3IERhdGUoMCk7XG4gICAgaWYgKCF2YWxpZGF0ZURhdGUoeWVhciwgbW9udGgsIGRheSkgfHwgIXZhbGlkYXRlRGF5T2ZZZWFyRGF0ZSh5ZWFyLCBkYXlPZlllYXIpKSB7XG4gICAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgICB9XG4gICAgZGF0ZS5zZXRVVENGdWxsWWVhcih5ZWFyLCBtb250aCwgTWF0aC5tYXgoZGF5T2ZZZWFyLCBkYXkpKTtcbiAgICByZXR1cm4gZGF0ZTtcbiAgfVxufVxuZnVuY3Rpb24gcGFyc2VEYXRlVW5pdCh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgPyBwYXJzZUludCh2YWx1ZSkgOiAxO1xufVxuZnVuY3Rpb24gcGFyc2VUaW1lKHRpbWVTdHJpbmcpIHtcbiAgdmFyIGNhcHR1cmVzID0gdGltZVN0cmluZy5tYXRjaCh0aW1lUmVnZXgpO1xuICBpZiAoIWNhcHR1cmVzKSByZXR1cm4gTmFOOyAvLyBJbnZhbGlkIElTTy1mb3JtYXR0ZWQgdGltZVxuXG4gIHZhciBob3VycyA9IHBhcnNlVGltZVVuaXQoY2FwdHVyZXNbMV0pO1xuICB2YXIgbWludXRlcyA9IHBhcnNlVGltZVVuaXQoY2FwdHVyZXNbMl0pO1xuICB2YXIgc2Vjb25kcyA9IHBhcnNlVGltZVVuaXQoY2FwdHVyZXNbM10pO1xuICBpZiAoIXZhbGlkYXRlVGltZShob3VycywgbWludXRlcywgc2Vjb25kcykpIHtcbiAgICByZXR1cm4gTmFOO1xuICB9XG4gIHJldHVybiBob3VycyAqIG1pbGxpc2Vjb25kc0luSG91ciArIG1pbnV0ZXMgKiBtaWxsaXNlY29uZHNJbk1pbnV0ZSArIHNlY29uZHMgKiAxMDAwO1xufVxuZnVuY3Rpb24gcGFyc2VUaW1lVW5pdCh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgJiYgcGFyc2VGbG9hdCh2YWx1ZS5yZXBsYWNlKCcsJywgJy4nKSkgfHwgMDtcbn1cbmZ1bmN0aW9uIHBhcnNlVGltZXpvbmUodGltZXpvbmVTdHJpbmcpIHtcbiAgaWYgKHRpbWV6b25lU3RyaW5nID09PSAnWicpIHJldHVybiAwO1xuICB2YXIgY2FwdHVyZXMgPSB0aW1lem9uZVN0cmluZy5tYXRjaCh0aW1lem9uZVJlZ2V4KTtcbiAgaWYgKCFjYXB0dXJlcykgcmV0dXJuIDA7XG4gIHZhciBzaWduID0gY2FwdHVyZXNbMV0gPT09ICcrJyA/IC0xIDogMTtcbiAgdmFyIGhvdXJzID0gcGFyc2VJbnQoY2FwdHVyZXNbMl0pO1xuICB2YXIgbWludXRlcyA9IGNhcHR1cmVzWzNdICYmIHBhcnNlSW50KGNhcHR1cmVzWzNdKSB8fCAwO1xuICBpZiAoIXZhbGlkYXRlVGltZXpvbmUoaG91cnMsIG1pbnV0ZXMpKSB7XG4gICAgcmV0dXJuIE5hTjtcbiAgfVxuICByZXR1cm4gc2lnbiAqIChob3VycyAqIG1pbGxpc2Vjb25kc0luSG91ciArIG1pbnV0ZXMgKiBtaWxsaXNlY29uZHNJbk1pbnV0ZSk7XG59XG5mdW5jdGlvbiBkYXlPZklTT1dlZWtZZWFyKGlzb1dlZWtZZWFyLCB3ZWVrLCBkYXkpIHtcbiAgdmFyIGRhdGUgPSBuZXcgRGF0ZSgwKTtcbiAgZGF0ZS5zZXRVVENGdWxsWWVhcihpc29XZWVrWWVhciwgMCwgNCk7XG4gIHZhciBmb3VydGhPZkphbnVhcnlEYXkgPSBkYXRlLmdldFVUQ0RheSgpIHx8IDc7XG4gIHZhciBkaWZmID0gKHdlZWsgLSAxKSAqIDcgKyBkYXkgKyAxIC0gZm91cnRoT2ZKYW51YXJ5RGF5O1xuICBkYXRlLnNldFVUQ0RhdGUoZGF0ZS5nZXRVVENEYXRlKCkgKyBkaWZmKTtcbiAgcmV0dXJuIGRhdGU7XG59XG5cbi8vIFZhbGlkYXRpb24gZnVuY3Rpb25zXG5cbi8vIEZlYnJ1YXJ5IGlzIG51bGwgdG8gaGFuZGxlIHRoZSBsZWFwIHllYXIgKHVzaW5nIHx8KVxudmFyIGRheXNJbk1vbnRocyA9IFszMSwgbnVsbCwgMzEsIDMwLCAzMSwgMzAsIDMxLCAzMSwgMzAsIDMxLCAzMCwgMzFdO1xuZnVuY3Rpb24gaXNMZWFwWWVhckluZGV4KHllYXIpIHtcbiAgcmV0dXJuIHllYXIgJSA0MDAgPT09IDAgfHwgeWVhciAlIDQgPT09IDAgJiYgeWVhciAlIDEwMCAhPT0gMDtcbn1cbmZ1bmN0aW9uIHZhbGlkYXRlRGF0ZSh5ZWFyLCBtb250aCwgZGF0ZSkge1xuICByZXR1cm4gbW9udGggPj0gMCAmJiBtb250aCA8PSAxMSAmJiBkYXRlID49IDEgJiYgZGF0ZSA8PSAoZGF5c0luTW9udGhzW21vbnRoXSB8fCAoaXNMZWFwWWVhckluZGV4KHllYXIpID8gMjkgOiAyOCkpO1xufVxuZnVuY3Rpb24gdmFsaWRhdGVEYXlPZlllYXJEYXRlKHllYXIsIGRheU9mWWVhcikge1xuICByZXR1cm4gZGF5T2ZZZWFyID49IDEgJiYgZGF5T2ZZZWFyIDw9IChpc0xlYXBZZWFySW5kZXgoeWVhcikgPyAzNjYgOiAzNjUpO1xufVxuZnVuY3Rpb24gdmFsaWRhdGVXZWVrRGF0ZShfeWVhciwgd2VlaywgZGF5KSB7XG4gIHJldHVybiB3ZWVrID49IDEgJiYgd2VlayA8PSA1MyAmJiBkYXkgPj0gMCAmJiBkYXkgPD0gNjtcbn1cbmZ1bmN0aW9uIHZhbGlkYXRlVGltZShob3VycywgbWludXRlcywgc2Vjb25kcykge1xuICBpZiAoaG91cnMgPT09IDI0KSB7XG4gICAgcmV0dXJuIG1pbnV0ZXMgPT09IDAgJiYgc2Vjb25kcyA9PT0gMDtcbiAgfVxuICByZXR1cm4gc2Vjb25kcyA+PSAwICYmIHNlY29uZHMgPCA2MCAmJiBtaW51dGVzID49IDAgJiYgbWludXRlcyA8IDYwICYmIGhvdXJzID49IDAgJiYgaG91cnMgPCAyNTtcbn1cbmZ1bmN0aW9uIHZhbGlkYXRlVGltZXpvbmUoX2hvdXJzLCBtaW51dGVzKSB7XG4gIHJldHVybiBtaW51dGVzID49IDAgJiYgbWludXRlcyA8PSA1OTtcbn0iLCJpbXBvcnQgc3RhcnRPZldlZWsgZnJvbSBcIi4uL3N0YXJ0T2ZXZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBzdGFydE9mSVNPV2Vla1xuICogQGNhdGVnb3J5IElTTyBXZWVrIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgc3RhcnQgb2YgYW4gSVNPIHdlZWsgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBzdGFydCBvZiBhbiBJU08gd2VlayBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxuICpcbiAqIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyOiBodHRwOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0lTT193ZWVrX2RhdGVcbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIG9yaWdpbmFsIGRhdGVcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgc3RhcnQgb2YgYW4gSVNPIHdlZWtcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgc3RhcnQgb2YgYW4gSVNPIHdlZWsgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mSVNPV2VlayhuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApKVxuICogLy89PiBNb24gU2VwIDAxIDIwMTQgMDA6MDA6MDBcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZklTT1dlZWsoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICByZXR1cm4gc3RhcnRPZldlZWsoZGlydHlEYXRlLCB7XG4gICAgd2Vla1N0YXJ0c09uOiAxXG4gIH0pO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgeyBnZXREZWZhdWx0T3B0aW9ucyB9IGZyb20gXCIuLi9fbGliL2RlZmF1bHRPcHRpb25zL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHN0YXJ0T2ZXZWVrXG4gKiBAY2F0ZWdvcnkgV2VlayBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgd2VlayBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgd2VlayBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgb3JpZ2luYWwgZGF0ZVxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIGFuIG9iamVjdCB3aXRoIG9wdGlvbnMuXG4gKiBAcGFyYW0ge0xvY2FsZX0gW29wdGlvbnMubG9jYWxlPWRlZmF1bHRMb2NhbGVdIC0gdGhlIGxvY2FsZSBvYmplY3QuIFNlZSBbTG9jYWxlXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL0xvY2FsZX1cbiAqIEBwYXJhbSB7MHwxfDJ8M3w0fDV8Nn0gW29wdGlvbnMud2Vla1N0YXJ0c09uPTBdIC0gdGhlIGluZGV4IG9mIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsgKDAgLSBTdW5kYXkpXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHN0YXJ0IG9mIGEgd2Vla1xuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy53ZWVrU3RhcnRzT25gIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBzdGFydCBvZiBhIHdlZWsgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mV2VlayhuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApKVxuICogLy89PiBTdW4gQXVnIDMxIDIwMTQgMDA6MDA6MDBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdGhlIHdlZWsgc3RhcnRzIG9uIE1vbmRheSwgdGhlIHN0YXJ0IG9mIHRoZSB3ZWVrIGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZldlZWsobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSwgeyB3ZWVrU3RhcnRzT246IDEgfSlcbiAqIC8vPT4gTW9uIFNlcCAwMSAyMDE0IDAwOjAwOjAwXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZXZWVrKGRpcnR5RGF0ZSwgb3B0aW9ucykge1xuICB2YXIgX3JlZiwgX3JlZjIsIF9yZWYzLCBfb3B0aW9ucyR3ZWVrU3RhcnRzT24sIF9vcHRpb25zJGxvY2FsZSwgX29wdGlvbnMkbG9jYWxlJG9wdGlvLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwsIF9kZWZhdWx0T3B0aW9ucyRsb2NhbDI7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGVmYXVsdE9wdGlvbnMgPSBnZXREZWZhdWx0T3B0aW9ucygpO1xuICB2YXIgd2Vla1N0YXJ0c09uID0gdG9JbnRlZ2VyKChfcmVmID0gKF9yZWYyID0gKF9yZWYzID0gKF9vcHRpb25zJHdlZWtTdGFydHNPbiA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9vcHRpb25zJHdlZWtTdGFydHNPbiAhPT0gdm9pZCAwID8gX29wdGlvbnMkd2Vla1N0YXJ0c09uIDogb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlID0gb3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZSRvcHRpbyA9IF9vcHRpb25zJGxvY2FsZS5vcHRpb25zKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUkb3B0aW8gPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9vcHRpb25zJGxvY2FsZSRvcHRpby53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9yZWYzICE9PSB2b2lkIDAgPyBfcmVmMyA6IGRlZmF1bHRPcHRpb25zLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX3JlZjIgIT09IHZvaWQgMCA/IF9yZWYyIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9IGRlZmF1bHRPcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9IF9kZWZhdWx0T3B0aW9ucyRsb2NhbC5vcHRpb25zKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX3JlZiAhPT0gdm9pZCAwID8gX3JlZiA6IDApO1xuXG4gIC8vIFRlc3QgaWYgd2Vla1N0YXJ0c09uIGlzIGJldHdlZW4gMCBhbmQgNiBfYW5kXyBpcyBub3QgTmFOXG4gIGlmICghKHdlZWtTdGFydHNPbiA+PSAwICYmIHdlZWtTdGFydHNPbiA8PSA2KSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCd3ZWVrU3RhcnRzT24gbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDYgaW5jbHVzaXZlbHknKTtcbiAgfVxuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgZGF5ID0gZGF0ZS5nZXREYXkoKTtcbiAgdmFyIGRpZmYgPSAoZGF5IDwgd2Vla1N0YXJ0c09uID8gNyA6IDApICsgZGF5IC0gd2Vla1N0YXJ0c09uO1xuICBkYXRlLnNldERhdGUoZGF0ZS5nZXREYXRlKCkgLSBkaWZmKTtcbiAgZGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IF90eXBlb2YgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3R5cGVvZlwiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgdG9EYXRlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhbiBpbnN0YW5jZSBvZiBEYXRlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBpdHMgY2xvbmUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGEgbnVtYmVyLCBpdCBpcyB0cmVhdGVkIGFzIGEgdGltZXN0YW1wLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBub25lIG9mIHRoZSBhYm92ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgSW52YWxpZCBEYXRlLlxuICpcbiAqICoqTm90ZSoqOiAqYWxsKiBEYXRlIGFyZ3VtZW50cyBwYXNzZWQgdG8gYW55ICpkYXRlLWZucyogZnVuY3Rpb24gaXMgcHJvY2Vzc2VkIGJ5IGB0b0RhdGVgLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGFyZ3VtZW50IC0gdGhlIHZhbHVlIHRvIGNvbnZlcnRcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgcGFyc2VkIGRhdGUgaW4gdGhlIGxvY2FsIHRpbWUgem9uZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENsb25lIHRoZSBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKG5ldyBEYXRlKDIwMTQsIDEsIDExLCAxMSwgMzAsIDMwKSlcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbnZlcnQgdGhlIHRpbWVzdGFtcCB0byBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKDEzOTIwOTg0MzAwMDApXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0RhdGUoYXJndW1lbnQpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBhcmdTdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJndW1lbnQpO1xuXG4gIC8vIENsb25lIHRoZSBkYXRlXG4gIGlmIChhcmd1bWVudCBpbnN0YW5jZW9mIERhdGUgfHwgX3R5cGVvZihhcmd1bWVudCkgPT09ICdvYmplY3QnICYmIGFyZ1N0ciA9PT0gJ1tvYmplY3QgRGF0ZV0nKSB7XG4gICAgLy8gUHJldmVudCB0aGUgZGF0ZSB0byBsb3NlIHRoZSBtaWxsaXNlY29uZHMgd2hlbiBwYXNzZWQgdG8gbmV3IERhdGUoKSBpbiBJRTEwXG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50LmdldFRpbWUoKSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGFyZ3VtZW50ID09PSAnbnVtYmVyJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IE51bWJlcl0nKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50KTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoKHR5cGVvZiBhcmd1bWVudCA9PT0gJ3N0cmluZycgfHwgYXJnU3RyID09PSAnW29iamVjdCBTdHJpbmddJykgJiYgdHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS53YXJuKFwiU3RhcnRpbmcgd2l0aCB2Mi4wLjAtYmV0YS4xIGRhdGUtZm5zIGRvZXNuJ3QgYWNjZXB0IHN0cmluZ3MgYXMgZGF0ZSBhcmd1bWVudHMuIFBsZWFzZSB1c2UgYHBhcnNlSVNPYCB0byBwYXJzZSBzdHJpbmdzLiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNzdHJpbmctYXJndW1lbnRzXCIpO1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUud2FybihuZXcgRXJyb3IoKS5zdGFjayk7XG4gICAgfVxuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG59IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgY29uc3QgY3JlYXRlVGFzayA9ICgpID0+ICh7XHJcbiAgbmFtZTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stbmFtZScpLnZhbHVlLFxyXG4gIGRlc2NyaXB0aW9uOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1kZXNjcmlwdGlvbicpLnZhbHVlLFxyXG4gIGR1ZURhdGU6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkdWUtZGF0ZScpLnZhbHVlLFxyXG4gIHByaW9yaXR5OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJpb3JpdHknKS52YWx1ZSxcclxufSk7IiwiaW1wb3J0IHtJbmZvcm1hdGlvbkhvbGRlcn0gZnJvbSAnLi9pbmZvcm1hdGlvbmhvbGRlci5qcyc7XHJcbmltcG9ydCBkZWxldGVJY29uUGF0aCBmcm9tICcuL2Fzc2V0cy9pY29ucy9kZWxldGUtaWNvbi5zdmcnO1xyXG5pbXBvcnQgY2xvc2VJbmZvUGF0aCBmcm9tICcuL2Fzc2V0cy9pY29ucy9jbG9zZS1pbmZvLnN2Zyc7XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlUYXNrcyhpdGVyYXRlRnJvbSA9IEluZm9ybWF0aW9uSG9sZGVyLnRhc2tzLmxlbmd0aCAtMSkge1xyXG4gIGNvbnN0IGhvbWVUYXNrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ob21lLXRhc2tzJyk7XHJcbiAgZm9yIChsZXQgaSA9IGl0ZXJhdGVGcm9tOyBpIDwgSW5mb3JtYXRpb25Ib2xkZXIudGFza3MubGVuZ3RoOyBpKyspIHtcclxuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZGl2LmNsYXNzTGlzdC5hZGQoJ3Rhc2snKTtcclxuICAgIGRpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgaSk7XHJcblxyXG4gICAgY29uc3QgdGFza0RvbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgdGFza0RvbmUudHlwZSA9ICdjaGVja2JveCc7XHJcbiAgICB0YXNrRG9uZS5jbGFzc0xpc3QuYWRkKCd0YXNrLWRvbmUnKTtcclxuICAgIGRpdi5hcHBlbmRDaGlsZCh0YXNrRG9uZSk7XHJcblxyXG4gICAgY29uc3QgdGFza05hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICB0YXNrTmFtZS5jbGFzc0xpc3QuYWRkKCd0YXNrLW4nKTtcclxuICAgIHRhc2tOYW1lLnRleHRDb250ZW50ID0gSW5mb3JtYXRpb25Ib2xkZXIudGFza3NbaV0ubmFtZTtcclxuICAgIGRpdi5hcHBlbmRDaGlsZCh0YXNrTmFtZSk7XHJcblxyXG4gICAgY29uc3QgdGFza0RhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICB0YXNrRGF0ZS5jbGFzc0xpc3QuYWRkKCd0YXNrLWRhdGUnKTtcclxuICAgIHRhc2tEYXRlLnRleHRDb250ZW50ID0gSW5mb3JtYXRpb25Ib2xkZXIudGFza3NbaV0uZHVlRGF0ZTtcclxuICAgIGRpdi5hcHBlbmRDaGlsZCh0YXNrRGF0ZSk7XHJcblxyXG5cclxuICAgIGNvbnN0IGRlbGV0ZUljb24gPSBuZXcgSW1hZ2UoKTtcclxuICAgIGRlbGV0ZUljb24uY2xhc3NMaXN0LmFkZCgnZGVsZXRlLXRhc2snKTtcclxuICAgIGRlbGV0ZUljb24uc3JjID0gZGVsZXRlSWNvblBhdGg7XHJcbiAgICBkaXYuYXBwZW5kQ2hpbGQoZGVsZXRlSWNvbik7XHJcblxyXG4gICAgaG9tZVRhc2tzLmFwcGVuZENoaWxkKGRpdik7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheUFsbFRhc2tJbmZvKGFycmF5SW5kZXgpIHtcclxuICBjb25zdCBpbmZvRGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGluZm9EaXNwbGF5LmNsYXNzTGlzdC5hZGQoJ2luZm8tZGlzcGxheScpO1xyXG4gIFxyXG4gIGNvbnN0IHRhc2tOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gIHRhc2tOYW1lLnRleHRDb250ZW50ID0gSW5mb3JtYXRpb25Ib2xkZXIudGFza3NbYXJyYXlJbmRleF0ubmFtZTtcclxuICBjb25zdCB0YXNrRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgdGFza0Rlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gSW5mb3JtYXRpb25Ib2xkZXIudGFza3NbYXJyYXlJbmRleF0uZGVzY3JpcHRpb247XHJcbiAgY29uc3QgdGFza0RhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgdGFza0RhdGUudGV4dENvbnRlbnQgPSBgRHVlOiAke0luZm9ybWF0aW9uSG9sZGVyLnRhc2tzW2FycmF5SW5kZXhdLmR1ZURhdGV9YDtcclxuICBjb25zdCB0YXNrUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgdGFza1ByaW9yaXR5LnRleHRDb250ZW50ID0gYFByaW9yaXR5OiAke0luZm9ybWF0aW9uSG9sZGVyLnRhc2tzW2FycmF5SW5kZXhdLnByaW9yaXR5LnRvVXBwZXJDYXNlKCl9YDsgXHJcblxyXG4gIGNvbnN0IGNsb3NlSW5mbyA9IG5ldyBJbWFnZSgpO1xyXG4gIGNsb3NlSW5mby5zcmMgPSBjbG9zZUluZm9QYXRoO1xyXG4gIGNsb3NlSW5mby5jbGFzc0xpc3QuYWRkKCdjbG9zZS1pbmZvJyk7XHJcbiAgXHJcbiAgY29uc3QgcHJpb3JpdHlDb2xvciA9IHNlbGVjdFByaW9yaXR5Qm9yZGVyKEluZm9ybWF0aW9uSG9sZGVyLnRhc2tzW2FycmF5SW5kZXhdLnByaW9yaXR5KTtcclxuICBpbmZvRGlzcGxheS5zdHlsZS5ib3JkZXIgPSBgMnB4IHNvbGlkICR7cHJpb3JpdHlDb2xvcn1gO1xyXG4gIHRhc2tQcmlvcml0eS5zdHlsZS5jb2xvciA9IHByaW9yaXR5Q29sb3I7XHJcblxyXG4gIGluZm9EaXNwbGF5LmFwcGVuZENoaWxkKGNsb3NlSW5mbyk7XHJcbiAgaW5mb0Rpc3BsYXkuYXBwZW5kQ2hpbGQodGFza05hbWUpO1xyXG4gIGluZm9EaXNwbGF5LmFwcGVuZENoaWxkKHRhc2tEZXNjcmlwdGlvbik7XHJcbiAgaW5mb0Rpc3BsYXkuYXBwZW5kQ2hpbGQodGFza0RhdGUpO1xyXG4gIGluZm9EaXNwbGF5LmFwcGVuZENoaWxkKHRhc2tQcmlvcml0eSk7XHJcblxyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLWNvbnRlbnQnKS5hcHBlbmRDaGlsZChpbmZvRGlzcGxheSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNlbGVjdFByaW9yaXR5Qm9yZGVyKHByaW9yaXR5KSB7XHJcbiAgaWYgKHByaW9yaXR5ID09PSAnbG93JykgcmV0dXJuICcjMmQ3YmQyJztcclxuICBpZiAocHJpb3JpdHkgPT09ICdtZWRpdW0nKSByZXR1cm4gJyNmZmM2MDAnO1xyXG4gIHJldHVybiAnI2ZmMDAxOCc7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5QWxsVGFza3MoKSB7XHJcbiAgY29uc3QgYWxsVGFza3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFzay1kYXRlJyk7XHJcbiAgYWxsVGFza3MuZm9yRWFjaCh0YXNrID0+IHtcclxuICAgIHRhc2sucGFyZW50RWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlQWxsVGFza3MoKSB7XHJcbiAgY29uc3QgYWxsVGFza3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaG9tZS10YXNrcyA+IDpub3QoLnRhc2tzLWhlYWRlciknKTtcclxuICBhbGxUYXNrcy5mb3JFYWNoKHRhc2sgPT4gdGFzay5yZW1vdmUoKSk7XHJcbn1cclxuIiwiaW1wb3J0IHRpY2sgZnJvbSAnLi9hc3NldHMvaWNvbnMvY2hlY2staWNvbi5wbmcnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFkanVzdFRpY2tNYXJrKCkge1xyXG4gIGNvbnN0IHRpY2tNYXJrID0gbmV3IEltYWdlKCk7XHJcbiAgdGlja01hcmsuc3JjID0gdGljaztcclxuICB0aWNrTWFyay5zdHlsZS53aWR0aCA9ICc0MHB4JztcclxuICB0aWNrTWFyay5zdHlsZS5oZWlnaHQgPSAnNDBweCc7XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcicpLmFwcGVuZENoaWxkKHRpY2tNYXJrKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHRhc2tzSGVhZGVyKCkge1xyXG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGRpdi5jbGFzc0xpc3QuYWRkKCd0YXNrcy1oZWFkZXInKTtcclxuICBjb25zdCBoMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgaDMudGV4dENvbnRlbnQgPSAnTmFtZSc7XHJcbiAgY29uc3QgaGVhZGVyMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgaGVhZGVyMy5jbGFzc0xpc3QuYWRkKCdkdWUnKTtcclxuICBoZWFkZXIzLnRleHRDb250ZW50ID0gJ0R1ZSBEYXRlJztcclxuXHJcbiAgZGl2LmFwcGVuZENoaWxkKGgzKTtcclxuICBkaXYuYXBwZW5kQ2hpbGQoaGVhZGVyMyk7XHJcbiAgcmV0dXJuIGRpdjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZVRhYk5hbWUobmFtZSkge1xyXG4gIGNvbnN0IGN1cnJlbnRUYWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3VycmVudC10YWInKTtcclxuICBjdXJyZW50VGFiLnRleHRDb250ZW50ID0gbmFtZTtcclxufSIsImltcG9ydCAnLi9zdHlsZXMuc2Nzcyc7XHJcbmltcG9ydCB7YWRqdXN0VGlja01hcmt9IGZyb20gJy4vaGVhZGVyLmpzJztcclxuaW1wb3J0IHtNYW5hZ2VGb3JtfSBmcm9tICcuL3Rhc2tmb3JtLmpzJztcclxuaW1wb3J0IHtNYW5hZ2VQcm9qZWN0Rm9ybX0gZnJvbSAnLi9wcm9qZWN0Zm9ybS5qcyc7XHJcbmltcG9ydCB7TWVkaWF0b3JET019IGZyb20gJy4vbWVkaWF0b3Jkb20uanMnO1xyXG5pbXBvcnQge2Rpc3BsYXlUYXNrc30gZnJvbSAnLi9kaXNwbGF5dGFza3MuanMnO1xyXG5cclxuXHJcbmFkanVzdFRpY2tNYXJrKCk7XHJcblxyXG5NZWRpYXRvckRPTS5pbml0aWFsaXplKCk7XHJcblxyXG5jb25zdCBmb3JtID0gTWFuYWdlRm9ybSgpO1xyXG5mb3JtLmluaXRpYWxpemUoKTtcclxuXHJcbmNvbnN0IHByb2plY3RGb3JtID0gTWFuYWdlUHJvamVjdEZvcm0oKTtcclxucHJvamVjdEZvcm0uaW5pdGlhbGl6ZSgpO1xyXG5cclxuaWYgKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rhc2tzJykpLmxlbmd0aCA+IDApIHtcclxuICBkaXNwbGF5VGFza3MoMCk7XHJcbn1cclxuIiwiZXhwb3J0IGNsYXNzIEluZm9ybWF0aW9uSG9sZGVyIHtcclxuICBzdGF0aWMgdGFza3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0YXNrcycpKSB8fCBbXTtcclxuICBzdGF0aWMgcHJvamVjdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0JykpIHx8IFtdO1xyXG4gIHN0YXRpYyBwcm9qZWN0TmFtZSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3ROYW1lJykpIHx8IFtdO1xyXG5cclxuICBcclxuICBzdGF0aWMgYWRkVGFzayhzb21lVGFzaykge1xyXG4gICAgdGhpcy50YXNrcy5wdXNoKHNvbWVUYXNrKTtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0YXNrcycsIEpTT04uc3RyaW5naWZ5KHRoaXMudGFza3MpKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyByZW1vdmVUYXNrKGFUYXNrKSB7XHJcbiAgICBjb25zdCB0YXNrSW5kZXggPSBOdW1iZXIoYVRhc2suaWQpO1xyXG4gICAgdGhpcy50YXNrcy5zcGxpY2UodGFza0luZGV4LCAxKTtcclxuICAgIHRoaXMuI2FkanVzdElkKHRhc2tJbmRleCk7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGFza3MnLCBKU09OLnN0cmluZ2lmeSh0aGlzLnRhc2tzKSk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgI2FkanVzdElkKGRlbGV0ZWRJZCkge1xyXG4gICAgY29uc3QgZGl2cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGFza1wiKTtcclxuICAgIGlmIChkaXZzLmxlbmd0aCA+IDApIHtcclxuICAgICAgZGl2cy5mb3JFYWNoKGRpdiA9PiB7XHJcbiAgICAgICAgaWYgKGRpdi5pZCA+IGRlbGV0ZWRJZCkge1xyXG4gICAgICAgICAgY29uc3QgY3VycmVudElkID0gcGFyc2VJbnQoZGl2LmlkLm1hdGNoKC9cXGQrLylbMF0pO1xyXG4gICAgICAgICAgZGl2LmlkID0gZGl2LmlkLnJlcGxhY2UoY3VycmVudElkLCBjdXJyZW50SWQgLSAxKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc3RhdGljIGFkZFByb2plY3Qoc29tZVByb2plY3QpIHtcclxuICAgIHRoaXMucHJvamVjdHMucHVzaChzb21lUHJvamVjdCk7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdCcsIEpTT04uc3RyaW5naWZ5KHRoaXMucHJvamVjdHMpKTtcclxuICB9XHJcblxyXG4vKiAgIHN0YXRpYyByZW1vdmVQcm9qZWN0KGFQcm9qZWN0KSB7XHJcbiAgICBjb25zdCBwcm9qZWN0SW5kZXggPSBOdW1iZXIoYVRhc2suaWQpO1xyXG4gICAgdGhpcy5wcm9qZWN0cy5zcGxpY2UocHJvamVjdEluZGV4LCAxKTtcclxuICAgIHRoaXMuI2FkanVzdElkKHRhc2tJbmRleCk7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdCcsIEpTT04uc3RyaW5naWZ5KHRoaXMucHJvamVjdHMpKTtcclxuICB9ICovXHJcblxyXG4gIHN0YXRpYyBhZGRQcm9qZWN0TmFtZShzb21lUHJvamVjdE5hbWUpIHtcclxuICAgIHRoaXMucHJvamVjdE5hbWUucHVzaChzb21lUHJvamVjdE5hbWUpO1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3ROYW1lJywgSlNPTi5zdHJpbmdpZnkodGhpcy5wcm9qZWN0TmFtZSkpO1xyXG4gIH1cclxuXHJcbn1cclxuIiwiaW1wb3J0IHsgY2hhbmdlVGFiTmFtZSB9IGZyb20gXCIuL2hlYWRlci5qc1wiO1xyXG5pbXBvcnQgeyBjcmVhdGVUYXNrIH0gZnJvbSBcIi4vY3JlYXRldGFzay5qc1wiO1xyXG5pbXBvcnQgeyBJbmZvcm1hdGlvbkhvbGRlciB9IGZyb20gXCIuL2luZm9ybWF0aW9uaG9sZGVyLmpzXCI7XHJcbmltcG9ydCB7IGRpc3BsYXlUYXNrcywgZGlzcGxheUFsbFRhc2tzLCBkaXNwbGF5QWxsVGFza0luZm99IGZyb20gXCIuL2Rpc3BsYXl0YXNrcy5qc1wiO1xyXG5pbXBvcnQgeyBkaXNwbGF5VG9kYXlUYXNrcyB9IGZyb20gXCIuL3RvZGF5dGFza3MuanNcIjtcclxuaW1wb3J0IHsgZGlzcGxheVdlZWtUYXNrcyB9IGZyb20gXCIuL3dlZWt0YXNrcy5qc1wiO1xyXG5pbXBvcnQgZGVsZXRlUHJvamVjdEljb24gZnJvbSAnLi9hc3NldHMvaWNvbnMvZGVsZXRlLXByb2plY3Quc3ZnJztcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgTWVkaWF0b3JET00ge1xyXG4gIHN0YXRpYyBpbnNlcnRUYXNrKCkge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN1Ym1pdCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybScpLmNoZWNrVmFsaWRpdHkoKSkge1xyXG4gICAgICAgIEluZm9ybWF0aW9uSG9sZGVyLmFkZFRhc2soY3JlYXRlVGFzaygpKTtcclxuICAgICAgICBkaXNwbGF5VGFza3MoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgc3RhdGljIHNob3dUYXNrSW5mbygpIHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLWNvbnRlbnQnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3Rhc2stbicpKSB7XHJcbiAgICAgICAgZGlzcGxheUFsbFRhc2tJbmZvKE51bWJlcihlLnRhcmdldC5wYXJlbnRFbGVtZW50LmlkKSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHN0YXRpYyBjbG9zZVRhc2tJbmZvKCkge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tY29udGVudCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnY2xvc2UtaW5mbycpKSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnJlbW92ZSgpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgY3Jvc3NUYXNrKCkge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tY29udGVudCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygndGFzay1kb25lJykpIHtcclxuICAgICAgICBjb25zdCB0YXNrc05hbWVBbmREYXRlID0gQXJyYXkuZnJvbShlLnRhcmdldC5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3JBbGwoJ3AnKSk7XHJcbiAgICAgICAgdGFza3NOYW1lQW5kRGF0ZS5mb3JFYWNoKCh0YXNrKSA9PiB7XHJcbiAgICAgICAgICBpZiAoZS50YXJnZXQuY2hlY2tlZCA9PT0gdHJ1ZSkgdGFzay5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9ICdsaW5lLXRocm91Z2gnO1xyXG4gICAgICAgICAgZWxzZSB0YXNrLnN0eWxlLnRleHREZWNvcmF0aW9uID0gJ25vbmUnO1xyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGRlbGV0ZVRhc2soKSB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1jb250ZW50JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdkZWxldGUtdGFzaycpKSB7XHJcbiAgICAgICAgSW5mb3JtYXRpb25Ib2xkZXIucmVtb3ZlVGFzayhlLnRhcmdldC5wYXJlbnRFbGVtZW50KTtcclxuICAgICAgICBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnJlbW92ZSgpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBzdGF0aWMgc2hvd0hvbWVUYXNrcygpIHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ob21lJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIGNoYW5nZVRhYk5hbWUoJ0hvbWUnKTtcclxuICAgICAgZGlzcGxheUFsbFRhc2tzKCk7XHJcbiAgICB9KTtcclxuICB9XHJcbiBcclxuICBzdGF0aWMgc2hvd1RvZGF5VGFza3MoKSB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kYXknKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgY2hhbmdlVGFiTmFtZSgnVG9kYXknKTtcclxuICAgICAgZGlzcGxheVRvZGF5VGFza3MoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIHNob3dXZWVrVGFza3MoKSB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2VlaycpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICBjaGFuZ2VUYWJOYW1lKCdXZWVrJyk7XHJcbiAgICAgIGRpc3BsYXlBbGxUYXNrcygpO1xyXG4gICAgICBkaXNwbGF5V2Vla1Rhc2tzKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG5cclxuICBzdGF0aWMgdXBkYXRlVGFza0xpc3QoKSB7XHJcbiAgICBjb25zdCB0YXJnZXROb2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhvbWUtdGFza3MnKTtcclxuICAgIGNvbnN0IGN1cnJlbnRUYWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3VycmVudC10YWInKTtcclxuXHJcbiAgICBjb25zdCBjb25maWcgPSB7Y2hpbGRMaXN0OiB0cnVlLCBzdWJ0cmVlOiB0cnVlIH07XHJcbiAgICBjb25zdCBjYWxsYmFjayA9IChtdXRhdGlvbkxpc3QpID0+IHtcclxuICAgICAgZm9yIChjb25zdCBtdXRhdGlvbiBvZiBtdXRhdGlvbkxpc3QpIHtcclxuICAgICAgICBpZiAobXV0YXRpb24udHlwZSA9PT0gJ2NoaWxkTGlzdCcgJiYgbXV0YXRpb24uYWRkZWROb2Rlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICBpZiAoY3VycmVudFRhYi50ZXh0Q29udGVudCA9PT0gJ1RvZGF5JyB8fCBjdXJyZW50VGFiLnRleHRDb250ZW50ID09PSAnV2VlaycpIHtcclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7Y3VycmVudFRhYi50ZXh0Q29udGVudC50b0xvd2VyQ2FzZSgpfWApLmNsaWNrKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoY2FsbGJhY2spO1xyXG4gICAgb2JzZXJ2ZXIub2JzZXJ2ZSh0YXJnZXROb2RlLCBjb25maWcpO1xyXG4gIH1cclxuXHJcblxyXG4gIHN0YXRpYyBpbnNlcnRQcm9qZWN0KCkge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdzdWJtaXQtcHJvamVjdCcpKSB7XHJcbiAgICAgICAgY29uc3QgbmFtZSA9IGAtJHtlLnRhcmdldC5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0gPiBpbnB1dCcpLnZhbHVlfWA7XHJcbiAgICAgICAgSW5mb3JtYXRpb25Ib2xkZXIuYWRkUHJvamVjdE5hbWUobmFtZSk7XHJcbiAgICAgICAgSW5mb3JtYXRpb25Ib2xkZXIuYWRkUHJvamVjdChbXSk7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVQcm9qZWN0RGl2KCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGNyZWF0ZVByb2plY3REaXYoKSB7XHJcbiAgICBjb25zdCBudW1iZXJPZlByb2plY3RzID0gSW5mb3JtYXRpb25Ib2xkZXIucHJvamVjdHMubGVuZ3RoO1xyXG4gICAgSW5mb3JtYXRpb25Ib2xkZXIucHJvamVjdE5hbWUuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xyXG4gICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgZGl2LnRleHRDb250ZW50ID0gcHJvamVjdDtcclxuICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QnKTtcclxuICAgICAgZGl2LnNldEF0dHJpYnV0ZSgnZGF0YS1wcm9qZWN0LWlkJywgbnVtYmVyT2ZQcm9qZWN0cyAtIDEpO1xyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHMnKS5hcHBlbmRDaGlsZChkaXYpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgY2hhbmdlUHJvamVjdFRhYigpIHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0cycpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygncHJvamVjdCcpKSB7XHJcbiAgICAgICAgY2hhbmdlVGFiTmFtZShlLnRhcmdldC50ZXh0Q29udGVudCk7XHJcbiAgICAgICAgY29uc3QgZGVsZXRlUHJvamVjdCA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICAgIGRlbGV0ZVByb2plY3Quc3JjID0gZGVsZXRlUHJvamVjdEljb247XHJcbiAgICAgICAgZGVsZXRlUHJvamVjdC5jbGFzc0xpc3QuYWRkKCdkZWxldGUtcHJvamVjdCcpO1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLWNvbnRlbnQnKS5hcHBlbmRDaGlsZChkZWxldGVQcm9qZWN0KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZGVsZXRlRGVsZXRlSWNvbigpIHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlYmFyJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IGN1cnJlbnRUYWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3VycmVudC10YWInKS50ZXh0Q29udGVudDtcclxuICAgICAgaWYgKGN1cnJlbnRUYWIgPT09ICdIb21lJyB8fCBjdXJyZW50VGFiID09PSAnVG9kYXknIHx8IGN1cnJlbnRUYWIgPT09ICdXZWVrJykge1xyXG4gICAgICAgIGNvbnN0IGRlbGV0ZUljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGVsZXRlLXByb2plY3QnKTtcclxuICAgICAgaWYgKGRlbGV0ZUljb24gIT09IG51bGwpIGRlbGV0ZUljb24ucmVtb3ZlKCk7XHJcbiAgICB9ICBcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcblxyXG4gIHN0YXRpYyBpbml0aWFsaXplKCkge1xyXG4gICAgdGhpcy5pbnNlcnRUYXNrKCk7XHJcbiAgICB0aGlzLnNob3dUYXNrSW5mbygpO1xyXG4gICAgdGhpcy5jbG9zZVRhc2tJbmZvKCk7XHJcbiAgICB0aGlzLmNyb3NzVGFzaygpO1xyXG4gICAgdGhpcy5zaG93SG9tZVRhc2tzKCk7XHJcbiAgICB0aGlzLnNob3dUb2RheVRhc2tzKCk7XHJcbiAgICB0aGlzLnNob3dXZWVrVGFza3MoKTtcclxuICAgIHRoaXMuZGVsZXRlVGFzaygpO1xyXG4gICAgdGhpcy51cGRhdGVUYXNrTGlzdCgpO1xyXG4gICAgdGhpcy5pbnNlcnRQcm9qZWN0KCk7XHJcbiAgICB0aGlzLmNyZWF0ZVByb2plY3REaXYoKTtcclxuICAgIHRoaXMuY2hhbmdlUHJvamVjdFRhYigpO1xyXG4gICAgdGhpcy5kZWxldGVEZWxldGVJY29uKCk7XHJcbiAgfVxyXG59O1xyXG4iLCJleHBvcnQgY29uc3QgTWFuYWdlUHJvamVjdEZvcm0gPSAoKSA9PiAoe1xyXG4gIGFkZFByb2plY3RCdXR0b246IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctcHJvamVjdCcpLFxyXG4gIHByb2plY3RUYWI6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0cycpLFxyXG5cclxuICBjcmVhdGVGb3JtKCkge1xyXG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcclxuICAgIGZvcm0uY2xhc3NMaXN0LmFkZCgnLnByb2plY3QtZm9ybScpO1xyXG4gICAgZm9ybS5zdHlsZS5kaXNwbGF5ID0gJ2dyaWQnO1xyXG4gICAgZm9ybS5hY3Rpb24gPSAnIyc7XHJcbiAgICBmb3JtLm1ldGhvZCA9ICdwb3N0JztcclxuICAgIGNvbnN0IHByb2plY3ROYW1lTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgcHJvamVjdE5hbWVMYWJlbC50ZXh0Q29udGVudCA9ICdQcm9qZWN0IE5hbWUnO1xyXG4gICAgY29uc3QgcHJvamVjdE5hbWVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICBwcm9qZWN0TmFtZUlucHV0LnJlcXVpcmVkID0gdHJ1ZTtcclxuICBcclxuXHJcbiAgICBmb3JtLmFwcGVuZENoaWxkKHByb2plY3ROYW1lTGFiZWwpO1xyXG4gICAgZm9ybS5hcHBlbmRDaGlsZChwcm9qZWN0TmFtZUlucHV0KTtcclxuXHJcbiAgICBjb25zdCBzdWJtaXRQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBzdWJtaXRQcm9qZWN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3N1Ym1pdC1wcm9qZWN0JylcclxuICAgIHN1Ym1pdFByb2plY3RCdXR0b24udGV4dENvbnRlbnQgPSAnQ3JlYXRlIFByb2plY3QnO1xyXG4gICAgY29uc3Qgbm90U3VibWl0UHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgbm90U3VibWl0UHJvamVjdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdjYW5jZWwtcHJvamVjdCcpO1xyXG4gICAgbm90U3VibWl0UHJvamVjdEJ1dHRvbi50ZXh0Q29udGVudCA9ICdDYW5jZWwnO1xyXG4gICAgZm9ybS5hcHBlbmRDaGlsZChzdWJtaXRQcm9qZWN0QnV0dG9uKTtcclxuICAgIGZvcm0uYXBwZW5kQ2hpbGQobm90U3VibWl0UHJvamVjdEJ1dHRvbik7XHJcblxyXG4gICAgdGhpcy5wcm9qZWN0VGFiLmFwcGVuZENoaWxkKGZvcm0pO1xyXG4gIH0sXHJcblxyXG4gIHNob3dQcm9qZWN0Rm9ybSgpIHtcclxuICAgIHRoaXMucHJvamVjdFRhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ25ldy1wcm9qZWN0JykpIHtcclxuICAgICAgICB0aGlzLmNyZWF0ZUZvcm0oKTtcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9LFxyXG5cclxuICBzdWJtaXRQcm9qZWN0Rm9ybSgpIHtcclxuICAgIHRoaXMucHJvamVjdFRhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3N1Ym1pdC1wcm9qZWN0JykpIHtcclxuICAgICAgICBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnJlbW92ZSgpO1xyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH0sXHJcblxyXG4gIGNsb3NlUHJvamVjdEZvcm0oKSB7XHJcbiAgICB0aGlzLnByb2plY3RUYWIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjYW5jZWwtcHJvamVjdCcpKSB7XHJcbiAgICAgICAgZS50YXJnZXQucGFyZW50RWxlbWVudC5yZW1vdmUoKTtcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9LFxyXG5cclxuXHJcbiAgaW5pdGlhbGl6ZSgpIHtcclxuICAgIHRoaXMuc2hvd1Byb2plY3RGb3JtKCk7XHJcbiAgICB0aGlzLnN1Ym1pdFByb2plY3RGb3JtKCk7XHJcbiAgICB0aGlzLmNsb3NlUHJvamVjdEZvcm0oKTtcclxuICB9LFxyXG59KTsiLCJleHBvcnQgY29uc3QgTWFuYWdlRm9ybSA9ICgpID0+ICh7XHJcbiAgYWRkVGFza0J1dHRvbjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC10YXNrJyksXHJcbiAgZm9ybTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybScpLFxyXG5cclxuICBjbGVhckZvcm0oKSB7XHJcbiAgICBjb25zdCBmb3JtSW5wdXRzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdmb3JtIGlucHV0JykpO1xyXG4gICAgZm9ybUlucHV0cy5mb3JFYWNoKChpbnB1dCkgPT4ge1xyXG4gICAgICBpbnB1dC52YWx1ZSA9ICcnO1xyXG4gICAgfSlcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3RleHRhcmVhJykudmFsdWUgPSAnJztcclxuICB9LFxyXG5cclxuICBvcGVuRm9ybSgpIHtcclxuICAgIHRoaXMuYWRkVGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgdGhpcy5mb3JtLnN0eWxlLmRpc3BsYXkgPSAnZ3JpZCc7XHJcbiAgICB9KTtcclxuICB9LFxyXG5cclxuICBjbG9zZUZvcm0oKSB7XHJcbiAgICB0aGlzLmZvcm0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICB9LFxyXG5cclxuICBjYW5jZWwoKSB7XHJcbiAgICBjb25zdCBjbG9zZUZvcm1CdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FuY2VsJyk7XHJcbiAgICBjbG9zZUZvcm1CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIHRoaXMuY2xvc2VGb3JtKCk7XHJcbiAgICAgIHRoaXMuY2xlYXJGb3JtKCk7XHJcbiAgICB9KTtcclxuICB9LFxyXG5cclxuICBzdWJtaXRGb3JtKCkge1xyXG4gICAgY29uc3Qgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN1Ym1pdCcpO1xyXG4gICAgc3VibWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICBpZiAodGhpcy5mb3JtLmNoZWNrVmFsaWRpdHkoKSkge1xyXG4gICAgICAgIHRoaXMuY2xvc2VGb3JtKCk7XHJcbiAgICAgICAgdGhpcy5jbGVhckZvcm0oKTtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuXHJcbiAgaW5pdGlhbGl6ZSgpIHtcclxuICAgIHRoaXMub3BlbkZvcm0oKTtcclxuICAgIHRoaXMuY2FuY2VsKCk7XHJcbiAgICB0aGlzLnN1Ym1pdEZvcm0oKTtcclxuICB9LFxyXG59KTtcclxuIiwiZXhwb3J0IGZ1bmN0aW9uIGdldFRvZGF5RGF0ZSgpIHtcclxuICBjb25zdCBkYXRlID0gbmV3IERhdGUoKTtcclxuICBjb25zdCB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xyXG4gIGxldCBtb250aCA9IGRhdGUuZ2V0TW9udGgoKSArIDE7XHJcbiAgbGV0IGRheSA9IGRhdGUuZ2V0RGF0ZSgpO1xyXG5cclxuICBpZiAobW9udGggPCAxMCkgbW9udGggPSBgMCR7bW9udGh9YDtcclxuICBpZiAoZGF5IDwgMTApIGRheSA9IGAwJHtkYXl9YDtcclxuXHJcbiAgcmV0dXJuIGAke3llYXJ9LSR7bW9udGh9LSR7ZGF5fWA7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheVRvZGF5VGFza3MoKSB7XHJcbiAgY29uc3QgdG9kYXlEYXRlID0gZ2V0VG9kYXlEYXRlKCk7XHJcbiAgY29uc3QgYWxsVGFza3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFzay1kYXRlJyk7XHJcbiAgYWxsVGFza3MuZm9yRWFjaCh0YXNrID0+IHtcclxuICAgIGlmICh0YXNrLnRleHRDb250ZW50ICE9PSB0b2RheURhdGUpIHRhc2sucGFyZW50RWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gIH0pO1xyXG59IiwiaW1wb3J0IHtkaWZmZXJlbmNlSW5DYWxlbmRhcklTT1dlZWtzLCBmb3JtYXRJU08sIGVuZE9mSVNPV2VlaywgcGFyc2VJU099IGZyb20gJ2RhdGUtZm5zLyc7XHJcbmltcG9ydCB7Z2V0VG9kYXlEYXRlfSBmcm9tICcuL3RvZGF5dGFza3MuanMnO1xyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRXZWVrKCkge1xyXG4gIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKTtcclxuICBjb25zdCBlbmRPZldlZWsgPSBlbmRPZklTT1dlZWsodG9kYXkpO1xyXG5cclxuICBjb25zdCB0ZXN0ZSA9ICcyMDIzLTA1LTIxJztcclxuICBjb25zdCByZXN1bHRhZG8gPSBwYXJzZUlTTyh0ZXN0ZSk7XHJcblxyXG4gIGNvbnN0IHJlc3VsdCA9IGRpZmZlcmVuY2VJbkNhbGVuZGFySVNPV2Vla3MoXHJcbiAgICBlbmRPZldlZWssXHJcbiAgICByZXN1bHRhZG9cclxuICApXHJcblxyXG4gIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheVdlZWtUYXNrcygpIHtcclxuICBjb25zdCB0b2RheURhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gIGNvbnN0IGVuZE9mV2VlayA9IGVuZE9mSVNPV2Vlayh0b2RheURhdGUpO1xyXG5cclxuICBjb25zdCBhbGxUYXNrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YXNrLWRhdGUnKTtcclxuICBhbGxUYXNrcy5mb3JFYWNoKHRhc2sgPT4ge1xyXG4gICAgY29uc3QgdGFza0R1ZURheSA9IHBhcnNlSVNPKHRhc2sudGV4dENvbnRlbnQpO1xyXG4gICAgaWYgKGRpZmZlcmVuY2VJbkNhbGVuZGFySVNPV2Vla3MoZW5kT2ZXZWVrLCB0YXNrRHVlRGF5KSAhPT0gMCkgdGFzay5wYXJlbnRFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgfSk7XHJcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgcmV0dXJuIF90eXBlb2YgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBcInN5bWJvbFwiID09IHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPyBmdW5jdGlvbiAob2JqKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gIH0gOiBmdW5jdGlvbiAob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgfSwgX3R5cGVvZihvYmopO1xufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==