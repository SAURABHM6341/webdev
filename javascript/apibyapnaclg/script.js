const url = "https://cat-fact.herokuapp.com/facts";
const getfacts = async ()=>{
    let prom = await fetch(url);
    console.log(prom);
    let data =  await prom.json();//isse jitne object ke andar text h ya facts h to usko acces krega ayr text[0] likhoge to pehla text print ho jayega
    console.log(data);
    console.log(data[1].text);
    console.log(data[0].text);
    console.log(data[2].text);
    console.log(data[3].text);
    console.log(data[4].text);
};
// getfacts();
//api se jo data h wo AJAX ya JSON format me aata hwe have to convert JSON to javascript object;
// we use json method it returns  a second promise that resolve with the result of parsing the body text as JSON `
