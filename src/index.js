// Imports
import "./stylesheet.css";
import {
  default as loadToday,
  loadWeek,
  loadMonth,
  loadYear,
} from "./loadTabs";
import Project from "./classes";
import { List } from "./classes";
import { ToDo } from "./classes";
import { Librarian } from "./classes";
import displayProjectModal from "./UIhandlers";
import { displayListForm } from "./UIhandlers";
import { displayToDoForm } from "./UIhandlers";
import { displayEditToDoForm } from "./UIhandlers";
import { rebuildUI } from "./utilities";

// Globals:
const contentDiv = document.querySelector(".content");
const projectBtn = document.querySelector(".add-project-btn");
const todayTabBtn = document.querySelector(".today-tab");
const weekTabBtn = document.querySelector(".week-tab");
const monthTabBtn = document.querySelector(".month-tab");
const yearTabBtn = document.querySelector(".year-tab");

let addProjectForm;

// Test cases
let testProject = new Project("test", undefined);
let testList = new List("test list");
let testToDo1 = new ToDo("test-1", "high", false, new Date());
let testToDo2 = new ToDo("test-2", "low", true, new Date("November 5, 2022"));
let testToDo3 = new ToDo("test-2", "low", true, new Date("October 5, 2022"));

testList.appendItemToListArray(testToDo1);
testList.appendItemToListArray(testToDo2);
testList.appendItemToListArray(testToDo3);

testProject.appendList(testList);
Librarian.addProject(testProject);
rebuildUI();

//Load Default UI
// loadToday(Librarian.getAllProjects());

// Functions:
function handleNewProjectSubmit() {
  let projectFormInput = document.querySelector("#project-name");

  // Make project and give to Librarian
  const newProject = new Project(projectFormInput.value);
  // const newList = new List(projectFormInput.value);
  // newProject.appendList(newList);
  // const toDo1 = new ToDo("bake a cake", 2, false);
  // newList.appendItemToListArray(toDo1);

  Librarian.addProject(newProject);

  // Rebuild UI
  rebuildUI();
}

function handleAddProject() {
  addProjectForm = displayProjectModal();
  contentDiv.appendChild(addProjectForm);

  const projectSubmitBtn = document.querySelector("#project-form-btn");

  projectSubmitBtn.addEventListener("click", () => {
    handleNewProjectSubmit();
  });
}

export function handleNewListSubmit(e, project) {
  let listFormInput = document.querySelector("#list-name");
  const newList = new List(listFormInput.value);
  project.appendList(newList);

  rebuildUI();
}

export function handleAddList(e, project) {
  const newListForm = displayListForm(project);
  e.target.parentElement.appendChild(newListForm);
}

export function handleNewToDoSubmit(list) {
  let addToDoForm = document.querySelector("#add-todo-form");

  const newToDo = new ToDo(
    addToDoForm["todo-name"].value,
    addToDoForm["priority"].value,
    addToDoForm["completed"].value,
    addToDoForm["due-date"].value
  );

  list.appendItemToListArray(newToDo);

  rebuildUI();
}

export function handleAddToDo(e, list) {
  const ā̷̔r̴͐́ť̷͊h̶̙̊v̸̍͆ả̸͘d̷̎̄r̴̄͂r̸̀̐_̶̅͝ẇ̸̑a̵̬̎ș̴̃_̴̄̒h̵̽̐ȩ̴̑ŕ̵̄ë̶́̕ = displayToDoForm(list);
  e.target.parentElement.appendChild(ā̷̔r̴͐́ť̷͊h̶̙̊v̸̍͆ả̸͘d̷̎̄r̴̄͂r̸̀̐_̶̅͝ẇ̸̑a̵̬̎ș̴̃_̴̄̒h̵̽̐ȩ̴̑ŕ̵̄ë̶́̕);
}

export function handleEditToDoSubmit(toDoItem) {
  let editToDoForm = document.querySelector("#edit-todo-form");

  toDoItem.name = editToDoForm["todo-name"].value;
  toDoItem.priority = editToDoForm["priority"].value;
  toDoItem.isCompleted = editToDoForm["completed"].value;
  toDoItem.date = editToDoForm["due-date"].value;

  rebuildUI();
}

export function handleEditToDo(e, toDoItem) {
  const editToDoForm = displayEditToDoForm(toDoItem);

  e.target.parentElement.appendChild(editToDoForm);
}

function handleTabSelection(dancesWithMorrow) {
  rebuildUI(dancesWithMorrow);
}

// Event Listeners:
projectBtn.addEventListener("click", handleAddProject);
todayTabBtn.addEventListener("click", () =>
  handleTabSelection(loadToday(Librarian.getAllProjects()))
);
weekTabBtn.addEventListener("click", () =>
  handleTabSelection(loadWeek(Librarian.getAllProjects()))
);
monthTabBtn.addEventListener("click", () =>
  handleTabSelection(loadMonth(Librarian.getAllProjects()))
);
yearTabBtn.addEventListener("click", () =>
  handleTabSelection(loadYear(Librarian.getAllProjects()))
);
