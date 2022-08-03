import { ProductsFS, ProductsMongo, ProductsFirebase } from '../dao/index.js';

class ProductsFactory {
    create(db){
        switch(db) {
            case 'mongo':
                return ProductsMongo.getInstance()

            break;

            case 'firebase':
                return new ProductsFirebase.getInstance()

            break;

            case 'fs':
                return new ProductsFS.getInstance()
        }
    }
}

export { ProductsFactory }