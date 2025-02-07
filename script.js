$(document).ready(function () {
    $('.main-carousel').slick({
        centerMode: true,  
        centerPadding: '60px',
        slidesToShow: 3,  
        autoplay: true,  
        autoplaySpeed: 3000,  
        infinite: true,  
        dots: true,  
        prevArrow: '<button class="slick-prev">←</button>',
        nextArrow: '<button class="slick-next">→</button>',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,  
                    centerPadding: '40px'
                }
            }
        ]
    });

    // **确保 Slick 布局不受影响**
    $('.main-carousel').on('init', function () {
        updateCenterEffect();
    });

    // **修正轮播主次关系**
    function updateCenterEffect() {
        $('.slick-slide .carousel-item').removeClass('active-slide');  
        $('.slick-slide').css('opacity', '0.4').css('transform', 'scale(0.8)');

        $('.slick-current .carousel-item').addClass('active-slide');  
        $('.slick-current').css('opacity', '1').css('transform', 'scale(1)');
    }

    // **监听轮播变化，确保主次关系更新**
    $('.main-carousel').on('afterChange', function () {
        updateCenterEffect();
    });

    // **点击缩略图，切换到对应主轮播**
    $('.thumbnail-item').click(function(){
        var index = $(this).index();
        $('.main-carousel').slick('slickGoTo', index);
        $('.thumbnail-item').removeClass('active');
        $(this).addClass('active');
    });

    // **主轮播切换时，同步缩略图**
    $('.main-carousel').on('afterChange', function(event, slick, currentSlide){
        $('.thumbnail-item').removeClass('active').eq(currentSlide).addClass('active');
    });
});
