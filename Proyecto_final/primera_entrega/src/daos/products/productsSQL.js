import { SQLcontainer } from '../../db/container/index.js';

class ProductsSQL extends SQLcontainer {
    constructor(){
        super('products')
    }
};

export {ProductsSQL};