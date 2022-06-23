import { FScontainer } from '../../db/container/index.js';

class ProductsFiles extends FScontainer {
    constructor(){
        super('products')
    }
};

export {ProductsFiles};