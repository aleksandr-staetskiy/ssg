$(document).ready(function(){
  $("#promo-slider").owlCarousel({
    items: 1,
    loop: true,
    nav: true,
    dots: false,
    lazyLoad: true,
    autoplay: true,
    autoplayTimeout: 5000,
    navContainerClass: 'promo-nav',
  });
});