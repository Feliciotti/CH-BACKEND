import { CartFS, CartMongo } from '../dao/index.js';

class CartsFactory {
    static create(db){
        switch(db) {
            case 'mongo':
                return CartMongo.getInstance()

            break;

            case 'files':
                return CartFS.getInstance()
        }
    }
}

export { CartsFactory }