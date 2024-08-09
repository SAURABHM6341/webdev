let clel = document.querySelectorAll(".game");
let user = 0;
let bot = 0;
function botdan() {
    let a = Math.random();
    a = Math.round((a * 10) / 5);
    return a;
}
for (let i = 0; i < 3; i++) {
    clel[i].addEventListener("click", () => {
        let u = document.querySelectorAll(".intext");
        let ut = u[i].innerText;
        // console.log(u[i].innerText);
        let b = botdan();
        let bt = u[b].innerText;
        // console.log(bt);
        if (ut === "ROCK") {
            if (bt === "PAPER") {
                bot++;
                let m = document.querySelector(".message");
                m.innerText = "YOU LOSE";
                m.style.backgroundColor = "red";

            }
            else if (bt === "SCISSOR") {
                user++;
                let m = document.querySelector(".message");
                m.innerText = "YOU WIN";
                m.style.backgroundColor = "green";
            }
            else {
                let m = document.querySelector(".message");
                m.innerText = "DRAW";
                m.style.backgroundColor = "blue";
            }
        }
        else if (ut === "PAPER") {
            if (bt === "SCISSOR") {
                bot++;
                let m = document.querySelector(".message");
                m.innerText = "YOU LOSE";
                m.style.backgroundColor = "red";
            }
            else if (bt === "ROCK") {
                user++;
                let m = document.querySelector(".message");
                m.innerText = "YOU WIN";
                m.style.backgroundColor = "green";
            }
            else {
                let m = document.querySelector(".message");
                m.innerText = "DRAW";
                m.style.backgroundColor = "blue";
            }
        }
        else {
            if (bt === "PAPER") {
                user++;
                let m = document.querySelector(".message");
                m.innerText = "YOU WIN";
                m.style.backgroundColor = "green";
            }
            else if (bt === "ROCK") {
                bot++;
                let m = document.querySelector(".message");
                m.innerText = "YOU LOSE";
                m.style.backgroundColor = "red";
            }
            else {
                let m = document.querySelector(".message");
                m.innerText = "DRAW";
                m.style.backgroundColor = "blue";
            }
        }
        document.querySelector(".userscore").innerText = user;
        document.querySelector(".botscore").innerText = bot;

    })

}