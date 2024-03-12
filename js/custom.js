$('.banner-main').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
    nextArrow:".next",
    prevArrow:".prev",
  });

$(function(){
  $('.slilk-2').slick({
    centerMode: true,
    centerPadding: '0px',
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical:true,
    nextArrow:".tops",
    prevArrow:".bottoms",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,

        }
      },
    ]
    });
})

$(function(){
  $('.team-paragraph').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.team-men'
  });
  $('.team-men').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.team-paragraph',
    dots: false,
    centerPadding:"0px",
    centerMode: true,
    focusOnSelect: true,
    vertical:true,
    nextArrow:".top",
    prevArrow:".bottom",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          vertical:false,
        }
      },
    ]
  });

})

$(".counter").countMe(40,65);
  $(".counter2").countMe(40,65);
  $(".counter3").countMe(40,65);
  $(".counter4").countMe(40,65);
  $(".counter5").countMe(40,65);




$(window).scroll(function(){
  var scrolling = $(window).scrollTop();


  if(scrolling > 20){
    $(".menu-bg").addClass("bg")
  }else{
    $(".menu-bg").removeClass("bg")
  }
})