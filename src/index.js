import Project from "./classes";
import { List } from "./classes";
import { ToDo } from "./classes";

const defaultProject = new Project("default");
// console.log(defaultProject.list);

const myList = new List("first list");
const myList2 = new List("2nd list");
// console.log(myList);

const todoItem = new ToDo("water the lawn");
const todo2 = new ToDo("Eat a watermelon");

myList.appendItemToListArray(todoItem);
myList.appendItemToListArray(todo2);

defaultProject.appendList(myList);
defaultProject.appendList(myList2);
console.log(defaultProject);

myList.removeItemFromListArray(todoItem);
defaultProject.removeList(myList);
