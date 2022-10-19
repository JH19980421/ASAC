const floatingContainer = document.querySelector('.floating');


// const currentLoaction = 


floatingContainer.style.cursor = 'pointer';

// floatingContainer.addEventListener('click', () => {
//     console.log('scroll', window.scrollY);
// });

    
window.onscroll = () => {
    if(window.scrollY > 2260) {
        floatingContainer.style.position = 'absolute';
        floatingContainer.style.top = '280%';
    } else {
        floatingContainer.style.position = 'fixed';
        floatingContainer.style.top = '9%';
    }
}