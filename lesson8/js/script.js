// jQuery(function($){})

window.addEventListener('DOMContentLoaded', () => {
  const headerBtn = document.querySelector('.header-button');
  headerBtn.addEventListener('click', () => {
    document.body.classList.toggle('open');
  });
});