import { FirebaseContainer } from '../../db/container/index.js';

let instance = null

class ProductsFirebase extends FirebaseContainer {
    constructor(){
        super('products')
    }

    static getInstance(){
        if(!instance){
            instance = new ProductsFirebase
        }

        return instance
    }
}

export { ProductsFirebase }