function soundSwitcher(soundfile) {
  document.getElementById('initialAudio').src = soundfile;
  document.getElementById('initialAudio').play();
  }
  
function classToggle() {
  
  masterDiv.classList.toggle("activeDiv");
}
  





let coll = document.getElementsByClassName("collapseBtn");
let masterDiv = document.querySelector("#tonyLayout");
let masterDiv1 = document.querySelector("#paulieLayout");
let masterDiv2 = document.querySelector("#juniorLayout");
let i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
   /* masterDiv.classList.toggle("tonyMasterDiv");
    masterDiv1.classList.toggle("tonyMasterDiv");
    masterDiv2.classList.toggle("tonyMasterDiv"); */

    let content = this.nextElementSibling;
    if (content.style.display == "flex") {
      content.style.display = "none";
    } else {
      content.style.display = "flex";
    }
  });
}


;







// the simplest way to do this is to add 
// a class to the animation to trigger it?


function validateName() {
   let nameCheck = document.getElementById('testform').value;
    if (nameCheck === 'Silvio') {
        document.getElementById('initialAudio').src = "whattayahearwhattayasay.mp3";
        document.getElementById('initialAudio').play();
        setTimeout(function(){ alert("success!"); }, 250);
         // change this alert...
         setTimeout(function(){ location.replace("soundboard.html"); }, 2000);
        // call function here that hides img and shows list of sounds
    }   else {
        document.getElementById('initialAudio').src = "canihelpyou.mp3";
        document.getElementById('initialAudio').play();
        setTimeout(function(){ alert('No disrespect T, maybe you oughta try again.'); }, 250); // change alert to trigger a picture to show  
        // maybe change the message.
    }
}
