import { FScontainer } from '../../db/container/index.js';

let instance = null

class ProductsFS extends FScontainer {
    constructor(){
        super('products')
    }

    static getInstance(){
        if(!instance){
            instance = new ProductsFS
        }

        return instance
    }
}

export { ProductsFS }