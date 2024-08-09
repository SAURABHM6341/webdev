console.log("i am saurabh mishra");
let a = 1;
//there are 5 types of loops 1. for loop 2. while loop 3. do while loop 4. for in loop 5. for off loop
for (let i = 0; i < 100; i++) {
    console.log(a+i);
}
let obj ={
    name:"harry",
    role: "programmer",
    company: "saurabh & brothers"
}
//for in--- used for print element of object
for (const key in obj) {
        const element = obj[key];
        console.log(key, element)
        //key like name role com[any and elemnent uske andar ka ye sab print krane ke liye iska istemaal krte h]
}
//for of --- use to print the string and arrays
for (const c of "saurabh") {
    console.log(c)//c likhne se ek ek kr ke saare character print honge for array and strings only
}
let i = 1
//while loop
while (i<9) {
    console.log(i)
    i++;
}
// do while loop
do {
    console.log("saurabh")
    i++
} while (i<6);//print isliye nhi hua kyuki i ki value update ho gyi aur 8 ho gyi thi isiliye sirf ek baar run hua
// foreach loop will be taught later