let table = document.querySelector("table");
let prices = document.querySelectorAll(".price");
console.log(prices);

let total = Array.from(prices)
  .map((price) => Number(price.innerText))
  .reduce((acc, curr) => {
    return acc + curr;
  }, 0);

let tr = document.createElement("tr");
let td = document.createElement("td");
td.innerText = total;
td.colSpan = 2;

tr.appendChild(td);
table.appendChild(tr);
