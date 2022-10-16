var start = document.querySelector('.start');
var loading = document.querySelector('.loading');
var img = document.querySelector('.loading img');

img.style.width=500+'px';
img.style.height=500+'px';


start.addEventListener('click',function(){

    img.src = 'img/loading.gif';
    loading.style.display = 'block';
    setTimeout(function () {  
        img.src = 'img/completed.png';
    }, 2000);

});