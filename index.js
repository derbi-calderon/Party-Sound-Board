window.onload = function(){
	
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

  });

}

document.addEventListener("keypress", function(event) {

  makeSound(event.key);

  buttonAnimation(event.key);

});


function makeSound(key) {

  switch (key) {
    case "h":
	case "H":
      var tom1 = new Audio("http://commondatastorage.googleapis.com/codeskulptor-assets/Collision8-Bit.ogg");
      tom1.play();
      break;

    case "i":
      var tom2 = new Audio("http://commondatastorage.googleapis.com/codeskulptor-assets/jump.ogg");
      tom2.play();
      break;

    case "t":
      var tom3 = new Audio('http://commondatastorage.googleapis.com/codeskulptor-assets/week7-bounce.m4a');
      tom3.play();
      break;

    case "d":
	case "D":
      var tom4 = new Audio('http://codeskulptor-demos.commondatastorage.googleapis.com/pang/pop.mp3');
      tom4.play();
      break;

    case "a":
      var snare = new Audio('http://codeskulptor-demos.commondatastorage.googleapis.com/descent/spring.mp3');
      snare.play();
      break;

    case "k":
	case "K":
      var crash = new Audio('http://commondatastorage.googleapis.com/codeskulptor-assets/week7-button.m4a');
      crash.play();
      break;

    case "e":
      var kick = new Audio('http://commondatastorage.googleapis.com/codeskulptor-assets/sounddogs/explosion.mp3');
      kick.play();
      break;
	
	case "y":
      var kick = new Audio('http://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/player_shoot.wav');
      kick.play();
      break;
	
	case "s":
      var kick = new Audio('http://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/pause.wav');
      kick.play();
      break;

    default: console.log(key);

  }
}


function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}
}