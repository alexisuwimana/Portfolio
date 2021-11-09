const menuLink = document.querySelectorAll('.mobile_menu > ul > li');
const xrosssMenu = document.getElementsByClassName('xross_menu');
const humbergerMenu = document.getElementsByClassName('menu');
const selectMobileMenu = document.getElementsByClassName('mobile_menu');

function toggleMenu (){
    selectMobileMenu[0].classList.toggle('hidden_class');
}

humbergerMenu[0].addEventListener('click',toggleMenu);
xrosssMenu[0].addEventListener('click', toggleMenu);

menuLink.forEach(link => {
    link.addEventListener('click',toggleMenu);
});
