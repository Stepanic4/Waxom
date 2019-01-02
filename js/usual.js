//****Created by Zolotukhin 2.01.19****

$(document).ready(function () {


    $(".Modern-Slider").slick({
        autoplay: false,
        autoplaySpeed: 7000,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: false,
        dots: true,
        pauseOnDotsHover: true,
        cssEase: 'linear',
        fade: true,
        draggable: false,
        prevArrow: '<button class="PrevArrow"> <span class="Thumbnail"></span></button>',
        nextArrow: '<button class="NextArrow"> <span class="Thumbnail"></span></button>',
        // Custom Dots With Thumbnails Tool Tip
        customPaging: function (slider, i) {
            const thumbnail = $(slider.$slides[i]).data('thumbnail');
            return '<a href="#"><img src="' + thumbnail + '"></a>';
        },
    });


    const PrevThumbinalFirst = $(".Modern-Slider .item:last-child").children(".img-fill").children("img").attr("src");
    $(".Modern-Slider .PrevArrow .Thumbnail").css({"background-image": "url(" + PrevThumbinalFirst + ")"});
    const NextThumbinalFirst = $(".Modern-Slider .item:first-child").next().children(".img-fill").children("img").attr("src");
    $(".Modern-Slider .NextArrow .Thumbnail").css({"background-image": "url(" + NextThumbinalFirst + ")"});
    $(".Modern-Slider").on('afterChange', function (event, slick, currentSlide) {
        const PrevThumbinal = $(".Modern-Slider .item.slick-active").prev(".item").children(".img-fill").children("img").attr("src");
        $(".Modern-Slider .PrevArrow .Thumbnail").css({"background-image": "url(" + PrevThumbinal + ")"});
        const NextThumbinal = $(".Modern-Slider .item.slick-active").next(".item").children(".img-fill").children("img").attr("src");
        $(".Modern-Slider .NextArrow .Thumbnail").css({"background-image": "url(" + NextThumbinal + ")"})
    });

});

// *************************burger****************
$(".menu-collapsed").click(function () {
    $(this).toggleClass("menu-expanded");
});

$(function () {
    $('a[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return true;
            }
        }
    });
});

$(function () {
    $(window).on('scroll', function () {
        if ($(window).scrollTop() >= 30) {
            $('.scrollbtn').fadeIn('slow');
        } else {
            $('.scrollbtn').fadeOut('slow');
        }
    });
});

$(function () {
    $(window).on('scroll', function () {
        if ($(window).scrollTop() >= 100) {
            $('.nav-fixed').fadeIn('slow');
        } else {
            $('.nav-fixed').fadeOut('fast');
        }
    });
});

$(function () {
    $(window).on('scroll', function () {
        if ($(window).scrollTop() >= 10) {
            $('.nav').fadeOut('fast');
        } else {
            $('.nav').fadeIn('fast');
        }
    });
});
