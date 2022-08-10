import { Router } from 'express';
// -------- MIDDLEWARE --------
import { isAdmin } from '../middleware/admin.js';
//-------
import {
    getProduct,
    postProduct,
    putProduct,
    delProduct,
    productById
} from '../../controller/products.controller.js';
//-------------------------------------------------

const productsRouter = Router();

productsRouter.route('/productos')
    .get( getProduct )

productsRouter.route('/productos', isAdmin)
    .post( postProduct )

productsRouter.route('/productos/:id', isAdmin)
    .put( putProduct )
    .delete( delProduct )

productsRouter.route('/productos/:id?')
    .get( productById )

export { productsRouter };