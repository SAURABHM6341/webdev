let boxes = document.body.firstElementChild.children;
function colors() {
    let a = Math.ceil(Math.random() * 255);
    let b = Math.ceil(Math.random() * 255);
    let c = Math.ceil(Math.random() * 255);
   
    return `rgb(${a}, ${b}, ${c})`
}
boxes[0].style.backgroundColor = colors();
boxes[1].style.backgroundColor =  colors();
boxes[2].style.backgroundColor =  colors();
boxes[3].style.backgroundColor =  colors();
boxes[4].style.backgroundColor =  colors();