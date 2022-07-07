import { Router } from 'express';
import { isAdmin } from '../../middleware/admin.js';
import { productsApi } from '../../daos/index.js';

const productsRouter = Router();

productsRouter.route('/productos')
    .get(async (req, res) => {
        const products = await productsApi.getAll()
        res.status(200).send(products)
        }
    )
    .post(isAdmin, async (req, res) => {
        const { title, price, thumbnail, desc, stock } = req.body
        if (!title|| !price || !thumbnail || !desc || !stock) return res.send('Completar todos los campos')

        let added = await productsApi.save({ title, price, thumbnail, desc, stock })

        res.status(201).send(`Agregado: ${added}`)
        }
    )

productsRouter.route('/productos/:id')
    .put(isAdmin, async (req, res) => {
        const { id } = req.params
        const {title, price, thumbnail, desc, stock} = req.body

        const result = productsApi.updateById(id, {title, price, thumbnail, desc, stock})

        if (id === -1) res.status(404).send('No se encontró el producto')

        res.status(200).json(result)
    })

    .delete(isAdmin, async (req, res) => {
        const {id} = req.params

        const deleted = await productsApi.deleteById(id)

        res.send(deleted)
    })

productsRouter.route('/productos/:id?')
    .get(async (req, res) => {
        const id = req.params.id

        let idMax = await productsApi.getAll()

        if (id > idMax.length) {
            res.status(404).send({error: 'el producto no existe'})
        }

        let product = await productsApi.getById(id)

        res.status(200).send(product)
    })
    


export { productsRouter };