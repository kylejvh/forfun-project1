let audioInitial = new Audio('out.mp3'); 
audioInitial.onload = audioInitial.play();

let audioSubmitTrue = new Audio('whattayahearwhattayasay.mp3');
let audioSubmitFalse = new Audio('canihelpyou.mp3');

function validateName() {
   let nameCheck = document.getElementById("testform").value;
    if (nameCheck == "Silvio") {
        audioSubmitTrue.play();
        alert("pass!");
    }   else {
        audioSubmitFalse.play();
        alert("No disrespect T, maybe you oughta try again."); // change alert to trigger a picture to show,
        return false;             // maybe change the message.
    }
}



 /* let nameCheck = function validateName() {  // rename this function?
    if  (document.getElementById("nameform") === "Tony") {
        audioTony.play();
    }   else { alert("No, you're Tony");
   }
} */


// addEventListener.onkeydown = s, i, l, v, i, o




// when the following keys are pressed, reveal all of the buttons.

// document.addEventListener('keydown', logKey);
    // if { logKey = s}