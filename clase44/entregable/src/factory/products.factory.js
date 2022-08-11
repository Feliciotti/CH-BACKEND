import { ProductsFS  } from '../dao/index.js';

class ProductsFactory {
    static create(db){
        switch(db) {

            case 'files':
                return ProductsFS.getInstance()
        }
    }
}

export { ProductsFactory }