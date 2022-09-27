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

// Returns a built element based on interval and projectsArray[]:
function buildTab(projectsArray, interval) {
  const intervalToDos = projectsArray.flatMap((project) =>
    project.getAllTasksInInterval(interval)
  );

  const intervalToDosUI = intervalToDos.reduce(
    (virtualUl, toDo) => virtualUl.addChild(toDo.buildVirtualBoi()),
    new Element("ul").setAttributes({ id: "today" })
  );

  return new Element("div")
    .setAttributes({
      class: "date-tab",
      id: "today-tab",
    })
    .addChild(new Element("h1").setTextContent("Today"))
    .addChild(intervalToDosUI);
}

// Creates interval of range within today to be used by buildTab()
export default function loadToday(projectsArray) {
  const interval = {
    start: startOfToday(),
    end: endOfToday(),
  };

  return buildTab(projectsArray, interval);
}

// Creates interval of range within the next week to be used in buildTab()
export function loadWeek(projectsArray) {
  const now = new Date();

  const interval = {
    start: startOfWeek(now),
    end: endOfWeek(now),
  };

  return buildTab(projectsArray, interval);
}

export function loadMonth(projectsArray) {
  const now = new Date();

  const interval = { start: startOfMonth(now), end: endOfMonth(now) };
  return buildTab(projectsArray, interval);
}

export function loadYear(projectsArray) {
  const now = new Date();
  const interval = { start: startOfYear(now), end: endOfYear(now) };

  return buildTab(projectsArray, interval);
}

//Today HTML:
/*
.content
panel div
> today div
> h1: 
>>>>>>li due today
*/
