import { FScontainer } from '../../db/container/index.js';

class ProductsFS extends FScontainer {
    constructor(){
        super('products')
    }
}

export { ProductsFS }