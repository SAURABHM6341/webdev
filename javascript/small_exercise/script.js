let i =0;
// let btn = document.querySelector("btn");
let butn = document.querySelector(".mode");
butn.addEventListener("click", ()=>{
    if (i==0) {
        i=1;
        document.body.style.backgroundColor = "black"
        document.querySelector(".mode").style.backgroundColor = "white";
        document.querySelector(".mode").style.color = "black";
    }
    else{
        i=0;
        document.body.style.backgroundColor = "white"
        document.querySelector(".mode").style.backgroundColor = "black";
        document.querySelector(".mode").style.color = "white";
    }
})