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
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: \"Abel\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"woff2\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"woff\");\n  font-style: normal;\n}\n* {\n  box-sizing: border-box;\n}\n\nbody,\nhtml {\n  font-family: \"Abel\", system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n  margin: 0;\n  padding: 0;\n  height: 100%;\n}\n\n.page-wrapper {\n  display: grid;\n  grid-template-rows: 2fr 8fr 1fr;\n  grid-template-columns: 2fr 9fr;\n  height: 100%;\n}\n\n.header > h1 {\n  font-size: 40px;\n  font-weight: 800;\n  color: #c23150;\n}\n\n.header {\n  display: flex;\n  align-items: center;\n  grid-row: 1/2;\n  grid-column: 1/-1;\n  background-color: #a2b8b3;\n  gap: 15px;\n  padding: 0 30px;\n}\n\n.sidebar {\n  display: grid;\n  grid-row: 2/3;\n  grid-column: 1/2;\n  background-color: #b2b8b7;\n  color: #272727;\n  align-content: start;\n  padding: 30px;\n  gap: 30px;\n  font-size: 27px;\n  font-weight: 600;\n}\n\n.sidebar > div {\n  cursor: pointer;\n}\n\n.sidebar > div:hover {\n  background-color: rgb(198, 209, 207);\n  border-radius: 10px;\n}\n\n.main-content {\n  display: grid;\n  grid-template-rows: auto 1fr;\n  grid-template-columns: auto 1fr;\n  grid-row: 2/3;\n  grid-column: 2/-1;\n  background-color: #dfd5d5;\n}\n\n.add-task {\n  display: inline-flex;\n  align-items: center;\n  margin: 0;\n  gap: 5px;\n  cursor: pointer;\n  margin: 20px 20px;\n  padding: 3px 6px;\n  grid-row: 1/2;\n  grid-column: 1/2;\n}\n\n.add-task > * {\n  margin: 0;\n  padding: 0;\n}\n\n.add-task:hover {\n  background-color: #b2b8b7;\n  border-radius: 8px;\n}\n\n.add-task:hover > svg {\n  transform: rotate(90deg);\n  transition: 0.4s ease-in-out;\n}\n\n.current-tab {\n  color: #c23150;\n  font-size: 30px;\n  font-weight: 600;\n  justify-self: center;\n  grid-column: 1/-1;\n  grid-row: 1/2;\n}\n\nform {\n  position: fixed;\n  display: none;\n  gap: 10px;\n  z-index: 99;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background-color: #b2b8b7;\n  color: #c23150;\n  font-weight: 500;\n  padding: 10px 20px;\n  border-radius: 10px;\n}\n\n.widget {\n  display: flex;\n  flex-direction: column;\n}\n\n.form-buttons {\n  display: flex;\n  justify-content: space-around;\n}\n\n.form-buttons > * {\n  cursor: pointer;\n}\n\n.home-tasks {\n  display: grid;\n  grid-template-columns: 1fr 4fr 1fr;\n  grid-template-rows: repeat(auto-fit, minmax(auto, 1fr));\n  align-content: start;\n  grid-row: 2/-1;\n  grid-column: 1/-1;\n}\n\n.home-tasks-header {\n  display: inline-flex;\n  justify-content: space-between;\n  font-weight: 600;\n}\n\n.due {\n  padding-right: 25px;\n}\n\n.task {\n  display: flex;\n}\n\n.task-n {\n  margin-right: auto;\n}\n\n.task:hover {\n  background-color: #f0e6e6;\n}\n\n.task-d {\n  padding-right: 10px;\n}\n\n.home-tasks > * {\n  grid-column: 2/3;\n  border-bottom: 1px solid #c23150;\n}\n\n.delete-task {\n  cursor: pointer;\n}\n\n.delete-task:hover {\n  animation: move-up 0.5s ease-in-out;\n}\n\n@keyframes move-up {\n  0% {\n    transform: translateY(0);\n  }\n  50% {\n    transform: translateY(-5px);\n  }\n  100% {\n    transform: translateY(0);\n  }\n}\na {\n  text-decoration: none;\n  color: #272727;\n}\n\n.footer {\n  display: grid;\n  grid-row: -2/-1;\n  grid-column: 1/-1;\n  background-color: #a2b8b3;\n}", "",{"version":3,"sources":["webpack://./src/styles.scss"],"names":[],"mappings":"AAAA;EACE,mBAAA;EACA,oHAAA;EAEE,kBAAA;AAAJ;AASA;EACE,sBAAA;AAPF;;AAUA;;EAEE,2JAAA;EACA,SAAA;EACA,UAAA;EACA,YAAA;AAPF;;AAUA;EACE,aAAA;EACA,+BAAA;EACA,8BAAA;EACA,YAAA;AAPF;;AAUA;EACE,eAAA;EACA,gBAAA;EACA,cA1BoB;AAmBtB;;AAUA;EACE,aAAA;EACA,mBAAA;EACA,aAAA;EACA,iBAAA;EACA,yBApCc;EAqCd,SAAA;EACA,eAAA;AAPF;;AAUA;EACE,aAAA;EACA,aAAA;EACA,gBAAA;EACA,yBA5CgB;EA6ChB,cA1CM;EA2CN,oBAAA;EACA,aAAA;EACA,SAAA;EACA,eAAA;EACA,gBAAA;AAPF;;AAUA;EACE,eAAA;AAPF;;AAUA;EACE,oCAAA;EACA,mBAAA;AAPF;;AAUA;EACE,aAAA;EACA,4BAAA;EACA,+BAAA;EACA,aAAA;EACA,iBAAA;EACA,yBAAA;AAPF;;AAUA;EACE,oBAAA;EACA,mBAAA;EACA,SAAA;EACA,QAAA;EACA,eAAA;EACA,iBAAA;EACA,gBAAA;EACA,aAAA;EACA,gBAAA;AAPF;;AAUA;EACE,SAAA;EACA,UAAA;AAPF;;AAUA;EACE,yBAzFgB;EA0FhB,kBAAA;AAPF;;AAUA;EACE,wBAAA;EACA,4BAAA;AAPF;;AAUA;EACE,cAlGoB;EAmGpB,eAAA;EACA,gBAAA;EACA,oBAAA;EACA,iBAAA;EACA,aAAA;AAPF;;AAUA;EACE,eAAA;EACA,aAAA;EACA,SAAA;EACA,WAAA;EACA,QAAA;EACA,SAAA;EACA,gCAAA;EACA,yBAnHgB;EAoHhB,cAnHoB;EAoHpB,gBAAA;EACA,kBAAA;EACA,mBAAA;AAPF;;AAUA;EACE,aAAA;EACA,sBAAA;AAPF;;AAUA;EACE,aAAA;EACA,6BAAA;AAPF;;AAUA;EACE,eAAA;AAPF;;AAUA;EACE,aAAA;EACA,kCAAA;EACA,uDAAA;EACA,oBAAA;EACA,cAAA;EACA,iBAAA;AAPF;;AAUA;EACE,oBAAA;EACA,8BAAA;EACA,gBAAA;AAPF;;AAUA;EACE,mBAAA;AAPF;;AAUA;EACE,aAAA;AAPF;;AAUA;EACE,kBAAA;AAPF;;AAUA;EACE,yBAAA;AAPF;;AAUA;EACE,mBAAA;AAPF;;AAUA;EACE,gBAAA;EACA,gCAAA;AAPF;;AAUA;EACE,eAAA;AAPF;;AAUA;EACE,mCAAA;AAPF;;AAUA;EACE;IACE,wBAAA;EAPF;EASA;IACE,2BAAA;EAPF;EASA;IACE,wBAAA;EAPF;AACF;AAWA;EACE,qBAAA;EACA,cApMM;AA2LR;;AAYA;EACE,aAAA;EACA,eAAA;EACA,iBAAA;EACA,yBA/Mc;AAsMhB","sourcesContent":["@font-face {\r\n  font-family: 'Abel';\r\n  src: url('./assets/fonts/abel-regular-webfont.woff2') format('woff2'),\r\n    url('./assets/fonts/abel-regular-webfont.woff') format('woff');\r\n    font-style: normal;\r\n}\r\n\r\n$primary-color: #a2b8b3;\r\n$secondary-color: #b2b8b7;\r\n$complementary-color: #c23150;\r\n$yellow: #ffc600;\r\n$black: #272727;\r\n\r\n* {\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody,\r\nhtml {\r\n  font-family: 'Abel', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\r\n  margin: 0;\r\n  padding: 0;\r\n  height: 100%;\r\n}\r\n\r\n.page-wrapper {\r\n  display: grid;\r\n  grid-template-rows: 2fr 8fr 1fr;\r\n  grid-template-columns: 2fr 9fr;\r\n  height: 100%;\r\n}\r\n \r\n.header > h1 {\r\n  font-size: 40px;\r\n  font-weight: 800;\r\n  color: $complementary-color;\r\n}\r\n\r\n.header {\r\n  display: flex;\r\n  align-items: center;\r\n  grid-row: 1 / 2;\r\n  grid-column: 1 / -1;\r\n  background-color: $primary-color;\r\n  gap: 15px;\r\n  padding: 0 30px;\r\n}\r\n\r\n.sidebar {\r\n  display: grid;\r\n  grid-row: 2 / 3;\r\n  grid-column: 1 / 2;\r\n  background-color: $secondary-color;\r\n  color: $black;\r\n  align-content: start;\r\n  padding: 30px;\r\n  gap: 30px;\r\n  font-size: 27px;\r\n  font-weight: 600;\r\n}\r\n\r\n.sidebar > div {\r\n  cursor: pointer;\r\n}\r\n\r\n.sidebar > div:hover {\r\n  background-color: rgb(198, 209, 207);\r\n  border-radius: 10px;\r\n}\r\n\r\n.main-content {\r\n  display: grid;\r\n  grid-template-rows: auto 1fr;\r\n  grid-template-columns: auto 1fr;\r\n  grid-row: 2 / 3;\r\n  grid-column: 2 / -1;\r\n  background-color: #dfd5d5;\r\n}\r\n\r\n.add-task {\r\n  display: inline-flex;\r\n  align-items: center;\r\n  margin: 0;\r\n  gap: 5px;\r\n  cursor: pointer;\r\n  margin: 20px 20px;\r\n  padding: 3px 6px;\r\n  grid-row: 1 / 2;\r\n  grid-column: 1 / 2;\r\n}\r\n\r\n.add-task > * {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n.add-task:hover {\r\n  background-color: $secondary-color;\r\n  border-radius: 8px;\r\n}\r\n\r\n.add-task:hover > svg {\r\n  transform: rotate(90deg);\r\n  transition: 0.4s ease-in-out;\r\n}\r\n\r\n.current-tab {\r\n  color: $complementary-color;\r\n  font-size: 30px;\r\n  font-weight: 600;\r\n  justify-self: center;\r\n  grid-column: 1 / -1;\r\n  grid-row: 1 / 2;\r\n}\r\n\r\nform {\r\n  position: fixed;\r\n  display: none;\r\n  gap: 10px;\r\n  z-index: 99;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  background-color: $secondary-color;\r\n  color: $complementary-color;\r\n  font-weight: 500;\r\n  padding: 10px 20px;\r\n  border-radius: 10px;\r\n}\r\n\r\n.widget {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.form-buttons {\r\n  display: flex;\r\n  justify-content: space-around;\r\n}\r\n\r\n.form-buttons > * {\r\n  cursor: pointer;\r\n}\r\n\r\n.home-tasks {\r\n  display: grid;\r\n  grid-template-columns: 1fr 4fr 1fr;\r\n  grid-template-rows: repeat(auto-fit, minmax(auto, 1fr));\r\n  align-content: start;\r\n  grid-row: 2 / -1;\r\n  grid-column: 1 / -1;\r\n}\r\n\r\n.home-tasks-header {\r\n  display: inline-flex;\r\n  justify-content: space-between;\r\n  font-weight: 600;\r\n}\r\n\r\n.due {\r\n  padding-right: 25px;\r\n}\r\n\r\n.task {\r\n  display: flex;\r\n}\r\n\r\n.task-n {\r\n  margin-right: auto;\r\n}\r\n\r\n.task:hover {\r\n  background-color: #f0e6e6;\r\n}\r\n\r\n.task-d {\r\n  padding-right: 10px;\r\n}\r\n\r\n.home-tasks > * {\r\n  grid-column: 2 / 3;\r\n  border-bottom: 1px solid $complementary-color;\r\n}\r\n\r\n.delete-task {\r\n  cursor: pointer;\r\n}\r\n\r\n.delete-task:hover {\r\n  animation: move-up 0.5s ease-in-out;\r\n}\r\n\r\n@keyframes move-up {\r\n  0% {\r\n    transform: translateY(0);\r\n  }\r\n  50% {\r\n    transform: translateY(-5px);\r\n  }\r\n  100% {\r\n    transform: translateY(0);\r\n  }\r\n}\r\n\r\n\r\na {\r\n  text-decoration: none;\r\n  color: $black;\r\n}\r\n\r\n.footer {\r\n  display: grid;\r\n  grid-row: -2 / -1;\r\n  grid-column: 1 / -1;\r\n  background-color: $primary-color;\r\n}"],"sourceRoot":""}]);
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
  priority: document.querySelector('#priority').value
});

