let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");

let trun0 = true;   //player X player O

const winPattern=[
[0,1,2],
[3,4,5],
[6,7,8],
[0,3,6],
[1,4,7],
[2,5,8],
[0,4,8],
[2,4,6]
]   //this is a 2d arrey

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        if(trun0){ //player O
            box.innerText ="O";
            trun0 =false;
        }else{  //player X
            box.innerText = "X";
            trun0 = true;
        }
        box.ariaDisabled=true;

        checkWinner();
    })
});

const checkWinner=()=>{
    for (let pattern of winPattern){
        console.log(pattern[0],pattern[1],pattern[2]);
    }
}