'use strict'

// Make navbar tranparent when it is scrolling
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', ( )=>{
    console.log(window.scrollY);
    if(window.scrollY > navbarHeight) {
        navbar.classList.add('navbar--dark');
    }
    else {
        navbar.classList.remove('navbar--dark');
    }
});

// Handle scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event) => {
    const target = event.target;
    const link = target.dataset.link;
    if(link == null) {
        return;
    }

    console.log (event.target.dataset.link);
    const scrollTo = document.querySelector(link);
    scrollTo.scrollIntoView({behavior: "smooth"});
});

// Handle click on "contact me" button on home
const homeContactBtn = document.querySelector('.home__contact');
homeContactBtn.addEventListener('click', () => {

    const scrollTo = document.querySelector('#contact');
    scrollTo.scrollIntoView({behavior: "smooth"});
});

// Show "arros up" button when scrollig down
const arrowUp = document.querySelector('.arrow-up');
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    if(window.scrollY > homeHeight / 2) {
        arrowUp.classList.add('visible');
    }
    else {
        arrowUp.classList.remove('visible');
    }
});

// Handle click on the "arrow up" button (go to the home)
arrowUp.addEventListener('click', () =>{
  
    const scrollTo = document.querySelector('#home');
    scrollTo.scrollIntoView({behavior: "smooth"});
});

