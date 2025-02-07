$(document).ready(function(){
    // 主轮播配置
    $('.main-carousel').slick({
        centerMode: true,     // 让中间的图片放大
        centerPadding: '0',   // 让滑动到中间时对齐
        slidesToShow: 3,      // 一次显示 3 张
        focusOnSelect: true,  // 点击选中
        arrows: false,        // 隐藏箭头
        infinite: true,       // 循环播放
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1, 
                    centerMode: true
                }
            }
        ]
    });

    // 点击缩略图时，切换到对应的主轮播图
    $('.thumbnail-item').click(function(){
        var index = $(this).index();
        $('.main-carousel').slick('slickGoTo', index);
        $('.thumbnail-item').removeClass('active');
        $(this).addClass('active');
    });

    // 轮播切换时，缩略图同步 & 视觉主次变化
    $('.main-carousel').on('afterChange', function(event, slick, currentSlide){
        $('.thumbnail-item').removeClass('active').eq(currentSlide).addClass('active');

        // 移除所有的主次效果
        $('.slick-slide .carousel-item').removeClass('active-slide');
        $('.slick-slide').css('opacity', '0.4').css('transform', 'scale(0.8)');

        // 让当前显示的图片放大、清晰
        $('.slick-current .carousel-item').addClass('active-slide');
        $('.slick-current').css('opacity', '1').css('transform', 'scale(1)');
    });

    // 初始化时确保第一个主图是放大的
    $('.slick-current .carousel-item').addClass('active-slide');
});
