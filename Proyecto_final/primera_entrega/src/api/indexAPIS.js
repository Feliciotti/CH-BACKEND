import { ProductsFiles } from '../daos/products/productsFS.js';
import { ProductsMongo } from '../daos/products/productsMongo.js';

import { CartFiles } from '../daos/carts/cartFS.js';
import { CartMongo } from '../daos/carts/cartMongo';

const DATABASES = {
    files: {
        cartApi: new CartFiles(),
        productsApi: new ProductsFiles()
    },
    mongo: {
        cartApi: new CartMongo(),
        productsApi: new ProductsMongo()
    },
}

const DB = process.env.DB_TYPE || 'mongodb'

const {cartApi, productsApi} = DATABASES[DB]
export {cartApi, productsApi}