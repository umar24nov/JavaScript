let modeBtn = document.getElementById('mode');
let currMode = "light";

modeBtn.addEventListener("click", () =>{
    if(currMode === "light"){
        currMode = "dark";
        document.body.style.backgroundColor = "#212121";
        document.body.style.color = "#fff";
        modeBtn.style.backgroundColor = "#fff";
        modeBtn.style.color = "#212121";
    } 
    else { // currMode === dark
        currMode = "light";
        document.body.style.backgroundColor = "#fff";
        document.body.style.color = "#212121";
        modeBtn.style.backgroundColor = "#212121";
        modeBtn.style.color = "#fff";
    }
});