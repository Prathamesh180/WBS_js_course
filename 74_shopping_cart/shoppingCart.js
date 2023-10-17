import items from './items.json'
import addGlobalEventListener from './util/addGlobalEventListener'
import formatCurrency from './util/formatCurrency'

const cartButton = document.querySelector("[data-cart-button]")
const cartItemsWrapper = document.querySelector("[data-cart-items-wrapper]")
const IMAGE_URL = "https://dummyimage.com/210x130/"
let shoppingCart = []
const cartItemTemplate = document.querySelector("#cart-item-template")
const cartItemsContainer = document.querySelector("[data-cart-item-conatainer]")
const cartItemsCount = document.querySelector("[ data-cart-items-count]")
const totalPrice = document.querySelector("[data-total-price]")
const dataCart = document.querySelector("[data-cart]")
const removeFromCartButton = document.querySelector("[data-remove-from-cart-button]")
const SESSION_STORAGE_KEY = "SHOPPING_CART-cart"

export function setupShoppingCart(){
    addGlobalEventListener("click", "[data-remove-from-cart-button]", e => {
        const id = parseInt(e.target.closest("[data-item]").dataset.itemId)
        removeFromCart(id)
    })

    shoppingCart = loadCart()
    renderCart()
    
    cartButton.addEventListener("click", () => {
        cartItemsWrapper.classList.toggle("invisible")
})
}

function saveCart(){
    sessionStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(shoppingCart))
}

function loadCart(){
    const cart = sessionStorage.getItem(SESSION_STORAGE_KEY)
    return JSON.parse(cart) || []
}


export function addToCart(id){
    const existingItem = shoppingCart.find(entry => entry.id === id)
    if(existingItem){
        existingItem.quantity++
    }
    else{
        shoppingCart.push({id: id, quantity: 1})
    }
    renderCart()
    saveCart()
}

function removeFromCart(id){
    const existingItem = shoppingCart.find(entry => entry.id === id)
    if(existingItem == null) return 
    shoppingCart = shoppingCart.filter(entry => entry.id !== id)
    renderCart()
    saveCart()
}

function renderCart(){
    if(shoppingCart.length === 0){
        hideCart()
    }
    else{
        showCart()
        renderCartItems()
    }
}

function hideCart(){
    dataCart.classList.add("invisible")
    cartItemsWrapper.classList.add("invisible")
}

function showCart(){
    dataCart.classList.remove("invisible")
}

export function renderCartItems(){

    cartItemsCount.innerText = shoppingCart.length
    
    const totalAmountCents = shoppingCart.reduce
    ((sum, entry) => {
        const item = items.find(i => entry.id === i.id)
        return sum + item.priceCents * entry.quantity
    }, 0)

    totalPrice.innerText = formatCurrency(totalAmountCents / 100)

    cartItemsContainer.innerHTML = ""
    shoppingCart.forEach(entry => {
        const item = items.find(i => entry.id === i.id)
        const cartItem = cartItemTemplate.content.cloneNode(true)
    
        const container = cartItem.querySelector("[data-item]")
        container.dataset.itemId = item.id
    
        const name = container.querySelector("[data-name]")
        name.innerText = item.name
    
        const price = container.querySelector("[data-price]")
        price.innerText = formatCurrency((item.priceCents * entry.quantity) / 100)
    
        const image = container.querySelector("[data-image]")
        image.src = `${IMAGE_URL}${item.imageColor}/${item.imageColor}`    

        if(entry.quantity > 1){
            const quantity = container.querySelector("[data-quantity]")
            quantity.innerText = `x${entry.quantity}`
        }
    
        cartItemsContainer.appendChild(cartItem)
})
}

