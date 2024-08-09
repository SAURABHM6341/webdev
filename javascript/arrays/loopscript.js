let a = [1, 2, 3, 4, 5, 5, 6, 7, 7]
// for (let index = 0; index < a.length; index++) {
//     const element = a[index];
//     console.log(element)//it will print the element of array
// }
// a.forEach((value, index, a)=> {
//     console.log(value, index, a)//pehle valur means 123 jo aaray h aur index aur puri array print hogi jab tak saare element ke liye yhi step repeat nhi hota h 
// });
// let obj = {
//     a1:1,
//     b1:3,
//     c1:5
// }
// for (const key in obj) {
//     if (Object.hasOwnProperty.call(obj, key)) {
//         const element = obj[key];
//         console.log(key, element)
//     }
// }
// for (const iterator of a) {
//     console.log(iterator)//it will print array
// }//if we want to make a new array with the same element of previous array then we can use for loop or map function to do this
// let saur = []
// let newa = []
// for (let index = 0; index < a.length; index++) {
//     const element = a[index]
//     newa[index] = a[index]
//     saur.push(element**2)
// }
let newa = a.map((e) => {
    return e ** 2
})
let saur = a.map((e) => {
    return e ** 2
})
console.log(newa)
console.log(saur)
const filt = (e)=>{
    if (e>7) {
        return true
    }
    return false
}
console.log(newa.filter(filt))//it is use to filter the array hamne iss baar functions ke andar ek alag se function bna ke daala h jaise filter ke andar filt
const red = (d,r)=>{//d and r are argument
return d*r
}
console.log(a.reduce(red))//reduce functions basically pehle do element pe fuction lgega aur jo result aayega usko pehla argument manega aur teesre elemne tke saath whi operation krega jo pehle do ke sath hua h 
//yha pe ham pehle do element ko multiply kr rhe h aur result ko teesre ke saath aur yhi repeat ho rha h yhi h reduce  ka kaam usi operation ko har elemne tme lgana 
//agrkisi bhi object ko array me badalna h to from function ka use kro
console.log(Array.from("saurabh"));