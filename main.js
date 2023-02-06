const buttonOpen = document.querySelector(".button-open");
const buttonClose = document.querySelector(".button-close");
const menu = document.querySelector(".menu");
const links = document.querySelectorAll("a.access");

function showMenu () {
    menu.classList.remove("menu-disabled");
    menu.classList.add("menu-active");
}

function hideMenu () {
    menu.classList.remove("menu-active");
    menu.classList.add("menu-disabled");
}

function showCloseButton () {
    buttonClose.classList.remove("button-hidden");
    buttonClose.classList.add("button-show");
}

function hideCloseButton () {
    buttonClose.classList.remove("button-show");
    buttonClose.classList.add("button-hidden");
}

/*
function blockScroll (event) {
    console.log(event)
    event.preventDefault();
}
*/

buttonOpen.addEventListener('click', ()=> {
    showMenu()
    showCloseButton()
    //document.body.addEventListener('wheel', blockScroll, {passive: false})
})

buttonClose.addEventListener('click', ()=> {
    hideMenu()
    hideCloseButton()
   // document.body.removeEventListener('wheel', blockScroll)
})

links.forEach((link)=> {
    link.addEventListener('click', ()=> {
        hideMenu()
        hideCloseButton()
    })
})
