//box 1 - loser
function loserOne() {
  var x = document.getElementById("text");
  if (x.innerHTML === " ") {
    x.innerHTML = "Oooh - so close, but no cigar";
  } else {
    x.innerHTML = " ";
  }
}

//box 2 - winner
function winner() {
  var x = document.getElementById("text");
  if (x.innerHTML === " ") {
    x.innerHTML = "DING DING DING - We have a winner!";
  } else {
    x.innerHTML = " ";
  }
}

//box 3 - loser
function loserTwo() {
  var x = document.getElementById("text");
  if (x.innerHTML === " ") {
    x.innerHTML = "Oops, better luck next time";
  } else {
    x.innerHTML = " ";
  }
}

//change background color on hover
var cardHover1 = document.getElementById("card1");
var cardHover2 = document.getElementById("card2");
var cardHover3 = document.getElementById("card3");


cardHover1.addEventListener("mouseover", function () {
  cardHover1.style.backgroundColor = "#E4DAEF";
  cardHover2.style.backgroundColor = "#E4DAEF";
  cardHover3.style.backgroundColor = "#E4DAEF";

}, false);

cardHover1.addEventListener("mouseout", function () {
  cardHover1.style.backgroundColor = "#FDFF00";
  cardHover2.style.backgroundColor = "#00FFD3";
  cardHover3.style.backgroundColor = "#9AFF00";
}, false);

cardHover2.addEventListener("mouseover", function () {
  cardHover1.style.backgroundColor = "#E4DAEF";
  cardHover2.style.backgroundColor = "#E4DAEF";
  cardHover3.style.backgroundColor = "#E4DAEF";

}, false);

cardHover2.addEventListener("mouseout", function () {
  cardHover1.style.backgroundColor = "#FDFF00";
  cardHover2.style.backgroundColor = "#00FFD3";
  cardHover3.style.backgroundColor = "#9AFF00";
}, false);

cardHover3.addEventListener("mouseover", function () {
  cardHover1.style.backgroundColor = "#E4DAEF";
  cardHover2.style.backgroundColor = "#E4DAEF";
  cardHover3.style.backgroundColor = "#E4DAEF";

}, false);

cardHover3.addEventListener("mouseout", function () {
  cardHover1.style.backgroundColor = "#FDFF00";
  cardHover2.style.backgroundColor = "#00FFD3";
  cardHover3.style.backgroundColor = "#9AFF00";
}, false);
