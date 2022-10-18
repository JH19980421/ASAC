
const modal = document.querySelector('.modal');
const btnOpenPopup = document.querySelector('.btn_signup');
const img = document.getElementsByTagName('img');
const x = document.querySelector('.close');
const data = document.querySelector('.NameModal');
const nextBtn = document.querySelector('.signup_btn');
const jobprocess = document.querySelector('.JobProcess_container');

const open1 = function(){
    modal.style.visibility = 'visible';
    data.style.visibility = 'hidden';
    jobprocess.style.display = 'none';
    document.body.style = 'overflow: hidden';
    document.body.style.backgroundColor = 'rgba(0, 0, 0, 0.4)';
};

const open2 = function(){
    data.style.visibility = 'visible';
    modal.style.visibility = 'hidden';
}

btnOpenPopup.addEventListener('click', open1);
nextBtn.addEventListener('click', open2);

x.addEventListener('click', () => {
    btnOpenPopup.removeEventListener('click',open1);
});


