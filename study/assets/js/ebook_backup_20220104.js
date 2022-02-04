//슬라이드 옵션
document.addEventListener("DOMContentLoaded", function() {
    if (window.innerWidth > 768) {
        $('.ebook-container').slick({
            infinite: false,
            slidesToShow: 2,
            slidesToScroll: 2,
            arrows: true,
            dots: false
        });
    } else {
        $('.ebook-container').slick({
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false
        });
    };
});

//eBook 화면 맞춤 사이즈 함수
document.addEventListener("DOMContentLoaded", function() {
    const defaultWidth = document.querySelector('.page-width').offsetWidth;
    const scale = document.querySelector('.ebook').offsetWidth / defaultWidth;
    if (window.innerWidth > 768) {
        if (scale !== 1) {
            let text = document.querySelectorAll('.text');
            for (let i = 0; i < text.length; i++) {
                const item = text.item(i);
                item.style.transform = 'scale(' + scale / 2 + ')';
            }
            let pages = document.querySelectorAll('.page-width')
            for (let i = 0; i < pages.length; i++) {
                const item = pages.item(i);
                item.style = 'width: ' + document.querySelector('.ebook')
                    .offsetWidth / 2 + 'px'
            }
        }
    } else {
        if (scale !== 1) {
            let text = document.querySelectorAll('.text');
            for (let i = 0; i < text.length; i++) {
                const item = text.item(i);
                item.style.transform = 'scale(' + scale + ')';
            };
            let pages = document.querySelectorAll('.page-width')
            for (let i = 0; i < pages.length; i++) {
                const item = pages.item(i);
                item.style = 'width: ' + document.querySelector('.ebook')
                    .offsetWidth + 'px'
            };
        };
    };
});