let main = document.getElementById("main")

let arr = ["Images/ace.jpg","Images/king.jpg","Images/queen.jpg","Images/jack.jpg","Images/ace2.jpg","Images/ace3.jpg","Images/queen2.jpg","Images/jack2.jpg","Images/king2.jpg"];
let str = "";
for(let i = 1; i <= 27; i++){
    let r = Math.floor(Math.random()*9);
    str += `<div class="cards" id="cards"><img src="${arr[r]}"></div>`;
}

main.innerHTML = str;