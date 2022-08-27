import { Router } from 'express';

import {
    getCart,
    postCart,
    deleteCart,
    getCartProducts,
    postCartProducts
} from '../../controller/index.js';
import { isAuthenticated } from '../../middleware/index.js';

//---------------------------------------

const cartRouter = Router();

cartRouter.route('/carrito')
    .get (isAuthenticated, getCart )
    .post(isAuthenticated, postCart );

cartRouter.route('/carrito/:id')
    .delete(isAuthenticated, deleteCart );
    
cartRouter.route('/carrito/:id/productos')
    .get(isAuthenticated, getCartProducts )
    .post(isAuthenticated, postCartProducts);

export { cartRouter };