import { appendItemToArray } from "./utilities";
import { removeItemFromArray } from "./utilities";
import { editItemDetail } from "./utilities";
export default class Project {
  constructor(name, id) {
    this.name = name;
    this.id = id;
    this.lists = [];
    // this.priority;
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

  buildVirtualBoi() {
    return this.lists.reduce(
      (virtualProject, list) => virtualProject.addChild(list.buildVirtualBoi()),
      new Element("div").setAttributes({
        class: "project",
        id: `Project-${this.id}`,
      })
    );
  }
}

export class List {
  constructor(listName) {
    this.name = listName;
    this.listItems = [];
    this.priority;
  }

  buildVirtualBoi() {
    return this.listItems.reduce(
      (virtualUl, toDo) => virtualUl.addChild(toDo.buildVirtualBoi()),
      new Element("ul")
    );
  }

  appendItemToListArray(item) {
    appendItemToArray(item, this.listItems);
  }

  removeItemFromListArray(item) {
    removeItemFromArray(item, this.listItems);
  }
}

export class ToDo {
  constructor(name, priority, isCompleted) {
    this.name = name;
    this.priority = priority;
    this.isCompleted = isCompleted;
  }

  buildVirtualBoi() {
    const virtualBoi = new Element("li");
    virtualBoi
      .addChild(new Element("h1").setTextContent("this.name"))
      .addChild(new Element("h2").setTextContent(`Priority: ${this.priority}`))
      .addChild(new Element("button").setTextContent("Set Priority"))
      .addChild(new Element("button").setTextContent("Mark Done"));

    return virtualBoi;
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

    // Append children? Append text?
    if (this.text === undefined) {
      for (const virtualBoi of this.children) {
        realBoi.appendChild(virtualBoi.buildElement());
      }
    } else {
      const realText = document.createTextNode(this.text);
      realBoi.appendChild(realText);
    }
    return realBoi;
  }

  setAttributes(object) {
    Object.assign(this.attributes, object);
    return this;
  }

  addChild(element) {
    this.text = undefined;
    this.children.push(element);

    return this;
  }

  setTextContent(string) {
    this.children = [];
    this.text = string;
    return this;
  }
}
