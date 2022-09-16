import loadHTML from "./utilities";
import Project from "./classes";
import { List } from "./classes";
import { ToDo } from "./classes";
import { setPriority } from "./utilities";

loadHTML();

//testing shite:

const defaultProject = new Project("default");

const myList = new List("first list");
const myList2 = new List("2nd list");

const todoItem = new ToDo("water the lawn");
const todo2 = new ToDo("Eat a watermelon");

myList.appendItemToListArray(todoItem);
myList.appendItemToListArray(todo2);

defaultProject.appendList(myList);
defaultProject.appendList(myList2);

//some priority button gets clicked:
//event listener => click { }
setPriority(todoItem, 2);

console.log(defaultProject);
