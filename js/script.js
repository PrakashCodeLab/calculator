const displayOutput = document.querySelector('#display__button');
const resultDisplay = document.querySelector('#result__display');
const display = (num) => {
	displayOutput.value += num;
}
const calculate = () => {
	try {
		displayOutput.value = eval(displayOutput.value);
	} catch(err) {
		alert('invalid number')
	}
	resultDisplay.innerText = `your Results is : ${displayOutput.value}`;
}
const cl = () => {
	displayOutput.value = ""
}
const del = () => {
	displayOutput.value = displayOutput.value.slice(0, -1)
}
const toggleSec = document.querySelector(".toggle__sec")
const toggleBall = document.querySelector(".toggle__ball")
const body = document.querySelector('.body')
toggleSec.addEventListener('click', () => {
	toggleSec.classList.toggle('toggle__active');
	body.classList.toggle('darkMode');
})