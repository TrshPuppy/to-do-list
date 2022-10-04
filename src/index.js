// Imports
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
import { rebuildUI } from "./utilities";

// Globals:
const contentDiv = document.querySelector(".content");
const projectBtn = document.querySelector(".add-project-btn");
const addListBtn = document.querySelector(".add-list-btn");
let listBtnExists = false;
let addProjectForm;

//Load Default UI
// loadToday();

// Functions:
function handleNewProjectSubmit() {
  let projectFormInput = document.querySelector("#project-name");

  // Make project and give to Librarian
  const newProject = new Project(projectFormInput.value);
  const newList = new List(projectFormInput.value);
  newProject.appendList(newList);
  const toDo1 = new ToDo("bake a cake", 2, false);
  newList.appendItemToListArray(toDo1);

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

export function handleAddList() {
  console.log("hi");
  //   addListForm = displayListForm();
  //
}

// Event Listeners:
projectBtn.addEventListener("click", handleAddProject);
// addListBtn.addEventListener("click", handleAddList);

// () => {
//   addProjectForm = displayProjectModal();
//   contentDiv.appendChild(addProjectForm);

//   handleFormInput(addProjectForm);
// });

/*
// Create default project on load:
const defaultProject = new Project("default", 1);

const myList = new List("first list");

const toDoItem = new ToDo("water the lawn", 3, false, new Date(2022, 8, 17));

const todo2 = new ToDo("Eat a watermelon", 2, true, new Date(2022, 11, 30));

myList.appendItemToListArray(toDoItem);
myList.appendItemToListArray(todo2);

defaultProject.appendList(myList);

Librarian.addProject(defaultProject);

const today = loadYear(Librarian.getAllProjects());
console.log(today);

const buildDefault = defaultProject.buildVirtualBoi();
console.log(buildDefault);
contentDiv.appendChild(today.buildElement());

*/

console.log(Librarian);
