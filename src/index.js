// Imports
import loadToday from "./loadTabs";
import loadWeek from "./loadTabs";
import loadDefaultHTML from "./utilities";
import Project from "./classes";
import { List } from "./classes";
import { ToDo } from "./classes";
import { setPriority } from "./utilities";
import { Librarian } from "./classes";

// Globals
const contentDiv = document.querySelector(".content");

// Create default project on load:
const defaultProject = new Project("default", 1);

//testing shite:

const myList = new List("first list");

const toDoItem = new ToDo("water the lawn", 3, false);
console.log(toDoItem.date);

const todo2 = new ToDo("Eat a watermelon", 2, true, new Date());

myList.appendItemToListArray(toDoItem);
myList.appendItemToListArray(todo2);

defaultProject.appendList(myList);

Librarian.addProject(defaultProject);

const today = loadToday(Librarian.getAllProjects());
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
