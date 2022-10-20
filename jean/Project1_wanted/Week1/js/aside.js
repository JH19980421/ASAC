const main = document.querySelector('.job_detail_contents');
const aside =document.querySelector('.job_detail_aside');

const main_height =main.clientHeight;
const aside_height = aside.clientHeight;

function init(){
    aside.style.top= 70 + 'px';
    aside.style.position = 'fixed';
}
function fixed(){
    aside.style.top= main_height-aside_height + 'px';
    aside.style.position = 'absolute';
}

window.onload = () => {
    window.addEventListener("scroll", function () {     
        const scroll = window.pageYOffset +aside.clientHeight;

        if(scroll>main_height - 500){
            fixed();
        }
        else{
            init();
        }
    });
};