// heading이라는 변수를 선언하고 h1태그를 저장한 꼴이 되었다.
var heading =document.querySelector("#heading");
// h1 태그를 클릭을 하면 글자 색깔을 red로 설정하시오.
heading.onclick = function() {
  heading.style.color = "red";
}