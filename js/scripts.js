const elForm = document.querySelector(".todo-form");
const elInput = document.querySelector(".todo-input");
const elList = document.querySelector(".todo-list");
const elTemplate = document.querySelector("#todo-item--template").content;

let todosArr = []

function deleteBtn(e){
    const todoId = e.target.dataset.uuid

    let findIndex = todosArr.findIndex((elem) => elem.id == todoId);

    todosArr.splice(findIndex, 1);

    renderTodo(todosArr, elList);
}

function renderTodo(todoArr, element){

    element.innerHTML = null;

    todoArr.forEach((todo) =>{
        const cloneTemplate = elTemplate.cloneNode(true);

        const elTitle = cloneTemplate.querySelector('.todo-item-complete-text');
        const elDeleteBtn = cloneTemplate.querySelector('.todo-item-delete-btn');
        const elCheckbox = cloneTemplate.querySelector('.todo-input-complete');

        elTitle.textContent = todo.title,
        elCheckbox.checked = todo.isCompeted,
        elDeleteBtn.dataset.uuid = todo.id

        elDeleteBtn.addEventListener('click', deleteBtn);

        element.appendChild(cloneTemplate)
    })
}

elForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const inputValue = elInput.value.trim()

    todosArr.push({
        id: todosArr.length,
        title: inputValue,
        isCompeted: false
    })

    renderTodo(todosArr, elList);

    elInput.value = null;
})
