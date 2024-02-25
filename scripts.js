let containerDiv = document.querySelector(".container");

for (let i = 0; i < (16 * 16); ++i) {
    let gridDiv = document.createElement('div');
    gridDiv.classList.add('grid-div');  
    console.log(i);
    containerDiv.appendChild(gridDiv);
}