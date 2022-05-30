import { Router } from 'express';
import { createNFakeProducts } from '../../mock/products.js';

const productsApiRouter = new Router()

productsApiRouter.get('/api/productos-create', (req, res) => { res.json(createNFakeProducts(10)) })

export { productsApiRouter };