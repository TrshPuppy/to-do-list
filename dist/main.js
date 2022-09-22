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
  constructor(name, priority, isCompleted, date) {
    this.name = name;
    this.priority = priority;
    this.isCompleted = isCompleted;
    this.date = date;
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

/***/ "./src/today.js":
/*!**********************!*\
  !*** ./src/today.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadToday)
/* harmony export */ });
/* harmony import */ var _src_classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/classes */ "./src/classes.js");


function loadToday() {
  // const todayVirtualBoi = new Element('div').setAttributes({class: "date-tab", id: "today-tab"})
}

//Today HTML:
/*
.content
> today div
>>>> ul
>>>>>>li due today
*/


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
/* harmony import */ var _today__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./today */ "./src/today.js");
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utilities */ "./src/utilities.js");
/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./classes */ "./src/classes.js");
// Imports







// Globals
const contentDiv = document.querySelector(".content");

// Create default project on load:
const defaultProject = new _classes__WEBPACK_IMPORTED_MODULE_2__["default"]("default", 1);

//testing shite:

const myList = new _classes__WEBPACK_IMPORTED_MODULE_2__.List("first list");

const toDoItem = new _classes__WEBPACK_IMPORTED_MODULE_2__.ToDo(
  "water the lawn",
  3,
  false,
  new Date("4 december 2023")
);
console.log(toDoItem.date);

