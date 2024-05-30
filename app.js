let black = document.querySelector(".black")
let screamer = document.querySelector(".screamer")
let audio = document.querySelector("#myAudio")
setTimeout(()=>{
    black.style.display = "none"
    screamer.style.display = "block"
    audio.play()
},3000)

