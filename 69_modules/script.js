// Some Rules to remember :-

// * Some browsers don't support modules so we can use
//   seperate script tag for those using type="nomodule"
// # But this is not commonly used, Instead we use Bundles.

// 1. variables like const should have export on same line.
//    But by default can be exported from end of file.
// 2. funtion can be exported by default or normal from same
//    line and end as well.

export const me = {
    name: "prathamesh",
    age: 21
}

export const friend = {
    name: "Ram",
    age: 1/0
}

export default function printInfo(user){
    console.log(`Name is ${user.name} and age is ${user.age}.`);
}

// export me                // Not allowed
// export default me        // Allowed
// export printInfo         // Allowed
// export default me        // Allowed