let inputBox = document.getElementsByClassID("inputBox")
let addTodo = document.getElementsByClassID("addTodo")
let todoList = document.getElementsByClassID("todoList")

addTodo.addEventListener("click",function(){
    const list = document.createElement("li");
    if(inputBox.value)
        alert("할일을 입력해주세요!")
    else{
        list.innerText = inputBox.value;
        todoList.appendChild(list);
        inputBox.value=""
    }

    list.addEventListener("click",function(){
        list.style.textDecoration = "line-through;"
    })

    list.addEventListener("bdlclick",function(){
        todoList.removeChild(list);
    })


})