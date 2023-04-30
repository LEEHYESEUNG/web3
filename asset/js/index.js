$(function(){
  /**
 * 
 * a 태그 클릭 이벤트 정지
 *
 * @version 1.0.0
 * @since 
 * @author 
 * @pram
 */        
  $('a').click(function(e){
    e.preventDefault();
  });

/**
 * 
 * ad-swiper
 *
 * @version 1.0.0
 * @since
 * @author
 * @pram
 */
const adSlide = new Swiper(".ad-slide", {
    effect: 'fade',
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
});


/**
 * 
 * header-group 스크롤
 *
 * @version 1.0.0
 * @since
 * @author 
 * @pram
 */
$(window).scroll(function(){

    curr = $(this).scrollTop();

    if (curr > 0) {
        $('.header-group').addClass('fixed');
    } else {
        $('.header-group').removeClass('fixed');
    };
  });

$('.gnb .btn-down').click(function(e){
    e.preventDefault();

    $('.gnb-group-all').slideToggle();
    $('.header-group .gnb').toggleClass('active');
});


/**
 * 
 * 메뉴 열기
 *
 * @version 1.0.0
 * @since 
 * @author 
 * @pram
 */
$('.header-group .link-menu').click(function(e){
    e.preventDefault();

    $('.menu-open').addClass('on');
    $('body').addClass('overflow');
    $('.dimmed').fadeIn();
});

$('.menu-open .btn-close, .dimmed').click(function(e){
    e.preventDefault();

    $('.menu-open').removeClass('on');
    $('body').removeClass('overflow');
    $('.dimmed').fadeOut();
});

$('.menu-open .menu-item').click(function(e){
    e.preventDefault();

    $(this).find('.sub-list').slideToggle();
    $(this).toggleClass('on');
});

$('.header-group .link-search').click(function(e){
    e.preventDefault();

    $('.search-open').addClass('on');
});
$('.header .search-open .btn-close').click(function(e){
    e.preventDefault();

    $('.search-open').removeClass('on');
});


/**
 * 
 * visual-slide
 *
 * @version 1.0.0
 * @since 
 * @author 
 * @pram
 */
 const visual = new Swiper(".visual-slide", {
    effect:'fade',
    autoplay: {
        delay: 2500,
      },
    pagination: {
      el: ".swiper-pagination",
    },
  });


/**
 * 
 * section swiper
 *
 * @version 1.0.0
 * @since 
 * @author 
 * @pram
 */
 const section = new Swiper(".prd-slide", {
    slidesPerView: 2.2,
    spaceBetween: 10,
});































});
