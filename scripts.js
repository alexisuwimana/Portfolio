const menuLink = document.querySelectorAll('.mobile_menu > ul > li');
const xrosssMenu = document.getElementsByClassName('xross_menu');
const humbergerMenu = document.getElementsByClassName('menu');
const selectMobileMenu = document.getElementsByClassName('mobile_menu');
const bodySelect = document.querySelector('body');

function toggleMenu() {
  selectMobileMenu[0].classList.toggle('hidden_class');
  if (selectMobileMenu[0].classList.contains('hidden_class')) {
    bodySelect.style.overflow = 'auto';
  } else {
    bodySelect.style.overflow = 'hidden';
  }
}

humbergerMenu[0].addEventListener('click', toggleMenu);
xrosssMenu[0].addEventListener('click', toggleMenu);

menuLink.forEach((link) => {
  link.addEventListener('click', toggleMenu);
});

const content01 = {
  name: 'Multi-Post Stories',
  description: ' A daily selection of privately personalized reads;"no accounts or sign-ups required. has been the industry \'s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
  feature_image: 'images/background/Card_background.png',
  technologies: ['html', 'bootstrap', 'ruby'],
  linkLive: '',
  link2Source:''
 };
const content02 = {
  name: 'Multi-Post Stories',
  description: ' A daily selection of privately personalized reads;"no accounts or sign-ups required. has been the industry \'s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
  feature_image: 'images/background/Card_background.png',
  technologies: ['html', 'bootstrap', 'ruby'],
  linkLive: '',
  link2Source:''
 };
const content03 = {
  name: 'Multi-Post Stories',
  description: ' A daily selection of privately personalized reads;"no accounts or sign-ups required. has been the industry \'s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
  feature_image: 'images/background/Card_background.png',
  technologies: ['html', 'bootstrap', 'ruby'],
  linkLive: '',
  link2Source:''
 };
const content04 = {
  name: 'Multi-Post Stories',
  description: ' A daily selection of privately personalized reads;"no accounts or sign-ups required. has been the industry \'s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
  feature_image: 'images/background/Card_background.png',
  technologies: ['html', 'bootstrap', 'ruby'],
  linkLive: '',
  link2Source:''
 };
const content05 = {
  name: 'Multi-Post Stories',
  description: ' A daily selection of privately personalized reads;"no accounts or sign-ups required. has been the industry \'s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
  feature_image: 'images/background/Card_background.png',
  technologies: ['html', 'bootstrap', 'ruby'],
  linkLive: '',
  link2Source:''
 };
const content06 = {
  name: 'Multi-Post Stories',
  description: ' A daily selection of privately personalized reads;"no accounts or sign-ups required. has been the industry \'s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
  feature_image: 'images/background/Card_background.png',
  technologies: ['html', 'bootstrap', 'ruby'],
  linkLive: '',
  link2Source:''
  };

const allContent = [content01, content02, content03, content04, content05, content06];

function html_worksTemplate(index){
  return ' \
        <div class="card card02"> \
          <h3 class="title subtitle">' + index.name + '</h3> \
          <p class="text text04 items">' + index.description + ' </p> \
          <ul class="languages lang02 items"> \
            <li> <div class="lang_item lang_item06">' + index.technologies[0] +'</div> </li> \
            <li> <div class="lang_item lang_item07">' + index.technologies[1] +'</div> </li>\
            <li> <div class="lang_item lang_item08">' + index.technologies[2] +'</div> </li> \
          </ul> \
          </div> \
        <button class="btn btn02 items">See Project</button>';
}

document.addEventListener('DOMContentLoaded', function article() {
  allContent.forEach((element) => {
    const dinContent = document.createDocumentFragment();
    const newArticle = document.createElement('article');
    newArticle.innerHTML = html_worksTemplate(element);
    dinContent.appendChild(newArticle);
    document.getElementById('work_cards').appendChild(dinContent);
  });
});