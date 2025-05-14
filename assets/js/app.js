var slideNo = 1;
Carousel(slideNo);

function Carousel(n) {
  var slides = document.getElementsByClassName("image-container");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideNo = 1;
  }
  if (n < 1) {
    slideNo = slides.length;
  }
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideNo - 1].style.display = "block";
  for (var i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  dots[slideNo -1].className += " active";

}

var element = document.getElementById("text-des");
var element2 = document.getElementById("text-des-child");

function changeText() {

  if (slideNo == 1) {
    element.innerHTML = "FALCON HEAVY LAUNCH";
    element2.innerHTML = "THE WORLD'S MOST POWERFUL SPACECRAFT";
  }

  if (slideNo == 2) {
    element.innerHTML = "MOONBASE COLONY";
    element2.innerHTML = "MAN'S FIRST STEPS OF INTERPLANETARY COLONIZATION";
  }

  if (slideNo == 3) {
    element.innerHTML = "DYSON SPHERE";
    element2.innerHTML = "THE CELESTIAL POWER PLANT";
  }

  if (slideNo == 4) {
    element.innerHTML = "MEGA SKYHOOK";
    element2.innerHTML = "REVOLUTIONARY MOMENTUM CONSERVER";
  }

  if (slideNo == 5) {
    element.innerHTML = "LANDSAT–9";
    element2.innerHTML = "ADVANCED EARTH OBSERVATION SATELLITE";
  }

  if (slideNo == 6) {
    element.innerHTML = "THE NIGHTFLYER";
    element2.innerHTML = "THERMONUCLEAR PROPULSIVE SPACECRAFT DESIGN";
  }

}


function fadeOut() {
  element.style.transition = "0s";
  element.style.opacity = "0";
  element.style.transform = "translate(-10%, 0)"
  element2.style.transition = "0s";
  element2.style.opacity = "0";
  element2.style.transform = "translate(-10%, 0)"
  fadeIn();

}

function fadeIn() {
  setTimeout(function(){
    element.style.transition = "0.5s";
    element.style.transform = "translate(0%, 0)"
    element.style.opacity = "1"; }, 200);
    setTimeout(function(){
      element2.style.transition = "0.5s";
      element2.style.transform = "translate(0%, 0)"
      element2.style.opacity = "1"; }, 300);
}


function newSlide(n) {
  Carousel(slideNo += n);
  changeText();
  fadeOut();
}

function currentSlide(n) {
  Carousel(slideNo = n);
  changeText();
  fadeOut();
}
