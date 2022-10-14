const modal = document.querySelector('.modal');
const btnOpenPopup = document.querySelector('.btn_signup');
const img = document.getElementsByTagName('img');
const close = document.querySelector('.close');
const data = document.querySelector('.NameModal');
const nextBtn = document.querySelector('.signup_btn');

btnOpenPopup.addEventListener('click', () => {
    modal.style.visibility = 'visible';
    data.style.visibility = 'hidden';
    document.body.style = 'overflow: hidden';
    document.body.style.backgroundColor = 'rgba(0, 0, 0, 0.4)';
    
});

nextBtn.addEventListener('click', () => {
    data.style.visibility = 'visible';
    modal.style.visibility = 'hidden';
    document.body.style = 'overflow: hidden';
    document.body.style.backgroundColor = 'rgba(0, 0, 0, 0.4)';
});

close.addEventListener('click', () => {
    data.style.visibility = 'hidden';
    modal.style.visibility = 'hidden';
    document.body.style = 'block';
    document.body.style.background = 'white';
});

