export { MongoContainer } from './dao.container/mongo.dao.js';
export { FScontainer } from './dao.container/filesystem.dao.js';
export { FirebaseContainer } from './dao.container/firebase.dao.js';


// ----------- TO EXPORT TO FACTORY -----------

export { ProductsFirebase } from './products.dao/prdctsFirebase.js'
export { ProductsMongo } from './products.dao/prdctsMongo.js'
export { ProductsFS } from './products.dao/prdctsFS.js'

export { CartFirebase } from './carts.dao/cartFirebase.js'
export { CartMongo } from './carts.dao/cartMongo.js'
export { CartFS } from './carts.dao/cartFS.js'