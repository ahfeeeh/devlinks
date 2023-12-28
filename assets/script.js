function changeAudio(bool){
  var audio = document.getElementById("audio");
  if (bool){
    audio.src="./assets/ymca.mp3"
  }else{
    audio.src="./assets/mosca.mp3"
  }
  
  audio.volume = 1
  audio.play();
}


function toggleMode() {
  
  const html =
    document.documentElement

  if (html.classList.contains("light")) {
    
    html.classList.remove(
      "light"
    )
    changeAudio(false)
  } else {
    html.classList.add("light")
    changeAudio(true)
  }
  
  const img =
    document.querySelector(
      "#profile img"
    ) 
  if (html.classList.contains("light")) {    
    img.setAttribute("src", "./assets/avatar-fefe-light.jpg")
  } else {    
    img.setAttribute("src", "./assets/avatar-fefe-dark.jpg")
  }
}
