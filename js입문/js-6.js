
// 1.값 입력 받기 Receive the value.
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

  rl.on("line", (line) => { 
      // 한 줄씩 입력받은 후 실행할 코드
     // 입력된 값은 line에 저장된다.
   console.log(line);
      rl.close(); // close가 없으면 입력을 무한히 받는다.
  });
  rl.on('close', () => {
    // 입력이 끝난 후 실행할 코드
  })

  //2.화살표 함수 Arrow function.
  var elice = [
    'rabbit',
    'cheshire',
    'mad hatter',
    'heart queen'
  ];
  // 화살표 함수를 이용해 변경해보세요.
  console.log(elice.map(e => e.length));


// 3.한 번에 여러 입력 받기 Receive multiple inputs at once.
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

var input = [100,200,300]

rl.on("line", function (line) {
    input = line.split(' ');
    console.log(input[0]);
     console.log(input[1]);
      console.log(input[2]);
  rl.close();
}).on("close", function () { 
});

// 문자를 기준으로 나누어 배열 출력하기 Dividing based on characters and outputting an array.
// money 문자열입니다. money is characters.
var money = '500원, 엘리스 토끼는 하루 용돈으로 500원. 단돈 500원을 받는다. 부모님이 주시는 500원. 하지만 잘못한 것이 있으면 500원을 받지 못한다.'

// 지시사항을 참고하여 코드를 작성하세요. Write the code by referring to the instructions.
var mmm = money.split('500원');
console.log(mmm);

// 배열에서 특정 값을 추출하여 이어 붙여 출력하기 Extract a specific value from the array, connect it, and print it out.
hangul = ['나', '랏', '말', '싸', '미', '듕', '귁', '에', '달', '아', '문', '자', '와', '로', '서', '르', '사', '맛', '띠', '아', '니', '할',
          '쌔', '이', '런', '젼', '차', '로', '어', '린', '백', '셩', '이', '니', '르', '고', '져', '홀', '빼', '이', '셔', '도', '마', '참',
          '내', '제', '뜨', '들', '시', '러', '펴', '디', '못', '할', '노', '미', '하', '니', '라']
          
var result = hangul[0];
var result1 = hangul[47];
var result2 = hangul[23];
console.log(result + result1 + result2);

// 배열을 오름차순으로 정렬 후 배열의 길이를 count 변수에 저장하기 

var soldier = [12, 2, 5, 3, 7, 4, 10, 8, 1, 9, 13, 11, 6];

// 정렬된 배열과 길이를 구하세요.
soldier.sort (function compareNumbers(a, b) {
    return a - b;
});
var count = 0;
var count = soldier.length;

// 채점을 위한 코드입니다. 수정 하지 마세요!
console.log(soldier);
console.log(count);

//splice, join, match
var words = ['i', 'have', 'a', 'pen', 'i', 'have', 'pineapple', 'i', 'have', 'an', 'apple', 'pen'];

// 지시사항을 참고하여 코드를 작성하세요.
var result = words.splice(words.length - 8, 2);
var result = words.splice(words.length - 5, 3);
var lyrics;
var www = words.join(' ');
console.log(www);
var mmm = 'p'.match('p');
console.log(words.length);