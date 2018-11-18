//****Created by Zolotukhin 17.11.18****

$(document).ready(function () {

    // Slider Options
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
            return '<a href="javascript:void(0)"><img src="' + thumbnail + '"></a>';
        },
    });

    // Arrows Thumbnails Trick
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