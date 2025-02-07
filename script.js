document.addEventListener('DOMContentLoaded', function() {
    // 初始化 Slick Carousel
    $('.slick-slider').slick({
        dots: true, // 显示分页点
        arrows: true, // 显示前后导航箭头
        infinite: true, // 无限循环
        speed: 500, // 切换速度
        slidesToShow: 1, // 每次显示一张图片
        slidesToScroll: 1, // 每次滚动一张图片
        autoplay: true, // 自动播放
        autoplaySpeed: 3000, // 自动播放间隔时间
        pauseOnHover: true, // 鼠标悬停时暂停
        responsive: [
            {
                breakpoint: 768, // 在小于 768px 的设备上
                settings: {
                    arrows: false, // 隐藏箭头
                    dots: true // 显示分页点
                }
            }
        ]
    });
});
