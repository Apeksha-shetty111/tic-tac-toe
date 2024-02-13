let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector(".reset");
let newbtn = document.querySelector(".new-btn");
let msgcontainer = document.querySelector(".msg-container")
let msg = document.querySelector(".msg")

let turnO = true;
let count = 0;

const win = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerText = "O";
            turnO = false;
        }
        else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        count++;

        iswinner = chkwinner();

        if (count === 9 && !iswinner) {
            msg.innerText = "game is draw";
            msgcontainer.classList.remove("hide");
            for (let box of boxes) {
                box.disabled = true;

            }
        }
    });
});

const showwinner = (winner) => {
    msg.innerText = "congratulations the winner is" + winner;
    msgcontainer.classList.remove("hide");
    for (let box of boxes) {
        box.disabled = true;
    }
}



const chkwinner = () => {
    for (let pattern of win) {
        if (boxes[pattern[0]].innerText !== "" && boxes[pattern[1]].innerText != "" && boxes[pattern[2]].innerText != "") {
            if (boxes[pattern[0]].innerText === boxes[pattern[1]].innerText && boxes[pattern[1]].innerText === boxes[pattern[2]].innerText) {
                let winner = boxes[pattern[0]].innerText;
                boxes[pattern[0]].classList.add("winner");
                boxes[pattern[1]].classList.add("winner");
                boxes[pattern[2]].classList.add("winner");
                showwinner(winner);
                return true;

            }
        }
    }
}

const reset = () => {
    turnO = true;
    count = 0;
    iswinner = false;
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
        box.classList.remove('winner');
    }
    msgcontainer.classList.add("hide");
 }

newbtn.addEventListener("click", reset);
resetbtn.addEventListener("click", reset);
