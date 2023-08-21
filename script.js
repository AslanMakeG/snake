let main = document.getElementById("main");

const ROWS = 21;
const COLS = 21;

let MAP = [];

function setUpField(){
    const cellHeight = parseInt(getComputedStyle(main).height.replace('px', '')) / ROWS;
    const cellWidth =  parseInt(getComputedStyle(main).width.replace('px', ''))  / COLS;

    for(let i = 0; i < ROWS; i++){
        let mapRow = [];

        for(let j = 0; j < COLS; j++){
            let newCell = document.createElement('div')
            newCell.style.height = cellHeight + 'px';
            newCell.style.width = cellWidth + 'px';
            newCell.classList.add((i + j) % 2 == 0 ? 'cell_even' : 'cell_odd');
            newCell.id = `cell_${i}_${j}`;

            main.appendChild(newCell);

            mapRow.push(0);
        }   
        MAP.push(mapRow);
    }

    let posX = Math.floor(COLS / 2);
    let posY = Math.floor(ROWS / 2);

    MAP[posX - 1][posY] = 'h';
    MAP[posX][posY] = 'b';
    MAP[posX + 1][posY] = 'b';

    document.getElementById(`cell_${posX - 1}_${posY}`).classList.add('snake_head');
    document.getElementById(`cell_${posX}_${posY}`).classList.add('snake_body');
    document.getElementById(`cell_${posX + 1}_${posY}`).classList.add('snake_body');
}

setUpField();
console.log(MAP);