/***/ }),

/***/ "./src/displayhometasks.js":
/*!*********************************!*\
  !*** ./src/displayhometasks.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayHomeTasks": () => (/* binding */ displayHomeTasks)
/* harmony export */ });
/* harmony import */ var _informationholder_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./informationholder.js */ "./src/informationholder.js");
/* harmony import */ var _assets_icons_delete_icon_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/icons/delete-icon.svg */ "./src/assets/icons/delete-icon.svg");



function displayHomeTasks() {
  const homeTasks = document.querySelector('.home-tasks');
  const tasksLength = _informationholder_js__WEBPACK_IMPORTED_MODULE_0__.InformationHolder.tasks.length;
  for (let i = tasksLength - 1; i < tasksLength; i++) {
    const div = document.createElement('div');
    div.classList.add('task');

    const taskName = document.createElement('p');
    taskName.classList.add('task-n');
    taskName.textContent = _informationholder_js__WEBPACK_IMPORTED_MODULE_0__.InformationHolder.tasks[i].name;
    div.appendChild(taskName);

    const taskDate = document.createElement('p');
    taskDate.classList.add('task-d');
    taskDate.textContent = _informationholder_js__WEBPACK_IMPORTED_MODULE_0__.InformationHolder.tasks[i].dueDate;
    div.appendChild(taskDate);

    const deleteIcon = new Image();
    deleteIcon.classList.add('delete-task');
    deleteIcon.src = _assets_icons_delete_icon_svg__WEBPACK_IMPORTED_MODULE_1__;
    div.appendChild(deleteIcon);

    homeTasks.appendChild(div);
  }
}

