'use strict';

// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');

const section1 = document.querySelector('#section--1');
const header = document.querySelector('.header');
const allSections = document.querySelectorAll('section');

// Open window
const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

// close window
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// Open modal on click
btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

// close modal on click
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// Cookie implementation
const allButtons = document.getElementsByTagName('button');
const message = document.createElement('div');
message.classList.add('cookie-message');
message.innerHTML =
  'We use cookies for improved analytics. <button class="btn btn-close-cookie"> Got it!</button>';

header.append(message);

document
  .querySelector('.btn-close-cookie')
  .addEventListener('click', function () {
    message.remove();
  });



// Page navigation

document.querySelector('.nav__links').addEventListener('click', function(e){
  console.log(e.target)
  if(e.target.classList.contains('nav__link')){
    e.preventDefault()
    const id = e.target.getAttribute('href');
    console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });

  }
})
