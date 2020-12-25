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
       