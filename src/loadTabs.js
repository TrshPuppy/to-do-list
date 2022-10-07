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
function buildTab(projectsArray, interval, divId, headingText) {
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
      id: divId,
    })
    .addChild(new Element("h1").setTextContent(headingText))
    .addChild(intervalToDosUI);
}

// Creates interval of range within today to be used by buildTab()
export default function loadToday(projectsArray) {
  const interval = {
    start: startOfToday(),
    end: endOfToday(),
  };

  return buildTab(projectsArray, interval, "today-tab", "Today");
}

// Creates interval of range within the next week to be used in buildTab()
export function loadWeek(projectsArray) {
  const rightJoin = new Date();

  const interval = {
    start: startOfWeek(rightJoin),
    end: endOfWeek(rightJoin),
  };

  return buildTab(projectsArray, interval, "week-tab", "This Week");
}

export function loadMonth(projectsArray) {
  const now = new Date();

  const interval = { start: startOfMonth(now), end: endOfMonth(now) };
  return buildTab(projectsArray, interval, "month-tab", "This Month");
}

export function loadYear(projectsArray) {
  const now = new Date();
  const interval = { start: startOfYear(now), end: endOfYear(now) };

  return buildTab(projectsArray, interval, "year-tab", "This Year");
}

//Today HTML:
/*
.content
panel div
> today div
> h1: 
>>>>>>li due today
*/
