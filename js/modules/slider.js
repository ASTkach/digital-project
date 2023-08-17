const slider = () => {
    var sliderPromoText = new Swiper('.slider--promo-text', {
        slidesPerView: 1,
        spaceBetween: 40,
        grabCursor: true,
        speed: 600,
        loop: true,
        loopedSlides: 1,

        navigation: {
            nextEl: '.slider-button-next',
            prevEl: '.slider-button-prev',
        },

        pagination: {
            el: '.slider-pagination',
            type: 'custom',
            renderCustom: function (swiper, current, total) {
                return (
                    `<span>${'0' + current}</span>` +
                    '<span class="slider-pagination-slash"></span>' +
                    `<span>${'0' + total}</span>`
                );
            },
        },
    });

    var sliderPromoImage = new Swiper('.slider--promo-iamge', {
        slidesPerView: 1,
        spaceBetween: 40,
        grabCursor: true,
        speed: 600,
        loop: true,
        loopedSlides: 1,
    });

    sliderPromoText.controller.control = sliderPromoImage;
    sliderPromoImage.controller.control = sliderPromoText;
};

export default slider;
