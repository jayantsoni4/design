const m1 = document.querySelector("h3")
const m2 = document.querySelector(".first")
const m3 = document.querySelector(".second")


window.addEventListener("load", () => {
  // m1.style.transform ="translateX(150px)"
})

window.addEventListener("scroll", () => {
  const scrollVal = window.scrollY;
  m1.style.transform = `translateX(${scrollVal * 5}px)`;
  m2.style.transform = `translateX(${scrollVal * 1}px)`;
  m3.style.transform = `translateX(${scrollVal * 0.5}px)`;
});

window.scrollTo(x, y);


