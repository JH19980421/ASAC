import { useEffect, useState } from 'react';

import '../../css/main/keyword.css';

const keywordItems = require('../../keywords.json');


function Keywords() {
    // const [currentWord, setCurrentWord] = useState(0);

    // useEffect(() => {
    //     /** do something */
        
    // }, [currentWord]);


    // /** button handlers */
    // const hideKeywordLeftButton = () => {
    //     keywordPrevButton.style.visibility = 'hidden';
    //     keywordPrevButton.style.display = 'none';
    // }
    // const showKeywordLeftButton = () => {
    //     keywordPrevButton.style.zIndex = 3;
    //     keywordPrevButton.style.visibility = 'visible';
    //     keywordPrevButton.style.display = 'block';
    // }
    // const hideKeywordRightButton = () => {
    //     keywordNextButton.style.visibility = 'hidden';
    // }
    // const showKeywordRightButton = () => {
    //     keywordNextButton.style.zIndex = 3;
    
    //     keywordNextButton.style.visibility = 'visible';
    // } 

    // const handleKeywordButtons = (current) => {
    //     if(current === 0) {
    //         hideKeywordLeftButton();
    //     } else if(current === keywordDivEnd){
    //         hideKeywordRightButton();
    //     } else {
    //         showKeywordLeftButton();
    //         showKeywordRightButton();
    //     }
    // }

    // const handleNextButton = () => {
    //     keywordDiv.style.transition = 'transform 0.3s ease-out';
    
    //     currentKeywordLeft = Math.min(currentKeywordLeft+350, keywordDivEnd);
    //     if(currentKeywordLeft === keywordDivEnd) {
    //         keywordDiv.style.transform = `translate(-${keywordDivEnd+40}px, 0)`;
    //     } else {
    //         keywordDiv.style.transform = `translate(-${currentKeywordLeft}px, 0)`;        
    //     }
        
    //     handleKeywordButtons(currentKeywordLeft);
    // }

    // const handlePrevButton = () => {
    //     keywordDiv.style.transition = 'transform 0.3s ease-out';
    
    //     currentKeywordLeft = Math.max(currentKeywordLeft-350, 0);
    //     if(currentKeywordLeft < 0) {
    //         keywordDiv.style.transform = `translate(0, 0)`;
    //     } else {
    //         keywordDiv.style.transform = `translate(-${currentKeywordLeft}px, 0)`;
    //     }

    //     handleKeywordButtons(currentKeywordLeft);
    // }

    return (
        <div className="keywords__container">
            <div className="keywords__button--left">
                <button>
                    <img src={ require('../../assets/images/chevron-left.png') } alt="left"/>
                </button>
            </div>
            <div className="keywords__content">
                {
                    keywordItems.map((item, idx) => (
                        <button key={item.id}>{item.keyword}</button>
                    ))
                }
            </div>
            <div className="keywords__button--right">
                <button id="right">
                    <img src={ require('../../assets/images/chevron-right.png') } alt="right"/>
                </button>
                <button><img id="more" src={ require('../../assets/images/more.png') } alt="more"/></button>
            </div>
        </div>
    )
}

export default Keywords;