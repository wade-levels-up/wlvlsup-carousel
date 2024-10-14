let slide = 1;
displaySlides(slide);

function navigateSlide(n) {
  displaySlides((slide += n));
}

function currentSlide(n) {
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

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    navDots[i].classList.remove("active");
  }

  slides[n - 1].style.display = "block";
  navDots[n - 1].classList.add("active");
}
