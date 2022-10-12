import { Librarian } from "./classes";
import { Element } from "./classes";
import { buildTab } from "./loadTabs";

let contentDiv;

export function removeItemFromArray(item, array) {
  let indexToRemove = array.indexOf(item);
  array.splice(indexToRemove, 1);
}

export function rebuildPanel() {
  let openForms = document.querySelectorAll(".form");
  openForms.textContent = "";
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
