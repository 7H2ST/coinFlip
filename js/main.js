// main js
let heads = 0;
let tails = 0;
let coin = document.querySelector(".coin");
let flipBtn = document.querySelector("#flip-button");

flipBtn.addEventListener("click", () => {
    let i = Math.floor(Math.random() * 2);
    coin.style.animation = "none";
    if(i){
        setTimeout(function(){
            coin.style.animation = "spin-heads 3s forwards";
        }, 100);
    }
    else{
        setTimeout(function(){
            coin.style.animation = "spin-tails 3s forwards";
        }, 100);
    }
    disableButton();
});

function disableButton(){
    flipBtn.disabled = true;
    setTimeout(function(){
        flipBtn.disabled = false;
    },3000);
}

/*
function flip(){
    f=Math.random();
    aff=document.getElementById("containerCoin");
    if (f<0.5){
        console.log("pile");
        aff.innerHTML="pile";

    }
    else{
        console.log("face");
        aff.innerHTML="face";
    }
}
*/