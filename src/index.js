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

// Globals:
const contentDiv = document.querySelector(".content");
const projectBtn = document.querySelector(".add-project-btn");

// Event Listeners:
projectBtn.addEventListener("click", () => {
  displayProjectModal(contentDiv);
});

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
