console.log("String tutorial");
let a = "satta";
console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);
console.log(a[4]);
console.log(a.length);//for length of stringth
let name1  = "saurabh"
let friend = "shreyansh"
console.log("his name is ", name1, " and his friend is ", friend)
//template literal ye strings me jab bahut se variable hote h to ham dollar sign ke saath usko direct beech me hi likh skte h baar baar + ke sign lgane se bacj skte h `` back tick ki maddad se ham double quotes ko bhi andar likh skte h 
console.log(`His name is ${name1} his friend name is ${friend}`)
//escape sequence character
// \n for new line character \t for tab space \r  carriage return
console.log(a.toUpperCase())//it will change the string to upper case  
console.log(name1.slice(1, 4))//it will give the word at 1,2,3 posiltion 4 is excluded
console.log(name1.slice(1))//agr end na btaya jaye to 1 ke baad ka pura print ho jayega
console.log(name1.replace("sau", "ra3"))//kuch replace krna ho to kr skte h replacement me number bhi ho skta h koi problem nhi agr jise aap replace kr rhe wo do baar aapke strings me h to pehli occurence me jo hoga wo replace hoga 
console.log(name1.concat(friend))
console.log(name1.concat(friend, " harsh rishabh", "bhapp"))
let new_name = name1.trim();//remove whitspace
console.log(name1) //print me sirf saurabh aaya hoga kyuki string immutable hoti h jitne bhi operation lge un sab me nyi string bni that's why it happens
 console.log(a.charAt(0))//ye us position ka element print krega
 console.log(a.indexOf("s"))//ye us character ka index btayega