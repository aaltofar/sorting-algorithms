let arrToSort = [];
let selectedIndex;
populateArr();

showArr();

function populateArr() {
	for (let i = 0; i < 200; i++) {
		arrToSort.push(Math.floor(Math.random() * 1000));
	}
}

function showArr() {
	let html = "";
	for (let i = 0; i < arrToSort.length; i++) {
		html += `
        <div style="height:${arrToSort[i]}px; ${
			selectedIndex === i ? "background-color:green" : ""
		}" id="${i}" class="bar"></div>
        `;
	}
	document.getElementById("app").innerHTML = html;
}

function bubbleSort() {
	let len = arrToSort.length;
	let checked = false;
	do {
		checked = false;
		for (let i = 0; i < len; i++) {
			setInterval(() => {
				if (arrToSort[i] > arrToSort[i + 1]) {
					selectedIndex = arrToSort[i];
					let tmp = arrToSort[i];
					arrToSort[i] = arrToSort[i + 1];
					arrToSort[i + 1] = tmp;
					checked = true;
					showArr();
					console.log(i);
				}
			}, 20);
		}
	} while (checked);
	return arrToSort;
}
