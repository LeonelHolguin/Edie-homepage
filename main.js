const buttonOpen = document.querySelector(".button-open");
const buttonClose = document.querySelector(".button-close");
const menu = document.querySelector(".menu");


buttonOpen.addEventListener('click', ()=> {
    menu.classList.remove("menu-disabled");
    menu.classList.add("menu-active");
    buttonClose.classList.remove("button-hidden");
    buttonClose.classList.add("button-show");
})

buttonClose.addEventListener('click', ()=> {
    menu.classList.remove("menu-active");
    menu.classList.add("menu-disabled");
    buttonClose.classList.remove("button-show");
    buttonClose.classList.add("button-hidden");
})