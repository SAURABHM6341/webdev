let random = Math.random()
console.log(random)
let name1 = prompt("please enter your name")
alert("welcome " + name1)
let d = prompt("enter the first number")
let e = prompt("enter the second number")
let a = parseFloat(d)
let b = parseFloat(e)
console.log(typeof a)
let c = prompt("enter the  operation")
if (random >= 0.1) {
    
    if (c=="+") {
        let result = a + b;
        alert("addition of " + a + " and " + b + " is " + result)
    } else if(c=="*"){
        let result = a * b
        alert("multiplication of ", a + " and " + b + " is " + result)
    }
    else if(c=="/"){
        let result = a / b
        alert("division of " + a + " and " + b + " is " + result)
    }
    else if(c=="-"){
        let result = a - b
        alert("subtraction of " + a + " and " + b + " is " + result)
    }
    else{
        alert("invalid operation")
    }
}
else{
    if (c=="+") {
        let result = a-b
        alert("addition of " + a + " and " + b + " is " + result)
    } else if(c=="*"){
        let result = a/b
        alert("multiplication of " + a + " and " + b + " is " + result)
    }
    else if(c=="/"){
        let result = a**b
        alert("division of " + a + " and " + b + " is " + result)
    }
    else if(c=="-"){
        let result = a/b
        alert("subtraction of " + a + " and " + b + " is " + result)
    }
    else{
        alert("invalid operation")
    }
}