import { FScontainer } from "./container/class.js";

let nw = new FScontainer('./files/products.json')

// console.log(await nw.getAll());

console.log(await nw.deleteById(1));