$(document).ready(function(){
$('.owl-carousel').owlCarousel({
  navigation : false,
      items:1,
      loop:true,
      lazyLoad:true,
      autoplay:false,
      smartSpeed:1000,
      dots: true,
      pagination: true
    // nav:true,
    // navText: ["",""]
});
$(".burger-button").click( function(){
	$(".burger-button").toggleClass("active");
  $(".header__menu").toggleClass("burger-menu-v");
  
  // var li = $('.header__menu .menu__item').length;
  //   if ( li == 7) {
  //        $('.menu__list').append('<li class="menu__item"></li>');
  //        var a = $('.social').clone();
  //        $('.menu__item:last-child').append(a);
  //     }
  //     $('.menu__item:last-child').addClass('social_visible');

   });


      $('.menu').on('click', function() {
        $(".burger-button").removeClass("active");
        $(".header__menu").removeClass("burger-menu-v");

      });



      $('#pause-video').hide();

      $('#play-video').on('click', function(e){
        e.preventDefault();
        var vid = document.getElementById('videoV'); 
        vid.play();
        $('#play-video').hide();
        $('#pause-video').show();
      });

      $('#pause-video').on('click', function(e){
        e.preventDefault();
        var vid = document.getElementById('videoV'); 
        vid.pause();
        $('#pause-video').hide();
        $('#play-video').show();
      });


      $('.popup-modal').magnificPopup({
        type: 'inline',
        preloader: false,
        modal: true
    });
    $(document).on('click', '.popup-modal-dismiss', function(e) {
        e.preventDefault();
        $.magnificPopup.close();
    });
});

