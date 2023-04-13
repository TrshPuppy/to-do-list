import { Element } from "./classes";
import { handleEditToDoSubmit } from "./index";
import { handleNewToDoSubmit } from "./index";
import { createFormDiv } from "./utilities";
import { startOfYear } from "date-fns";

export default function displayProjectForm() {
  if (!document.querySelector(".form")) {
    return new Element("form")
      .setAttributes({ class: "form", id: "add-project-form" })
      .addChild(
        new Element("input").setAttributes({
          type: "text",
          class: "form-input",
          id: "project-name",
          placeholder: "Name your project",
          required: "required",
        })
      )
      .addChild(
        new Element("button")
          .setAttributes({
            type: "button",
            class: "form-btn",
            id: "project-form-btn",
          })
          .setTextContent("Submit")
      )
      .buildElement();
  } else {
    return;
  }
}

export function displayToDoForm(project) {
  return new Element("form")
    .setAttributes({ class: "form", id: "add-todo-form" })
    .addChild(
      new Element("input").setAttributes({
        type: "text",
        class: "form-input",
        id: "todo-name",
        placeholder: "Name your to-do",
        required: "required",
      })
    )
    .addChild(
      new Element("label")
        .setAttributes({ for: "due-date" })
        .setTextContent("Pick a due date:")
    )
    .addChild(
      new Element("input").setAttributes({
        type: "date",
        id: "due-date",
        name: "due-date",
        value: `${new Date()}`,
        min: `${startOfYear(new Date())}`,
        max: "undefined",
      })
    )
    .addChild(
      new Element("fieldset")
        .addChild(new Element("legend").setTextContent("Choose a priority"))
        .addChild(createFormDiv("low", "priority", true))
        .addChild(createFormDiv("medium", "priority", false))
        .addChild(createFormDiv("high", "priority", false))
    )
    .addChild(
      new Element("fieldset")
        .addChild(
          new Element("legend").setTextContent("Have you completed this task?")
        )
        .addChild(createFormDiv("yes", "completed", true))
        .addChild(createFormDiv("no", "completed", false))
    )
    .addChild(
      new Element("button")
        .setAttributes({
          type: "button",
          class: "form-btn",
          id: "todo-form-btn",
        })
        .appendEventListener("click", (e) => handleNewToDoSubmit(project))
        .setTextContent("Submit")
    )
    .buildElement();
}

export function displayEditToDoForm(toDoItem) {
  return new Element("form")
    .setAttributes({ class: "form", id: "edit-todo-form" })
    .addChild(
      new Element("input").setAttributes({
        type: "text",
        class: "form-input",
        id: "todo-name",
        value: toDoItem.name,
        placeholder: "Name your to-do",
        required: "required",
      })
    )
    .addChild(
      new Element("label")
        .setAttributes({ for: "due-date" })
        .setTextContent("Pick a due date:")
    )
    .addChild(
      new Element("input").setAttributes({
        type: "date",
        id: "due-date",
        name: "due-date",
        value: toDoItem.dateString,
        min: `${startOfYear(new Date())}`,
        max: "undefined",
      })
    )
    .addChild(
      new Element("fieldset")
        .addChild(new Element("legend").setTextContent("Choose a priority"))
        .addChild(createFormDiv("low", "priority", toDoItem.priority === "low"))
        .addChild(
          createFormDiv("medium", "priority", toDoItem.priority === "medium")
        )
        .addChild(
          createFormDiv("high", "priority", toDoItem.priority === "high")
        )
    )
    .addChild(
      new Element("fieldset")
        .addChild(
          new Element("legend").setTextContent("Have you completed this task?")
        )
        .addChild(
          createFormDiv("yes", "completed", toDoItem.isCompleted === "yes")
        )
        .addChild(
          createFormDiv("no", "completed", toDoItem.isCompleted === "no")
        )
    )
    .addChild(
      new Element("button")
        .setAttributes({
          type: "button",
          class: "form-btn",
          id: "todo-form-btn",
        })
        .appendEventListener("click", (e) => handleEditToDoSubmit(toDoItem))
        .setTextContent("Submit")
    )
    .buildElement();
}
