/* Some most common Events
 click, mouseenter, mouseover, mouseleave, focus, blur
 window.resize() //event when window is resized. */

document.addEventListener('submit', (e) => {
    // Line below prevents its default behaviour, i.e going to other page.
    e.preventDefault();
    console.log("submitted");
})

const link1 = document.querySelector("a");
link1.addEventListener("click", e => {
    e.preventDefault();
    console.log('prevented default')
})