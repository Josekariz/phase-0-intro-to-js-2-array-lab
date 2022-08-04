// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"];

//destructively append cat
function destructivelyAppendCat(name) {
  cats.push("Ralph");
}

//destructivelyprependcat
function destructivelyPrependCat(name) {
  cats.unshift("Bob");
}

//destructivelyremovelastcat
function destructivelyRemoveLastCat(name) {
  cats.pop();
}

//destructivelyremovefirstcat
function destructivelyRemoveFirstCat(name) {
  cats.shift();
}

//append cat name
function appendCat(name) {
  let members;
  return (members = [...cats, name]);
}
appendCat("Broom");

//prepend cat name
function prependCat(name) {
  let members;
  return (members = [name, ...cats]);
}
prependCat("Arnold");

// remove first cat
function removeLastCat() {
  let members = cats.slice();
  members.pop();
  return members;
}
removeLastCat();

//Remove first cat
function removeFirstCat() {
  let members = cats.slice();
  members.shift();
  return members;
}
