// asyn function always return promise whether we type return or not
// await alwys wait for promise to fulill for async funtion
function api() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("weather data");
            resolve("success");
        }, 3000)
    });
};
async function getdata() {
    await api();
    await api();
    await api();
}
//getdata(); //yha pr hme getdata ko ek baar call krna pdta h balki promise chain aur call back hell me unnecessary call nhi krna pdta h isse bachne ke liye IIFE ka use kre

//ye function bina call ke execute ho jate h
//can be used only once  immediately invoked function expression
( async function(){
await api();
await api();
await api();
})();