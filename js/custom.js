$(window).scroll(function(){
    $('nav').toggleClass('scrolled', $(this).scrollTop()>50);
});



$('.banner-home').owlCarousel({
    autoPlay:true,
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})






$('.testimonial').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})




$('.course-all').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:4
        },
        1000:{
            items:4
        }
    }
})


$('.newscar').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:4
        },
        1000:{
            items:4
        }
    }
})

$('.clients-cr').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:4
        },
        1000:{
            items:6
        }
    }
})