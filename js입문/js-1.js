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

//Object 
var student = {
  name : "Elice",
  age: 20,
  skills: ["Java", "HTML", "CSS","JavaScript"],
  sum: function(num1,num2) {
  return num1 + num2;
  }
}
student["name"] = "park";
document.write(student['name']);
document.write(student.sum(10,20));

//Undefined, Null
var str1;
document.write(str1);
var empty= null;
document.write(empty);

//Boolean
var t = true;
var f = false;
document.write(t,f);

//property, method
//String(length,charAt,split)
var str1 = "Hello World";
document.write(str1.length);
document.write(str1.charAt(0));
document.write(str1.split(" "));

// arrangement(push,unshift,pop,shift)
var fruit = ["Apple", "Banana","Tomato"];
document.write(fruit.length);
fruit.push("A");
fruit.unshift("B");
​
document.write(fruit);
fruit.pop("-1");
fruit.shift("0");

document.write(fruit);

//Math(abs,ceil,floor,random)
document.write(Math.abs(-3));
document.write(Math.ceil(0.3));
document.write(Math.floor(10.9));
document.write(Math.random());

//parseInt, parseFloat
var str1 ="20.14";
document.write(parseInt(str1));
document.write(parseFloat(str1));