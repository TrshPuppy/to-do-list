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

/***/ "./src/classes.js":
/*!************************!*\
  !*** ./src/classes.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"List\": () => (/* binding */ List),\n/* harmony export */   \"ToDo\": () => (/* binding */ ToDo),\n/* harmony export */   \"default\": () => (/* binding */ Project)\n/* harmony export */ });\n/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utilities */ \"./src/utilities.js\");\n\n// import { removeItemFromArray } from \"./utilities\";\n\nclass Project {\n  constructor(name) {\n    this.name = name;\n    this.lists = [];\n    // this.priority = priority;\n  }\n\n  appendList(list) {\n    (0,_utilities__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(list, this.lists);\n    return;\n  }\n\n  removeList(list) {\n    (0,_utilities__WEBPACK_IMPORTED_MODULE_0__.removeItemFromArray)(list, this.lists);\n  }\n}\n\nclass List {\n  constructor(listName) {\n    this.name = listName;\n    this.listItems = [];\n  }\n\n  appendItemToListArray(item) {\n    (0,_utilities__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(item, this.listItems);\n  }\n\n  removeItemFromListArray(item) {\n    (0,_utilities__WEBPACK_IMPORTED_MODULE_0__.removeItemFromArray)(item, this.listItems);\n  }\n}\n\nclass ToDo {\n  constructor(name) {\n    this.name = name;\n    //priority\n    //name\n    //\n  }\n}\n\n\n//# sourceURL=webpack://repos/./src/classes.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes */ \"./src/classes.js\");\n\n\n\n\nconst defaultProject = new _classes__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"default\");\n// console.log(defaultProject.list);\n\nconst myList = new _classes__WEBPACK_IMPORTED_MODULE_0__.List(\"first list\");\nconst myList2 = new _classes__WEBPACK_IMPORTED_MODULE_0__.List(\"2nd list\");\n// console.log(myList);\n\nconst todoItem = new _classes__WEBPACK_IMPORTED_MODULE_0__.ToDo(\"water the lawn\");\nconst todo2 = new _classes__WEBPACK_IMPORTED_MODULE_0__.ToDo(\"Eat a watermelon\");\n\nmyList.appendItemToListArray(todoItem);\nmyList.appendItemToListArray(todo2);\n\ndefaultProject.appendList(myList);\ndefaultProject.appendList(myList2);\nconsole.log(defaultProject);\n\nmyList.removeItemFromListArray(todoItem);\ndefaultProject.removeList(myList);\n\n\n//# sourceURL=webpack://repos/./src/index.js?");

/***/ }),

/***/ "./src/utilities.js":
/*!**************************!*\
  !*** ./src/utilities.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ appendItemToArray),\n/* harmony export */   \"removeItemFromArray\": () => (/* binding */ removeItemFromArray)\n/* harmony export */ });\nfunction appendItemToArray(item, array) {\n  array.push(item);\n  return;\n}\n\nfunction removeItemFromArray(item, array) {\n  let indexToRemove = array.indexOf(item);\n  array.splice(indexToRemove, 1);\n  //   console.log(array);\n}\n\n\n//# sourceURL=webpack://repos/./src/utilities.js?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;