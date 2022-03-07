//variable create
var fruit
fruit = "apple";
console.log(fruit);
var box ="banana";
console.log(box);
document.write(fruit);
document.write(box);
box = "tomato";
console.log(box);
document.write(box);

// string
var str1 = "Hello World";
var str2 = "Nice to meet you";
var str3 = "She's a girl";
document.writeln(str1);
document.writeln(str2);
document.writeln(str3);

//number
var num1 = 10;
var num2 = 3.14;
document.write(num1+ num2);

//function
var sum = function(num1,num2){
  return num1+num2;
}
document.write(sum(10,20));

var mul = function(num3,num4) {
  return num3 * num4;
  }
document.write(mul(3,4));

//arrangement
var fruit = ["Apple", "Banana"];
document.write(fruit);
document.write(fruit[0]);
fruit[0] = "Tomato";
document.write(fruit);