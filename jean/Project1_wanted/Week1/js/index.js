

var slides = document.querySelector('.slides');
slide = document.querySelectorAll('.slides li');
info =document.querySelector('#slideShow .banner_info');
currentIdx=1;
slideCount=slide.length;
prev = document.querySelector('.prev'); 
next = document.querySelector('.next'); 
slideWidth = 1060; 
slideMargin = 20; 


var balance;
var current;

inf_slide();

function inf_slide(){

var cloneN = slide[0].cloneNode(true);
cloneN.classList.add('clone');
slides.appendChild(cloneN);

var cloneN = slide[slideCount-1].cloneNode(true);
cloneN.classList.add('clone');
slides.prepend(cloneN);
///////////////////////////////////////

console.log('넓이설정');
var newSlides = document.querySelectorAll('.slides li');
var newSlidesCount = newSlides.length;
var newWidth =(slideWidth+slideMargin) * newSlidesCount + 20;
slides.style.width = newWidth + 'px';

////////////////////////////////

balance=(window.innerWidth-slideWidth )/2 - slideMargin  ;
current=  -(slideWidth +slideMargin) * 1 ;
slides.style.left = current+balance + 'px';
info.style.left=balance+50+ 'px';
//
setTimeout(function () {
    slides.classList.add('delay');
}, 100);

}

function changeOpacity() {

    var opacityValue = 0;
    info.style.opacity=opacityValue;

    function doChange() {
        if (++opacityValue >= 100) {
            return;
        }
        info.style.opacity = opacityValue / 100;
      
    };
    setInterval(doChange, 5);
};

next.addEventListener('click', function () {
moveSlide(currentIdx +1);
});

prev.addEventListener('click', function () {
moveSlide(currentIdx -1);
});

function moveSlide(idx){

changeOpacity();

currentIdx=idx;
current =-idx * (slideWidth+slideMargin);

slides.style.left =current + balance +'px';


console.log(currentIdx , slideCount);
if(currentIdx > slideCount){

    setTimeout(function () {
        slides.classList.remove('delay');
        current= -1 * (slideWidth+slideMargin);
        slides.style.left= current +balance+ 'px';
        currentIdx=1;
    }, 400);
    setTimeout(function () {
        slides.classList.add('delay');
    }, 500);

}
if(currentIdx == 0 || currentIdx == -1){
    setTimeout(function () {
        slides.classList.remove('delay');
        current= -5 * (slideWidth+slideMargin);
        slides.style.left=current +balance+ 'px';
        currentIdx=5;
    }, 400);
    setTimeout(function () {
        slides.classList.add('delay');
    }, 500);

}


}


window.onresize = function(event){
balance=(window.innerWidth-slideWidth )/2  - slideMargin ;
slides.style.left =   current + balance + 'px';
info.style.left=balance+50+ 'px';
console.log();
}








////////////modal