/*
--> callback---jab koi function dusre function me arguments ki tarah paas ho rhi ho to wo callback kehlataa h 
function sum(a,b) {
    console.log(a+b);
}
function calculator(a,b,sum1) {
    sum1(a,b);
}
calculator(1,6,sum);
function getdata(dataid, getnextdata) {
    setTimeout(() => {
        console.log(dataid);
        if (getnextdata) {
            getnextdata();
        }
    }, 3000);
}
getdata(255);
getdata(257);
getdata(259);
// --> after three second ye teeno ek saath print ho jayenge
// --> but we want ki phle 3 sec lge aur 255 wala print ho then 3 sec again wait ho aise to callback ko use kro
// --> iske liye ham next data ke liye function likhenge
getdata(255,getdata())
// --> aisi agr parenthesis lga denge toi turant call ho jayega isiliye parenthesis nhi lga skte but fir rguments kaise pass krenge
// --> use arrow function
getdata(255, () => {
    getdata(256, ()=>{
        getdata(3);
    })//first time me to pass ho ajyega but second time me next data kuchh nhi h to error dega isiliye check lagao getdata me
});
-->  lekin aggr bahut saaare cheeze sequence wise delay se saath print karana hio to call back hell ban jayega which is not good for our program
--> iska sol h promise*/
let promise = new Promise((resolve, reject) => {
    console.log("i am a promise");
// reject("hatt saale");//error will generate of hatt saale
    resolve("successfully fetched\n");
});
function getdata(dataid) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data",dataid);
            resolve("resolved")
        }, 3300);
    })
}
// there are two function in promise 1) promise.then((res)=>{ }) when promise is resolved 2) promise.catch((err)=>{}) when promise is rejected
let pp = getdata(56789);
// pp.then((res)=>{
    //     console.log("promise resolved successfully\n", res)
    // })
    // pp.catch(()=>{
        //     console.log("reject kr diya yaar\n");
        // })
        // ******* ab promise chain****************
        //then ke andar then
        console.log("fetching data...");
        pp.then((res)=>{
            let pp1 = getdata(721456);
            console.log("fetching data 1");
            pp1.then((res)=>{
        let pp2 = getdata(823497);
        console.log("fetching data 2");
pp2.then((res)=>{
console.log("al data has been uploaded successfully")
})
    })
})