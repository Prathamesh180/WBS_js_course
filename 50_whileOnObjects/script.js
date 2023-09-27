const person = {
    name: "Jay",
    friend: {
        name: "Om",
        friend: {
            name: "Shyam"
        }
    }
}

let currentPerson = person

// "===" Won't work
while(currentPerson.friend != null){
    currentPerson = currentPerson.friend
    if(currentPerson.friend == null){
        // console.log(currentPerson.name);
    }
}

// Getting 2nd last friend from person object.

currentPerson = person
while(currentPerson.friend.friend != null){
    currentPerson = currentPerson.friend
    if(currentPerson.friend.friend == null){
        // console.log(currentPerson.name);
    }
}



// # Using Recursion - Getting last friend's name

currentPerson = person
function getFriends(currentPerson){
    if(currentPerson.friend == null){
        console.log(currentPerson.name)
        return
    }

    getFriends(currentPerson.friend)
}

getFriends(currentPerson)