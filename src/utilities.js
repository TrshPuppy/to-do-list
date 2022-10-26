import { Element } from "./classes";

export function rebuildProjectFormContainer() {
  const formContainer = document.querySelector(".form-container");
  formContainer.textContent = "";
}

export function createFormDiv(id, name, checked) {
  return new Element("div")
    .addChild(
      new Element("input").setAttributes({
        type: "radio",
        id: id,
        name: name,
        value: id,
        checked: checked,
      })
    )
    .addChild(
      new Element("label").setAttributes({ for: id }).setTextContent(id)
    );
}
