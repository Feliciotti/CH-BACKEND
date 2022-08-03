import { FSapi} from '../../service/index.js';

class CartFS extends FSapi {
    constructor(){
        super('carts')
    }
    
}

export { CartFS }