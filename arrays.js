var chocolateBars = ['snickers', 'hundred grand', 'kitkat','skittles'];

function addElementToBeginningOfArray(element,array){
  return array.unshift(element);

}

function destructivelyAddElementToBeginningOfArray(element,array){
  var newElement = array.unshift(element);
  return newElement
}