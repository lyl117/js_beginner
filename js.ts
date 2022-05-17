function calculate(i: string, x: number, y: number) {
  switch (i) {
    case "add":
      return x + y;
    case "substract":
      return x - y;
    case "multiply":
      return x * y;
    case "divide":
      return x / y;
    case "remainder":
      return x % y;
  }
}
console.log(calculate("add", 1, 3));

console.log(calculate("substract", 3, 1));
// 2
console.log(calculate("multiply", 4, 2));
// 8
console.log(calculate("divide", 4, 2));
// 2
console.log(calculate("remainder", 5, 2));
// 1

const position = { x: 0, y: 0 };
function move(direction: string) {
  switch (direction) {
    case "up":
      return (position.y = position.y + 1);
    case "down":
      return (position.y = position.y - 1);
    case "left":
      return (position.x = position.x - 1);
    case "right":
      return (position.x = position.x + 1);
  }
}

console.log(position); // { x: 0, y: 0}
move("up");
console.log(position); // { x: 0, y: 1}
move("down");
console.log(position); // { x: 0, y: 0}
move("left");
console.log(position); // { x: -1, y: 0}
move("right");
console.log(position); // { x: 0, y: 0}
