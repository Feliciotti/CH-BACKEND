import { MongoContainer } from '../index.js';

// ------- SINGLETON -------
let instance = null
// -------------------------

class ProductsMongo extends MongoContainer {
    constructor(){
        super('products')
    }

    // ------- SINGLETON -------
    static getInstance(){
        if(!instance){
            instance = new ProductsMongo
        }

        return instance
    }
}

export { ProductsMongo }