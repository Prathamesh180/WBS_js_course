/* 
1] OR (||) is used to get/give Default things.
Here we are printing message 
    Working :- 
    1)if no message present printing greetings
    2)if no greetings present printing default message.
    *Without shortCircuiting we need to use if,
    Which is more complex and big in size. 

2]AND [&&] is used for (1)Checking that all conditions are true & and (2)accessing these values only if all are true.
    Working :- 
    1)Gives ans only if all things are present else false.

*/

const inbox = {
    // msg: "Hi Ram, please call me in evening.",
    // greetings: " 🌝🌞 Suprabhat"
    defaultMsg : "No Messages"
} 

// Avoid these many lines of code.

// if(inbox.msg!=null) console.log(inbox.msg);
// else if(inbox.greetings!=null) console.log(inbox.greetings);
// else console.log(inbox.defaultMsg);

function printMsg(obj){
    console.log(obj.msg || obj.greetings || obj.defaultMsg);
}

printMsg(inbox)

/*
AND [&&] is used for following reason
Checking that all conditions are true & and accessing these values.
*/

const person = {
    name: "Hari",
    // address: {
    //     city: "Aodhya",
    //     street: "Rajpath"
    // }
}

// Checking presence of each property and getting street.
function getstreet(currentPerson){
    console.log(currentPerson && currentPerson.address && currentPerson.address.street);
}
getstreet(person)