const todo2 = new _classes__WEBPACK_IMPORTED_MODULE_2__.ToDo("Eat a watermelon", 2, true);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBZ0Q7QUFDRTtBQUNMO0FBQzlCO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBSSw2REFBaUI7QUFDckI7QUFDQTs7QUFFQTtBQUNBLElBQUksK0RBQW1CO0FBQ3ZCOztBQUVBO0FBQ0EsSUFBSSwwREFBYztBQUNsQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLFFBQVE7QUFDL0IsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0EsSUFBSSw2REFBaUI7QUFDckI7O0FBRUE7QUFDQSxJQUFJLCtEQUFtQjtBQUN2QjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOERBQThELGNBQWM7QUFDNUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDN0h5Qzs7QUFFMUI7QUFDZiwrREFBK0QsbUNBQW1DO0FBQ2xHOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1pvQzs7QUFFckI7QUFDZixnQ0FBZ0MsNkNBQU87O0FBRXZDO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBOzs7Ozs7O1VDOUJBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ2dDO0FBQ1U7QUFDVjtBQUNDO0FBQ0E7QUFDUzs7QUFFMUM7QUFDQTs7QUFFQTtBQUNBLDJCQUEyQixnREFBTzs7QUFFbEM7O0FBRUEsbUJBQW1CLDBDQUFJOztBQUV2QixxQkFBcUIsMENBQUk7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGtCQUFrQiwwQ0FBSTs7QUFFdEI7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXBvcy8uL3NyYy9jbGFzc2VzLmpzIiwid2VicGFjazovL3JlcG9zLy4vc3JjL3RvZGF5LmpzIiwid2VicGFjazovL3JlcG9zLy4vc3JjL3V0aWxpdGllcy5qcyIsIndlYnBhY2s6Ly9yZXBvcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXBvcy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVwb3Mvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXBvcy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3JlcG9zLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFwcGVuZEl0ZW1Ub0FycmF5IH0gZnJvbSBcIi4vdXRpbGl0aWVzXCI7XG5pbXBvcnQgeyByZW1vdmVJdGVtRnJvbUFycmF5IH0gZnJvbSBcIi4vdXRpbGl0aWVzXCI7XG5pbXBvcnQgeyBlZGl0SXRlbURldGFpbCB9IGZyb20gXCIuL3V0aWxpdGllc1wiO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvamVjdCB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIGlkKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmlkID0gaWQ7XG4gICAgdGhpcy5saXN0cyA9IFtdO1xuICAgIC8vIHRoaXMucHJpb3JpdHk7XG4gIH1cblxuICBhcHBlbmRMaXN0KGxpc3QpIHtcbiAgICBhcHBlbmRJdGVtVG9BcnJheShsaXN0LCB0aGlzLmxpc3RzKTtcbiAgICByZXR1cm47XG4gIH1cblxuICByZW1vdmVMaXN0KGxpc3QpIHtcbiAgICByZW1vdmVJdGVtRnJvbUFycmF5KGxpc3QsIHRoaXMubGlzdHMpO1xuICB9XG5cbiAgZWRpdERldGFpbHMoZGV0YWlsVHlwZSkge1xuICAgIGVkaXRJdGVtRGV0YWlsKHRoaXMsIGRldGFpbFR5cGUpO1xuICB9XG5cbiAgYnVpbGRWaXJ0dWFsQm9pKCkge1xuICAgIHJldHVybiB0aGlzLmxpc3RzLnJlZHVjZShcbiAgICAgICh2aXJ0dWFsUHJvamVjdCwgbGlzdCkgPT4gdmlydHVhbFByb2plY3QuYWRkQ2hpbGQobGlzdC5idWlsZFZpcnR1YWxCb2koKSksXG4gICAgICBuZXcgRWxlbWVudChcImRpdlwiKS5zZXRBdHRyaWJ1dGVzKHtcbiAgICAgICAgY2xhc3M6IFwicHJvamVjdFwiLFxuICAgICAgICBpZDogYFByb2plY3QtJHt0aGlzLmlkfWAsXG4gICAgICB9KVxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIExpc3Qge1xuICBjb25zdHJ1Y3RvcihsaXN0TmFtZSkge1xuICAgIHRoaXMubmFtZSA9IGxpc3ROYW1lO1xuICAgIHRoaXMubGlzdEl0ZW1zID0gW107XG4gICAgdGhpcy5wcmlvcml0eTtcbiAgfVxuXG4gIGJ1aWxkVmlydHVhbEJvaSgpIHtcbiAgICByZXR1cm4gdGhpcy5saXN0SXRlbXMucmVkdWNlKFxuICAgICAgKHZpcnR1YWxVbCwgdG9EbykgPT4gdmlydHVhbFVsLmFkZENoaWxkKHRvRG8uYnVpbGRWaXJ0dWFsQm9pKCkpLFxuICAgICAgbmV3IEVsZW1lbnQoXCJ1bFwiKS5zZXRBdHRyaWJ1dGVzKHtcbiAgICAgICAgaWQ6IHRoaXMubmFtZSxcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIGFwcGVuZEl0ZW1Ub0xpc3RBcnJheShpdGVtKSB7XG4gICAgYXBwZW5kSXRlbVRvQXJyYXkoaXRlbSwgdGhpcy5saXN0SXRlbXMpO1xuICB9XG5cbiAgcmVtb3ZlSXRlbUZyb21MaXN0QXJyYXkoaXRlbSkge1xuICAgIHJlbW92ZUl0ZW1Gcm9tQXJyYXkoaXRlbSwgdGhpcy5saXN0SXRlbXMpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBUb0RvIHtcbiAgY29uc3RydWN0b3IobmFtZSwgcHJpb3JpdHksIGlzQ29tcGxldGVkLCBkYXRlKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgdGhpcy5pc0NvbXBsZXRlZCA9IGlzQ29tcGxldGVkO1xuICAgIHRoaXMuZGF0ZSA9IGRhdGU7XG4gIH1cblxuICBidWlsZFZpcnR1YWxCb2koKSB7XG4gICAgY29uc3QgdmlydHVhbEJvaSA9IG5ldyBFbGVtZW50KFwibGlcIik7XG4gICAgdmlydHVhbEJvaVxuICAgICAgLmFkZENoaWxkKG5ldyBFbGVtZW50KFwiaDFcIikuc2V0VGV4dENvbnRlbnQodGhpcy5uYW1lKSlcbiAgICAgIC5hZGRDaGlsZChuZXcgRWxlbWVudChcImgyXCIpLnNldFRleHRDb250ZW50KGBQcmlvcml0eTogJHt0aGlzLnByaW9yaXR5fWApKVxuICAgICAgLmFkZENoaWxkKG5ldyBFbGVtZW50KFwiYnV0dG9uXCIpLnNldFRleHRDb250ZW50KFwiU2V0IFByaW9yaXR5XCIpKVxuICAgICAgLmFkZENoaWxkKG5ldyBFbGVtZW50KFwiYnV0dG9uXCIpLnNldFRleHRDb250ZW50KFwiTWFyayBEb25lXCIpKTtcblxuICAgIHJldHVybiB2aXJ0dWFsQm9pO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoZWxlbWVudFR5cGUpIHtcbiAgICB0aGlzLmVsZW1lbnRUeXBlID0gZWxlbWVudFR5cGU7XG4gICAgdGhpcy5hdHRyaWJ1dGVzID0ge307XG4gICAgdGhpcy5jaGlsZHJlbiA9IFtdO1xuICB9XG5cbiAgYnVpbGRFbGVtZW50KCkge1xuICAgIC8vIENyZWF0ZSBlbGVtZW50IGluIERPTVxuICAgIGNvbnN0IHJlYWxCb2kgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRoaXMuZWxlbWVudFR5cGUpO1xuXG4gICAgLy8gQWRkIGF0dHJpYnV0ZXMgdG8gZWxlbWVudFxuICAgIGZvciAoY29uc3QgYXR0cmlidXRlIGluIHRoaXMuYXR0cmlidXRlcykge1xuICAgICAgcmVhbEJvaS5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlLCB0aGlzLmF0dHJpYnV0ZXNbYXR0cmlidXRlXSk7XG4gICAgfVxuXG4gICAgLy8gQXBwZW5kIGNoaWxkcmVuPyBBcHBlbmQgdGV4dD9cbiAgICBpZiAodGhpcy50ZXh0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGZvciAoY29uc3QgdmlydHVhbEJvaSBvZiB0aGlzLmNoaWxkcmVuKSB7XG4gICAgICAgIHJlYWxCb2kuYXBwZW5kQ2hpbGQodmlydHVhbEJvaS5idWlsZEVsZW1lbnQoKSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHJlYWxUZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodGhpcy50ZXh0KTtcbiAgICAgIHJlYWxCb2kuYXBwZW5kQ2hpbGQocmVhbFRleHQpO1xuICAgIH1cbiAgICByZXR1cm4gcmVhbEJvaTtcbiAgfVxuXG4gIHNldEF0dHJpYnV0ZXMob2JqZWN0KSB7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLmF0dHJpYnV0ZXMsIG9iamVjdCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBhZGRDaGlsZChlbGVtZW50KSB7XG4gICAgdGhpcy50ZXh0ID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuY2hpbGRyZW4ucHVzaChlbGVtZW50KTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgc2V0VGV4dENvbnRlbnQoc3RyaW5nKSB7XG4gICAgdGhpcy5jaGlsZHJlbiA9IFtdO1xuICAgIHRoaXMudGV4dCA9IHN0cmluZztcbiAgICByZXR1cm4gdGhpcztcbiAgfVxufVxuIiwiaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCIuLi9zcmMvY2xhc3Nlc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkVG9kYXkoKSB7XG4gIC8vIGNvbnN0IHRvZGF5VmlydHVhbEJvaSA9IG5ldyBFbGVtZW50KCdkaXYnKS5zZXRBdHRyaWJ1dGVzKHtjbGFzczogXCJkYXRlLXRhYlwiLCBpZDogXCJ0b2RheS10YWJcIn0pXG59XG5cbi8vVG9kYXkgSFRNTDpcbi8qXG4uY29udGVudFxuPiB0b2RheSBkaXZcbj4+Pj4gdWxcbj4+Pj4+PmxpIGR1ZSB0b2RheVxuKi9cbiIsImltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiLi9jbGFzc2VzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWREZWZhdWx0SFRNTCgpIHtcbiAgY29uc3QgZGVmYXVsdFByb2plY3REaXYgPSBuZXcgRWxlbWVudChcImRpdlwiKTtcblxuICByZXR1cm4gZGVmYXVsdFByb2plY3REaXY7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBlbmRJdGVtVG9BcnJheShpdGVtLCBhcnJheSkge1xuICBhcnJheS5wdXNoKGl0ZW0pO1xuICByZXR1cm47XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVJdGVtRnJvbUFycmF5KGl0ZW0sIGFycmF5KSB7XG4gIGxldCBpbmRleFRvUmVtb3ZlID0gYXJyYXkuaW5kZXhPZihpdGVtKTtcbiAgYXJyYXkuc3BsaWNlKGluZGV4VG9SZW1vdmUsIDEpO1xuICAvLyAgIGNvbnNvbGUubG9nKGFycmF5KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVkaXRJdGVtRGV0YWlsKGl0ZW0sIGRldGFpbCkge1xuICAvL25hbWVcbiAgLy8gcHJpb3JpdHlcblxuICBjb25zb2xlLmxvZyhpdGVtKTtcbiAgY29uc29sZS5sb2coZGV0YWlsKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldFByaW9yaXR5KGl0ZW0sIHByaW9yaXR5KSB7XG4gIGl0ZW0ucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgcmV0dXJuO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBJbXBvcnRzXG5pbXBvcnQgbG9hZFRvZGF5IGZyb20gXCIuL3RvZGF5XCI7XG5pbXBvcnQgbG9hZERlZmF1bHRIVE1MIGZyb20gXCIuL3V0aWxpdGllc1wiO1xuaW1wb3J0IFByb2plY3QgZnJvbSBcIi4vY2xhc3Nlc1wiO1xuaW1wb3J0IHsgTGlzdCB9IGZyb20gXCIuL2NsYXNzZXNcIjtcbmltcG9ydCB7IFRvRG8gfSBmcm9tIFwiLi9jbGFzc2VzXCI7XG5pbXBvcnQgeyBzZXRQcmlvcml0eSB9IGZyb20gXCIuL3V0aWxpdGllc1wiO1xuXG4vLyBHbG9iYWxzXG5jb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50XCIpO1xuXG4vLyBDcmVhdGUgZGVmYXVsdCBwcm9qZWN0IG9uIGxvYWQ6XG5jb25zdCBkZWZhdWx0UHJvamVjdCA9IG5ldyBQcm9qZWN0KFwiZGVmYXVsdFwiLCAxKTtcblxuLy90ZXN0aW5nIHNoaXRlOlxuXG5jb25zdCBteUxpc3QgPSBuZXcgTGlzdChcImZpcnN0IGxpc3RcIik7XG5cbmNvbnN0IHRvRG9JdGVtID0gbmV3IFRvRG8oXG4gIFwid2F0ZXIgdGhlIGxhd25cIixcbiAgMyxcbiAgZmFsc2UsXG4gIG5ldyBEYXRlKFwiNCBkZWNlbWJlciAyMDIzXCIpXG4pO1xuY29uc29sZS5sb2codG9Eb0l0ZW0uZGF0ZSk7XG5cbmNvbnN0IHRvZG8yID0gbmV3IFRvRG8oXCJFYXQgYSB3YXRlcm1lbG9uXCIsIDIsIHRydWUpO1xuXG5teUxpc3QuYXBwZW5kSXRlbVRvTGlzdEFycmF5KHRvRG9JdGVtKTtcbm15TGlzdC5hcHBlbmRJdGVtVG9MaXN0QXJyYXkodG9kbzIpO1xuXG5kZWZhdWx0UHJvamVjdC5hcHBlbmRMaXN0KG15TGlzdCk7XG5cbmNvbnN0IGJ1aWxkRGVmYXVsdCA9IGRlZmF1bHRQcm9qZWN0LmJ1aWxkVmlydHVhbEJvaSgpO1xuY29uc29sZS5sb2coYnVpbGREZWZhdWx0KTtcbmNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoYnVpbGREZWZhdWx0LmJ1aWxkRWxlbWVudCgpKTtcbi8vIGRlZmF1bHRQcm9qZWN0LmFwcGVuZExpc3QobXlMaXN0Mik7XG5cbi8vIGRlZmF1bHRQcm9qZWN0LmJ1aWxkQ2hpbGRyZW4oKTtcblxuLy9zb21lIHByaW9yaXR5IGJ1dHRvbiBnZXRzIGNsaWNrZWQ6XG4vL2V2ZW50IGxpc3RlbmVyID0+IGNsaWNrIHsgfVxuLy8gc2V0UHJpb3JpdHkodG9Eb0l0ZW0sIDIpO1xuXG4vLyBjb25zb2xlLmxvZyhkZWZhdWx0UHJvamVjdCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=