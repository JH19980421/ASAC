const keywordContainer = document.querySelector('.keywords-container');
const keywordDiv = document.querySelector('.keywords');
const keywordItems = document.querySelectorAll('.keywords button');
const keywordPrevButton = document.querySelector('.etc-container-left');
const keywordNextButton = document.querySelector('.etc-container #right');
const etcContainer = document.querySelector('.etc-container');

const keywordContainerWidth = keywordContainer.clientWidth;
const keywordDivWidth = keywordDiv.clientWidth;
const keywordCount = keywordItems.length;
const keywordListLastIndex = keywordCount - 1;

let currentKeywordLeft = 0;
const keywordDivEnd = keywordDivWidth - keywordContainerWidth;


const hideKeywordLeftButton = () => {
    keywordPrevButton.style.visibility = 'hidden';
}
const showKeywordLeftButton = () => {
    keywordPrevButton.style.zIndex = 3;
    keywordPrevButton.style.visibility = 'visible';
}
const hideKeywordRightButton = () => {
    keywordNextButton.style.visibility = 'hidden';
}
const showKeywordRightButton = () => {
    keywordNextButton.style.zIndex = 3;

    keywordNextButton.style.visibility = 'visible';
}

const handleKeywordButtons = (current) => {
    if(current === 0) {
        hideKeywordLeftButton();
    } else if(current === keywordDivEnd){
        hideKeywordRightButton();
    } else {
        showKeywordLeftButton();
        showKeywordRightButton();
    }
}


keywordNextButton.addEventListener('click', () => {
    keywordDiv.style.transition = 'transform 0.3s ease-out';
    
    currentKeywordLeft = Math.min(currentKeywordLeft+250, keywordDivEnd);
    if(currentKeywordLeft === keywordDivEnd) {
        keywordDiv.style.transform = `translate(-${keywordDivEnd+40}px, 0)`;
    } else {
        keywordDiv.style.transform = `translate(-${currentKeywordLeft}px, 0)`;        
    }
    
    handleKeywordButtons(currentKeywordLeft);
});

keywordPrevButton.addEventListener('click', () => {
    keywordDiv.style.transition = 'transform 0.3s ease-out';
    
    currentKeywordLeft = Math.max(currentKeywordLeft-250, 0);
    if(currentKeywordLeft < 0) {
        keywordDiv.style.transform = `translate(0, 0)`;
    } else {
        keywordDiv.style.transform = `translate(-${currentKeywordLeft}px, 0)`;
    }

    handleKeywordButtons(currentKeywordLeft);
});