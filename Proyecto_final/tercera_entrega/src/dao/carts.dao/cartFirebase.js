import { FirebaseContainer } from '../index.js';

// ------- SINGLETON -------
let instance = null
// -------------------------

class CartFirebase extends FirebaseContainer {
    constructor(){
        super('carts')
    }

    // ------- SINGLETON -------
    static getInstance(){
        if(!instance){
            instance = new CartFirebase
        }

        return instance
    }
}

export { CartFirebase }



