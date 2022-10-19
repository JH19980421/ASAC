const menuBar = document.querySelector('.menu');
const containerTop = document.querySelector('.container-top');
const menuExpand = document.querySelector('.menu-expand');


menuBar.addEventListener('mouseover', () => {
    menuExpand.style.display = "block";
});
menuBar.addEventListener('mouseout', () => {
    setTimeout(() => {
        menuExpand.style.display = "none";
    }, 100);
});
