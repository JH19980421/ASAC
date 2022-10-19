const floatingContainer = document.querySelector('.floating');

const likesContainer = document.querySelector('.likes');
const likesImage = document.querySelector('.likes img');
const likesCount = document.querySelector('.likes-count');

    
window.onscroll = () => {
    if(window.scrollY > 2260) {
        floatingContainer.style.position = 'absolute';
        floatingContainer.style.top = '280%';
    } else {
        floatingContainer.style.position = 'fixed';
        floatingContainer.style.top = '9%';
    }
}

let likeClicked = 0;
likesContainer.addEventListener('click', () => {
    likesImage.src = likeClicked? "./assets/images/heart.png": './assets/images/heart-filled.png';
    likesCount.innerHTML = likeClicked? parseInt(likesCount.innerHTML)-1: parseInt(likesCount.innerHTML)+1;
    likeClicked = likeClicked? 0: 1;
});