/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "adjustTickMark": () => (/* binding */ adjustTickMark)
/* harmony export */ });
/* harmony import */ var _assets_icons_tick_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/icons/tick.png */ "./src/assets/icons/tick.png");


function adjustTickMark() {
  const tickMark = new Image();
  tickMark.src = _assets_icons_tick_png__WEBPACK_IMPORTED_MODULE_0__;
  tickMark.style.width = '40px';
  tickMark.style.height = '40px';
  document.querySelector('.header').appendChild(tickMark);
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
/* harmony import */ var _displayhometasks_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./displayhometasks.js */ "./src/displayhometasks.js");









(0,_header_js__WEBPACK_IMPORTED_MODULE_1__.adjustTickMark)();
_mediatordom_js__WEBPACK_IMPORTED_MODULE_5__.MediatorDOM.insertTaskDOM();
_mediatordom_js__WEBPACK_IMPORTED_MODULE_5__.MediatorDOM.deleteTaskDOM();
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
    return this.tasks.splice(aTask, 1);
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
/* harmony import */ var _createtask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createtask */ "./src/createtask.js");
/* harmony import */ var _informationholder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./informationholder */ "./src/informationholder.js");
/* harmony import */ var _displayhometasks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./displayhometasks */ "./src/displayhometasks.js");





