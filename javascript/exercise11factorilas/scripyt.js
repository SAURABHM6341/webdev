let a = 6;
let b = 1;
for (let i = 1; i <= a; i++) {
    b = b*i;
}
console.log("the factorial of ", a," is ",b)
let arr = []
for (let i = 0; i < a; i++) {
    for(let j = i+1;j<=a;j++){
        arr[i] = j;
        break;
    }
    
}  
console.log(arr)
const fact = (a,b)=>{
    return a*b;
}
console.log(arr.reduce(fact))
//array jo maine for loop lgake bnai h use ham direct bhi bna skte h just follow the following
//yha mai function ke andr bna ke dikhata hu aap bahar bhi bna skte h no problem 
let z
function factorial(z){
    let arr = Array.from(Array(z+1).keys())//z is a number jiska factorial nikalna h and z+1 misliye kiya gya kyoki by default array 0 to z-1 tak hi deta h 
}
