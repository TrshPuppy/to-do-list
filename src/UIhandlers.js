import { Element } from "./classes";

export default function displayProjectModal(HTMLparent) {
  const projectModal = new Element("form")
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

  HTMLparent.appendChild(projectModal);
  //   return projectModal;
}
