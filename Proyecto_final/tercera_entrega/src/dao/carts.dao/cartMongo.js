import { MongoContainer } from '../index.js';

// ------- SINGLETON -------
let instance = null
// -------------------------

class CartMongo extends MongoContainer {
    constructor(){
        super('carts')
    }

    // ------- SINGLETON -------
    static getInstance(){
        if(!instance){
            instance = new CartMongo
        }

        return instance
    }

}

export { CartMongo }