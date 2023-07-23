var button1Clicked = false;
var button2Clicked = false;
var randomNumber1 = 0;
var randomNumber2 = 0;

$(".button1").click(function () {
    randomNumber1 = Math.random();
    randomNumber1 = Math.floor(randomNumber1 * 6) + 1;
    var randomDice1 = "./images/dice" + randomNumber1 + ".png";
    $(".img1").attr("src", randomDice1);
    button1Clicked = true;

    $(".button1").prop("disabled", true);
    $(".button1").attr("class", "disabled");

    if (button1Clicked && button2Clicked) {
         $(".img1").on("load", function () {
            declareResult();
        });
    }
});

$(".button2").click(function () {
    randomNumber2 = Math.random();
    randomNumber2 = Math.floor(randomNumber2 * 6) + 1;
    var randomDice2 =  "./images/dice" + randomNumber2 + ".png";
    $(".img2").attr("src", randomDice2);
    button2Clicked = true;

    $(".button2").prop("disabled", true);
    $(".button2").attr("class", "disabled");

    if (button1Clicked && button2Clicked) {
         $(".img2").on("load", function () {
            declareResult();
        });
    }
});

function declareResult () {
    if (randomNumber1 > randomNumber2) {
        $("h1").text("Player 1 Wins");
        } else if (randomNumber1 < randomNumber2) {
        $("h1").text("Player 2 Wins");
        } else {
        $("h1").text("Its a Draw");
        }
    $("h2").css("display", "block");
}







