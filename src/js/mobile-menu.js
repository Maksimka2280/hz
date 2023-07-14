const mobileMenucloseButton = document.querySelector('.main-header__close-menu');
const mobileMenu = document.querySelector('.main-header__list') ;
 const mobileMenuButton = document.querySelector('.main-header__button');

    
mobileMenucloseButton.addEventListener('click',() => {
    mobileMenu.classList.remove('active');
});




mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.add('active');
});


