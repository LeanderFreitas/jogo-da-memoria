const emojis = [
    "👍",
    "👍",
    "😌",
    "😌",
    "🤡",
    "🤡",
    "🤠",
    "🤠",
    "🖤",
    "🖤",
    "👀",
    "👀",
];
let openCards = [];

let shuffleEmojis = emojis.sort(()=>(Math.random() > 0.5 ? 2 : -1));

for (let  i = 0; i < emojis.length; i++){
    let box = document.createElement("div");
    box.className = "item";
    box.innerHTML = shuffleEmojis[i];
    box.onclick = handleClick;
    document.querySelector(".game").appendChild(box);
}
function handleClick(){
    if(openCards.length < 2){
        this.classlist.add("boxOpen");
        openCards.push(this);
    }
    if(openCards.length == 2){
        setTimeout(checkMath, 500);
    }
    console.log(openCards);
} 
function checkMath(){
    if(openCards[0].innerHTML=== openCards[1].innerHTML){
        openCards[0].classlist.add("boxMatch");
        openCards[1].classlist.add("boxMatch");
    }
    else{
        openCards[0].classlist.remove("boxMatch");
        openCards[1].classlist.remove("boxMatch");
    }
    openCards = [];

    if(document.querySelectorAll("boxMatch").length === emojis.length){
        alert("voce venceu!")
    }
}