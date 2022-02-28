const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");

canvas.width=700;
canvas.height = 700;

ctx.strokeStyle = "##2c2c2c"; // 선의 색깔
ctx.lineWidth = 2.5; //선의 넓이

let painting = false;

function stopPainting(){
  painting = true;
}

function startPainting(){
  painting = true;
}

function onMouseMove(event){
  const x = event.offsetX;
  const y = event.offsetY;
  if(!painting){
    ctx.beginPath(); //경로 생성
    ctx.moveTo(x,y); //선 시작 좌표
  } else {
    ctx.lineTo(x,y); //선 끝 좌표
    ctx.stroke(); //선 그리기 
  } //마우스가 움직이는 동안 선이 만들어진다.
}
function onMouseDown(event){
  painting = true;
}


if(canvas){
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mousedown", startPainting);
  canvas.addEventListener("mouseup", stopPainting);
  canvas.addEventListener("mouseleave", stopPainting);
}