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

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}