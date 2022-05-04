let fruits = ["apple", "orange", "cherry"];

// 1. for
for(let i =0; i < fruits.length; i++){
  // fruits[0] let i = 2; i = i +2; i+=2
  document.getElementById('for').innerHTML += '<li>' + fruits[i]+'</li>'}

//문제 풀이
// 다음주어지는 값들에서 1,3,5,7번째 값들을 꺼내는 코드를 작성하시오
// 1, 100, 59, 93, 100, 23, 9,4

const arr = [1, 100, 6, 93, 100, 23, 9, 4]

for(let i=1; i<8; i+=2){
 console.log(arr[i])
};

//2. for each
fruits.forEach(function(item, index){
  document.getElementById('foreach').innerHTML += '<li>' +item+'</li>';
  // item 대신 fruits[index]을 써도 됨.
});

// 3. for of 
let item;
for(item of fruits) {
  document.getElementById('forof').innerHTML += '<li>' +item+'</li>';
};
for (const 요소 of 배열){
 console.log(요소)
 바나나 - 사과 - 귤
}

//4. for in (객체내에서만 사용)객체 = 변수(property) + 함수(method)
let person = {pname: '홀길동', page:'200', pgender: '남성'};
// 객체 안에서는 panme, page, pgender를 property라고 부름
let x;
for(x in person){
  document.getElementById('forin').innerHTML += '<li>' +x+':'+ person[x]+'</li>';
}
// 0 홍길동 1 200 3 남성

// 5. do/ while
let y = 0;
do {
  document.getElementById('dowhile').innerHTML += '<li>' +fruits[y]+'</li>';
y++;
}
while(y < fruits.length);