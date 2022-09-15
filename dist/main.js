/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/classes.js":
/*!************************!*\
  !*** ./src/classes.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "List": () => (/* binding */ List),
/* harmony export */   "ToDo": () => (/* binding */ ToDo),
/* harmony export */   "default": () => (/* binding */ Project)
/* harmony export */ });
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utilities */ "./src/utilities.js");

// import { removeItemFromArray } from "./utilities";

class Project {
  constructor(name) {
    this.name = name;
    this.lists = [];
    // this.priority = priority;
  }

  appendList(list) {
    (0,_utilities__WEBPACK_IMPORTED_MODULE_0__["default"])(list, this.lists);
    return;
  }

  removeList(list) {
    (0,_utilities__WEBPACK_IMPORTED_MODULE_0__.removeItemFromArray)(item, this.lists);
  }
}

class List {
  constructor(listName) {
    this.name = listName;
    this.listItems = [];
  }

  appendItemToListArray(item) {
    (0,_utilities__WEBPACK_IMPORTED_MODULE_0__["default"])(item, this.listItems);
  }

  removeItemFromListArray(item) {
    (0,_utilities__WEBPACK_IMPORTED_MODULE_0__.removeItemFromArray)(item, this.listItems);
  }
}

class ToDo {
  constructor(name) {
    this.name = name;
    //priority
    //name
    //
  }
}


/***/ }),

/***/ "./src/utilities.js":
/*!**************************!*\
  !*** ./src/utilities.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ appendItemToArray),
/* harmony export */   "removeItemFromArray": () => (/* binding */ removeItemFromArray)
/* harmony export */ });
function appendItemToArray(item, array) {
  array.push(item);
  return;
}

function removeItemFromArray(item, array) {
  let indexToRemove = array.indexOf(item);

  array.splice(indexToRemove);
  //   console.log(array);
}


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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes */ "./src/classes.js");




const defaultProject = new _classes__WEBPACK_IMPORTED_MODULE_0__["default"]("default");
// console.log(defaultProject.list);

const myList = new _classes__WEBPACK_IMPORTED_MODULE_0__.List("first list");
// console.log(myList);

const todoItem = new _classes__WEBPACK_IMPORTED_MODULE_0__.ToDo("water the lawn");
console.log(todoItem.name);

myList.appendItemToListArray(todoItem);

defaultProject.appendList(myList);
console.log(defaultProject);

myList.removeItemFromListArray();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFxRTtBQUNyRSxZQUFZLHNCQUFzQjs7QUFFbkI7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBSSxzREFBaUI7QUFDckI7QUFDQTs7QUFFQTtBQUNBLElBQUksK0RBQW1CO0FBQ3ZCO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUksc0RBQWlCO0FBQ3JCOztBQUVBO0FBQ0EsSUFBSSwrREFBbUI7QUFDdkI7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDMUNlO0FBQ2Y7QUFDQTtBQUNBOztBQUVPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7O1VDVkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05nQztBQUNDO0FBQ0E7O0FBRWpDLDJCQUEyQixnREFBTztBQUNsQzs7QUFFQSxtQkFBbUIsMENBQUk7QUFDdkI7O0FBRUEscUJBQXFCLDBDQUFJO0FBQ3pCOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXBvcy8uL3NyYy9jbGFzc2VzLmpzIiwid2VicGFjazovL3JlcG9zLy4vc3JjL3V0aWxpdGllcy5qcyIsIndlYnBhY2s6Ly9yZXBvcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXBvcy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVwb3Mvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXBvcy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3JlcG9zLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBhcHBlbmRJdGVtVG9BcnJheSwgeyByZW1vdmVJdGVtRnJvbUFycmF5IH0gZnJvbSBcIi4vdXRpbGl0aWVzXCI7XG4vLyBpbXBvcnQgeyByZW1vdmVJdGVtRnJvbUFycmF5IH0gZnJvbSBcIi4vdXRpbGl0aWVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2plY3Qge1xuICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmxpc3RzID0gW107XG4gICAgLy8gdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICB9XG5cbiAgYXBwZW5kTGlzdChsaXN0KSB7XG4gICAgYXBwZW5kSXRlbVRvQXJyYXkobGlzdCwgdGhpcy5saXN0cyk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgcmVtb3ZlTGlzdChsaXN0KSB7XG4gICAgcmVtb3ZlSXRlbUZyb21BcnJheShpdGVtLCB0aGlzLmxpc3RzKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTGlzdCB7XG4gIGNvbnN0cnVjdG9yKGxpc3ROYW1lKSB7XG4gICAgdGhpcy5uYW1lID0gbGlzdE5hbWU7XG4gICAgdGhpcy5saXN0SXRlbXMgPSBbXTtcbiAgfVxuXG4gIGFwcGVuZEl0ZW1Ub0xpc3RBcnJheShpdGVtKSB7XG4gICAgYXBwZW5kSXRlbVRvQXJyYXkoaXRlbSwgdGhpcy5saXN0SXRlbXMpO1xuICB9XG5cbiAgcmVtb3ZlSXRlbUZyb21MaXN0QXJyYXkoaXRlbSkge1xuICAgIHJlbW92ZUl0ZW1Gcm9tQXJyYXkoaXRlbSwgdGhpcy5saXN0SXRlbXMpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBUb0RvIHtcbiAgY29uc3RydWN0b3IobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgLy9wcmlvcml0eVxuICAgIC8vbmFtZVxuICAgIC8vXG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFwcGVuZEl0ZW1Ub0FycmF5KGl0ZW0sIGFycmF5KSB7XG4gIGFycmF5LnB1c2goaXRlbSk7XG4gIHJldHVybjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUl0ZW1Gcm9tQXJyYXkoaXRlbSwgYXJyYXkpIHtcbiAgbGV0IGluZGV4VG9SZW1vdmUgPSBhcnJheS5pbmRleE9mKGl0ZW0pO1xuXG4gIGFycmF5LnNwbGljZShpbmRleFRvUmVtb3ZlKTtcbiAgLy8gICBjb25zb2xlLmxvZyhhcnJheSk7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBQcm9qZWN0IGZyb20gXCIuL2NsYXNzZXNcIjtcbmltcG9ydCB7IExpc3QgfSBmcm9tIFwiLi9jbGFzc2VzXCI7XG5pbXBvcnQgeyBUb0RvIH0gZnJvbSBcIi4vY2xhc3Nlc1wiO1xuXG5jb25zdCBkZWZhdWx0UHJvamVjdCA9IG5ldyBQcm9qZWN0KFwiZGVmYXVsdFwiKTtcbi8vIGNvbnNvbGUubG9nKGRlZmF1bHRQcm9qZWN0Lmxpc3QpO1xuXG5jb25zdCBteUxpc3QgPSBuZXcgTGlzdChcImZpcnN0IGxpc3RcIik7XG4vLyBjb25zb2xlLmxvZyhteUxpc3QpO1xuXG5jb25zdCB0b2RvSXRlbSA9IG5ldyBUb0RvKFwid2F0ZXIgdGhlIGxhd25cIik7XG5jb25zb2xlLmxvZyh0b2RvSXRlbS5uYW1lKTtcblxubXlMaXN0LmFwcGVuZEl0ZW1Ub0xpc3RBcnJheSh0b2RvSXRlbSk7XG5cbmRlZmF1bHRQcm9qZWN0LmFwcGVuZExpc3QobXlMaXN0KTtcbmNvbnNvbGUubG9nKGRlZmF1bHRQcm9qZWN0KTtcblxubXlMaXN0LnJlbW92ZUl0ZW1Gcm9tTGlzdEFycmF5KCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=