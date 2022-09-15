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


class Project {
  constructor(name) {
    this.name = name;
    this.lists = [];
    this.priority;
  }

  appendList(list) {
    (0,_utilities__WEBPACK_IMPORTED_MODULE_0__["default"])(list, this.lists);
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
    (0,_utilities__WEBPACK_IMPORTED_MODULE_0__["default"])(item, this.listItems);
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


/***/ }),

/***/ "./src/utilities.js":
/*!**************************!*\
  !*** ./src/utilities.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ appendItemToArray),
/* harmony export */   "editItemDetail": () => (/* binding */ editItemDetail),
/* harmony export */   "removeItemFromArray": () => (/* binding */ removeItemFromArray)
/* harmony export */ });
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
  //

  console.log(item);
  console.log(detail);
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
const myList2 = new _classes__WEBPACK_IMPORTED_MODULE_0__.List("2nd list");
// console.log(myList);

const todoItem = new _classes__WEBPACK_IMPORTED_MODULE_0__.ToDo("water the lawn");
const todo2 = new _classes__WEBPACK_IMPORTED_MODULE_0__.ToDo("Eat a watermelon");

myList.appendItemToListArray(todoItem);
myList.appendItemToListArray(todo2);

defaultProject.appendList(myList);
defaultProject.appendList(myList2);
// console.log(defaultProject);

myList.removeItemFromListArray(todoItem);
defaultProject.removeList(myList);

