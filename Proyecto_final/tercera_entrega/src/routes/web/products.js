//Dependencies
import { Router } from 'express';
// Middleware
import { isAdmin, isAuthenticated } from '../middleware/index.js';
//js files
import {
    getProduct,
    postProduct,
    putProduct,
    delProduct,
    getById
} from '../../controller/index.js';

//-------------------------------------------------

const productsRouter = Router();

productsRouter.route('/productos')
    .get(isAuthenticated, getProduct )

productsRouter.route('/productos', isAdmin)
    .post(isAdmin, postProduct )

productsRouter.route('/productos/:id', isAdmin)
    .put(isAdmin, putProduct )
    .delete(isAdmin, delProduct )

productsRouter.route('/productos/:id?')
    .get(isAuthenticated, getById)

export { productsRouter };