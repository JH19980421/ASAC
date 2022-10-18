const region =document.querySelector(".job_detail_aside_like")
var img=region.querySelector('img');
var like=document.querySelector("#like_number");

var click_flag=false;

region.addEventListener("click",function(){

    let number = parseInt(like.innerText);

    if(!click_flag) {
        number = parseInt(number) + 1;  
        img.src="img/like2.png"
     }else {   
        number = parseInt(number) - 1;
        img.src="img/like.png"
     
     }
     like.innerText=number;

     click_flag =!click_flag;
})