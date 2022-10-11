let inputBox = document.querySelector('#inputBox');
const addTodo = document.querySelector('#addTodo');
const todoList = document.querySelector('#todoList');

let listItem = todoList.children;

addTodo.addEventListener('click', () => {
    const list = document.createElement('li');

    if(!inputBox.value) {
        alert('할일을 입력해주세요!');
    } else {
        list.innerText = inputBox.value;
        list.className = 'list-item';
        todoList.appendChild(list);
        inputBox.value = '';
        // console.log(listItem);
    }

    list.addEventListener('click', () => {
        console.log(list);
        list.style.textDecoration = 'line-through';
    });
    list.addEventListener('dblclick', () => {
        todoList.removeChild(list);
        console.log(`deleted todo ${list}`);
    })
});