// defaultProject.editDetails(defaultProject.name);
defaultProject.name = "new name";
console.log(defaultProject);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFxRTtBQUN4QjtBQUM5QjtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJLHNEQUFpQjtBQUNyQjtBQUNBOztBQUVBO0FBQ0EsSUFBSSwrREFBbUI7QUFDdkI7O0FBRUE7QUFDQSxJQUFJLDBEQUFjO0FBQ2xCO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBSSxzREFBaUI7QUFDckI7O0FBRUE7QUFDQSxJQUFJLCtEQUFtQjtBQUN2QjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvQ2U7QUFDZjtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7VUNsQkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05nQztBQUNDO0FBQ0E7O0FBRWpDLDJCQUEyQixnREFBTztBQUNsQzs7QUFFQSxtQkFBbUIsMENBQUk7QUFDdkIsb0JBQW9CLDBDQUFJO0FBQ3hCOztBQUVBLHFCQUFxQiwwQ0FBSTtBQUN6QixrQkFBa0IsMENBQUk7O0FBRXRCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVwb3MvLi9zcmMvY2xhc3Nlcy5qcyIsIndlYnBhY2s6Ly9yZXBvcy8uL3NyYy91dGlsaXRpZXMuanMiLCJ3ZWJwYWNrOi8vcmVwb3Mvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVwb3Mvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3JlcG9zL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVwb3Mvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXBvcy8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXBwZW5kSXRlbVRvQXJyYXksIHsgcmVtb3ZlSXRlbUZyb21BcnJheSB9IGZyb20gXCIuL3V0aWxpdGllc1wiO1xuaW1wb3J0IHsgZWRpdEl0ZW1EZXRhaWwgfSBmcm9tIFwiLi91dGlsaXRpZXNcIjtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2plY3Qge1xuICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmxpc3RzID0gW107XG4gICAgdGhpcy5wcmlvcml0eTtcbiAgfVxuXG4gIGFwcGVuZExpc3QobGlzdCkge1xuICAgIGFwcGVuZEl0ZW1Ub0FycmF5KGxpc3QsIHRoaXMubGlzdHMpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHJlbW92ZUxpc3QobGlzdCkge1xuICAgIHJlbW92ZUl0ZW1Gcm9tQXJyYXkobGlzdCwgdGhpcy5saXN0cyk7XG4gIH1cblxuICBlZGl0RGV0YWlscyhkZXRhaWxUeXBlKSB7XG4gICAgZWRpdEl0ZW1EZXRhaWwodGhpcywgZGV0YWlsVHlwZSk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIExpc3Qge1xuICBjb25zdHJ1Y3RvcihsaXN0TmFtZSkge1xuICAgIHRoaXMubmFtZSA9IGxpc3ROYW1lO1xuICAgIHRoaXMubGlzdEl0ZW1zID0gW107XG4gICAgdGhpcy5wcmlvcml0eTtcbiAgfVxuXG4gIGFwcGVuZEl0ZW1Ub0xpc3RBcnJheShpdGVtKSB7XG4gICAgYXBwZW5kSXRlbVRvQXJyYXkoaXRlbSwgdGhpcy5saXN0SXRlbXMpO1xuICB9XG5cbiAgcmVtb3ZlSXRlbUZyb21MaXN0QXJyYXkoaXRlbSkge1xuICAgIHJlbW92ZUl0ZW1Gcm9tQXJyYXkoaXRlbSwgdGhpcy5saXN0SXRlbXMpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBUb0RvIHtcbiAgY29uc3RydWN0b3IobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5wcmlvcml0eTtcbiAgICAvL3ByaW9yaXR5XG4gICAgLy9uYW1lXG4gICAgLy9cbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYXBwZW5kSXRlbVRvQXJyYXkoaXRlbSwgYXJyYXkpIHtcbiAgYXJyYXkucHVzaChpdGVtKTtcbiAgcmV0dXJuO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlSXRlbUZyb21BcnJheShpdGVtLCBhcnJheSkge1xuICBsZXQgaW5kZXhUb1JlbW92ZSA9IGFycmF5LmluZGV4T2YoaXRlbSk7XG4gIGFycmF5LnNwbGljZShpbmRleFRvUmVtb3ZlLCAxKTtcbiAgLy8gICBjb25zb2xlLmxvZyhhcnJheSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlZGl0SXRlbURldGFpbChpdGVtLCBkZXRhaWwpIHtcbiAgLy9uYW1lXG4gIC8vIHByaW9yaXR5XG4gIC8vXG5cbiAgY29uc29sZS5sb2coaXRlbSk7XG4gIGNvbnNvbGUubG9nKGRldGFpbCk7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBQcm9qZWN0IGZyb20gXCIuL2NsYXNzZXNcIjtcbmltcG9ydCB7IExpc3QgfSBmcm9tIFwiLi9jbGFzc2VzXCI7XG5pbXBvcnQgeyBUb0RvIH0gZnJvbSBcIi4vY2xhc3Nlc1wiO1xuXG5jb25zdCBkZWZhdWx0UHJvamVjdCA9IG5ldyBQcm9qZWN0KFwiZGVmYXVsdFwiKTtcbi8vIGNvbnNvbGUubG9nKGRlZmF1bHRQcm9qZWN0Lmxpc3QpO1xuXG5jb25zdCBteUxpc3QgPSBuZXcgTGlzdChcImZpcnN0IGxpc3RcIik7XG5jb25zdCBteUxpc3QyID0gbmV3IExpc3QoXCIybmQgbGlzdFwiKTtcbi8vIGNvbnNvbGUubG9nKG15TGlzdCk7XG5cbmNvbnN0IHRvZG9JdGVtID0gbmV3IFRvRG8oXCJ3YXRlciB0aGUgbGF3blwiKTtcbmNvbnN0IHRvZG8yID0gbmV3IFRvRG8oXCJFYXQgYSB3YXRlcm1lbG9uXCIpO1xuXG5teUxpc3QuYXBwZW5kSXRlbVRvTGlzdEFycmF5KHRvZG9JdGVtKTtcbm15TGlzdC5hcHBlbmRJdGVtVG9MaXN0QXJyYXkodG9kbzIpO1xuXG5kZWZhdWx0UHJvamVjdC5hcHBlbmRMaXN0KG15TGlzdCk7XG5kZWZhdWx0UHJvamVjdC5hcHBlbmRMaXN0KG15TGlzdDIpO1xuLy8gY29uc29sZS5sb2coZGVmYXVsdFByb2plY3QpO1xuXG5teUxpc3QucmVtb3ZlSXRlbUZyb21MaXN0QXJyYXkodG9kb0l0ZW0pO1xuZGVmYXVsdFByb2plY3QucmVtb3ZlTGlzdChteUxpc3QpO1xuXG4vLyBkZWZhdWx0UHJvamVjdC5lZGl0RGV0YWlscyhkZWZhdWx0UHJvamVjdC5uYW1lKTtcbmRlZmF1bHRQcm9qZWN0Lm5hbWUgPSBcIm5ldyBuYW1lXCI7XG5jb25zb2xlLmxvZyhkZWZhdWx0UHJvamVjdCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=