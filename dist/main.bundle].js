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
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: \"Abel\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"woff2\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"woff\");\n  font-style: normal;\n}\n* {\n  box-sizing: border-box;\n}\n\nbody,\nhtml {\n  font-family: \"Abel\", system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n  margin: 0;\n  padding: 0;\n  height: 100%;\n}\n\n.page-wrapper {\n  display: grid;\n  grid-template-rows: 2fr 8fr 1fr;\n  grid-template-columns: 2fr 9fr;\n  height: 100%;\n}\n\n.header > h1 {\n  font-size: 40px;\n  font-weight: 800;\n  color: #c23150;\n}\n\n.header {\n  display: flex;\n  align-items: center;\n  grid-row: 1/2;\n  grid-column: 1/-1;\n  background-color: #a2b8b3;\n  gap: 15px;\n  padding: 0 30px;\n}\n\n.sidebar {\n  display: grid;\n  grid-row: 2/3;\n  grid-column: 1/2;\n  background-color: #b2b8b7;\n  color: #272727;\n  align-content: start;\n  padding: 30px;\n  gap: 30px;\n  font-size: 27px;\n  font-weight: 600;\n}\n\n.sidebar > div {\n  cursor: pointer;\n}\n\n.sidebar > div:hover {\n  background-color: rgb(198, 209, 207);\n  border-radius: 10px;\n}\n\n.main-content {\n  display: grid;\n  grid-template-rows: auto 1fr;\n  grid-template-columns: auto 1fr;\n  grid-row: 2/3;\n  grid-column: 2/-1;\n  background-color: #dfd5d5;\n}\n\n.add-task {\n  display: inline-flex;\n  align-items: center;\n  margin: 0;\n  gap: 5px;\n  cursor: pointer;\n  margin: 20px 20px;\n  padding: 3px 6px;\n  grid-row: 1/2;\n  grid-column: 1/2;\n}\n\n.add-task > * {\n  margin: 0;\n  padding: 0;\n}\n\n.add-task:hover {\n  background-color: #b2b8b7;\n  border-radius: 8px;\n}\n\n.add-task:hover > svg {\n  transform: rotate(90deg);\n  transition: 0.4s ease-in-out;\n}\n\n.current-tab {\n  color: #c23150;\n  font-size: 30px;\n  font-weight: 600;\n  justify-self: center;\n  grid-column: 1/-1;\n  grid-row: 1/2;\n}\n\nform {\n  position: fixed;\n  display: none;\n  gap: 10px;\n  z-index: 99;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background-color: #b2b8b7;\n  color: #c23150;\n  font-weight: 500;\n  padding: 10px 20px;\n  border-radius: 10px;\n}\n\n.widget {\n  display: flex;\n  flex-direction: column;\n}\n\n.form-buttons {\n  display: flex;\n  justify-content: space-around;\n}\n\n.form-buttons > * {\n  cursor: pointer;\n}\n\n.home-tasks {\n  display: grid;\n  grid-template-columns: 1fr 4fr 1fr;\n  grid-template-rows: repeat(auto-fit, minmax(auto, 1fr));\n  align-content: start;\n  grid-row: 2/-1;\n  grid-column: 1/-1;\n}\n\n.home-tasks-header {\n  display: inline-flex;\n  justify-content: space-between;\n  font-weight: 600;\n  padding: 0 10px;\n}\n\n.due {\n  padding-right: 30px;\n}\n\n.task {\n  display: flex;\n  padding: 0 10px;\n}\n\n.task-n {\n  margin-right: auto;\n  cursor: pointer;\n}\n\n.task:hover {\n  background-color: #e6dede;\n}\n\n.task-date {\n  padding-right: 10px;\n}\n\n.home-tasks > * {\n  grid-column: 2/3;\n  border-bottom: 1px solid #c23150;\n}\n\n.delete-task {\n  cursor: pointer;\n}\n\n.delete-task:hover {\n  animation: move-up 0.5s ease-in-out;\n}\n\n.info-display {\n  position: fixed;\n  display: grid;\n  grid-template-columns: auto;\n  grid-template-rows: auto;\n  gap: 10px;\n  z-index: 99;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background-color: #b2b8b7;\n  color: #c23150;\n  font-weight: 500;\n  padding: 10px 20px;\n  border-radius: 10px;\n}\n\n.close-info {\n  justify-self: end;\n  cursor: pointer;\n}\n\n@keyframes move-up {\n  0% {\n    transform: translateY(0);\n  }\n  50% {\n    transform: translateY(-5px);\n  }\n  100% {\n    transform: translateY(0);\n  }\n}\na {\n  text-decoration: none;\n  color: #272727;\n}\n\n.footer {\n  display: grid;\n  grid-row: -2/-1;\n  grid-column: 1/-1;\n  background-color: #a2b8b3;\n}", "",{"version":3,"sources":["webpack://./src/styles.scss"],"names":[],"mappings":"AAAA;EACE,mBAAA;EACA,oHAAA;EAEE,kBAAA;AAAJ;AASA;EACE,sBAAA;AAPF;;AAUA;;EAEE,2JAAA;EACA,SAAA;EACA,UAAA;EACA,YAAA;AAPF;;AAUA;EACE,aAAA;EACA,+BAAA;EACA,8BAAA;EACA,YAAA;AAPF;;AAUA;EACE,eAAA;EACA,gBAAA;EACA,cA1BoB;AAmBtB;;AAUA;EACE,aAAA;EACA,mBAAA;EACA,aAAA;EACA,iBAAA;EACA,yBApCc;EAqCd,SAAA;EACA,eAAA;AAPF;;AAUA;EACE,aAAA;EACA,aAAA;EACA,gBAAA;EACA,yBA5CgB;EA6ChB,cA1CM;EA2CN,oBAAA;EACA,aAAA;EACA,SAAA;EACA,eAAA;EACA,gBAAA;AAPF;;AAUA;EACE,eAAA;AAPF;;AAUA;EACE,oCAAA;EACA,mBAAA;AAPF;;AAUA;EACE,aAAA;EACA,4BAAA;EACA,+BAAA;EACA,aAAA;EACA,iBAAA;EACA,yBAAA;AAPF;;AAUA;EACE,oBAAA;EACA,mBAAA;EACA,SAAA;EACA,QAAA;EACA,eAAA;EACA,iBAAA;EACA,gBAAA;EACA,aAAA;EACA,gBAAA;AAPF;;AAUA;EACE,SAAA;EACA,UAAA;AAPF;;AAUA;EACE,yBAzFgB;EA0FhB,kBAAA;AAPF;;AAUA;EACE,wBAAA;EACA,4BAAA;AAPF;;AAUA;EACE,cAlGoB;EAmGpB,eAAA;EACA,gBAAA;EACA,oBAAA;EACA,iBAAA;EACA,aAAA;AAPF;;AAUA;EACE,eAAA;EACA,aAAA;EACA,SAAA;EACA,WAAA;EACA,QAAA;EACA,SAAA;EACA,gCAAA;EACA,yBAnHgB;EAoHhB,cAnHoB;EAoHpB,gBAAA;EACA,kBAAA;EACA,mBAAA;AAPF;;AAUA;EACE,aAAA;EACA,sBAAA;AAPF;;AAUA;EACE,aAAA;EACA,6BAAA;AAPF;;AAUA;EACE,eAAA;AAPF;;AAUA;EACE,aAAA;EACA,kCAAA;EACA,uDAAA;EACA,oBAAA;EACA,cAAA;EACA,iBAAA;AAPF;;AAUA;EACE,oBAAA;EACA,8BAAA;EACA,gBAAA;EACA,eAAA;AAPF;;AAUA;EACE,mBAAA;AAPF;;AAUA;EACE,aAAA;EACA,eAAA;AAPF;;AAUA;EACE,kBAAA;EACA,eAAA;AAPF;;AAUA;EACE,yBAAA;AAPF;;AAUA;EACE,mBAAA;AAPF;;AAUA;EACE,gBAAA;EACA,gCAAA;AAPF;;AAUA;EACE,eAAA;AAPF;;AAUA;EACE,mCAAA;AAPF;;AAUA;EACE,eAAA;EACA,aAAA;EACA,2BAAA;EACA,wBAAA;EACA,SAAA;EACA,WAAA;EACA,QAAA;EACA,SAAA;EACA,gCAAA;EACA,yBArMgB;EAsMhB,cArMoB;EAsMpB,gBAAA;EACA,kBAAA;EACA,mBAAA;AAPF;;AAUA;EACE,iBAAA;EACA,eAAA;AAPF;;AAUA;EACE;IACE,wBAAA;EAPF;EASA;IACE,2BAAA;EAPF;EASA;IACE,wBAAA;EAPF;AACF;AAWA;EACE,qBAAA;EACA,cA7NM;AAoNR;;AAYA;EACE,aAAA;EACA,eAAA;EACA,iBAAA;EACA,yBAxOc;AA+NhB","sourcesContent":["@font-face {\r\n  font-family: 'Abel';\r\n  src: url('./assets/fonts/abel-regular-webfont.woff2') format('woff2'),\r\n    url('./assets/fonts/abel-regular-webfont.woff') format('woff');\r\n    font-style: normal;\r\n}\r\n\r\n$primary-color: #a2b8b3;\r\n$secondary-color: #b2b8b7;\r\n$complementary-color: #c23150;\r\n$yellow: #ffc600;\r\n$black: #272727;\r\n\r\n* {\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody,\r\nhtml {\r\n  font-family: 'Abel', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\r\n  margin: 0;\r\n  padding: 0;\r\n  height: 100%;\r\n}\r\n\r\n.page-wrapper {\r\n  display: grid;\r\n  grid-template-rows: 2fr 8fr 1fr;\r\n  grid-template-columns: 2fr 9fr;\r\n  height: 100%;\r\n}\r\n \r\n.header > h1 {\r\n  font-size: 40px;\r\n  font-weight: 800;\r\n  color: $complementary-color;\r\n}\r\n\r\n.header {\r\n  display: flex;\r\n  align-items: center;\r\n  grid-row: 1 / 2;\r\n  grid-column: 1 / -1;\r\n  background-color: $primary-color;\r\n  gap: 15px;\r\n  padding: 0 30px;\r\n}\r\n\r\n.sidebar {\r\n  display: grid;\r\n  grid-row: 2 / 3;\r\n  grid-column: 1 / 2;\r\n  background-color: $secondary-color;\r\n  color: $black;\r\n  align-content: start;\r\n  padding: 30px;\r\n  gap: 30px;\r\n  font-size: 27px;\r\n  font-weight: 600;\r\n}\r\n\r\n.sidebar > div {\r\n  cursor: pointer;\r\n}\r\n\r\n.sidebar > div:hover {\r\n  background-color: rgb(198, 209, 207);\r\n  border-radius: 10px;\r\n}\r\n\r\n.main-content {\r\n  display: grid;\r\n  grid-template-rows: auto 1fr;\r\n  grid-template-columns: auto 1fr;\r\n  grid-row: 2 / 3;\r\n  grid-column: 2 / -1;\r\n  background-color: #dfd5d5;\r\n}\r\n\r\n.add-task {\r\n  display: inline-flex;\r\n  align-items: center;\r\n  margin: 0;\r\n  gap: 5px;\r\n  cursor: pointer;\r\n  margin: 20px 20px;\r\n  padding: 3px 6px;\r\n  grid-row: 1 / 2;\r\n  grid-column: 1 / 2;\r\n}\r\n\r\n.add-task > * {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n.add-task:hover {\r\n  background-color: $secondary-color;\r\n  border-radius: 8px;\r\n}\r\n\r\n.add-task:hover > svg {\r\n  transform: rotate(90deg);\r\n  transition: 0.4s ease-in-out;\r\n}\r\n\r\n.current-tab {\r\n  color: $complementary-color;\r\n  font-size: 30px;\r\n  font-weight: 600;\r\n  justify-self: center;\r\n  grid-column: 1 / -1;\r\n  grid-row: 1 / 2;\r\n}\r\n\r\nform {\r\n  position: fixed;\r\n  display: none;\r\n  gap: 10px;\r\n  z-index: 99;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  background-color: $secondary-color;\r\n  color: $complementary-color;\r\n  font-weight: 500;\r\n  padding: 10px 20px;\r\n  border-radius: 10px;\r\n}\r\n\r\n.widget {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.form-buttons {\r\n  display: flex;\r\n  justify-content: space-around;\r\n}\r\n\r\n.form-buttons > * {\r\n  cursor: pointer;\r\n}\r\n\r\n.home-tasks {\r\n  display: grid;\r\n  grid-template-columns: 1fr 4fr 1fr;\r\n  grid-template-rows: repeat(auto-fit, minmax(auto, 1fr));\r\n  align-content: start;\r\n  grid-row: 2 / -1;\r\n  grid-column: 1 / -1;\r\n}\r\n\r\n.home-tasks-header {\r\n  display: inline-flex;\r\n  justify-content: space-between;\r\n  font-weight: 600;\r\n  padding: 0 10px;\r\n}\r\n\r\n.due {\r\n  padding-right: 30px;\r\n}\r\n\r\n.task {\r\n  display: flex;\r\n  padding: 0 10px;\r\n}\r\n\r\n.task-n {\r\n  margin-right: auto;\r\n  cursor: pointer;\r\n}\r\n\r\n.task:hover {\r\n  background-color: #e6dede;\r\n}\r\n\r\n.task-date {\r\n  padding-right: 10px;\r\n}\r\n\r\n.home-tasks > * {\r\n  grid-column: 2 / 3;\r\n  border-bottom: 1px solid $complementary-color;\r\n}\r\n\r\n.delete-task {\r\n  cursor: pointer;\r\n}\r\n\r\n.delete-task:hover {\r\n  animation: move-up 0.5s ease-in-out;\r\n}\r\n\r\n.info-display {\r\n  position: fixed;\r\n  display: grid;\r\n  grid-template-columns: auto;\r\n  grid-template-rows: auto;\r\n  gap: 10px;\r\n  z-index: 99;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  background-color: $secondary-color;\r\n  color: $complementary-color;\r\n  font-weight: 500;\r\n  padding: 10px 20px;\r\n  border-radius: 10px;\r\n}\r\n\r\n.close-info {\r\n  justify-self: end;\r\n  cursor: pointer;\r\n}\r\n\r\n@keyframes move-up {\r\n  0% {\r\n    transform: translateY(0);\r\n  }\r\n  50% {\r\n    transform: translateY(-5px);\r\n  }\r\n  100% {\r\n    transform: translateY(0);\r\n  }\r\n}\r\n\r\n\r\na {\r\n  text-decoration: none;\r\n  color: $black;\r\n}\r\n\r\n.footer {\r\n  display: grid;\r\n  grid-row: -2 / -1;\r\n  grid-column: 1 / -1;\r\n  background-color: $primary-color;\r\n}"],"sourceRoot":""}]);
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
/* harmony import */ var _displaytasks_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./displaytasks.js */ "./src/displaytasks.js");









