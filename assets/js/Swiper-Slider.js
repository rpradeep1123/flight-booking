$(document).ready(function () {
    var mySwiper = new Swiper ('.swiper-container', {
       direction: 'horizontal',
	   autoHeight:true,
        loop: false,
        mousewheel: {
            enabled: true,
        },
        slidesPerView: 'auto',
        freeMode: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    })   
});