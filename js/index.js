 $(document).ready(function(){
    $('.sidenav').sidenav();
  });

  $(document).ready(function(){
     $('.carousel.carousel-slider').carousel({
         fullWidth: true,
          indicators: true
     });

 });

function autoplay() {
 $('.carousel').carousel('next');
 setTimeout(autoplay, 4000);
}    
setTimeout(autoplay, 4000);
 $(document).ready(function(){
    $('.collapsible').collapsible();
  });
     


/* testimonial-active */
$('.testimonial-active').owlCarousel({
    loop:true,
    nav:true,
	dots:false,
	autoplay:false,
	navText:['<i class="dripicons-arrow-thin-left"></i>','<i class="dripicons-arrow-thin-right"></i>'],
    responsive:{
        0:{
            items:1
        },
        576:{
            items:1
        },
        768:{
            items:1
        },
        992:{
            items:1
        },
        1200:{
            items:1
        }
    }
})
/* testimonial2-active */
$('.testimonial2-active').owlCarousel({
    loop:true,
    nav:true,
	dots:false,
	autoplay:false,
	navText:['<i class="dripicons-arrow-thin-left"></i>','<i class="dripicons-arrow-thin-right"></i>'],
    responsive:{
        0:{
            items:1
        },
        576:{
            items:1
        },
        768:{
            items:1
        },
        992:{
            items:2
        },
        1200:{
            items:2
        }
    }
})
/* brand-active */
$('.brand-active').owlCarousel({
    loop:true,
    nav:true,
	dots:false,
	autoplay:false,
	navText:['<i class="dripicons-arrow-thin-left"></i>','<i class="dripicons-arrow-thin-right"></i>'],
    responsive:{
        0:{
            items:1
        },
        576:{
            items:2
        },
        768:{
            items:3
        },
        992:{
            items:4
        },
        1200:{
            items:5
        }
    }
})

/* counter */
$('.counter').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 4000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});

/* magnificPopup video view */
$('.popup-video').magnificPopup({
	type: 'iframe'
});
