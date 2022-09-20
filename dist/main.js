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

  buildIntoHTML() {
    const thisProjectElement = new Element("div").setAttributes({
      class: "project",
      id: `${this.name}`,
    });

    return thisProjectElement;
  }

  buildChildren() {
    for (const list of this.lists) {
      list.buildListIntoElement().buildElement();
    }
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

  buildListIntoElement() {
    const thisListElement = new Element("ul").setAttributes({
      class: `${this.name}`,
    });
    return thisListElement;
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
    const realBoi = document.createElement(this.elementType);

    // Add attributes to element
    for (const attribute in this.attributes) {
      realBoi.setAttribute(attribute, this.attributes[attribute]);
    }

    // Append children?
    for (const virtualBoi of this.children) {
      // append real children to the real DOM element
      realBoi.appendChild(virtualBoi.buildElement());
    }
    return realBoi;
  }

  setAttributes(object) {
    Object.assign(this.attributes, object);
    return this;
  }

  addChild(element) {
    this.children.push(element);
  }

  buildElementChildren() {}
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

// Create default project on load:
const defaultProject = new _classes__WEBPACK_IMPORTED_MODULE_1__["default"]("default");
contentDiv.appendChild(defaultProject.buildIntoHTML().buildElement());

//testing shite:

const myList = new _classes__WEBPACK_IMPORTED_MODULE_1__.List("first list");
// const myList2 = new List("2nd list");

const todoItem = new _classes__WEBPACK_IMPORTED_MODULE_1__.ToDo("water the lawn");
const todo2 = new _classes__WEBPACK_IMPORTED_MODULE_1__.ToDo("Eat a watermelon");

myList.appendItemToListArray(todoItem);
myList.appendItemToListArray(todo2);

defaultProject.appendList(myList);

// defaultProject.appendList(myList2);

// defaultProject.buildChildren();

//some priority button gets clicked:
//event listener => click { }
(0,_utilities__WEBPACK_IMPORTED_MODULE_0__.setPriority)(todoItem, 2);

console.log(defaultProject);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBZ0Q7QUFDRTtBQUNMO0FBQzlCO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUksNkRBQWlCO0FBQ3JCO0FBQ0E7O0FBRUE7QUFDQSxJQUFJLCtEQUFtQjtBQUN2Qjs7QUFFQTtBQUNBLElBQUksMERBQWM7QUFDbEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYSxVQUFVO0FBQ3ZCLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBSSw2REFBaUI7QUFDckI7O0FBRUE7QUFDQSxJQUFJLCtEQUFtQjtBQUN2Qjs7QUFFQTtBQUNBO0FBQ0EsZ0JBQWdCLFVBQVU7QUFDMUIsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pHb0M7O0FBRXJCO0FBQ2YsZ0NBQWdDLDZDQUFPOztBQUV2QztBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTs7Ozs7OztVQzlCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ05BO0FBQzBDO0FBQ1Y7QUFDQztBQUNBO0FBQ1M7O0FBRTFDO0FBQ0E7O0FBRUE7QUFDQSwyQkFBMkIsZ0RBQU87QUFDbEM7O0FBRUE7O0FBRUEsbUJBQW1CLDBDQUFJO0FBQ3ZCOztBQUVBLHFCQUFxQiwwQ0FBSTtBQUN6QixrQkFBa0IsMENBQUk7O0FBRXRCO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLHVEQUFXOztBQUVYIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVwb3MvLi9zcmMvY2xhc3Nlcy5qcyIsIndlYnBhY2s6Ly9yZXBvcy8uL3NyYy91dGlsaXRpZXMuanMiLCJ3ZWJwYWNrOi8vcmVwb3Mvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVwb3Mvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3JlcG9zL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVwb3Mvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXBvcy8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhcHBlbmRJdGVtVG9BcnJheSB9IGZyb20gXCIuL3V0aWxpdGllc1wiO1xuaW1wb3J0IHsgcmVtb3ZlSXRlbUZyb21BcnJheSB9IGZyb20gXCIuL3V0aWxpdGllc1wiO1xuaW1wb3J0IHsgZWRpdEl0ZW1EZXRhaWwgfSBmcm9tIFwiLi91dGlsaXRpZXNcIjtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2plY3Qge1xuICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmxpc3RzID0gW107XG4gICAgdGhpcy5wcmlvcml0eTtcbiAgfVxuXG4gIGFwcGVuZExpc3QobGlzdCkge1xuICAgIGFwcGVuZEl0ZW1Ub0FycmF5KGxpc3QsIHRoaXMubGlzdHMpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHJlbW92ZUxpc3QobGlzdCkge1xuICAgIHJlbW92ZUl0ZW1Gcm9tQXJyYXkobGlzdCwgdGhpcy5saXN0cyk7XG4gIH1cblxuICBlZGl0RGV0YWlscyhkZXRhaWxUeXBlKSB7XG4gICAgZWRpdEl0ZW1EZXRhaWwodGhpcywgZGV0YWlsVHlwZSk7XG4gIH1cblxuICBidWlsZEludG9IVE1MKCkge1xuICAgIGNvbnN0IHRoaXNQcm9qZWN0RWxlbWVudCA9IG5ldyBFbGVtZW50KFwiZGl2XCIpLnNldEF0dHJpYnV0ZXMoe1xuICAgICAgY2xhc3M6IFwicHJvamVjdFwiLFxuICAgICAgaWQ6IGAke3RoaXMubmFtZX1gLFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRoaXNQcm9qZWN0RWxlbWVudDtcbiAgfVxuXG4gIGJ1aWxkQ2hpbGRyZW4oKSB7XG4gICAgZm9yIChjb25zdCBsaXN0IG9mIHRoaXMubGlzdHMpIHtcbiAgICAgIGxpc3QuYnVpbGRMaXN0SW50b0VsZW1lbnQoKS5idWlsZEVsZW1lbnQoKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIExpc3Qge1xuICBjb25zdHJ1Y3RvcihsaXN0TmFtZSkge1xuICAgIHRoaXMubmFtZSA9IGxpc3ROYW1lO1xuICAgIHRoaXMubGlzdEl0ZW1zID0gW107XG4gICAgdGhpcy5wcmlvcml0eTtcbiAgfVxuXG4gIGFwcGVuZEl0ZW1Ub0xpc3RBcnJheShpdGVtKSB7XG4gICAgYXBwZW5kSXRlbVRvQXJyYXkoaXRlbSwgdGhpcy5saXN0SXRlbXMpO1xuICB9XG5cbiAgcmVtb3ZlSXRlbUZyb21MaXN0QXJyYXkoaXRlbSkge1xuICAgIHJlbW92ZUl0ZW1Gcm9tQXJyYXkoaXRlbSwgdGhpcy5saXN0SXRlbXMpO1xuICB9XG5cbiAgYnVpbGRMaXN0SW50b0VsZW1lbnQoKSB7XG4gICAgY29uc3QgdGhpc0xpc3RFbGVtZW50ID0gbmV3IEVsZW1lbnQoXCJ1bFwiKS5zZXRBdHRyaWJ1dGVzKHtcbiAgICAgIGNsYXNzOiBgJHt0aGlzLm5hbWV9YCxcbiAgICB9KTtcbiAgICByZXR1cm4gdGhpc0xpc3RFbGVtZW50O1xuICB9XG59XG5leHBvcnQgY2xhc3MgVG9EbyB7XG4gIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMucHJpb3JpdHk7XG4gICAgLy9wcmlvcml0eVxuICAgIC8vbmFtZVxuICAgIC8vXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50VHlwZSkge1xuICAgIHRoaXMuZWxlbWVudFR5cGUgPSBlbGVtZW50VHlwZTtcbiAgICB0aGlzLmF0dHJpYnV0ZXMgPSB7fTtcbiAgICB0aGlzLmNoaWxkcmVuID0gW107XG4gIH1cblxuICBidWlsZEVsZW1lbnQoKSB7XG4gICAgLy8gQ3JlYXRlIGVsZW1lbnQgaW4gRE9NXG4gICAgY29uc3QgcmVhbEJvaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGhpcy5lbGVtZW50VHlwZSk7XG5cbiAgICAvLyBBZGQgYXR0cmlidXRlcyB0byBlbGVtZW50XG4gICAgZm9yIChjb25zdCBhdHRyaWJ1dGUgaW4gdGhpcy5hdHRyaWJ1dGVzKSB7XG4gICAgICByZWFsQm9pLnNldEF0dHJpYnV0ZShhdHRyaWJ1dGUsIHRoaXMuYXR0cmlidXRlc1thdHRyaWJ1dGVdKTtcbiAgICB9XG5cbiAgICAvLyBBcHBlbmQgY2hpbGRyZW4/XG4gICAgZm9yIChjb25zdCB2aXJ0dWFsQm9pIG9mIHRoaXMuY2hpbGRyZW4pIHtcbiAgICAgIC8vIGFwcGVuZCByZWFsIGNoaWxkcmVuIHRvIHRoZSByZWFsIERPTSBlbGVtZW50XG4gICAgICByZWFsQm9pLmFwcGVuZENoaWxkKHZpcnR1YWxCb2kuYnVpbGRFbGVtZW50KCkpO1xuICAgIH1cbiAgICByZXR1cm4gcmVhbEJvaTtcbiAgfVxuXG4gIHNldEF0dHJpYnV0ZXMob2JqZWN0KSB7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLmF0dHJpYnV0ZXMsIG9iamVjdCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBhZGRDaGlsZChlbGVtZW50KSB7XG4gICAgdGhpcy5jaGlsZHJlbi5wdXNoKGVsZW1lbnQpO1xuICB9XG5cbiAgYnVpbGRFbGVtZW50Q2hpbGRyZW4oKSB7fVxufVxuIiwiaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCIuL2NsYXNzZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZERlZmF1bHRIVE1MKCkge1xuICBjb25zdCBkZWZhdWx0UHJvamVjdERpdiA9IG5ldyBFbGVtZW50KFwiZGl2XCIpO1xuXG4gIHJldHVybiBkZWZhdWx0UHJvamVjdERpdjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFwcGVuZEl0ZW1Ub0FycmF5KGl0ZW0sIGFycmF5KSB7XG4gIGFycmF5LnB1c2goaXRlbSk7XG4gIHJldHVybjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUl0ZW1Gcm9tQXJyYXkoaXRlbSwgYXJyYXkpIHtcbiAgbGV0IGluZGV4VG9SZW1vdmUgPSBhcnJheS5pbmRleE9mKGl0ZW0pO1xuICBhcnJheS5zcGxpY2UoaW5kZXhUb1JlbW92ZSwgMSk7XG4gIC8vICAgY29uc29sZS5sb2coYXJyYXkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZWRpdEl0ZW1EZXRhaWwoaXRlbSwgZGV0YWlsKSB7XG4gIC8vbmFtZVxuICAvLyBwcmlvcml0eVxuXG4gIGNvbnNvbGUubG9nKGl0ZW0pO1xuICBjb25zb2xlLmxvZyhkZXRhaWwpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0UHJpb3JpdHkoaXRlbSwgcHJpb3JpdHkpIHtcbiAgaXRlbS5wcmlvcml0eSA9IHByaW9yaXR5O1xuICByZXR1cm47XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIEltcG9ydHNcbmltcG9ydCBsb2FkRGVmYXVsdEhUTUwgZnJvbSBcIi4vdXRpbGl0aWVzXCI7XG5pbXBvcnQgUHJvamVjdCBmcm9tIFwiLi9jbGFzc2VzXCI7XG5pbXBvcnQgeyBMaXN0IH0gZnJvbSBcIi4vY2xhc3Nlc1wiO1xuaW1wb3J0IHsgVG9EbyB9IGZyb20gXCIuL2NsYXNzZXNcIjtcbmltcG9ydCB7IHNldFByaW9yaXR5IH0gZnJvbSBcIi4vdXRpbGl0aWVzXCI7XG5cbi8vIEdsb2JhbHNcbmNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnRcIik7XG5cbi8vIENyZWF0ZSBkZWZhdWx0IHByb2plY3Qgb24gbG9hZDpcbmNvbnN0IGRlZmF1bHRQcm9qZWN0ID0gbmV3IFByb2plY3QoXCJkZWZhdWx0XCIpO1xuY29udGVudERpdi5hcHBlbmRDaGlsZChkZWZhdWx0UHJvamVjdC5idWlsZEludG9IVE1MKCkuYnVpbGRFbGVtZW50KCkpO1xuXG4vL3Rlc3Rpbmcgc2hpdGU6XG5cbmNvbnN0IG15TGlzdCA9IG5ldyBMaXN0KFwiZmlyc3QgbGlzdFwiKTtcbi8vIGNvbnN0IG15TGlzdDIgPSBuZXcgTGlzdChcIjJuZCBsaXN0XCIpO1xuXG5jb25zdCB0b2RvSXRlbSA9IG5ldyBUb0RvKFwid2F0ZXIgdGhlIGxhd25cIik7XG5jb25zdCB0b2RvMiA9IG5ldyBUb0RvKFwiRWF0IGEgd2F0ZXJtZWxvblwiKTtcblxubXlMaXN0LmFwcGVuZEl0ZW1Ub0xpc3RBcnJheSh0b2RvSXRlbSk7XG5teUxpc3QuYXBwZW5kSXRlbVRvTGlzdEFycmF5KHRvZG8yKTtcblxuZGVmYXVsdFByb2plY3QuYXBwZW5kTGlzdChteUxpc3QpO1xuXG4vLyBkZWZhdWx0UHJvamVjdC5hcHBlbmRMaXN0KG15TGlzdDIpO1xuXG4vLyBkZWZhdWx0UHJvamVjdC5idWlsZENoaWxkcmVuKCk7XG5cbi8vc29tZSBwcmlvcml0eSBidXR0b24gZ2V0cyBjbGlja2VkOlxuLy9ldmVudCBsaXN0ZW5lciA9PiBjbGljayB7IH1cbnNldFByaW9yaXR5KHRvZG9JdGVtLCAyKTtcblxuY29uc29sZS5sb2coZGVmYXVsdFByb2plY3QpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9