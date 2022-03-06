// __proto__
var superObj ={supeVal:'super'}
var subObj = {subVal:'sub'}
subObj.__proto__ = superObj;
//__proto__라는 prototype link를 통해서 객체를 상속 받을 수 있습니다. 
console.log('subObj.subVal=>', subObj.subVal);
console.log('subObj.superVal =>',subObj.superVal);
subObj.superVal ='sub'; //객체의 속성을 바꿔도 __proto__의 속성은 바뀌지 않습니다.
console.log('superObj.superVal =>', superObj.superVal); // 값은 유지 됨.

//Object.create
var superObj ={superVal:'super'}
var subObj = Object.create(superObj);
//__Proto__ 보다는 Object.create를 더 많이 사용함.
subObj.subVal ='sub';

console.log('subObj.subVal=>', subObj.subVal);
console.log('subObj.superVal=>', subObj.superVal);

subObj.supeVal ='sub';
console.log('superObj.superVal=>',superObj.superVal)

//call
var kim ={name:'kim', first:10, second:20}
var lee ={name:'lee', first:10, second:10}
lee.__proto__=kim

function sum(prefix){
  return prefix+(this.first+this.second);
}

console.log("sum.call(kim)", sum.call(kim,'=>'));
// call메소드를 이용하여 객체를 지정하여 sum을 사용할 수 있음
console.log("sum.call(lee)",sum.call(lee,':'));
// call은 여러인자를 가질 수 있는데 앞에는 this로 지정한 객체, 두번째는 함수의 인자로 들어갈 값이 된다.

//bind
var kim = {name:'kim',first:10,second:20}
var lee = {name:'lee',first:10,second:10}
lee.__proto__ = kim

function sum(prefix){ 
    return prefix+ (this.first + this.second);
}

//sum();
console.log("sum.call(kim)",sum.call(kim,'=> '));
console.log("sum.call(lee)",sum.call(lee,': '));

var kimSum = sum.bind(kim, '-> ');
// call은 this의 값을 변경한다면, bind는 내부적으로 this의 값을 영구적으로 바꿔주는 함수를 바꾼다.
console.log('kimSum()', kimSum());