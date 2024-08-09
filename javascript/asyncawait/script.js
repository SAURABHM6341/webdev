// // //  async function getdata() {
// // //     return new Promise((resolve, reject) => {
// // //         setTimeout(() => {
// // //             resolve(456);
// // //         }, 5867);
// // //     });
// // // }
// // async function getdata() {
// //     let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')
// //        let data = await x.json()
// //        console.log(data)
// //        return 67859
// // }
// // // console.log(`loading modules please wait for a while1111111`)
// // async function main() {
// //     console.log(`loading modules please wait for a while`)
// //     let a = await getdata();
// //     console.log(a)
// //     console.log(`tmkoc`)

// // }
// // main()



// // *************************apna college*************************

// // synchronous-->
// console.log("1");
// console.log("2");
// console.log("3");//123 line se  print ho jayega
// //javascript asynchronous in nature hoti h 
// // jaise agr koi line of code jyada samay le rhi h execute krne me to js me aage ki lines phle execute ho jate h it will not wait for you jaise settimeout
// function help(){
//     console.log("madad chahiye\n");
// }
// setTimeout(help,5000);//agr help me ham brackets lga dete to funcytion call me aa jay=ta aur turant print ho jata
// setTimeout(() => {
//     console.log("inline function\n");
// }, 300);
// //inline function phle print ho gya kyoiki uska timeoyr kam tha aur phle peint ho jata isiliye js ne us ephle print krwa di