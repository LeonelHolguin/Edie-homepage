const buttonOpen = document.querySelector(".button-open");
const buttonClose = document.querySelector(".button-close");
const menu = document.querySelector(".menu");


buttonOpen.addEventListener('click', ()=> {
    menu.classList.remove("disabled");
    menu.classList.add("active");
    buttonClose.classList.remove("hidden");
    buttonClose.classList.add("show");
})

buttonClose.addEventListener('click', ()=> {
    menu.classList.remove("active");
    menu.classList.add("disabled");
    buttonClose.classList.remove("show");
    buttonClose.classList.add("hidden");
})