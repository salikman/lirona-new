"use strict";

/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}
  
/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.body.style.backgroundColor = "white";
}
// header > lang
function myFunction() {
    document.getElementById("mylang").classList.toggle("show");
}
function contactsBtn() {
    document.getElementById("mycontact").classList.toggle("show");
}
// pade-dor > lang



(function($) {
    window.onclick = function(event) {
        if (!event.target.matches('.contactbtn')) {
            var dropdowns = document.getElementsByClassName("contact-content");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
    }
    $('button.page-content__btn').on('click', function() {
        $('.page-content__text').toggleClass('open');
    });
    $('h2').addClass('special-text');
    // wow animate
    new WOW().init();
    // header > collapse
    $('#header .btn-collapse').on('click', function() {
        $('#header').toggleClass('open');
        $('.txt-menu').toggleClass('txt-menu--left');
    });
    ///////////////////////////
    // header > Mobile dropdown
    $('.has-dropdown a').on('click', function() {
        $(this).parent().toggleClass('open-drop');
    });
    ///////////////////////////
    // header > On Scroll
    $(window).on('scroll resize load', function() {
        var wScroll = $(this).scrollTop();

        if ( $(this).width() < 481 || wScroll > 1) {
            $('.logo img').addClass('img-size--small')
        } else {
            $('.logo img').removeClass('img-size--small')
        }
        
        // Fixed nav
        wScroll > 1 ? $('#header').addClass('bg-white') : $('#header').removeClass('bg-white');

    });
    ///////////////////////////
    // reloader
    $(window).on('load', function() {
        $("#preloader").delay(600).fadeOut();
    });
    ///////////////////////////
    // logo animate
    $('.img-size').shiningImage({
        speed : 100,
        delay : 3000
    });
    // slider home
    $('.slider-list').slick({
        dots: false,
        // dotsClass: 'slider-dots',
        prevArrow: "<button class='slider-arrow__prev'><svg viewBox='0 0 41 82' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M40 1L1 41L40 81' stroke='#E3E3E3' stroke-width='2' stroke-linejoin='round'/></svg></button>",
        nextArrow: "<button class='slider-arrow__next'><svg viewBox='0 0 42 82' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M1 1L41 41L1 81' stroke='#E3E3E3' stroke-width='2' stroke-linejoin='round'/></svg></button>",
        draggable: true,
        autoplay: true,
        autoplaySpeed: 10000,
        fade: true,
        speed: 2000,
        infinite: true,
        cssEase: 'ease',
        touchThreshold: 100,

        responsive: [
            {
                breakpoint: 561,
                settings: {
                    arrows: false
                }
            }
        ]
    });
    // page-dor > slider
    $(".header-slider").slick({
        prevArrow: "<button class='slider-arrow__prev'><svg viewBox='0 0 41 82' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M40 1L1 41L40 81' stroke='#E3E3E3' stroke-width='2' stroke-linejoin='round'/></svg></button>",
        nextArrow: "<button class='slider-arrow__next'><svg viewBox='0 0 42 82' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M1 1L41 41L1 81' stroke='#E3E3E3' stroke-width='2' stroke-linejoin='round'/></svg></button>",
        dots: true,
        dotsClass: 'dots dots-b',
        autoplay: true,
        autoplaySpeed: 10000,
        fade: true,
        speed: 2000,
    });
    // page-dor > slider
    $('.gallery-dor').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 9999,
                settings: "unslick"
            },
            {
                breakpoint: 591,
                settings: {
                        arrows: false,
                        dots: true,
                        dotsClass: 'dots dots-offset',
                        variableWidth: true,
                    }
            }
        ]
    });
    $('.js-content-img').slick({
        arrows: false,
        dots: true,
        dotsClass: 'dots dots-offset',
        infinite: false
    });
})(jQuery);