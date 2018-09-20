const screen = document.querySelector('#screen');
const updateButton = document.querySelector('#update');

let storedNumber;
document.querySelector('.buttons').addEventListener('click', (event) => {
	if (event.target.classList.contains('buttons')) return;
  storedNumber = event.target.value;
});

document.querySelector('#update').addEventListener('click', event => {
	screen.innerText = storedNumber;
})