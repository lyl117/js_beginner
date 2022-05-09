const ulElem = document.querySelector(".ht");

console.log(ulElem);

async function fetchList() {
  // josn file에서 자료 가지고 옴
  let response = await fetch(
    `https://s3.us-west-2.amazonaws.com/secure.notion-static.com/f6e4d3d3-c52c-4ea8-b665-968a3b17c5ea/bank.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220509T070905Z&X-Amz-Expires=86400&X-Amz-Signature=bdd390d590684649af20dfd5dcb29f6d75f1c96b46d99a7e28f20c187bc56e90&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22bank.json%22&x-id=GetObject`
  );
  const obj = await response.json();
  console.log(obj.bankList[0]);
  console.log(obj.bankList[0].history);
  console.log(obj.bankList[0].price);

  for (let i = 0; i < obj.bankList.length; i++) {
    // 데이터를 넣을 요소 생성
    const li = document.createElement("li");
    const itemName = document.createElement("span");
    const price = document.createElement("span");

    // 날짜 넣어주기

    // 해당 되는 날짜에 합산 금액 넣어주기

    // 요소에 데어터 넣기
    itemName.innerText = obj.bankList[i].history;
    price.innerText = obj.bankList[i].price;

    // 생성된 요소 html에 넣기
    li.appendChild(itemName);
    li.appendChild(price);
    ulElem.appendChild(li);
  }
}

fetchList();
