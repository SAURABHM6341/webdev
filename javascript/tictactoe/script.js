let print = 'X'
let flag = true;
let baksa = document.querySelectorAll(".box");
for (let i = 0; i < 9 && flag === true; i++) {
    baksa[i].addEventListener("click", () => {
        if (print === 'X' && baksa[i].innerText != 'O' && flag === true) {
            baksa[i].innerText = 'X'
            baksa[i].style.color = "yellow"
            print = 'O';
            baksa[i].style.fontSize = "28px";
            baksa[i].style.fontWeight = "700";
        }
        else {
            if (baksa[i].innerText != 'X' && flag === true) {
                baksa[i].innerText = 'O';
                baksa[i].style.color = "red"
                print = 'X';
                baksa[i].style.fontSize = "24px";
            }
            else {
                return;
            }
        }
        if (iswinning()) {
            let retry = document.createElement("div");
            let retry2 = document.createElement("a");
            retry2.setAttribute("href", "./index.html");
            console.log(retry2);
            retry2.innerText = "Play Again";
            retry.setAttribute("class", "ret");
            document.body.prepend(retry);
            retry.innerText = "Player " + baksa[i].innerText + " Win ";
            document.querySelector(".ret").append(retry2);
            flag = false;
        }

    })
}
let win = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
// baksa.innertext = 's';
console.log(baksa.innertext);
let iswinning = () => {
    for (let j = 0; j < 8; j++) {
        if (baksa[win[j][0]].innerText === baksa[win[j][1]].innerText && baksa[win[j][0]].innerText === baksa[win[j][2]].innerText && baksa[win[j][0]].innerText != "") {
            console.log("winner")
            return true;
        }
    }
    console.log("loser")
    return false;
}