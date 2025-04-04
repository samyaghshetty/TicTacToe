let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let msg = document.querySelector("#msg");
let msgContainer = document.querySelector(".msg-container");
let newGame = document.querySelector("#new-game");
let turn = true;
const winningPattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
boxes.forEach((box)=>{
    box.addEventListener("click",() =>{
        if(turn){
            box.innerText ="X";
            turn = false;
        }
        else{
            box.innerText ="O";
            turn = true;
        }
        box.disabled = true;
        checkWinning();
    });
});
const resetGame = () =>{
    turn = true;
    enableBoxes();
    msgContainer.classList.add("hide");
};
const disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
};
const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};
const showWinner = (winner) => {
    msg.innerText = `Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};
const checkWinning = () =>{
    for(let pattern of winningPattern)
    {
        let ps1 = boxes[pattern[0]].innerText;
        let ps2 = boxes[pattern[1]].innerText;
        let ps3 = boxes[pattern[2]].innerText;

        if(ps1 != "" && ps2 !="" && ps3 !=""){
            if(ps1 === ps2 && ps2 === ps3 ){
                showWinner(ps1);
            }
        }

    }
};
newGame.addEventListener("click", resetGame);
reset.addEventListener("click", resetGame);