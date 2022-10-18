
const joblist =document.querySelectorAll('.joblist');
const dropdown_joblist=joblist[0].querySelector('.dropdown_joblist');
const list=dropdown_joblist.children;
const message=document.querySelector('.message');
const sub_joblist=joblist[1].querySelector('#sub_joblist');

console.log(sub_joblist);
function selectList(event) {
    message.style.display='none';
    sub_joblist.innerHTML=event.currentTarget.innerText + " 전체";
    joblist[1].style.display='block';
}
for (let i = 0; i < list.length; i++) {
    list[i].addEventListener('click', selectList);
}




let click_check=false;
joblist[0].addEventListener('click', function () {
    var str
    if (!click_check)
        str = "block";
    else
        str = "none";

    dropdown_joblist.style.display = str;
    click_check = !click_check
})