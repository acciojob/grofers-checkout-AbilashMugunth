const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);


function getSum() {
	let table = document.querySelector("table");
	let prices = document.querySelectorAll(".price");
	
	let total = Array.from(prices)
	  .map((price) => Number(price.innerText))
	  .reduce((acc, curr) => {
	    return acc + curr;
	  }, 0);
	
	let tr = document.createElement("tr");
	let td = document.createElement("td");
	td.innerText = "Total Price";
	let td2 = document.createElement("td");
	td2.colSpan=2;
	td2.innerText = total;
	
	tr.append(td, td2);
	table.appendChild(tr);
}

getSumBtn.addEventListener("click", getSum);