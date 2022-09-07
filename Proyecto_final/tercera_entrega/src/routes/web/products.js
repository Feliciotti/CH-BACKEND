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

const products = Router();

products.route('/productos')
    .get(isAuthenticated, getProduct )

products.route('/productos', isAdmin)
    .post(isAdmin, postProduct )

products.route('/productos/:id', isAdmin)
    .put(isAdmin, putProduct )
    .delete(isAdmin, delProduct )

products.route('/productos/:id?')
    .get(isAuthenticated, getById)

export { products };