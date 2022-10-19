const loginButton = document.querySelector('.login');
const backgroundHider = document.querySelector('.hider');
const modalContainer = document.querySelector('.login-modal');
const joinModalContainer = document.querySelector('.login-modal-join');
const closeModalButton = document.querySelectorAll('.login-modal-close');

const emailInput = document.querySelector('.email-input');

const gotoJoinModal = document.querySelector('.email-continue');
const completeJoin = document.querySelector('.join-submit');

const agreementAll = document.querySelector('.agreement input');
const agreementItems = document.querySelectorAll('.agreement-item-check input');
const agreementRequired = document.querySelector('.agreement-item-check:first-child input')


loginButton.addEventListener('click', () => {
    backgroundHider.style.display = 'block';
    backgroundHider.style.zIndex = 4;

    modalContainer.style.display = 'block';
    modalContainer.style.zIndex = 5;
});

closeModalButton.forEach((item) => {
    item.addEventListener('click', () => {
        backgroundHider.style.display = 'none';
        modalContainer.style.display = 'none';
        joinModalContainer.style.display = 'none';
    });
});

gotoJoinModal.addEventListener('click', () => {
    if(emailValidation(emailInput.value)) {
        joinModalContainer.style.display = 'block';
        joinModalContainer.style.zIndex = 6;
    } else {
        alert('이메일을 제대로 입력하세여');
    }
});

completeJoin.addEventListener('click', () => {
    if(!agreementRequired.checked) {
        alert('필수 항목 체크해얗마');
    } else {
        alert('회원가입완료');
        backgroundHider.style.display = 'none';
        modalContainer.style.display = 'none';
        joinModalContainer.style.display = 'none';
    }
})

backgroundHider.addEventListener('click', () => {
    modalContainer.style.display = 'none';
    joinModalContainer.style.display = 'none';
    backgroundHider.style.display = 'none';
});


emailValidation = (email) => {
    const regExp = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;

    return email.match(regExp)? true: false;
}


let isAllChecked = 0;
agreementAll.addEventListener('click', () => {
    if(!isAllChecked) {
        isAllChecked = 1;
        agreementItems.forEach((item) => {
            item.checked = true;
        });
    } else {
        isAllChecked = 0;
        agreementItems.forEach((item) => {
            item.checked = false;
        });
    }
});

agreementItems.forEach((item) => {
    item.addEventListener('click', () => {
        if(isAllChecked && !item.checked) {
            isAllChecked = 0;
            agreementAll.checked = false;
        }
    });
});