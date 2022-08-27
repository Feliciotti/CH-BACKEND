import { MongoService } from '../../index.js';

// ------- SINGLETON -------
let instance = null
// -------------------------
class ProductsMongo extends MongoService {
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