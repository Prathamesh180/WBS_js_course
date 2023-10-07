/*
Event delegation -
1)By default it is in bubble mode i.e. closest to farthest element.
2)In capture mode it's farthest to closest.

 # To enable capture mode add {capture : true} as 3rd argument in addEventListener()
*/

/*
const buttons = document.querySelectorAll("button")

document.addEventListener("click", () => {
    console.log("Document clicked")
})

document.body.addEventListener("click", e => {
    e.stopPropagation();      //Stops further delegation of event.
    console.log("Body clicked");
})

buttons.forEach(button => {
    button.addEventListener("click", () => {
        console.log("Button clicked");
    })
})
*/


// PROBLEM: Below code (event listener) doesn't apply on newly 
// added(5th) button, as it's added later to adding event listener.

// SOLUTION: Use event delegation, apply listener on document and 
// Use if(e.target.matches()){} to aviod document clicks and get 
// event only on buttons. Can also use classes for more specificity.

/*
const buttons = document.querySelectorAll("button")
buttons.forEach(button => {
    button.addEventListener("click", () => {
        console.log("Button clicked");
    })
})
*/

document.addEventListener("click", e => {
    if(e.target.matches("button")){
        console.log(e.target.textContent);
    }
})

const newButton = document.createElement("button")
newButton.textContent = "button 5"
document.body.appendChild(newButton)
