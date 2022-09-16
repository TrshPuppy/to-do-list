import { appendItemToArray } from "./utilities";
import { removeItemFromArray } from "./utilities";
import { editItemDetail } from "./utilities";
export default class Project {
  constructor(name) {
    this.name = name;
    this.lists = [];
    this.priority;
  }

  appendList(list) {
    appendItemToArray(list, this.lists);
    return;
  }

  removeList(list) {
    removeItemFromArray(list, this.lists);
  }

  editDetails(detailType) {
    editItemDetail(this, detailType);
  }
}
export class List {
  constructor(listName) {
    this.name = listName;
    this.listItems = [];
    this.priority;
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
    this.priority;
    //priority
    //name
    //
  }
}

export class Element {
  constructor(elementType) {
    this.elementType = elementType;
    this.attributes = {};
    this.children = [];
  }

  buildElement() {
    const newElement = document.createElement(this.elementType);
    return newElement;
    // const div = document.createElement('div');
  }
}