class MediatorDOM {
  static insertTaskDOM() {
    document.querySelector('.submit').addEventListener('click', () => {
      if (document.querySelector('form').checkValidity()) {
        _informationholder__WEBPACK_IMPORTED_MODULE_1__.InformationHolder.addTask((0,_createtask__WEBPACK_IMPORTED_MODULE_0__.createTask)());
        console.log(_informationholder__WEBPACK_IMPORTED_MODULE_1__.InformationHolder.tasks);
        console.log(_informationholder__WEBPACK_IMPORTED_MODULE_1__.InformationHolder.tasks[0].name);
        console.log(_informationholder__WEBPACK_IMPORTED_MODULE_1__.InformationHolder.tasks[0].dueDate);
        (0,_displayhometasks__WEBPACK_IMPORTED_MODULE_2__.displayHomeTasks)();
      }
    })
  }

  static deleteTaskDOM() {
    document.querySelector('.main-content').addEventListener('click', (e) => {
      if (e.target.classList.contains('delete-task')) e.target.parentElement.remove();
    })
  }
}


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

/***/ "./src/assets/icons/delete-icon.svg":
/*!******************************************!*\
  !*** ./src/assets/icons/delete-icon.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "be8a48f7e287cfceaf67.svg";

/***/ }),

/***/ "./src/assets/icons/tick.png":
/*!***********************************!*\
  !*** ./src/assets/icons/tick.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6a1f6ce75333deedb9de.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEIwQztBQUNjO0FBQ0Y7QUFDdEQ7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsUUFBUSx5RUFBeUIsQ0FBQyx1REFBVTtBQUM1QyxvQkFBb0IsdUVBQXVCO0FBQzNDLG9CQUFvQiwrRUFBK0I7QUFDbkQsb0JBQW9CLGtGQUFrQztBQUN0RCxRQUFRLG1FQUFnQjtBQUN4QjtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGVzLnNjc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZXMuc2Nzcz9hNjA5Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NyZWF0ZXRhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2Rpc3BsYXlob21ldGFza3MuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2hlYWRlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZm9ybWF0aW9uaG9sZGVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tZWRpYXRvcmRvbS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdGFza2Zvcm0uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vYXNzZXRzL2ZvbnRzL2FiZWwtcmVndWxhci13ZWJmb250LndvZmYyXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvZm9udHMvYWJlbC1yZWd1bGFyLXdlYmZvbnQud29mZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQWJlbFxcXCI7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIikgZm9ybWF0KFxcXCJ3b2ZmMlxcXCIpLCB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpIGZvcm1hdChcXFwid29mZlxcXCIpO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG4qIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHksXFxuaHRtbCB7XFxuICBmb250LWZhbWlseTogXFxcIkFiZWxcXFwiLCBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXFxcIlNlZ29lIFVJXFxcIiwgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCBcXFwiT3BlbiBTYW5zXFxcIiwgXFxcIkhlbHZldGljYSBOZXVlXFxcIiwgc2Fucy1zZXJpZjtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5wYWdlLXdyYXBwZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMmZyIDhmciAxZnI7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciA5ZnI7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5oZWFkZXIgPiBoMSB7XFxuICBmb250LXNpemU6IDQwcHg7XFxuICBmb250LXdlaWdodDogODAwO1xcbiAgY29sb3I6ICNjMjMxNTA7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBncmlkLXJvdzogMS8yO1xcbiAgZ3JpZC1jb2x1bW46IDEvLTE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTJiOGIzO1xcbiAgZ2FwOiAxNXB4O1xcbiAgcGFkZGluZzogMCAzMHB4O1xcbn1cXG5cXG4uc2lkZWJhciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC1yb3c6IDIvMztcXG4gIGdyaWQtY29sdW1uOiAxLzI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjJiOGI3O1xcbiAgY29sb3I6ICMyNzI3Mjc7XFxuICBhbGlnbi1jb250ZW50OiBzdGFydDtcXG4gIHBhZGRpbmc6IDMwcHg7XFxuICBnYXA6IDMwcHg7XFxuICBmb250LXNpemU6IDI3cHg7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4uc2lkZWJhciA+IGRpdiB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5zaWRlYmFyID4gZGl2OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTgsIDIwOSwgMjA3KTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi5tYWluLWNvbnRlbnQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnI7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMWZyO1xcbiAgZ3JpZC1yb3c6IDIvMztcXG4gIGdyaWQtY29sdW1uOiAyLy0xO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RmZDVkNTtcXG59XFxuXFxuLmFkZC10YXNrIHtcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbjogMDtcXG4gIGdhcDogNXB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgbWFyZ2luOiAyMHB4IDIwcHg7XFxuICBwYWRkaW5nOiAzcHggNnB4O1xcbiAgZ3JpZC1yb3c6IDEvMjtcXG4gIGdyaWQtY29sdW1uOiAxLzI7XFxufVxcblxcbi5hZGQtdGFzayA+ICoge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLmFkZC10YXNrOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNiMmI4Yjc7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxufVxcblxcbi5hZGQtdGFzazpob3ZlciA+IHN2ZyB7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XFxuICB0cmFuc2l0aW9uOiAwLjRzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4uY3VycmVudC10YWIge1xcbiAgY29sb3I6ICNjMjMxNTA7XFxuICBmb250LXNpemU6IDMwcHg7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICBncmlkLWNvbHVtbjogMS8tMTtcXG4gIGdyaWQtcm93OiAxLzI7XFxufVxcblxcbmZvcm0ge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGdhcDogMTBweDtcXG4gIHotaW5kZXg6IDk5O1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNiMmI4Yjc7XFxuICBjb2xvcjogI2MyMzE1MDtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4ud2lkZ2V0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uZm9ybS1idXR0b25zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG59XFxuXFxuLmZvcm0tYnV0dG9ucyA+ICoge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uaG9tZS10YXNrcyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNGZyIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoYXV0bywgMWZyKSk7XFxuICBhbGlnbi1jb250ZW50OiBzdGFydDtcXG4gIGdyaWQtcm93OiAyLy0xO1xcbiAgZ3JpZC1jb2x1bW46IDEvLTE7XFxufVxcblxcbi5ob21lLXRhc2tzLWhlYWRlciB7XFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbi5kdWUge1xcbiAgcGFkZGluZy1yaWdodDogMjVweDtcXG59XFxuXFxuLnRhc2sge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLnRhc2stbiB7XFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxufVxcblxcbi50YXNrOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGU2ZTY7XFxufVxcblxcbi50YXNrLWQge1xcbiAgcGFkZGluZy1yaWdodDogMTBweDtcXG59XFxuXFxuLmhvbWUtdGFza3MgPiAqIHtcXG4gIGdyaWQtY29sdW1uOiAyLzM7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2MyMzE1MDtcXG59XFxuXFxuLmRlbGV0ZS10YXNrIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmRlbGV0ZS10YXNrOmhvdmVyIHtcXG4gIGFuaW1hdGlvbjogbW92ZS11cCAwLjVzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIG1vdmUtdXAge1xcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XFxuICB9XFxuICA1MCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTVweCk7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcbiAgfVxcbn1cXG5hIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiAjMjcyNzI3O1xcbn1cXG5cXG4uZm9vdGVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXJvdzogLTIvLTE7XFxuICBncmlkLWNvbHVtbjogMS8tMTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNhMmI4YjM7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLG1CQUFBO0VBQ0Esb0hBQUE7RUFFRSxrQkFBQTtBQUFKO0FBU0E7RUFDRSxzQkFBQTtBQVBGOztBQVVBOztFQUVFLDJKQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FBUEY7O0FBVUE7RUFDRSxhQUFBO0VBQ0EsK0JBQUE7RUFDQSw4QkFBQTtFQUNBLFlBQUE7QUFQRjs7QUFVQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBMUJvQjtBQW1CdEI7O0FBVUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFwQ2M7RUFxQ2QsU0FBQTtFQUNBLGVBQUE7QUFQRjs7QUFVQTtFQUNFLGFBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkE1Q2dCO0VBNkNoQixjQTFDTTtFQTJDTixvQkFBQTtFQUNBLGFBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBUEY7O0FBVUE7RUFDRSxlQUFBO0FBUEY7O0FBVUE7RUFDRSxvQ0FBQTtFQUNBLG1CQUFBO0FBUEY7O0FBVUE7RUFDRSxhQUFBO0VBQ0EsNEJBQUE7RUFDQSwrQkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0FBUEY7O0FBVUE7RUFDRSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQVBGOztBQVVBO0VBQ0UsU0FBQTtFQUNBLFVBQUE7QUFQRjs7QUFVQTtFQUNFLHlCQXpGZ0I7RUEwRmhCLGtCQUFBO0FBUEY7O0FBVUE7RUFDRSx3QkFBQTtFQUNBLDRCQUFBO0FBUEY7O0FBVUE7RUFDRSxjQWxHb0I7RUFtR3BCLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0FBUEY7O0FBVUE7RUFDRSxlQUFBO0VBQ0EsYUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtFQUNBLHlCQW5IZ0I7RUFvSGhCLGNBbkhvQjtFQW9IcEIsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBUEY7O0FBVUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7QUFQRjs7QUFVQTtFQUNFLGFBQUE7RUFDQSw2QkFBQTtBQVBGOztBQVVBO0VBQ0UsZUFBQTtBQVBGOztBQVVBO0VBQ0UsYUFBQTtFQUNBLGtDQUFBO0VBQ0EsdURBQUE7RUFDQSxvQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQVBGOztBQVVBO0VBQ0Usb0JBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0FBUEY7O0FBVUE7RUFDRSxtQkFBQTtBQVBGOztBQVVBO0VBQ0UsYUFBQTtBQVBGOztBQVVBO0VBQ0Usa0JBQUE7QUFQRjs7QUFVQTtFQUNFLHlCQUFBO0FBUEY7O0FBVUE7RUFDRSxtQkFBQTtBQVBGOztBQVVBO0VBQ0UsZ0JBQUE7RUFDQSxnQ0FBQTtBQVBGOztBQVVBO0VBQ0UsZUFBQTtBQVBGOztBQVVBO0VBQ0UsbUNBQUE7QUFQRjs7QUFVQTtFQUNFO0lBQ0Usd0JBQUE7RUFQRjtFQVNBO0lBQ0UsMkJBQUE7RUFQRjtFQVNBO0lBQ0Usd0JBQUE7RUFQRjtBQUNGO0FBV0E7RUFDRSxxQkFBQTtFQUNBLGNBcE1NO0FBMkxSOztBQVlBO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQS9NYztBQXNNaEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxyXFxuICBmb250LWZhbWlseTogJ0FiZWwnO1xcclxcbiAgc3JjOiB1cmwoJy4vYXNzZXRzL2ZvbnRzL2FiZWwtcmVndWxhci13ZWJmb250LndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxcclxcbiAgICB1cmwoJy4vYXNzZXRzL2ZvbnRzL2FiZWwtcmVndWxhci13ZWJmb250LndvZmYnKSBmb3JtYXQoJ3dvZmYnKTtcXHJcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbn1cXHJcXG5cXHJcXG4kcHJpbWFyeS1jb2xvcjogI2EyYjhiMztcXHJcXG4kc2Vjb25kYXJ5LWNvbG9yOiAjYjJiOGI3O1xcclxcbiRjb21wbGVtZW50YXJ5LWNvbG9yOiAjYzIzMTUwO1xcclxcbiR5ZWxsb3c6ICNmZmM2MDA7XFxyXFxuJGJsYWNrOiAjMjcyNzI3O1xcclxcblxcclxcbioge1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSxcXHJcXG5odG1sIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnQWJlbCcsIHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLnBhZ2Utd3JhcHBlciB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyZnIgOGZyIDFmcjtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDlmcjtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuIFxcclxcbi5oZWFkZXIgPiBoMSB7XFxyXFxuICBmb250LXNpemU6IDQwcHg7XFxyXFxuICBmb250LXdlaWdodDogODAwO1xcclxcbiAgY29sb3I6ICRjb21wbGVtZW50YXJ5LWNvbG9yO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ3JpZC1yb3c6IDEgLyAyO1xcclxcbiAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xcclxcbiAgZ2FwOiAxNXB4O1xcclxcbiAgcGFkZGluZzogMCAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2lkZWJhciB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC1yb3c6IDIgLyAzO1xcclxcbiAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcXHJcXG4gIGNvbG9yOiAkYmxhY2s7XFxyXFxuICBhbGlnbi1jb250ZW50OiBzdGFydDtcXHJcXG4gIHBhZGRpbmc6IDMwcHg7XFxyXFxuICBnYXA6IDMwcHg7XFxyXFxuICBmb250LXNpemU6IDI3cHg7XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbn1cXHJcXG5cXHJcXG4uc2lkZWJhciA+IGRpdiB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5zaWRlYmFyID4gZGl2OmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTgsIDIwOSwgMjA3KTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5tYWluLWNvbnRlbnQge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnI7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMWZyO1xcclxcbiAgZ3JpZC1yb3c6IDIgLyAzO1xcclxcbiAgZ3JpZC1jb2x1bW46IDIgLyAtMTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkZmQ1ZDU7XFxyXFxufVxcclxcblxcclxcbi5hZGQtdGFzayB7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBnYXA6IDVweDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIG1hcmdpbjogMjBweCAyMHB4O1xcclxcbiAgcGFkZGluZzogM3B4IDZweDtcXHJcXG4gIGdyaWQtcm93OiAxIC8gMjtcXHJcXG4gIGdyaWQtY29sdW1uOiAxIC8gMjtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZC10YXNrID4gKiB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkLXRhc2s6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZC10YXNrOmhvdmVyID4gc3ZnIHtcXHJcXG4gIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcXHJcXG4gIHRyYW5zaXRpb246IDAuNHMgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcblxcclxcbi5jdXJyZW50LXRhYiB7XFxyXFxuICBjb2xvcjogJGNvbXBsZW1lbnRhcnktY29sb3I7XFxyXFxuICBmb250LXNpemU6IDMwcHg7XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxyXFxuICBncmlkLWNvbHVtbjogMSAvIC0xO1xcclxcbiAgZ3JpZC1yb3c6IDEgLyAyO1xcclxcbn1cXHJcXG5cXHJcXG5mb3JtIHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuICBnYXA6IDEwcHg7XFxyXFxuICB6LWluZGV4OiA5OTtcXHJcXG4gIHRvcDogNTAlO1xcclxcbiAgbGVmdDogNTAlO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xcclxcbiAgY29sb3I6ICRjb21wbGVtZW50YXJ5LWNvbG9yO1xcclxcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi53aWRnZXQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbi5mb3JtLWJ1dHRvbnMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybS1idXR0b25zID4gKiB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5ob21lLXRhc2tzIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA0ZnIgMWZyO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoYXV0by1maXQsIG1pbm1heChhdXRvLCAxZnIpKTtcXHJcXG4gIGFsaWduLWNvbnRlbnQ6IHN0YXJ0O1xcclxcbiAgZ3JpZC1yb3c6IDIgLyAtMTtcXHJcXG4gIGdyaWQtY29sdW1uOiAxIC8gLTE7XFxyXFxufVxcclxcblxcclxcbi5ob21lLXRhc2tzLWhlYWRlciB7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxufVxcclxcblxcclxcbi5kdWUge1xcclxcbiAgcGFkZGluZy1yaWdodDogMjVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2sge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2stbiB7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxyXFxufVxcclxcblxcclxcbi50YXNrOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGU2ZTY7XFxyXFxufVxcclxcblxcclxcbi50YXNrLWQge1xcclxcbiAgcGFkZGluZy1yaWdodDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmhvbWUtdGFza3MgPiAqIHtcXHJcXG4gIGdyaWQtY29sdW1uOiAyIC8gMztcXHJcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkY29tcGxlbWVudGFyeS1jb2xvcjtcXHJcXG59XFxyXFxuXFxyXFxuLmRlbGV0ZS10YXNrIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmRlbGV0ZS10YXNrOmhvdmVyIHtcXHJcXG4gIGFuaW1hdGlvbjogbW92ZS11cCAwLjVzIGVhc2UtaW4tb3V0O1xcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIG1vdmUtdXAge1xcclxcbiAgMCUge1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XFxyXFxuICB9XFxyXFxuICA1MCUge1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTVweCk7XFxyXFxuICB9XFxyXFxuICAxMDAlIHtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5hIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGNvbG9yOiAkYmxhY2s7XFxyXFxufVxcclxcblxcclxcbi5mb290ZXIge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtcm93OiAtMiAvIC0xO1xcclxcbiAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBjb25zdCBjcmVhdGVUYXNrID0gKCkgPT4gKHtcclxuICBuYW1lOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1uYW1lJykudmFsdWUsXHJcbiAgZGVzY3JpcHRpb246IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLWRlc2NyaXB0aW9uJykudmFsdWUsXHJcbiAgZHVlRGF0ZTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2R1ZS1kYXRlJykudmFsdWUsXHJcbiAgcHJpb3JpdHk6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcmlvcml0eScpLnZhbHVlXHJcbn0pOyIsImltcG9ydCB7SW5mb3JtYXRpb25Ib2xkZXJ9IGZyb20gJy4vaW5mb3JtYXRpb25ob2xkZXIuanMnO1xyXG5pbXBvcnQgZGVsZXRlSWNvblBhdGggZnJvbSAnLi9hc3NldHMvaWNvbnMvZGVsZXRlLWljb24uc3ZnJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5SG9tZVRhc2tzKCkge1xyXG4gIGNvbnN0IGhvbWVUYXNrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ob21lLXRhc2tzJyk7XHJcbiAgY29uc3QgdGFza3NMZW5ndGggPSBJbmZvcm1hdGlvbkhvbGRlci50YXNrcy5sZW5ndGg7XHJcbiAgZm9yIChsZXQgaSA9IHRhc2tzTGVuZ3RoIC0gMTsgaSA8IHRhc2tzTGVuZ3RoOyBpKyspIHtcclxuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZGl2LmNsYXNzTGlzdC5hZGQoJ3Rhc2snKTtcclxuXHJcbiAgICBjb25zdCB0YXNrTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIHRhc2tOYW1lLmNsYXNzTGlzdC5hZGQoJ3Rhc2stbicpO1xyXG4gICAgdGFza05hbWUudGV4dENvbnRlbnQgPSBJbmZvcm1hdGlvbkhvbGRlci50YXNrc1tpXS5uYW1lO1xyXG4gICAgZGl2LmFwcGVuZENoaWxkKHRhc2tOYW1lKTtcclxuXHJcbiAgICBjb25zdCB0YXNrRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIHRhc2tEYXRlLmNsYXNzTGlzdC5hZGQoJ3Rhc2stZCcpO1xyXG4gICAgdGFza0RhdGUudGV4dENvbnRlbnQgPSBJbmZvcm1hdGlvbkhvbGRlci50YXNrc1tpXS5kdWVEYXRlO1xyXG4gICAgZGl2LmFwcGVuZENoaWxkKHRhc2tEYXRlKTtcclxuXHJcbiAgICBjb25zdCBkZWxldGVJY29uID0gbmV3IEltYWdlKCk7XHJcbiAgICBkZWxldGVJY29uLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZS10YXNrJyk7XHJcbiAgICBkZWxldGVJY29uLnNyYyA9IGRlbGV0ZUljb25QYXRoO1xyXG4gICAgZGl2LmFwcGVuZENoaWxkKGRlbGV0ZUljb24pO1xyXG5cclxuICAgIGhvbWVUYXNrcy5hcHBlbmRDaGlsZChkaXYpO1xyXG4gIH1cclxufSIsImltcG9ydCB0aWNrIGZyb20gJy4vYXNzZXRzL2ljb25zL3RpY2sucG5nJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhZGp1c3RUaWNrTWFyaygpIHtcclxuICBjb25zdCB0aWNrTWFyayA9IG5ldyBJbWFnZSgpO1xyXG4gIHRpY2tNYXJrLnNyYyA9IHRpY2s7XHJcbiAgdGlja01hcmsuc3R5bGUud2lkdGggPSAnNDBweCc7XHJcbiAgdGlja01hcmsuc3R5bGUuaGVpZ2h0ID0gJzQwcHgnO1xyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXInKS5hcHBlbmRDaGlsZCh0aWNrTWFyayk7XHJcbn0iLCJpbXBvcnQgJy4vc3R5bGVzLnNjc3MnO1xyXG5pbXBvcnQge2FkanVzdFRpY2tNYXJrfSBmcm9tICcuL2hlYWRlci5qcyc7XHJcbmltcG9ydCB7TWFuYWdlRm9ybX0gZnJvbSAnLi90YXNrZm9ybS5qcyc7XHJcbmltcG9ydCB7SW5mb3JtYXRpb25Ib2xkZXJ9IGZyb20gJy4vaW5mb3JtYXRpb25ob2xkZXIuanMnO1xyXG5pbXBvcnQge2NyZWF0ZVRhc2t9IGZyb20gJy4vY3JlYXRldGFzay5qcyc7XHJcbmltcG9ydCB7TWVkaWF0b3JET019IGZyb20gJy4vbWVkaWF0b3Jkb20uanMnO1xyXG5pbXBvcnQge2Rpc3BsYXlIb21lVGFza3N9IGZyb20gJy4vZGlzcGxheWhvbWV0YXNrcy5qcyc7XHJcblxyXG5cclxuYWRqdXN0VGlja01hcmsoKTtcclxuTWVkaWF0b3JET00uaW5zZXJ0VGFza0RPTSgpO1xyXG5NZWRpYXRvckRPTS5kZWxldGVUYXNrRE9NKCk7XHJcbmNvbnN0IGZvcm0gPSBNYW5hZ2VGb3JtKCk7XHJcbmZvcm0uaW5pdGlhbGl6ZSgpO1xyXG5cclxuIiwiZXhwb3J0IGNsYXNzIEluZm9ybWF0aW9uSG9sZGVyIHtcclxuICBzdGF0aWMgdGFza3MgPSBbXTtcclxuXHJcbiAgc3RhdGljIHByb2plY3RzID0gW107XHJcblxyXG4gIHN0YXRpYyBhZGRUYXNrKHNvbWVUYXNrKSB7XHJcbiAgICByZXR1cm4gdGhpcy50YXNrcy5wdXNoKHNvbWVUYXNrKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyByZW1vdmVUYXNrKGFUYXNrKSB7XHJcbiAgICByZXR1cm4gdGhpcy50YXNrcy5zcGxpY2UoYVRhc2ssIDEpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGFkZFByb2plY3Qoc29tZVByb2plY3QpIHtcclxuICAgIHJldHVybiB0aGlzLnByb2plY3RzLnB1c2goc29tZVByb2plY3QpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIHJlbW92ZVByb2plY3QoYVByb2plY3QpIHtcclxuICAgIHJldHVybiB0aGlzLnByb2plY3RzLnNwbGljZShhUHJvamVjdCwgMSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IGNyZWF0ZVRhc2sgfSBmcm9tIFwiLi9jcmVhdGV0YXNrXCI7XHJcbmltcG9ydCB7IEluZm9ybWF0aW9uSG9sZGVyIH0gZnJvbSBcIi4vaW5mb3JtYXRpb25ob2xkZXJcIjtcclxuaW1wb3J0IHsgZGlzcGxheUhvbWVUYXNrcyB9IGZyb20gXCIuL2Rpc3BsYXlob21ldGFza3NcIjtcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgTWVkaWF0b3JET00ge1xyXG4gIHN0YXRpYyBpbnNlcnRUYXNrRE9NKCkge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN1Ym1pdCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybScpLmNoZWNrVmFsaWRpdHkoKSkge1xyXG4gICAgICAgIEluZm9ybWF0aW9uSG9sZGVyLmFkZFRhc2soY3JlYXRlVGFzaygpKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhJbmZvcm1hdGlvbkhvbGRlci50YXNrcyk7XHJcbiAgICAgICAgY29uc29sZS5sb2coSW5mb3JtYXRpb25Ib2xkZXIudGFza3NbMF0ubmFtZSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coSW5mb3JtYXRpb25Ib2xkZXIudGFza3NbMF0uZHVlRGF0ZSk7XHJcbiAgICAgICAgZGlzcGxheUhvbWVUYXNrcygpO1xyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgc3RhdGljIGRlbGV0ZVRhc2tET00oKSB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1jb250ZW50JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdkZWxldGUtdGFzaycpKSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnJlbW92ZSgpO1xyXG4gICAgfSlcclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IGNvbnN0IE1hbmFnZUZvcm0gPSAoKSA9PiAoe1xyXG4gIGFkZFRhc2tCdXR0b246IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtdGFzaycpLFxyXG4gIGZvcm06IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0nKSxcclxuXHJcbiAgY2xlYXJGb3JtKCkge1xyXG4gICAgY29uc3QgZm9ybUlucHV0cyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnZm9ybSBpbnB1dCcpKTtcclxuICAgIGZvcm1JbnB1dHMuZm9yRWFjaCgoaW5wdXQpID0+IHtcclxuICAgICAgaW5wdXQudmFsdWUgPSAnJztcclxuICAgIH0pXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCd0ZXh0YXJlYScpLnZhbHVlID0gJyc7XHJcbiAgfSxcclxuXHJcbiAgb3BlbkZvcm0oKSB7XHJcbiAgICB0aGlzLmFkZFRhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIHRoaXMuZm9ybS5zdHlsZS5kaXNwbGF5ID0gJ2dyaWQnO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuXHJcbiAgY2xvc2VGb3JtKCkge1xyXG4gICAgdGhpcy5mb3JtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgfSxcclxuXHJcbiAgY2FuY2VsKCkge1xyXG4gICAgY29uc3QgY2xvc2VGb3JtQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhbmNlbCcpO1xyXG4gICAgY2xvc2VGb3JtQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICB0aGlzLmNsb3NlRm9ybSgpO1xyXG4gICAgICB0aGlzLmNsZWFyRm9ybSgpO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuXHJcbiAgc3VibWl0Rm9ybSgpIHtcclxuICAgIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdWJtaXQnKTtcclxuICAgIHN1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgaWYgKHRoaXMuZm9ybS5jaGVja1ZhbGlkaXR5KCkpIHtcclxuICAgICAgICB0aGlzLmNsb3NlRm9ybSgpO1xyXG4gICAgICAgIHRoaXMuY2xlYXJGb3JtKCk7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0pO1xyXG4gIH0sXHJcblxyXG4gIGluaXRpYWxpemUoKSB7XHJcbiAgICB0aGlzLm9wZW5Gb3JtKCk7XHJcbiAgICB0aGlzLmNhbmNlbCgpO1xyXG4gICAgdGhpcy5zdWJtaXRGb3JtKCk7XHJcbiAgfSxcclxufSk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==