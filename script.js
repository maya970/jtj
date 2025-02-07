$(document).ready(function () {
    let descriptions = [
        { title: "新刊情報", text: "这里是第一张图片的介绍文字。" },
        { title: "レジェンドセレクション", text: "这里是第二张图片的介绍文字。" },
        { title: "キャンペーン", text: "这里是第三张图片的介绍文字。" }
    ];

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
    }).on('init afterChange', function (event, slick, currentSlide) {
        updateCenterEffect();
        animateInfoBox(currentSlide || 0);
        updateThumbnail(currentSlide || 0);
    });

    function animateInfoBox(index) {
        $('#info-box').animate({ left: '-10px', opacity: 0 }, 200, function () {
            updateInfoText(index);
            $(this).css({ left: '10px' }).animate({ left: '0px', opacity: 1 }, 200);
        });
    }

    function updateInfoText(index) {
        $('#info-title, #info-text').fadeOut(200, function () {
            $('#info-title').text(descriptions[index].title);
            $('#info-text').text(descriptions[index].text);
            $('#info-title, #info-text').fadeIn(200);
        });
    }

    function updateThumbnail(index) {
        $('.thumbnail-item').removeClass('active').eq(index).addClass('active');
    }

    function updateCenterEffect() {
        $('.slick-slide').css({ opacity: '0.4', transform: 'scale(0.8)' });
        $('.slick-current').css({ opacity: '1', transform: 'scale(1)' });
    }

    $('.thumbnail-item').click(function () {
        var index = $(this).index();
        $('.main-carousel').slick('slickGoTo', index);
    });
});
