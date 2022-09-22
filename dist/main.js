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
      new Element("ul")
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
      .addChild(new Element("h1").setTextContent("this.name"))
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBZ0Q7QUFDRTtBQUNMO0FBQzlCO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBSSw2REFBaUI7QUFDckI7QUFDQTs7QUFFQTtBQUNBLElBQUksK0RBQW1CO0FBQ3ZCOztBQUVBO0FBQ0EsSUFBSSwwREFBYztBQUNsQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLFFBQVE7QUFDL0IsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBSSw2REFBaUI7QUFDckI7O0FBRUE7QUFDQSxJQUFJLCtEQUFtQjtBQUN2QjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhEQUE4RCxjQUFjO0FBQzVFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxSG9DOztBQUVyQjtBQUNmLGdDQUFnQyw2Q0FBTzs7QUFFdkM7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7Ozs7Ozs7VUM5QkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUMwQztBQUNWO0FBQ0M7QUFDQTtBQUNTOztBQUUxQztBQUNBOztBQUVBO0FBQ0EsMkJBQTJCLGdEQUFPOztBQUVsQzs7QUFFQSxtQkFBbUIsMENBQUk7QUFDdkI7O0FBRUEscUJBQXFCLDBDQUFJOztBQUV6QixrQkFBa0IsMENBQUk7O0FBRXRCO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVwb3MvLi9zcmMvY2xhc3Nlcy5qcyIsIndlYnBhY2s6Ly9yZXBvcy8uL3NyYy91dGlsaXRpZXMuanMiLCJ3ZWJwYWNrOi8vcmVwb3Mvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVwb3Mvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3JlcG9zL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVwb3Mvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXBvcy8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhcHBlbmRJdGVtVG9BcnJheSB9IGZyb20gXCIuL3V0aWxpdGllc1wiO1xuaW1wb3J0IHsgcmVtb3ZlSXRlbUZyb21BcnJheSB9IGZyb20gXCIuL3V0aWxpdGllc1wiO1xuaW1wb3J0IHsgZWRpdEl0ZW1EZXRhaWwgfSBmcm9tIFwiLi91dGlsaXRpZXNcIjtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2plY3Qge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBpZCkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5pZCA9IGlkO1xuICAgIHRoaXMubGlzdHMgPSBbXTtcbiAgICAvLyB0aGlzLnByaW9yaXR5O1xuICB9XG5cbiAgYXBwZW5kTGlzdChsaXN0KSB7XG4gICAgYXBwZW5kSXRlbVRvQXJyYXkobGlzdCwgdGhpcy5saXN0cyk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgcmVtb3ZlTGlzdChsaXN0KSB7XG4gICAgcmVtb3ZlSXRlbUZyb21BcnJheShsaXN0LCB0aGlzLmxpc3RzKTtcbiAgfVxuXG4gIGVkaXREZXRhaWxzKGRldGFpbFR5cGUpIHtcbiAgICBlZGl0SXRlbURldGFpbCh0aGlzLCBkZXRhaWxUeXBlKTtcbiAgfVxuXG4gIGJ1aWxkVmlydHVhbEJvaSgpIHtcbiAgICByZXR1cm4gdGhpcy5saXN0cy5yZWR1Y2UoXG4gICAgICAodmlydHVhbFByb2plY3QsIGxpc3QpID0+IHZpcnR1YWxQcm9qZWN0LmFkZENoaWxkKGxpc3QuYnVpbGRWaXJ0dWFsQm9pKCkpLFxuICAgICAgbmV3IEVsZW1lbnQoXCJkaXZcIikuc2V0QXR0cmlidXRlcyh7XG4gICAgICAgIGNsYXNzOiBcInByb2plY3RcIixcbiAgICAgICAgaWQ6IGBQcm9qZWN0LSR7dGhpcy5pZH1gLFxuICAgICAgfSlcbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBMaXN0IHtcbiAgY29uc3RydWN0b3IobGlzdE5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBsaXN0TmFtZTtcbiAgICB0aGlzLmxpc3RJdGVtcyA9IFtdO1xuICAgIHRoaXMucHJpb3JpdHk7XG4gIH1cblxuICBidWlsZFZpcnR1YWxCb2koKSB7XG4gICAgcmV0dXJuIHRoaXMubGlzdEl0ZW1zLnJlZHVjZShcbiAgICAgICh2aXJ0dWFsVWwsIHRvRG8pID0+IHZpcnR1YWxVbC5hZGRDaGlsZCh0b0RvLmJ1aWxkVmlydHVhbEJvaSgpKSxcbiAgICAgIG5ldyBFbGVtZW50KFwidWxcIilcbiAgICApO1xuICB9XG5cbiAgYXBwZW5kSXRlbVRvTGlzdEFycmF5KGl0ZW0pIHtcbiAgICBhcHBlbmRJdGVtVG9BcnJheShpdGVtLCB0aGlzLmxpc3RJdGVtcyk7XG4gIH1cblxuICByZW1vdmVJdGVtRnJvbUxpc3RBcnJheShpdGVtKSB7XG4gICAgcmVtb3ZlSXRlbUZyb21BcnJheShpdGVtLCB0aGlzLmxpc3RJdGVtcyk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFRvRG8ge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBwcmlvcml0eSwgaXNDb21wbGV0ZWQpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICB0aGlzLmlzQ29tcGxldGVkID0gaXNDb21wbGV0ZWQ7XG4gIH1cblxuICBidWlsZFZpcnR1YWxCb2koKSB7XG4gICAgY29uc3QgdmlydHVhbEJvaSA9IG5ldyBFbGVtZW50KFwibGlcIik7XG4gICAgdmlydHVhbEJvaVxuICAgICAgLmFkZENoaWxkKG5ldyBFbGVtZW50KFwiaDFcIikuc2V0VGV4dENvbnRlbnQoXCJ0aGlzLm5hbWVcIikpXG4gICAgICAuYWRkQ2hpbGQobmV3IEVsZW1lbnQoXCJoMlwiKS5zZXRUZXh0Q29udGVudChgUHJpb3JpdHk6ICR7dGhpcy5wcmlvcml0eX1gKSlcbiAgICAgIC5hZGRDaGlsZChuZXcgRWxlbWVudChcImJ1dHRvblwiKS5zZXRUZXh0Q29udGVudChcIlNldCBQcmlvcml0eVwiKSlcbiAgICAgIC5hZGRDaGlsZChuZXcgRWxlbWVudChcImJ1dHRvblwiKS5zZXRUZXh0Q29udGVudChcIk1hcmsgRG9uZVwiKSk7XG5cbiAgICByZXR1cm4gdmlydHVhbEJvaTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnRUeXBlKSB7XG4gICAgdGhpcy5lbGVtZW50VHlwZSA9IGVsZW1lbnRUeXBlO1xuICAgIHRoaXMuYXR0cmlidXRlcyA9IHt9O1xuICAgIHRoaXMuY2hpbGRyZW4gPSBbXTtcbiAgfVxuXG4gIGJ1aWxkRWxlbWVudCgpIHtcbiAgICAvLyBDcmVhdGUgZWxlbWVudCBpbiBET01cbiAgICBjb25zdCByZWFsQm9pID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0aGlzLmVsZW1lbnRUeXBlKTtcblxuICAgIC8vIEFkZCBhdHRyaWJ1dGVzIHRvIGVsZW1lbnRcbiAgICBmb3IgKGNvbnN0IGF0dHJpYnV0ZSBpbiB0aGlzLmF0dHJpYnV0ZXMpIHtcbiAgICAgIHJlYWxCb2kuc2V0QXR0cmlidXRlKGF0dHJpYnV0ZSwgdGhpcy5hdHRyaWJ1dGVzW2F0dHJpYnV0ZV0pO1xuICAgIH1cblxuICAgIC8vIEFwcGVuZCBjaGlsZHJlbj8gQXBwZW5kIHRleHQ/XG4gICAgaWYgKHRoaXMudGV4dCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBmb3IgKGNvbnN0IHZpcnR1YWxCb2kgb2YgdGhpcy5jaGlsZHJlbikge1xuICAgICAgICByZWFsQm9pLmFwcGVuZENoaWxkKHZpcnR1YWxCb2kuYnVpbGRFbGVtZW50KCkpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCByZWFsVGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHRoaXMudGV4dCk7XG4gICAgICByZWFsQm9pLmFwcGVuZENoaWxkKHJlYWxUZXh0KTtcbiAgICB9XG4gICAgcmV0dXJuIHJlYWxCb2k7XG4gIH1cblxuICBzZXRBdHRyaWJ1dGVzKG9iamVjdCkge1xuICAgIE9iamVjdC5hc3NpZ24odGhpcy5hdHRyaWJ1dGVzLCBvYmplY3QpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgYWRkQ2hpbGQoZWxlbWVudCkge1xuICAgIHRoaXMudGV4dCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmNoaWxkcmVuLnB1c2goZWxlbWVudCk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHNldFRleHRDb250ZW50KHN0cmluZykge1xuICAgIHRoaXMuY2hpbGRyZW4gPSBbXTtcbiAgICB0aGlzLnRleHQgPSBzdHJpbmc7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn1cbiIsImltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiLi9jbGFzc2VzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWREZWZhdWx0SFRNTCgpIHtcbiAgY29uc3QgZGVmYXVsdFByb2plY3REaXYgPSBuZXcgRWxlbWVudChcImRpdlwiKTtcblxuICByZXR1cm4gZGVmYXVsdFByb2plY3REaXY7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBlbmRJdGVtVG9BcnJheShpdGVtLCBhcnJheSkge1xuICBhcnJheS5wdXNoKGl0ZW0pO1xuICByZXR1cm47XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVJdGVtRnJvbUFycmF5KGl0ZW0sIGFycmF5KSB7XG4gIGxldCBpbmRleFRvUmVtb3ZlID0gYXJyYXkuaW5kZXhPZihpdGVtKTtcbiAgYXJyYXkuc3BsaWNlKGluZGV4VG9SZW1vdmUsIDEpO1xuICAvLyAgIGNvbnNvbGUubG9nKGFycmF5KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVkaXRJdGVtRGV0YWlsKGl0ZW0sIGRldGFpbCkge1xuICAvL25hbWVcbiAgLy8gcHJpb3JpdHlcblxuICBjb25zb2xlLmxvZyhpdGVtKTtcbiAgY29uc29sZS5sb2coZGV0YWlsKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldFByaW9yaXR5KGl0ZW0sIHByaW9yaXR5KSB7XG4gIGl0ZW0ucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgcmV0dXJuO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBJbXBvcnRzXG5pbXBvcnQgbG9hZERlZmF1bHRIVE1MIGZyb20gXCIuL3V0aWxpdGllc1wiO1xuaW1wb3J0IFByb2plY3QgZnJvbSBcIi4vY2xhc3Nlc1wiO1xuaW1wb3J0IHsgTGlzdCB9IGZyb20gXCIuL2NsYXNzZXNcIjtcbmltcG9ydCB7IFRvRG8gfSBmcm9tIFwiLi9jbGFzc2VzXCI7XG5pbXBvcnQgeyBzZXRQcmlvcml0eSB9IGZyb20gXCIuL3V0aWxpdGllc1wiO1xuXG4vLyBHbG9iYWxzXG5jb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50XCIpO1xuXG4vLyBDcmVhdGUgZGVmYXVsdCBwcm9qZWN0IG9uIGxvYWQ6XG5jb25zdCBkZWZhdWx0UHJvamVjdCA9IG5ldyBQcm9qZWN0KFwiZGVmYXVsdFwiLCAxKTtcblxuLy90ZXN0aW5nIHNoaXRlOlxuXG5jb25zdCBteUxpc3QgPSBuZXcgTGlzdChcImZpcnN0IGxpc3RcIik7XG4vLyBjb25zdCBteUxpc3QyID0gbmV3IExpc3QoXCIybmQgbGlzdFwiKTtcblxuY29uc3QgdG9Eb0l0ZW0gPSBuZXcgVG9EbyhcIndhdGVyIHRoZSBsYXduXCIsIDMsIGZhbHNlKTtcblxuY29uc3QgdG9kbzIgPSBuZXcgVG9EbyhcIkVhdCBhIHdhdGVybWVsb25cIiwgMiwgdHJ1ZSk7XG5cbm15TGlzdC5hcHBlbmRJdGVtVG9MaXN0QXJyYXkodG9Eb0l0ZW0pO1xubXlMaXN0LmFwcGVuZEl0ZW1Ub0xpc3RBcnJheSh0b2RvMik7XG5cbmRlZmF1bHRQcm9qZWN0LmFwcGVuZExpc3QobXlMaXN0KTtcblxuY29uc3QgYnVpbGREZWZhdWx0ID0gZGVmYXVsdFByb2plY3QuYnVpbGRWaXJ0dWFsQm9pKCk7XG5jb25zb2xlLmxvZyhidWlsZERlZmF1bHQpO1xuY29udGVudERpdi5hcHBlbmRDaGlsZChidWlsZERlZmF1bHQuYnVpbGRFbGVtZW50KCkpO1xuLy8gZGVmYXVsdFByb2plY3QuYXBwZW5kTGlzdChteUxpc3QyKTtcblxuLy8gZGVmYXVsdFByb2plY3QuYnVpbGRDaGlsZHJlbigpO1xuXG4vL3NvbWUgcHJpb3JpdHkgYnV0dG9uIGdldHMgY2xpY2tlZDpcbi8vZXZlbnQgbGlzdGVuZXIgPT4gY2xpY2sgeyB9XG4vLyBzZXRQcmlvcml0eSh0b0RvSXRlbSwgMik7XG5cbi8vIGNvbnNvbGUubG9nKGRlZmF1bHRQcm9qZWN0KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==