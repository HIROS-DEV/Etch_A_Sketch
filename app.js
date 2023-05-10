const gridContainer = document.querySelector('.grid-container');

for (let i = 0; i < 256; i++) {
	const div = document.createElement('div');
	div.style.border = '1px solid black';
	gridContainer.appendChild(div);
}
