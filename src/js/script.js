"use strict";

const header = document.querySelector(".header"),
  menu = document.querySelector(".header__menu"),
  hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("is-active");
  // header.classList.toggle("header_mobile");
  // menu.classList.toggle("header__menu_mobile");
});
