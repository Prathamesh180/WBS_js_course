// User clicks on button
document.addEventListener("click", e => {
    const button = e.target;
    if(!button.matches("button")) return
    
    const card = button.closest(".card")
    const cardBody = card.querySelector('.card-body')
    
    // depending on value of button, change display of content

    // Directly use toggle method instead of Below code.
    cardBody.classList.toggle("show")
    button.innerText = button.innerText === 'Expanded' ? 'Collapse' :'Expanded'

    // if(button.innerText === "Expand"){
    //     cardBody.classList.add("show")
    //     button.innerText = "Collapse"
    // }
    // else{
    //     cardBody.classList.remove("show")
    //     button.innerText = "Expand"
    // }
})
