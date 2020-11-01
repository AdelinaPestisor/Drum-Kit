// Detecting button press
var allButtons = document.querySelectorAll(".drum").length;

for (i = 0; i < allButtons; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        this.style.color = "#5dde7f";

        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
        });   
}

// Detecting keyboard press
document.addEventListener("keydown", function(event){
makeSound(event.key);
buttonAnimation(event.key);
});
 
function makeSound(key) {
    switch (key) {
        case "A":
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
        break;

        case "d":
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
        break;

        case "e":
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
        break;

        case "l":
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
        break;

        case "i":
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
        break;

        case "n":
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
        break;

        case "a":
            var kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
        break;


        default: console.log(this.innerHTML);
    }
}

function buttonAnimation(currentkey){
    var activeButton = document.querySelector("." + currentkey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 1000);

}

// function buttonAnimation(currentkey){
//  var activeButton = document.querySelector("." + currentkey);
//  activeButton.classList.add("pressed");
// }

// document.querySelector(".w").style.backgroundImage = "url('images/tom1.png')";


// allButtons.forEach(function(bla){
//     bla.addEventListener("click", function(){ 
//         alert("I am working! uraaa!!!");
//     });
// });