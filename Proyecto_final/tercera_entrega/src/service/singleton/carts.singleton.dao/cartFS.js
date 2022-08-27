import { FSservice } from '../../index.js';

// ------- SINGLETON -------
let instance = null
// -------------------------

class CartFS extends FSservice {
    constructor(){
        super('carts')
    }

    // ------- SINGLETON -------
    static getInstance(){
        if(!instance){
            instance = new CartFS
        }

        return instance
    }
}

export { CartFS }