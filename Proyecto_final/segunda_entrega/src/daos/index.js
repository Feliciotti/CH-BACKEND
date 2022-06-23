import { CartFiles } from './carts/cartFS.js';
import { CartMongo } from './carts/cartMongo.js';

import { ProductsFiles } from './products/productsFS.js';
import { ProductsMongo } from './products/productsMongo.js';

const DB = process.env.SELECTED_DB || 'mongo'

let productsDao
let cartDao

switch(DB){
    case 'mongodb': 
        productsDao = new CartMongo()
        cartDao = new ProductsMongo()
        break
    
    default:
        productsDao = new CartFiles()
        cartDao = new ProductsFiles()
        break      
}

export { productsDao, cartDao }