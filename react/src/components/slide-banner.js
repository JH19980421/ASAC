import { useEffect, useState } from 'react';

import '../css/normalize.css';
import '../css/common.css';
import '../css/slide-banner.css';


function SlideBanner() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slideItemMargin = 13;
    const slideLastIndex = 3;

    useEffect(() => {
        setCurrentSlide(0);
        console.log('currentSlide num', currentSlide);
    }, []);


    /** Animation */
    const setTransition = (val) => {
        // slideList.style.transition = val;
    }

    /** Translate */
    const setTranslate = (idx) => {
        // slideList.style.transform = `translate(-${(idx+1)*slideItemWidth}px, 0)`;
    }
    const resetTranslate = () => {
        // slideList.style.transform = `translate(-${slideItemWidth}px, 0)`;
    }

    //버튼 액션 핸들링 함수들
    const slidePrevButton = () => {
        console.log('prev');
        // currentSlide -= 1;
        // setTransition('transform 0.7s ease-out');
        // setTranslate(currentSlide);

        // //if it was the first slide item
        // if(currentSlide < 0) {
        //     currentSlide = slideLastIndex;

        //     setTimeout(() => {
        //         setTransition('');
        //         setTranslate(currentSlide);
        //     }, 700);
        // }
    }

    const slideNextButton = () => {
        console.log('next');
        // currentSlide += 1;
        // setTransition('transform 0.7s ease-out');
        // setTranslate(currentSlide);

        // //if it was the last slide item
        // if(currentSlide > slideLastIndex) {
        //     currentSlide = 0;

        //     setTimeout(() => {
        //         setTransition('');
        //         setTranslate(currentSlide);
        //     }, 300);
        // }
    }
    

    return (
        <div className='slide__container'>
            <ul className='slide'>
                <li className="slide__item"> 
                    <img className="slide__item--image" src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F1851%2F62d57330.jpg&w=1060&q=100" alt="banner"/>
                    <div className="slide__item--description">
                        <p>기업이 원하는 프론트 개발자 되기</p>
                        <p>프리온보딩 프론트엔드 코스</p>
                        <div className="divider__horizontal"></div>
                        <p>바로가기 &gt;</p>
                    </div>
                </li>
                <li className="slide__item"> 
                    <img className="slide__item--image" src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F1851%2F62d57330.jpg&w=1060&q=100" alt="banner"/>
                    <div className="slide__item--description">
                        <p>기업이 원하는 프론트 개발자 되기</p>
                        <p>프리온보딩 프론트엔드 코스</p>
                        <div className="divider__horizontal"></div>
                        <p>바로가기 &gt;</p>
                    </div>
                </li>
                <li className="slide__item"> 
                    <img className="slide__item--image" src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F1851%2F62d57330.jpg&w=1060&q=100" alt="banner"/>
                    <div className="slide__item--description">
                        <p>기업이 원하는 프론트 개발자 되기</p>
                        <p>프리온보딩 프론트엔드 코스</p>
                        <div className="divider__horizontal"></div>
                        <p>바로가기 &gt;</p>
                    </div>
                </li>
                <li className="slide__item"> 
                    <img className="slide__item--image" src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F1851%2F62d57330.jpg&w=1060&q=100" alt="banner"/>
                    <div className="slide__item--description">
                        <p>기업이 원하는 프론트 개발자 되기</p>
                        <p>프리온보딩 프론트엔드 코스</p>
                        <div className="divider__horizontal"></div>
                        <p>바로가기 &gt;</p>
                    </div>
                </li>                
            </ul>

            <div className='slide__buttons'>
                <button 
                    className='slide__buttons--prev-button'
                    onClick={slidePrevButton}
                >&lt;</button>
                <button 
                    className='slide__buttons--next-button'
                    onClick={slideNextButton}
                >&gt;</button>
            </div>
        </div>
    );
}

export default SlideBanner;