export default function appendItemToArray(item, array) {
  array.push(item);
  return;
}

export function removeItemFromArray(item, array) {
  let indexToRemove = array.indexOf(item);
  array.splice(indexToRemove, 1);
  //   console.log(array);
}

export function editItemDetail(item, detail) {
  //name
  // priority

  console.log(item);
  console.log(detail);
}
