//////////////////////////////////////////////////////////////////////////////// First dice

var randomNumber1 = Math.floor(Math.random() * 6) + 1; //random number between 1 - 6

var randomDiceImage = "dice" + randomNumber1 + ".png" ; //string from dice1 to dice6

var randomImageSource = "images/" + randomDiceImage; // images/dice1.png - dice6.png

var image1 = document.querySelectorAll("img")[0]; // image1 reprezinta primul zar

image1.setAttribute("src", randomImageSource); // aici se va schimba atributul src cu image1 de fiecare data cand dam refresh la pagina

///////////////////////////////////////////////////////////////////////////////// Second dice

var randomNumber2 = Math.floor(Math.random() * 6) + 1; 

var randomDiceImage = "dice" + randomNumber2 + ".png" ;

var randomImageSource2 = "images/" + randomDiceImage; 

var image2 = document.querySelectorAll("img")[1]; // image1 reprezinta primul zar

image2.setAttribute("src", randomImageSource2);

////////////////////////////////////////////////////////////////////////////////Refresh button

function refreshPage() {
    location.reload();
}

////////////////////////////////////////////////////////////////////////////////

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 Win! &#127942"; 
}

else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 Win! &#127942";
}

else {
    document.querySelector("h1").innerHTML = "Draw! &#129340";
}