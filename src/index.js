import Project from "./projectClass";
import List from "./utilities";

const defaultProject = new Project("default");
console.log(defaultProject.list);

const myList = new List("first list");
console.log(myList);

myList.appendItemToListArray("i have to do this");
myList.appendItemToListArray("i also have to do this :(");

defaultProject.appendList(myList);
console.log(defaultProject);
