module.exports = function check(str, bracketsConfig) {
  str = str.split("");
  let myStack = new Array();
  console.log(str);
  console.log(bracketsConfig[0][0]);
  if (str.length < 2) {
    console.log(false);
  } else if (str.length % 2 === 1) {
    console.log(false);
  } else {
    for (let i = 0; i < str.length; i++) {
      if (str[i] === bracketsConfig[0][0]) {
        myStack.push(str[i]);
        console.log(myStack + "pushed");
      } else if (myStack.length !== 0 && str[i] === bracketsConfig[0][1]) {
        myStack.pop(str[i]);
        console.log(myStack + "popped");
      } else {
        return false;
      }
    }
    if (myStack.length === 0) {
      return true;
    }
  }
}
