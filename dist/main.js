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
  constructor(name, id) {
    this.name = name;
    this.id = id;
    this.lists = [];
    // this.priority;
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

  buildVirtualBoi() {
    return this.lists.reduce(
      (virtualProject, list) => virtualProject.addChild(list.buildVirtualBoi()),
      new Element("div").setAttributes({
        class: "project",
        id: `Project-${this.id}`,
      })
    );
  }
}

class List {
  constructor(listName) {
    this.name = listName;
    this.listItems = [];
    this.priority;
  }

  buildVirtualBoi() {
    return this.listItems.reduce(
      (virtualUl, toDo) => virtualUl.addChild(toDo.buildVirtualBoi()),
      new Element("ul").setAttributes({
        id: this.name,
      })
    );
  }

  appendItemToListArray(item) {
    (0,_utilities__WEBPACK_IMPORTED_MODULE_0__.appendItemToArray)(item, this.listItems);
  }

  removeItemFromListArray(item) {
    (0,_utilities__WEBPACK_IMPORTED_MODULE_0__.removeItemFromArray)(item, this.listItems);
  }
}

class ToDo {
  constructor(name, priority, isCompleted) {
    this.name = name;
    this.priority = priority;
    this.isCompleted = isCompleted;
  }

  buildVirtualBoi() {
    const virtualBoi = new Element("li");
    virtualBoi
      .addChild(new Element("h1").setTextContent(this.name))
      .addChild(new Element("h2").setTextContent(`Priority: ${this.priority}`))
      .addChild(new Element("button").setTextContent("Set Priority"))
      .addChild(new Element("button").setTextContent("Mark Done"));

    return virtualBoi;
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

    // Append children? Append text?
    if (this.text === undefined) {
      for (const virtualBoi of this.children) {
        realBoi.appendChild(virtualBoi.buildElement());
      }
    } else {
      const realText = document.createTextNode(this.text);
      realBoi.appendChild(realText);
    }
    return realBoi;
  }

  setAttributes(object) {
    Object.assign(this.attributes, object);
    return this;
  }

  addChild(element) {
    this.text = undefined;
    this.children.push(element);

    return this;
  }

