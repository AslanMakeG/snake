let main = document.getElementById("main");

const ROWS = 20;
const COLS = 10;

function setUpField(){
    const cellHeight = parseInt(getComputedStyle(main).height.replace('px', '')) / ROWS;
    const cellWidth =  parseInt(getComputedStyle(main).width.replace('px', ''))  / COLS;

    for(let i = 0; i < ROWS; i++){
        for(let j = 0; j < COLS; j++){
            let newCell = document.createElement('div')
            newCell.style.height = cellHeight + 'px';
            newCell.style.width = cellWidth + 'px';
            newCell.classList.add('cell');
            newCell.id = `cell_${i}_${j}`;

            main.appendChild(newCell);
        }    
    }
}

setUpField();