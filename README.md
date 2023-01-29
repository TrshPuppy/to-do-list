# To Do List

## Watch my video about my process and lessons learned! https://www.youtube.com/watch?v=NiM4mG6MSzU
This is my To Do List project based on requirements from the [Odin Project](https://www.theodinproject.com/lessons/node-path-javascript-todo-list).

The goal of this project was to learn and practice Object Oriented Programming principles, JS Classes, external libraries, and DOM manipulation.

### JS Lessons: 
I am proud of this project primarily for my use of the "Element Class" which works similarly to the React framework. The Element class can be used to create virtual DOM elements which can then be built into real DOM elements.

### OOP Lessons:
You can see the OOP principals used in this code by taking a look at the ToDo class, Project class, and the Librarian static class. Objects made w/ these classes do not know of or interact w/ each other unless they have to. Code is not shared between them unless necessary, and the flow of interaction b/w them is in on direction (i.e. To Do items do not know about Project objects. Project objects know about their own To Do items, but are unaware of other projects. The Librarian is in charge of having knowledge of all projects and to dos and is the only source the code can go to when it asks for that knowledge).
