import { FScontainer } from '../../db/container/index.js';

class CartFiles extends FScontainer {
    constructor(){
        super('cart')
    }
};

export {CartFiles};