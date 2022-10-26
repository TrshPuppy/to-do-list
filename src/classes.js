import { handleAddToDo, handleEditToDo } from "./index";
import { isWithinInterval, parse, format, isValid, isMatch } from "date-fns";
export default class Project {
  constructor(name, id) {
    this.name = name;
    this.id = id;
    this.toDos = [];
  }

  appendToDo(toDo) {
    this.toDos.push(toDo);
  }

  // buildVirtualBoi() {
  //   return this.toDos.reduce(
  //     (virtualProject, list) => virtualProject.addChild(list.buildVirtualBoi()),
  //     new Element("div")
  //       .setAttributes({
  //         class: "project",
  //         id: `Project-${this.id}`,
  //       })
  //       .addChild(new Element("h1").setTextContent(`${this.name}`))
  //       .addChild(
  //         new Element("button")
  //           .setAttributes({
  //             type: "button",
  //             class: "add-list-btn",
  //             id: `${this.name}-add-list-btn`,
  //           })
  //           .appendEventListener("click", (e) => handleAddToDo(e, this))
  //           .setTextContent("Add to-do")
  //       )
  //   );
  // }

  getAllToDosInInterval(interval) {
    return this.toDos.filter(
      (toDo) => !toDo.date || isWithinInterval(toDo.date, interval)
    );
  }
}
export class ToDo {
  constructor(name, priority, isCompleted, date) {
    this.name = name;
    this.priority = priority;
    this.isCompleted = isCompleted;
    this.date = date;
  }

  set date(newDate) {
    this.dueDate =
      typeof newDate === "string"
        ? parse(newDate, "yyyy-MM-dd", new Date())
        : newDate;
  }

  get date() {
    return this.dueDate;
  }

  get dateString() {
    return isValid(this.date) ? format(this.date, "yyyy-MM-dd") : "";
  }

  static isEnteredDateValid(dateToCheck) {
    return isMatch(dateToCheck, "yyyy-MM-dd");
  }

  buildVirtualBoi(project) {
    const cleanButStainedTupperware = new Element("li");
    cleanButStainedTupperware
      .addChild(new Element("h2").setTextContent(this.name))
      .addChild(new Element("h3").setTextContent(`Priority: ${this.priority}`))
      .addChild(new Element("h4").setTextContent(`Project: ${project.name}`))
      .addChild(new Element("p").setTextContent(this.getFormattedDate()))
      .addChild(
        new Element("p").setTextContent(`Completed: ${this.isCompleted}`)
      )
      .addChild(
        new Element("button")
          .setAttributes({ type: "button", id: "edit-todo-btn" })
          .setTextContent("Edit")
          .appendEventListener("click", (e) => handleEditToDo(e, this, project))
      )
      .addChild(
        new Element("button")
          .setAttributes({ type: "button", id: "delete-todo-btn" })
          .setTextContent("Delete")
          .appendEventListener("click", (e) => handleDeleteToDo(e, this))
      );

    return cleanButStainedTupperware;
  }

  getFormattedDate() {
    return isValid(this.date) ? format(this.date, "EEEE dd MMM y") : "";
  }
}

export class Element {
  constructor(elementType) {
    this.elementType = elementType;
    this.attributes = {};
    this.children = [];
    this.eventListeners = {};
  }

  buildElement() {
    // Create element in DOM
    const realBoi = document.createElement(this.elementType);

    // Add attributes to element
    for (const attribute in this.attributes) {
      if (
        this.attributes[attribute] === true ||
        this.attributes[attribute] === false
      ) {
        realBoi.toggleAttribute(attribute, this.attributes[attribute]);
      } else {
        realBoi.setAttribute(attribute, this.attributes[attribute]);
      }
    }

    // Add event listeners:
    for (const ev in this.eventListeners) {
      this.eventListeners[ev].forEach((cb) => {
        realBoi.addEventListener(ev, cb);
      });
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

  appendEventListener(event, callback) {
    if (this.eventListeners[event]) {
      this.eventListeners[event].push(callback);
    } else {
      this.eventListeners[event] = [callback];
    }
    return this;
  }
}

export class Librarian {
  static projectsArray = [];

  static getAllProjects() {
    return Librarian.projectsArray;
  }

  static addProject(project) {
    Librarian.projectsArray.push(project);
  }
}
