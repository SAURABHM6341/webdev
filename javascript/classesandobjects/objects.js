const student = {
    fullname : "saurabh",
    age:19,
    CGPA:7.80,
    printcgpa: function () {
        console.log(this.CGPA);//this is pointer which point class ka cgpa ya jo bhi point kraoge jaisen cpp me hota h
    }

}
//object me ek property automatically add ho jati h prototype jo ki khud hi ek obj hota h naam ki uske andar bahut se method and function hote h 
const arr = ["apple","mango","banana","grapes"];
console.log(typeof(arr));//arr is also type of object which has methods and function like slice push pop etc ye sab prototype object me hota h ;
// ham khud ke prototype bhi bna skte h 
const employee ={
    calctax(){//aise likho ya chahe calctax : function(){ dono same hi h
        console.log("tax rate is 10%");
    },
}
const karan = {
salary : 50000,
} 
// ab mujhe kaaran ko calctax ka use krna h but uske prototype me calctax nhi dikh rha h to ise suse krne ke liye __proto__ aise likhe aur mauj kre
karan.__proto__ = employee;
// ab karan naam ke object ke andar ek nya prototype bnega jisme calctax and purana prototyoe function uske andar honge
karan.calctax();
// ab har ek employee ke liye proto set kro aur mje kro
// agr ham karan ke andar calctax ka function bna dete aur proto bhi krwa dete to wo apne object ke andar wala calctax ka use krga