$(document).ready(function() {

    //Sticky Menu
    $(window).on('scroll', function() {
        var scroll = $(window).scrollTop();
        if (scroll < 1) {
            $('.sticky').removeClass('scroll-header');
        } else {
            $('.sticky').addClass('scroll-header');
        }
    });

    //mean menu 
    $('#mobile-menu-active').meanmenu({
        meanScreenWidth: "991",
        meanMenuContainer: '.mobile-menu',

    });



    //Counter
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    //Testimonial Slick Slider
    $('.testimonial-active').slick({
        infinite: true,
        slidesToShow: 1,
        prevArrow: '<button type ="button" class = "slick-prev"> <i class="fa fa-angle-right"></i> </button>',
        nextArrow: '<button type ="button" class = "slick-next"> <i class="fa fa-angle-left"></i> </button>',
        slidesToScroll: 1

    });

    //Brand Slick Slider
    $('.brand-active').slick({
        infinite: true,
        arrows: false,
        dots: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }

        ]

    });



    ////Isotope
    var $grid = $('.gallery').isotope({
        // options
    });


    // var map = new GMaps({
    map = new GMaps({
        div: '#map',
        lat: 24.8949,
        lng: 91.8687
    });

    map.addMarker({
        lat: 24.8949,
        lng: 91.8687,
        title: 'Bangladesh',
        click: function(e) {
            alert('You clicked in this marker');
        }
    });

    //Smooth Scroll
    $('.main-menu ul li a').smoothScroll();

    //Scroll Up Acive
    $.scrollUp({
        scrollName: 'scrollUp',
        topDistance: '300',
        topSpeed: 300,
        animation: 'fade',
        animationInSpeed: 200,
        animationOutSpeed: 200,
        scrollText: '<i class="fa fa-angle-up"></i>',
        activeOverlay: false,
    });

});