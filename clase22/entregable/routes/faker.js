import { Router } from 'express'
import { createNFakeProducts } from '../mock/faker.js'

const productsFaker = Router()

productsFaker.get('/api/productos-test', (req, res) => { res.json(createNFakeProducts(5)) })

export { productsFaker }