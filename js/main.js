$(document).ready(function(){
    // Slick Settings
    $('#SDEZCAROU').slick({
        adaptiveHeight: true,
        arrows: true,
        autoplay: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: false,
        dots: false,
        speed: 110,
        swipe: false,
        lazyLoad: true,


        prevArrow: $(".SDEZBTN1"),
        nextArrow: $(".SDEZBTN2"),
    });
});