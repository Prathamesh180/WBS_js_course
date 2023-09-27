// 1. Select all required elements
const form = document.querySelector('#new-item-form')
const list = document.querySelector('#list')
const input = document.querySelector('#item-input')

// 2. When I submit form add new item
form.addEventListener('submit', e => {
    e.preventDefault()

    // 1. Create new item to the list
    const item = document.createElement('div')
    item.classList.add('list-item')
    list.appendChild(item)
    item.innerText = input.value

    // 2. Clear value of previous item from input
    input.value = ''
    
    // 3. Delete item when delete button clicked
    item.addEventListener('click', () => {
        item.remove()
        // Below code will do same thing, remove item from list       
        // list.removeChild(item)
    })
})