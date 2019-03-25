class MobileMenu {
  constructor() {
    this.mobileMenuButton = document.querySelector('.primary-nav__mobile-menu');
    this.mobileMenuContent = document.querySelector('.primary-nav__menu-content');
    this.events();
  }

  events() {
    this.mobileMenuButton.addEventListener('click', this.toogleTheMenu.bind(this));
  }

  toogleTheMenu() {
    this.mobileMenuContent.classList.toggle('primary-nav__menu-content--is-visible');
  }
}

const mobileMenu = new MobileMenu;

class Modal {
  constructor() {
    this.portfolioLink = document.querySelectorAll('.portfolio__link');
    this.closeButton = document.querySelectorAll('.modal__close');
    this.contact = document.querySelector('#kontaktLink');
    this.events();
  }

  events() {
    for(let i = 0; i < this.portfolioLink.length; i++) {
      this.portfolioLink[i].addEventListener('click', this.openModal);
    }
    for(let i = 0; i < this.closeButton.length; i++) {
      this.closeButton[i].addEventListener('click', this.closeModal);
    }
    this.contact.addEventListener('click', this.openModal);
  }
  
  openModal(event) {
    event.preventDefault();
    const modalId = `#${this.dataset.modalId}`;
    const modalContent = document.querySelector(modalId);
    modalContent.classList.add('modal--is-visible');
  }

  closeModal() {
    this.parentElement.classList.remove('modal--is-visible');
  }
}

const modal = new Modal;

class Slider {
  constructor(id) {
    this.modalId = document.querySelector(id);
    this.previousButton = document.querySelector(`#${this.modalId.id} .previousSlide`);
    this.nextButton = document.querySelector(`#${this.modalId.id} .nextSlide`);
    this.slides = document.querySelectorAll(`#${this.modalId.id} .slider__img`);
    this.activeSlide = 0;
    this.events();
  }

  events() {
    this.previousButton.addEventListener('click', this.showPreviousSlide.bind(this));
    this.nextButton.addEventListener('click', this.showNextSlide.bind(this));
  }

  showPreviousSlide() {
    this.slides[this.activeSlide].classList.remove('slider__img--is-visible');
    this.activeSlide--;
    if (this.activeSlide < 0) {
      this.activeSlide = this.slides.length - 1;
    } 
    this.slides[this.activeSlide].classList.add('slider__img--is-visible');
    return this.activeSlide;
  }

  showNextSlide() {
    this.slides[this.activeSlide].classList.remove('slider__img--is-visible');
    this.activeSlide++;
    if (this.activeSlide > this.slides.length - 1) {
      this.activeSlide = 0;
    } 
    this.slides[this.activeSlide].classList.add('slider__img--is-visible');
    return this.activeSlide;
  }

}

// Work only when main page
if (document.URL === 'http://programistka.it/') {
  // Argument = data-modal-id in html portfolio-link
  new Slider('#kalendarz');
  new Slider('#mistrzostwa');
  new Slider('#angielski');
  new Slider('#licznik');
  new Slider('#programista');
  new Slider('#blog');
  new Slider('#spoj');
}