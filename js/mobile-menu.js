(() => {
  const refs = {
    openMenuBtn: document.querySelector('.button-mobile-menu-open'),
    closeMenuBtn: document.querySelector('.button-mobile-menu-close'),
    menu: document.querySelector('.mobile-menu'),
    body: document.querySelector('body'),
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
  }
})();
