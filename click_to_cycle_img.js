
function set_buffers(){
    // let header_height = document.getElementById("header").style.height;
    // document.getElementById("article").style.paddingTop = header_height;
    //
    // let anchor = document.querySelectorAll(".anchor")
    // anchor.style.paddingTop = header_height;
    // anchor.style.marginTop = "-1" + header_height;

    let header_height = document.getElementById("header").offsetHeight;
    document.getElementById("article").style.paddingTop = String(header_height * .7) + "px";

    let anchor = document.querySelectorAll(".anchor")
    anchor.style.paddingTop = String(header_height * 1.5) + "px";
    anchor.style.marginTop = String(-1.5 * header_height) + "px";
}

let counter = 1;

function click_to_cycle_img() {
    switch (counter) {
        case 0:
            document.getElementById("reddit_bot_img").src = "img/bot_winner.png";
            counter++;
            break;
        case 1:
            document.getElementById("reddit_bot_img").src = "img/bot_dm.png";
            counter++;
            break;
        case 2:
            document.getElementById("reddit_bot_img").src = "img/bot_main.png";
            counter++;
            break;
        case 3:
            document.getElementById("reddit_bot_img").src = "img/heroku.png";
            counter = 0;
            break;
    }
}
