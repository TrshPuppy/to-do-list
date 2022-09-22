// Imports
import loadDefaultHTML from "./utilities";
import Project from "./classes";
import { List } from "./classes";
import { ToDo } from "./classes";
import { setPriority } from "./utilities";

// Globals
const contentDiv = document.querySelector(".content");

// Create default project on load:
const defaultProject = new Project("default", 1);

//testing shite:

const myList = new List("first list");
// const myList2 = new List("2nd list");

const toDoItem = new ToDo("water the lawn", 3, false);

const todo2 = new ToDo("Eat a watermelon", 2, true);

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
