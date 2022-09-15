import appendItemToArray from "./utilities";
// import { removeItemFromArray } from "./utilities";

export default class Project {
  constructor(name) {
    this.name = name;
    this.lists = [];
    // this.priority = priority;
  }

  appendList(list) {
    appendItemToArray(list, this.lists);
    return;
  }

  removeList(list) {
    removeItemFromArray(item, this.lists);
  }
}

export class List {
  constructor(listName) {
    this.name = listName;
    this.listItems = [];
  }

  appendItemToListArray(item) {
    appendItemToArray(item, this.listItems);
  }
}
