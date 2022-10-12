const container = document.querySelector('.result');
const loading = document.querySelector('.loading');


const showLoadingImage = () => {
    loading.className = 'loading';
    loading.style.display = 'block';
}

const hideLoadingImage = () => {
    loading.style.display = 'none';
}

const showResult = () => {
    const newDiv = document.createElement('div');
    newDiv.innerText = '로딩 완료!'
    container.appendChild(newDiv); 
}



setTimeout(() => {
    hideLoadingImage();
    showResult();

}, 3000);



showLoadingImage();