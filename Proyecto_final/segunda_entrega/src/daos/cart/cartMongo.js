import { MongoContainer } from '../../db/container/index.js';

class CartMongo extends MongoContainer {
    constructor(){
        super('carts')
    }
}

export { CartMongo }