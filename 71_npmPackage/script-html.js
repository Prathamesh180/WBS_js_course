// Hence as we have seen using node modules in browser is very difficult than node.
// Hence we use bundles which handles all complexities and make our work easy.

import {v4} from "./node_modules/uuid/dist/esm-browser/index.js"
console.log(v4())