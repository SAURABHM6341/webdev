//paprent class ke method and function ksisi child class ke use krna 
class parents{
    hairdensity(value){
this.hairdensity = value;
}
height(value1){
    this.height = value1;
}
bloodgroup;
constructor(){
    console.log("aakhir baap ki jarurat pad hi gyi")
}

}
class beta extends parents{
constructor(bloodgroup){
    super()//trick to invoke baap ki class
this.bloodgroup = bloodgroup//ye this parent ka element ka h 
}//agr baap ke constructor me bhi koi argument pass hota hoga to wo ham super se paas krwayenge
}
let saurabh = new beta;
saurabh.hairdensity(`moderate`);
saurabh.height(`5.89"`);
let saura = new beta("B+ve")
//super is the keyword to call parents constructor;