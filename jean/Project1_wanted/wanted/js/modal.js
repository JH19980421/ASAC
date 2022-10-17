const loremIpsum = document.getElementById("lorem-ipsum")


const modal = document.getElementById("modal")
const body =modal.querySelector('.modal-body')
const intput_body =modal.querySelector('.modal_input_body')

const input = modal.querySelector(".login_email_button")
const header_title =document.querySelector('.modal-header h1');
const header_img =document.querySelector('.modal-header img');
const email = body.querySelector(".email_inputobx input")
const email_error = body.querySelector(".email_error")


function modalOn() {
    header_title.innerHTML=""
    header_img.style.display='block'
    modal.querySelector('.email_inputobx input').value="";
    modal.style.display = "block"
    body.style.display = 'block'; 
    intput_body.style.display ='none';
    email.style.border  = "1px solid #999999";
    email_error.style.display='none';
}

function isModalOn() {
    return modal.style.display === "block"
}

function modalOff() {
    modal.style.display = "none"
}


const btnModal = document.getElementById("btn-modal")
btnModal.addEventListener("click", e => {
    modalOn()
})

const closeBtn = modal.querySelector(".close-area")
closeBtn.addEventListener("click", e => {
    modalOff()
})


function FailEmail()
{
    email.style.border  = "1px solid red";

    console.log(email.style.border)
    email_error.style.display='block';
}
function CheckEmail()
{                        
   
    var str = email.value
     var reg_email = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
     if(!reg_email.test(str)) {  
        FailEmail();                          
          return false;         
     }                           
     else {                       
          return true;         
     }                            
}                                


input.addEventListener("click", e => {
    if(!CheckEmail())
        return;

    header_title.innerHTML="회원가입"
    header_img.style.display="none"
    body.style.display ='none';
    intput_body.style.display ='block';
})

// modal 밖 클릭 동작
modal.addEventListener("click", e => {
    const evTarget = e.target
    if(evTarget.classList.contains("modal-overlay")) {
        modalOff()
    }
})

function chageLangSelect(){  
    var langSelect = modal.querySelector(".inputobx select");  
      
    // select element에서 선택된 option의 value가 저장된다.  
    var selectValue = langSelect.options[langSelect.selectedIndex].value;
    if (langSelect.selectedIndex==0){
        langSelect.options[langSelect.selectedIndex].text ='+82 대한민국'
    }
}

    