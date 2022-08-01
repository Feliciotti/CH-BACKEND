import { FScontainer } from '../../db/container/index.js';

let instance = null

class CartFS extends FScontainer {
    constructor(){
        super('carts')
    }

    static getInstance(){
        if(!instance){
            instance = new CartFS
        }

        return instance
    }
}

export { CartFS }