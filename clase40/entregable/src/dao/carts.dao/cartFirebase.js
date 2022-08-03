import { FirebaseApi } from '../../service/index.js';

class CartFirebase extends FirebaseApi {
    constructor(){
        super('carts')
    }
    
}

export { CartFirebase }



