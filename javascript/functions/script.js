console.log("welcome to functions tutorial sir")
function saurabh(a, b, c) {
    console.log(a*b*c)
}
saurabh(34, 56, 67);
function names(name) {
    console.log("hey " + name + " you are good")
    console.log("hey " + name + " you are noice")
    console.log("hey " + name + " you are so beautiful so elegent")
    console.log("hey " + name + " you are looking like a wow")
    console.log("hey " + name + " you are qute")
}
names("dominic toreto")
function sum(a, b, c, d=4) {//d optional h agr parameter pass nhi krenge to bhi ye run ho jayega
    console.log(a,b,c,d)
    return a+b+c+d
}
result1 = sum(1, 2, 32, 5)//agr 4th argument pass kroge to valur d ki alter ho jayegi only for this call
result2 = sum(4, 24, 3)
result3 = sum(1, 21, 35)
result4 = sum(11, 26, 3)
console.log("the sum is ", result1)
console.log("the sum is ", result2)
console.log("the sum is ", result3)
console.log("the sum is ", result4, "and you are ", result4)
const func1 =(x)=> {//arrow function
console.log("aur bhai kya haal chaal h mai arrow function hu", x)
}
func1(67)
func1(556)
func1(34)
func1(23)
//math.random() se ham random number generate kr skte h 
//refer to faulty calculator