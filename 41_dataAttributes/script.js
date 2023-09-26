// Data attr r used to store data in elements to use in JS.
// Allow us to change things with css

const btn = document.querySelector("[data-test]")
btn.addEventListener("click", e => {
    console.log(btn.dataset);
    console.log("clicked");
})

// Adds a new dataset to element
// btn.dataset.name = 'hello';
// console.log(btn.dataset);

const clickBtn = document.querySelectorAll("[data-clicks]")
clickBtn.forEach(button => {
    button.addEventListener('click', e => {
        let cnt = parseInt(button.dataset.clicks);
        button.dataset.clicks = cnt + 1;
    })
})