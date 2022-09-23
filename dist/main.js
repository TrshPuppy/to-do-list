/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isWithinInterval/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/date-fns/esm/isWithinInterval/index.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isWithinInterval)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name isWithinInterval
 * @category Interval Helpers
 * @summary Is the given date within the interval?
 *
 * @description
 * Is the given date within the interval? (Including start and end.)
 *
 * @param {Date|Number} date - the date to check
 * @param {Interval} interval - the interval to check
 * @returns {Boolean} the date is within the interval
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} The start of an interval cannot be after its end
 * @throws {RangeError} Date in interval cannot be `Invalid Date`
 *
 * @example
 * // For the date within the interval:
 * isWithinInterval(new Date(2014, 0, 3), {
 *   start: new Date(2014, 0, 1),
 *   end: new Date(2014, 0, 7)
 * })
 * //=> true
 *
 * @example
 * // For the date outside of the interval:
 * isWithinInterval(new Date(2014, 0, 10), {
 *   start: new Date(2014, 0, 1),
 *   end: new Date(2014, 0, 7)
 * })
 * //=> false
 *
 * @example
 * // For date equal to interval start:
 * isWithinInterval(date, { start, end: date }) // => true
 *
 * @example
 * // For date equal to interval end:
 * isWithinInterval(date, { start: date, end }) // => true
 */
function isWithinInterval(dirtyDate, interval) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var time = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate).getTime();
  var startTime = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(interval.start).getTime();
  var endTime = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(interval.end).getTime(); // Throw an exception if start date is after end date or if any date is `Invalid Date`

  if (!(startTime <= endTime)) {
    throw new RangeError('Invalid interval');
  }

  return time >= startTime && time <= endTime;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }


/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */

function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var argStr = Object.prototype.toString.call(argument); // Clone the date

  if (argument instanceof Date || _typeof(argument) === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"); // eslint-disable-next-line no-console

      console.warn(new Error().stack);
    }

    return new Date(NaN);
  }
}

/***/ }),

/***/ "./src/classes.js":
/*!************************!*\
  !*** ./src/classes.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Element": () => (/* binding */ Element),
/* harmony export */   "Librarian": () => (/* binding */ Librarian),
/* harmony export */   "List": () => (/* binding */ List),
/* harmony export */   "ToDo": () => (/* binding */ ToDo),
/* harmony export */   "default": () => (/* binding */ Project)
/* harmony export */ });
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utilities */ "./src/utilities.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isWithinInterval/index.js");




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

  getAllTasksInInterval(interval) {
    // if(isWithinInterval(new Date(), interval));

    return this.lists.flatMap((list) => list.getAllToDosInInterval(interval));
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

  getAllToDosInInterval(interval) {
    return this.listItems.filter(
      (toDo) => !toDo.date || (0,date_fns__WEBPACK_IMPORTED_MODULE_1__["default"])(toDo.date, interval)
    );
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

class Librarian {
  static projectsArray = [];

  static getAllProjects() {
    return Librarian.projectsArray;
  }

  static addProject(project) {
    Librarian.projectsArray.push(project);
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
/* harmony export */   "default": () => (/* binding */ loadToday),
/* harmony export */   "loadWeek": () => (/* binding */ loadWeek)
/* harmony export */ });
/* harmony import */ var _src_classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/classes */ "./src/classes.js");


// Returns a built element based on interval and projectsArray[]:
function buildTab(projectsArray, interval) {
  const intervalToDos = projectsArray.flatMap((project) =>
    project.getAllTasksInInterval(interval)
  );

  const intervalToDosUI = intervalToDos.reduce(
    (virtualUl, toDo) => virtualUl.addChild(toDo.buildVirtualBoi()),
    new _src_classes__WEBPACK_IMPORTED_MODULE_0__.Element("ul").setAttributes({ id: "today" })
  );

  return new _src_classes__WEBPACK_IMPORTED_MODULE_0__.Element("div")
    .setAttributes({
      class: "date-tab",
      id: "today-tab",
    })
    .addChild(new _src_classes__WEBPACK_IMPORTED_MODULE_0__.Element("h1").setTextContent("Today"))
    .addChild(intervalToDosUI);
}

// Creates interval of range within today to be used by buildTab()
function loadToday(projectsArray) {
  const now = new Date();

  const interval = {
    start: new Date(now.getFullYear(), now.getMonth(), now.getDate()),
    end: new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate(),
      23,
      59,
      59,
      999
    ),
  };

  return buildTab(projectsArray, interval);
}

