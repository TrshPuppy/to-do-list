import { Librarian } from "./classes";
import { Element } from "./classes";
import loadToday from "./loadTabs";

let contentDiv;

export function removeItemFromArray(item, array) {
  let indexToRemove = array.indexOf(item);
  array.splice(indexToRemove, 1);
}

// rebuild UI
export function rebuildUI(virtualBoi) {
  contentDiv = document.querySelector(".content");
  contentDiv.textContent = "";

  if (virtualBoi === undefined) {
    const projectsArray = Librarian.getAllProjects();

    for (const project of projectsArray) {
      const virtualProject = project.buildVirtualBoi();

      contentDiv.appendChild(virtualProject.buildElement());
    }
  } else {
    // let virtualBoi = loadToday(Librarian.getAllProjects());
    let realBoi = virtualBoi.buildElement();

    contentDiv.appendChild(realBoi);
  }
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
