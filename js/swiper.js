const swiper = new Swiper('.js-testimonials-slider', {
    grabCursor: true,
    spaceBetween: 30,
    pagination: {
        el: '.js-testimonials-pagination',
        clickable: true,

    },
    breakpoints: {
        767: {
            slidesPerView: 2,
            spaceBetween: 20,
        }
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    loop: true,

});