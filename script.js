$(document).ready(function(){
    // 主轮播配置
    $('.main-carousel').slick({
        centerMode: true,
        centerPadding: '0',
        slidesToShow: 3,
        focusOnSelect: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    centerMode: false
                }
            }
        ]
    });

    // 确保 Slick 正确计算宽度，避免轮播项重叠
    $('.main-carousel').on('setPosition', function() {
        $('.slick-slide').css('width', $('.main-carousel').width() / 3);
    });

    // 缩略图导航联动
    $('.thumbnail-item').click(function(){
        var index = $(this).index();
        $('.main-carousel').slick('slickGoTo', index);
        $('.thumbnail-item').removeClass('active');
        $(this).addClass('active');
    });

    // 主轮播切换时同步缩略图
    $('.main-carousel').on('afterChange', function(event, slick, currentSlide){
        $('.thumbnail-item').removeClass('active').eq(currentSlide).addClass('active');
    });
});
