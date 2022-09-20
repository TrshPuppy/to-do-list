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

  buildIntoHTML() {
    const thisProjectElement = new Element("div").setAttributes({
      class: "project",
      id: `${this.name}`,
    });

    return thisProjectElement;
  }

  buildChildren() {
    for (const list of this.lists) {
      list.buildListIntoElement().buildElement();
    }
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

  buildListIntoElement() {
    const thisListElement = new Element("ul").setAttributes({
      class: `${this.name}`,
    });
    return thisListElement;
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
    // Create element in DOM
    const realBoi = document.createElement(this.elementType);

    // Add attributes to element
    for (const attribute in this.attributes) {
      realBoi.setAttribute(attribute, this.attributes[attribute]);
    }

    // Append children?
    for (const virtualBoi of this.children) {
      // append real children to the real DOM element
      realBoi.appendChild(virtualBoi.buildElement());
    }
    return realBoi;
  }

  setAttributes(object) {
    Object.assign(this.attributes, object);
    return this;
  }

  addChild(element) {
    this.children.push(element);
  }

  buildElementChildren() {}
}
