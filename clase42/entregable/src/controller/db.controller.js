import { ProductsFactory } from '../factory/products.factory.js';

//---- db assign ----
const DB = process.env.SELECTED_DB || 'mongo'

const productsDao = ProductsFactory.create(DB)

//---- TO CONTROLLERS ----
export { productsDao }