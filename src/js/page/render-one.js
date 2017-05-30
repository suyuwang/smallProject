/**
 * Created by matrix on 2017/5/26.
 */
$(function(){

    $('.header-bottom-con,.i,.mark').click(function(){
        $(".mark").toggle();
        $('.allMenu').toggle();

    });

    $('.menus li a').on('click',function(){
        $(this).addClass('active').parent().siblings().children().removeClass('active');
    });
    var num=0;
    var _length=$(".hot-news-item").length;
    setInterval(move,2000);
    function move(){
        if(num<_length-1){
            num++;
            $(".hot_content").animate({top:-num * 17.6},1000);
        }else{
            num=0;
            $(".hot_content").animate({top:-num * 17.6},0);
        }
    }


    var swiper = new Swiper('.nav_list_left .swiper-container', {
        pagination: '.swiper-pagination',
        slidesPerView: 6,
        paginationClickable: true,
        spaceBetween: 10
    });
    var swiper = new Swiper('nav .swiper-container', {
        pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        paginationClickable: true,
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: 2500,
        autoplayDisableOnInteraction: false
    });
    $(".swiper-slide").on('click',function(){
        $(this).addClass('underline').siblings().removeClass('underline');
    });


});
