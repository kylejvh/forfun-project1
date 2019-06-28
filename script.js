




let coll = document.getElementsByClassName("collapseBtn");
let i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let content = this.nextElementSibling;
    if (content.style.display == "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}


function soundSwitcher(soundfile) {
document.getElementById('initialAudio').src = soundfile;
document.getElementById('initialAudio').play();
}







// the simplest way to do this is to add 
// a class to the animation to trigger it?


function validateName() {
   let nameCheck = document.getElementById('testform').value;
    if (nameCheck == 'Silvio') {
        document.getElementById('initialAudio').src = "whattayahearwhattayasay.mp3";
        document.getElementById('initialAudio').play();
         // change this alert...
        location.replace("soundboard.html");
        // call function here that hides img and shows list of sounds
    }   else {
        document.getElementById('initialAudio').src = "canihelpyou.mp3";
        document.getElementById('initialAudio').play();
        alert('No disrespect T, maybe you oughta try again.'); // change alert to trigger a picture to show  
        // maybe change the message.
    }
}




