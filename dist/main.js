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
/* harmony export */   "Element": () => (/* binding */ Element),
/* harmony export */   "List": () => (/* binding */ List),
/* harmony export */   "ToDo": () => (/* binding */ ToDo),
/* harmony export */   "default": () => (/* binding */ Project)
/* harmony export */ });
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utilities */ "./src/utilities.js");



class Project {
  constructor(name) {
    this.name = name;
    this.lists = [];
    this.priority;
  }

  appendList(list) {
    (0,_utilities__WEBPACK_IMPORTED_MODULE_0__.appendItemToArray)(list, this.lists);
    return;
  }

  removeList(list) {
    (0,_utilities__WEBPACK_IMPORTED_MODULE_0__.removeItemFromArray)(list, this.lists);
  }

  editDetails(detailType) {
    (0,_utilities__WEBPACK_IMPORTED_MODULE_0__.editItemDetail)(this, detailType);
  }
}
class List {
  constructor(listName) {
    this.name = listName;
    this.listItems = [];
    this.priority;
  }

  appendItemToListArray(item) {
    (0,_utilities__WEBPACK_IMPORTED_MODULE_0__.appendItemToArray)(item, this.listItems);
  }

  removeItemFromListArray(item) {
    (0,_utilities__WEBPACK_IMPORTED_MODULE_0__.removeItemFromArray)(item, this.listItems);
  }
}
class ToDo {
  constructor(name) {
    this.name = name;
    this.priority;
    //priority
    //name
    //
  }
}

class Element {
  constructor(elementType) {
    this.elementType = elementType;
    this.attributes = {};
    this.children = [];
  }

  buildElement() {
    // Create element in DOM
    const newElement = document.createElement(this.elementType);

    // Add attributes to element
    for (const attribute in this.attributes) {
      console.log(this.attributes[attribute]);
      newElement.setAttribute(attribute, this.attributes[attribute]);
    }

    return newElement;
  }

  setAttributes(object) {
    this.attributes = object;

    return this;
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
/* harmony export */   "appendItemToArray": () => (/* binding */ appendItemToArray),
/* harmony export */   "default": () => (/* binding */ loadDefaultHTML),
/* harmony export */   "editItemDetail": () => (/* binding */ editItemDetail),
/* harmony export */   "removeItemFromArray": () => (/* binding */ removeItemFromArray),
/* harmony export */   "setPriority": () => (/* binding */ setPriority)
/* harmony export */ });
/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes */ "./src/classes.js");


function loadDefaultHTML() {
  const defaultProjectDiv = new _classes__WEBPACK_IMPORTED_MODULE_0__.Element("div");

  return defaultProjectDiv;
}

function appendItemToArray(item, array) {
  array.push(item);
  return;
}

function removeItemFromArray(item, array) {
  let indexToRemove = array.indexOf(item);
  array.splice(indexToRemove, 1);
  //   console.log(array);
}

function editItemDetail(item, detail) {
  //name
  // priority

  console.log(item);
  console.log(detail);
}

function setPriority(item, priority) {
  item.priority = priority;
  return;
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
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utilities */ "./src/utilities.js");
/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes */ "./src/classes.js");
// Imports






// Globals
const contentDiv = document.querySelector(".content");

contentDiv.appendChild(
  (0,_utilities__WEBPACK_IMPORTED_MODULE_0__["default"])()
    .setAttributes({ class: "project", id: "default" })
    .buildElement()
);

//testing shite:

const defaultProject = new _classes__WEBPACK_IMPORTED_MODULE_1__["default"]("default");

const myList = new _classes__WEBPACK_IMPORTED_MODULE_1__.List("first list");
const myList2 = new _classes__WEBPACK_IMPORTED_MODULE_1__.List("2nd list");

const todoItem = new _classes__WEBPACK_IMPORTED_MODULE_1__.ToDo("water the lawn");
const todo2 = new _classes__WEBPACK_IMPORTED_MODULE_1__.ToDo("Eat a watermelon");

myList.appendItemToListArray(todoItem);
myList.appendItemToListArray(todo2);

defaultProject.appendList(myList);
defaultProject.appendList(myList2);

//some priority button gets clicked:
//event listener => click { }
(0,_utilities__WEBPACK_IMPORTED_MODULE_0__.setPriority)(todoItem, 2);

