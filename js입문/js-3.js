//arithmetic operator
document.write(20 + 10);
document.write(20 - 10);
document.write(20 * 10);
document.write(20 / 10);
document.write(20 % 10);
document.write("20" + "10");
document.write("20" - "10");
document.write("20" * "10");
document.write("20" / "10");
document.write("20" % "10");
document.write("Elice " + "Lee");

//increase operator
var num = 20;

document.writeln(++num);
document.writeln(--num);
document.writeln(num++);
document.writeln(num);
document.writeln(num--);
document.writeln(num);

//comparison operator
document.writeln(10 == 10);
document.writeln(10 === 10);
document.writeln(10 == "10");
document.writeln(10 === "10");
document.writeln(10 !== 20);
document.writeln(10 > 20);
document.writeln(10 >= 20);
document.writeln(10 < 20);
document.writeln(10 <= 20);

//logical operator 
document.write(10 === 10 && 20 === 30);
document.write(10 === 10 || 20 === 30);

//if statement
var a = 20;
var b = 40;

if(a<b){
    document.write("a < b");
}

// if ~ else statement
var a = 20;
var b = 40;

if(a<b){
    document.write("a > b");
}

// else if statement
var a = 20; 
var b = 40;
var c = 60;

if(a > b){
 document.write("a > b");
}else if (b > c) {
    document.write("b > c");
}else if (a < c) {
    document.write("a < c");
}else if (b < c) {
    document.write("b < c");
}else  {
    document.write("모든 조건을 만족하지 않는다.");
}

// nested if statement
var a = 20;
var b = 40;

if(a !== b) {
    if(a > b) {
    document.write("a > b");
    } else {
    document.write("a < b");
    }
} else {
    document.write("a === b");
}