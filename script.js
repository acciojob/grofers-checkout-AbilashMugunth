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
	
  const newRow = table.insertRow(table.rows.length);
  const cell1 = newRow.insertCell(0);
  const cell2 = newRow.insertCell(1);

  // Set the cell values
  cell1.textContent = "Total Price";
  cell2.textContent = total;

  // Style the new row
  newRow.style.fontWeight = "bold";
}

getSumBtn.addEventListener("click", getSum);