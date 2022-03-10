
// while 
var num =0;
while(num < 10){
    document.write(num);
    num++
} 

// do~ while
var i = 12;
do{
  document.write(i);
  i++;
} while (i<10);

// for(gugudan)
for(var i =0; i<10; i++){
  document.writeln(2 + "*" + i + "=" + 2*i);
}

//Math.random (dice game)
function rand(maxNum){
  var dice = Math.floor(Math.random()* maxNum)+1;
  document.write(dice);
}
rand(6);

//prime Number
function isPrime(n){
  var divisor = 2;
  if(n == 1) {
      return false
  }
  while(n > divisor){
  if(n % divisor == 0){
      return false;
  }else {
  divisor++;
  }
}
  return true;
}

for(var i = 1; i <= 10; i++) {
  document.writeln(i, isPrime(i));
}

// the string backwards.
function reverse(str){

  var reverStr = "";
  for(var i = str.length-1; i>=0; i--){
      reverStr = reverStr + str.charAt(i);
  }
  return reverStr;
}

document.write(reverse("Nice to meet you"));

//gugudan
function timesTable(n) {
  for(i=1; i<10; i++) {
  document.write(n + "x" + i + "=" + n*i +'<br>');        
  }
}

timesTable(2); 
timesTable(3); 

// for statement gugudan
for(n=2; n<10; n++) {
  for(i =1; i<10; i++) {
document.write(n + "x" + i + "=" + n*i +'<br>');        
}   
}
