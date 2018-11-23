const slider = document.querySelector(".items");
let isDown = false;
let startX, scrollLeft;

slider.addEventListener("mousedown", e => {
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
  slider.classList.add("active");
  isDown = true;
});

slider.addEventListener("mouseup", () => {
  slider.classList.remove("active");
  isDown = false;
});

slider.addEventListener("mouseleave", () => {
  slider.classList.remove("active");
  isDown = false;
});

slider.addEventListener("mousemove", e => {
  if (!isDown) return;
  e.preventDefault();
  let x = e.pageX - slider.offsetLeft;

  let moveValue = (x - startX) * 2;
  slider.scrollLeft = scrollLeft - moveValue;
});
