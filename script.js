"use strict";






function soundSwitcher(soundfile) {
  document.getElementById('initialAudio').src = soundfile;
  document.getElementById('initialAudio').play();
  }

  window.onload = function onloadAudio() {
    if (window.location.href.indexOf('index.html') > -1) {
      soundSwitcher('out.mp3');
    }
  }


 

let coll = document.getElementsByClassName("collapseBtn");
let i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let content = this.nextElementSibling;
    if (content.style.display == "flex") {
      content.style.display = "none";
    } else {
      content.style.display = "flex";
    }
  });
}



function validateName() {
   let nameCheck = document.getElementById('testform').value.toLowerCase();
    if (nameCheck == 'sil' || nameCheck == 'silvio')  { 
        document.getElementById('initialAudio').src = "whattayahearwhattayasay.mp3";
        document.getElementById('initialAudio').play();
        setTimeout(function(){ alert("success!"); }, 250);
         // change this alert...
         setTimeout(function(){ location.replace("soundboard.html"); }, 2000);
    }   else {
        document.getElementById('initialAudio').src = "canihelpyou.mp3";
        document.getElementById('initialAudio').play();
        setTimeout(function(){ alert('No disrespect T, maybe you oughta try again.'); }, 250); // change alert to trigger a picture to show  
        // maybe change the message.
    }
}
