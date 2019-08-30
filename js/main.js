$(function(){
    $('.slider-for').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      fade: true,
      arrows: false,
      dots: true,
      asNavFor: '.slider-nav',
      customPaging : function(slider, i) {
        var thumb = $(slider.$slides[i]).data();
        return '<a>'+(i+1)+'</a>';
      },
    });
    $('.slider-nav').slick({
     slidesToShow: 3,
     slidesToScroll: 1,
     asNavFor: '.slider-for',
     arrows: false,
     dots: false,
     infinite: false,
     focusOnSelect: true,
     autoplay: true,
    });

    var galleryThumbs = new Swiper('.gallery-thumbs', {
      slidesPerView: '3',
      freeMode: true,
      loopedSlides: 3, //looped slides should be the same
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
      scrollbar: {
        el: '.swiper-scrollbar',
            hide: true,
            snapOnRelease: false,
            draggable:true
      },
    });
    var galleryTop = new Swiper('.gallery-top', {
      loop:true,
      loopedSlides: 3, //looped slides should be the same
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      thumbs: {
        swiper: galleryThumbs,
      },
    });
});



// Dropdown menu
$(function(){
  var width = $(window).width();
  $('.submenu > a, .submenu--sub > a').on('mouseover', function(){
    if (width > 1199) {
      $(this).next('ul').fadeIn(200);
    } 
  });
  $('.submenu > a').on('click', function(){
    if (width < 1200) {
      $(this).next('ul').slideToggle();
      return false;
    } 
  })
  $('.submenu--sub > a').on('click', function(){
    if (width < 1200) {
      $(this).next('ul').slideToggle();
      return false;
    } 
  })
 if (width > 1199) {
  $('.submenu').on('mouseleave', function(){
    $('.submenu').children('ul').fadeOut();
  });
  $('.submenu--sub').on('mouseleave', function(){
    $('.submenu--sub').children('ul').fadeOut();
  });
 } 
 if (width < 1199) {
  $('.submenu').on('mouseleave', function(){
    $('.submenu').children('ul').slideUp();
  });
  $('.submenu--sub').on('mouseleave', function(){
    $('.submenu--sub').children('ul').slideUp();
  });
 }
});


// Modal
$(document).ready(function() {
	$('.open--modal').on('click', function(){
		var link = $(this).attr('data-modal');
		$(link).fadeIn();
		return false;
	});

	$('.modal .close, .modal__layer').on('click', function() {
		$(this).parents('.modal, .mobile-contacts').fadeOut();
		return false;	
	});

	$('[name="tel"]').inputmask('+7 (999) 999-99-99');
});


// Mobile menu

$(function(){
  $('.menu-btn').on('click', function(){
    var menu = document.querySelector('header .main-menu');
    if($(menu).is(':visible')){
      $(menu).slideUp();
      $(this).removeClass('open');
    }
    else{
      $(menu).slideDown();
      $(this).addClass('open');
    }
  })
});



$(function(){
  $('.search-btn').on('click', function(){
    var search = document.querySelector('.search');
    if($(search).is(':visible')){
      $(search).animate({width: 'toggle'});
    }
    else{
      $(search).animate({width: 'toggle'});
    }
  })
});