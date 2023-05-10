const gridContainer = document.querySelector('.grid-container');
const selectBtn = document.querySelector('button');

for (let i = 0; i < 256; i++) {
	const div = document.createElement('div');
	div.classList.add('grid-item');
	gridContainer.appendChild(div);
}

const gridItems = document.querySelectorAll('.grid-item');

gridItems.forEach((grid) => {
    grid.addEventListener('mouseenter', () => {
        grid.style.backgroundColor = 'yellow';
    });
});

selectBtn.addEventListener('click', (e) => {
	gridContainer.replaceChildren();
    const gridNumber = prompt('Please enter a grid number', 16);
    
    if (gridNumber > 100) return;
    if (gridNumber < 0) return;

	for (let i = 0; i < gridNumber * gridNumber; i++) {
		const div = document.createElement('div');
		div.classList.add('grid-item');
		gridContainer.style.gridTemplateColumns = `repeat(${gridNumber},1fr)`;
		gridContainer.appendChild(div);
    
    
    const gridItems = document.querySelectorAll('.grid-item');

		gridItems.forEach((grid) => {
			grid.addEventListener('mouseenter', () => {
				grid.style.backgroundColor = 'yellow';
			});
		});}
});
