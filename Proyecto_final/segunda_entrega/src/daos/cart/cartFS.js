import { FScontainer } from '../../db/container/index.js';

class CartFS extends FScontainer {
    constructor(){
        super('carts')
    }
}

export { CartFS }