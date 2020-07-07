const musicArr = ['tom','tink','snare','ride','openhat','kick','hihat','clap','boom']
const allowedKeys = ['a','s','d','f','g','h','j','k','l']
const keyRespond = (e) => {
    for (let i = 0; i < allowedKeys.length; i++) {
        if(allowedKeys[i] == e.key){
            let audio = new Audio("assets/music/"+musicArr[i]+'.wav');
            audio.play();
        }
    }
}
const clickRespond = (e) =>{
    for (let i = 0; i < allowedKeys.length; i++) {
        if(allowedKeys[i] == e.target.textContent){
            let audio = new Audio("assets/music/"+musicArr[i]+'.wav');
            audio.play();
        }
    }
}
document.addEventListener('keyup',keyRespond)
var pS = document.getElementsByTagName('p')
for (let i = 0; i < pS.length; i++) {
    pS[i].addEventListener('click',clickRespond)
}