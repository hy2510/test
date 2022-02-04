//eBook 화면 사이즈 맞춤

window.onload = ebookResizing;

let pageOriginHeight = document.querySelector('.page-size').offsetHeight;
let pageOriginWidth = document.querySelector('.page-size').offsetWidth;
let pageChangeHeight;
let pageChangeHeightMax = window.innerHeight;
let changedRate;
let changedRateMax;
let pageChangeWidth;
let pageChangeWidthMax;
let changedRate2;
let containerWidth;
let containerWidthMax;
let textScale;
let windowRate;

function zoneResizing() {
    windowRate = 0.87;
    pageChangeHeight = window.innerHeight * windowRate;
    changedRate = pageChangeHeight / pageOriginHeight;
    pageChangeWidth = changedRate * pageOriginWidth;
    changedRate2 = window.innerWidth / pageOriginWidth;
    if (window.innerWidth > 768) {
        containerWidth = pageChangeWidth * 2;
        document.querySelector('.ebook-container').style.height = Math.floor(pageChangeHeight) + 'px';
        document.querySelector('.ebook').style.width = Math.floor(containerWidth) - 1 + 'px';
    } else {
        containerWidth = pageChangeWidth;
        document.querySelector('.ebook-container').style.width = window.innerWidth + 'px';
    };
};

function textResizing() {
    textScale = document.querySelectorAll('.text');
    if (window.innerWidth > 768) {
        for (let i = 0; i < textScale.length; i++) {
            let item = textScale[i];
            item.style.transform = 'scale(' + changedRate + ')';
        };
    } else {
        for (let i = 0; i < textScale.length; i++) {
            let item = textScale[i];
            item.style.transform = 'scale(' + changedRate2 + ')';
        };
    }

    pagesAll = document.querySelectorAll('.page-size')
    if (window.innerWidth > 768) {
        for (let i = 0; i < pagesAll.length; i++) {
            const changeSize = pagesAll[i];
            changeSize.style.width = Math.floor(pageChangeWidth) + 'px'
            changeSize.style.height = Math.floor(pageChangeHeight) + 'px'
        };
    } else {
        for (let i = 0; i < pagesAll.length; i++) {
            const changeSize = pagesAll[i];
            changeSize.style.width = window.innerWidth + 'px'
        };
    };
};

function ebookResizing() {
    zoneResizing();
    textResizing();
    getSliderSettings();
};

//PC, 태블릿에서 위아래로 꽉 채우기
function ebookResizingMax() {
    zoneResizingMax();
    textResizingMax();
    getSliderSettings();
};

function getSliderSettings() {
    $('.ebook-container').slick('resize');
};

function zoneResizingMax() {
    pageChangeHeightMax = window.innerHeight;
    changedRateMax = pageChangeHeightMax / pageOriginHeight;
    pageChangeWidthMax = changedRateMax * pageOriginWidth;
    if (window.innerWidth > 768) {
        containerWidthMax = pageChangeWidthMax * 2;
        document.querySelector('.ebook-container').style.height = Math.floor(pageChangeHeightMax) + 'px';
        document.querySelector('.ebook').style.width = Math.floor(containerWidthMax) - 1 + 'px';
    }
};

function textResizingMax() {
    textScale = document.querySelectorAll('.text');
    if (window.innerWidth > 768) {
        for (let i = 0; i < textScale.length; i++) {
            let item = textScale[i];
            item.style.transform = 'scale(' + changedRateMax + ')';
        };
    }

    pagesAll = document.querySelectorAll('.page-size')
    if (window.innerWidth > 768) {
        for (let i = 0; i < pagesAll.length; i++) {
            const changeSize = pagesAll[i];
            changeSize.style.width = Math.floor(pageChangeWidthMax) + 'px'
            changeSize.style.height = Math.floor(pageChangeHeightMax) + 'px'
        };
    }
};

// Zoom In 버튼
$('#btnZoomIn').on('click', function(){
    ebookResizingMax();
    $('#btnZoomIn').addClass('d-none');
    $('#btnZoomOut').removeClass('d-none');
});

// Zoom Out 버튼
$('#btnZoomOut').on('click', function(){
    $('#btnZoomOut').addClass('d-none');
    $('#btnZoomIn').removeClass('d-none');
});

// Play 버튼
$('#btnPlay').on('click', function() {
    $('#btnPlay').addClass('d-none');
    $('#btnPause').removeClass('d-none');
    $('#btnPause').addClass('animate__jello');
});

// Pause 버튼
$('#btnPause').on('click', function() {
    $('#btnPause').addClass('d-none');
    $('#btnPlay').removeClass('d-none');
    $('#btnPlay').addClass('animate__jello');
});

//Slick 실행 (슬라이드 모듈)
window.setTimeout(function () {
    if (window.innerWidth > 768) {
        $('.ebook-container').slick({
            lazyLoad: 'ondemand',
            infinite: false,
            slidesToShow: 2,
            slidesToScroll: 2,
            arrows: true,
            dots: true
        });
    } else {
        $('.ebook-container').slick({
            lazyLoad: 'ondemand',
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false
        });
    };
}, 1000);

//이북 등장
window.setTimeout(function () {
    $('.ebook').removeClass('opasity');
    $('.ebook').addClass('animate__backInUp');
}, 1200);