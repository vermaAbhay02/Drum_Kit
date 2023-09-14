let totaldrums = document.querySelectorAll(".drum").length;

for (let i = 0; i < totaldrums; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
       
        let key=this.innerHTML;
        makeSound(key);
        buttonAnimation(key);
    });
}

document.addEventListener("keypress",function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
    console.log(event);
});


function makeSound(key){
    if(key=='w'){
        let audio = new Audio("sounds/crash.mp3");
        audio.play();
 }
 else if(key=='a'){
        let audio = new Audio("sounds/kick-bass.mp3");
        audio.play();
 }
 else if(key=='s'){
          let audio = new Audio("sounds/snare.mp3");
          audio.play();
 }
 else if(key=='d'){
          let audio = new Audio("sounds/tom-1.mp3");
          audio.play();
 }
 else if(key=='j'){
          let audio = new Audio("sounds/tom-2.mp3");
          audio.play();
 }
   else if(key=='k'){
           let audio = new Audio("sounds/tom-3.mp3");
           audio.play();
   }
   else if(key=='l'){
           let audio = new Audio("sounds/tom-4.mp3");
           audio.play();
   }

}

function buttonAnimation(currentkey){
    let activeButton=document.querySelector("."+currentkey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },150);
}
