window.addEventListener('scroll', onScroll)

onScroll()
function onScroll() {
    showNavOnScroll()
    showBackToTopButtonOnScroll()

    activateMenuAtCurrentSection(home)
    activateMenuAtCurrentSection(services)
    activateMenuAtCurrentSection(about)
    activateMenuAtCurrentSection(contact)



}

function activateMenuAtCurrentSection(section) {
    //linha alvo
    const targetLine = scrollY + innerHeight / 2

    //verificar se a secao passou da linha
    //quais dados vou precisar?
    // o topo da secao
    const sectionTop = section.offsetTop
    //a altura da secao
    const sectionHeight = section.offsetHeight

    // o topo da secao chegou ou ultrapassoi a linha alvo
    const sectionTopReachOrPassedTargetline = targetLine >= sectionTop


    //verificar se a base esta abaixo dalinha alvo
    //quais dados vou precisar?

    // a secao termina onde?
    const sectionEndsAt = sectionTop + sectionHeight
    //final da secao passou da linha alvo?
    const sectionEndPassedTargetline = sectionEndsAt <= targetLine

    //limites da secao
    const sectionBoundaries = sectionTopReachOrPassedTargetline && !sectionEndPassedTargetline

    const sectionId = section.getAttribute('id')
    const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

    menuElement.classList.remove('active')
    if (sectionBoundaries) {
        menuElement.classList.add('active')
    }

}
function showNavOnScroll() {
    if (scrollY > 0) {
        navi.classList.add('scroll')
    } else {
        navi.classList.remove('scroll')
    }
}
function showBackToTopButtonOnScroll() {
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