import { Librarian } from "./classes";
import { Element } from "./classes";
import { rebuildTabRTProject } from "./loadTabs";

let contentDiv;

export function removeItemFromArray(item, array) {
  let indexToRemove = array.indexOf(item);
  array.splice(indexToRemove, 1);
}

export function rebuildProjectFormContainer() {
  const formContainer = document.querySelector(".form-container");
  formContainer.textContent = "";
}

export function rebuildProjectListContainer() {
  const projectListContainer = document.querySelector(
    ".project-list-container"
  );
  projectListContainer.textContent = "";

  const projectsArray = Librarian.getAllProjects();

  const virtualUL = projectsArray.reduce(
    (virtualUl, project) =>
      virtualUl.addChild(
        new Element("li")
          .setTextContent(project.name)
          .appendEventListener("click", (e) => rebuildTabRTProject(e, project))
      ),
    new Element("ul").setAttributes({
      class: "projects-list",
    })
  );

  console.log(projectsArray);
  projectListContainer.appendChild(virtualUL.buildElement());
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
