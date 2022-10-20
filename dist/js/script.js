"use strict";

const header = document.querySelector(".header"),
  menu = document.querySelector(".header__menu"),
  hamburger = document.querySelector(".hamburger");

$(document).ready(function () {
  $(".first__slider").slick({
    arrows: false,
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 3000,
    slidesToShow: 1,
  });
});

// window.addEventListener("scroll", () => {
//   if (window.scrollY > 180) {
//     menu.classList.add("header__menu-short");
//     logo.classList.add("header__logo-short");
//   } else {
//     menu.classList.remove("header__menu-short");
//     logo.classList.remove("header__logo-short");
//   }
// });

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("is-active");
  header.classList.toggle("header_mobile");
  menu.classList.toggle("header__menu_mobile");
});
