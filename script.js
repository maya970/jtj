$(document).ready(function () {
    $('.main-carousel').slick({
        centerMode: true,  // 启用中心模式
        centerPadding: '60px', // 两侧可见部分
        slidesToShow: 3,  // 轮播显示的数量
        autoplay: true,  // 自动播放
        autoplaySpeed: 3000, // 自动播放间隔
        infinite: true,  // 无限循环
        dots: true, // 显示指示点
        prevArrow: '<button class="slick-prev">←</button>',
        nextArrow: '<button class="slick-next">→</button>',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,  // 小屏幕时只显示1个
                    centerPadding: '40px'
                }
            }
        ]
    });

    // **解决默认状态无主次问题**
    function updateCenterEffect() {
        $('.slick-slide').removeClass('slick-center-effect'); // 清除旧的
        $('.slick-center .carousel-item').addClass('slick-center-effect'); // 只给当前中心的加
    }

    // 初始加载时，给默认中心项添加放大效果
    updateCenterEffect();

    // 监听轮播变化，更新主次
    $('.main-carousel').on('afterChange', function () {
        updateCenterEffect();
    });
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
