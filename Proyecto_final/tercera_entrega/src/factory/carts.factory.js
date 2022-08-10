import { CartFS, CartMongo, CartFirebase } from '../dao/index.js';

class CartsFactory {
    static create(db){
        switch(db) {
            case 'mongo':
                return CartMongo.getInstance()

            break;

            case 'firebase':
                return CartFirebase.getInstance()

            break;

            case 'files':
                return CartFS.getInstance()
        }
    }
}

export { CartsFactory }