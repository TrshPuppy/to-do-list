import appendItemToArray, { removeItemFromArray } from "./utilities";
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
    removeItemFromArray(list, this.lists);
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

  removeItemFromListArray(item) {
    removeItemFromArray(item, this.listItems);
  }
}

export class ToDo {
  constructor(name) {
    this.name = name;
    //priority
    //name
    //
  }
}
