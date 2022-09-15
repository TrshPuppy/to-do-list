export default class List {
  constructor(listName) {
    this.name = listName;
    this.listItems = [];
  }

  appendItemToListArray(item) {
    appendItemToArray(item, this.listItems);
  }
}

export function appendItemToArray(item, array) {
  array.push(item);
  return;
}

export function removeItemFromArray(item, array) {
  let itemToRemove = array.find;
}
