$('.slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<button class="slider-btn slider-btn--prev"></button>',
    nextArrow: '<button class="slider-btn slider-btn--next"></button>',
    dots: true,
    //centerMode: true,
    //centerPadding: '60px',
    //variableWidth: true,
    //autoplay: true,
    //autoplaySpeed: 2000,
    //fade: true,
    //appendArrows: ,
    //appendDots: ,
    //rtl: true,
    //mobileFirst: true,
    //rows: 2,
    //slidesPerRow: 1,
    responsive: [
        {
            breakpoint: 575,
            settings: {

            }
        },
    ]
});

$(window).on('resize', function (e) {
        // Переменная, по которой узнаем запущен слайдер или нет.
        // Храним её в data
        var init = $(".").data('init-slider');
        // Если мобильный
        if (window.innerWidth < 991) {
            // Если слайдер не запущен
            if (init != 1) {
                // Запускаем слайдер и записываем в data init-slider = 1
                $('.').slick({
                    slidesToShow: 1,
                    arrows: false,
                    dots: true,
                    variableWidth: true,
                    responsive: [
                        {
                            breakpoint: 575,
                            settings: {
                                centerMode: true,
                            },
                        }
                    ]
                }).data({ 'init-slider': 1 });
            }
        }
        // Если не мобайл
        else {
            // Если слайдер запущен
            if (init == 1) {
                // Разрушаем слайдер и записываем в data init-slider = 0
                $('.').slick('unslick').data({ 'init-slider': 0 });
            }
        }
}).trigger('resize');

// swiper
const newsSlider = new Swiper('.news__slider', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,
    speed: 1000,
    autoplay: {
        delay: 3000,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.__slider-btn--prev',
        prevEl: '.__slider-btn--next',
    },
    breakpoints: {
        576: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 4,
        }
    }
});

/* icons-slider */
const iconsSlider = new Swiper('.icons-slider', {
    slidesPerView: 'auto',
    freeMode: true,
    freeModeMomentum: true,
    //spaceBetween: 20,
});