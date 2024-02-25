let containerDiv = document.querySelector(".container");

for (let i = 0; i < (16 * 16); ++i) {
    let gridDiv = document.createElement('div');
    gridDiv.classList.add('grid-div');  
    containerDiv.appendChild(gridDiv);
}

let gridDivs = document.querySelectorAll('.grid-div');

gridDivs.forEach(gridDiv => {
    gridDiv.addEventListener('mousemove', () => {
        gridDiv.classList.add('hover');
    })
});