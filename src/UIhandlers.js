import { Element } from "./classes";

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

export function displayListForm() {
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
        .setTextContent("Submit")
    )
    .buildElement();
}
