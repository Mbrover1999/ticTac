const tiles = [];
let turn = 1; // evenNumber = p2, oddNumbers = p1
let isGameOver = false;
let isFirstMove = true;
let xPoint = 0;
let oPoint = 0;
const oScore = document.getElementById('oPoints');
const xScore = document.getElementById('xPoints');
oScore.innerText = `${oPoint}`
xScore.innerText = `${xPoint}`
for (let i = 1; i < 10; i++) {
    tiles.push(document.getElementById(`tile${i}`))
}
for (let i = 0; i < tiles.length; i++) {
    tiles[i].addEventListener('click', (event) => {
        if (tiles[i].textContent === "" && !isGameOver) {
            if(isFirstMove){
                showButton();
                isFirstMove = false;
            }
            console.log(tiles[i])
            if (turn % 2 === 0) {
                tiles[i].textContent = "X"
                turn++;
                checkBoard();
            } else {
                tiles[i].textContent = "O"
                turn++;
                checkBoard();
            }
        }
    });
}
function checkBoard() {
    console.log(tiles[0].textContent)
    if ((tiles[0].textContent === tiles[1].textContent) && (tiles[0].textContent === tiles[2].textContent) && (tiles[0].textContent !== "")) {
        if (tiles[0].textContent === "O") {
            document.getElementById('win').textContent = "O Wins";
            oPoint++;
            oScore.innerText = `${oPoint}`

        } else {
            document.getElementById('win').textContent = "X Wins";
            xPoint++;
            xScore.innerText = `${xPoint}`
        }
        tiles[0].style.color = 'green';
        tiles[1].style.color = 'green';
        tiles[2].style.color = 'green';
        isGameOver = true;
        winButton();
    }
    if ((tiles[0].textContent === tiles[3].textContent) && (tiles[0].textContent === tiles[6].textContent) && (tiles[0].textContent !== "")) {
        if (tiles[0].textContent === "O") {
            document.getElementById('win').textContent = "O Wins";
            oPoint++;
            oScore.innerText = `${oPoint}`

        } else {
            document.getElementById('win').textContent = "X Wins";
            xPoint++;
            xScore.innerText = `${xPoint}`
        }
        tiles[0].style.color = 'green';
        tiles[3].style.color = 'green';
        tiles[6].style.color = 'green';
        isGameOver = true;
        winButton();
    }
    if ((tiles[2].textContent === tiles[5].textContent) && (tiles[2].textContent === tiles[8].textContent) && (tiles[2].textContent !== "")) {
        if (tiles[2].textContent === "O") {
            document.getElementById('win').textContent = "O Wins";
            oPoint++;
            oScore.innerText = `${oPoint}`

        } else {
            document.getElementById('win').textContent = "X Wins";
            xPoint++;
            xScore.innerText = `${xPoint}`
        }
        tiles[2].style.color = 'green';
        tiles[5].style.color = 'green';
        tiles[8].style.color = 'green';
        isGameOver = true;
        winButton();
    }
    if ((tiles[1].textContent === tiles[4].textContent) && (tiles[1].textContent === tiles[7].textContent) && (tiles[1].textContent !== "")) {
        if (tiles[1].textContent === "O") {
            document.getElementById('win').textContent = "O Wins";
            oPoint++;
            oScore.innerText = `${oPoint}`

        } else {
            document.getElementById('win').textContent = "X Wins";
            xPoint++;
            xScore.innerText = `${xPoint}`
        }
        tiles[1].style.color = 'green';
        tiles[4].style.color = 'green';
        tiles[7].style.color = 'green';
        isGameOver = true;
        winButton();
    }
    if ((tiles[3].textContent === tiles[4].textContent) && (tiles[3].textContent === tiles[5].textContent) && (tiles[3].textContent !== "")) {
        if (tiles[3].textContent === "O") {
            document.getElementById('win').textContent = "O Wins";
            oPoint++;
            oScore.innerText = `${oPoint}`

        } else {
            document.getElementById('win').textContent = "X Wins";
            xPoint++;
            xScore.innerText = `${xPoint}`
        }
        tiles[3].style.color = 'green';
        tiles[4].style.color = 'green';
        tiles[5].style.color = 'green';
        isGameOver = true;
        winButton();
    }
    if ((tiles[6].textContent === tiles[7].textContent) && (tiles[6].textContent === tiles[8].textContent) && (tiles[6].textContent !== "")) {
        if (tiles[6].textContent === "O") {
            document.getElementById('win').textContent = "O Wins";
            oPoint++;
            oScore.innerText = `${oPoint}`

        } else {
            document.getElementById('win').textContent = "X Wins";
            xPoint++;
            xScore.innerText = `${xPoint}`
        }
        tiles[6].style.color = 'green';
        tiles[7].style.color = 'green';
        tiles[8].style.color = 'green';
        isGameOver = true;
        winButton();
    }

    if ((tiles[0].textContent === tiles[4].textContent) && (tiles[0].textContent === tiles[8].textContent) && (tiles[0].textContent !== "")) {
        if (tiles[0].textContent === "O") {
            document.getElementById('win').textContent = "O Wins";
            oPoint++;
            oScore.innerText = `${oPoint}`

        } else {
            document.getElementById('win').textContent = "X Wins";
            xPoint++;
            xScore.innerText = `${xPoint}`
        }
        tiles[0].style.color = 'green';
        tiles[4].style.color = 'green';
        tiles[8].style.color = 'green';
        isGameOver = true;
        winButton();
    }

    if ((tiles[2].textContent === tiles[4].textContent) && (tiles[2].textContent === tiles[6].textContent) && (tiles[2].textContent !== "")) {
        if (tiles[2].textContent === "O") {
            document.getElementById('win').textContent = "O Wins";
            oPoint++;
            oScore.innerText = `${oPoint}`

        } else {
            document.getElementById('win').textContent = "X Wins";
            xPoint++;
            xScore.innerText = `${xPoint}`
        }
        tiles[2].style.color = 'green';
        tiles[6].style.color = 'green';
        tiles[4].style.color = 'green';
        isGameOver = true;
        winButton();
    }
}

function restart(){
    const button = document.getElementById('newGameButton')
    const header = document.getElementById('win')
    for (let i = 0; i < tiles.length; i++) {
        tiles[i].textContent = "";
        tiles[i].style.color = "wheat"
    }
    isGameOver = false;
    isFirstMove = true;
    header.innerHTML = "&nbsp"
    button.innerText = "Restart";
    button.style.visibility = 'hidden'
}

function showButton(){
    const button = document.getElementById('newGameButton')
    button.addEventListener('click', (event) => {
        restart();
    })
    button.style.visibility = 'visible'
}

function winButton(){
    const button = document.getElementById('newGameButton')
    button.innerText = "New Game";
    button.style.visibility = 'visible'
    isFirstMove = true;

}


