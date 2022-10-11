let inputobx =document.getElementById("inputBox");

let addtodo = document.getElementById("addtodo");

let todolist = document.getElementById("todolist");

addtodo.addEventListener("click",function(){

    const list = document.createElement("li");

    if (!inputobx.value)
        alert("데이터 없음");
    else {
        list.innerText = inputobx.value;
        todolist.appendChild(list);
        inputobx.value = "";
    }
    
    list.addEventListener("click", function () {
        var deco = list.style.textDecoration;
        if (deco == 'underline') {
            list.style.textDecoration = 'none';
        }
        else {
            list.style.textDecoration = 'underline';
        }
    })


    list.addEventListener("dblclick", function () {
        todolist.removeChild(list);
    })


})


    