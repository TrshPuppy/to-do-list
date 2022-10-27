// Imports
import "./stylesheet.css";
import {
  default as loadToday,
  rebuildCurrentTab,
  loadWeek,
  loadMonth,
  loadYear,
  loadAllTime,
  rebuildTab,
} from "./loadTabs";

import {
  default as displayProjectForm,
  displayToDoForm,
  displayEditToDoForm,
} from "./UIhandlers";

import { rebuildProjectFormContainer } from "./utilities";
import { default as Project, Element, ToDo, Librarian } from "./classes";

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
let testProject = new Project("My Project", undefined);

let testToDo1 = new ToDo("My 1st To Do", "high", false, new Date());
let testToDo2 = new ToDo(
  "tigOlBitties",
  "low",
  true,
  new Date("November 5, 2022")
);
let testToDo3 = new ToDo("test-2", "low", true, new Date("October 5, 2022"));

testProject.appendToDo(testToDo1);
testProject.appendToDo(testToDo2);
testProject.appendToDo(testToDo3);
Librarian.addProject(testProject);

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
rebuildCurrentTab(Librarian.getAllProjects(), contentDiv);
rebuildProjectListContainer();
currentProject = undefined;

// Functions:
function handleNewProjectSubmit() {
  let projectFormInput = document.querySelector("#project-name");

  // Make project and give to Librarian
  const newProject = new Project(projectFormInput.value);
  Librarian.addProject(newProject);

  // Rebuild UI
  rebuildProjectFormContainer();
  rebuildProjectListContainer();
  rebuildCurrentTab(getSelectedProjects(), contentDiv);
}

function handleAddProject() {
  addProjectForm = displayProjectForm();

  let formContainer = document.querySelector(".form-container");
  formContainer.appendChild(addProjectForm);

  const projectSubmitBtn = document.querySelector("#project-form-btn");

  projectSubmitBtn.addEventListener("click", () => {
    handleNewProjectSubmit();
  });
}

export function handleNewToDoSubmit(context) {
  let addToDoForm = document.querySelector("#add-todo-form");
  let newToDoDate = new Date();

  if (ToDo.isEnteredDateValid(addToDoForm["due-date"].value)) {
    newToDoDate = addToDoForm["due-date"].value;
  }

  const newToDo = new ToDo(
    addToDoForm["todo-name"].value,
    addToDoForm["priority"].value,
    addToDoForm["completed"].value,
    newToDoDate
  );

  context.appendToDo(newToDo);

  rebuildCurrentTab(getSelectedProjects(), contentDiv);
}

export function handleAddToDo(e, project) {
  const ā̷̔r̴͐́ť̷͊h̶̙̊v̸̍͆ả̸͘d̷̎̄r̴̄͂r̸̀̐_̶̅͝ẇ̸̑a̵̬̎ș̴̃_̴̄̒h̵̽̐ȩ̴̑ŕ̵̄ë̶́̕ = displayToDoForm(project);
  e.target.parentElement.appendChild(ā̷̔r̴͐́ť̷͊h̶̙̊v̸̍͆ả̸͘d̷̎̄r̴̄͂r̸̀̐_̶̅͝ẇ̸̑a̵̬̎ș̴̃_̴̄̒h̵̽̐ȩ̴̑ŕ̵̄ë̶́̕);
}

export function handleEditToDoSubmit(toDoItem) {
  // HELLO
  let editToDoForm = document.querySelector("#edit-todo-form");

  toDoItem.name = editToDoForm["todo-name"].value;
  toDoItem.priority = editToDoForm["priority"].value;
  toDoItem.isCompleted = editToDoForm["completed"].value;

  if (ToDo.isEnteredDateValid(editToDoForm["due-date"].value)) {
    toDoItem.date = editToDoForm["due-date"].value;
  }

  rebuildCurrentTab(Librarian.getAllProjects(), contentDiv);
}

export function handleEditToDo(e, toDoItem) {
  const editToDoForm = displayEditToDoForm(toDoItem);

  e.target.parentElement.appendChild(editToDoForm);
}

function rebuildProjectListContainer() {
  const projectListContainer = document.querySelector(
    ".project-list-container"
  );
  projectListContainer.textContent = "";

  const strLngDoubleFloat = Librarian.getAllProjects();

  const virtualBoiUL = strLngDoubleFloat.reduce(
    (virtualUL, project) => virtualUL.addChild(createProjectLi(project)),
    new Element("ul")
      .setAttributes({
        class: "projects-list",
      })
      .addChild(createProjectLi())
  );

  projectListContainer.appendChild(virtualBoiUL.buildElement());
}

function createProjectLi(project) {
  return new Element("li")
    .setAttributes({ class: "project-list-item" })
    .setTextContent(project?.name ?? "All Projects")
    .appendEventListener("click", (e) => {
      currentProject = project;
      rebuildCurrentTab(getSelectedProjects(), contentDiv);
    });
}

export function getSelectedProjects() {
  if (!currentProject) {
    return Librarian.getAllProjects();
  } else {
    return [currentProject];
  }
}

export function appendCurrentToDoBtn() {
  if (!currentProject) {
    return;
  }

  contentDiv.appendChild(
    new Element("button")
      .setAttributes({ class: "add-to-do-btn" })
      .setTextContent("Add To Do Item")
      .appendEventListener("click", (e) => handleAddToDo(e, currentProject))
      .buildElement()
  );
}

export function handleDeleteToDo(toDo, project) {
  project.toDos.splice(project.toDos.indexOf(toDo), 1);
  console.log(project.toDos);
  if (!currentProject) {
    rebuildCurrentTab(Librarian.getAllProjects(), contentDiv);
  } else {
    rebuildCurrentTab([project], contentDiv);
  }
}

// Event Listeners:
projectBtn.addEventListener("click", handleAddProject);
todayTabBtn.addEventListener("click", () =>
  rebuildTab(getSelectedProjects(), loadToday, contentDiv)
);
weekTabBtn.addEventListener("click", () =>
  rebuildTab(getSelectedProjects(), loadWeek, contentDiv)
);
monthTabBtn.addEventListener("click", () =>
  rebuildTab(getSelectedProjects(), loadMonth, contentDiv)
);
yearTabBtn.addEventListener("click", () =>
  rebuildTab(getSelectedProjects(), loadYear, contentDiv)
);
allTimeTabBtn.addEventListener("click", () =>
  rebuildTab(getSelectedProjects(), loadAllTime, contentDiv)
);
