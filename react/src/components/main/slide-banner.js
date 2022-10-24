import { useEffect, useState } from 'react';

import '../../css/normalize.css';
import '../../css/common.css';
import '../../css/main/slide-banner.css';

const slideItem = require('../../slide-items.json');


function SlideBanner() {    

    return (
        <div className='slide__container'>
            <ul className='slide'>
                {
                    slideItem.map((item) => (
                        <li className="slide__item" key={item.id}> 
                            <img className="slide__item--image" src={item.imageUrl} alt="banner"/>
                            <div className="slide__item--description">
                                <p>{item.title}</p>
                                <p>{item.subtitle}</p>
                                <div className="divider__horizontal"></div>
                                <p>바로가기 &gt;</p>
                            </div>
                        </li>
                    ))
                }
            </ul>

            <div className='slide__buttons'>
                <button 
                    className='slide__buttons--prev-button'
                >&lt;</button>
                <button 
                    className='slide__buttons--next-button'
                >&gt;</button>
            </div>
        </div>
    );
}

export default SlideBanner;