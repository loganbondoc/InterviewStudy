document.addEventListener("DOMContentLoaded", function() {
    // make an array for all the squares
// var boardRows = [row1, row2, row3];
// var boardColumns = [column1, column2, column3];

// list of squares
var squares = document.getElementsByClassName("square");
var board = [];
const message = document.getElementById("message");

// getting all squares from board
const square1 = document.getElementById("square1");
const square2 = document.getElementById("square2");
const square3 = document.getElementById("square3");
const square4 = document.getElementById("square4");
const square5 = document.getElementById("square5");
const square6 = document.getElementById("square6");
const square7 = document.getElementById("square7");
const square8 = document.getElementById("square8");
const square9 = document.getElementById("square9");

// const row1 = [square1, square2, square3];
// const row2 = [square4, square5, square6];
// const row3 = [square7, square8, square9];

// const column1 = [square1, square4, square7];
// const column2 = [square2, square5, square8];
// const column3 = [square3, square6, square9];


function setupGame(){
    // turn it into a multidimensional array
    let row = [];
    for(i = 0; i < 9; i++){
        let square = squares[i];
        square.addEventListener("click", makeMove);
        row.push(square);
        console.log("added square!");

        if(row.length == 3){
            board.push(row);
            row = [];
        }
    }
}

setupGame();

// check if any horizontal wins
function checkRows(currentBoard){
    // check rows
    let xCounter = 0;
    let oCounter = 0;

    for(i = 0; i < 3; i++){
        for(j = 0; j < 3; j++){
            console.log("a");
            
            // check if anyone won
            if (xCounter == 3){
                xMsg = "X Wins!"
                endGame(xMsg);
            } else if (oCounter == 3){
                oMsg = "O Wins!"
                endGame(oMsg);
            }
            
            // check to see what populates rows
            if(currentBoard[i][j].innerHTML == null){
                continue;
            }
            if (currentBoard[i][j].innerHTML == "X"){
                xCounter += 1;
            } else if (currentBoard[i][j].innerHTML == "O"){
                oCounter += 1;
            } else {
                console.log("empty!");
            }
        }  
    }
}

// for loop that generates array based on squares
// function checkGame(){
//     let xCounter = 0;
//     let oCounter = 0;

//     checkRows()
//     checkColumns()

//     // check columms
//     // check rows
//     for(i = 0; i < board.length; i++){
        
//         // check if anyone won
//         if (xCounter == 3){
//             let xMsg = "X Wins!"
//             endGame(xMsg);
//         } else if (oCounter == 3){
//             let oMsg = "O Wins!"
//             endGame(oMsg);
//         }
        
//         // check each cell in row
//         for(j = 0; j < 3; j++){
            
//             // check to see what populates rows
//             if (boardColumns[i][j].innerHTML == "X"){
//                 xCounter += 1;

//             } else if (boardColumns[i][j].innerHTML == "O"){
//                 oCounter += 1;
//             }
//         }

//         xCounter = 0;
//         oCounter = 0;
//     }

// }


// function checkColumns(){

// }

function makeMove(){
    // Player makes move
    console.log("clicked");
    if(this.innerHTML == ""){
        console.log("added")
        this.innerHTML = "X";
        checkRows(board);

        // get opponent to make move
        makeOpponentMove(this);
        checkRows(board);
        // if(oppMove == false){
        //     endGame("TIE");
        // }
    }
    // if not just return
}

// returns a valid move
function makeOpponentMove(){
    let validMove = false;
    for(let i = 0; i < squares.length; i++){
        let randomSquare = Math.floor(Math.random() * 9) + 1;
        if(squares[randomSquare] == ""){
            squares[randomSquare].innerHTML = "O";
            return true;
        }
    }
    return false;
}

// end game
function endGame(winner){
    // stop the game
    // change innerHTML of message to winner
    message.innerHTML = winner;

    // end the game
}

// Game layout
// Set up board
// Playing the game
// Finish Game
});