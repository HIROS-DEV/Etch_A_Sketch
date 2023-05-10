const gridContainer = document.querySelector('.grid-container');

for (let i = 0; i < 256; i++) {
    const div = document.createElement('div');
    div.classList.add('grid-item')
	gridContainer.appendChild(div);
}

const gridItems = document.querySelectorAll('.grid-item');
gridItems.forEach(grid => {
    grid.addEventListener('mouseenter', ()=> {
        grid.style.backgroundColor = "yellow";
    })
})
