// main js

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