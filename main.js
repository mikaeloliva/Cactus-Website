

const navMenu = document.getElementById('nav-menu'),
navToggle = document.getElementById('nav-toggle'),
navClose = document.getElementById('nav-close')

/* Menu show */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/* Menu hidden */
if(navClose){
    navClose.addEventListener('click', () =>{
    navMenu.classList.remove('show-menu')
    })
}



const navLink = document.querySelectorAll('nav__link')

const linkAction = () => {
    const navMenu = document.getElementById ('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))



const blurHeader = () => {
    const header = document.getElementById('header')
    //Add a class if the bottom offset is greater than 50 of the viewport
    this.scrollY >=50 ? header.classList.add('blur-header')
    :header.classList.remove('blur-header')


}
window.addEventListener('scroll', blurHeader)
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')
    //when the scroll is higher than 350 viewpoint height,add the
    this.scroll >=350? scrollUp.classList.add('show-scroll')
                    : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scrollup')

const sections = document.querySelectorAll('section[id]')

const scrollActive= ()=>{
    const scrollDown = window.scrollY
    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
    if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionClass.classList.add('active-link')
        }else{
            sectionClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)


const sr = scrollReveal({
    origin : 'top',
    distance : '80px',
    duration : 2500,
    delay : 300,
    // reset : true ,//Animations repeat

})
sr.reveal('.home__img, .newdata .cardimg , .contact__content .footer')
sr.reveal('.home__data, .carelist, .contact__img',{delay:500})
sr.reveal('.new__card',{delay:500, interval: 100})
sr.reveal('.shop__card',{interval: 100})
