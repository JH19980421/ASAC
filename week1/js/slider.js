const slideList = document.querySelector('.slide');
const slideItems = document.querySelectorAll('.slide-item');
const slideButtons = document.querySelector('.slide-buttons');
const slidePrevButton = document.querySelector('.prev-button');
const slideNextButton = document.querySelector('.next-button');

const slideItemWidth = slideItems[0].clientWidth; //슬라이드 아이템 사진 크기
const slideItemMargin = 13; //슬라이드 아이템 마진 값

const slideCount = slideList.childElementCount;
const slideLastIndex = slideList.childElementCount - 1;
let currentSlide = 0;


/** Animation */
const setTransition = (val) => {
    slideList.style.transition = val;
}

/** Translate */
const setTranslate = (idx) => {
    slideList.style.transform = `translate(-${(idx+1)*slideItemWidth}px, 0)`;
}
const resetTranslate = () => {
    slideList.style.transform = `translate(-${slideItemWidth}px, 0)`;
}


const pasteFirstAndLastElement = () => {
    slideList.prepend(slideItems[slideLastIndex].cloneNode(true));
    slideList.append(slideItems[0].cloneNode(true));
    resetTranslate();
}


//버튼 액션 핸들링 함수들
slidePrevButton.addEventListener('click', () => {
    currentSlide -= 1;
    setTransition('transform 0.3s linear');
    setTranslate(currentSlide);

    //if it was the first slide item
    if(currentSlide < 0) {
        currentSlide = slideLastIndex;

        setTimeout(() => {
            setTransition('');
            setTranslate(currentSlide);
        }, 300);
    }
});

slideNextButton.addEventListener('click', () => {
    currentSlide += 1;
    setTransition('transform 0.3s linear');
    setTranslate(currentSlide);

    //if it was the last slide item
    if(currentSlide > slideLastIndex) {
        currentSlide = 0;

        setTimeout(() => {
            setTransition('');
            setTranslate(currentSlide);
        }, 300);
    }

});



//화면 첫 렌더링
const render = () => {
    pasteFirstAndLastElement();
}
render();
