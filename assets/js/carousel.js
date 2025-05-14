let slideIndex = 1;
let slider = document.querySelector(".slide-container");
let slides = document.querySelector(".slides");
let slide = document.querySelectorAll(".slide");
let dots = document.querySelectorAll(".dots span")
let slideActive = true;

function plusSlide(position) {
  if (slideActive == true) {
    slideIndex += position;
    slideActive = false;

    if (slideIndex > slide.length) {
      slideIndex = 1;
    }
    else if (slideIndex < 1) {
      slideIndex = slide.length;
    }

    for (var i = 0; i < dots.length; i++) {
      const element = dots[i];
      element.classList.remove("dot-active");
      element.classList.add("dot-inactive");
    }

    slides.style.left = `-${slideIndex - 1}00%`;
    dots[slideIndex - 1].classList.add("dot-active");
    dots[slideIndex - 1].classList.remove("dot-inactive");

    slideDelay();
  }

}

function slideDelay() {
  setTimeout(function() {
    slideActive = true;
  }, 1000);
}


function currentSlide(index) {

  if (index > slide.length) {
    index = 1;
  }
  else if (index < 1) {
    index = slide.length;
  }

  for (var i = 0; i < dots.length; i++) {
    const element = dots[i];
    element.classList.remove("dot-active");
    element.classList.add("dot-inactive");

  }

  slides.style.left = `-${index - 1}00%`;
  dots[index - 1].classList.add("dot-active");
  dots[index - 1].classList.remove("dot-inactive");


  slideIndex = index;

}

function showSlide() {
  slideIndex++;

  if (slideIndex > slide.length) {
    slideIndex = 1;
  }
  else if (slideIndex < 1) {
    slideIndex = slide.length;
  }

  for (var i = 0; i < dots.length; i++) {
    const element = dots[i];
    element.classList.remove("dot-active");

  }

  slides.style.left = `-${slideIndex - 1}00%`;
  dots[slideIndex - 1].classList.add("dot-active");

}

/*

let interval = setInterval(()=> {
  showSlide();
}, 3000);

slider.addEventListener("mouseover", ()=> {
  clearInterval(interval);
});

slider.addEventListener("mouseover", ()=> {
  interval = setInterval(()=> {
    showSlide();
  }, 3000);
});

*/
