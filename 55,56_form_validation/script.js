// TODO: Select all elements needed
//    Use the HTML to figure out what classes/ids will work best for selecting each element
const form = document.querySelector("#form")
const username = document.querySelector("#username")
const password = document.querySelector("#password")
const passwordConfirmation = document.querySelector("#password-confirmation")
const terms = document.querySelector("#terms")
const errorsList = document.querySelector(".errors-list")

// TODO: Create an event listener for when the form is submitted and do the following inside of it.
form.addEventListener("submit", e => {

    //    TODO: Create an array to store all error messages and clear any old error messages
    let errorListArray = []

    //    TODO: Define the following validation checks with appropriate error messages
    //      1. Ensure the username is at least 6 characters long

    if(username.value.length < 6){
        // Make sure to use an li as the element for each error

        errorListArray.push("Username must be atleast 6 character long.")
    }
    
    //      2. Ensure the password is at least 10 characters long
    if(password.value.length < 10){
    // Make sure to use an li as the element for each error

        errorListArray.push("Password must be atleast 10 characters long.")
    }
    
    //      3. Ensure the password and confirmation password match
    if(passwordConfirmation.value !== password.value){
        errorListArray.push("Both passwords should match.")
    }
    
    //      4. Ensure the terms checkbox is checked
    if(!terms.checked){
        errorListArray.push("You must follow the terms.")
    }
    
    //    TODO: If there are any errors then prevent the form from submitting and show the error messages
    if(errorListArray.length > 0){
        e.preventDefault()
        
    // Also, make sure you add the show class to the errors container
        errorsList.parentElement.classList.add("show")
    }
    else{
        // Also, make sure you remove the show class to the errors container
        errorsList.parentElement.classList.remove("show")

        form.submit();
    }
    
    // Removing all errors from list to start again adding.
    //To cover any changes and preventing new errors from stacking on previous, causing addition of new errors and not replacing of old with new ones.
    clearErrors()

    // Adding errors to list, Also adding errors again on submit if some changes in form.
    showErrors(errorListArray)

})

// TODO: Define this function
function clearErrors() {
    // Loop through all the children of the error-list element and remove them
    // IMPORTANT: This cannot be done with a forEach loop or a normal for loop since as you remove children it will modify the list you are looping over which will not work
    // I recommend using a while loop to accomplish this task
    // This is the trickiest part of this exercise so if you get stuck and are unable to progress you can also set the innerHTML property of the error-list to an empty string and that will also clear the children. I recommend trying to accomplish this with a while loop, though, for practice.
    
    while(errorsList.firstChild){
        errorsList.removeChild(errorsList.firstChild);
    }
  }
  
  // TODO: Define this function
  function showErrors(errorMessages) {
    // Add each error to the error-list element
    
    errorMessages.forEach(errorMessage =>{
        const li = document.createElement("li")
        li.textContent = errorMessage
        errorsList.appendChild(li)
    })
}
