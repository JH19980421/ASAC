import '../css/normalize.css';
import '../css/common.css';
import '../css/slide-banner.css';

function SlideBanner() {
    return (
        <div className='slide__container'>
            <ul className='slide'>
                <li class="slide__item"> 
                    <img class="slide__item--image" src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F1851%2F62d57330.jpg&w=1060&q=100" alt="banner"/>
                    <div class="slide__item--description">
                        <p>기업이 원하는 프론트 개발자 되기</p>
                        <p>프리온보딩 프론트엔드 코스</p>
                        <div class="divider__horizontal"></div>
                        <p>바로가기 &gt;</p>
                    </div>
                </li>
                <li class="slide__item"> 
                    <img class="slide__item--image" src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F1851%2F62d57330.jpg&w=1060&q=100" alt="banner"/>
                    <div class="slide__item--description">
                        <p>기업이 원하는 프론트 개발자 되기</p>
                        <p>프리온보딩 프론트엔드 코스</p>
                        <div class="divider__horizontal"></div>
                        <p>바로가기 &gt;</p>
                    </div>
                </li>
                <li class="slide__item"> 
                    <img class="slide__item--image" src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F1851%2F62d57330.jpg&w=1060&q=100" alt="banner"/>
                    <div class="slide__item--description">
                        <p>기업이 원하는 프론트 개발자 되기</p>
                        <p>프리온보딩 프론트엔드 코스</p>
                        <div class="divider__horizontal"></div>
                        <p>바로가기 &gt;</p>
                    </div>
                </li>
                <li class="slide__item"> 
                    <img class="slide__item--image" src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F1851%2F62d57330.jpg&w=1060&q=100" alt="banner"/>
                    <div class="slide__item--description">
                        <p>기업이 원하는 프론트 개발자 되기</p>
                        <p>프리온보딩 프론트엔드 코스</p>
                        <div class="divider__horizontal"></div>
                        <p>바로가기 &gt;</p>
                    </div>
                </li>                
            </ul>

            <div className='slide__buttons'>
                <button className='slide__buttons--prev-button'>&lt;</button>
                <button className='slide__buttons--next-button'>&gt;</button>
            </div>
        </div>
    );
}

export default SlideBanner;