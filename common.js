let arrToSort = [];
let selectedIndex;
let sliderVal = 200;
let arrChecks = 0;
populateArr();

showArr();

function populateArr(amount) {
	sliderVal = amount;
	arrToSort = [];
	for (let i = 0; i < amount; i++) {
		arrToSort.push(Math.floor(Math.random() * 1000));
	}
	showArr();
}

function makeController() {
	document.getElementById("controller").innerHTML = /*HTML*/ `
	<div>${arrToSort.length}</div>
	<input type="range" min="50" max="300" value="${sliderVal}" class="range" onchange="populateArr(this.value)">
	<button onclick="bubbleSort()">Click to bubble-sort</button>
	`;
}

function showArr() {
	let html = "";
	for (let i = 0; i < arrToSort.length; i++) {
		html += `
        <div style="height:${arrToSort[i] / 2}px; ${
			selectedIndex === i ? "background-color:green" : ""
		}" id="${i}" class="bar"></div>
        `;
	}
	document.getElementById("app").innerHTML = html;
	makeController();
}

function bubbleSort() {
	let len = arrToSort.length;
	let checked = false;
	do {
		checked = false;
		for (let i = 0; i < len; i++) {
			setInterval(() => {
				if (arrToSort[i] > arrToSort[i + 1]) {
					arrChecks++;
					selectedIndex = arrToSort[i];
					let tmp = arrToSort[i];
					arrToSort[i] = arrToSort[i + 1];
					arrToSort[i + 1] = tmp;
					checked = true;
					showArr();
				}
			}, 20);
		}
	} while (checked);
	return arrToSort;
}
