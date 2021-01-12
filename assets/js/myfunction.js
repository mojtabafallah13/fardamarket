function makeTimer( d1, d2,id) {
 //		var endTime = new Date("29 April 2018 9:56:00 GMT+01:00");
    d1 = d1.substring(0,d1.length-7);
    d2 = d2.substring(0,d2.length-7);

    var endTime = new Date(d2);

    endTime = (Date.parse(endTime) / 1000);

    var now = new Date();

    now = (Date.parse(now) / 1000);

    var timeLeft = endTime - now;

    var days = Math.floor(timeLeft / 86400);

    var hours = Math.floor((timeLeft - (days * 86400)) / 3600);

    var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600)) / 60);
    var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
    console.log(seconds);
    if (hours < "10") {
        hours = "0" + hours;
    }
    if (minutes < "10") {
        minutes = "0" + minutes;
    }
    if (seconds < "10") {
        seconds = "0" + seconds;
    }

    $(".days-"+id).html(days + ':' + hours + ':' + minutes + ':' + seconds);
}




function maketimer2(d1,d2,id)
{
    makeTimer(d1,d2,id);
}

$(document).ready(function(e) {
    try {
        $("body select").msDropDown();
    } catch (e) {
        alert(e.message);
    }
});
$(document).ready(function() {
    $('.fa-bars').click(function() {
        $('.menu_bar').animate({ left: '0' }, 'fast');

    });
    $('.fa-close').click(function() {
        $('.menu_bar').animate({ left: '-100%' }, 'fast');

    });
});

//jQuery time
var current_fs, next_fs, previous_fs; //fieldsets
var left, opacity, scale; //fieldset properties which we will animate
var animating; //flag to prevent quick multi-click glitches

$(".next").click(function() {
    if (animating) return false;
    animating = true;

    current_fs = $(this).parent();
    next_fs = $(this).parent().next();

    //activate next step on progressbar using the index of next_fs
    $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");

    //show the next fieldset
    next_fs.show();
    //hide the current fieldset with style
    current_fs.animate({ opacity: 0 }, {
        step: function(now, mx) {
            //as the opacity of current_fs reduces to 0 - stored in "now"
            //1. scale current_fs down to 80%
            scale = 1 - (1 - now) * 0.2;
            //2. bring next_fs from the right(50%)
            left = (now * 50) + "%";
            //3. increase opacity of next_fs to 1 as it moves in
            opacity = 1 - now;
            current_fs.css({ 'transform': 'scale(' + scale + ')' });
            next_fs.css({ 'left': left, 'opacity': opacity });
        },
        duration: 0,
        complete: function() {
            current_fs.hide();
            animating = false;
        },
        //this comes from the custom easing plugin
        easing: 'easeInOutBack'
    });
});

$(".previous").click(function() {
    if (animating) return false;
    animating = true;

    current_fs = $(this).parent();
    previous_fs = $(this).parent().prev();

    //de-activate current step on progressbar
    $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");

    //show the previous fieldset
    previous_fs.show();
    //hide the current fieldset with style
    current_fs.animate({ opacity: 0 }, {
        step: function(now, mx) {
            //as the opacity of current_fs reduces to 0 - stored in "now"
            //1. scale previous_fs from 80% to 100%
            scale = 0.8 + (1 - now) * 0.2;
            //2. take current_fs to the right(50%) - from 0%
            left = ((1 - now) * 50) + "%";
            //3. increase opacity of previous_fs to 1 as it moves in
            opacity = 1 - now;
            current_fs.css({ 'left': left });
            previous_fs.css({ 'transform': 'scale(' + scale + ')', 'opacity': opacity });
        },
        duration: 800,
        complete: function() {
            current_fs.hide();
            animating = false;
        },
        //this comes from the custom easing plugin
        easing: 'easeInOutBack'
    });
});

$(".submit").click(function() {
    return false;
})


$(document).ready(function() {
    $('ul li ul li').hover(function() {
        $('.layout').css("display", "block");
    });
    $('ul li ul li').mouseleave(function() {
        $('.layout').css("display", "none");
    });
});
jQuery(function() {
    jQuery("#tabs").tabs();
});
jQuery(function() {
    jQuery("#tab2").tabs();
});

$(document).ready(function() {
    $('ul li ul li').hover(function() {
        $('.layout').css("display", "block");
    });
    $('ul li ul li').mouseleave(function() {
        $('.layout').css("display", "none");
    });
});
$(document).ready(function() {
    $('.read_more').click(function() {
        $('.product_more_information').fadeIn();
        $(this).hide();
        $('.read_less').show();
    });
    $('.read_less').click(function() {
        $('.product_more_information').fadeOut();
        $(this).hide();
        $('.read_more').show();
    });
});
var galleryThumbs = new Swiper('.gallery-thumbs', {
    spaceBetween: 10,
    slidesPerView: 5,
    loop: true,
    freeMode: true,
    loopedSlides: 5, //looped slides should be the same
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
});
var galleryTop = new Swiper('.gallery-top', {
    spaceBetween: 10,
    loop: true,
    loopedSlides: 5, //looped slides should be the same
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    thumbs: {
        swiper: galleryThumbs,
    },
});

function goTop() {

    $('html,body').animate({ scrollTop: 0 }, 'slow');
}



$(".ham").click(function() {
    $('.second_menu_info').slideDown();
});
$(".ham_close").click(function() {

    $('.second_menu_info').slideUp();
});

var appendNumber = 4;
var prependNumber = 1;
var swiper = new Swiper('.swiper-container2', {
    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween: 30,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
document.querySelector('.prepend-2-slides').addEventListener('click', function(e) {
    e.preventDefault();
    swiper.prependSlide([
        '<div class="swiper-slide">Slide ' + (--prependNumber) + '</div>',
        '<div class="swiper-slide">Slide ' + (--prependNumber) + '</div>'
    ]);
});
document.querySelector('.prepend-slide').addEventListener('click', function(e) {
    e.preventDefault();
    swiper.prependSlide('<div class="swiper-slide">Slide ' + (--prependNumber) + '</div>');
});
document.querySelector('.append-slide').addEventListener('click', function(e) {
    e.preventDefault();
    swiper.appendSlide('<div class="swiper-slide">Slide ' + (++appendNumber) + '</div>');
});
document.querySelector('.append-2-slides').addEventListener('click', function(e) {
    e.preventDefault();
    swiper.appendSlide([
        '<div class="swiper-slide">Slide ' + (++appendNumber) + '</div>',
        '<div class="swiper-slide">Slide ' + (++appendNumber) + '</div>'
    ]);
});