var caja = document.getElementById("texto");
var boton = document.getElementById("boton_leer");

var leer = new SpeechSynthesisUtterance();
var voices = window.speechSynthesis.getVoices();
leer.voice = voices[7];



boton.addEventListener("click",function(){
    leer.text = caja.value;
    speechSynthesis.speak(leer);

})