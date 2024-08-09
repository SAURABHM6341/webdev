//promises
console.log("this a promise")
let prom1 = new Promise((resolve, reject)=>{
    let s = Math.random();
    if(s<0.8){
        reject("Nah! you are fired");
    }
else{
    
setTimeout(() => {
    console.log("yes i am done")
    resolve("harry")
}, 3000);}
})
prom1.then((a)=>{
    console.log(a)
}).catch((err)=>{
    console.log(err)
;})
