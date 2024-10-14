autoloop = true;
let slide = 1;
displaySlides(slide);

function navigateSlide(n) {
  autoloop = false;
  displaySlides((slide += n));
}

function currentSlide(n) {
  autoloop = false;
  displaySlides(n);
}

function displaySlides(n) {
  let slideIndex = n;
  let slides = document.getElementsByClassName("slide");
  let navDots = document.getElementsByClassName("nav-dot");

  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  if (slideIndex < 1) {
    slideIndex = slides.length;
  }

  slide = slideIndex;

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    navDots[i].classList.remove("active");
  }

  slides[slideIndex - 1].style.display = "block";
  navDots[slideIndex - 1].classList.add("active");
  if (autoloop) {
    setTimeout(() => {
      if (autoloop) {
        displaySlides((slide += 1));
      }
    }, 5000);
  }
}
