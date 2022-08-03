import { ProductsFS } from '../dao/index.js';
import { ProductsMongo } from '../dao/index.js';
import { ProductsFirebase } from '../dao/index.js';

class ProductsFactory {
    create(db, type){
        switch(type) {
            case db.mongo:
                return ProductsMongo.getInstance()

            break;

            case db.firebase:
                return new ProductsFirebase.getInstance()

            break;

            case db.fs:
                return new ProductsFS.getInstance()
        }
    }
}

const productsFactory =  new ProductsFactory();

const DB = process.env.SELECTED_DB

productsFactory.create(DB)