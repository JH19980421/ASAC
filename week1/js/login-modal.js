const loginButton = document.querySelector('.login');
const backgroundHider = document.querySelector('.hider');
const modalContainer = document.querySelector('.login-modal');
const joinModalContainer = document.querySelector('.login-modal-join');
const closeModalButton = document.querySelectorAll('.login-modal-close');

const gotoJoinModal = document.querySelector('.email-continue');


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
    joinModalContainer.style.display = 'block';
    joinModalContainer.style.zIndex = 6;
});

backgroundHider.addEventListener('click', () => {
    modalContainer.style.display = 'none';
    joinModalContainer.style.display = 'none';
    backgroundHider.style.display = 'none';
});