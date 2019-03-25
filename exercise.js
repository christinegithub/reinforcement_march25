// print "lowercase" if the string is all lowercase
// print "long" if the string is more than 4 characters
// print "long and lowercase" if the string's length is more than 4 characters and it's all lowercase
// otherwise print the string itself

const list = ["Totam", "ut", "odit","quis", "Maiores", "unde", "EX", "EST", "corporis"];

function isLowerCase(str) {
    return str === str.toLowerCase();
}

function display(list) {
  for (let i = 0; i < list.length; i++) {
    if (isLowerCase(list[i]) == true & list[i].length > 4) {
      console.log('long and lowercase');
    } else if (list[i].length > 4) {
      console.log('long');
    } else if (isLowerCase(list[i]) == true) {
      console.log('lowercase');
    } else {
        console.log(list[i]);
    }
  }
}

display(list);
