
// Mobile Header Navbar

function MobileNav(){
    if(document.getElementById("mobile-header-navbar").style.height == "100%"){
        closeNav();
    }
    else{
        openNav();
    }
}
function openNav() {
    document.getElementById("mobile-header-navbar").style.height = "100%";
  }
  
function closeNav() {
    document.getElementById("mobile-header-navbar").style.height = "0%";
  }
       

//   Mobile Header Collapsible

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}



// Sign in Modal

// Get the modal
var signin_modal = document.getElementById("signin-modal");

// Get the button that opens the modal
var signin_modal_btn = document.getElementById("signin-modal-btn");

// Link Present on signup Modal
var signin_modal_btn_modal = document.getElementById("signin-modal-btn-modal");

// Get the <span> element that closes the modal
var signin_close = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
signin_modal_btn.onclick = function() {
  signin_modal.style.display = "block";
  signup_modal.style.display = "none";
}

signin_modal_btn_modal.onclick = function() {
  signin_modal.style.display = "block";
  signup_modal.style.display = "none";
}

// When the user clicks on <span> (x), close the modal
signin_close.onclick = function() {
  signin_modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == signin_modal) {
    signin_modal.style.display = "none";
  }
}


// Sign up Modal

// Get the modal
var signup_modal = document.getElementById("signup-modal");

// Get the button that opens the modal
var signup_modal_btn = document.getElementById("signup-modal-btn");

// Get the <span> element that closes the modal
var signup_close_btn = document.getElementsByClassName("close")[1];

// When the user clicks the button, open the modal 
signup_modal_btn.onclick = function() {
  signup_modal.style.display = "block";
  signin_modal.style.display = "none";
}

// When the user clicks on <span> (x), close the modal
signup_close_btn.onclick = function() {
  signup_modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == signup_modal) {
    signup_modal.style.display = "none";
  }
}