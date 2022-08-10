import { FirebaseContainer } from '../index.js';

// ------- SINGLETON -------
let instance = null
// -------------------------

class ProductsFirebase extends FirebaseContainer {
    constructor(){
        super('products')
    }

    // ------- SINGLETON -------
    static getInstance(){
        if(!instance){
            instance = new ProductsFirebase
        }

        return instance
    }

}

export { ProductsFirebase }