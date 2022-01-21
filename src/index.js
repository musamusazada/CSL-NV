"use strict";

let navOpen;
let navClose;
let mobileNav;
window.onload = () => {
  AOS.init({
    disable: "mobile",
  });
  navOpen = document.querySelector(".openBTN");
  navClose = document.querySelector(".closeBTN");
  mobileNav = document.querySelector(".burger-menu");

  navOpen.addEventListener("click", function (e) {
    mobileNav.style.transform = "translateX(0)";
  });
  navClose.addEventListener("click", function (e) {
    mobileNav.style.transform = "translateX(100%)";
  });
};
