let table = document.querySelector("table");
let prices = document.querySelectorAll(".price");

const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
	let total = Array.from(prices)
	  .map((price) => Number(price.innerText))
	  .reduce((acc, curr) => {
	    return acc + curr;
	  }, 0);
	
	let tr = document.createElement("tr");
	let td = document.createElement("td");
	td.innerText = total;
	
	tr.appendChild(td);
	table.appendChild(tr);
};

getSumBtn.addEventListener("click", getSum);


