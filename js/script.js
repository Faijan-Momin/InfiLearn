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