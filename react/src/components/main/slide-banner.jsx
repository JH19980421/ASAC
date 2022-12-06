import { useEffect, useState, useRef } from "react";

import "../../css/normalize.css";
import "../../css/common.css";
import "../../css/main/slide-banner.css";

const slideItem = require("../../datas/slide-items.json");

function SlideBanner() {
    const slideCount = slideItem.length - 1;
    const [currentSlide, setCurrentSlide] = useState(0);

    const slideList = useRef();

    useEffect(() => {
        slideItem.push(slideItem[0]);
        slideItem.unshift(slideItem[slideCount]);
        setCurrentSlide(1);
    }, []);

    useEffect(() => {
        const autoPlay = setInterval(() => {
            setCurrentSlide((prev) => (prev === slideCount + 1 ? 1 : prev + 1));
        }, 4000);

        return () => {
            clearInterval(autoPlay);
        };
    }, []);

    useEffect(() => {
        setTransition("transform 0.7s ease-out");
        setTranslate(currentSlide);
    }, [currentSlide]);

    /** Animation */
    const setTransition = (val) => {
        slideList.current.style.transition = val;
    };

    /** Translate */
    const setTranslate = (idx) => {
        slideList.current.style.transform = `translate(-${idx * 1086}px, 0)`;
    };
    const resetTranslate = () => {
        slideList.current.style.transform = `translate(-${1086 - 13}px, 0)`;
    };

    const slidePrevButton = () => {
        if (currentSlide < 2) {
            setCurrentSlide(slideCount - 1);
        } else {
            setCurrentSlide(currentSlide - 1);
        }
    };

    const slideNextButton = () => {
        if (currentSlide > slideCount - 2) {
            setCurrentSlide(1);
        } else {
            setCurrentSlide(currentSlide + 1);
        }
    };

    return (
        <div className="slide__container">
            <ul className="slide" ref={slideList}>
                {slideItem.map((item) => (
                    <li className="slide__item">
                        <img
                            className="slide__item--image"
                            src={item.imageUrl}
                            alt="banner"
                        />
                        <div className="slide__item--description">
                            <p>{item.title}</p>
                            <p>{item.subtitle}</p>
                            <div className="divider__horizontal"></div>
                            <p>바로가기 &gt;</p>
                        </div>
                    </li>
                ))}
            </ul>

            <div className="slide__buttons">
                <button
                    className="slide__buttons--prev-button"
                    onClick={slidePrevButton}
                >
                    &lt;
                </button>
                <button
                    className="slide__buttons--next-button"
                    onClick={slideNextButton}
                >
                    &gt;
                </button>
            </div>
        </div>
    );
}

export default SlideBanner;
