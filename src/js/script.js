"use strict";

const header = document.querySelector(".header"),
  menu = document.querySelector(".header__menu"),
  hamburger = document.querySelector(".hamburger"),
  carouselInner = document.querySelector(".carousel__inner"),
  carouselItems = document.querySelectorAll(".carousel__item"),
  screenWidth = window.screen.width;

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("is-active");
  // header.classList.toggle("header_mobile");
  // menu.classList.toggle("header__menu_mobile");
});

carouselInner.style.width = "fit-content";
let carouselWidth = carouselInner.getBoundingClientRect().width;

// contentWidth - is there enough content for carousel animation?
let contentWidth = 0;
for (let i = 0; i < carouselItems.length; i++) {
  const width = Math.round(carouselItems[i].getBoundingClientRect().width);
  contentWidth += width;
}
let vw = Math.round((contentWidth / screenWidth) * 100);
//if vw is > 100, the contend width is enough;

if (vw >= 100) {
  //copy content for internal movement effect
  const copy = document.createElement("div");
  copy.style.display = "flex";
  carouselInner.append(copy);
  for (let i = 0; i < carouselItems.length; i++) {
    let copyItem = carouselItems[i].cloneNode(true);
    copy.append(copyItem);
  }

  setTimeout(() => {
    gsap.to(".carousel__inner", {
      x: `-${carouselWidth}px`,
      duration: 15,
      ease: "none",
      repeat: -1,
    });
  }, 2000);
}
