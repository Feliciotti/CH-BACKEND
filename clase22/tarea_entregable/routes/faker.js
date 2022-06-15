import { Router } from 'express'
import { prdctsFaker } from '../dao/sqlFAKER.js'


const productsFaker = Router()

productsFaker.get('/api/productos-test', (req, res) => { res.json(prdctsFaker)})

export { productsFaker }