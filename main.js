const menuBtn = document.querySelector('.mob-menu')

const menu = document.querySelector('nav')
const body = document.querySelector('body')
const menuOpen = document.querySelector('.menu-open')
const menuClose = document.querySelector('.times')
const triangle = document.querySelector('.triangle')

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('active')
    triangle.classList.toggle('active')
    menuOpen.classList.toggle('active')
    menuClose.classList.toggle('active')
})

