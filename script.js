const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);
let table = document.querySelector("table");
let prices = document.querySelectorAll(".price");

function getSum() {
	let total = Array.from(prices)
	  .map((price) => Number(price.innerText))
	  .reduce((acc, curr) => {
	    return acc + curr;
	  }, 0);
	
	let tr = document.createElement("tr");
	let td = document.createElement("td");
	td.innerText = "total";
	let td2 = document.createElement("td");
	td2.innerText = total;
	
	tr.append(td, td2);
	table.appendChild(tr);
}

getSumBtn.addEventListener("click", getSum);