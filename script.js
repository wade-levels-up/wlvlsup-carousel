let index;
displaySlides();

function navigateSlide(n) {
  index += n;
}

function currentSlide(n) {
  index = n;
}

function displaySlides(n) {
  let slideIndex = 0;
  let slides = document.getElementsByClassName("slide");
  let navDots = document.getElementsByClassName("nav-dot");
  //If the slide index is greater than the slide list length set it back to 1
  //If the slide index is less than 1 (the first picture) it will need to be set to the length of the slide list
  //For each item in the list of slides we need to set its display to: none,
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    navDots[i].classList.remove("active");
  }
  //Take the slide index value minus 1 and set the display property of that slide to block
  slides[1].style.display = "block";
  navDots[1].classList.add("active");
  //Take the slide index value minus 1 and set the class name of that dot to “active”
}
