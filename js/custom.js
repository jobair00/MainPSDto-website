$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots: false,
    autoplay:true,
    autoplayTimeout:10000,
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


$('.counter').counterUp({
    delay: 10,
    time: 1000
});


