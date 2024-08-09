console.log("hey i am saurabh")
console.log("hello mr. .....?")
setTimeout(() => {
    console.log("mc^2 bhul gya itna jldi");
}, 2000);
console.log("saurabh mishra sir.");
// this is asynchronous nature of javascript mc2 wali cheez ko saurabh mishra ke phle print hona tha but this nature cause it to print after it because it has delay of 2 sec then java script move to next code and after 2 seconds it get printed
const callback = (arg) => {
    console.log(arg);
}
const loadscript = (src, callback) => {
    let sc = document.createElement("script");
    sc.src = src;
    sc.onload = callback("harry")
    document.head.append(sc);
}
loadscript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", (arg)=>{
    console.log(arg)
;})

