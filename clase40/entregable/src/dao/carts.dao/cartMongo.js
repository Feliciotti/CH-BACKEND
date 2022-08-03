import { MongoApi } from '../../service/index.js';

class CartMongo extends MongoApi {
    constructor(){
        super('carts')
    }
    
}

export { CartMongo }