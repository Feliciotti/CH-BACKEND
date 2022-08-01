import { ProductsFS } from './products/prdctsFS.js';
import { ProductsMongo } from './products/prdctsMongo.js';
import { ProductsFirebase } from './products/prdctsFirebase.js';

const DB = process.env.SELECTED_DB

class ProductsFactory {
    create(db, type) {
        switch(type) {
            case 1:
                return ProductsMongo.getInstance(db)

            break;

            case 2:
                return ProductsFirebase.getInstance(db)

            break;

            case 3:
                return ProductsFS.getInstance(db)
        }
    }
}

const productsFactory = new ProductsFactory()

productsFactory.create(DB)

export { productsFactory }