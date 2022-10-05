import { Element } from "./classes";
import { handleNewListSubmit } from "./index";
import { handleNewToDoSubmit } from "./index";
import { createFormDiv } from "./utilities";

export default function displayProjectModal() {
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
}

export function displayListForm(project) {
  return new Element("form")
    .setAttributes({ class: "form", id: "add-list-form" })
    .addChild(
      new Element("input").setAttributes({
        type: "text",
        class: "form-input",
        id: "list-name",
        placeholder: "Name your list",
        required: "required",
      })
    )
    .addChild(
      new Element("button")
        .setAttributes({
          type: "button",
          class: "form-btn",
          id: "list-form-btn",
        })
        .appendEventListener("click", (e) => handleNewListSubmit(e, project))
        .setTextContent("Submit")
    )
    .buildElement();
}

export function displayToDoForm(list) {
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
      new Element("fieldset")
        .addChild(new Element("legend").setTextContent("Choose a priority"))
        .addChild(createFormDiv("low", "priority", true))
        .addChild(createFormDiv("medium", "priority", false))
        .addChild(createFormDiv("high", "priority", false))
    )
    .addChild(
      new Element("button")
        .setAttributes({
          type: "button",
          class: "form-btn",
          id: "todo-form-btn",
        })
        .appendEventListener("click", (e) => handleNewToDoSubmit(e, list))
        .setTextContent("Submit")
    )
    .buildElement();
}
