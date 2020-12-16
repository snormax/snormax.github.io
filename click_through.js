let counter = 1;

function click_through() {
    if (document.getElementById("reddit_bot_img").src === "img/bot_winner.png") {
        document.getElementById("reddit_bot_img").src = "img/bot_dm.png";
    } else if (document.getElementById("reddit_bot_img").src === "img/bot_dm.png") {
        document.getElementById("reddit_bot_img").src = "img/bot_main.png";
    } else {
        document.getElementById("reddit_bot_img").src = "img/bot_winner.png";
    }
}

function click_through2() {
    switch (counter) {
        case 0:
            document.getElementById("reddit_bot_img").src = "img/bot_dm.png";
            counter++;
            break;
        case 1:
            document.getElementById("reddit_bot_img").src = "img/bot_main.png";
            counter++;
            break;
        case 2:
            document.getElementById("reddit_bot_img").src = "img/bot_winner.png";
            counter = 0;
            break;
    }
}