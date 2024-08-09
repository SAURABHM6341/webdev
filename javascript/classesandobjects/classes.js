//classes is code template for creating object
class employee{
    name(naam){
this.name = naam;
    };
    age;
    department(vibhaag){
        this.department = vibhaag;
    };
    workingsince;
    setworking(workingsince){
        this.workingsince = workingsince;
    }
    salary(salary){
        this.salary = salary;
    }

    // constructor is a special keyword
    //jaise hi ham new likhte h to constructor invoke kr deta h agr aapke class ke andar pehle se hi nhi bnah to
    constructor(){
console.log("banaya gya h")
    }
}
let saurabh = new employee;
saurabh.age = 25;
saurabh.name("Saurabh Mishra")
saurabh.salary(354789)
saurabh.setworking("2 years")