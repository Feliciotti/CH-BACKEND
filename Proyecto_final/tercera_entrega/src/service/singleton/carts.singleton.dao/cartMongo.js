import { MongoService } from '../../index.js';

// ------- SINGLETON -------
let instance = null
// -------------------------

class CartMongo extends MongoService {
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