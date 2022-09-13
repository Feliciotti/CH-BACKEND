import {
    ProductsFactory,
    CartsFactory,
    OrdersFactory
} from '../factory/index.factory.js';

//---- db assign ----
const DB = process.env.SELECTED_DB || 'mongo'

const productsDao = ProductsFactory.create(DB)
const cartsDao = CartsFactory.create(DB)
const ordersDao = OrdersFactory.create(DB)

// -------------------------------
export { productsDao, cartsDao, ordersDao} // to /web controllers