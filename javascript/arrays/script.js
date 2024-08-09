let arr = [1, 2, 3,56,4,3,3]
console.log(arr)
console.log(arr.length)
//array is mutable mens can be altered
arr[0] = "saurabh"
console.log(arr)
console.log(arr[0])
//ye arr[0] ko print krega
// array is a object
console.log(arr, typeof arr)
console.log(arr.toString())
//it will change array to strings
console.log(arr.join(" and "))
//join se comma ki jagah jo likha jata h wo jud jata h 
let arr1 = [1,2,3,4,5]
console.log(arr1.pop())
console.log(arr1)
//pop se ek element ko pop out kr ke bahar kr deta h print kr deta h
console.log(arr1.push(100)) //ye jo return krta h wo array ki length return krta h updated
console.log(arr1.push("harry"))
console.log(arr1)
//a.shift first element ko bahar kr deta h aur pop last element ko
console.log(arr1.shift())
//push se last me add hota h aur unshift se pehle
console.log(arr1.unshift("saurabh"))//iyt will print updated length of array
console.log(arr1)
delete arr1[5]//it will delete 5th element of array
console.log(arr1)
//abhi agr length print kroge to 6 hi dikhayega kyo sirf memory allot hui h usme kuch h ni means khali kr ke chhod diya dabba delete nhi kiya 
let arr2 = [1,3,6,7,8]
let arr3 = [2,6,7,8,8,456]
console.log(arr1.concat(arr2, arr3))//concat kr dega but existing array nhi alter hongi
//splice function me first seat no.hotah aur second wale seat no. se chalu hoke kitne seat tak delete krna h
//console.log(arr1.splice(2,2))//means 2nd index se do ko nikalo ise print kroge to jo nikale h unhe bta dega
console.log(arr1)
console.log(arr1.splice(2, 2, 44, 55))//ye 44 aur 55 ko jha se nikale ho wha jod dega
console.log(arr1)
//slice function se kisi bhi element ko slice out kr dega aur naya array bna dega
console.log(arr1.slice(3))
console.log(arr1.slice(2))
console.log(arr1)
arr1.reverse()
console.log(arr1)//it will reverse the array
