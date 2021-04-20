for (var i = 0; i < 8; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
}



function handleClick() {
    /* alert("Hello , I got Clicked."); */
    trigger(this.innerHTML);
    animate(this.innerHTML);

    /* this.style.color="white"; */
}

function trigger(value) {
    /* Using Switch statements */
    switch (value) {
        case "w":
            var s1 = new Audio("sounds/tom-1.mp3");
            s1.play();
            break;
        case "a":
            var s2 = new Audio("sounds/tom-2.mp3");
            s2.play();
            break;
        case "s":
            var s3 = new Audio("sounds/tom-3.mp3");
            s3.play();
            break;
        case "d":
            var s4 = new Audio("sounds/tom-4.mp3");
            s4.play();
            break;
        case "i":
            var s5 = new Audio("sounds/crash.mp3");
            s5.play();
            break;
        case "j":
            var s6 = new Audio("sounds/kick-bass.mp3");
            s6.play();
            break;
        case "k":
            var s7 = new Audio("sounds/snare.mp3");
            s7.play();
            break;
        case "l":
            var s8 = new Audio("sounds/i.wav");
            s8.play();
            break;

        default:
            console.log(this.innerHTML);
            break;
    }
}

/* Key board event press Type1*/

/* document.addEventListener("keydown", function(event){trigger(event.key);}); */
/* Key board event press Type2 */
document.addEventListener("keydown", keySt);

function keySt(event){
    trigger(event.key);
    animate(event.key);
}


function animate(key){
    document.querySelector("."+key).classList.add("pressed");
    setTimeout(function(){
        document.querySelector("."+key).classList.remove("pressed");
    },100);
}












/* IF we want to use IF-ELSE statements for handle click (cut,paste and uncomment)*/
/* 
if(this.innerHTML==="i"){
var audio=new Audio("sounds/crash.mp3");
audio.play();
}else if(this.innerHTML==="j"){
var audio=new Audio("sounds/kick-bass.mp3");
audio.play();
}else if(this.innerHTML==="k"){
var audio=new Audio("sounds/snare.mp3");
audio.play();
}else if(this.innerHTML==="l"){
var audio=new Audio("sounds/i.wav");
audio.play();
}else if(this.innerHTML==="w"){
var audio=new Audio("sounds/tom-1.mp3");
audio.play();
}else if(this.innerHTML==="a"){
var audio=new Audio("sounds/tom-2.mp3");
audio.play();
}else if(this.innerHTML==="s"){
var audio=new Audio("sounds/tom-3.mp3");
audio.play();
}else if(this.innerHTML==="d"){
var audio=new Audio("sounds/tom-4.mp3");
audio.play();
}
 */