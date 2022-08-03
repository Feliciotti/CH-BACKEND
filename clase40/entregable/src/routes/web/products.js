import {
    getProduct,
    postProduct,
    putProduct,
    delProduct,
    getPById
} from '../../controller/products.controller.js';
import { Router } from 'express';

const productsRouter = Router();

productsRouter.route('/productos')
    .get( getProduct )
    .post( postProduct )

productsRouter.route('/productos/:id')
    .put( putProduct )

    .delete( delProduct )

productsRouter.route('/productos/:id?')
    .get( getPById )

export { productsRouter };