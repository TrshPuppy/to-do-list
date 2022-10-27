/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/UIhandlers.js":
/*!***************************!*\
  !*** ./src/UIhandlers.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ displayProjectForm),
/* harmony export */   "displayEditToDoForm": () => (/* binding */ displayEditToDoForm),
/* harmony export */   "displayToDoForm": () => (/* binding */ displayToDoForm)
/* harmony export */ });
/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes */ "./src/classes.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./src/index.js");
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utilities */ "./src/utilities.js");
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'date-fns'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());






function displayProjectForm() {
  if (!document.querySelector(".form")) {
    return new _classes__WEBPACK_IMPORTED_MODULE_0__.Element("form")
      .setAttributes({ class: "form", id: "add-project-form" })
      .addChild(
        new _classes__WEBPACK_IMPORTED_MODULE_0__.Element("input").setAttributes({
          type: "text",
          class: "form-input",
          id: "project-name",
          placeholder: "Name your project",
          required: "required",
        })
      )
      .addChild(
        new _classes__WEBPACK_IMPORTED_MODULE_0__.Element("button")
          .setAttributes({
            type: "button",
            class: "form-btn",
            id: "project-form-btn",
          })
          .setTextContent("Submit")
      )
      .buildElement();
  } else {
    return;
  }
}

function displayToDoForm(project) {
  return new _classes__WEBPACK_IMPORTED_MODULE_0__.Element("form")
    .setAttributes({ class: "form", id: "add-todo-form" })
    .addChild(
      new _classes__WEBPACK_IMPORTED_MODULE_0__.Element("input").setAttributes({
        type: "text",
        class: "form-input",
        id: "todo-name",
        placeholder: "Name your to-do",
        required: "required",
      })
    )
    .addChild(
      new _classes__WEBPACK_IMPORTED_MODULE_0__.Element("label")
        .setAttributes({ for: "due-date" })
        .setTextContent("Pick a due date:")
    )
    .addChild(
      new _classes__WEBPACK_IMPORTED_MODULE_0__.Element("input").setAttributes({
        type: "date",
        id: "due-date",
        name: "due-date",
        value: `${new Date()}`,
        min: `${Object(function webpackMissingModule() { var e = new Error("Cannot find module 'date-fns'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(new Date())}`,
        max: "undefined",
      })
    )
    .addChild(
      new _classes__WEBPACK_IMPORTED_MODULE_0__.Element("fieldset")
        .addChild(new _classes__WEBPACK_IMPORTED_MODULE_0__.Element("legend").setTextContent("Choose a priority"))
        .addChild((0,_utilities__WEBPACK_IMPORTED_MODULE_2__.createFormDiv)("low", "priority", true))
        .addChild((0,_utilities__WEBPACK_IMPORTED_MODULE_2__.createFormDiv)("medium", "priority", false))
        .addChild((0,_utilities__WEBPACK_IMPORTED_MODULE_2__.createFormDiv)("high", "priority", false))
    )
    .addChild(
      new _classes__WEBPACK_IMPORTED_MODULE_0__.Element("fieldset")
        .addChild(
          new _classes__WEBPACK_IMPORTED_MODULE_0__.Element("legend").setTextContent("Have you completed this task?")
        )
        .addChild((0,_utilities__WEBPACK_IMPORTED_MODULE_2__.createFormDiv)("yes", "completed", true))
        .addChild((0,_utilities__WEBPACK_IMPORTED_MODULE_2__.createFormDiv)("no", "completed", false))
    )
    .addChild(
      new _classes__WEBPACK_IMPORTED_MODULE_0__.Element("button")
        .setAttributes({
          type: "button",
          class: "form-btn",
          id: "todo-form-btn",
        })
        .appendEventListener("click", (e) => (0,_index__WEBPACK_IMPORTED_MODULE_1__.handleNewToDoSubmit)(project))
        .setTextContent("Submit")
    )
    .buildElement();
}

function displayEditToDoForm(toDoItem) {
  return new _classes__WEBPACK_IMPORTED_MODULE_0__.Element("form")
    .setAttributes({ class: "form", id: "edit-todo-form" })
    .addChild(
      new _classes__WEBPACK_IMPORTED_MODULE_0__.Element("input").setAttributes({
        type: "text",
        class: "form-input",
        id: "todo-name",
        value: toDoItem.name,
        placeholder: "Name your to-do",
        required: "required",
      })
    )
    .addChild(
      new _classes__WEBPACK_IMPORTED_MODULE_0__.Element("label")
        .setAttributes({ for: "due-date" })
        .setTextContent("Pick a due date:")
    )
    .addChild(
      new _classes__WEBPACK_IMPORTED_MODULE_0__.Element("input").setAttributes({
        type: "date",
        id: "due-date",
        name: "due-date",
        value: toDoItem.dateString,
        min: `${Object(function webpackMissingModule() { var e = new Error("Cannot find module 'date-fns'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(new Date())}`,
        max: "undefined",
      })
    )
    .addChild(
      new _classes__WEBPACK_IMPORTED_MODULE_0__.Element("fieldset")
        .addChild(new _classes__WEBPACK_IMPORTED_MODULE_0__.Element("legend").setTextContent("Choose a priority"))
        .addChild((0,_utilities__WEBPACK_IMPORTED_MODULE_2__.createFormDiv)("low", "priority", toDoItem.priority === "low"))
        .addChild(
          (0,_utilities__WEBPACK_IMPORTED_MODULE_2__.createFormDiv)("medium", "priority", toDoItem.priority === "medium")
        )
        .addChild(
          (0,_utilities__WEBPACK_IMPORTED_MODULE_2__.createFormDiv)("high", "priority", toDoItem.priority === "high")
        )
    )
    .addChild(
      new _classes__WEBPACK_IMPORTED_MODULE_0__.Element("fieldset")
        .addChild(
          new _classes__WEBPACK_IMPORTED_MODULE_0__.Element("legend").setTextContent("Have you completed this task?")
        )
        .addChild(
          (0,_utilities__WEBPACK_IMPORTED_MODULE_2__.createFormDiv)("yes", "completed", toDoItem.isCompleted === "yes")
        )
        .addChild(
          (0,_utilities__WEBPACK_IMPORTED_MODULE_2__.createFormDiv)("no", "completed", toDoItem.isCompleted === "no")
        )
    )
    .addChild(
      new _classes__WEBPACK_IMPORTED_MODULE_0__.Element("button")
        .setAttributes({
          type: "button",
          class: "form-btn",
          id: "todo-form-btn",
        })
        .appendEventListener("click", (e) => (0,_index__WEBPACK_IMPORTED_MODULE_1__.handleEditToDoSubmit)(toDoItem))
        .setTextContent("Submit")
    )
    .buildElement();
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
/* harmony export */   "ToDo": () => (/* binding */ ToDo),
/* harmony export */   "default": () => (/* binding */ Project)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.js");
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'date-fns'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());


class Project {
  constructor(name, id) {
    this.name = name;
    this.id = id;
    this.toDos = [];
  }

  appendToDo(toDo) {
    this.toDos.push(toDo);
  }

  // buildVirtualBoi() {
  //   return this.toDos.reduce(
  //     (virtualProject, list) => virtualProject.addChild(list.buildVirtualBoi()),
  //     new Element("div")
  //       .setAttributes({
  //         class: "project",
  //         id: `Project-${this.id}`,
  //       })
  //       .addChild(new Element("h1").setTextContent(`${this.name}`))
  //       .addChild(
  //         new Element("button")
  //           .setAttributes({
  //             type: "button",
  //             class: "add-list-btn",
  //             id: `${this.name}-add-list-btn`,
  //           })
  //           .appendEventListener("click", (e) => handleAddToDo(e, this))
  //           .setTextContent("Add to-do")
  //       )
  //   );
  // }

