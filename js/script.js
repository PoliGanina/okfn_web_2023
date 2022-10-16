"use strict";

const menu = document.querySelector(".header__menu"),
  logo = document.querySelector(".header__logo"),
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

// $(window).scroll(function () {
//   if ($(this).scrollTop() > 900) {
//     $(".scrollup").fadeIn();
//   } else {
//     $(".scrollup").fadeOut();
//   }
// });

window.addEventListener("scroll", () => {
  if (window.scrollY > 180) {
    menu.classList.add("header__menu-short");
    logo.classList.add("header__logo-short");
  } else {
    menu.classList.remove("header__menu-short");
    logo.classList.remove("header__logo-short");
  }
});

// hamburger.addEventListener("click", () => {
//   hamburger.classList.toggle("is-active");
//   navList.classList.toggle("show");
//   menu.classList.toggle("header__menu-hamburger");
// });
