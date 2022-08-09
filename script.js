window.addEventListener('scroll', onScroll)

onScroll()
function onScroll() {
    showNavOnScroll()
    showBackToTopButtonOnScroll()
}
function showNavOnScroll(){
    if (scrollY > 0) {
        navi.classList.add('scroll')
    } else {
        navi.classList.remove('scroll')
    }
}
function showBackToTopButtonOnScroll(){
    if (scrollY > 550) {
        backToTopButton.classList.add('show')
    } else {
        backToTopButton.classList.remove('show')
    }
}

function openMenu() {
    document.body.classList.add('menu-expanded')
}

function closeMenu() {
    document.body.classList.remove('menu-expanded')
}

ScrollReveal({
    origin: 'botton',
    distace: '30px',
    duration: 700,

})
    .reveal(`
#home, 
#home img, 
#home .stats, 
#services,
#services header,
#about,
#about header,
#about .content,
#contact,
#footer`)