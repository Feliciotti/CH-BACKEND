import { SQLcontainer } from '../../db/container/index.js';

class CartSQL extends SQLcontainer {
    constructor(){
        super('cart')
    }
};

export {CartSQL};