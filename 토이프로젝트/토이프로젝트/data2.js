function dayChange(date) {
  if (date === "2021-10-03") return "오늘";
  if (date === "2021-10-02") return "어제";
  if (date === "2021-10-01") return "그제";
  return date;
}

async function fetchList() {
  // josn file에서 자료 가지고 옴
  let response = await fetch(
    `https://s3.us-west-2.amazonaws.com/secure.notion-static.com/f6e4d3d3-c52c-4ea8-b665-968a3b17c5ea/bank.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220512T053327Z&X-Amz-Expires=86400&X-Amz-Signature=7383d633f9d90e5b1bd1761fea3d9ab819a0f09b58436dd28ee88530f69842c5&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22bank.json%22&x-id=GetObject`
  );
  const obj = await response.json();

  const bankList = obj.bankList.reverse();

  console.log(obj);

  let beforeDate = "";

  const divElem = document.querySelector(".ht");
  let ulElem;

  // ul 생성 + 날짜 및 합계 li 생성  반복문
  for (let i = 0; i < bankList.length; i++) {
    if (beforeDate !== bankList[i].date) {
      // date li 생성
      ulElem = document.createElement("ul");
      ulElem.classList.add("list");

      const firstLi = document.createElement("li");
      firstLi.classList.add("day");
      const when = document.createElement("span");
      const sum = document.createElement("span");
      when.classList.add("when");
      sum.classList.add("sum");
      when.innerText = dayChange(bankList[i].date);

      firstLi.appendChild(when);
      firstLi.appendChild(sum);
      ulElem.appendChild(firstLi);
      divElem.appendChild(ulElem);

      beforeDate = bankList[i].date;
    }

    // item li 생성
    const li = document.createElement("li");
    li.classList.add("day");
    const itemName = document.createElement("span");
    const price = document.createElement("span");
    itemName.innerText = bankList[i].history;
    price.innerText = bankList[i].price;
    li.appendChild(itemName);
    li.appendChild(price);
    ulElem.appendChild(li);
    divElem.appendChild(ulElem);
  }
}

fetchList();
