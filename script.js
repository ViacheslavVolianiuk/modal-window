'use strict';
const overlay = document.querySelector('.overlay');
const buttons = document.querySelectorAll('.show-modal');
const modal = document.querySelector('.modal');
const closeBtn = document.querySelector('.close-modal');

buttons.forEach(item => {
  item.addEventListener('click', () => {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });
});

closeBtn.addEventListener('click', () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
});

overlay.addEventListener('click', () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
});

document.addEventListener('keyup', e => {
  if (e.key === 'Escape') {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
  }
});
