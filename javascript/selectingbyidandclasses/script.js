console.log("saurabh mishra is a good boy")
let sa = document.getElementsByClassName("box") 
console.log(sa)
sa[2].style.backgroundColor = "red"//2nd index wale element ko jiski class box h usko ye red kr dega ab bhale mai ek aur 2.5 naam ka box daal du 3rd position me to 2.5 wala hi red hoga kyoki ki index se color de rha hu agr id se deta to nhi hota 
document.querySelector(".box").style.backgroundColor = "green"//isse jo .box ke class name wale me 1st wala h sirf us par lgega only first wale ko agr sare ko krna h to follow the following
//console.log(document.querySelectorAll(".box"))
// document.querySelectorAll(".box").forEach(e=>{
//     // console.log(e)
//     e.style.backgroundColor = "red"
// })
console.log(document.getElementsByTagName("div"))//it will return a html collection of all div in html including parent 
let s = document.getElementsByTagName("div")
console.log(s[4].matches(".box"))//this will return true. it checks for matches that i have given means maine s me div tag diya to ye likhne ke baad ye saare div me check krega ki koi .box ke naam ka h and yes maine saare me class box di h .aur # lgana ANIVaRY H
console.log(s[3].closest("html"))//it will return the closest tag with the name of html closest to div if not matched then return null
console.log(document.querySelector("body").contains(s[3]))//maine pu6a kya body s[3] wale ko contains kr ti h agr ha to true return hoga wrna false


