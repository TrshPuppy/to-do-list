import Project from "./classes";
import { List } from "./classes";
import { ToDo } from "./classes";

const defaultProject = new Project("default");
// console.log(defaultProject.list);

const myList = new List("first list");
// console.log(myList);

const todoItem = new ToDo("water the lawn");
console.log(todoItem.name);

myList.appendItemToListArray(todoItem);

defaultProject.appendList(myList);
console.log(defaultProject);

myList.removeItemFromListArray();
