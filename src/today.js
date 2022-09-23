import { Element } from "../src/classes";

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
  const now = new Date();

  const interval = {
    start: new Date(now.getFullYear(), now.getMonth(), now.getDate()),
    end: new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate(),
      23,
      59,
      59,
      999
    ),
  };

  return buildTab(projectsArray, interval);
}

// Cretes interval of range within the next week to be used in buildTab()
export function loadWeek(projectsArray) {
  const now = new Date();

  const interval = {
    start: new Date(now.getFullYear(), now.getMonth(), now.getDate()),
    end: new Date(now.getFullYear(), now.getM),
  };
}

// Loop through Librarian.projectsarray()
//   ea project: get tasks within this interval
// For the date within the interval:

// isWithinInterval(new Date(2014, 0, 3), {
//     start: new Date(2014, 0, 1),
//     end: new Date(2014, 0, 7)
//   })
//   //=> true

//Today HTML:
/*
.content
panel div
> today div
> h1: 
>>>>>>li due today
*/
