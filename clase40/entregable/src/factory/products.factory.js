import { ProductsFS, ProductsMongo, ProductsFirebase } from '../dao/index.js';

class ProductsFactory {
    static create(db){
        switch(db) {
            case 'mongo':
                return ProductsMongo.getInstance()

            break;

            case 'firebase':
                return ProductsFirebase.getInstance()

            break;

            case 'files':
                return ProductsFS.getInstance()
        }
    }
}

export { ProductsFactory }