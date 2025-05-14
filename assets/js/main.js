var prevScrollpos = window.pageYOffset;

window.onscroll = function() {
  var currentScrollpos = window.pageYOffset;
  var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
  if(prevScrollpos > currentScrollpos) {

    document.getElementById("navbar").style.transitionDelay = "0s";
    document.getElementById("navbar").style.top = "0";
    if (width > 860) {
      document.getElementById("nav-ul").style.transitionDelay = "0.3s";
      document.getElementById("nav-img").style.transitionDelay = "0.3s";
    }
    document.getElementById("nav-ul").style.opacity = "1";
    document.getElementById("nav-img").style.opacity = "1";
    document.getElementById("btn").style.transitionDelay = "0.3s";
    document.getElementById("btn").style.opacity = "1";
    document.getElementById("cancel").style.transitionDelay = "0.3s";
    document.getElementById("cancel").style.opacity = "1";


  } else if(currentScrollpos > 130){
    document.getElementById("navbar").style.transitionDelay = "0.2s";
    document.getElementById("navbar").style.top = "-100px";
    document.getElementById("nav-ul").style.transitionDelay = "0s";
    document.getElementById("nav-ul").style.opacity = "0";
    document.getElementById("nav-img").style.transitionDelay = "0s";
    document.getElementById("nav-img").style.opacity = "0";
    document.getElementById("btn").style.transitionDelay = "0s";
    document.getElementById("btn").style.opacity = "0";
    document.getElementById("cancel").style.transitionDelay = "0s";
    document.getElementById("cancel").style.opacity = "0";


  }

  prevScrollpos = currentScrollpos;

}

window.onresize = function () {
var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
if (width < 861) {
  document.getElementById("nav-ul").style.transitionDelay = "0s";
  document.getElementById("nav-img").style.transitionDelay = "0s";
}
}




function validate() {
  var checkBox = document.getElementById('check');
  if (checkBox.checked == true) {
    document.getElementsByTagName("body")[0].style.overflow = "hidden";
  } else {
    document.getElementsByTagName("body")[0].style.overflow = "visible";
  }


}
