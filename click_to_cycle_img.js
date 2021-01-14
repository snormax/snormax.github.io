function set_buffers(){
    let header_height = document.getElementById("header").offsetHeight;
    if (header_height > 0) {
        document.getElementById("article").style.paddingTop = String(header_height * .7) + "px";
    }
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
