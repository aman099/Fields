const refresh = document.querySelector(".refresh");
const refresh1 = document.querySelector(".refresh-1");
const refresh2 = document.querySelector(".refresh-2");
const input1 = document.querySelector(".refresh-input-1");
const input2_1 = document.querySelector(".input-refresh-container-1 input");
const input2_2 = document.querySelector(".input-refresh-container-2 input");

refresh.addEventListener("click", () => {
	input1.value = "";
	input1.focus();
});
refresh1.addEventListener("click", () => {
	input2_1.value = "";
	input2_1.focus();
});
refresh2.addEventListener("click", () => {
	input2_2.value = "";
	input2_2.focus();
});

const x1 = document.querySelector(
	".input-cont-3 .input .input-container div.x-1"
);
const x2 = document.querySelector(
	".input-cont-3 .input .input-container div.x-2"
);
const x3 = document.querySelector(
	".input-cont-3 .input .input-container div.x-3"
);
const searchInput1 = document.querySelector(".search-input-1");
const searchInput2 = document.querySelector(".search-input-2");
const searchInput3 = document.querySelector(".search-input-3");

x1.addEventListener("click", () => {
	searchInput1.value = "";
	console.log(searchInput1.value.length);
});
x2.addEventListener("click", () => {
	searchInput2.value = "";
});
x3.addEventListener("click", () => {
	searchInput3.value = "";
});
