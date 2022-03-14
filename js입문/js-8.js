
// split
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

var fruits = []

rl.on("line", function (line) {
  fruits = line.split(' ');
  rl.close();
}).on("close", function () {
  fruits = fruits.filter((element) => element !== '콩');




  fruits = fruits.filter((element) => element !== '무');
  console.log(fruits)
});

// Get multiple inputs at once.
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

var N = 0;
var count = 0;
var result = '';
rl.on("line", function (x) {
  if (count == 0) {
    N = parseInt(x);
  } else {
    result += x;



  }
  
  count += 1;
  
  if (count > N) {
    rl.close();
  }
}).on("close", function () {
  console.log(result);
  process.exit();
});
  

// find aliquot
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

var input;

rl.on("line", function (line) {
  input = parseInt(line);
  rl.close();
}).on("close", function () {
  var i = 1;
  var total = 0;
  var count = 0;



  var result = '';
  
  while (input >= i) {
    if (input % i == 0) {
      if (count % 10 == 0) {
        console.log(result);
        result = [];
      }
      result += i;
      result += ' ';
      count += 1;
    }
  i += 1;
  }
  console.log(result);
});

// and, or operator,relational operator
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

var a;
var b;
var c;
var d;
rl.on("line", function (line) {
  var input = line.split(' ').map((el) => parseInt(el));
  a = input[0];
  b = input[1];
  c = input[2];
  d = input[3];
  rl.close();
}).on("close", function () {
  console.log((a <= b && a == d && b > c && c < 6) || (a == b && a == c && a == d))
});