import React from 'react';
import { useState, useRef, useEffect } from 'react';

const SlideShow = (props) => {
  const slideShow = useRef(null);
  const slideRef = useRef(null);
  const [slideIndex, setSlideIndex] = useState(0);
  const slideLength = 5; // 전체 슬라이드 개수
  const slideWidth = 1060 + 20;

  useEffect(() => {
    //처음실행될때 한번
    slideRef.current.style.width = slideWidth * slideLength + 'px';
  }, []); //<-빈배열

  useEffect(() => {
    setTimeout(() => {
      let balance = (slideShow.current.offsetWidth - slideWidth) / 2;
      slideRef.current.style.left = -slideIndex * slideWidth + balance + 'px';
    }, 300);
  }, [slideIndex]);

  function moveSlide(idx) {
    let Allowed = idx <= 0 ? setSlideIndex(4) : idx >= slideLength ? setSlideIndex(0) : setSlideIndex(idx);
  }
  function prevClick() {
    moveSlide(slideIndex - 1);
  }
  function nextClick() {
    moveSlide(slideIndex + 1);
  }
  return (
    <div id="slideShow" ref={slideShow}>
      <ul class="slides" ref={slideRef}>
        <li>
          <img src={require('../../../images/banner1.png')} alt="" />
        </li>
        <li>
          <img src={require('../../../images/banner2.png')} alt="" />
        </li>
        <li>
          <img src={require('../../../images/banner3.png')} alt="" />
        </li>
        <li>
          <img src={require('../../../images/banner4.png')} alt="" />
        </li>
        <li>
          <img src={require('../../../images/banner5.png')} alt="" />
        </li>
      </ul>
      <p class="controller">
        <span class="prev" onClick={prevClick}>
          {' '}
          <img src={require('../../../images/left-arrow.png')} alt="" />
        </span>
        <span class="next" onClick={nextClick}>
          {' '}
          <img src={require('../../../images/right-arrow.png')} alt="" />{' '}
        </span>
      </p>
      <div class="banner_info">
        <h2>[FREE] GDSC Job Fair Live</h2>
        <h3>국내 최고 스타트업 채용소식을 볼 수 있는 기회!</h3>
        <hr class="banner_divider" />
        <a href="!#">
          바로가기{' '}
          <svg class="SvgIcon_SvgIcon__root__svg__DKYBi" viewBox="0 0 18 18">
            {' '}
            <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
          </svg>{' '}
        </a>
      </div>
    </div>
  );
};

export default SlideShow;
