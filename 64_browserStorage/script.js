// Local storage    | Cookies           | Session Storage
// 10MB             | 4KB               | 5MB
// Never Expires    | Manual Expiration | Expires on tab close
// Client           | Client and Server | Client
// Easy             | Hard              | Easy

// Primarily try to use localStorage
// If want to send data to server then only use cookies
// If want expiration use sessionStorage


// Setting value
localStorage.setItem("Name", "Prathamesh")
localStorage.setItem("surname", "Jayale")
sessionStorage.setItem("Current Location", "Pune")
sessionStorage.setItem("Location", "Pune")

// Updating value
localStorage.setItem("Name", "Pratham")

// Accessing value
localStorage.getItem("Name")
sessionStorage.getItem("Location")

// Removing value
localStorage.removeItem("Name")



// COOKIES - Setting value
// Convert the date in the string format using UTCString()
const date = new Date(2024, 3, 2).toUTCString()
const pastDate = new Date(2020, 3, 2).toUTCString()

document.cookie = `Age=21; expires=${date}`

// Adding new cookie
document.cookie = `name=Pratham; expires=${date}`

// Deleting cookie - 1]Set value to blank & date to date in
// history (past date)
document.cookie = `name=; expires=${pastDate}`

console.log(document.cookie);