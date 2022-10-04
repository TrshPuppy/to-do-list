import { Librarian } from "./classes";

let contentDiv;

export function removeItemFromArray(item, array) {
  let indexToRemove = array.indexOf(item);
  array.splice(indexToRemove, 1);
}

// rebuild UI
export function rebuildUI() {
  contentDiv = document.querySelector(".content");
  contentDiv.textContent = "";

  const projectsArray = Librarian.getAllProjects();

  for (const project of projectsArray) {
    const virtualProject = project.buildVirtualBoi();

    contentDiv.appendChild(virtualProject.buildElement());
  }
}
