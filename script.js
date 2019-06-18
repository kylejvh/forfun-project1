document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(elems, options);
  });


 function imgAudio() {
    document.getElementById('initialAudio').src = "out.mp3";
    document.getElementById('initialAudio').play();
 }


function revealButtons() {
    let animationTrigger = document.getElementById('bingImage');
    animationTrigger.className = 'invisible';
}




// the simplest way to do this is to add 
// a class to the animation to trigger it?


function validateName() {
   let nameCheck = document.getElementById('testform').value;
    if (nameCheck == 'Silvio') {
        document.getElementById('initialAudio').src = "whattayahearwhattayasay.mp3";
        document.getElementById('initialAudio').play();
        alert('pass!');  // change this alert...
        revealButtons();
        // call function here that hides img and shows list of sounds
    }   else {
        document.getElementById('initialAudio').src = "canihelpyou.mp3";
        document.getElementById('initialAudio').play();
        alert('No disrespect T, maybe you oughta try again.'); // change alert to trigger a picture to show  
        // maybe change the message.
    }
}
