// import list from x
import { appendItemToArray, removeItemFromArray } from "./utilities";

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
