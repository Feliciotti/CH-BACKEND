import { FScontainer } from "./class.js";

const productsApi = new FScontainer("./files/products.json");
const cartsApi = new FScontainer("./files/carts.json");

export { productsApi, cartsApi };