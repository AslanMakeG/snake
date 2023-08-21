let main = document.getElementById("main");

const ROWS = 21;
const COLS = 21;

let MAP = [];

const DIRECTIONS = {
    'Left': [0, -1],
    'Right': [0, 1],
    'Up': [-1, 0],
    'Down': [1, 0]
};

let currentDirection = 'Up';

let SNAKE = [];

let gameInterval;

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

    SNAKE.push([posX - 1, posY]);
    SNAKE.push([posX, posY]);
    SNAKE.push([posX + 1, posY]);

    document.getElementById(`cell_${posX - 1}_${posY}`).classList.add('snake_head');
    document.getElementById(`cell_${posX}_${posY}`).classList.add('snake_body');
    document.getElementById(`cell_${posX + 1}_${posY}`).classList.add('snake_body');
}

function game(){
    let prevCellX = SNAKE[0][0];
    let prevCellY = SNAKE[0][1];
    SNAKE[0][0] += DIRECTIONS[currentDirection][0];
    SNAKE[0][1] += DIRECTIONS[currentDirection][1];


    if(SNAKE[0][0] > ROWS - 1 || SNAKE[0][1] > COLS - 1 
        || SNAKE[0][0] < 0 || SNAKE[0][1] < 0){

        clearInterval(gameInterval);
        console.log('GAME OVER!');
        
        return;
    }

    document.getElementById(`cell_${prevCellX}_${prevCellY}`).classList.remove('snake_head');
    document.getElementById(`cell_${SNAKE[0][0]}_${SNAKE[0][1]}`).classList.add('snake_head');

    for(let i = 1; i < SNAKE.length; i++){
        let tempX = SNAKE[i][0];
        let tempY = SNAKE[i][1];

        SNAKE[i][0] = prevCellX;
        SNAKE[i][1] = prevCellY;

        prevCellX = tempX;
        prevCellY = tempY;

        document.getElementById(`cell_${prevCellX}_${prevCellY}`).classList.remove('snake_body');
        document.getElementById(`cell_${SNAKE[i][0]}_${SNAKE[i][1]}`).classList.add('snake_body');
    }
}

setUpField();
gameInterval = setInterval(game, 1000); 