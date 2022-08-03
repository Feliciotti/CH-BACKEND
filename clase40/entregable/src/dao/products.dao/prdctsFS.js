import { FScontainer } from '../index.js';

// ------- SINGLETON -------
let instance = null
// -------------------------

class ProductsFS extends FScontainer {
    constructor(){
        super('products')
    }

    // ------- SINGLETON -------
    static getInstance(){
        if(!instance){
            instance = new ProductsFS
        }

        return instance
    }
}

export { ProductsFS }