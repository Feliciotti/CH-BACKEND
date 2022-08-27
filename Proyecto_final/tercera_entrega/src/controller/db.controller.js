import { ProductsFactory } from '../factory/products.factory.js';
import { CartsFactory } from '../factory/carts.factory.js';

//---- db assign ----
const DB = process.env.SELECTED_DB || 'mongo'

const productsDao = ProductsFactory.create(DB)
const cartsDao = CartsFactory.create(DB)

// -------------------------------
export { productsDao, cartsDao} // to /web controller