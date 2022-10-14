import { getSelectedProjects } from ".";
import { Librarian } from "./classes";
import { Element } from "./classes";
import { rebuildCurrentTab, rebuildTabRTProject } from "./loadTabs";

let contentDiv;

export function removeItemFromArray(item, array) {
  let indexToRemove = array.indexOf(item);
  array.splice(indexToRemove, 1);
}

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