  setTextContent(string) {
    this.children = [];
    this.text = string;
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

// Create default project on load:
const defaultProject = new _classes__WEBPACK_IMPORTED_MODULE_1__["default"]("default", 1);

//testing shite:

const myList = new _classes__WEBPACK_IMPORTED_MODULE_1__.List("first list");
// const myList2 = new List("2nd list");

const toDoItem = new _classes__WEBPACK_IMPORTED_MODULE_1__.ToDo("water the lawn", 3, false);

const todo2 = new _classes__WEBPACK_IMPORTED_MODULE_1__.ToDo("Eat a watermelon", 2, true);

myList.appendItemToListArray(toDoItem);
myList.appendItemToListArray(todo2);

defaultProject.appendList(myList);

const buildDefault = defaultProject.buildVirtualBoi();
console.log(buildDefault);
contentDiv.appendChild(buildDefault.buildElement());
// defaultProject.appendList(myList2);

// defaultProject.buildChildren();

//some priority button gets clicked:
//event listener => click { }
// setPriority(toDoItem, 2);

// console.log(defaultProject);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBZ0Q7QUFDRTtBQUNMO0FBQzlCO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBSSw2REFBaUI7QUFDckI7QUFDQTs7QUFFQTtBQUNBLElBQUksK0RBQW1CO0FBQ3ZCOztBQUVBO0FBQ0EsSUFBSSwwREFBYztBQUNsQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLFFBQVE7QUFDL0IsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0EsSUFBSSw2REFBaUI7QUFDckI7O0FBRUE7QUFDQSxJQUFJLCtEQUFtQjtBQUN2QjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhEQUE4RCxjQUFjO0FBQzVFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1SG9DOztBQUVyQjtBQUNmLGdDQUFnQyw2Q0FBTzs7QUFFdkM7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7Ozs7Ozs7VUM5QkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUMwQztBQUNWO0FBQ0M7QUFDQTtBQUNTOztBQUUxQztBQUNBOztBQUVBO0FBQ0EsMkJBQTJCLGdEQUFPOztBQUVsQzs7QUFFQSxtQkFBbUIsMENBQUk7QUFDdkI7O0FBRUEscUJBQXFCLDBDQUFJOztBQUV6QixrQkFBa0IsMENBQUk7O0FBRXRCO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVwb3MvLi9zcmMvY2xhc3Nlcy5qcyIsIndlYnBhY2s6Ly9yZXBvcy8uL3NyYy91dGlsaXRpZXMuanMiLCJ3ZWJwYWNrOi8vcmVwb3Mvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVwb3Mvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3JlcG9zL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVwb3Mvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXBvcy8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhcHBlbmRJdGVtVG9BcnJheSB9IGZyb20gXCIuL3V0aWxpdGllc1wiO1xuaW1wb3J0IHsgcmVtb3ZlSXRlbUZyb21BcnJheSB9IGZyb20gXCIuL3V0aWxpdGllc1wiO1xuaW1wb3J0IHsgZWRpdEl0ZW1EZXRhaWwgfSBmcm9tIFwiLi91dGlsaXRpZXNcIjtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2plY3Qge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBpZCkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5pZCA9IGlkO1xuICAgIHRoaXMubGlzdHMgPSBbXTtcbiAgICAvLyB0aGlzLnByaW9yaXR5O1xuICB9XG5cbiAgYXBwZW5kTGlzdChsaXN0KSB7XG4gICAgYXBwZW5kSXRlbVRvQXJyYXkobGlzdCwgdGhpcy5saXN0cyk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgcmVtb3ZlTGlzdChsaXN0KSB7XG4gICAgcmVtb3ZlSXRlbUZyb21BcnJheShsaXN0LCB0aGlzLmxpc3RzKTtcbiAgfVxuXG4gIGVkaXREZXRhaWxzKGRldGFpbFR5cGUpIHtcbiAgICBlZGl0SXRlbURldGFpbCh0aGlzLCBkZXRhaWxUeXBlKTtcbiAgfVxuXG4gIGJ1aWxkVmlydHVhbEJvaSgpIHtcbiAgICByZXR1cm4gdGhpcy5saXN0cy5yZWR1Y2UoXG4gICAgICAodmlydHVhbFByb2plY3QsIGxpc3QpID0+IHZpcnR1YWxQcm9qZWN0LmFkZENoaWxkKGxpc3QuYnVpbGRWaXJ0dWFsQm9pKCkpLFxuICAgICAgbmV3IEVsZW1lbnQoXCJkaXZcIikuc2V0QXR0cmlidXRlcyh7XG4gICAgICAgIGNsYXNzOiBcInByb2plY3RcIixcbiAgICAgICAgaWQ6IGBQcm9qZWN0LSR7dGhpcy5pZH1gLFxuICAgICAgfSlcbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBMaXN0IHtcbiAgY29uc3RydWN0b3IobGlzdE5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBsaXN0TmFtZTtcbiAgICB0aGlzLmxpc3RJdGVtcyA9IFtdO1xuICAgIHRoaXMucHJpb3JpdHk7XG4gIH1cblxuICBidWlsZFZpcnR1YWxCb2koKSB7XG4gICAgcmV0dXJuIHRoaXMubGlzdEl0ZW1zLnJlZHVjZShcbiAgICAgICh2aXJ0dWFsVWwsIHRvRG8pID0+IHZpcnR1YWxVbC5hZGRDaGlsZCh0b0RvLmJ1aWxkVmlydHVhbEJvaSgpKSxcbiAgICAgIG5ldyBFbGVtZW50KFwidWxcIikuc2V0QXR0cmlidXRlcyh7XG4gICAgICAgIGlkOiB0aGlzLm5hbWUsXG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBhcHBlbmRJdGVtVG9MaXN0QXJyYXkoaXRlbSkge1xuICAgIGFwcGVuZEl0ZW1Ub0FycmF5KGl0ZW0sIHRoaXMubGlzdEl0ZW1zKTtcbiAgfVxuXG4gIHJlbW92ZUl0ZW1Gcm9tTGlzdEFycmF5KGl0ZW0pIHtcbiAgICByZW1vdmVJdGVtRnJvbUFycmF5KGl0ZW0sIHRoaXMubGlzdEl0ZW1zKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgVG9EbyB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIHByaW9yaXR5LCBpc0NvbXBsZXRlZCkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIHRoaXMuaXNDb21wbGV0ZWQgPSBpc0NvbXBsZXRlZDtcbiAgfVxuXG4gIGJ1aWxkVmlydHVhbEJvaSgpIHtcbiAgICBjb25zdCB2aXJ0dWFsQm9pID0gbmV3IEVsZW1lbnQoXCJsaVwiKTtcbiAgICB2aXJ0dWFsQm9pXG4gICAgICAuYWRkQ2hpbGQobmV3IEVsZW1lbnQoXCJoMVwiKS5zZXRUZXh0Q29udGVudCh0aGlzLm5hbWUpKVxuICAgICAgLmFkZENoaWxkKG5ldyBFbGVtZW50KFwiaDJcIikuc2V0VGV4dENvbnRlbnQoYFByaW9yaXR5OiAke3RoaXMucHJpb3JpdHl9YCkpXG4gICAgICAuYWRkQ2hpbGQobmV3IEVsZW1lbnQoXCJidXR0b25cIikuc2V0VGV4dENvbnRlbnQoXCJTZXQgUHJpb3JpdHlcIikpXG4gICAgICAuYWRkQ2hpbGQobmV3IEVsZW1lbnQoXCJidXR0b25cIikuc2V0VGV4dENvbnRlbnQoXCJNYXJrIERvbmVcIikpO1xuXG4gICAgcmV0dXJuIHZpcnR1YWxCb2k7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50VHlwZSkge1xuICAgIHRoaXMuZWxlbWVudFR5cGUgPSBlbGVtZW50VHlwZTtcbiAgICB0aGlzLmF0dHJpYnV0ZXMgPSB7fTtcbiAgICB0aGlzLmNoaWxkcmVuID0gW107XG4gIH1cblxuICBidWlsZEVsZW1lbnQoKSB7XG4gICAgLy8gQ3JlYXRlIGVsZW1lbnQgaW4gRE9NXG4gICAgY29uc3QgcmVhbEJvaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGhpcy5lbGVtZW50VHlwZSk7XG5cbiAgICAvLyBBZGQgYXR0cmlidXRlcyB0byBlbGVtZW50XG4gICAgZm9yIChjb25zdCBhdHRyaWJ1dGUgaW4gdGhpcy5hdHRyaWJ1dGVzKSB7XG4gICAgICByZWFsQm9pLnNldEF0dHJpYnV0ZShhdHRyaWJ1dGUsIHRoaXMuYXR0cmlidXRlc1thdHRyaWJ1dGVdKTtcbiAgICB9XG5cbiAgICAvLyBBcHBlbmQgY2hpbGRyZW4/IEFwcGVuZCB0ZXh0P1xuICAgIGlmICh0aGlzLnRleHQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgZm9yIChjb25zdCB2aXJ0dWFsQm9pIG9mIHRoaXMuY2hpbGRyZW4pIHtcbiAgICAgICAgcmVhbEJvaS5hcHBlbmRDaGlsZCh2aXJ0dWFsQm9pLmJ1aWxkRWxlbWVudCgpKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgcmVhbFRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh0aGlzLnRleHQpO1xuICAgICAgcmVhbEJvaS5hcHBlbmRDaGlsZChyZWFsVGV4dCk7XG4gICAgfVxuICAgIHJldHVybiByZWFsQm9pO1xuICB9XG5cbiAgc2V0QXR0cmlidXRlcyhvYmplY3QpIHtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMuYXR0cmlidXRlcywgb2JqZWN0KTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGFkZENoaWxkKGVsZW1lbnQpIHtcbiAgICB0aGlzLnRleHQgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5jaGlsZHJlbi5wdXNoKGVsZW1lbnQpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBzZXRUZXh0Q29udGVudChzdHJpbmcpIHtcbiAgICB0aGlzLmNoaWxkcmVuID0gW107XG4gICAgdGhpcy50ZXh0ID0gc3RyaW5nO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG59XG4iLCJpbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcIi4vY2xhc3Nlc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkRGVmYXVsdEhUTUwoKSB7XG4gIGNvbnN0IGRlZmF1bHRQcm9qZWN0RGl2ID0gbmV3IEVsZW1lbnQoXCJkaXZcIik7XG5cbiAgcmV0dXJuIGRlZmF1bHRQcm9qZWN0RGl2O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXBwZW5kSXRlbVRvQXJyYXkoaXRlbSwgYXJyYXkpIHtcbiAgYXJyYXkucHVzaChpdGVtKTtcbiAgcmV0dXJuO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlSXRlbUZyb21BcnJheShpdGVtLCBhcnJheSkge1xuICBsZXQgaW5kZXhUb1JlbW92ZSA9IGFycmF5LmluZGV4T2YoaXRlbSk7XG4gIGFycmF5LnNwbGljZShpbmRleFRvUmVtb3ZlLCAxKTtcbiAgLy8gICBjb25zb2xlLmxvZyhhcnJheSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlZGl0SXRlbURldGFpbChpdGVtLCBkZXRhaWwpIHtcbiAgLy9uYW1lXG4gIC8vIHByaW9yaXR5XG5cbiAgY29uc29sZS5sb2coaXRlbSk7XG4gIGNvbnNvbGUubG9nKGRldGFpbCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRQcmlvcml0eShpdGVtLCBwcmlvcml0eSkge1xuICBpdGVtLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gIHJldHVybjtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gSW1wb3J0c1xuaW1wb3J0IGxvYWREZWZhdWx0SFRNTCBmcm9tIFwiLi91dGlsaXRpZXNcIjtcbmltcG9ydCBQcm9qZWN0IGZyb20gXCIuL2NsYXNzZXNcIjtcbmltcG9ydCB7IExpc3QgfSBmcm9tIFwiLi9jbGFzc2VzXCI7XG5pbXBvcnQgeyBUb0RvIH0gZnJvbSBcIi4vY2xhc3Nlc1wiO1xuaW1wb3J0IHsgc2V0UHJpb3JpdHkgfSBmcm9tIFwiLi91dGlsaXRpZXNcIjtcblxuLy8gR2xvYmFsc1xuY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudFwiKTtcblxuLy8gQ3JlYXRlIGRlZmF1bHQgcHJvamVjdCBvbiBsb2FkOlxuY29uc3QgZGVmYXVsdFByb2plY3QgPSBuZXcgUHJvamVjdChcImRlZmF1bHRcIiwgMSk7XG5cbi8vdGVzdGluZyBzaGl0ZTpcblxuY29uc3QgbXlMaXN0ID0gbmV3IExpc3QoXCJmaXJzdCBsaXN0XCIpO1xuLy8gY29uc3QgbXlMaXN0MiA9IG5ldyBMaXN0KFwiMm5kIGxpc3RcIik7XG5cbmNvbnN0IHRvRG9JdGVtID0gbmV3IFRvRG8oXCJ3YXRlciB0aGUgbGF3blwiLCAzLCBmYWxzZSk7XG5cbmNvbnN0IHRvZG8yID0gbmV3IFRvRG8oXCJFYXQgYSB3YXRlcm1lbG9uXCIsIDIsIHRydWUpO1xuXG5teUxpc3QuYXBwZW5kSXRlbVRvTGlzdEFycmF5KHRvRG9JdGVtKTtcbm15TGlzdC5hcHBlbmRJdGVtVG9MaXN0QXJyYXkodG9kbzIpO1xuXG5kZWZhdWx0UHJvamVjdC5hcHBlbmRMaXN0KG15TGlzdCk7XG5cbmNvbnN0IGJ1aWxkRGVmYXVsdCA9IGRlZmF1bHRQcm9qZWN0LmJ1aWxkVmlydHVhbEJvaSgpO1xuY29uc29sZS5sb2coYnVpbGREZWZhdWx0KTtcbmNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoYnVpbGREZWZhdWx0LmJ1aWxkRWxlbWVudCgpKTtcbi8vIGRlZmF1bHRQcm9qZWN0LmFwcGVuZExpc3QobXlMaXN0Mik7XG5cbi8vIGRlZmF1bHRQcm9qZWN0LmJ1aWxkQ2hpbGRyZW4oKTtcblxuLy9zb21lIHByaW9yaXR5IGJ1dHRvbiBnZXRzIGNsaWNrZWQ6XG4vL2V2ZW50IGxpc3RlbmVyID0+IGNsaWNrIHsgfVxuLy8gc2V0UHJpb3JpdHkodG9Eb0l0ZW0sIDIpO1xuXG4vLyBjb25zb2xlLmxvZyhkZWZhdWx0UHJvamVjdCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=