import { CartFiles } from './carts/cartFS.js';
import { CartMongo } from './carts/cartMongo.js';
import { CartSQL, cartSQL } from './carts/cartSQL.js';

import { ProductsFiles } from './products/productsFS.js';
import { ProductsMongo } from './products/productsMongo.js';
import { ProductsSQL } from './products/productsSQL.js';

const DATABASES = {
    files: {
        cartApi: new CartFiles(),
        productsApi: new ProductsFiles()
    },
    mongo: {
        cartApi: new CartMongo(),
        productsApi: new ProductsMongo()
    },
    SQL: {
        cartApi: new CartSQL(),
        productsApi: new ProductsSQL()
    }
}

const DB = process.env.SELECTED_DB || 'mongo'

const {cartApi, productsApi} = DATABASES[DB]

export {cartApi, productsApi};