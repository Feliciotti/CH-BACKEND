import { MongoContainer } from '../../db/container/index.js';


let instance = null

class ProductsMongo extends MongoContainer {
    constructor(){
        super('products')
    }

    static getInstance(){
        if(!instance){
            instance = new ProductsMongo
        }

        return instance
    }
}

export { ProductsMongo }