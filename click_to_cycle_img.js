let counter = 0;

function click_to_cycle_img() {
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
            counter++;
            break;
        case 3:
            document.getElementById("reddit_bot_img").src = "img/heroku.png";
            counter = 0;
            break;
    }
}