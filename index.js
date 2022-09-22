/* Generating a random number between 1 and 6. */
var randomNumber1 = Math.floor((Math.random() * 6) + 1);

/* Creating a variable called randomDiceImg1 and assigning it a value of dice + randomNumber1 + .png. */

var randomDiceImg1 = "dice" + randomNumber1 + ".png";

/* Creating a variable called randomImgSource1 and assigning it a value of images/ + randomDiceImg. */

var randomImgSource1 = "images/" + randomDiceImg1;

/* Selecting the first image and setting the source to the random image source. */

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImgSource1);


/* Generating a random number between 1 and 6. */
var randomNumber2 = Math.floor((Math.random() * 6) + 1);

/* Creating a variable called randomImgSource2 and assigning it a value of images/dice + randomNumber2
+ .png. */
var randomImgSource2 = "images/dice" + randomNumber2 + ".png";

/* Selecting the second image and setting the source to the random image source. */

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImgSource2);

/* This is a conditional statement. It is checking if the random number generated for player 1 is
greater than the random number generated for player 2. If it is, it will display "Player 1 Wins!🏴"
in the h1 tag. If it is not, it will check if the random number generated for player 2 is greater
than the random number generated for player 1. If it is, it will display "Player 2 Wins!🏳️" in the
h1 tag. If it is not, it will display "Match Draw!" in the h1 tag. */

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins!🏴";
}
else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!🏳️";
}
else{
document.querySelector("h1").innerHTML = "Match Draw!";
}