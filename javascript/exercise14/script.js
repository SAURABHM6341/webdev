document.body.style.background = `black`;
document.body.style.color = `green`;
document.body.style.fontSize = `20px`
async function wait1() {
    let p1 = new Promise((resolve, reject) => {
        timeout = 1 + (2 * Math.random())
        setTimeout(() => {
            resolve(45);

        }, timeout * 1000);
    })
    await p1;
}
async function wait2() {
    let p2 = new Promise((resolve, reject) => {
        timeout = 1 + (2 * Math.random())
        setTimeout(() => {
            resolve(45);

        }, timeout * 300);
    })
    await p2;
}
async function main() {
    let text = [">>>initialized hacking", ">>>scanning all files", ">>>collecting password and other information", ">>>sending all to server", ">>>cleaning up", ">>>task completion"]

    for (let index = 0; index < 6; index++) {
        let div = document.createElement("div")
        document.body.append(div)
        await wait1();
        document.body.append(text[index]);
        await wait2();
        for (let index1 = 0; index1 < 3; index1++) {
            let span = document.createElement("span")
            span.innerHTML = `.`
            document.body.append(span)
            await wait2();
        }



    }
    let div = document.createElement("div")
    document.body.append(div)
    document.body.append('Done 100%');
}
main()