//Image Slider Start
const slider = () => {
  const slideShow = document.querySelectorAll(".slider-img");

  const delay = 7000;
  var count = 0;

  slideShow[count].classList.toggle("active");
  slideShow[count].style.opacity = "1";

  const nextImg = () => {
    slideShow[count].style.opacity = "0";
    slideShow[count].classList.toggle("active");

    count = (count + 1) % slideShow.length;

    slideShow[count].style.opacity = "1";
    slideShow[count].classList.toggle("active");
  };

  setInterval(nextImg, delay);
};
slider();
//Image Slider End

//Nav Scroll Effect Start
const navScrollEffect = () => {
  const scrollNav = document.querySelector(".nav-bar-scroll");
  const navbar = document.querySelector(".nav-bar");

  window.addEventListener("scroll", () => {
    const scrollHeight = window.pageYOffset;
    const navHeight = navbar.getBoundingClientRect().height;
    if (scrollHeight > navHeight) {
      scrollNav.classList.add("scroll-nav");
    } else {
      scrollNav.classList.remove("scroll-nav");
    }
  });
};
navScrollEffect();
//Nav Scroll Effect End

//Links Menu button Start
const NavMenu = () => {
  const Links = document.querySelector(".nav-links ul");
  Links.classList.toggle("active");
};
//Links Menu button End