console.log(defaultProject);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBZ0Q7QUFDRTtBQUNMO0FBQzlCO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUksNkRBQWlCO0FBQ3JCO0FBQ0E7O0FBRUE7QUFDQSxJQUFJLCtEQUFtQjtBQUN2Qjs7QUFFQTtBQUNBLElBQUksMERBQWM7QUFDbEI7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUksNkRBQWlCO0FBQ3JCOztBQUVBO0FBQ0EsSUFBSSwrREFBbUI7QUFDdkI7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6RW9DOztBQUVyQjtBQUNmLGdDQUFnQyw2Q0FBTzs7QUFFdkM7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7Ozs7Ozs7VUM5QkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUMwQztBQUNWO0FBQ0M7QUFDQTtBQUNTOztBQUUxQztBQUNBOztBQUVBO0FBQ0EsRUFBRSxzREFBZTtBQUNqQixxQkFBcUIsaUNBQWlDO0FBQ3REO0FBQ0E7O0FBRUE7O0FBRUEsMkJBQTJCLGdEQUFPOztBQUVsQyxtQkFBbUIsMENBQUk7QUFDdkIsb0JBQW9CLDBDQUFJOztBQUV4QixxQkFBcUIsMENBQUk7QUFDekIsa0JBQWtCLDBDQUFJOztBQUV0QjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVEQUFXOztBQUVYIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVwb3MvLi9zcmMvY2xhc3Nlcy5qcyIsIndlYnBhY2s6Ly9yZXBvcy8uL3NyYy91dGlsaXRpZXMuanMiLCJ3ZWJwYWNrOi8vcmVwb3Mvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVwb3Mvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3JlcG9zL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVwb3Mvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXBvcy8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhcHBlbmRJdGVtVG9BcnJheSB9IGZyb20gXCIuL3V0aWxpdGllc1wiO1xuaW1wb3J0IHsgcmVtb3ZlSXRlbUZyb21BcnJheSB9IGZyb20gXCIuL3V0aWxpdGllc1wiO1xuaW1wb3J0IHsgZWRpdEl0ZW1EZXRhaWwgfSBmcm9tIFwiLi91dGlsaXRpZXNcIjtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2plY3Qge1xuICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmxpc3RzID0gW107XG4gICAgdGhpcy5wcmlvcml0eTtcbiAgfVxuXG4gIGFwcGVuZExpc3QobGlzdCkge1xuICAgIGFwcGVuZEl0ZW1Ub0FycmF5KGxpc3QsIHRoaXMubGlzdHMpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHJlbW92ZUxpc3QobGlzdCkge1xuICAgIHJlbW92ZUl0ZW1Gcm9tQXJyYXkobGlzdCwgdGhpcy5saXN0cyk7XG4gIH1cblxuICBlZGl0RGV0YWlscyhkZXRhaWxUeXBlKSB7XG4gICAgZWRpdEl0ZW1EZXRhaWwodGhpcywgZGV0YWlsVHlwZSk7XG4gIH1cbn1cbmV4cG9ydCBjbGFzcyBMaXN0IHtcbiAgY29uc3RydWN0b3IobGlzdE5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBsaXN0TmFtZTtcbiAgICB0aGlzLmxpc3RJdGVtcyA9IFtdO1xuICAgIHRoaXMucHJpb3JpdHk7XG4gIH1cblxuICBhcHBlbmRJdGVtVG9MaXN0QXJyYXkoaXRlbSkge1xuICAgIGFwcGVuZEl0ZW1Ub0FycmF5KGl0ZW0sIHRoaXMubGlzdEl0ZW1zKTtcbiAgfVxuXG4gIHJlbW92ZUl0ZW1Gcm9tTGlzdEFycmF5KGl0ZW0pIHtcbiAgICByZW1vdmVJdGVtRnJvbUFycmF5KGl0ZW0sIHRoaXMubGlzdEl0ZW1zKTtcbiAgfVxufVxuZXhwb3J0IGNsYXNzIFRvRG8ge1xuICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnByaW9yaXR5O1xuICAgIC8vcHJpb3JpdHlcbiAgICAvL25hbWVcbiAgICAvL1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoZWxlbWVudFR5cGUpIHtcbiAgICB0aGlzLmVsZW1lbnRUeXBlID0gZWxlbWVudFR5cGU7XG4gICAgdGhpcy5hdHRyaWJ1dGVzID0ge307XG4gICAgdGhpcy5jaGlsZHJlbiA9IFtdO1xuICB9XG5cbiAgYnVpbGRFbGVtZW50KCkge1xuICAgIC8vIENyZWF0ZSBlbGVtZW50IGluIERPTVxuICAgIGNvbnN0IG5ld0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRoaXMuZWxlbWVudFR5cGUpO1xuXG4gICAgLy8gQWRkIGF0dHJpYnV0ZXMgdG8gZWxlbWVudFxuICAgIGZvciAoY29uc3QgYXR0cmlidXRlIGluIHRoaXMuYXR0cmlidXRlcykge1xuICAgICAgY29uc29sZS5sb2codGhpcy5hdHRyaWJ1dGVzW2F0dHJpYnV0ZV0pO1xuICAgICAgbmV3RWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlLCB0aGlzLmF0dHJpYnV0ZXNbYXR0cmlidXRlXSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ld0VsZW1lbnQ7XG4gIH1cblxuICBzZXRBdHRyaWJ1dGVzKG9iamVjdCkge1xuICAgIHRoaXMuYXR0cmlidXRlcyA9IG9iamVjdDtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG59XG4iLCJpbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcIi4vY2xhc3Nlc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkRGVmYXVsdEhUTUwoKSB7XG4gIGNvbnN0IGRlZmF1bHRQcm9qZWN0RGl2ID0gbmV3IEVsZW1lbnQoXCJkaXZcIik7XG5cbiAgcmV0dXJuIGRlZmF1bHRQcm9qZWN0RGl2O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXBwZW5kSXRlbVRvQXJyYXkoaXRlbSwgYXJyYXkpIHtcbiAgYXJyYXkucHVzaChpdGVtKTtcbiAgcmV0dXJuO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlSXRlbUZyb21BcnJheShpdGVtLCBhcnJheSkge1xuICBsZXQgaW5kZXhUb1JlbW92ZSA9IGFycmF5LmluZGV4T2YoaXRlbSk7XG4gIGFycmF5LnNwbGljZShpbmRleFRvUmVtb3ZlLCAxKTtcbiAgLy8gICBjb25zb2xlLmxvZyhhcnJheSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlZGl0SXRlbURldGFpbChpdGVtLCBkZXRhaWwpIHtcbiAgLy9uYW1lXG4gIC8vIHByaW9yaXR5XG5cbiAgY29uc29sZS5sb2coaXRlbSk7XG4gIGNvbnNvbGUubG9nKGRldGFpbCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRQcmlvcml0eShpdGVtLCBwcmlvcml0eSkge1xuICBpdGVtLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gIHJldHVybjtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gSW1wb3J0c1xuaW1wb3J0IGxvYWREZWZhdWx0SFRNTCBmcm9tIFwiLi91dGlsaXRpZXNcIjtcbmltcG9ydCBQcm9qZWN0IGZyb20gXCIuL2NsYXNzZXNcIjtcbmltcG9ydCB7IExpc3QgfSBmcm9tIFwiLi9jbGFzc2VzXCI7XG5pbXBvcnQgeyBUb0RvIH0gZnJvbSBcIi4vY2xhc3Nlc1wiO1xuaW1wb3J0IHsgc2V0UHJpb3JpdHkgfSBmcm9tIFwiLi91dGlsaXRpZXNcIjtcblxuLy8gR2xvYmFsc1xuY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudFwiKTtcblxuY29udGVudERpdi5hcHBlbmRDaGlsZChcbiAgbG9hZERlZmF1bHRIVE1MKClcbiAgICAuc2V0QXR0cmlidXRlcyh7IGNsYXNzOiBcInByb2plY3RcIiwgaWQ6IFwiZGVmYXVsdFwiIH0pXG4gICAgLmJ1aWxkRWxlbWVudCgpXG4pO1xuXG4vL3Rlc3Rpbmcgc2hpdGU6XG5cbmNvbnN0IGRlZmF1bHRQcm9qZWN0ID0gbmV3IFByb2plY3QoXCJkZWZhdWx0XCIpO1xuXG5jb25zdCBteUxpc3QgPSBuZXcgTGlzdChcImZpcnN0IGxpc3RcIik7XG5jb25zdCBteUxpc3QyID0gbmV3IExpc3QoXCIybmQgbGlzdFwiKTtcblxuY29uc3QgdG9kb0l0ZW0gPSBuZXcgVG9EbyhcIndhdGVyIHRoZSBsYXduXCIpO1xuY29uc3QgdG9kbzIgPSBuZXcgVG9EbyhcIkVhdCBhIHdhdGVybWVsb25cIik7XG5cbm15TGlzdC5hcHBlbmRJdGVtVG9MaXN0QXJyYXkodG9kb0l0ZW0pO1xubXlMaXN0LmFwcGVuZEl0ZW1Ub0xpc3RBcnJheSh0b2RvMik7XG5cbmRlZmF1bHRQcm9qZWN0LmFwcGVuZExpc3QobXlMaXN0KTtcbmRlZmF1bHRQcm9qZWN0LmFwcGVuZExpc3QobXlMaXN0Mik7XG5cbi8vc29tZSBwcmlvcml0eSBidXR0b24gZ2V0cyBjbGlja2VkOlxuLy9ldmVudCBsaXN0ZW5lciA9PiBjbGljayB7IH1cbnNldFByaW9yaXR5KHRvZG9JdGVtLCAyKTtcblxuY29uc29sZS5sb2coZGVmYXVsdFByb2plY3QpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9