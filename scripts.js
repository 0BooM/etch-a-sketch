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
        console.log(userGridValue);
}

userValueBtn.addEventListener('click', askUserForAValue)