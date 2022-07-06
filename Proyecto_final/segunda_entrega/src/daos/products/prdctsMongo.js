import { MongoContainer } from '../../db/container/index.js';

class ProductsMongo extends MongoContainer {
    constructor(){
        super('products')
    }
}

export { ProductsMongo }