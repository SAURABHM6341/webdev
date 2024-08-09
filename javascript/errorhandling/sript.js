// abf kissi line of code me error ata h yaaane ka khatra ho to use aap try and catch se handle kr skte h kyoki js me jab error aat h to uske aage ka process ruk jaata h to use chate rhne ke liye error handle krna pdta h
let a = 1;
let c = 3;
console.log(a);
// console.log(b);//ye error degi so 
try {
    console.log(b);
} catch (error) {//error is a object jo error ko catch krega
    console.log(error);//isse error print ho jayega
    console.log("error aa gya h dekho jara\n");
}
console.log(c);