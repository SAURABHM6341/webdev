// let title = prompt("Enter the Title of your Video")
// let views0 = prompt("Enter the number of views on your Video")
// let age  = prompt("how many days ago you have posted it?")
// let cname = prompt("Enter the Channel name")
function createcard(title, views0, age, cname, duration) {
    let calvbi
    if (views0>=1000 && views0<1000000) {
        
        calvbi = Math.round(((views0/1000)*10)/10) + "K views";
    }
    else if(views0>=1000000 && views0<1000000000){
        calvbi = Math.round(((views0/1000000)*10)/10) + "M views"
    }
    else if(views0>=1000000000){
        calvbi = Math.round(((views0/1000000000)*10)/10) + "B views"
    }
    else{
        calvbi = views0 + "views";
    }
    console.log(calvbi)
    let dayte
    if (age>=7 && age<30) {
        dayte = Math.round(((age/7)*10)/10) + "weeks ago"
    } else if (age>=30 && age<365){
        dayte = Math.round(((age/30)*10)/10) + "months ago"
    }
    else if(age>=365){
    dayte = Math.round(((age/365)*10)/10) + "years ago"
    }
    else{
        dayte = age + "days ago";
    }
    // let duration = prompt("Enter the Duration of your Video")
    let content = ` <div class="container">
    <div class="image"><img src="card.png" alt="your thumbnail" height="180px" width="320px"
            style="border-radius: 13px;">
            <div class="dura" style="position: relative;
            z-index: 2;
            top: -50px;
            left: 228px;
            width: 80px;
            color: white;
            background-color: #000000b7;
            border-radius: 6px;
            font-size: 22px;">${duration}</div></div>
    <div class="content" style="margin: 3px; padding-bottom:122px;">
        <div class="title" style = "font-size:20px;">
            <h1>${title}</h1>
        </div>
        <div class="info" style="display: flex; margin-left: 5px; font-size: 17px; font-weight: 400"><span class="gayab">${cname}</span>
        <li style="margin-left:3px ;">${calvbi}</li>
    <li style="margin-left:3px ;">${dayte}</li></div>
    </div>
</div>`
document.querySelector(".dabba").innerHTML = content
}
let view = prompt("enter the number of views")
let day = prompt("how many days ago have you posted this video?")
let time = prompt("enter the duration of this video")
let chname = prompt("enter the channel name")
let title1 = prompt("enter the title of your video")
createcard(title1 , view, day, chname, time)