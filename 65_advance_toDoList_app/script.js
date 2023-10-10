// We want event on form submission and not button click.
// As button click will not always work. Hence form.
const form = document.querySelector('#new-todo-form')
const input = document.querySelector('#todo-input')
const list = document.querySelector('#list')
const template = document.querySelector('#list-item-template')
// LocalStorage is site dependent.
// During development we run our all sites on localhost.
// Hence all sites share same localStorage.
// This can cause conflict if we have same value to keys of
// variables from two different projects.
// This may lead to old variable value replacing new one.
// So add "project name related Prefix" to each key in localStorage.
const LOCAL_STORAGE_PREFIX = 'ADVANCED_TODO_LIST'
const TODOS_STORAGE_KEY = `${LOCAL_STORAGE_PREFIX}-todos`
// To save todos in javascript
let todosArray = loadTodos()
// Automatically passes each array item to renderTodo function.
todosArray.forEach(renderTodo)

list.addEventListener("change", e => {
    if(!e.target.matches("[data-list-item-checkbox]")) return

    // Get the todo that is clicked on
    const parent = e.target.closest(".list-item")
    const todoId  = parent.dataset.todoId
    const todo = todosArray.find(t => t.id === todoId)
    todo.completed = e.target.checked
    saveTodos()
})

list.addEventListener("click", e => {
    if(!e.target.matches("[data-button-delete]")) return

    const parent = e.target.closest(".list-item")
    const todoId = parent.dataset.todoId
    // Remove todo from screen
    parent.remove()
    // Remove todo from list
    todosArray = todosArray.filter(todo => todo.id !== todoId)
    console.log(todosArray);
    saveTodos()
})

//1. Add todos
// User will type text in input and clicks add todo button.
form.addEventListener('submit',e => {
    e.preventDefault()

    const todoName = input.value
    if(todoName === '') return
    const newTodo = {
        name: todoName,
        completed: false,
        id: new Date().valueOf().toString()
    }
    
    todosArray.push(newTodo)
    renderTodo(newTodo)
    saveTodos()
    input.value = ''
})

// Then todo get added to the list.
function renderTodo(newTodo){
    const templateClone = template.content.cloneNode(true)
    const textElement = templateClone.querySelector('[data-list-item-text')
    const todoItem = templateClone.querySelector('.list-item')
    const checkbox = templateClone.querySelector("[data-list-item-checkbox]")
    checkbox.checked = newTodo.completed
    todoItem.dataset.todoId = newTodo.id
    textElement.innerText = newTodo.name
    list.appendChild(templateClone)
}

// Load todos
function loadTodos(){
    const todosString = localStorage.getItem(TODOS_STORAGE_KEY)
    return JSON.parse(todosString) || []
}

// Save todos
function saveTodos(){
    localStorage.setItem(TODOS_STORAGE_KEY, JSON.stringify(todosArray))
}

// Delete todos