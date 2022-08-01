import { MongoContainer } from '../../db/container/index.js';

let instance = null

class CartMongo extends MongoContainer {
    constructor(){
        super('carts')
    }

    static getInstance(){
        if(!instance){
            instance = new CartMongo
        }

        return instance
    }
}

export { CartMongo }