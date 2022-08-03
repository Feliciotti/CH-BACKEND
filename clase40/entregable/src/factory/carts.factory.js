import { CartFS, CartMongo, CartFirebase } from '../dao/index.js';

class CartsFactory {
    create(db){
        switch(db) {
            case 'mongo':
                return CartMongo.getInstance()

            break;

            case 'firebase':
                return new CartFirebase.getInstance()

            break;

            case 'fs':
                return new CartFS.getInstance()
        }
    }
}

export { CartsFactory }