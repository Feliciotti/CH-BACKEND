import { Router } from 'express';
// -------- MIDDLEWARE --------
import { isAdmin } from '../../middleware/admin.js';
//-------
import {
    getProduct,
    postProduct,
    putProduct,
    delProduct,
    getById
} from '../../controller/index.js';
import { isAuthenticated } from '../../middleware/index.js';
//-------------------------------------------------

const productsRouter = Router();

productsRouter.route('/productos')
    .get(isAuthenticated, getProduct )

productsRouter.route('/productos', isAdmin)
    .post( postProduct )

productsRouter.route('/productos/:id', isAdmin)
    .put( putProduct )
    .delete( delProduct )

productsRouter.route('/productos/:id?')
    .get(isAuthenticated, getById)

export { productsRouter };