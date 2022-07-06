import { CartFS } from './cart/cartFS.js';
import { CartMongo } from './cart/cartMongo.js';
import { CartFirebase } from './cart/cartFirebase.js';

import { ProductsFS } from './products/prdctsFS.js';
import { ProductsMongo } from './products/prdctsMongo.js';
import { ProductsFirebase } from './products/prdctsFirebase.js';

const DATABASES = {
    mongo: {
        cartApi: new CartMongo(),
        productsApi: new ProductsMongo()
    },
    firebase: {
        cartApi: new CartFirebase(),
        productsApi: new ProductsFirebase()
    },
    archivo: {
        cartApi: new CartFS(),
        productsApi: new ProductsFS()
    }
}

const DB = process.env.SELECTED_DB

const {cartApi, productsApi} = DATABASES[DB]

export {cartApi, productsApi}