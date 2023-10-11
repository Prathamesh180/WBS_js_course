//1] "start": "parcel index.html" - helps run the code - Use npm start to run file.

//2] MOST IMP : It gives us production ready code and bundle files so that they run on all browsers even if they don't support modules.
// "build": "parcel build index.html" - Use npm run build to run.
// .map file in dist helps to map minified wierd code to source(normal) code.
// Dead code removal - Removes unused code.
// If you get any error related to parcer delete cache and dist folder.

import printUser, {me, brother} from "./user.js";
import {v4} from "uuid"

console.log(v4())
printUser(brother)