/*=============== Testimonial Swiper ===============*/
var swiper = new Swiper('.testimonial-wrapper', {
  loop: 'true',
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
