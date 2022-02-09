// 중첩 반복문 
for(let i =0; i<10; i ++){
	for(let j =0; j<10; j++){
	console.log(i,j);
	}
}
// 보통 4개까지 나옴.
// i == 0 j==0 console.log(0,0);
// i == 0 j==1 console.log(0,1);
// i == 0 j==9 console.log(0,9);
// i == 0 j==10 조건 x, 
// i == 1 j==1 으로 넘어감.이런형식이 계속됨.

// 3개 중첩문
for(let i = 0; i < 5; i++){
	if(i % 2 === 0) continue;
	for(let j = 0; j<5; j++){
		if(j % 2 === 0) continue;
		for(let k =0; k<5; k++){
			if(k % 2 === 0 ) continue;
			console.log(i,j,k);
		}
	}
}
//1 1 1
//1 1 3
//1 3 1
//1 3 3
//3 1 1
//3 1 3
//3 3 1
//3 3 3
//구구단 만들고 짝수는 하나도 안나오게 해보기
  for (let i = 0; i<10; i++){
  //i++ 대신 i += 2, i = i+2 도 됨.
    if(i % 2 === 0 ) continue;
    for (let j =0; j<10; j++){
      if(j % 2 ===0 ) continue;
  console.log(i,j,i*j)
  }
}
//1 1 1
//1 3 3
//1 5 5
//1 7 7
//1 9 9
//3 1 3
//3 3 9
//3 5 15
//3 7 21
//3 9 27
//5 1 5
//5 3 15
//5 5 25
//5 7 35
//5 9 45
//7 1 7
//7 3 21
//7 5 35
//7 7 49
//7 9 63
//9 1 9
//9 3 27
//9 5 45
//9 7 63
//9 9 81

//별 찍기
//차례대로 1-5 찍기
//01.
for(let i=0; i<=5; i++){
  console.log('*'.repeat(i));
}
//02.while문으로 만들어보기
let i =0;
while (i <= 5) {
  console.log('*'.repeat(i));
  i++;
}
// 많은 것부터 5-1순서대로 찍기
//01.
for(let i=5; i>=1; i--){
  console.log('*'.repeat(i));
}
//01-2 while문으로 만들기
let i = 5;
while (i >=1){
  console.log('*'.repeat(i));
  i--;
}
//02.
for(let i=0; i< 5; i++){
  console.log('*'.repeat(5-i));
}
// 5-0 5
// 5-1 4
// 5-2 3
// 5-3 2
// 5-4 1

//02-1 while문으로 만들기 
let i = 0;
while(i < 5){
  console.log('*'.repeat(5-i)); 
  i++;
}
//1,3,5,7,9개의 별찍기 
for(let i=1; i<=9;i++){
  console.log('*'.repeat(i++));
}
//1 1
//2 3
//3 5
//4 7
//5 9

//while문 만들기 
let i = 1;
while (i <=9){
  console.log('*'.repeat(i++));
  i++;
}
//9,7,5,3,1 별찍기
for(let i=9;i>=1; i--){
  console.log('*'.repeat(i--));
}
//1 9
//2 7
//3 5
//4 3
//5 1

// while문 만들기 
let i = 9;
while(i >=1){
  console.log('*'.repeat(i--));
  i--;
}

//0,1,2,3,4개 띄어서 별찍기 
for(let i=5; i>=1; i--){
  console.log(''.repeat(5-i)+'*'.repeat(i));
}


//4,3,2,1,0개 띄어서 별찍기 
for(let i=1 ; i <=5 ; i++){
  console.log(' '.repeat(5-i) + '*'.repeat(i)) //1,2,3,4,5 공백같이찍기
}
