import { CartFS } from './cart/cartFS.js'
import { CartMongo } from './cart/cartMongo.js';
import { CartFirebase } from './cart/cartFirebase.js';

const DB = process.env.SELECTED_DB

class CartFactory {
    create(db, type) {
        switch(type) {
            case 'mongo':
                return CartMongo.getInstance(db)

            break;

            case 'firebase':
                return CartFirebase.getInstance(db)

            break;

            case 'files':
                return CartFS.getInstance(db)
        }
    }
}

const cartFactory = new CartFactory()

cartFactory.create(DB)

export { cartFactory }