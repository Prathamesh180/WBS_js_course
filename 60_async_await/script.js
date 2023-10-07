// In async await error is accessed using catch of try-catch block
/*
function setTimeoutPromise(delay){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("error")
        }, delay)
    })
}

async function doStuff(){
    try{
        const message = await setTimeoutPromise(250)
        console.log(message);
        const message2 = await setTimeoutPromise(250)
        console.log(message2);
    }
    catch (error){
        console.error(error);
    }
}

doStuff()
*/

function getValueWithDelay(value, delay){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(value)
        }, delay)
    })
}

function getValueWithDelayError(value, delay){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('error')
        }, delay)
    })
}

/*
async function call(){
    try{
        const message = await getValueWithDelay("Jay", 250)
        console.log(message)
        const message2 = await getValueWithDelay("Ram", 250)
        console.log(message2)
        const message3 = await getValueWithDelayError("Ram", 250)
        console.log(message2)
    }
    catch (error){
        console.error(error);
    }
    finally {
        console.log("finished");
    }
}

call()
*/

getValueWithDelay("jay", 250).then(value => console.log(value))
getValueWithDelay("Ram", 250).then(value => console.log(value))
getValueWithDelay("Shyam", 250).then(value => console.log(value))
