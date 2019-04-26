
var p1Button = document.querySelector(".p1");
var p2Button = document.querySelector(".p2");
var firstName  = document.querySelector("#firstName");
var secondName  = document.querySelector("#secondName");
var nameSetting = document.querySelector("#scoreBoard");
var nameSettingTop = document.querySelector("#setName");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var setFirstName = document.querySelector("#setFirstName");
var setSecondName = document.querySelector("#setSecondName");
var startGame = document.querySelector("#startGame");
var winnaar = document.querySelector("#winnaar");
var reset = document.querySelector("#reset");
var verander = document.querySelector("#verander");
var firstNameHolder = document.querySelector(".firstNameHolder");
var secondNameHolder = document.querySelector(".secondNameHolder");
var thirdNameHolder = document.querySelector(".thirdNameHolder");
var resetNames = document.querySelector("#resetNames");
var resetNames1 = document.querySelector("#resetNames1");
var number = document.querySelector("#number");
var setScore = document.querySelector("#setScore");
var gameOver = false;
var p1Score = 0;
var p2Score = 0;
var winner = 5;

var name2 = false;
var x = 0;

nameSetting.classList.add('hidden');
winnaar.classList.add('hidden');

//set name
firstName.addEventListener("change", function () {
    var name1 = false;
    setFirstName.textContent = firstName.value;
});

secondName.addEventListener("change", function () {
    setSecondName.textContent = secondName.value;
});

startGame.addEventListener("click",function () {
    nameSetting.classList.remove('hidden');
    nameSettingTop.classList.add('hidden');
    firstNameHolder.classList.add('hidden');
    secondNameHolder.classList.add('hidden');
    thirdNameHolder.classList.add('hidden');
    resetNames.classList.add('hidden');
    startGame.classList.add('hidden');
});

verander.addEventListener("click", function () {
    nameSettingTop.classList.toggle('hidden');
    thirdNameHolder.classList.toggle('hidden');

});
//display scoreboard

number.addEventListener("change", function() {
    setScore.textContent = Number(number.value);
    resetNumber();
});

p1Button.addEventListener("click", function() {
    if(!gameOver){
        p1Score++;
        if(p1Score === winner){
            p1Display.classList.add("winnerColor");
            gameOver = true;
            winnaar.classList.remove('hidden');
            winnaar.textContent = "Gefeliciteerd, " + setFirstName.textContent + " heeft gewonnen";
            setFirstName.classList.add("winnerColor");
            winnaar.classList.add("winnaarText");
        }

    }
    nameSettingTop.classList.add('hidden');
    thirdNameHolder.classList.add('hidden');
    p1Display.textContent = p1Score;

});

p2Button.addEventListener("click", function() {
    if(!gameOver){
        p2Score++;
        if(p2Score === winner){
            p2Display.classList.add("winnerColor");
            gameOver = true;
            winnaar.classList.remove('hidden');
            winnaar.textContent = "Gefeliciteerd, " + setSecondName.textContent + " heeft gewonnen";
            setSecondName.classList.add("winnerColor");
            winnaar.classList.add("winnaarText");
        }

    }
    nameSettingTop.classList.add('hidden');
    thirdNameHolder.classList.add('hidden');
    p2Display.textContent = p2Score;

});

reset.addEventListener("click", function() {
    resetten();
    resetWhiteNumber()
});

resetNames.addEventListener("click", function() {
    resetName();
});
resetNames1.addEventListener("click", function() {
    resetName();
});

function resetten() {
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = p1Score;
    p2Display.textContent = p2Score;
    p1Display.classList.remove("winnerColor");
    p2Display.classList.remove("winnerColor");
    setFirstName.classList.remove("winnerColor");
    setSecondName.classList.remove("winnerColor");
    winnaar.classList.remove("winnaarText");
    winnaar.classList.add('hidden');
    gameOver = false;
    winnaar.textContent = "";
    winner = 5 ;
    setScore.textContent = "5";
    number.value = "";
    firstNameHolder.classList.remove('hidden');
    secondNameHolder.classList.remove('hidden');
    thirdNameHolder.classList.remove('hidden');
    resetNames.classList.remove('hidden');
    startGame.classList.remove('hidden');

}
function resetWhiteNumber() {
    setScore.textContent = Number(number.value);
}
function resetNumber() {
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = p1Score;
    p2Display.textContent = p2Score;
    p1Display.classList.remove("winnerColor");
    p2Display.classList.remove("winnerColor");
    setFirstName.classList.remove("winnerColor");
    setSecondName.classList.remove("winnerColor");
    gameOver = false;
    winnaar.textContent = "";
    winner = Number(number.value);
    setScore.textContent = Number(number.value);

}

function resetName() {
    firstName.value = "";
    secondName.value = "";
    setFirstName.textContent = "player 1";
    setSecondName.textContent = "player 2";
    nameSetting.classList.add('hidden');
    nameSettingTop.classList.remove('hidden');
    resetten()
}

// Name setting for the game starts