// Cretes interval of range within the next week to be used in buildTab()
function loadWeek(projectsArray) {
  const now = new Date();

  const interval = {
    start: new Date(now.getFullYear(), now.getMonth(), now.getDate()),
    end: new Date(now.getFullYear(), now.getM),
  };
}

// Loop through Librarian.projectsarray()
//   ea project: get tasks within this interval
// For the date within the interval:

// isWithinInterval(new Date(2014, 0, 3), {
//     start: new Date(2014, 0, 1),
//     end: new Date(2014, 0, 7)
//   })
//   //=> true

//Today HTML:
/*
.content
panel div
> today div
> h1: 
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

const toDoItem = new _classes__WEBPACK_IMPORTED_MODULE_2__.ToDo("water the lawn", 3, false);
console.log(toDoItem.date);

const todo2 = new _classes__WEBPACK_IMPORTED_MODULE_2__.ToDo("Eat a watermelon", 2, true, new Date());

myList.appendItemToListArray(toDoItem);
myList.appendItemToListArray(todo2);

defaultProject.appendList(myList);

_classes__WEBPACK_IMPORTED_MODULE_2__.Librarian.addProject(defaultProject);

const today = (0,_today__WEBPACK_IMPORTED_MODULE_0__["default"])(_classes__WEBPACK_IMPORTED_MODULE_2__.Librarian.getAllProjects());
console.log(today);

const buildDefault = defaultProject.buildVirtualBoi();
console.log(buildDefault);
contentDiv.appendChild(today.buildElement());

// defaultProject.appendList(myList2);

// defaultProject.buildChildren();

//some priority button gets clicked:
//event listener => click { }
// setPriority(toDoItem, 2);

// console.log(defaultProject);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBRXBCLGNBQWMsa0RBQVMsQ0FBQyw4REFBd0I7QUFDaEQ7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL3JlcG9zLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qcyIsIndlYnBhY2s6Ly9yZXBvcy8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNXaXRoaW5JbnRlcnZhbC9pbmRleC5qcyIsIndlYnBhY2s6Ly9yZXBvcy8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vdG9EYXRlL2luZGV4LmpzIiwid2VicGFjazovL3JlcG9zLy4vc3JjL2NsYXNzZXMuanMiLCJ3ZWJwYWNrOi8vcmVwb3MvLi9zcmMvdG9kYXkuanMiLCJ3ZWJwYWNrOi8vcmVwb3MvLi9zcmMvdXRpbGl0aWVzLmpzIiwid2VicGFjazovL3JlcG9zL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3JlcG9zL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXBvcy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3JlcG9zL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVwb3MvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVxdWlyZWRBcmdzKHJlcXVpcmVkLCBhcmdzKSB7XG4gIGlmIChhcmdzLmxlbmd0aCA8IHJlcXVpcmVkKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihyZXF1aXJlZCArICcgYXJndW1lbnQnICsgKHJlcXVpcmVkID4gMSA/ICdzJyA6ICcnKSArICcgcmVxdWlyZWQsIGJ1dCBvbmx5ICcgKyBhcmdzLmxlbmd0aCArICcgcHJlc2VudCcpO1xuICB9XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuXG4vKipcbiAqIEBuYW1lIGlzV2l0aGluSW50ZXJ2YWxcbiAqIEBjYXRlZ29yeSBJbnRlcnZhbCBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZ2l2ZW4gZGF0ZSB3aXRoaW4gdGhlIGludGVydmFsP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogSXMgdGhlIGdpdmVuIGRhdGUgd2l0aGluIHRoZSBpbnRlcnZhbD8gKEluY2x1ZGluZyBzdGFydCBhbmQgZW5kLilcbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gY2hlY2tcbiAqIEBwYXJhbSB7SW50ZXJ2YWx9IGludGVydmFsIC0gdGhlIGludGVydmFsIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGUgaXMgd2l0aGluIHRoZSBpbnRlcnZhbFxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gVGhlIHN0YXJ0IG9mIGFuIGludGVydmFsIGNhbm5vdCBiZSBhZnRlciBpdHMgZW5kXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBEYXRlIGluIGludGVydmFsIGNhbm5vdCBiZSBgSW52YWxpZCBEYXRlYFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgdGhlIGRhdGUgd2l0aGluIHRoZSBpbnRlcnZhbDpcbiAqIGlzV2l0aGluSW50ZXJ2YWwobmV3IERhdGUoMjAxNCwgMCwgMyksIHtcbiAqICAgc3RhcnQ6IG5ldyBEYXRlKDIwMTQsIDAsIDEpLFxuICogICBlbmQ6IG5ldyBEYXRlKDIwMTQsIDAsIDcpXG4gKiB9KVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciB0aGUgZGF0ZSBvdXRzaWRlIG9mIHRoZSBpbnRlcnZhbDpcbiAqIGlzV2l0aGluSW50ZXJ2YWwobmV3IERhdGUoMjAxNCwgMCwgMTApLCB7XG4gKiAgIHN0YXJ0OiBuZXcgRGF0ZSgyMDE0LCAwLCAxKSxcbiAqICAgZW5kOiBuZXcgRGF0ZSgyMDE0LCAwLCA3KVxuICogfSlcbiAqIC8vPT4gZmFsc2VcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIGRhdGUgZXF1YWwgdG8gaW50ZXJ2YWwgc3RhcnQ6XG4gKiBpc1dpdGhpbkludGVydmFsKGRhdGUsIHsgc3RhcnQsIGVuZDogZGF0ZSB9KSAvLyA9PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciBkYXRlIGVxdWFsIHRvIGludGVydmFsIGVuZDpcbiAqIGlzV2l0aGluSW50ZXJ2YWwoZGF0ZSwgeyBzdGFydDogZGF0ZSwgZW5kIH0pIC8vID0+IHRydWVcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNXaXRoaW5JbnRlcnZhbChkaXJ0eURhdGUsIGludGVydmFsKSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgdGltZSA9IHRvRGF0ZShkaXJ0eURhdGUpLmdldFRpbWUoKTtcbiAgdmFyIHN0YXJ0VGltZSA9IHRvRGF0ZShpbnRlcnZhbC5zdGFydCkuZ2V0VGltZSgpO1xuICB2YXIgZW5kVGltZSA9IHRvRGF0ZShpbnRlcnZhbC5lbmQpLmdldFRpbWUoKTsgLy8gVGhyb3cgYW4gZXhjZXB0aW9uIGlmIHN0YXJ0IGRhdGUgaXMgYWZ0ZXIgZW5kIGRhdGUgb3IgaWYgYW55IGRhdGUgaXMgYEludmFsaWQgRGF0ZWBcblxuICBpZiAoIShzdGFydFRpbWUgPD0gZW5kVGltZSkpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignSW52YWxpZCBpbnRlcnZhbCcpO1xuICB9XG5cbiAgcmV0dXJuIHRpbWUgPj0gc3RhcnRUaW1lICYmIHRpbWUgPD0gZW5kVGltZTtcbn0iLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHRvRGF0ZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYW4gaW5zdGFuY2Ugb2YgRGF0ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgaXRzIGNsb25lLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhIG51bWJlciwgaXQgaXMgdHJlYXRlZCBhcyBhIHRpbWVzdGFtcC5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgbm9uZSBvZiB0aGUgYWJvdmUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIEludmFsaWQgRGF0ZS5cbiAqXG4gKiAqKk5vdGUqKjogKmFsbCogRGF0ZSBhcmd1bWVudHMgcGFzc2VkIHRvIGFueSAqZGF0ZS1mbnMqIGZ1bmN0aW9uIGlzIHByb2Nlc3NlZCBieSBgdG9EYXRlYC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBhcmd1bWVudCAtIHRoZSB2YWx1ZSB0byBjb252ZXJ0XG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHBhcnNlZCBkYXRlIGluIHRoZSBsb2NhbCB0aW1lIHpvbmVcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDbG9uZSB0aGUgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZShuZXcgRGF0ZSgyMDE0LCAxLCAxMSwgMTEsIDMwLCAzMCkpXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHRoZSB0aW1lc3RhbXAgdG8gZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZSgxMzkyMDk4NDMwMDAwKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0RhdGUoYXJndW1lbnQpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBhcmdTdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJndW1lbnQpOyAvLyBDbG9uZSB0aGUgZGF0ZVxuXG4gIGlmIChhcmd1bWVudCBpbnN0YW5jZW9mIERhdGUgfHwgX3R5cGVvZihhcmd1bWVudCkgPT09ICdvYmplY3QnICYmIGFyZ1N0ciA9PT0gJ1tvYmplY3QgRGF0ZV0nKSB7XG4gICAgLy8gUHJldmVudCB0aGUgZGF0ZSB0byBsb3NlIHRoZSBtaWxsaXNlY29uZHMgd2hlbiBwYXNzZWQgdG8gbmV3IERhdGUoKSBpbiBJRTEwXG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50LmdldFRpbWUoKSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGFyZ3VtZW50ID09PSAnbnVtYmVyJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IE51bWJlcl0nKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50KTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoKHR5cGVvZiBhcmd1bWVudCA9PT0gJ3N0cmluZycgfHwgYXJnU3RyID09PSAnW29iamVjdCBTdHJpbmddJykgJiYgdHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS53YXJuKFwiU3RhcnRpbmcgd2l0aCB2Mi4wLjAtYmV0YS4xIGRhdGUtZm5zIGRvZXNuJ3QgYWNjZXB0IHN0cmluZ3MgYXMgZGF0ZSBhcmd1bWVudHMuIFBsZWFzZSB1c2UgYHBhcnNlSVNPYCB0byBwYXJzZSBzdHJpbmdzLiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNzdHJpbmctYXJndW1lbnRzXCIpOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuXG4gICAgICBjb25zb2xlLndhcm4obmV3IEVycm9yKCkuc3RhY2spO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG59IiwiaW1wb3J0IHsgYXBwZW5kSXRlbVRvQXJyYXkgfSBmcm9tIFwiLi91dGlsaXRpZXNcIjtcbmltcG9ydCB7IHJlbW92ZUl0ZW1Gcm9tQXJyYXkgfSBmcm9tIFwiLi91dGlsaXRpZXNcIjtcbmltcG9ydCB7IGVkaXRJdGVtRGV0YWlsIH0gZnJvbSBcIi4vdXRpbGl0aWVzXCI7XG5pbXBvcnQgeyBpc1dpdGhpbkludGVydmFsIH0gZnJvbSBcImRhdGUtZm5zXCI7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9qZWN0IHtcbiAgY29uc3RydWN0b3IobmFtZSwgaWQpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuaWQgPSBpZDtcbiAgICB0aGlzLmxpc3RzID0gW107XG4gICAgLy8gdGhpcy5wcmlvcml0eTtcbiAgfVxuXG4gIGFwcGVuZExpc3QobGlzdCkge1xuICAgIGFwcGVuZEl0ZW1Ub0FycmF5KGxpc3QsIHRoaXMubGlzdHMpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHJlbW92ZUxpc3QobGlzdCkge1xuICAgIHJlbW92ZUl0ZW1Gcm9tQXJyYXkobGlzdCwgdGhpcy5saXN0cyk7XG4gIH1cblxuICBlZGl0RGV0YWlscyhkZXRhaWxUeXBlKSB7XG4gICAgZWRpdEl0ZW1EZXRhaWwodGhpcywgZGV0YWlsVHlwZSk7XG4gIH1cblxuICBidWlsZFZpcnR1YWxCb2koKSB7XG4gICAgcmV0dXJuIHRoaXMubGlzdHMucmVkdWNlKFxuICAgICAgKHZpcnR1YWxQcm9qZWN0LCBsaXN0KSA9PiB2aXJ0dWFsUHJvamVjdC5hZGRDaGlsZChsaXN0LmJ1aWxkVmlydHVhbEJvaSgpKSxcbiAgICAgIG5ldyBFbGVtZW50KFwiZGl2XCIpLnNldEF0dHJpYnV0ZXMoe1xuICAgICAgICBjbGFzczogXCJwcm9qZWN0XCIsXG4gICAgICAgIGlkOiBgUHJvamVjdC0ke3RoaXMuaWR9YCxcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIGdldEFsbFRhc2tzSW5JbnRlcnZhbChpbnRlcnZhbCkge1xuICAgIC8vIGlmKGlzV2l0aGluSW50ZXJ2YWwobmV3IERhdGUoKSwgaW50ZXJ2YWwpKTtcblxuICAgIHJldHVybiB0aGlzLmxpc3RzLmZsYXRNYXAoKGxpc3QpID0+IGxpc3QuZ2V0QWxsVG9Eb3NJbkludGVydmFsKGludGVydmFsKSk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIExpc3Qge1xuICBjb25zdHJ1Y3RvcihsaXN0TmFtZSkge1xuICAgIHRoaXMubmFtZSA9IGxpc3ROYW1lO1xuICAgIHRoaXMubGlzdEl0ZW1zID0gW107XG4gICAgdGhpcy5wcmlvcml0eTtcbiAgfVxuXG4gIGJ1aWxkVmlydHVhbEJvaSgpIHtcbiAgICByZXR1cm4gdGhpcy5saXN0SXRlbXMucmVkdWNlKFxuICAgICAgKHZpcnR1YWxVbCwgdG9EbykgPT4gdmlydHVhbFVsLmFkZENoaWxkKHRvRG8uYnVpbGRWaXJ0dWFsQm9pKCkpLFxuICAgICAgbmV3IEVsZW1lbnQoXCJ1bFwiKS5zZXRBdHRyaWJ1dGVzKHtcbiAgICAgICAgaWQ6IHRoaXMubmFtZSxcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIGFwcGVuZEl0ZW1Ub0xpc3RBcnJheShpdGVtKSB7XG4gICAgYXBwZW5kSXRlbVRvQXJyYXkoaXRlbSwgdGhpcy5saXN0SXRlbXMpO1xuICB9XG5cbiAgcmVtb3ZlSXRlbUZyb21MaXN0QXJyYXkoaXRlbSkge1xuICAgIHJlbW92ZUl0ZW1Gcm9tQXJyYXkoaXRlbSwgdGhpcy5saXN0SXRlbXMpO1xuICB9XG5cbiAgZ2V0QWxsVG9Eb3NJbkludGVydmFsKGludGVydmFsKSB7XG4gICAgcmV0dXJuIHRoaXMubGlzdEl0ZW1zLmZpbHRlcihcbiAgICAgICh0b0RvKSA9PiAhdG9Eby5kYXRlIHx8IGlzV2l0aGluSW50ZXJ2YWwodG9Eby5kYXRlLCBpbnRlcnZhbClcbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBUb0RvIHtcbiAgY29uc3RydWN0b3IobmFtZSwgcHJpb3JpdHksIGlzQ29tcGxldGVkLCBkYXRlKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgdGhpcy5pc0NvbXBsZXRlZCA9IGlzQ29tcGxldGVkO1xuICAgIHRoaXMuZGF0ZSA9IGRhdGU7XG4gIH1cblxuICBidWlsZFZpcnR1YWxCb2koKSB7XG4gICAgY29uc3QgdmlydHVhbEJvaSA9IG5ldyBFbGVtZW50KFwibGlcIik7XG4gICAgdmlydHVhbEJvaVxuICAgICAgLmFkZENoaWxkKG5ldyBFbGVtZW50KFwiaDFcIikuc2V0VGV4dENvbnRlbnQodGhpcy5uYW1lKSlcbiAgICAgIC5hZGRDaGlsZChuZXcgRWxlbWVudChcImgyXCIpLnNldFRleHRDb250ZW50KGBQcmlvcml0eTogJHt0aGlzLnByaW9yaXR5fWApKVxuICAgICAgLmFkZENoaWxkKG5ldyBFbGVtZW50KFwiYnV0dG9uXCIpLnNldFRleHRDb250ZW50KFwiU2V0IFByaW9yaXR5XCIpKVxuICAgICAgLmFkZENoaWxkKG5ldyBFbGVtZW50KFwiYnV0dG9uXCIpLnNldFRleHRDb250ZW50KFwiTWFyayBEb25lXCIpKTtcblxuICAgIHJldHVybiB2aXJ0dWFsQm9pO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoZWxlbWVudFR5cGUpIHtcbiAgICB0aGlzLmVsZW1lbnRUeXBlID0gZWxlbWVudFR5cGU7XG4gICAgdGhpcy5hdHRyaWJ1dGVzID0ge307XG4gICAgdGhpcy5jaGlsZHJlbiA9IFtdO1xuICB9XG5cbiAgYnVpbGRFbGVtZW50KCkge1xuICAgIC8vIENyZWF0ZSBlbGVtZW50IGluIERPTVxuICAgIGNvbnN0IHJlYWxCb2kgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRoaXMuZWxlbWVudFR5cGUpO1xuXG4gICAgLy8gQWRkIGF0dHJpYnV0ZXMgdG8gZWxlbWVudFxuICAgIGZvciAoY29uc3QgYXR0cmlidXRlIGluIHRoaXMuYXR0cmlidXRlcykge1xuICAgICAgcmVhbEJvaS5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlLCB0aGlzLmF0dHJpYnV0ZXNbYXR0cmlidXRlXSk7XG4gICAgfVxuXG4gICAgLy8gQXBwZW5kIGNoaWxkcmVuPyBBcHBlbmQgdGV4dD9cbiAgICBpZiAodGhpcy50ZXh0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGZvciAoY29uc3QgdmlydHVhbEJvaSBvZiB0aGlzLmNoaWxkcmVuKSB7XG4gICAgICAgIHJlYWxCb2kuYXBwZW5kQ2hpbGQodmlydHVhbEJvaS5idWlsZEVsZW1lbnQoKSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHJlYWxUZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodGhpcy50ZXh0KTtcbiAgICAgIHJlYWxCb2kuYXBwZW5kQ2hpbGQocmVhbFRleHQpO1xuICAgIH1cbiAgICByZXR1cm4gcmVhbEJvaTtcbiAgfVxuXG4gIHNldEF0dHJpYnV0ZXMob2JqZWN0KSB7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLmF0dHJpYnV0ZXMsIG9iamVjdCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBhZGRDaGlsZChlbGVtZW50KSB7XG4gICAgdGhpcy50ZXh0ID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuY2hpbGRyZW4ucHVzaChlbGVtZW50KTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgc2V0VGV4dENvbnRlbnQoc3RyaW5nKSB7XG4gICAgdGhpcy5jaGlsZHJlbiA9IFtdO1xuICAgIHRoaXMudGV4dCA9IHN0cmluZztcbiAgICByZXR1cm4gdGhpcztcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTGlicmFyaWFuIHtcbiAgc3RhdGljIHByb2plY3RzQXJyYXkgPSBbXTtcblxuICBzdGF0aWMgZ2V0QWxsUHJvamVjdHMoKSB7XG4gICAgcmV0dXJuIExpYnJhcmlhbi5wcm9qZWN0c0FycmF5O1xuICB9XG5cbiAgc3RhdGljIGFkZFByb2plY3QocHJvamVjdCkge1xuICAgIExpYnJhcmlhbi5wcm9qZWN0c0FycmF5LnB1c2gocHJvamVjdCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiLi4vc3JjL2NsYXNzZXNcIjtcblxuLy8gUmV0dXJucyBhIGJ1aWx0IGVsZW1lbnQgYmFzZWQgb24gaW50ZXJ2YWwgYW5kIHByb2plY3RzQXJyYXlbXTpcbmZ1bmN0aW9uIGJ1aWxkVGFiKHByb2plY3RzQXJyYXksIGludGVydmFsKSB7XG4gIGNvbnN0IGludGVydmFsVG9Eb3MgPSBwcm9qZWN0c0FycmF5LmZsYXRNYXAoKHByb2plY3QpID0+XG4gICAgcHJvamVjdC5nZXRBbGxUYXNrc0luSW50ZXJ2YWwoaW50ZXJ2YWwpXG4gICk7XG5cbiAgY29uc3QgaW50ZXJ2YWxUb0Rvc1VJID0gaW50ZXJ2YWxUb0Rvcy5yZWR1Y2UoXG4gICAgKHZpcnR1YWxVbCwgdG9EbykgPT4gdmlydHVhbFVsLmFkZENoaWxkKHRvRG8uYnVpbGRWaXJ0dWFsQm9pKCkpLFxuICAgIG5ldyBFbGVtZW50KFwidWxcIikuc2V0QXR0cmlidXRlcyh7IGlkOiBcInRvZGF5XCIgfSlcbiAgKTtcblxuICByZXR1cm4gbmV3IEVsZW1lbnQoXCJkaXZcIilcbiAgICAuc2V0QXR0cmlidXRlcyh7XG4gICAgICBjbGFzczogXCJkYXRlLXRhYlwiLFxuICAgICAgaWQ6IFwidG9kYXktdGFiXCIsXG4gICAgfSlcbiAgICAuYWRkQ2hpbGQobmV3IEVsZW1lbnQoXCJoMVwiKS5zZXRUZXh0Q29udGVudChcIlRvZGF5XCIpKVxuICAgIC5hZGRDaGlsZChpbnRlcnZhbFRvRG9zVUkpO1xufVxuXG4vLyBDcmVhdGVzIGludGVydmFsIG9mIHJhbmdlIHdpdGhpbiB0b2RheSB0byBiZSB1c2VkIGJ5IGJ1aWxkVGFiKClcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWRUb2RheShwcm9qZWN0c0FycmF5KSB7XG4gIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XG5cbiAgY29uc3QgaW50ZXJ2YWwgPSB7XG4gICAgc3RhcnQ6IG5ldyBEYXRlKG5vdy5nZXRGdWxsWWVhcigpLCBub3cuZ2V0TW9udGgoKSwgbm93LmdldERhdGUoKSksXG4gICAgZW5kOiBuZXcgRGF0ZShcbiAgICAgIG5vdy5nZXRGdWxsWWVhcigpLFxuICAgICAgbm93LmdldE1vbnRoKCksXG4gICAgICBub3cuZ2V0RGF0ZSgpLFxuICAgICAgMjMsXG4gICAgICA1OSxcbiAgICAgIDU5LFxuICAgICAgOTk5XG4gICAgKSxcbiAgfTtcblxuICByZXR1cm4gYnVpbGRUYWIocHJvamVjdHNBcnJheSwgaW50ZXJ2YWwpO1xufVxuXG4vLyBDcmV0ZXMgaW50ZXJ2YWwgb2YgcmFuZ2Ugd2l0aGluIHRoZSBuZXh0IHdlZWsgdG8gYmUgdXNlZCBpbiBidWlsZFRhYigpXG5leHBvcnQgZnVuY3Rpb24gbG9hZFdlZWsocHJvamVjdHNBcnJheSkge1xuICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xuXG4gIGNvbnN0IGludGVydmFsID0ge1xuICAgIHN0YXJ0OiBuZXcgRGF0ZShub3cuZ2V0RnVsbFllYXIoKSwgbm93LmdldE1vbnRoKCksIG5vdy5nZXREYXRlKCkpLFxuICAgIGVuZDogbmV3IERhdGUobm93LmdldEZ1bGxZZWFyKCksIG5vdy5nZXRNKSxcbiAgfTtcbn1cblxuLy8gTG9vcCB0aHJvdWdoIExpYnJhcmlhbi5wcm9qZWN0c2FycmF5KClcbi8vICAgZWEgcHJvamVjdDogZ2V0IHRhc2tzIHdpdGhpbiB0aGlzIGludGVydmFsXG4vLyBGb3IgdGhlIGRhdGUgd2l0aGluIHRoZSBpbnRlcnZhbDpcblxuLy8gaXNXaXRoaW5JbnRlcnZhbChuZXcgRGF0ZSgyMDE0LCAwLCAzKSwge1xuLy8gICAgIHN0YXJ0OiBuZXcgRGF0ZSgyMDE0LCAwLCAxKSxcbi8vICAgICBlbmQ6IG5ldyBEYXRlKDIwMTQsIDAsIDcpXG4vLyAgIH0pXG4vLyAgIC8vPT4gdHJ1ZVxuXG4vL1RvZGF5IEhUTUw6XG4vKlxuLmNvbnRlbnRcbnBhbmVsIGRpdlxuPiB0b2RheSBkaXZcbj4gaDE6IFxuPj4+Pj4+bGkgZHVlIHRvZGF5XG4qL1xuIiwiaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCIuL2NsYXNzZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZERlZmF1bHRIVE1MKCkge1xuICBjb25zdCBkZWZhdWx0UHJvamVjdERpdiA9IG5ldyBFbGVtZW50KFwiZGl2XCIpO1xuXG4gIHJldHVybiBkZWZhdWx0UHJvamVjdERpdjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFwcGVuZEl0ZW1Ub0FycmF5KGl0ZW0sIGFycmF5KSB7XG4gIGFycmF5LnB1c2goaXRlbSk7XG4gIHJldHVybjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUl0ZW1Gcm9tQXJyYXkoaXRlbSwgYXJyYXkpIHtcbiAgbGV0IGluZGV4VG9SZW1vdmUgPSBhcnJheS5pbmRleE9mKGl0ZW0pO1xuICBhcnJheS5zcGxpY2UoaW5kZXhUb1JlbW92ZSwgMSk7XG4gIC8vICAgY29uc29sZS5sb2coYXJyYXkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZWRpdEl0ZW1EZXRhaWwoaXRlbSwgZGV0YWlsKSB7XG4gIC8vbmFtZVxuICAvLyBwcmlvcml0eVxuXG4gIGNvbnNvbGUubG9nKGl0ZW0pO1xuICBjb25zb2xlLmxvZyhkZXRhaWwpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0UHJpb3JpdHkoaXRlbSwgcHJpb3JpdHkpIHtcbiAgaXRlbS5wcmlvcml0eSA9IHByaW9yaXR5O1xuICByZXR1cm47XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIEltcG9ydHNcbmltcG9ydCBsb2FkVG9kYXkgZnJvbSBcIi4vdG9kYXlcIjtcbmltcG9ydCBsb2FkV2VlayBmcm9tIFwiLi90b2RheVwiO1xuaW1wb3J0IGxvYWREZWZhdWx0SFRNTCBmcm9tIFwiLi91dGlsaXRpZXNcIjtcbmltcG9ydCBQcm9qZWN0IGZyb20gXCIuL2NsYXNzZXNcIjtcbmltcG9ydCB7IExpc3QgfSBmcm9tIFwiLi9jbGFzc2VzXCI7XG5pbXBvcnQgeyBUb0RvIH0gZnJvbSBcIi4vY2xhc3Nlc1wiO1xuaW1wb3J0IHsgc2V0UHJpb3JpdHkgfSBmcm9tIFwiLi91dGlsaXRpZXNcIjtcbmltcG9ydCB7IExpYnJhcmlhbiB9IGZyb20gXCIuL2NsYXNzZXNcIjtcblxuLy8gR2xvYmFsc1xuY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudFwiKTtcblxuLy8gQ3JlYXRlIGRlZmF1bHQgcHJvamVjdCBvbiBsb2FkOlxuY29uc3QgZGVmYXVsdFByb2plY3QgPSBuZXcgUHJvamVjdChcImRlZmF1bHRcIiwgMSk7XG5cbi8vdGVzdGluZyBzaGl0ZTpcblxuY29uc3QgbXlMaXN0ID0gbmV3IExpc3QoXCJmaXJzdCBsaXN0XCIpO1xuXG5jb25zdCB0b0RvSXRlbSA9IG5ldyBUb0RvKFwid2F0ZXIgdGhlIGxhd25cIiwgMywgZmFsc2UpO1xuY29uc29sZS5sb2codG9Eb0l0ZW0uZGF0ZSk7XG5cbmNvbnN0IHRvZG8yID0gbmV3IFRvRG8oXCJFYXQgYSB3YXRlcm1lbG9uXCIsIDIsIHRydWUsIG5ldyBEYXRlKCkpO1xuXG5teUxpc3QuYXBwZW5kSXRlbVRvTGlzdEFycmF5KHRvRG9JdGVtKTtcbm15TGlzdC5hcHBlbmRJdGVtVG9MaXN0QXJyYXkodG9kbzIpO1xuXG5kZWZhdWx0UHJvamVjdC5hcHBlbmRMaXN0KG15TGlzdCk7XG5cbkxpYnJhcmlhbi5hZGRQcm9qZWN0KGRlZmF1bHRQcm9qZWN0KTtcblxuY29uc3QgdG9kYXkgPSBsb2FkVG9kYXkoTGlicmFyaWFuLmdldEFsbFByb2plY3RzKCkpO1xuY29uc29sZS5sb2codG9kYXkpO1xuXG5jb25zdCBidWlsZERlZmF1bHQgPSBkZWZhdWx0UHJvamVjdC5idWlsZFZpcnR1YWxCb2koKTtcbmNvbnNvbGUubG9nKGJ1aWxkRGVmYXVsdCk7XG5jb250ZW50RGl2LmFwcGVuZENoaWxkKHRvZGF5LmJ1aWxkRWxlbWVudCgpKTtcblxuLy8gZGVmYXVsdFByb2plY3QuYXBwZW5kTGlzdChteUxpc3QyKTtcblxuLy8gZGVmYXVsdFByb2plY3QuYnVpbGRDaGlsZHJlbigpO1xuXG4vL3NvbWUgcHJpb3JpdHkgYnV0dG9uIGdldHMgY2xpY2tlZDpcbi8vZXZlbnQgbGlzdGVuZXIgPT4gY2xpY2sgeyB9XG4vLyBzZXRQcmlvcml0eSh0b0RvSXRlbSwgMik7XG5cbi8vIGNvbnNvbGUubG9nKGRlZmF1bHRQcm9qZWN0KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==