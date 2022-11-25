let arrToSort = [];
let selectedIndex;
let arrChecks = 0;
let checked = true;
let sortAmount = 200;
populateArr();

showArr();

function populateArr() {
	arrToSort = [];
	for (let i = 0; i < sortAmount; i++) {
		arrToSort.push(Math.floor(Math.random() * 1000) + 50);
	}
	showArr();
}

function drawArr() {
	let graphs = "";
	for (let i = 0; i < arrToSort.length; i++) {
		graphs += `
        <div style="height:${arrToSort[i] / 2}px; ${
			selectedIndex === i ? "background-color:green" : ""
		}" id="${i}" class="bar"></div>
        `;
	}
	return graphs;
}

function plus() {
	sortAmount += 50;
	populateArr();
}
function minus() {
	sortAmount -= 50;
	populateArr();
}

function showArr() {
	let html = `
	${drawArr()}
	<div id="controller">
	<div class="btnController">
	<button onclick="sortAmount -= 50;populateArr()">-</button>
	<div>${sortAmount}</div>
	<button onclick="sortAmount += 50;populateArr()">+</button>
	</div>
	<button onclick="bubbleSort()">Click to bubble-sort</button>
	<div>This sorting algorithm needed ${arrChecks} total passes to sort</div>
	</div>
	
	`;
	document.getElementById("app").innerHTML = html;
}

// function bubbleSort() {
// 	let i, j;
// 	let arr = arrToSort;
// 	let len = arrToSort.length;

// 	let isSwapped = false;

// 	for (i = 0; i < len; i++) {
// 		isSwapped = false;
// 		showArr();
// 		for (j = 0; j < len; j++) {
// 			if (arr[j] > arr[j + 1]) {
// 				let temp = arr[j];
// 				arr[j] = arr[j + 1];
// 				arr[j + 1] = temp;
// 				isSwapped = true;
// 				arrChecks++;
// 			}
// 		}
// 		if (!isSwapped) {
// 			break;
// 		}
// 	}
// }

function bubbleSort() {
	let len = arrToSort.length;
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
			}, 1);
		}
	} while (checked);
	console.log("ferdig");
	clearInterval();
	return;
}
