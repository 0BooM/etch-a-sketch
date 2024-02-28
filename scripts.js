// First Canvas
let containerDiv = document.querySelector(".container");

for (let i = 0; i < (16 * 16); ++i) {
    let gridDiv = document.createElement('div');
    gridDiv.classList.add('grid-div');  
    containerDiv.appendChild(gridDiv);
}
fillGridBackgroundByMovingMouse();

function fillGridBackgroundByMovingMouse(){
    let gridDivs = document.querySelectorAll('.grid-div');

    gridDivs.forEach(gridDiv => {
        gridDiv.addEventListener('mousemove', () => {
            gridDiv.classList.add('hover');
        })
    });
}

// Making canvas with user size

let userValueBtn = document.querySelector('.userValue');

let userGridValue;

function askUserForAValue(){
        userGridValue = prompt(
          "How big do you want the grid to be? (Max number is 100)",
          "15"
        );
        while (userGridValue > 100) {
          userGridValue = prompt(
            "How big do you want the grid to be? (Max number is 100)",
            "15");
        }
}

function makeNewGridRemoveTheOldOne(){
    containerDiv.innerHTML = ''; // Remove content from canvas
    let newGridValue = userGridValue * userGridValue
    let gridDivFlexBasisValue = 960 / userGridValue;
        for (let i = 0; i < newGridValue; ++i) {
        let gridDiv = document.createElement("div");
        gridDiv.classList.add("grid-div");
        gridDiv.style.flexBasis = gridDivFlexBasisValue + `px`;
        gridDiv.style.height = gridDivFlexBasisValue + `px`;
        containerDiv.appendChild(gridDiv);
        }

    fillGridBackgroundByMovingMouse();
}

userValueBtn.addEventListener('click', () => {
    askUserForAValue();
    makeNewGridRemoveTheOldOne();
})