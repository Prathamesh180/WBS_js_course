/*
let button = document.querySelector("button")

addClickEventListener(button, () => {
    console.log("clicked")
})

function addClickEventListener(element, callback){
    element.addEventListener("click", callback)
}
*/


/*
// [I] PROMISE
let promise = new Promise((resolve, reject) => {
    const sum = -1 + 3;
    if(sum === 2){
        resolve("success")
    }else{
        reject("error ocurred")
    }
})

promise
    .then(message => {
        console.log(message);
    })
    .catch(message => {
        console.error(message)
    })
    .finally(() => {
        console.log("finally")  //Executed in both success and failure great to clean up things.
    })
*/

// [II] - Callback Hell
/*
setTimeout(() =>{
    console.log("1");
    setTimeout(() => {
        console.log("2");
        setTimeout(() => {
            console.log("3");
        }, 250);
    }, 250)
}, 250)
*/

// Promise Hell
/*
setTimeoutPromise(250).then(() => {
    console.log("1");
    setTimeoutPromise(250).then(() => {
        console.log("2");
        setTimeoutPromise(250).then(() => {
            console.log("3");
        })
    })
})
*/

// Same above 2 things (callback and promise hells) is done by below code, without callback hell. Below one is more neat and readable.

// [III] - Promise Chaining - Neat and readable code format
/*
setTimeoutPromise(250).then(() => {
    console.log("1")
    return setTimeoutPromise(250)
}).then(() => {
    console.log("2")
    return setTimeoutPromise(250)
}).then(() => {
    console.log("3")
})

function setTimeoutPromise(duration){
    return new Promise((resolve, reject) =>{
    setTimeout(resolve, duration)
    })
}
*/


// Avoiding callbacks and using promises resolve
const button = document.querySelector("button")

addEventListenerPromise(button, "click").then((e) => {
    console.log("clicked");
    console.log(e);
})

function addEventListenerPromise(element, method){
    return new Promise((resolve, reject) => {
        element.addEventListener(method, resolve)
    })
}

// If any one fail not any then is executed.
// Promise.any([   //Executes 1st one that succeed
// Promise.race([  //Executes 1st succeed or fail not matter
// Promise.all([   //Exuceted only if all succeeds
//Waits for all, gives reason if fails and value if succeeds.

Promise.allSettled([
    Promise.resolve("1"),
    Promise.reject("Failed for 2"),
    Promise.resolve("3")
])
.then(message => console.log(message))
.catch(message => console.error(message))
.finally(() => console.log("finally"))  //Executes in both success and failure, great to clean up things.