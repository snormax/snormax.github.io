let reddit_counter = 0;

function reddit_right() {
    if (reddit_counter === 3) {
        reddit_counter = 0;
    } else {
        reddit_counter++;
    }
    reddit_check_counter_switch();
}

function reddit_left() {
    if (reddit_counter === 0) {
        reddit_counter = 3;
    } else {
        reddit_counter--;
    }
    reddit_check_counter_switch();
}

function reddit_dot_0() {
    reddit_counter = 0;
    reddit_check_counter_switch();
}

function reddit_dot_1() {
    reddit_counter = 1;
    reddit_check_counter_switch();
}

function reddit_dot_2() {
    reddit_counter = 2;
    reddit_check_counter_switch();
}

function reddit_dot_3() {
    reddit_counter = 3;
    reddit_check_counter_switch();
}

function reddit_check_counter_switch() {
    switch (reddit_counter) {
        case 0:
            document.getElementById("reddit_bot_img").src = "img/bot_winner.png";
            document.getElementById("dot-reddit-bot-0").style.opacity = "50%";
            document.getElementById("dot-reddit-bot-1").style.opacity = "100%";
            document.getElementById("dot-reddit-bot-2").style.opacity = "100%";
            document.getElementById("dot-reddit-bot-3").style.opacity = "100%";
            break;
        case 1:
            document.getElementById("reddit_bot_img").src = "img/bot_dm.png";
            document.getElementById("dot-reddit-bot-0").style.opacity = "100%";
            document.getElementById("dot-reddit-bot-1").style.opacity = "50%";
            document.getElementById("dot-reddit-bot-2").style.opacity = "100%";
            document.getElementById("dot-reddit-bot-3").style.opacity = "100%";
            break;
        case 2:
            document.getElementById("reddit_bot_img").src = "img/bot_main.png";
            document.getElementById("dot-reddit-bot-0").style.opacity = "100%";
            document.getElementById("dot-reddit-bot-1").style.opacity = "100%";
            document.getElementById("dot-reddit-bot-2").style.opacity = "50%";
            document.getElementById("dot-reddit-bot-3").style.opacity = "100%";
            break;
        case 3:
            document.getElementById("reddit_bot_img").src = "img/heroku.png";
            document.getElementById("dot-reddit-bot-0").style.opacity = "100%";
            document.getElementById("dot-reddit-bot-1").style.opacity = "100%";
            document.getElementById("dot-reddit-bot-2").style.opacity = "100%";
            document.getElementById("dot-reddit-bot-3").style.opacity = "50%";
            break;
    }
}
