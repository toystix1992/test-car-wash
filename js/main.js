$(document).ready(function(){
    $('.main-slider').slick({
        dots: true,
        adaptiveHeight: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        easing: "ease",
        autoplay: true,
        autoplaySpeed:3000,
        pauseOnHover:true,
        pauseOnFocus:true,
        pauseOnDotsHover:true,
        centerMode: false,
    });
});

$(document).ready(function(){
    $('.ofices-slider').slick({
        dots: false,
        adaptiveHeight: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        speed: 500,
        easing: "ease",
        centerMode: true,
    });
});

