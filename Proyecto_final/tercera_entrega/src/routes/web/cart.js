import { Router } from 'express';

import {
    getCart,
    postCart,
    deleteCart,
    getCartProducts,
    delCartProducts,
    postCartProducts
} from '../../controller/index.js';
import { isAuthenticated, isAdmin } from '../middleware/index.js'

//---------------------------------------

const cartRouter = Router();

cartRouter.route('/carrito')
    .get (isAuthenticated, isAdmin , getCart )
    .post(isAuthenticated, postCart );

cartRouter.route('/carrito/:id')
    .delete(isAuthenticated, deleteCart );
    
cartRouter.route('/carrito/:id/productos')
    .get(isAuthenticated, getCartProducts )
    .post(isAuthenticated, postCartProducts);

cartRouter.route('/carrito/:id/productos/:id_prod')
    .delete(isAuthenticated, delCartProducts)

export { cartRouter };