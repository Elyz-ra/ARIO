

// Show Navbar

const nav = document.querySelector('.nav');
const toggle = document.querySelector('.nav-toggle');

toggle.onclick = function(){
    nav.classList.toggle('show-menu');
}

// Remove Menu Bar
const navLink = document.querySelectorAll('.nav-link');
function linkAction(){
    const navMenu = document.querySelector('.nav');
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction));

// Change Active Link

const linkColor = document.querySelectorAll('.nav-item');
function colorLink(){
    linkColor.forEach(L => L.classList.remove('active-link'))
    this.classList.add('active-link')
}
linkColor.forEach(L => L.addEventListener('click', colorLink));


// Offer Collection Section
const secondsContainer = document.querySelector('#seconds')
const minutesContainer = document.querySelector('#minutes')
const hoursContainer = document.querySelector('#hours')
const daysContainer = document.querySelector('#days')
const loadingContainer = document.querySelector('#loading')
const countdownContainer = document.querySelector('#countdoun')

const evenData = new Date('July 5 2022 00:00:00')

const updateCountdown = () =>{
    const currentTime = new Date();

    const difference = evenData - currentTime;

    const days = Math.floor(difference / 1000 / 60 / 60 / 24);
    const hours = Math.floor(difference / 1000 / 60 / 60 ) % 24;
    const minutes = Math.floor(difference / 1000 / 60) % 60;
    const seconds = Math.floor(difference / 1000) % 60;

    secondsContainer.textContent = seconds < 10 ? '0' + seconds : seconds
    minutesContainer.textContent = minutes < 10 ? '0' + minutes : minutes
    hoursContainer.textContent = hours < 10 ? '0' + hours : hours
    daysContainer.textContent = days < 10 ? '0' + days : days
}

setTimeout( () =>{
    loadingContainer.remove()
    countdownContainer.style.display = 'flex';
}, 1000)

setInterval(updateCountdown, 1000)


// Swiper Home Section

var swiper = new Swiper("#home", {
    loop: true,
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    }
    });

// Swiper Offer Section
var swiper = new Swiper("#offer", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        680: {
        slidesPerView: 2,
        spaceBetween: 20,
        },
        860: {
        slidesPerView: 4,
        spaceBetween: 40,
        },
        960: {
        slidesPerView: 4,
        spaceBetween: 40,
        },
    },
    });

// Swiper Inspiration Section
var swiper = new Swiper("#inspiration-img", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    spaceBetween: 32,
    coverflowEffect: {
        rotate: 0,
    },
    autoplay:{
        delay:2500,
        disableOnInteraction:false,
    },
    pagination: {
        el: ".swiper-pagination",
    },
});