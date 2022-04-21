/*=============== Show Menu ===============*/
const navMenu = document.getElementById('nav-menu'),
  navToggle = document.getElementById('nav-toggle'),
  navClose = document.getElementById('nav-close');

if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
  });
}
/*=============== Close Menu ===============*/
if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
}

/*=============== Navbar ===============*/
const navLinks = document.querySelectorAll('.nav-link');

function linkAction() {
  const navMenu = document.getElementById('nav-menu');
  navMenu.classList.remove('show-menu');
}
navLinks.forEach((n) => n.addEventListener('click', linkAction));

/*=============== Navbar Shadow ===============*/
function scrollHeader() {
  const header = document.getElementById('header');
  if (this.scrollY >= 80) header.classList.add('scroll-header');
  else header.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader);

/*=============== Theme Customize ===============*/
const theme = document.querySelector('#theme-button');
const themeModal = document.querySelector('.customize-theme');
const fontSizes = document.querySelectorAll('.choose-size span');
const colorPalette = document.querySelectorAll('.choose-color span');
const Bg1 = document.querySelector('.bg-1');
const Bg2 = document.querySelector('.bg-2');
const Bg3 = document.querySelector('.bg-3');
var root = document.querySelector(':root');

// Show/Close Modal
const openThemeModal = () => {
  themeModal.style.display = 'grid';
};
const closeThemeModal = (e) => {
  if (e.target.classList.contains('customize-theme')) {
    themeModal.style.display = 'none';
  }
};
theme.addEventListener('click', openThemeModal);
themeModal.addEventListener('click', closeThemeModal);

// Choose Fonts
const removeSizeSelector = () => {
  fontSizes.forEach((size) => {
    size.classList.remove('active');
  });
};

fontSizes.forEach((size) => {
  size.addEventListener('click', () => {
    removeSizeSelector();
    let fontSizes;
    size.classList.toggle('active');
    if (size.classList.contains('font-size-1')) {
      fontSizes = '12px';
    } else if (size.classList.contains('font-size-2')) {
      fontSizes = '14px';
    } else if (size.classList.contains('font-size-3')) {
      fontSizes = '16px';
    } else if (size.classList.contains('font-size-4')) {
      fontSizes = '18px';
    }
    // ========================
    document.querySelector('html').style.fontSize = fontSizes;
  });
});

// Choose primary Colors
const changeActiveColorClass = () => {
  colorPalette.forEach((colorPicker) => {
    colorPicker.classList.remove('active');
  });
};

colorPalette.forEach((color) => {
  color.addEventListener('click', () => {
    let primaryHue;
    changeActiveColorClass();
    if (color.classList.contains('color-1')) {
      primaryHue = 252;
    } else if (color.classList.contains('color-2')) {
      primaryHue = 52;
    } else if (color.classList.contains('color-3')) {
      primaryHue = 352;
    } else if (color.classList.contains('color-4')) {
      primaryHue = 152;
    } else if (color.classList.contains('color-5')) {
      primaryHue = 202;
    }
    color.classList.add('active');
    root.style.setProperty('--primary-color-hue', primaryHue);
  });
});

// Choose Background
let lightColorLightnes;
let whitetColorLightnes;
let darkColorLightnes;

// =================
const changeBG = () => {
  root.style.setProperty('--light-color-lightnes', lightColorLightnes);
  root.style.setProperty('--white-color-lightnes', whitetColorLightnes);
  root.style.setProperty('--dark-color-lightnes', darktColorLightnes);
};
Bg1.addEventListener('click', () => {
  Bg1.classList.add('active');
  Bg2.classList.remove('active');
  Bg3.classList.remove('active');
  window.location.reload();
});
Bg2.addEventListener('click', () => {
  darkColorLightnes = '95%';
  whitetColorLightnes = '20%';
  lightColorLightnes = '15%';

  // add active
  Bg2.classList.add('active');
  Bg1.classList.remove('active');
  Bg3.classList.remove('active');
  changeBG();
});
Bg3.addEventListener('click', () => {
  darkColorLightnes = '95%';
  whitetColorLightnes = '10%';
  lightColorLightnes = '0%';

  // add active
  Bg3.classList.add('active');
  Bg2.classList.remove('active');
  Bg1.classList.remove('active');
  changeBG();
});

/*=============== Testimonial Swiper ===============*/
var swiper = new Swiper('.testimonial-wrapper', {
  loop: 'true',
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
