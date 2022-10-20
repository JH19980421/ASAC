var page = 1;  //페이징과 같은 방식이라고 생각하면 된다. 
var company_list= document.querySelectorAll('.company_list .item');
var loading= document.querySelector('.loading');

const max_index=company_list.length;

var list_index=16;
for(;list_index<company_list.length;list_index++){
    company_list[list_index].style.display='none';
}
list_index=16;

let Lock=false;

window.addEventListener('scroll', function () {

    if (Lock)
        return;

    if (!Lock && this.scrollY >= document.body.scrollHeight - window.innerHeight) {
        Lock = true;

        loading.style.display='';
        setTimeout(function () {
            getList()
            loading.style.display='none';
            Lock = false;
        }, 1000);
    }

});



function getList(){
  
    if(list_index<max_index){
        var max=list_index+8;
        for(;list_index< max ;list_index++){
            company_list[list_index].style.display='block';
        }
    }
}
