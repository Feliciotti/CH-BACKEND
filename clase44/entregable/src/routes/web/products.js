import {
    getProduct,
    postProduct,
    putProduct,
    delProduct,
    itemById
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
    .get( itemById )

export { productsRouter };