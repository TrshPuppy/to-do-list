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
/* harmony export */   "default": () => (/* binding */ loadHTLM),
/* harmony export */   "editItemDetail": () => (/* binding */ editItemDetail),
/* harmony export */   "removeItemFromArray": () => (/* binding */ removeItemFromArray),
/* harmony export */   "setPriority": () => (/* binding */ setPriority)
/* harmony export */ });
function loadHTLM() {
  console.log("hey u friken loaded u badass!");
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






(0,_utilities__WEBPACK_IMPORTED_MODULE_0__["default"])();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBZ0Q7QUFDRTtBQUNMO0FBQzlCO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUksNkRBQWlCO0FBQ3JCO0FBQ0E7O0FBRUE7QUFDQSxJQUFJLCtEQUFtQjtBQUN2Qjs7QUFFQTtBQUNBLElBQUksMERBQWM7QUFDbEI7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUksNkRBQWlCO0FBQ3JCOztBQUVBO0FBQ0EsSUFBSSwrREFBbUI7QUFDdkI7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3REZTtBQUNmO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBOzs7Ozs7O1VDMUJBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTm1DO0FBQ0g7QUFDQztBQUNBO0FBQ1M7O0FBRTFDLHNEQUFROztBQUVSOztBQUVBLDJCQUEyQixnREFBTzs7QUFFbEMsbUJBQW1CLDBDQUFJO0FBQ3ZCLG9CQUFvQiwwQ0FBSTs7QUFFeEIscUJBQXFCLDBDQUFJO0FBQ3pCLGtCQUFrQiwwQ0FBSTs7QUFFdEI7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1REFBVzs7QUFFWCIsInNvdXJjZXMiOlsid2VicGFjazovL3JlcG9zLy4vc3JjL2NsYXNzZXMuanMiLCJ3ZWJwYWNrOi8vcmVwb3MvLi9zcmMvdXRpbGl0aWVzLmpzIiwid2VicGFjazovL3JlcG9zL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3JlcG9zL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXBvcy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3JlcG9zL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVwb3MvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYXBwZW5kSXRlbVRvQXJyYXkgfSBmcm9tIFwiLi91dGlsaXRpZXNcIjtcbmltcG9ydCB7IHJlbW92ZUl0ZW1Gcm9tQXJyYXkgfSBmcm9tIFwiLi91dGlsaXRpZXNcIjtcbmltcG9ydCB7IGVkaXRJdGVtRGV0YWlsIH0gZnJvbSBcIi4vdXRpbGl0aWVzXCI7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9qZWN0IHtcbiAgY29uc3RydWN0b3IobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5saXN0cyA9IFtdO1xuICAgIHRoaXMucHJpb3JpdHk7XG4gIH1cblxuICBhcHBlbmRMaXN0KGxpc3QpIHtcbiAgICBhcHBlbmRJdGVtVG9BcnJheShsaXN0LCB0aGlzLmxpc3RzKTtcbiAgICByZXR1cm47XG4gIH1cblxuICByZW1vdmVMaXN0KGxpc3QpIHtcbiAgICByZW1vdmVJdGVtRnJvbUFycmF5KGxpc3QsIHRoaXMubGlzdHMpO1xuICB9XG5cbiAgZWRpdERldGFpbHMoZGV0YWlsVHlwZSkge1xuICAgIGVkaXRJdGVtRGV0YWlsKHRoaXMsIGRldGFpbFR5cGUpO1xuICB9XG59XG5leHBvcnQgY2xhc3MgTGlzdCB7XG4gIGNvbnN0cnVjdG9yKGxpc3ROYW1lKSB7XG4gICAgdGhpcy5uYW1lID0gbGlzdE5hbWU7XG4gICAgdGhpcy5saXN0SXRlbXMgPSBbXTtcbiAgICB0aGlzLnByaW9yaXR5O1xuICB9XG5cbiAgYXBwZW5kSXRlbVRvTGlzdEFycmF5KGl0ZW0pIHtcbiAgICBhcHBlbmRJdGVtVG9BcnJheShpdGVtLCB0aGlzLmxpc3RJdGVtcyk7XG4gIH1cblxuICByZW1vdmVJdGVtRnJvbUxpc3RBcnJheShpdGVtKSB7XG4gICAgcmVtb3ZlSXRlbUZyb21BcnJheShpdGVtLCB0aGlzLmxpc3RJdGVtcyk7XG4gIH1cbn1cbmV4cG9ydCBjbGFzcyBUb0RvIHtcbiAgY29uc3RydWN0b3IobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5wcmlvcml0eTtcbiAgICAvL3ByaW9yaXR5XG4gICAgLy9uYW1lXG4gICAgLy9cbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnRUeXBlKSB7XG4gICAgdGhpcy5lbGVtZW50VHlwZSA9IGVsZW1lbnRUeXBlO1xuICAgIHRoaXMuYXR0cmlidXRlcyA9IHt9O1xuICAgIHRoaXMuY2hpbGRyZW4gPSBbXTtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZEhUTE0oKSB7XG4gIGNvbnNvbGUubG9nKFwiaGV5IHUgZnJpa2VuIGxvYWRlZCB1IGJhZGFzcyFcIik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBlbmRJdGVtVG9BcnJheShpdGVtLCBhcnJheSkge1xuICBhcnJheS5wdXNoKGl0ZW0pO1xuICByZXR1cm47XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVJdGVtRnJvbUFycmF5KGl0ZW0sIGFycmF5KSB7XG4gIGxldCBpbmRleFRvUmVtb3ZlID0gYXJyYXkuaW5kZXhPZihpdGVtKTtcbiAgYXJyYXkuc3BsaWNlKGluZGV4VG9SZW1vdmUsIDEpO1xuICAvLyAgIGNvbnNvbGUubG9nKGFycmF5KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVkaXRJdGVtRGV0YWlsKGl0ZW0sIGRldGFpbCkge1xuICAvL25hbWVcbiAgLy8gcHJpb3JpdHlcblxuICBjb25zb2xlLmxvZyhpdGVtKTtcbiAgY29uc29sZS5sb2coZGV0YWlsKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldFByaW9yaXR5KGl0ZW0sIHByaW9yaXR5KSB7XG4gIGl0ZW0ucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgcmV0dXJuO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgbG9hZEhUTUwgZnJvbSBcIi4vdXRpbGl0aWVzXCI7XG5pbXBvcnQgUHJvamVjdCBmcm9tIFwiLi9jbGFzc2VzXCI7XG5pbXBvcnQgeyBMaXN0IH0gZnJvbSBcIi4vY2xhc3Nlc1wiO1xuaW1wb3J0IHsgVG9EbyB9IGZyb20gXCIuL2NsYXNzZXNcIjtcbmltcG9ydCB7IHNldFByaW9yaXR5IH0gZnJvbSBcIi4vdXRpbGl0aWVzXCI7XG5cbmxvYWRIVE1MKCk7XG5cbi8vdGVzdGluZyBzaGl0ZTpcblxuY29uc3QgZGVmYXVsdFByb2plY3QgPSBuZXcgUHJvamVjdChcImRlZmF1bHRcIik7XG5cbmNvbnN0IG15TGlzdCA9IG5ldyBMaXN0KFwiZmlyc3QgbGlzdFwiKTtcbmNvbnN0IG15TGlzdDIgPSBuZXcgTGlzdChcIjJuZCBsaXN0XCIpO1xuXG5jb25zdCB0b2RvSXRlbSA9IG5ldyBUb0RvKFwid2F0ZXIgdGhlIGxhd25cIik7XG5jb25zdCB0b2RvMiA9IG5ldyBUb0RvKFwiRWF0IGEgd2F0ZXJtZWxvblwiKTtcblxubXlMaXN0LmFwcGVuZEl0ZW1Ub0xpc3RBcnJheSh0b2RvSXRlbSk7XG5teUxpc3QuYXBwZW5kSXRlbVRvTGlzdEFycmF5KHRvZG8yKTtcblxuZGVmYXVsdFByb2plY3QuYXBwZW5kTGlzdChteUxpc3QpO1xuZGVmYXVsdFByb2plY3QuYXBwZW5kTGlzdChteUxpc3QyKTtcblxuLy9zb21lIHByaW9yaXR5IGJ1dHRvbiBnZXRzIGNsaWNrZWQ6XG4vL2V2ZW50IGxpc3RlbmVyID0+IGNsaWNrIHsgfVxuc2V0UHJpb3JpdHkodG9kb0l0ZW0sIDIpO1xuXG5jb25zb2xlLmxvZyhkZWZhdWx0UHJvamVjdCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=