import { FirebaseContainer } from '../../db/container/index.js';

class CartFirebase extends FirebaseContainer {
    constructor(){
        super('carts')
    }
}

export { CartFirebase }