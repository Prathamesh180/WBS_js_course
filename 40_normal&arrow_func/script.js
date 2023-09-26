const btn = document.querySelector('button')

// Arrow functions are declared in global scope hence, this = window
// Always use arrow functions as they have normal scoping.
btn.addEventListener('click', e => {
    console.log("arrow function");
    console.log(this);
})

btn.addEventListener('click', function(e){
    console.log("normal function");
    // Here this refers to place where this fuction is called
    // NEVER EVER use this to get current element use e.target
    console.log(e.target);
    console.log(this);
})