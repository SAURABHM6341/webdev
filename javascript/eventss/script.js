let button = document.getElementById("btn")
// button.addEventListener("click", ()=>{
//     alert("thank you for clicking me content will change soon")
//     document.querySelector(".box").innerHTML = "<b>yay i am clicked <\b>"

// })
button.addEventListener("dblclick", ()=>{
    alert("you have double clicked")
    document.querySelector(".box").innerHTML = "thanks for your double click"
})
button.addEventListener("contextmenu", ()=>{
    alert("initiating hacking....")
})
document.addEventListener("keydown",(e)=>{
    alert("don't press any key otherwise your system will got corrupt")
})