(0,_header_js__WEBPACK_IMPORTED_MODULE_1__.adjustTickMark)();
_mediatordom_js__WEBPACK_IMPORTED_MODULE_5__.MediatorDOM.insertTaskDOM();
_mediatordom_js__WEBPACK_IMPORTED_MODULE_5__.MediatorDOM.deleteTaskDOM();
_mediatordom_js__WEBPACK_IMPORTED_MODULE_5__.MediatorDOM.showTaskInfo();
_mediatordom_js__WEBPACK_IMPORTED_MODULE_5__.MediatorDOM.closeTaskInfo();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xDNkM7QUFDYztBQUNVO0FBQ3JFO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBLFFBQVEsNEVBQXlCLENBQUMsMERBQVU7QUFDNUMsUUFBUSw4REFBWTtBQUNwQjtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxvRUFBa0I7QUFDMUI7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSwrRUFBNEI7QUFDcEM7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNyQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlcy5zY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGVzLnNjc3M/YTYwOSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jcmVhdGV0YXNrLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9kaXNwbGF5dGFza3MuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2hlYWRlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZm9ybWF0aW9uaG9sZGVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tZWRpYXRvcmRvbS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdGFza2Zvcm0uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vYXNzZXRzL2ZvbnRzL2FiZWwtcmVndWxhci13ZWJmb250LndvZmYyXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvZm9udHMvYWJlbC1yZWd1bGFyLXdlYmZvbnQud29mZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQWJlbFxcXCI7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIikgZm9ybWF0KFxcXCJ3b2ZmMlxcXCIpLCB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpIGZvcm1hdChcXFwid29mZlxcXCIpO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG4qIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHksXFxuaHRtbCB7XFxuICBmb250LWZhbWlseTogXFxcIkFiZWxcXFwiLCBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXFxcIlNlZ29lIFVJXFxcIiwgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCBcXFwiT3BlbiBTYW5zXFxcIiwgXFxcIkhlbHZldGljYSBOZXVlXFxcIiwgc2Fucy1zZXJpZjtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5wYWdlLXdyYXBwZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMmZyIDhmciAxZnI7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciA5ZnI7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5oZWFkZXIgPiBoMSB7XFxuICBmb250LXNpemU6IDQwcHg7XFxuICBmb250LXdlaWdodDogODAwO1xcbiAgY29sb3I6ICNjMjMxNTA7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBncmlkLXJvdzogMS8yO1xcbiAgZ3JpZC1jb2x1bW46IDEvLTE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTJiOGIzO1xcbiAgZ2FwOiAxNXB4O1xcbiAgcGFkZGluZzogMCAzMHB4O1xcbn1cXG5cXG4uc2lkZWJhciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC1yb3c6IDIvMztcXG4gIGdyaWQtY29sdW1uOiAxLzI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjJiOGI3O1xcbiAgY29sb3I6ICMyNzI3Mjc7XFxuICBhbGlnbi1jb250ZW50OiBzdGFydDtcXG4gIHBhZGRpbmc6IDMwcHg7XFxuICBnYXA6IDMwcHg7XFxuICBmb250LXNpemU6IDI3cHg7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4uc2lkZWJhciA+IGRpdiB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5zaWRlYmFyID4gZGl2OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTgsIDIwOSwgMjA3KTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi5tYWluLWNvbnRlbnQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnI7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMWZyO1xcbiAgZ3JpZC1yb3c6IDIvMztcXG4gIGdyaWQtY29sdW1uOiAyLy0xO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RmZDVkNTtcXG59XFxuXFxuLmFkZC10YXNrIHtcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbjogMDtcXG4gIGdhcDogNXB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgbWFyZ2luOiAyMHB4IDIwcHg7XFxuICBwYWRkaW5nOiAzcHggNnB4O1xcbiAgZ3JpZC1yb3c6IDEvMjtcXG4gIGdyaWQtY29sdW1uOiAxLzI7XFxufVxcblxcbi5hZGQtdGFzayA+ICoge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLmFkZC10YXNrOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNiMmI4Yjc7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxufVxcblxcbi5hZGQtdGFzazpob3ZlciA+IHN2ZyB7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XFxuICB0cmFuc2l0aW9uOiAwLjRzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4uY3VycmVudC10YWIge1xcbiAgY29sb3I6ICNjMjMxNTA7XFxuICBmb250LXNpemU6IDMwcHg7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICBncmlkLWNvbHVtbjogMS8tMTtcXG4gIGdyaWQtcm93OiAxLzI7XFxufVxcblxcbmZvcm0ge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGdhcDogMTBweDtcXG4gIHotaW5kZXg6IDk5O1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNiMmI4Yjc7XFxuICBjb2xvcjogI2MyMzE1MDtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4ud2lkZ2V0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uZm9ybS1idXR0b25zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG59XFxuXFxuLmZvcm0tYnV0dG9ucyA+ICoge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uaG9tZS10YXNrcyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNGZyIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoYXV0bywgMWZyKSk7XFxuICBhbGlnbi1jb250ZW50OiBzdGFydDtcXG4gIGdyaWQtcm93OiAyLy0xO1xcbiAgZ3JpZC1jb2x1bW46IDEvLTE7XFxufVxcblxcbi5ob21lLXRhc2tzLWhlYWRlciB7XFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBwYWRkaW5nOiAwIDEwcHg7XFxufVxcblxcbi5kdWUge1xcbiAgcGFkZGluZy1yaWdodDogMzBweDtcXG59XFxuXFxuLnRhc2sge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHBhZGRpbmc6IDAgMTBweDtcXG59XFxuXFxuLnRhc2stbiB7XFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50YXNrOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlNmRlZGU7XFxufVxcblxcbi50YXNrLWRhdGUge1xcbiAgcGFkZGluZy1yaWdodDogMTBweDtcXG59XFxuXFxuLmhvbWUtdGFza3MgPiAqIHtcXG4gIGdyaWQtY29sdW1uOiAyLzM7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2MyMzE1MDtcXG59XFxuXFxuLmRlbGV0ZS10YXNrIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmRlbGV0ZS10YXNrOmhvdmVyIHtcXG4gIGFuaW1hdGlvbjogbW92ZS11cCAwLjVzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4uaW5mby1kaXNwbGF5IHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG87XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG87XFxuICBnYXA6IDEwcHg7XFxuICB6LWluZGV4OiA5OTtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjJiOGI3O1xcbiAgY29sb3I6ICNjMjMxNTA7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgcGFkZGluZzogMTBweCAyMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuLmNsb3NlLWluZm8ge1xcbiAganVzdGlmeS1zZWxmOiBlbmQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbkBrZXlmcmFtZXMgbW92ZS11cCB7XFxuICAwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcXG4gIH1cXG4gIDUwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNXB4KTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XFxuICB9XFxufVxcbmEge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY29sb3I6ICMyNzI3Mjc7XFxufVxcblxcbi5mb290ZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtcm93OiAtMi8tMTtcXG4gIGdyaWQtY29sdW1uOiAxLy0xO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2EyYjhiMztcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsbUJBQUE7RUFDQSxvSEFBQTtFQUVFLGtCQUFBO0FBQUo7QUFTQTtFQUNFLHNCQUFBO0FBUEY7O0FBVUE7O0VBRUUsMkpBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUFQRjs7QUFVQTtFQUNFLGFBQUE7RUFDQSwrQkFBQTtFQUNBLDhCQUFBO0VBQ0EsWUFBQTtBQVBGOztBQVVBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0ExQm9CO0FBbUJ0Qjs7QUFVQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQXBDYztFQXFDZCxTQUFBO0VBQ0EsZUFBQTtBQVBGOztBQVVBO0VBQ0UsYUFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQTVDZ0I7RUE2Q2hCLGNBMUNNO0VBMkNOLG9CQUFBO0VBQ0EsYUFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFQRjs7QUFVQTtFQUNFLGVBQUE7QUFQRjs7QUFVQTtFQUNFLG9DQUFBO0VBQ0EsbUJBQUE7QUFQRjs7QUFVQTtFQUNFLGFBQUE7RUFDQSw0QkFBQTtFQUNBLCtCQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7QUFQRjs7QUFVQTtFQUNFLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FBUEY7O0FBVUE7RUFDRSxTQUFBO0VBQ0EsVUFBQTtBQVBGOztBQVVBO0VBQ0UseUJBekZnQjtFQTBGaEIsa0JBQUE7QUFQRjs7QUFVQTtFQUNFLHdCQUFBO0VBQ0EsNEJBQUE7QUFQRjs7QUFVQTtFQUNFLGNBbEdvQjtFQW1HcEIsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7QUFQRjs7QUFVQTtFQUNFLGVBQUE7RUFDQSxhQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0VBQ0EseUJBbkhnQjtFQW9IaEIsY0FuSG9CO0VBb0hwQixnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFQRjs7QUFVQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtBQVBGOztBQVVBO0VBQ0UsYUFBQTtFQUNBLDZCQUFBO0FBUEY7O0FBVUE7RUFDRSxlQUFBO0FBUEY7O0FBVUE7RUFDRSxhQUFBO0VBQ0Esa0NBQUE7RUFDQSx1REFBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FBUEY7O0FBVUE7RUFDRSxvQkFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBUEY7O0FBVUE7RUFDRSxtQkFBQTtBQVBGOztBQVVBO0VBQ0UsYUFBQTtFQUNBLGVBQUE7QUFQRjs7QUFVQTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtBQVBGOztBQVVBO0VBQ0UseUJBQUE7QUFQRjs7QUFVQTtFQUNFLG1CQUFBO0FBUEY7O0FBVUE7RUFDRSxnQkFBQTtFQUNBLGdDQUFBO0FBUEY7O0FBVUE7RUFDRSxlQUFBO0FBUEY7O0FBVUE7RUFDRSxtQ0FBQTtBQVBGOztBQVVBO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSwyQkFBQTtFQUNBLHdCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0VBQ0EseUJBck1nQjtFQXNNaEIsY0FyTW9CO0VBc01wQixnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFQRjs7QUFVQTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtBQVBGOztBQVVBO0VBQ0U7SUFDRSx3QkFBQTtFQVBGO0VBU0E7SUFDRSwyQkFBQTtFQVBGO0VBU0E7SUFDRSx3QkFBQTtFQVBGO0FBQ0Y7QUFXQTtFQUNFLHFCQUFBO0VBQ0EsY0E3Tk07QUFvTlI7O0FBWUE7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBeE9jO0FBK05oQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnQWJlbCc7XFxyXFxuICBzcmM6IHVybCgnLi9hc3NldHMvZm9udHMvYWJlbC1yZWd1bGFyLXdlYmZvbnQud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksXFxyXFxuICAgIHVybCgnLi9hc3NldHMvZm9udHMvYWJlbC1yZWd1bGFyLXdlYmZvbnQud29mZicpIGZvcm1hdCgnd29mZicpO1xcclxcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxufVxcclxcblxcclxcbiRwcmltYXJ5LWNvbG9yOiAjYTJiOGIzO1xcclxcbiRzZWNvbmRhcnktY29sb3I6ICNiMmI4Yjc7XFxyXFxuJGNvbXBsZW1lbnRhcnktY29sb3I6ICNjMjMxNTA7XFxyXFxuJHllbGxvdzogI2ZmYzYwMDtcXHJcXG4kYmxhY2s6ICMyNzI3Mjc7XFxyXFxuXFxyXFxuKiB7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5LFxcclxcbmh0bWwge1xcclxcbiAgZm9udC1mYW1pbHk6ICdBYmVsJywgc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4ucGFnZS13cmFwcGVyIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDJmciA4ZnIgMWZyO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgOWZyO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG4gXFxyXFxuLmhlYWRlciA+IGgxIHtcXHJcXG4gIGZvbnQtc2l6ZTogNDBweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XFxyXFxuICBjb2xvcjogJGNvbXBsZW1lbnRhcnktY29sb3I7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBncmlkLXJvdzogMSAvIDI7XFxyXFxuICBncmlkLWNvbHVtbjogMSAvIC0xO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnktY29sb3I7XFxyXFxuICBnYXA6IDE1cHg7XFxyXFxuICBwYWRkaW5nOiAwIDMwcHg7XFxyXFxufVxcclxcblxcclxcbi5zaWRlYmFyIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXJvdzogMiAvIDM7XFxyXFxuICBncmlkLWNvbHVtbjogMSAvIDI7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xcclxcbiAgY29sb3I6ICRibGFjaztcXHJcXG4gIGFsaWduLWNvbnRlbnQ6IHN0YXJ0O1xcclxcbiAgcGFkZGluZzogMzBweDtcXHJcXG4gIGdhcDogMzBweDtcXHJcXG4gIGZvbnQtc2l6ZTogMjdweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxufVxcclxcblxcclxcbi5zaWRlYmFyID4gZGl2IHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZGViYXIgPiBkaXY6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5OCwgMjA5LCAyMDcpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW4tY29udGVudCB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmcjtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnI7XFxyXFxuICBncmlkLXJvdzogMiAvIDM7XFxyXFxuICBncmlkLWNvbHVtbjogMiAvIC0xO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RmZDVkNTtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZC10YXNrIHtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIGdhcDogNXB4O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgbWFyZ2luOiAyMHB4IDIwcHg7XFxyXFxuICBwYWRkaW5nOiAzcHggNnB4O1xcclxcbiAgZ3JpZC1yb3c6IDEgLyAyO1xcclxcbiAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkLXRhc2sgPiAqIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbi5hZGQtdGFzazpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xcclxcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkLXRhc2s6aG92ZXIgPiBzdmcge1xcclxcbiAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xcclxcbiAgdHJhbnNpdGlvbjogMC40cyBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuLmN1cnJlbnQtdGFiIHtcXHJcXG4gIGNvbG9yOiAkY29tcGxlbWVudGFyeS1jb2xvcjtcXHJcXG4gIGZvbnQtc2l6ZTogMzBweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXHJcXG4gIGdyaWQtY29sdW1uOiAxIC8gLTE7XFxyXFxuICBncmlkLXJvdzogMSAvIDI7XFxyXFxufVxcclxcblxcclxcbmZvcm0ge1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG4gIGdhcDogMTBweDtcXHJcXG4gIHotaW5kZXg6IDk5O1xcclxcbiAgdG9wOiA1MCU7XFxyXFxuICBsZWZ0OiA1MCU7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XFxyXFxuICBjb2xvcjogJGNvbXBsZW1lbnRhcnktY29sb3I7XFxyXFxuICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgcGFkZGluZzogMTBweCAyMHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLndpZGdldCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0tYnV0dG9ucyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxufVxcclxcblxcclxcbi5mb3JtLWJ1dHRvbnMgPiAqIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmhvbWUtdGFza3Mge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDRmciAxZnI7XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KGF1dG8sIDFmcikpO1xcclxcbiAgYWxpZ24tY29udGVudDogc3RhcnQ7XFxyXFxuICBncmlkLXJvdzogMiAvIC0xO1xcclxcbiAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcXHJcXG59XFxyXFxuXFxyXFxuLmhvbWUtdGFza3MtaGVhZGVyIHtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gIHBhZGRpbmc6IDAgMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmR1ZSB7XFxyXFxuICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4udGFzayB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgcGFkZGluZzogMCAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay1uIHtcXHJcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2s6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZGVkZTtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2stZGF0ZSB7XFxyXFxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaG9tZS10YXNrcyA+ICoge1xcclxcbiAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICRjb21wbGVtZW50YXJ5LWNvbG9yO1xcclxcbn1cXHJcXG5cXHJcXG4uZGVsZXRlLXRhc2sge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZGVsZXRlLXRhc2s6aG92ZXIge1xcclxcbiAgYW5pbWF0aW9uOiBtb3ZlLXVwIDAuNXMgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcblxcclxcbi5pbmZvLWRpc3BsYXkge1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0bztcXHJcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0bztcXHJcXG4gIGdhcDogMTBweDtcXHJcXG4gIHotaW5kZXg6IDk5O1xcclxcbiAgdG9wOiA1MCU7XFxyXFxuICBsZWZ0OiA1MCU7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XFxyXFxuICBjb2xvcjogJGNvbXBsZW1lbnRhcnktY29sb3I7XFxyXFxuICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgcGFkZGluZzogMTBweCAyMHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNsb3NlLWluZm8ge1xcclxcbiAganVzdGlmeS1zZWxmOiBlbmQ7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgbW92ZS11cCB7XFxyXFxuICAwJSB7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcXHJcXG4gIH1cXHJcXG4gIDUwJSB7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNXB4KTtcXHJcXG4gIH1cXHJcXG4gIDEwMCUge1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcblxcclxcbmEge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgY29sb3I6ICRibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3RlciB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC1yb3c6IC0yIC8gLTE7XFxyXFxuICBncmlkLWNvbHVtbjogMSAvIC0xO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnktY29sb3I7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGNvbnN0IGNyZWF0ZVRhc2sgPSAoKSA9PiAoe1xyXG4gIG5hbWU6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLW5hbWUnKS52YWx1ZSxcclxuICBkZXNjcmlwdGlvbjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stZGVzY3JpcHRpb24nKS52YWx1ZSxcclxuICBkdWVEYXRlOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZHVlLWRhdGUnKS52YWx1ZSxcclxuICBwcmlvcml0eTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ByaW9yaXR5JykudmFsdWUsXHJcbn0pOyIsImltcG9ydCB7SW5mb3JtYXRpb25Ib2xkZXJ9IGZyb20gJy4vaW5mb3JtYXRpb25ob2xkZXIuanMnO1xyXG5pbXBvcnQgZGVsZXRlSWNvblBhdGggZnJvbSAnLi9hc3NldHMvaWNvbnMvZGVsZXRlLWljb24uc3ZnJztcclxuaW1wb3J0IGNsb3NlSW5mb1BhdGggZnJvbSAnLi9hc3NldHMvaWNvbnMvY2xvc2UtaW5mby5zdmcnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlUYXNrcygpIHtcclxuICBjb25zdCBob21lVGFza3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG9tZS10YXNrcycpO1xyXG4gIGNvbnN0IHRhc2tzTGVuZ3RoID0gSW5mb3JtYXRpb25Ib2xkZXIudGFza3MubGVuZ3RoO1xyXG4gIGZvciAobGV0IGkgPSB0YXNrc0xlbmd0aCAtIDE7IGkgPCB0YXNrc0xlbmd0aDsgaSsrKSB7XHJcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGRpdi5jbGFzc0xpc3QuYWRkKCd0YXNrJyk7XHJcbiAgICBkaXYuc2V0QXR0cmlidXRlKCdpZCcsIGkpO1xyXG5cclxuICAgIGNvbnN0IHRhc2tOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgdGFza05hbWUuY2xhc3NMaXN0LmFkZCgndGFzay1uJyk7XHJcbiAgICB0YXNrTmFtZS50ZXh0Q29udGVudCA9IEluZm9ybWF0aW9uSG9sZGVyLnRhc2tzW2ldLm5hbWU7XHJcbiAgICBkaXYuYXBwZW5kQ2hpbGQodGFza05hbWUpO1xyXG5cclxuICAgIGNvbnN0IHRhc2tEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgdGFza0RhdGUuY2xhc3NMaXN0LmFkZCgndGFzay1kYXRlJyk7XHJcbiAgICB0YXNrRGF0ZS50ZXh0Q29udGVudCA9IEluZm9ybWF0aW9uSG9sZGVyLnRhc2tzW2ldLmR1ZURhdGU7XHJcbiAgICBkaXYuYXBwZW5kQ2hpbGQodGFza0RhdGUpO1xyXG5cclxuXHJcbiAgICBjb25zdCBkZWxldGVJY29uID0gbmV3IEltYWdlKCk7XHJcbiAgICBkZWxldGVJY29uLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZS10YXNrJyk7XHJcbiAgICBkZWxldGVJY29uLnNyYyA9IGRlbGV0ZUljb25QYXRoO1xyXG4gICAgZGl2LmFwcGVuZENoaWxkKGRlbGV0ZUljb24pO1xyXG5cclxuICAgIGhvbWVUYXNrcy5hcHBlbmRDaGlsZChkaXYpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlBbGxUYXNrSW5mbyhhcnJheUluZGV4KSB7XHJcbiAgY29uc3QgaW5mb0Rpc3BsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBpbmZvRGlzcGxheS5jbGFzc0xpc3QuYWRkKCdpbmZvLWRpc3BsYXknKTtcclxuICBcclxuICBjb25zdCB0YXNrTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICB0YXNrTmFtZS50ZXh0Q29udGVudCA9IEluZm9ybWF0aW9uSG9sZGVyLnRhc2tzW2FycmF5SW5kZXhdLm5hbWU7XHJcbiAgY29uc3QgdGFza0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gIHRhc2tEZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IEluZm9ybWF0aW9uSG9sZGVyLnRhc2tzW2FycmF5SW5kZXhdLmRlc2NyaXB0aW9uO1xyXG4gIGNvbnN0IHRhc2tEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gIHRhc2tEYXRlLnRleHRDb250ZW50ID0gYER1ZTogJHtJbmZvcm1hdGlvbkhvbGRlci50YXNrc1thcnJheUluZGV4XS5kdWVEYXRlfWA7XHJcbiAgY29uc3QgdGFza1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gIHRhc2tQcmlvcml0eS50ZXh0Q29udGVudCA9IGBQcmlvcml0eTogJHtJbmZvcm1hdGlvbkhvbGRlci50YXNrc1thcnJheUluZGV4XS5wcmlvcml0eS50b1VwcGVyQ2FzZSgpfWA7IFxyXG5cclxuICBjb25zdCBjbG9zZUluZm8gPSBuZXcgSW1hZ2UoKTtcclxuICBjbG9zZUluZm8uc3JjID0gY2xvc2VJbmZvUGF0aDtcclxuICBjbG9zZUluZm8uY2xhc3NMaXN0LmFkZCgnY2xvc2UtaW5mbycpO1xyXG4gIFxyXG4gIGNvbnN0IGJvcmRlciA9IHNlbGVjdFByaW9yaXR5Qm9yZGVyKEluZm9ybWF0aW9uSG9sZGVyLnRhc2tzW2FycmF5SW5kZXhdLnByaW9yaXR5KTtcclxuICBpbmZvRGlzcGxheS5zdHlsZS5ib3JkZXIgPSBib3JkZXI7XHJcblxyXG4gIGluZm9EaXNwbGF5LmFwcGVuZENoaWxkKGNsb3NlSW5mbyk7XHJcbiAgaW5mb0Rpc3BsYXkuYXBwZW5kQ2hpbGQodGFza05hbWUpO1xyXG4gIGluZm9EaXNwbGF5LmFwcGVuZENoaWxkKHRhc2tEZXNjcmlwdGlvbik7XHJcbiAgaW5mb0Rpc3BsYXkuYXBwZW5kQ2hpbGQodGFza0RhdGUpO1xyXG4gIGluZm9EaXNwbGF5LmFwcGVuZENoaWxkKHRhc2tQcmlvcml0eSk7XHJcblxyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLWNvbnRlbnQnKS5hcHBlbmRDaGlsZChpbmZvRGlzcGxheSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNlbGVjdFByaW9yaXR5Qm9yZGVyKHByaW9yaXR5KSB7XHJcbiAgaWYgKHByaW9yaXR5ID09PSAnbG93JykgcmV0dXJuICcycHggc29saWQgIzJkN2JkMic7XHJcbiAgaWYgKHByaW9yaXR5ID09PSAnbWVkaXVtJykgcmV0dXJuICcycHggc29saWQgI2ZmYzYwMCc7XHJcbiAgcmV0dXJuICcycHggc29saWQgI2ZmMDAxOCc7XHJcbn0iLCJpbXBvcnQgdGljayBmcm9tICcuL2Fzc2V0cy9pY29ucy90aWNrLnBuZyc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWRqdXN0VGlja01hcmsoKSB7XHJcbiAgY29uc3QgdGlja01hcmsgPSBuZXcgSW1hZ2UoKTtcclxuICB0aWNrTWFyay5zcmMgPSB0aWNrO1xyXG4gIHRpY2tNYXJrLnN0eWxlLndpZHRoID0gJzQwcHgnO1xyXG4gIHRpY2tNYXJrLnN0eWxlLmhlaWdodCA9ICc0MHB4JztcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyJykuYXBwZW5kQ2hpbGQodGlja01hcmspO1xyXG59IiwiaW1wb3J0ICcuL3N0eWxlcy5zY3NzJztcclxuaW1wb3J0IHthZGp1c3RUaWNrTWFya30gZnJvbSAnLi9oZWFkZXIuanMnO1xyXG5pbXBvcnQge01hbmFnZUZvcm19IGZyb20gJy4vdGFza2Zvcm0uanMnO1xyXG5pbXBvcnQge0luZm9ybWF0aW9uSG9sZGVyfSBmcm9tICcuL2luZm9ybWF0aW9uaG9sZGVyLmpzJztcclxuaW1wb3J0IHtjcmVhdGVUYXNrfSBmcm9tICcuL2NyZWF0ZXRhc2suanMnO1xyXG5pbXBvcnQge01lZGlhdG9yRE9NfSBmcm9tICcuL21lZGlhdG9yZG9tLmpzJztcclxuaW1wb3J0IHtkaXNwbGF5VGFza3N9IGZyb20gJy4vZGlzcGxheXRhc2tzLmpzJztcclxuXHJcblxyXG5hZGp1c3RUaWNrTWFyaygpO1xyXG5NZWRpYXRvckRPTS5pbnNlcnRUYXNrRE9NKCk7XHJcbk1lZGlhdG9yRE9NLmRlbGV0ZVRhc2tET00oKTtcclxuTWVkaWF0b3JET00uc2hvd1Rhc2tJbmZvKCk7XHJcbk1lZGlhdG9yRE9NLmNsb3NlVGFza0luZm8oKTtcclxuY29uc3QgZm9ybSA9IE1hbmFnZUZvcm0oKTtcclxuZm9ybS5pbml0aWFsaXplKCk7XHJcblxyXG4iLCJleHBvcnQgY2xhc3MgSW5mb3JtYXRpb25Ib2xkZXIge1xyXG4gIHN0YXRpYyB0YXNrcyA9IFtdO1xyXG5cclxuICBzdGF0aWMgcHJvamVjdHMgPSBbXTtcclxuXHJcbiAgc3RhdGljIGFkZFRhc2soc29tZVRhc2spIHtcclxuICAgIHJldHVybiB0aGlzLnRhc2tzLnB1c2goc29tZVRhc2spO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIHJlbW92ZVRhc2soYVRhc2spIHtcclxuICAgIGNvbnN0IHRhc2tJbmRleCA9IE51bWJlcihhVGFzay5pZCk7XHJcbiAgICB0aGlzLnRhc2tzLnNwbGljZSh0YXNrSW5kZXgsIDEpO1xyXG4gICAgdGhpcy4jYWRqdXN0VGFza3NJZCh0YXNrSW5kZXgpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljICNhZGp1c3RUYXNrc0lkKGRlbGV0ZWRUYXNrSWQpIHtcclxuICAgIGNvbnN0IGRpdnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRhc2tcIik7XHJcbiAgICBpZiAoZGl2cy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGRpdnMuZm9yRWFjaChkaXYgPT4ge1xyXG4gICAgICAgIGlmIChkaXYuaWQgPiBkZWxldGVkVGFza0lkKSB7XHJcbiAgICAgICAgICBjb25zdCBjdXJyZW50SWQgPSBwYXJzZUludChkaXYuaWQubWF0Y2goL1xcZCsvKVswXSk7XHJcbiAgICAgICAgICBkaXYuaWQgPSBkaXYuaWQucmVwbGFjZShjdXJyZW50SWQsIGN1cnJlbnRJZCAtIDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgYWRkUHJvamVjdChzb21lUHJvamVjdCkge1xyXG4gICAgcmV0dXJuIHRoaXMucHJvamVjdHMucHVzaChzb21lUHJvamVjdCk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgcmVtb3ZlUHJvamVjdChhUHJvamVjdCkge1xyXG4gICAgcmV0dXJuIHRoaXMucHJvamVjdHMuc3BsaWNlKGFQcm9qZWN0LCAxKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgY3JlYXRlVGFzayB9IGZyb20gXCIuL2NyZWF0ZXRhc2suanNcIjtcclxuaW1wb3J0IHsgSW5mb3JtYXRpb25Ib2xkZXIgfSBmcm9tIFwiLi9pbmZvcm1hdGlvbmhvbGRlci5qc1wiO1xyXG5pbXBvcnQgeyBkaXNwbGF5VGFza3MsIGRpc3BsYXlBbGxUYXNrSW5mbyB9IGZyb20gXCIuL2Rpc3BsYXl0YXNrcy5qc1wiO1xyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBNZWRpYXRvckRPTSB7XHJcbiAgc3RhdGljIGluc2VydFRhc2tET00oKSB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3VibWl0JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtJykuY2hlY2tWYWxpZGl0eSgpKSB7XHJcbiAgICAgICAgSW5mb3JtYXRpb25Ib2xkZXIuYWRkVGFzayhjcmVhdGVUYXNrKCkpO1xyXG4gICAgICAgIGRpc3BsYXlUYXNrcygpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBzdGF0aWMgc2hvd1Rhc2tJbmZvKCkge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tY29udGVudCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygndGFzay1uJykpIHtcclxuICAgICAgICBkaXNwbGF5QWxsVGFza0luZm8oTnVtYmVyKGUudGFyZ2V0LnBhcmVudEVsZW1lbnQuaWQpKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgc3RhdGljIGNsb3NlVGFza0luZm8oKSB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1jb250ZW50JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjbG9zZS1pbmZvJykpIGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucmVtb3ZlKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBkZWxldGVUYXNrRE9NKCkge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tY29udGVudCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnZGVsZXRlLXRhc2snKSkge1xyXG4gICAgICAgIEluZm9ybWF0aW9uSG9sZGVyLnJlbW92ZVRhc2soZS50YXJnZXQucGFyZW50RWxlbWVudCk7XHJcbiAgICAgICAgZS50YXJnZXQucGFyZW50RWxlbWVudC5yZW1vdmUoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfTtcclxufTtcclxuIiwiZXhwb3J0IGNvbnN0IE1hbmFnZUZvcm0gPSAoKSA9PiAoe1xyXG4gIGFkZFRhc2tCdXR0b246IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtdGFzaycpLFxyXG4gIGZvcm06IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0nKSxcclxuXHJcbiAgY2xlYXJGb3JtKCkge1xyXG4gICAgY29uc3QgZm9ybUlucHV0cyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnZm9ybSBpbnB1dCcpKTtcclxuICAgIGZvcm1JbnB1dHMuZm9yRWFjaCgoaW5wdXQpID0+IHtcclxuICAgICAgaW5wdXQudmFsdWUgPSAnJztcclxuICAgIH0pXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCd0ZXh0YXJlYScpLnZhbHVlID0gJyc7XHJcbiAgfSxcclxuXHJcbiAgb3BlbkZvcm0oKSB7XHJcbiAgICB0aGlzLmFkZFRhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIHRoaXMuZm9ybS5zdHlsZS5kaXNwbGF5ID0gJ2dyaWQnO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuXHJcbiAgY2xvc2VGb3JtKCkge1xyXG4gICAgdGhpcy5mb3JtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgfSxcclxuXHJcbiAgY2FuY2VsKCkge1xyXG4gICAgY29uc3QgY2xvc2VGb3JtQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhbmNlbCcpO1xyXG4gICAgY2xvc2VGb3JtQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICB0aGlzLmNsb3NlRm9ybSgpO1xyXG4gICAgICB0aGlzLmNsZWFyRm9ybSgpO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuXHJcbiAgc3VibWl0Rm9ybSgpIHtcclxuICAgIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdWJtaXQnKTtcclxuICAgIHN1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgaWYgKHRoaXMuZm9ybS5jaGVja1ZhbGlkaXR5KCkpIHtcclxuICAgICAgICB0aGlzLmNsb3NlRm9ybSgpO1xyXG4gICAgICAgIHRoaXMuY2xlYXJGb3JtKCk7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0pO1xyXG4gIH0sXHJcblxyXG4gIGluaXRpYWxpemUoKSB7XHJcbiAgICB0aGlzLm9wZW5Gb3JtKCk7XHJcbiAgICB0aGlzLmNhbmNlbCgpO1xyXG4gICAgdGhpcy5zdWJtaXRGb3JtKCk7XHJcbiAgfSxcclxufSk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==