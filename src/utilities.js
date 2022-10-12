import { Librarian } from "./classes";
import { Element } from "./classes";
import { buildTab } from "./loadTabs";

let contentDiv;

export function removeItemFromArray(item, array) {
  let indexToRemove = array.indexOf(item);
  array.splice(indexToRemove, 1);
}

// rebuild UI
// export function canHasGUI(virtualBoi) {
//   contentDiv = document.querySelector(".content");
//   contentDiv.textContent = "";
//   const projectsArray = Librarian.getAllProjects();

//   if (virtualBoi === undefined) {
//     for (const project of projectsArray) {
//       const virtualProject = project.buildVirtualBoi();

//       contentDiv.appendChild(virtualProject.buildElement());
//     }
//   } else {
//     let realBoi = virtualBoi.buildElement();
//     contentDiv.appendChild(realBoi);
//   }
// }

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
