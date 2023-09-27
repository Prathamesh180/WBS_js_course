/*
TODO: 2. Select the elements with the following IDs
    * modal
    * open-modal-btn
    * close-modal-btn
    * Bonus: overlay
*/
const modal = document.querySelector('#modal')
const openBtn = document.querySelector('#open-modal-btn')
const closeBtn = document.querySelector('#close-modal-btn')
const overlay = document.querySelector('#overlay')

// TODO: 3. Create a click event listener for the open-modal-btn that adds the class "open" to the modal
// Bonus: Also add the class "open" to the overlay
openBtn.addEventListener('click', () => {
    modal.classList.add('open')
    overlay.classList.add('open')
})

// TODO: 4. Create a click event listener for the close-modal-btn that removes the class "open" from the modal
// Bonus: Also remove the class "open" from the overlay
closeBtn.addEventListener('click', closeModal)

// Bonus: Add a click event listener to the overlay that removes the class "open" from the modal and the overlay
overlay.addEventListener('click', closeModal)

function closeModal(){
    modal.classList.remove('open')
    overlay.classList.remove('open')
}
