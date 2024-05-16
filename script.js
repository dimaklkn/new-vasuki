//first carousel variables
const track = document.querySelector(".carousel__track");
const slides = Array.from(track.children);
const nextbtn = document.querySelector(".carousel__button--right");
const prevbtn = document.querySelector(".carousel__button--left");
const navDots = document.querySelector(".carousel__nav");
const navDotsArr = Array.from(navDots.children);

//secont carousel variables
const track2 = document.querySelector(".section5__track");
const slides2 = Array.from(track2.children);
const nextbtn2 = document.querySelector(".section5__button--right");
const prevbtn2 = document.querySelector(".section5__button--left");
const nextbtn3 = document.querySelector(".section5__button--right2");
const prevbtn3 = document.querySelector(".section5__button--left2");
const counter = document.querySelector(".section5__counter");
const counter2 = document.querySelector(".section5__counter2");

//arrange slides next to one another
let carousel = document.querySelector(".carousel");
let left = carousel.getBoundingClientRect().left;
const width = 335;

const setSlidePosition = (slide, index) => {
  slide.style.left = width * index + "px";
};

slides.forEach((slide, index) => {
  setSlidePosition(slide, index);
});

slides2.forEach((slide, index) => {
  setSlidePosition(slide, index);
});

//FUNCTIONALITY OF CAROUSELS

const moveToSlide = (track, currentSlide, targetSlide) => {
  track.style.transform = `translateX(-${targetSlide.style.left})`;
  currentSlide.classList.remove("current-slide");
  targetSlide.classList.add("current-slide");
};

const updateDots = (currentDot, targetDot) => {
  currentDot.classList.remove("active", "current-slide");
  targetDot.classList.add("active", "current-slide");
};

const doUndoButtons = (slides, prevbtn, nextbtn, targetIndex) => {
  if (targetIndex === 0) {
    prevbtn.classList.remove("active");
    nextbtn.classList.add("active");
  } else if (targetIndex === slides.length - 1) {
    prevbtn.classList.add("active");
    nextbtn.classList.remove("active");
  } else {
    prevbtn.classList.add("active");
    nextbtn.classList.add("active");
  }
};

//FIRST CAROUSEL
//when I click left, move slides to the left
prevbtn.addEventListener("click", (e) => {
  let currentSlide = track.querySelector(".current-slide");
  let previousSlide = currentSlide.previousElementSibling;
  let currentDot = navDots.querySelector(".current-slide");
  let prevDot = currentDot.previousElementSibling;
  let prevIndex = slides.findIndex((slide) => slide === previousSlide);
  if (prevIndex === -1) {
    return;
  }
  moveToSlide(track, currentSlide, previousSlide);
  updateDots(currentDot, prevDot);
  doUndoButtons(slides, prevbtn, nextbtn, prevIndex);
});

//when I click right, move slides to the right
nextbtn.addEventListener("click", (e) => {
  let currentSlide = track.querySelector(".current-slide");
  let nextSlide = currentSlide.nextElementSibling;
  let currentDot = navDots.querySelector(".current-slide");
  let nextDot = currentDot.nextElementSibling;
  let nextIndex = slides.findIndex((slide) => slide === nextSlide);
  if (nextIndex === -1) {
    return;
  }
  moveToSlide(track, currentSlide, nextSlide);
  updateDots(currentDot, nextDot);
  doUndoButtons(slides, prevbtn, nextbtn, nextIndex);
});

//when I click nav indicators, move to the slide
navDots.addEventListener("click", (e) => {
  //what indicator was clicked on
  const targetDot = e.target.closest("button");
  if (!targetDot) return;
  let currentSlide = track.querySelector(".current-slide");
  let currentDot = navDots.querySelector(".current-slide");
  let targetIndex = navDotsArr.findIndex((dot) => dot === targetDot);
  let targetSlide = slides[targetIndex];
  moveToSlide(track, currentSlide, targetSlide);
  updateDots(currentDot, targetDot);
  doUndoButtons(slides, prevbtn, nextbtn, targetSlide);
});

//SECTOND CAROUSEL
//when I click right, move slides to the right

nextbtn2.addEventListener("click", (e) => {
  let currentSlide = track2.querySelector(".current-slide");
  let nextSlide = currentSlide.nextElementSibling;

  let nextIndex = slides2.findIndex((slide) => slide === nextSlide);
  if (nextIndex === -1) {
    return;
  }

  counter.innerHTML = nextIndex + 1;
  moveToSlide(track2, currentSlide, nextSlide);
  doUndoButtons(slides2, prevbtn2, nextbtn2, nextIndex);
});

prevbtn2.addEventListener("click", (e) => {
  let currentSlide = track2.querySelector(".current-slide");
  let previousSlide = currentSlide.previousElementSibling;
  let prevIndex = slides2.findIndex((slide) => slide === previousSlide);
  if (prevIndex === -1) {
    return;
  }

  counter.innerHTML = prevIndex + 1;
  moveToSlide(track2, currentSlide, previousSlide);
  doUndoButtons(slides2, prevbtn2, nextbtn2, prevIndex);
});

//carousel 2 (desctop functionality)
nextbtn3.addEventListener("click", (e) => {
  let currentSlide = track2.querySelector(".current-slide");
  let nextIndex = 4;
  let nextSlide = slides2[3];

  if (nextIndex === -1) {
    return;
  }
  let targetIndex = slides2.length - 1;

  counter2.innerHTML = nextIndex + 2;
  moveToSlide(track2, currentSlide, nextSlide);
  doUndoButtons(slides2, prevbtn3, nextbtn3, targetIndex);
});

prevbtn3.addEventListener("click", (e) => {
  let currentSlide = track2.querySelector(".current-slide");
  let previousSlide = slides2[0];
  let prevIndex = 0;
  if (prevIndex === -1) {
    return;
  }

  counter2.innerHTML = prevIndex + 3;
  moveToSlide(track2, currentSlide, previousSlide);
  doUndoButtons(slides2, prevbtn3, nextbtn3, prevIndex);
});
