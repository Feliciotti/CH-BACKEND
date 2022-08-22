import {
    getCart,
    postCart,
    deleteCart,
    getCartProducts,
    postCartProducts
} from '../../controller/index.js';
import { Router } from 'express';
import { isAuthenticated } from '../../middleware/index.js';

//---------------------------------------

const cartRouter = Router();

cartRouter.route('/carrito')
    .get (isAuthenticated, getCart )
    .post( postCart );

cartRouter.route('/carrito/:id')
    .delete( deleteCart );
    
cartRouter.route('/carrito/:id/productos')
    .get(isAuthenticated, getCartProducts )
    .post( postCartProducts);

export { cartRouter };