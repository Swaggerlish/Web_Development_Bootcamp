var drumButton = document.querySelectorAll(".drum");

for(var i = 0; i < drumButton.length; i++){
    drumButton[i].addEventListener("click", function(){
       var buttonInnerHTML = this.innerHTML;
       buttonPressed(buttonInnerHTML);
       buttonAnimated(buttonInnerHTML);
       });
}

document.addEventListener("keydown", function(e){
    buttonPressed(e.key);
    buttonAnimated(e.key);
   });

function buttonPressed(letter){
    switch (letter) {
        case "w":
            var crash = new Audio("./sounds/crash.mp3");
                crash.play();
            break;
        case "a":
            var kick = new Audio("./sounds/kick-bass.mp3");
            kick.play();
            break;
        case "s":
            var snare = new Audio("./sounds/snare.mp3");
            snare.play();
            break;
        case "d":
            var tom1 = new Audio("./sounds/tom-1.mp3");
            tom1.play();
            break;
        case "j":
            var tom2 = new Audio("./sounds/tom-2.mp3");
            tom2.play();
            break;
        case "k":
            var tom3 = new Audio("./sounds/tom-3.mp3");
            tom3.play();
            break;
        case "l":
            var tom4 = new Audio("./sounds/tom-4.mp3");
            tom4.play();
            break;
       
        default: console.log("buttonInnerHTML")
       }
}
function buttonAnimated(keyPress){
var activeButton = document.querySelector("." + keyPress);
activeButton.classList.add("pressed");
const timeOut = setTimeout(function(){
    activeButton.classList.remove("pressed");
}, 100);
}







// var audio = new Audio("./sounds/tom-1.mp3");
// audio.play();