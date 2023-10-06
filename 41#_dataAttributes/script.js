/*      IMPORTANT 
 Data attributes are used to store data in elements(html) to use in JS.
 Allow us to change things with CSS.
*/

const btn = document.querySelector("[data-test]")
btn.addEventListener("click", e => {
    console.log(btn.dataset);
    console.log("clicked");
})

// To add a new dataset to element :-
// btn.dataset.name = 'hello';
// console.log(btn.dataset);

const clickBtn = document.querySelectorAll("[data-clicks]")
clickBtn.forEach(button => {
    button.addEventListener('click', e => {
        let cnt = parseInt(button.dataset.clicks);
        button.dataset.clicks = cnt + 1;
    })
})