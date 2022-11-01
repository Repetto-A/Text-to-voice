document.getElementById('speak').addEventListener('click',()=>{
    say(document.getElementById('text').value);
});

function say(text){
    speechSynthesis.speak(new SpeechSynthesisUtterance(text));
}