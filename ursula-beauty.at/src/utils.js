export const animation = () => {
  if (typeof window !== "undefined") {
    window.WOW = require("wowjs");
  }
  new WOW.WOW().init();
};
export const sidebarOnclick = () => {
  const body = document.querySelector("body");
  body.classList.toggle("side-content-visible");
};

const stickyNav_ = () => {
  let offset = window.scrollY;
  const stickys = document.querySelectorAll(".main-header");
  for (let i = 0; i < stickys.length; i++) {
    const sticky = stickys[i];
    if (sticky) {
      if (offset > 10) {
        sticky.classList.add("fixed-header");
      } else {
        sticky.classList.remove("fixed-header");
      }
    }
  }
};

export const stickyNav = (stickyClass) =>
  window.addEventListener("scroll", stickyNav_);

// Scroll top
export const scrollTopFun = () => {
  let scrollUp = document.getElementById("scroll-top"),
    lastScrollTop = 0;

  window.addEventListener("scroll", () => {
    let st = window.scrollY;
    if (st > 110) {
      scrollUp.classList.add("d-block");
    } else {
      scrollUp.classList.remove("d-block");
    }
  });
};

export const activeSkillProgress = () => {
  const triggerBottom = (window.innerHeight / 5) * 5;
  const sillbars = document.querySelectorAll(".skillbar");
  sillbars.forEach((skill) => {
    const skillTop = skill.getBoundingClientRect().top;
    let percent = skill.getAttribute("data-percent"),
      barContainer = skill.getElementsByClassName("skillbar_container")[0],
      bar = skill.getElementsByClassName("skillbar-bar")[0],
      skillBarText = skill.getElementsByClassName("skill-bar-percent")[0];
    skillBarText.innerHTML = `${percent}%`;
    if (skillTop < triggerBottom) {
      bar.style.width = `${percent}%`;
      bar.style.backgroundColor = `#d6b981`;
      barContainer.classList.add("open");
    } else {
      bar.style.width = `0%`;
      barContainer.classList.remove("open");
      bar.style.backgroundColor = ``;
    }
  });
};

//  get pagination
export const getPagination = (totalNumber, sort) => {
  let arr = new Array(Math.ceil(totalNumber / sort))
    .fill()
    .map((_, idx) => idx + 1);
  return arr;
};

// change pagination and update pagination and content
export const pagination = (listClass, sort, active) => {
  let list = document.querySelectorAll(listClass);
  for (let i = 0; i < list.length; i++) {
    const element = list[i];
    if (active === 1) {
      if (i < sort) {
        element.classList.remove("d-none");
      } else {
        element.classList.add("d-none");
      }
    } else {
      if (i >= (active - 1) * sort && i < active * sort) {
        element.classList.remove("d-none");
      } else {
        element.classList.add("d-none");
      }
    }
  }
};
