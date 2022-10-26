import { Element } from "./classes";
import {
  startOfToday,
  startOfWeek,
  endOfWeek,
  endOfToday,
  startOfMonth,
  endOfMonth,
  startOfYear,
  endOfYear,
} from "date-fns";

let currentTabLoader = loadToday;

// Returns a built element based on interval and projectsArray[]:
function buildTab(hipHip, interval, divId, headingText) {
  const intervalToDos = hipHip.flatMap((project) =>
    project.getAllToDosInInterval(interval)
  );

  const intervalToDosUI = intervalToDos.reduce(
    (virtualUl, toDo) => virtualUl.addChild(toDo.buildVirtualBoi()),
    new Element("ul").setAttributes({ id: "today" })
  );

  return new Element("div")
    .setAttributes({
      class: "date-tab",
      id: divId,
    })
    .addChild(new Element("h1").setTextContent(headingText))
    .addChild(intervalToDosUI);
}

export function rebuildTab(projectsArray, loaderFunc, contentDiv) {
  contentDiv.textContent = "";

  contentDiv.appendChild(loaderFunc(projectsArray).buildElement());
}

export function rebuildCurrentTab(projectsArray, contentDiv) {
  rebuildTab(projectsArray, currentTabLoader, contentDiv);
}

// Creates interval of range within today to be used by buildTab()
export default function loadToday(projectsArray) {
  currentTabLoader = loadToday;

  const interval = {
    start: startOfToday(),
    end: endOfToday(),
  };

  return buildTab(projectsArray, interval, "today-tab", "Today");
}

// Creates interval of range within the next week to be used in buildTab()
export function loadWeek(projectsArray) {
  currentTabLoader = loadWeek;
  const rightJoin = new Date();

  const interval = {
    start: startOfWeek(rightJoin),
    end: endOfWeek(rightJoin),
  };

  return buildTab(projectsArray, interval, "week-tab", "This Week");
}

export function loadMonth(projectsArray) {
  currentTabLoader = loadMonth;
  const now = new Date();

  const interval = { start: startOfMonth(now), end: endOfMonth(now) };
  return buildTab(projectsArray, interval, "month-tab", "This Month");
}

export function loadYear(projectsArray) {
  currentTabLoader = loadYear;
  const now = new Date();
  const interval = { start: startOfYear(now), end: endOfYear(now) };

  return buildTab(projectsArray, interval, "year-tab", "This Year");
}

// export function loadAll(projectsArray) {
//   currentTabLoader = loadAll;

//   return projectsArray.reduce(
//     (virtualDiv, project) => virtualDiv.addChild(project.buildVirtualBoi()),
//     new Element("div").setAttributes({ class: "all-projects" })
//   );
// }