  getAllToDosInInterval(interval) {
    return this.toDos.filter(
      (toDo) => !toDo.date || Object(function webpackMissingModule() { var e = new Error("Cannot find module 'date-fns'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(toDo.date, interval)
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

  set date(newDate) {
    this.dueDate =
      typeof newDate === "string"
        ? Object(function webpackMissingModule() { var e = new Error("Cannot find module 'date-fns'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(newDate, "yyyy-MM-dd", new Date())
        : newDate;
  }

  get date() {
    return this.dueDate;
  }

  get dateString() {
    return Object(function webpackMissingModule() { var e = new Error("Cannot find module 'date-fns'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(this.dueDate, "yyyy-MM-dd");
  }

  buildVirtualBoi(project) {
    const cleanButStainedTupperware = new Element("li");
    cleanButStainedTupperware
      .addChild(new Element("h2").setTextContent(this.name))
      .addChild(new Element("h3").setTextContent(`Priority: ${this.priority}`))
      .addChild(new Element("h4").setTextContent(`Project: ${project.name}`))
      .addChild(new Element("p").setTextContent(this.getFormattedDate()))
      .addChild(
        new Element("p").setTextContent(`Completed: ${this.isCompleted}`)
      )
      .addChild(
        new Element("button")
          .setAttributes({ type: "button", id: "edit-todo-btn" })
          .setTextContent("Edit this to do item")
          .appendEventListener("click", (e) => (0,_index__WEBPACK_IMPORTED_MODULE_0__.handleEditToDo)(e, this))
      );

    return cleanButStainedTupperware;
  }

  getFormattedDate() {
    return Object(function webpackMissingModule() { var e = new Error("Cannot find module 'date-fns'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(this.date) ? Object(function webpackMissingModule() { var e = new Error("Cannot find module 'date-fns'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(this.date, "EEEE dd MMM y") : "";
  }
}

class Element {
  constructor(elementType) {
    this.elementType = elementType;
    this.attributes = {};
    this.children = [];
    this.eventListeners = {};
  }

  buildElement() {
    // Create element in DOM
    const realBoi = document.createElement(this.elementType);

    // Add attributes to element
    for (const attribute in this.attributes) {
      if (
        this.attributes[attribute] === true ||
        this.attributes[attribute] === false
      ) {
        realBoi.toggleAttribute(attribute, this.attributes[attribute]);
      } else {
        realBoi.setAttribute(attribute, this.attributes[attribute]);
      }
    }

    // Add event listeners:
    for (const ev in this.eventListeners) {
      this.eventListeners[ev].forEach((cb) => {
        realBoi.addEventListener(ev, cb);
      });
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

  appendEventListener(event, callback) {
    if (this.eventListeners[event]) {
      this.eventListeners[event].push(callback);
    } else {
      this.eventListeners[event] = [callback];
    }
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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "appendCurrentToDoBtn": () => (/* binding */ appendCurrentToDoBtn),
/* harmony export */   "getSelectedProjects": () => (/* binding */ getSelectedProjects),
/* harmony export */   "handleAddToDo": () => (/* binding */ handleAddToDo),
/* harmony export */   "handleEditToDo": () => (/* binding */ handleEditToDo),
/* harmony export */   "handleEditToDoSubmit": () => (/* binding */ handleEditToDoSubmit),
/* harmony export */   "handleNewToDoSubmit": () => (/* binding */ handleNewToDoSubmit)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module './stylesheet.css'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _loadTabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loadTabs */ "./src/loadTabs.js");
/* harmony import */ var _UIhandlers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UIhandlers */ "./src/UIhandlers.js");
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utilities */ "./src/utilities.js");
/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./classes */ "./src/classes.js");
// Imports








// Globals:
let currentProject;
const contentDiv = document.querySelector(".content");
const projectBtn = document.querySelector(".add-project-btn");
const todayTabBtn = document.querySelector(".today-tab");
const weekTabBtn = document.querySelector(".week-tab");
const monthTabBtn = document.querySelector(".month-tab");
const yearTabBtn = document.querySelector(".year-tab");
const allTimeTabBtn = document.querySelector(".all-time-tab");
// const projectsTabBtn = document.querySelector(".projects-tab");
let addProjectForm;

// Test cases
let testProject = new _classes__WEBPACK_IMPORTED_MODULE_4__["default"]("My Project", undefined);

let testToDo1 = new _classes__WEBPACK_IMPORTED_MODULE_4__.ToDo("My 1st To Do", "high", false, new Date());
let testToDo2 = new _classes__WEBPACK_IMPORTED_MODULE_4__.ToDo(
  "tigOlBitties",
  "low",
  true,
  new Date("November 5, 2022")
);
let testToDo3 = new _classes__WEBPACK_IMPORTED_MODULE_4__.ToDo("test-2", "low", true, new Date("October 5, 2022"));

testProject.appendToDo(testToDo1);
testProject.appendToDo(testToDo2);
testProject.appendToDo(testToDo3);
_classes__WEBPACK_IMPORTED_MODULE_4__.Librarian.addProject(testProject);

// let tiddies = new Project("My Tiddies Project", undefined);
// // let testList2 = new List("My Tiddies List");
// let testToDo4 = new ToDo("Bake a Pie", "high", false, new Date());
// let testToDo5 = new ToDo(
//   "tigOlBitties",
//   "low",
//   true,
//   new Date("November 26, 2022")
// );
// let testToDo6 = new ToDo("test-2", "low", true, new Date("October 11, 2022"));

// testList2.appendItemToListArray(testToDo4);
// testList2.appendItemToListArray(testToDo5);
// testList2.appendItemToListArray(testToDo6);

// tiddies.appendList(testList2);
// Librarian.addProject(tiddies);
// contentDiv.appendChild(loadAll(Librarian.getAllProjects()).buildElement());
// END TEST

// On Page Load
(0,_loadTabs__WEBPACK_IMPORTED_MODULE_1__.rebuildCurrentTab)(_classes__WEBPACK_IMPORTED_MODULE_4__.Librarian.getAllProjects(), contentDiv);
rebuildProjectListContainer(contentDiv);
currentProject = undefined;

// Functions:
function handleNewProjectSubmit() {
  let projectFormInput = document.querySelector("#project-name");

  // Make project and give to Librarian
  const newProject = new _classes__WEBPACK_IMPORTED_MODULE_4__["default"](projectFormInput.value);
  _classes__WEBPACK_IMPORTED_MODULE_4__.Librarian.addProject(newProject);

  // Rebuild UI
  (0,_utilities__WEBPACK_IMPORTED_MODULE_3__.rebuildProjectFormContainer)();
  rebuildProjectListContainer(contentDiv);
  (0,_loadTabs__WEBPACK_IMPORTED_MODULE_1__.rebuildCurrentTab)(getSelectedProjects(), contentDiv);
}

function handleAddProject() {
  addProjectForm = (0,_UIhandlers__WEBPACK_IMPORTED_MODULE_2__["default"])();

  let formContainer = document.querySelector(".form-container");
  formContainer.appendChild(addProjectForm);

  const projectSubmitBtn = document.querySelector("#project-form-btn");

  projectSubmitBtn.addEventListener("click", () => {
    handleNewProjectSubmit();
  });
}

function handleNewToDoSubmit(project) {
  let addToDoForm = document.querySelector("#add-todo-form");

  const newToDo = new _classes__WEBPACK_IMPORTED_MODULE_4__.ToDo(
    addToDoForm["todo-name"].value,
    addToDoForm["priority"].value,
    addToDoForm["completed"].value,
    addToDoForm["due-date"].value
  );

  project.appendToDo(newToDo);

  (0,_loadTabs__WEBPACK_IMPORTED_MODULE_1__.rebuildCurrentTab)(getSelectedProjects(), contentDiv);
}

function handleAddToDo(e, project) {
  const ā̷̔r̴͐́ť̷͊h̶̙̊v̸̍͆ả̸͘d̷̎̄r̴̄͂r̸̀̐_̶̅͝ẇ̸̑a̵̬̎ș̴̃_̴̄̒h̵̽̐ȩ̴̑ŕ̵̄ë̶́̕ = (0,_UIhandlers__WEBPACK_IMPORTED_MODULE_2__.displayToDoForm)(project);
  e.target.parentElement.appendChild(ā̷̔r̴͐́ť̷͊h̶̙̊v̸̍͆ả̸͘d̷̎̄r̴̄͂r̸̀̐_̶̅͝ẇ̸̑a̵̬̎ș̴̃_̴̄̒h̵̽̐ȩ̴̑ŕ̵̄ë̶́̕);
}

function handleEditToDoSubmit(toDoItem) {
  let editToDoForm = document.querySelector("#edit-todo-form");

  toDoItem.name = editToDoForm["todo-name"].value;
  toDoItem.priority = editToDoForm["priority"].value;
  toDoItem.isCompleted = editToDoForm["completed"].value;
  toDoItem.date = editToDoForm["due-date"].value;

  (0,_loadTabs__WEBPACK_IMPORTED_MODULE_1__.rebuildCurrentTab)(_classes__WEBPACK_IMPORTED_MODULE_4__.Librarian.getAllProjects(), contentDiv);
}

function handleEditToDo(e, toDoItem) {
  const editToDoForm = (0,_UIhandlers__WEBPACK_IMPORTED_MODULE_2__.displayEditToDoForm)(toDoItem);

  e.target.parentElement.appendChild(editToDoForm);
}

function rebuildProjectListContainer(contentDiv) {
  const projectListContainer = document.querySelector(
    ".project-list-container"
  );
  projectListContainer.textContent = "";

  const strLngDoubleFloat = _classes__WEBPACK_IMPORTED_MODULE_4__.Librarian.getAllProjects();

  const virtualBoiUL = strLngDoubleFloat.reduce(
    (virtualUL, project) => virtualUL.addChild(createProjectLi(project)),
    new _classes__WEBPACK_IMPORTED_MODULE_4__.Element("ul")
      .setAttributes({
        class: "projects-list",
      })
      .addChild(createProjectLi())
  );

  projectListContainer.appendChild(virtualBoiUL.buildElement());
}

function createProjectLi(project) {
  return new _classes__WEBPACK_IMPORTED_MODULE_4__.Element("li")
    .setAttributes({ class: "project-list-item" })
    .setTextContent(project?.name ?? "All Projects")
    .appendEventListener("click", (e) => {
      currentProject = project;
      (0,_loadTabs__WEBPACK_IMPORTED_MODULE_1__.rebuildCurrentTab)(getSelectedProjects(), contentDiv);
    });
}

function getSelectedProjects() {
  if (!currentProject) {
    return _classes__WEBPACK_IMPORTED_MODULE_4__.Librarian.getAllProjects();
  } else {
    return [currentProject];
  }
}

function appendCurrentToDoBtn() {
  if (!currentProject) {
    return;
  }

  contentDiv.appendChild(
    new _classes__WEBPACK_IMPORTED_MODULE_4__.Element("button")
      .setAttributes({ class: "add-to-do-btn" })
      .setTextContent("Add To Do Item")
      .appendEventListener("click", (e) => handleAddToDo(e, currentProject))
      .buildElement()
  );
}

// Event Listeners:
projectBtn.addEventListener("click", handleAddProject);
todayTabBtn.addEventListener("click", () =>
  (0,_loadTabs__WEBPACK_IMPORTED_MODULE_1__.rebuildTab)(getSelectedProjects(), _loadTabs__WEBPACK_IMPORTED_MODULE_1__["default"], contentDiv)
);
weekTabBtn.addEventListener("click", () =>
  (0,_loadTabs__WEBPACK_IMPORTED_MODULE_1__.rebuildTab)(getSelectedProjects(), _loadTabs__WEBPACK_IMPORTED_MODULE_1__.loadWeek, contentDiv)
);
monthTabBtn.addEventListener("click", () =>
  (0,_loadTabs__WEBPACK_IMPORTED_MODULE_1__.rebuildTab)(getSelectedProjects(), _loadTabs__WEBPACK_IMPORTED_MODULE_1__.loadMonth, contentDiv)
);
yearTabBtn.addEventListener("click", () =>
  (0,_loadTabs__WEBPACK_IMPORTED_MODULE_1__.rebuildTab)(getSelectedProjects(), _loadTabs__WEBPACK_IMPORTED_MODULE_1__.loadYear, contentDiv)
);
allTimeTabBtn.addEventListener("click", () =>
  (0,_loadTabs__WEBPACK_IMPORTED_MODULE_1__.rebuildTab)(getSelectedProjects(), _loadTabs__WEBPACK_IMPORTED_MODULE_1__.loadAllTime, contentDiv)
);
// projectsTabBtn.addEventListener("click", () =>
//   rebuildTab(Librarian.getAllProjects(), loadAll, contentDiv)
// );


/***/ }),

/***/ "./src/loadTabs.js":
/*!*************************!*\
  !*** ./src/loadTabs.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadToday),
/* harmony export */   "loadAllTime": () => (/* binding */ loadAllTime),
/* harmony export */   "loadMonth": () => (/* binding */ loadMonth),
/* harmony export */   "loadWeek": () => (/* binding */ loadWeek),
/* harmony export */   "loadYear": () => (/* binding */ loadYear),
/* harmony export */   "rebuildCurrentTab": () => (/* binding */ rebuildCurrentTab),
/* harmony export */   "rebuildTab": () => (/* binding */ rebuildTab)
/* harmony export */ });
/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes */ "./src/classes.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./src/index.js");
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'date-fns'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());




let currentTabLoader = loadToday;

// Returns a built element based on interval and projectsArray[]:
function buildTab(hipHip, interval, divId, headingText) {
  const intervalToDos = hipHip.flatMap((project) =>
    project.getAllToDosInInterval(interval).map((toDo) => ({ toDo, project }))
  );

  const intervalToDosUI = intervalToDos.reduce(
    (virtualUl, toDoObject) =>
      virtualUl.addChild(toDoObject.toDo.buildVirtualBoi(toDoObject.project)),
    new _classes__WEBPACK_IMPORTED_MODULE_0__.Element("ul").setAttributes({ id: "today" })
  );

  return new _classes__WEBPACK_IMPORTED_MODULE_0__.Element("div")
    .setAttributes({
      class: "date-tab",
      id: divId,
    })
    .addChild(new _classes__WEBPACK_IMPORTED_MODULE_0__.Element("h1").setTextContent(headingText))
    .addChild(intervalToDosUI);
}

function rebuildTab(projectsArray, loaderFunc, contentDiv) {
  contentDiv.textContent = "";
  (0,_index__WEBPACK_IMPORTED_MODULE_1__.appendCurrentToDoBtn)();
  contentDiv.appendChild(loaderFunc(projectsArray).buildElement());
}

function rebuildCurrentTab(projectsArray, contentDiv) {
  rebuildTab(projectsArray, currentTabLoader, contentDiv);
}

// Creates interval of range within today to be used by buildTab()
function loadToday(projectsArray) {
  currentTabLoader = loadToday;

  const interval = {
    start: Object(function webpackMissingModule() { var e = new Error("Cannot find module 'date-fns'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(),
    end: Object(function webpackMissingModule() { var e = new Error("Cannot find module 'date-fns'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(),
  };

  return buildTab(projectsArray, interval, "today-tab", "Today");
}

// Creates interval of range within the next week to be used in buildTab()
function loadWeek(projectsArray) {
  currentTabLoader = loadWeek;
  const rightJoin = new Date();

  const interval = {
    start: Object(function webpackMissingModule() { var e = new Error("Cannot find module 'date-fns'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(rightJoin),
    end: Object(function webpackMissingModule() { var e = new Error("Cannot find module 'date-fns'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(rightJoin),
  };

  return buildTab(projectsArray, interval, "week-tab", "This Week");
}

function loadMonth(projectsArray) {
  currentTabLoader = loadMonth;
  const now = new Date();

  const interval = { start: Object(function webpackMissingModule() { var e = new Error("Cannot find module 'date-fns'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(now), end: Object(function webpackMissingModule() { var e = new Error("Cannot find module 'date-fns'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(now) };
  return buildTab(projectsArray, interval, "month-tab", "This Month");
}

function loadYear(projectsArray) {
  currentTabLoader = loadYear;
  const now = new Date();
  const interval = { start: Object(function webpackMissingModule() { var e = new Error("Cannot find module 'date-fns'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(now), end: Object(function webpackMissingModule() { var e = new Error("Cannot find module 'date-fns'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(now) };

  return buildTab(projectsArray, interval, "year-tab", "This Year");
}

function loadAllTime(projectsArray) {
  currentTabLoader = loadAllTime;

  const interval = { start: new Date(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'date-fns'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())), end: new Date(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'date-fns'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())) };

  return buildTab(projectsArray, interval, "all-time-tab", "All Time");
}


/***/ }),

/***/ "./src/utilities.js":
/*!**************************!*\
  !*** ./src/utilities.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createFormDiv": () => (/* binding */ createFormDiv),
/* harmony export */   "rebuildProjectFormContainer": () => (/* binding */ rebuildProjectFormContainer)
/* harmony export */ });
/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes */ "./src/classes.js");


function rebuildProjectFormContainer() {
  const formContainer = document.querySelector(".form-container");
  formContainer.textContent = "";
}

function createFormDiv(id, name, checked) {
  return new _classes__WEBPACK_IMPORTED_MODULE_0__.Element("div")
    .addChild(
      new _classes__WEBPACK_IMPORTED_MODULE_0__.Element("input").setAttributes({
        type: "radio",
        id: id,
        name: name,
        value: id,
        checked: checked,
      })
    )
    .addChild(
      new _classes__WEBPACK_IMPORTED_MODULE_0__.Element("label").setAttributes({ for: id }).setTextContent(id)
    );
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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NkNBQU8sMEJBQTBCLFNBQVM7QUFDcEQ7QUFDQTs7Ozs7OztVQ3JCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7VUVOQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3JlcG9zLy4vc3JjL1VJaGFuZGxlcnMuanMiLCJ3ZWJwYWNrOi8vcmVwb3MvLi9zcmMvY2xhc3Nlcy5qcyIsIndlYnBhY2s6Ly9yZXBvcy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9yZXBvcy8uL3NyYy9sb2FkVGFicy5qcyIsIndlYnBhY2s6Ly9yZXBvcy8uL3NyYy91dGlsaXRpZXMuanMiLCJ3ZWJwYWNrOi8vcmVwb3Mvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVwb3Mvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3JlcG9zL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVwb3Mvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXBvcy93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3JlcG9zL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9yZXBvcy93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCIuL2NsYXNzZXNcIjtcbmltcG9ydCB7IGhhbmRsZUVkaXRUb0RvU3VibWl0IH0gZnJvbSBcIi4vaW5kZXhcIjtcbmltcG9ydCB7IGhhbmRsZU5ld1RvRG9TdWJtaXQgfSBmcm9tIFwiLi9pbmRleFwiO1xuaW1wb3J0IHsgY3JlYXRlRm9ybURpdiB9IGZyb20gXCIuL3V0aWxpdGllc1wiO1xuaW1wb3J0IHsgZm9ybWF0LCBzdGFydE9mWWVhciB9IGZyb20gXCJkYXRlLWZuc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkaXNwbGF5UHJvamVjdEZvcm0oKSB7XG4gIGlmICghZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3JtXCIpKSB7XG4gICAgcmV0dXJuIG5ldyBFbGVtZW50KFwiZm9ybVwiKVxuICAgICAgLnNldEF0dHJpYnV0ZXMoeyBjbGFzczogXCJmb3JtXCIsIGlkOiBcImFkZC1wcm9qZWN0LWZvcm1cIiB9KVxuICAgICAgLmFkZENoaWxkKFxuICAgICAgICBuZXcgRWxlbWVudChcImlucHV0XCIpLnNldEF0dHJpYnV0ZXMoe1xuICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgICAgIGNsYXNzOiBcImZvcm0taW5wdXRcIixcbiAgICAgICAgICBpZDogXCJwcm9qZWN0LW5hbWVcIixcbiAgICAgICAgICBwbGFjZWhvbGRlcjogXCJOYW1lIHlvdXIgcHJvamVjdFwiLFxuICAgICAgICAgIHJlcXVpcmVkOiBcInJlcXVpcmVkXCIsXG4gICAgICAgIH0pXG4gICAgICApXG4gICAgICAuYWRkQ2hpbGQoXG4gICAgICAgIG5ldyBFbGVtZW50KFwiYnV0dG9uXCIpXG4gICAgICAgICAgLnNldEF0dHJpYnV0ZXMoe1xuICAgICAgICAgICAgdHlwZTogXCJidXR0b25cIixcbiAgICAgICAgICAgIGNsYXNzOiBcImZvcm0tYnRuXCIsXG4gICAgICAgICAgICBpZDogXCJwcm9qZWN0LWZvcm0tYnRuXCIsXG4gICAgICAgICAgfSlcbiAgICAgICAgICAuc2V0VGV4dENvbnRlbnQoXCJTdWJtaXRcIilcbiAgICAgIClcbiAgICAgIC5idWlsZEVsZW1lbnQoKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm47XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlUb0RvRm9ybShwcm9qZWN0KSB7XG4gIHJldHVybiBuZXcgRWxlbWVudChcImZvcm1cIilcbiAgICAuc2V0QXR0cmlidXRlcyh7IGNsYXNzOiBcImZvcm1cIiwgaWQ6IFwiYWRkLXRvZG8tZm9ybVwiIH0pXG4gICAgLmFkZENoaWxkKFxuICAgICAgbmV3IEVsZW1lbnQoXCJpbnB1dFwiKS5zZXRBdHRyaWJ1dGVzKHtcbiAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgIGNsYXNzOiBcImZvcm0taW5wdXRcIixcbiAgICAgICAgaWQ6IFwidG9kby1uYW1lXCIsXG4gICAgICAgIHBsYWNlaG9sZGVyOiBcIk5hbWUgeW91ciB0by1kb1wiLFxuICAgICAgICByZXF1aXJlZDogXCJyZXF1aXJlZFwiLFxuICAgICAgfSlcbiAgICApXG4gICAgLmFkZENoaWxkKFxuICAgICAgbmV3IEVsZW1lbnQoXCJsYWJlbFwiKVxuICAgICAgICAuc2V0QXR0cmlidXRlcyh7IGZvcjogXCJkdWUtZGF0ZVwiIH0pXG4gICAgICAgIC5zZXRUZXh0Q29udGVudChcIlBpY2sgYSBkdWUgZGF0ZTpcIilcbiAgICApXG4gICAgLmFkZENoaWxkKFxuICAgICAgbmV3IEVsZW1lbnQoXCJpbnB1dFwiKS5zZXRBdHRyaWJ1dGVzKHtcbiAgICAgICAgdHlwZTogXCJkYXRlXCIsXG4gICAgICAgIGlkOiBcImR1ZS1kYXRlXCIsXG4gICAgICAgIG5hbWU6IFwiZHVlLWRhdGVcIixcbiAgICAgICAgdmFsdWU6IGAke25ldyBEYXRlKCl9YCxcbiAgICAgICAgbWluOiBgJHtzdGFydE9mWWVhcihuZXcgRGF0ZSgpKX1gLFxuICAgICAgICBtYXg6IFwidW5kZWZpbmVkXCIsXG4gICAgICB9KVxuICAgIClcbiAgICAuYWRkQ2hpbGQoXG4gICAgICBuZXcgRWxlbWVudChcImZpZWxkc2V0XCIpXG4gICAgICAgIC5hZGRDaGlsZChuZXcgRWxlbWVudChcImxlZ2VuZFwiKS5zZXRUZXh0Q29udGVudChcIkNob29zZSBhIHByaW9yaXR5XCIpKVxuICAgICAgICAuYWRkQ2hpbGQoY3JlYXRlRm9ybURpdihcImxvd1wiLCBcInByaW9yaXR5XCIsIHRydWUpKVxuICAgICAgICAuYWRkQ2hpbGQoY3JlYXRlRm9ybURpdihcIm1lZGl1bVwiLCBcInByaW9yaXR5XCIsIGZhbHNlKSlcbiAgICAgICAgLmFkZENoaWxkKGNyZWF0ZUZvcm1EaXYoXCJoaWdoXCIsIFwicHJpb3JpdHlcIiwgZmFsc2UpKVxuICAgIClcbiAgICAuYWRkQ2hpbGQoXG4gICAgICBuZXcgRWxlbWVudChcImZpZWxkc2V0XCIpXG4gICAgICAgIC5hZGRDaGlsZChcbiAgICAgICAgICBuZXcgRWxlbWVudChcImxlZ2VuZFwiKS5zZXRUZXh0Q29udGVudChcIkhhdmUgeW91IGNvbXBsZXRlZCB0aGlzIHRhc2s/XCIpXG4gICAgICAgIClcbiAgICAgICAgLmFkZENoaWxkKGNyZWF0ZUZvcm1EaXYoXCJ5ZXNcIiwgXCJjb21wbGV0ZWRcIiwgdHJ1ZSkpXG4gICAgICAgIC5hZGRDaGlsZChjcmVhdGVGb3JtRGl2KFwibm9cIiwgXCJjb21wbGV0ZWRcIiwgZmFsc2UpKVxuICAgIClcbiAgICAuYWRkQ2hpbGQoXG4gICAgICBuZXcgRWxlbWVudChcImJ1dHRvblwiKVxuICAgICAgICAuc2V0QXR0cmlidXRlcyh7XG4gICAgICAgICAgdHlwZTogXCJidXR0b25cIixcbiAgICAgICAgICBjbGFzczogXCJmb3JtLWJ0blwiLFxuICAgICAgICAgIGlkOiBcInRvZG8tZm9ybS1idG5cIixcbiAgICAgICAgfSlcbiAgICAgICAgLmFwcGVuZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4gaGFuZGxlTmV3VG9Eb1N1Ym1pdChwcm9qZWN0KSlcbiAgICAgICAgLnNldFRleHRDb250ZW50KFwiU3VibWl0XCIpXG4gICAgKVxuICAgIC5idWlsZEVsZW1lbnQoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlFZGl0VG9Eb0Zvcm0odG9Eb0l0ZW0pIHtcbiAgcmV0dXJuIG5ldyBFbGVtZW50KFwiZm9ybVwiKVxuICAgIC5zZXRBdHRyaWJ1dGVzKHsgY2xhc3M6IFwiZm9ybVwiLCBpZDogXCJlZGl0LXRvZG8tZm9ybVwiIH0pXG4gICAgLmFkZENoaWxkKFxuICAgICAgbmV3IEVsZW1lbnQoXCJpbnB1dFwiKS5zZXRBdHRyaWJ1dGVzKHtcbiAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgIGNsYXNzOiBcImZvcm0taW5wdXRcIixcbiAgICAgICAgaWQ6IFwidG9kby1uYW1lXCIsXG4gICAgICAgIHZhbHVlOiB0b0RvSXRlbS5uYW1lLFxuICAgICAgICBwbGFjZWhvbGRlcjogXCJOYW1lIHlvdXIgdG8tZG9cIixcbiAgICAgICAgcmVxdWlyZWQ6IFwicmVxdWlyZWRcIixcbiAgICAgIH0pXG4gICAgKVxuICAgIC5hZGRDaGlsZChcbiAgICAgIG5ldyBFbGVtZW50KFwibGFiZWxcIilcbiAgICAgICAgLnNldEF0dHJpYnV0ZXMoeyBmb3I6IFwiZHVlLWRhdGVcIiB9KVxuICAgICAgICAuc2V0VGV4dENvbnRlbnQoXCJQaWNrIGEgZHVlIGRhdGU6XCIpXG4gICAgKVxuICAgIC5hZGRDaGlsZChcbiAgICAgIG5ldyBFbGVtZW50KFwiaW5wdXRcIikuc2V0QXR0cmlidXRlcyh7XG4gICAgICAgIHR5cGU6IFwiZGF0ZVwiLFxuICAgICAgICBpZDogXCJkdWUtZGF0ZVwiLFxuICAgICAgICBuYW1lOiBcImR1ZS1kYXRlXCIsXG4gICAgICAgIHZhbHVlOiB0b0RvSXRlbS5kYXRlU3RyaW5nLFxuICAgICAgICBtaW46IGAke3N0YXJ0T2ZZZWFyKG5ldyBEYXRlKCkpfWAsXG4gICAgICAgIG1heDogXCJ1bmRlZmluZWRcIixcbiAgICAgIH0pXG4gICAgKVxuICAgIC5hZGRDaGlsZChcbiAgICAgIG5ldyBFbGVtZW50KFwiZmllbGRzZXRcIilcbiAgICAgICAgLmFkZENoaWxkKG5ldyBFbGVtZW50KFwibGVnZW5kXCIpLnNldFRleHRDb250ZW50KFwiQ2hvb3NlIGEgcHJpb3JpdHlcIikpXG4gICAgICAgIC5hZGRDaGlsZChjcmVhdGVGb3JtRGl2KFwibG93XCIsIFwicHJpb3JpdHlcIiwgdG9Eb0l0ZW0ucHJpb3JpdHkgPT09IFwibG93XCIpKVxuICAgICAgICAuYWRkQ2hpbGQoXG4gICAgICAgICAgY3JlYXRlRm9ybURpdihcIm1lZGl1bVwiLCBcInByaW9yaXR5XCIsIHRvRG9JdGVtLnByaW9yaXR5ID09PSBcIm1lZGl1bVwiKVxuICAgICAgICApXG4gICAgICAgIC5hZGRDaGlsZChcbiAgICAgICAgICBjcmVhdGVGb3JtRGl2KFwiaGlnaFwiLCBcInByaW9yaXR5XCIsIHRvRG9JdGVtLnByaW9yaXR5ID09PSBcImhpZ2hcIilcbiAgICAgICAgKVxuICAgIClcbiAgICAuYWRkQ2hpbGQoXG4gICAgICBuZXcgRWxlbWVudChcImZpZWxkc2V0XCIpXG4gICAgICAgIC5hZGRDaGlsZChcbiAgICAgICAgICBuZXcgRWxlbWVudChcImxlZ2VuZFwiKS5zZXRUZXh0Q29udGVudChcIkhhdmUgeW91IGNvbXBsZXRlZCB0aGlzIHRhc2s/XCIpXG4gICAgICAgIClcbiAgICAgICAgLmFkZENoaWxkKFxuICAgICAgICAgIGNyZWF0ZUZvcm1EaXYoXCJ5ZXNcIiwgXCJjb21wbGV0ZWRcIiwgdG9Eb0l0ZW0uaXNDb21wbGV0ZWQgPT09IFwieWVzXCIpXG4gICAgICAgIClcbiAgICAgICAgLmFkZENoaWxkKFxuICAgICAgICAgIGNyZWF0ZUZvcm1EaXYoXCJub1wiLCBcImNvbXBsZXRlZFwiLCB0b0RvSXRlbS5pc0NvbXBsZXRlZCA9PT0gXCJub1wiKVxuICAgICAgICApXG4gICAgKVxuICAgIC5hZGRDaGlsZChcbiAgICAgIG5ldyBFbGVtZW50KFwiYnV0dG9uXCIpXG4gICAgICAgIC5zZXRBdHRyaWJ1dGVzKHtcbiAgICAgICAgICB0eXBlOiBcImJ1dHRvblwiLFxuICAgICAgICAgIGNsYXNzOiBcImZvcm0tYnRuXCIsXG4gICAgICAgICAgaWQ6IFwidG9kby1mb3JtLWJ0blwiLFxuICAgICAgICB9KVxuICAgICAgICAuYXBwZW5kRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiBoYW5kbGVFZGl0VG9Eb1N1Ym1pdCh0b0RvSXRlbSkpXG4gICAgICAgIC5zZXRUZXh0Q29udGVudChcIlN1Ym1pdFwiKVxuICAgIClcbiAgICAuYnVpbGRFbGVtZW50KCk7XG59XG4iLCJpbXBvcnQgeyBoYW5kbGVBZGRUb0RvLCBoYW5kbGVFZGl0VG9EbyB9IGZyb20gXCIuL2luZGV4XCI7XG5pbXBvcnQgeyBpc1dpdGhpbkludGVydmFsLCBwYXJzZSwgZm9ybWF0LCBpc1ZhbGlkLCBpc01hdGNoIH0gZnJvbSBcImRhdGUtZm5zXCI7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9qZWN0IHtcbiAgY29uc3RydWN0b3IobmFtZSwgaWQpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuaWQgPSBpZDtcbiAgICB0aGlzLnRvRG9zID0gW107XG4gIH1cblxuICBhcHBlbmRUb0RvKHRvRG8pIHtcbiAgICB0aGlzLnRvRG9zLnB1c2godG9Ebyk7XG4gIH1cblxuICAvLyBidWlsZFZpcnR1YWxCb2koKSB7XG4gIC8vICAgcmV0dXJuIHRoaXMudG9Eb3MucmVkdWNlKFxuICAvLyAgICAgKHZpcnR1YWxQcm9qZWN0LCBsaXN0KSA9PiB2aXJ0dWFsUHJvamVjdC5hZGRDaGlsZChsaXN0LmJ1aWxkVmlydHVhbEJvaSgpKSxcbiAgLy8gICAgIG5ldyBFbGVtZW50KFwiZGl2XCIpXG4gIC8vICAgICAgIC5zZXRBdHRyaWJ1dGVzKHtcbiAgLy8gICAgICAgICBjbGFzczogXCJwcm9qZWN0XCIsXG4gIC8vICAgICAgICAgaWQ6IGBQcm9qZWN0LSR7dGhpcy5pZH1gLFxuICAvLyAgICAgICB9KVxuICAvLyAgICAgICAuYWRkQ2hpbGQobmV3IEVsZW1lbnQoXCJoMVwiKS5zZXRUZXh0Q29udGVudChgJHt0aGlzLm5hbWV9YCkpXG4gIC8vICAgICAgIC5hZGRDaGlsZChcbiAgLy8gICAgICAgICBuZXcgRWxlbWVudChcImJ1dHRvblwiKVxuICAvLyAgICAgICAgICAgLnNldEF0dHJpYnV0ZXMoe1xuICAvLyAgICAgICAgICAgICB0eXBlOiBcImJ1dHRvblwiLFxuICAvLyAgICAgICAgICAgICBjbGFzczogXCJhZGQtbGlzdC1idG5cIixcbiAgLy8gICAgICAgICAgICAgaWQ6IGAke3RoaXMubmFtZX0tYWRkLWxpc3QtYnRuYCxcbiAgLy8gICAgICAgICAgIH0pXG4gIC8vICAgICAgICAgICAuYXBwZW5kRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiBoYW5kbGVBZGRUb0RvKGUsIHRoaXMpKVxuICAvLyAgICAgICAgICAgLnNldFRleHRDb250ZW50KFwiQWRkIHRvLWRvXCIpXG4gIC8vICAgICAgIClcbiAgLy8gICApO1xuICAvLyB9XG5cbiAgZ2V0QWxsVG9Eb3NJbkludGVydmFsKGludGVydmFsKSB7XG4gICAgcmV0dXJuIHRoaXMudG9Eb3MuZmlsdGVyKFxuICAgICAgKHRvRG8pID0+ICF0b0RvLmRhdGUgfHwgaXNXaXRoaW5JbnRlcnZhbCh0b0RvLmRhdGUsIGludGVydmFsKVxuICAgICk7XG4gIH1cbn1cbmV4cG9ydCBjbGFzcyBUb0RvIHtcbiAgY29uc3RydWN0b3IobmFtZSwgcHJpb3JpdHksIGlzQ29tcGxldGVkLCBkYXRlKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgdGhpcy5pc0NvbXBsZXRlZCA9IGlzQ29tcGxldGVkO1xuICAgIHRoaXMuZGF0ZSA9IGRhdGU7XG4gIH1cblxuICBzZXQgZGF0ZShuZXdEYXRlKSB7XG4gICAgdGhpcy5kdWVEYXRlID1cbiAgICAgIHR5cGVvZiBuZXdEYXRlID09PSBcInN0cmluZ1wiXG4gICAgICAgID8gcGFyc2UobmV3RGF0ZSwgXCJ5eXl5LU1NLWRkXCIsIG5ldyBEYXRlKCkpXG4gICAgICAgIDogbmV3RGF0ZTtcbiAgfVxuXG4gIGdldCBkYXRlKCkge1xuICAgIHJldHVybiB0aGlzLmR1ZURhdGU7XG4gIH1cblxuICBnZXQgZGF0ZVN0cmluZygpIHtcbiAgICByZXR1cm4gZm9ybWF0KHRoaXMuZHVlRGF0ZSwgXCJ5eXl5LU1NLWRkXCIpO1xuICB9XG5cbiAgYnVpbGRWaXJ0dWFsQm9pKHByb2plY3QpIHtcbiAgICBjb25zdCBjbGVhbkJ1dFN0YWluZWRUdXBwZXJ3YXJlID0gbmV3IEVsZW1lbnQoXCJsaVwiKTtcbiAgICBjbGVhbkJ1dFN0YWluZWRUdXBwZXJ3YXJlXG4gICAgICAuYWRkQ2hpbGQobmV3IEVsZW1lbnQoXCJoMlwiKS5zZXRUZXh0Q29udGVudCh0aGlzLm5hbWUpKVxuICAgICAgLmFkZENoaWxkKG5ldyBFbGVtZW50KFwiaDNcIikuc2V0VGV4dENvbnRlbnQoYFByaW9yaXR5OiAke3RoaXMucHJpb3JpdHl9YCkpXG4gICAgICAuYWRkQ2hpbGQobmV3IEVsZW1lbnQoXCJoNFwiKS5zZXRUZXh0Q29udGVudChgUHJvamVjdDogJHtwcm9qZWN0Lm5hbWV9YCkpXG4gICAgICAuYWRkQ2hpbGQobmV3IEVsZW1lbnQoXCJwXCIpLnNldFRleHRDb250ZW50KHRoaXMuZ2V0Rm9ybWF0dGVkRGF0ZSgpKSlcbiAgICAgIC5hZGRDaGlsZChcbiAgICAgICAgbmV3IEVsZW1lbnQoXCJwXCIpLnNldFRleHRDb250ZW50KGBDb21wbGV0ZWQ6ICR7dGhpcy5pc0NvbXBsZXRlZH1gKVxuICAgICAgKVxuICAgICAgLmFkZENoaWxkKFxuICAgICAgICBuZXcgRWxlbWVudChcImJ1dHRvblwiKVxuICAgICAgICAgIC5zZXRBdHRyaWJ1dGVzKHsgdHlwZTogXCJidXR0b25cIiwgaWQ6IFwiZWRpdC10b2RvLWJ0blwiIH0pXG4gICAgICAgICAgLnNldFRleHRDb250ZW50KFwiRWRpdCB0aGlzIHRvIGRvIGl0ZW1cIilcbiAgICAgICAgICAuYXBwZW5kRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiBoYW5kbGVFZGl0VG9EbyhlLCB0aGlzKSlcbiAgICAgICk7XG5cbiAgICByZXR1cm4gY2xlYW5CdXRTdGFpbmVkVHVwcGVyd2FyZTtcbiAgfVxuXG4gIGdldEZvcm1hdHRlZERhdGUoKSB7XG4gICAgcmV0dXJuIGlzVmFsaWQodGhpcy5kYXRlKSA/IGZvcm1hdCh0aGlzLmRhdGUsIFwiRUVFRSBkZCBNTU0geVwiKSA6IFwiXCI7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50VHlwZSkge1xuICAgIHRoaXMuZWxlbWVudFR5cGUgPSBlbGVtZW50VHlwZTtcbiAgICB0aGlzLmF0dHJpYnV0ZXMgPSB7fTtcbiAgICB0aGlzLmNoaWxkcmVuID0gW107XG4gICAgdGhpcy5ldmVudExpc3RlbmVycyA9IHt9O1xuICB9XG5cbiAgYnVpbGRFbGVtZW50KCkge1xuICAgIC8vIENyZWF0ZSBlbGVtZW50IGluIERPTVxuICAgIGNvbnN0IHJlYWxCb2kgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRoaXMuZWxlbWVudFR5cGUpO1xuXG4gICAgLy8gQWRkIGF0dHJpYnV0ZXMgdG8gZWxlbWVudFxuICAgIGZvciAoY29uc3QgYXR0cmlidXRlIGluIHRoaXMuYXR0cmlidXRlcykge1xuICAgICAgaWYgKFxuICAgICAgICB0aGlzLmF0dHJpYnV0ZXNbYXR0cmlidXRlXSA9PT0gdHJ1ZSB8fFxuICAgICAgICB0aGlzLmF0dHJpYnV0ZXNbYXR0cmlidXRlXSA9PT0gZmFsc2VcbiAgICAgICkge1xuICAgICAgICByZWFsQm9pLnRvZ2dsZUF0dHJpYnV0ZShhdHRyaWJ1dGUsIHRoaXMuYXR0cmlidXRlc1thdHRyaWJ1dGVdKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlYWxCb2kuc2V0QXR0cmlidXRlKGF0dHJpYnV0ZSwgdGhpcy5hdHRyaWJ1dGVzW2F0dHJpYnV0ZV0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIEFkZCBldmVudCBsaXN0ZW5lcnM6XG4gICAgZm9yIChjb25zdCBldiBpbiB0aGlzLmV2ZW50TGlzdGVuZXJzKSB7XG4gICAgICB0aGlzLmV2ZW50TGlzdGVuZXJzW2V2XS5mb3JFYWNoKChjYikgPT4ge1xuICAgICAgICByZWFsQm9pLmFkZEV2ZW50TGlzdGVuZXIoZXYsIGNiKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIEFwcGVuZCBjaGlsZHJlbj8gQXBwZW5kIHRleHQ/XG4gICAgaWYgKHRoaXMudGV4dCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBmb3IgKGNvbnN0IHZpcnR1YWxCb2kgb2YgdGhpcy5jaGlsZHJlbikge1xuICAgICAgICByZWFsQm9pLmFwcGVuZENoaWxkKHZpcnR1YWxCb2kuYnVpbGRFbGVtZW50KCkpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCByZWFsVGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHRoaXMudGV4dCk7XG4gICAgICByZWFsQm9pLmFwcGVuZENoaWxkKHJlYWxUZXh0KTtcbiAgICB9XG4gICAgcmV0dXJuIHJlYWxCb2k7XG4gIH1cblxuICBzZXRBdHRyaWJ1dGVzKG9iamVjdCkge1xuICAgIE9iamVjdC5hc3NpZ24odGhpcy5hdHRyaWJ1dGVzLCBvYmplY3QpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgYWRkQ2hpbGQoZWxlbWVudCkge1xuICAgIHRoaXMudGV4dCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmNoaWxkcmVuLnB1c2goZWxlbWVudCk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHNldFRleHRDb250ZW50KHN0cmluZykge1xuICAgIHRoaXMuY2hpbGRyZW4gPSBbXTtcbiAgICB0aGlzLnRleHQgPSBzdHJpbmc7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBhcHBlbmRFdmVudExpc3RlbmVyKGV2ZW50LCBjYWxsYmFjaykge1xuICAgIGlmICh0aGlzLmV2ZW50TGlzdGVuZXJzW2V2ZW50XSkge1xuICAgICAgdGhpcy5ldmVudExpc3RlbmVyc1tldmVudF0ucHVzaChjYWxsYmFjayk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZXZlbnRMaXN0ZW5lcnNbZXZlbnRdID0gW2NhbGxiYWNrXTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIExpYnJhcmlhbiB7XG4gIHN0YXRpYyBwcm9qZWN0c0FycmF5ID0gW107XG5cbiAgc3RhdGljIGdldEFsbFByb2plY3RzKCkge1xuICAgIHJldHVybiBMaWJyYXJpYW4ucHJvamVjdHNBcnJheTtcbiAgfVxuXG4gIHN0YXRpYyBhZGRQcm9qZWN0KHByb2plY3QpIHtcbiAgICBMaWJyYXJpYW4ucHJvamVjdHNBcnJheS5wdXNoKHByb2plY3QpO1xuICB9XG59XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgXCIuL3N0eWxlc2hlZXQuY3NzXCI7XG5pbXBvcnQge1xuICBkZWZhdWx0IGFzIGxvYWRUb2RheSxcbiAgcmVidWlsZEN1cnJlbnRUYWIsXG4gIGxvYWRXZWVrLFxuICBsb2FkTW9udGgsXG4gIGxvYWRZZWFyLFxuICBsb2FkQWxsVGltZSxcbiAgcmVidWlsZFRhYixcbn0gZnJvbSBcIi4vbG9hZFRhYnNcIjtcblxuaW1wb3J0IHtcbiAgZGVmYXVsdCBhcyBkaXNwbGF5UHJvamVjdEZvcm0sXG4gIGRpc3BsYXlUb0RvRm9ybSxcbiAgZGlzcGxheUVkaXRUb0RvRm9ybSxcbn0gZnJvbSBcIi4vVUloYW5kbGVyc1wiO1xuXG5pbXBvcnQgeyByZWJ1aWxkUHJvamVjdEZvcm1Db250YWluZXIgfSBmcm9tIFwiLi91dGlsaXRpZXNcIjtcbmltcG9ydCB7IGRlZmF1bHQgYXMgUHJvamVjdCwgRWxlbWVudCwgVG9EbywgTGlicmFyaWFuIH0gZnJvbSBcIi4vY2xhc3Nlc1wiO1xuXG4vLyBHbG9iYWxzOlxubGV0IGN1cnJlbnRQcm9qZWN0O1xuY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudFwiKTtcbmNvbnN0IHByb2plY3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC1wcm9qZWN0LWJ0blwiKTtcbmNvbnN0IHRvZGF5VGFiQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2RheS10YWJcIik7XG5jb25zdCB3ZWVrVGFiQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53ZWVrLXRhYlwiKTtcbmNvbnN0IG1vbnRoVGFiQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb250aC10YWJcIik7XG5jb25zdCB5ZWFyVGFiQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi55ZWFyLXRhYlwiKTtcbmNvbnN0IGFsbFRpbWVUYWJCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFsbC10aW1lLXRhYlwiKTtcbi8vIGNvbnN0IHByb2plY3RzVGFiQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0cy10YWJcIik7XG5sZXQgYWRkUHJvamVjdEZvcm07XG5cbi8vIFRlc3QgY2FzZXNcbmxldCB0ZXN0UHJvamVjdCA9IG5ldyBQcm9qZWN0KFwiTXkgUHJvamVjdFwiLCB1bmRlZmluZWQpO1xuXG5sZXQgdGVzdFRvRG8xID0gbmV3IFRvRG8oXCJNeSAxc3QgVG8gRG9cIiwgXCJoaWdoXCIsIGZhbHNlLCBuZXcgRGF0ZSgpKTtcbmxldCB0ZXN0VG9EbzIgPSBuZXcgVG9EbyhcbiAgXCJ0aWdPbEJpdHRpZXNcIixcbiAgXCJsb3dcIixcbiAgdHJ1ZSxcbiAgbmV3IERhdGUoXCJOb3ZlbWJlciA1LCAyMDIyXCIpXG4pO1xubGV0IHRlc3RUb0RvMyA9IG5ldyBUb0RvKFwidGVzdC0yXCIsIFwibG93XCIsIHRydWUsIG5ldyBEYXRlKFwiT2N0b2JlciA1LCAyMDIyXCIpKTtcblxudGVzdFByb2plY3QuYXBwZW5kVG9Ebyh0ZXN0VG9EbzEpO1xudGVzdFByb2plY3QuYXBwZW5kVG9Ebyh0ZXN0VG9EbzIpO1xudGVzdFByb2plY3QuYXBwZW5kVG9Ebyh0ZXN0VG9EbzMpO1xuTGlicmFyaWFuLmFkZFByb2plY3QodGVzdFByb2plY3QpO1xuXG4vLyBsZXQgdGlkZGllcyA9IG5ldyBQcm9qZWN0KFwiTXkgVGlkZGllcyBQcm9qZWN0XCIsIHVuZGVmaW5lZCk7XG4vLyAvLyBsZXQgdGVzdExpc3QyID0gbmV3IExpc3QoXCJNeSBUaWRkaWVzIExpc3RcIik7XG4vLyBsZXQgdGVzdFRvRG80ID0gbmV3IFRvRG8oXCJCYWtlIGEgUGllXCIsIFwiaGlnaFwiLCBmYWxzZSwgbmV3IERhdGUoKSk7XG4vLyBsZXQgdGVzdFRvRG81ID0gbmV3IFRvRG8oXG4vLyAgIFwidGlnT2xCaXR0aWVzXCIsXG4vLyAgIFwibG93XCIsXG4vLyAgIHRydWUsXG4vLyAgIG5ldyBEYXRlKFwiTm92ZW1iZXIgMjYsIDIwMjJcIilcbi8vICk7XG4vLyBsZXQgdGVzdFRvRG82ID0gbmV3IFRvRG8oXCJ0ZXN0LTJcIiwgXCJsb3dcIiwgdHJ1ZSwgbmV3IERhdGUoXCJPY3RvYmVyIDExLCAyMDIyXCIpKTtcblxuLy8gdGVzdExpc3QyLmFwcGVuZEl0ZW1Ub0xpc3RBcnJheSh0ZXN0VG9EbzQpO1xuLy8gdGVzdExpc3QyLmFwcGVuZEl0ZW1Ub0xpc3RBcnJheSh0ZXN0VG9EbzUpO1xuLy8gdGVzdExpc3QyLmFwcGVuZEl0ZW1Ub0xpc3RBcnJheSh0ZXN0VG9EbzYpO1xuXG4vLyB0aWRkaWVzLmFwcGVuZExpc3QodGVzdExpc3QyKTtcbi8vIExpYnJhcmlhbi5hZGRQcm9qZWN0KHRpZGRpZXMpO1xuLy8gY29udGVudERpdi5hcHBlbmRDaGlsZChsb2FkQWxsKExpYnJhcmlhbi5nZXRBbGxQcm9qZWN0cygpKS5idWlsZEVsZW1lbnQoKSk7XG4vLyBFTkQgVEVTVFxuXG4vLyBPbiBQYWdlIExvYWRcbnJlYnVpbGRDdXJyZW50VGFiKExpYnJhcmlhbi5nZXRBbGxQcm9qZWN0cygpLCBjb250ZW50RGl2KTtcbnJlYnVpbGRQcm9qZWN0TGlzdENvbnRhaW5lcihjb250ZW50RGl2KTtcbmN1cnJlbnRQcm9qZWN0ID0gdW5kZWZpbmVkO1xuXG4vLyBGdW5jdGlvbnM6XG5mdW5jdGlvbiBoYW5kbGVOZXdQcm9qZWN0U3VibWl0KCkge1xuICBsZXQgcHJvamVjdEZvcm1JbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdC1uYW1lXCIpO1xuXG4gIC8vIE1ha2UgcHJvamVjdCBhbmQgZ2l2ZSB0byBMaWJyYXJpYW5cbiAgY29uc3QgbmV3UHJvamVjdCA9IG5ldyBQcm9qZWN0KHByb2plY3RGb3JtSW5wdXQudmFsdWUpO1xuICBMaWJyYXJpYW4uYWRkUHJvamVjdChuZXdQcm9qZWN0KTtcblxuICAvLyBSZWJ1aWxkIFVJXG4gIHJlYnVpbGRQcm9qZWN0Rm9ybUNvbnRhaW5lcigpO1xuICByZWJ1aWxkUHJvamVjdExpc3RDb250YWluZXIoY29udGVudERpdik7XG4gIHJlYnVpbGRDdXJyZW50VGFiKGdldFNlbGVjdGVkUHJvamVjdHMoKSwgY29udGVudERpdik7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZUFkZFByb2plY3QoKSB7XG4gIGFkZFByb2plY3RGb3JtID0gZGlzcGxheVByb2plY3RGb3JtKCk7XG5cbiAgbGV0IGZvcm1Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcm0tY29udGFpbmVyXCIpO1xuICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKGFkZFByb2plY3RGb3JtKTtcblxuICBjb25zdCBwcm9qZWN0U3VibWl0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0LWZvcm0tYnRuXCIpO1xuXG4gIHByb2plY3RTdWJtaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBoYW5kbGVOZXdQcm9qZWN0U3VibWl0KCk7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaGFuZGxlTmV3VG9Eb1N1Ym1pdChwcm9qZWN0KSB7XG4gIGxldCBhZGRUb0RvRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkLXRvZG8tZm9ybVwiKTtcblxuICBjb25zdCBuZXdUb0RvID0gbmV3IFRvRG8oXG4gICAgYWRkVG9Eb0Zvcm1bXCJ0b2RvLW5hbWVcIl0udmFsdWUsXG4gICAgYWRkVG9Eb0Zvcm1bXCJwcmlvcml0eVwiXS52YWx1ZSxcbiAgICBhZGRUb0RvRm9ybVtcImNvbXBsZXRlZFwiXS52YWx1ZSxcbiAgICBhZGRUb0RvRm9ybVtcImR1ZS1kYXRlXCJdLnZhbHVlXG4gICk7XG5cbiAgcHJvamVjdC5hcHBlbmRUb0RvKG5ld1RvRG8pO1xuXG4gIHJlYnVpbGRDdXJyZW50VGFiKGdldFNlbGVjdGVkUHJvamVjdHMoKSwgY29udGVudERpdik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVBZGRUb0RvKGUsIHByb2plY3QpIHtcbiAgY29uc3QgxIHMt8yUcsy0zZDMgcWlzLfNimjMtsyZzIp2zLjMjc2G4bqjzLjNmGTMt8yOzIRyzLTMhM2Ccsy4zIDMkF/MtsyFzZ3huofMuMyRYcy1zKzMjsiZzLTMg1/MtMyEzJJozLXMvcyQyKnMtMyRxZXMtcyEw6vMtsyBzJUgPSBkaXNwbGF5VG9Eb0Zvcm0ocHJvamVjdCk7XG4gIGUudGFyZ2V0LnBhcmVudEVsZW1lbnQuYXBwZW5kQ2hpbGQoxIHMt8yUcsy0zZDMgcWlzLfNimjMtsyZzIp2zLjMjc2G4bqjzLjNmGTMt8yOzIRyzLTMhM2Ccsy4zIDMkF/MtsyFzZ3huofMuMyRYcy1zKzMjsiZzLTMg1/MtMyEzJJozLXMvcyQyKnMtMyRxZXMtcyEw6vMtsyBzJUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaGFuZGxlRWRpdFRvRG9TdWJtaXQodG9Eb0l0ZW0pIHtcbiAgbGV0IGVkaXRUb0RvRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZWRpdC10b2RvLWZvcm1cIik7XG5cbiAgdG9Eb0l0ZW0ubmFtZSA9IGVkaXRUb0RvRm9ybVtcInRvZG8tbmFtZVwiXS52YWx1ZTtcbiAgdG9Eb0l0ZW0ucHJpb3JpdHkgPSBlZGl0VG9Eb0Zvcm1bXCJwcmlvcml0eVwiXS52YWx1ZTtcbiAgdG9Eb0l0ZW0uaXNDb21wbGV0ZWQgPSBlZGl0VG9Eb0Zvcm1bXCJjb21wbGV0ZWRcIl0udmFsdWU7XG4gIHRvRG9JdGVtLmRhdGUgPSBlZGl0VG9Eb0Zvcm1bXCJkdWUtZGF0ZVwiXS52YWx1ZTtcblxuICByZWJ1aWxkQ3VycmVudFRhYihMaWJyYXJpYW4uZ2V0QWxsUHJvamVjdHMoKSwgY29udGVudERpdik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVFZGl0VG9EbyhlLCB0b0RvSXRlbSkge1xuICBjb25zdCBlZGl0VG9Eb0Zvcm0gPSBkaXNwbGF5RWRpdFRvRG9Gb3JtKHRvRG9JdGVtKTtcblxuICBlLnRhcmdldC5wYXJlbnRFbGVtZW50LmFwcGVuZENoaWxkKGVkaXRUb0RvRm9ybSk7XG59XG5cbmZ1bmN0aW9uIHJlYnVpbGRQcm9qZWN0TGlzdENvbnRhaW5lcihjb250ZW50RGl2KSB7XG4gIGNvbnN0IHByb2plY3RMaXN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICBcIi5wcm9qZWN0LWxpc3QtY29udGFpbmVyXCJcbiAgKTtcbiAgcHJvamVjdExpc3RDb250YWluZXIudGV4dENvbnRlbnQgPSBcIlwiO1xuXG4gIGNvbnN0IHN0ckxuZ0RvdWJsZUZsb2F0ID0gTGlicmFyaWFuLmdldEFsbFByb2plY3RzKCk7XG5cbiAgY29uc3QgdmlydHVhbEJvaVVMID0gc3RyTG5nRG91YmxlRmxvYXQucmVkdWNlKFxuICAgICh2aXJ0dWFsVUwsIHByb2plY3QpID0+IHZpcnR1YWxVTC5hZGRDaGlsZChjcmVhdGVQcm9qZWN0TGkocHJvamVjdCkpLFxuICAgIG5ldyBFbGVtZW50KFwidWxcIilcbiAgICAgIC5zZXRBdHRyaWJ1dGVzKHtcbiAgICAgICAgY2xhc3M6IFwicHJvamVjdHMtbGlzdFwiLFxuICAgICAgfSlcbiAgICAgIC5hZGRDaGlsZChjcmVhdGVQcm9qZWN0TGkoKSlcbiAgKTtcblxuICBwcm9qZWN0TGlzdENvbnRhaW5lci5hcHBlbmRDaGlsZCh2aXJ0dWFsQm9pVUwuYnVpbGRFbGVtZW50KCkpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0TGkocHJvamVjdCkge1xuICByZXR1cm4gbmV3IEVsZW1lbnQoXCJsaVwiKVxuICAgIC5zZXRBdHRyaWJ1dGVzKHsgY2xhc3M6IFwicHJvamVjdC1saXN0LWl0ZW1cIiB9KVxuICAgIC5zZXRUZXh0Q29udGVudChwcm9qZWN0Py5uYW1lID8/IFwiQWxsIFByb2plY3RzXCIpXG4gICAgLmFwcGVuZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgY3VycmVudFByb2plY3QgPSBwcm9qZWN0O1xuICAgICAgcmVidWlsZEN1cnJlbnRUYWIoZ2V0U2VsZWN0ZWRQcm9qZWN0cygpLCBjb250ZW50RGl2KTtcbiAgICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNlbGVjdGVkUHJvamVjdHMoKSB7XG4gIGlmICghY3VycmVudFByb2plY3QpIHtcbiAgICByZXR1cm4gTGlicmFyaWFuLmdldEFsbFByb2plY3RzKCk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIFtjdXJyZW50UHJvamVjdF07XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFwcGVuZEN1cnJlbnRUb0RvQnRuKCkge1xuICBpZiAoIWN1cnJlbnRQcm9qZWN0KSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29udGVudERpdi5hcHBlbmRDaGlsZChcbiAgICBuZXcgRWxlbWVudChcImJ1dHRvblwiKVxuICAgICAgLnNldEF0dHJpYnV0ZXMoeyBjbGFzczogXCJhZGQtdG8tZG8tYnRuXCIgfSlcbiAgICAgIC5zZXRUZXh0Q29udGVudChcIkFkZCBUbyBEbyBJdGVtXCIpXG4gICAgICAuYXBwZW5kRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiBoYW5kbGVBZGRUb0RvKGUsIGN1cnJlbnRQcm9qZWN0KSlcbiAgICAgIC5idWlsZEVsZW1lbnQoKVxuICApO1xufVxuXG4vLyBFdmVudCBMaXN0ZW5lcnM6XG5wcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVBZGRQcm9qZWN0KTtcbnRvZGF5VGFiQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PlxuICByZWJ1aWxkVGFiKGdldFNlbGVjdGVkUHJvamVjdHMoKSwgbG9hZFRvZGF5LCBjb250ZW50RGl2KVxuKTtcbndlZWtUYWJCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+XG4gIHJlYnVpbGRUYWIoZ2V0U2VsZWN0ZWRQcm9qZWN0cygpLCBsb2FkV2VlaywgY29udGVudERpdilcbik7XG5tb250aFRhYkJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT5cbiAgcmVidWlsZFRhYihnZXRTZWxlY3RlZFByb2plY3RzKCksIGxvYWRNb250aCwgY29udGVudERpdilcbik7XG55ZWFyVGFiQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PlxuICByZWJ1aWxkVGFiKGdldFNlbGVjdGVkUHJvamVjdHMoKSwgbG9hZFllYXIsIGNvbnRlbnREaXYpXG4pO1xuYWxsVGltZVRhYkJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT5cbiAgcmVidWlsZFRhYihnZXRTZWxlY3RlZFByb2plY3RzKCksIGxvYWRBbGxUaW1lLCBjb250ZW50RGl2KVxuKTtcbi8vIHByb2plY3RzVGFiQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PlxuLy8gICByZWJ1aWxkVGFiKExpYnJhcmlhbi5nZXRBbGxQcm9qZWN0cygpLCBsb2FkQWxsLCBjb250ZW50RGl2KVxuLy8gKTtcbiIsImltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiLi9jbGFzc2VzXCI7XG5pbXBvcnQgeyBhcHBlbmRDdXJyZW50VG9Eb0J0biB9IGZyb20gXCIuL2luZGV4XCI7XG5pbXBvcnQge1xuICBzdGFydE9mVG9kYXksXG4gIHN0YXJ0T2ZXZWVrLFxuICBlbmRPZldlZWssXG4gIGVuZE9mVG9kYXksXG4gIHN0YXJ0T2ZNb250aCxcbiAgZW5kT2ZNb250aCxcbiAgc3RhcnRPZlllYXIsXG4gIGVuZE9mWWVhcixcbiAgbWF4VGltZSxcbiAgbWluVGltZSxcbn0gZnJvbSBcImRhdGUtZm5zXCI7XG5cbmxldCBjdXJyZW50VGFiTG9hZGVyID0gbG9hZFRvZGF5O1xuXG4vLyBSZXR1cm5zIGEgYnVpbHQgZWxlbWVudCBiYXNlZCBvbiBpbnRlcnZhbCBhbmQgcHJvamVjdHNBcnJheVtdOlxuZnVuY3Rpb24gYnVpbGRUYWIoaGlwSGlwLCBpbnRlcnZhbCwgZGl2SWQsIGhlYWRpbmdUZXh0KSB7XG4gIGNvbnN0IGludGVydmFsVG9Eb3MgPSBoaXBIaXAuZmxhdE1hcCgocHJvamVjdCkgPT5cbiAgICBwcm9qZWN0LmdldEFsbFRvRG9zSW5JbnRlcnZhbChpbnRlcnZhbCkubWFwKCh0b0RvKSA9PiAoeyB0b0RvLCBwcm9qZWN0IH0pKVxuICApO1xuXG4gIGNvbnN0IGludGVydmFsVG9Eb3NVSSA9IGludGVydmFsVG9Eb3MucmVkdWNlKFxuICAgICh2aXJ0dWFsVWwsIHRvRG9PYmplY3QpID0+XG4gICAgICB2aXJ0dWFsVWwuYWRkQ2hpbGQodG9Eb09iamVjdC50b0RvLmJ1aWxkVmlydHVhbEJvaSh0b0RvT2JqZWN0LnByb2plY3QpKSxcbiAgICBuZXcgRWxlbWVudChcInVsXCIpLnNldEF0dHJpYnV0ZXMoeyBpZDogXCJ0b2RheVwiIH0pXG4gICk7XG5cbiAgcmV0dXJuIG5ldyBFbGVtZW50KFwiZGl2XCIpXG4gICAgLnNldEF0dHJpYnV0ZXMoe1xuICAgICAgY2xhc3M6IFwiZGF0ZS10YWJcIixcbiAgICAgIGlkOiBkaXZJZCxcbiAgICB9KVxuICAgIC5hZGRDaGlsZChuZXcgRWxlbWVudChcImgxXCIpLnNldFRleHRDb250ZW50KGhlYWRpbmdUZXh0KSlcbiAgICAuYWRkQ2hpbGQoaW50ZXJ2YWxUb0Rvc1VJKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlYnVpbGRUYWIocHJvamVjdHNBcnJheSwgbG9hZGVyRnVuYywgY29udGVudERpdikge1xuICBjb250ZW50RGl2LnRleHRDb250ZW50ID0gXCJcIjtcbiAgYXBwZW5kQ3VycmVudFRvRG9CdG4oKTtcbiAgY29udGVudERpdi5hcHBlbmRDaGlsZChsb2FkZXJGdW5jKHByb2plY3RzQXJyYXkpLmJ1aWxkRWxlbWVudCgpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlYnVpbGRDdXJyZW50VGFiKHByb2plY3RzQXJyYXksIGNvbnRlbnREaXYpIHtcbiAgcmVidWlsZFRhYihwcm9qZWN0c0FycmF5LCBjdXJyZW50VGFiTG9hZGVyLCBjb250ZW50RGl2KTtcbn1cblxuLy8gQ3JlYXRlcyBpbnRlcnZhbCBvZiByYW5nZSB3aXRoaW4gdG9kYXkgdG8gYmUgdXNlZCBieSBidWlsZFRhYigpXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkVG9kYXkocHJvamVjdHNBcnJheSkge1xuICBjdXJyZW50VGFiTG9hZGVyID0gbG9hZFRvZGF5O1xuXG4gIGNvbnN0IGludGVydmFsID0ge1xuICAgIHN0YXJ0OiBzdGFydE9mVG9kYXkoKSxcbiAgICBlbmQ6IGVuZE9mVG9kYXkoKSxcbiAgfTtcblxuICByZXR1cm4gYnVpbGRUYWIocHJvamVjdHNBcnJheSwgaW50ZXJ2YWwsIFwidG9kYXktdGFiXCIsIFwiVG9kYXlcIik7XG59XG5cbi8vIENyZWF0ZXMgaW50ZXJ2YWwgb2YgcmFuZ2Ugd2l0aGluIHRoZSBuZXh0IHdlZWsgdG8gYmUgdXNlZCBpbiBidWlsZFRhYigpXG5leHBvcnQgZnVuY3Rpb24gbG9hZFdlZWsocHJvamVjdHNBcnJheSkge1xuICBjdXJyZW50VGFiTG9hZGVyID0gbG9hZFdlZWs7XG4gIGNvbnN0IHJpZ2h0Sm9pbiA9IG5ldyBEYXRlKCk7XG5cbiAgY29uc3QgaW50ZXJ2YWwgPSB7XG4gICAgc3RhcnQ6IHN0YXJ0T2ZXZWVrKHJpZ2h0Sm9pbiksXG4gICAgZW5kOiBlbmRPZldlZWsocmlnaHRKb2luKSxcbiAgfTtcblxuICByZXR1cm4gYnVpbGRUYWIocHJvamVjdHNBcnJheSwgaW50ZXJ2YWwsIFwid2Vlay10YWJcIiwgXCJUaGlzIFdlZWtcIik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkTW9udGgocHJvamVjdHNBcnJheSkge1xuICBjdXJyZW50VGFiTG9hZGVyID0gbG9hZE1vbnRoO1xuICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xuXG4gIGNvbnN0IGludGVydmFsID0geyBzdGFydDogc3RhcnRPZk1vbnRoKG5vdyksIGVuZDogZW5kT2ZNb250aChub3cpIH07XG4gIHJldHVybiBidWlsZFRhYihwcm9qZWN0c0FycmF5LCBpbnRlcnZhbCwgXCJtb250aC10YWJcIiwgXCJUaGlzIE1vbnRoXCIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbG9hZFllYXIocHJvamVjdHNBcnJheSkge1xuICBjdXJyZW50VGFiTG9hZGVyID0gbG9hZFllYXI7XG4gIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XG4gIGNvbnN0IGludGVydmFsID0geyBzdGFydDogc3RhcnRPZlllYXIobm93KSwgZW5kOiBlbmRPZlllYXIobm93KSB9O1xuXG4gIHJldHVybiBidWlsZFRhYihwcm9qZWN0c0FycmF5LCBpbnRlcnZhbCwgXCJ5ZWFyLXRhYlwiLCBcIlRoaXMgWWVhclwiKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRBbGxUaW1lKHByb2plY3RzQXJyYXkpIHtcbiAgY3VycmVudFRhYkxvYWRlciA9IGxvYWRBbGxUaW1lO1xuXG4gIGNvbnN0IGludGVydmFsID0geyBzdGFydDogbmV3IERhdGUobWluVGltZSksIGVuZDogbmV3IERhdGUobWF4VGltZSkgfTtcblxuICByZXR1cm4gYnVpbGRUYWIocHJvamVjdHNBcnJheSwgaW50ZXJ2YWwsIFwiYWxsLXRpbWUtdGFiXCIsIFwiQWxsIFRpbWVcIik7XG59XG4iLCJpbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcIi4vY2xhc3Nlc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gcmVidWlsZFByb2plY3RGb3JtQ29udGFpbmVyKCkge1xuICBjb25zdCBmb3JtQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3JtLWNvbnRhaW5lclwiKTtcbiAgZm9ybUNvbnRhaW5lci50ZXh0Q29udGVudCA9IFwiXCI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVGb3JtRGl2KGlkLCBuYW1lLCBjaGVja2VkKSB7XG4gIHJldHVybiBuZXcgRWxlbWVudChcImRpdlwiKVxuICAgIC5hZGRDaGlsZChcbiAgICAgIG5ldyBFbGVtZW50KFwiaW5wdXRcIikuc2V0QXR0cmlidXRlcyh7XG4gICAgICAgIHR5cGU6IFwicmFkaW9cIixcbiAgICAgICAgaWQ6IGlkLFxuICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICB2YWx1ZTogaWQsXG4gICAgICAgIGNoZWNrZWQ6IGNoZWNrZWQsXG4gICAgICB9KVxuICAgIClcbiAgICAuYWRkQ2hpbGQoXG4gICAgICBuZXcgRWxlbWVudChcImxhYmVsXCIpLnNldEF0dHJpYnV0ZXMoeyBmb3I6IGlkIH0pLnNldFRleHRDb250ZW50KGlkKVxuICAgICk7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9