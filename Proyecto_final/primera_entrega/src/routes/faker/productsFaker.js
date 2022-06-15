import { Router } from 'express';
import { createNproducts } from '../../mock/products.js';

const productsApiRouter = Router()

productsApiRouter.get('/api/productos-fake', (req, res) => { res.json(createNproducts(10)) })

export { productsApiRouter };