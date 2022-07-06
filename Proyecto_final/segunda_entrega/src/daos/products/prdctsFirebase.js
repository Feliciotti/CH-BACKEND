import { FirebaseContainer } from '../../db/container/index.js';

class ProductsFirebase extends FirebaseContainer {
    constructor(){
        super('products')
    }
}

export { ProductsFirebase }