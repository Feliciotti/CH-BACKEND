import { FirebaseContainer } from '../../db/container/index.js';

let instance = null

class CartFirebase extends FirebaseContainer {
    constructor(){
        super('carts')
    }

    static getInstance(){
        if(!instance){
            instance = new CartFirebase
        }

        return instance
    }
}

export { CartFirebase }



