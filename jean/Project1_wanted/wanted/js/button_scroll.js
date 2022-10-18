const select = document.querySelector('.select');
const select_scroller = select.querySelector('.slide');
const select_item_size = 300;

const select_next= document.querySelector('.select_next');
const select_prev= document.querySelector('.select_prev');

var select_idx=0;


moveSelectSlide(0);

select_next.addEventListener('click', function () {
    moveSelectSlide(select_idx +1);
});
select_prev.addEventListener('click', function () {
    moveSelectSlide(select_idx -1);
});

function moveSelectSlide(idx) {

    if (idx < 7 && idx > 0) {
        select_scroller.style.left = -idx * select_item_size+5 + 'px';
        select_idx=idx;
        select_prev.style.display='';
        select_next.style.display='';
    }
    if(idx==6){
        select_next.style.display='none';
        select_prev.style.display='';
    }
    if(idx==0){
        select_next.style.display='';
        select_prev.style.display='none';
    }
}