function changeAudio(bool){
  var audio = document.getElementById("audio");
  if (bool){
    audio.src="./assets/ymca-up.mp3"
  }else{
    audio.src="./assets/mosca.mp3"
  }
  
  audio.volume = 1
  audio.play();
}

function toggleClass(element, className){
  $(element).toggleClass(className)
}

function toggleColor(bool){
  if(bool){
    $("body .footer").css("--footer-background", "#9455ed");
  }else {
    $("body .footer").css("--footer-background", "#ed558a");
  }  
}


function toggleMode() {
  
  const html = document.documentElement
  toggleClass("#drawing_canvas", "hide")

  if (html.classList.contains("light")) {
    
    html.classList.remove("light")
    changeAudio(false)
    toggleColor(true)
    
  } else {
    html.classList.add("light")
    changeAudio(true)
    toggleColor(false)
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
