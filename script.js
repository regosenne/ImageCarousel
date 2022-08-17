var track = document.querySelector('.carouselTracker');
var slides = Array.from(track.children);
var dotsNav = document.querySelector('.carouselNav');
var dots = Array.from(dotsNav.children);
var LeftBtn = document.querySelector('.carouselLeft');
var RightBtn = document.querySelector('.carouselRight');

//I need a constant width 
var slideWidth = slides[0].getBoundingClientRect().width;
//I need to have the images side by side
function slidePosition(slide, index) {
  slide.style.left = slideWidth * index + 'px';
}
slides.forEach(slidePosition);

function toMove(track, currentSlide, targetSlide) {
  track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
  currentSlide.classList.remove('currentSlide');
  targetSlide.classList.add('currentSlide');
}

function prevbtn() {
  var currentSlide = track.querySelector('.currentSlide');
  var prevSlide = currentSlide.previousElementSibling;
  toMove(track, currentSlide, prevSlide);
}
LeftBtn.addEventListener('click', prevbtn);

function nextbtn() {
  var currentSlide = track.querySelector('.currentSlide');
  var nextSlide = currentSlide.nextElementSibling;
  toMove(track, currentSlide, nextSlide);
}
RightBtn.addEventListener('click', nextbtn);

//gonna add more functionality