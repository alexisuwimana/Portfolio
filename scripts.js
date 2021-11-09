const menuLink = document.querySelectorAll('.mobile_menu > ul > li');
const xrosssMenu = document.getElementsByClassName('xross_menu');
const humbergerMenu = document.getElementsByClassName('menu');
const selectMobileMenu = document.getElementsByClassName('mobile_menu');

function toggleMenu (){
    selectMobileMenu[0].classList.toggle('hidden_class');
}