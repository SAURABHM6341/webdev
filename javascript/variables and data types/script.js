console.log("hey saurabh welcome back")
var a = 5;
var b = 6;
console.log(a + b + 5);
var c = "harry";
console.log(typeof a, typeof b, typeof c);
//same rule for variable like in c i.e. it cannot start with number and other and java script is case senstivity means capital anu smal alag hota h 
// var is globally scoped
const t = 5;
const w = 9;
let q = 0;
let u = 5;
let i = undefined;
let j = null;
console.log( typeof i);
console.log(typeof j); //it will print object but why because at early stage of java script it is stated as object but now we cannot change it because many codes are relay on it they can malfunction if it is changed hence we cannot change it
if (3) {
    let u = 6;
    const t = 7;
    console.log(u);//it will print 6 
    console.log(t);//it will print 7
    console.log(w);
    console.log(q);
    
}
console.log(u);//it will print 5
console.log(t);//it will print 5
u = u+67;//it is allowed but in case of const it is not allowed;
// what are object it is a combinaion of key value pairs
let o = {
name: "harry", //name me maine double quotes isliyte nhi lagaya kyoki usme spaxe nhi h job role me space h isliye mujhe double quotes lgana pda
"job role": "senior SDE 500",
"is handsome":true,
"is ganda":false
}
console.log(o);
o.salary = "100 crores";//agr kuch bhul gye ho aur add krna h to ause kr skte ho
console.log(o);
//after promotion
o.salary = "200 crores";
console.log(o);