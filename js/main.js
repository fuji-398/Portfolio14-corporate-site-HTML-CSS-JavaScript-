"use strict";

// hambuger menu

const menuBox = document.querySelector(".aside-hambuger-menu-box");
const hambugerBtn = document.querySelector(".toggle-btn");
const blind = document.querySelector(".blind");
const aside = document.querySelector(".aside");

hambugerBtn.onclick = () => {
    menuBox.classList.toggle("open");
};
blind.onclick = () => {
    menuBox.classList.toggle("open");
};
aside.onclick = () => {
    menuBox.classList.toggle("open");
};

// toppage button
const topPageBtn = document.querySelector(".toppage-btn");
function getScrollTop() {
    return window.scrollY || document.documentElement.scrollTop;
}

addEventListener("scroll", () => {
    requestAnimationFrame(() => {
        const scrollTop = getScrollTop();
        topPageBtn.classList.toggle("scrolled", scrollTop >= 700);
    });
});

topPageBtn.addEventListener("click", function (event) {
    event.preventDefault();

    const scrollToTop = function () {
        const currentScrollTop = getScrollTop();

        if (currentScrollTop > 0) {
            requestAnimationFrame(scrollToTop);
            scrollTo(0, currentScrollTop - currentScrollTop / 5);
        }
    };

    scrollToTop();
});
