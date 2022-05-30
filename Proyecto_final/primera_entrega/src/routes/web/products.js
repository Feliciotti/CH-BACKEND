import { Router } from 'express';
import { isAdmin } from '../middlewares/index.js';
import { productsApi } from '../api/indexAPIS.js';

const productsRouter = Router();

productsRouter.route('/productos')
    .get(async (req, res) => {
        const products = await productsApi.getAll()
        res.status(200).send(products)
        }
    )
    .post(isAdmin, async (req, res) => {
        const { title, price, thumbnail, description, stock } = req.body
        if (!title|| !price || !thumbnail || !description || !stock) return res.send('Completar todos los campos')
        productsApi.save({ title, price, thumbnail, description, stock })
        res.status(201).send(`Item ${productsApi.ultimo()} agregado`)
    }
    )

productsRouter.route('/productos/:id')
    .put(async (req, res) => {
        const { id } = req.params
        const {title, description, photo, price, stock} = req.body

        const result = productsApi.updateById(id, {title, description, photo, price, stock})

        if (id === -1) res.status(404).send('No se encontró el producto')

        res.status(200).json(result)
    })

productsRouter.route('/productos/:id?')
    .get(async (req, res) => {
        const idProduct = req.params.id
        if (idProduct > productsApi.getAll().length) {
            res.send({error: 'el producto no existe'})
        }
        res.send(productsApi.getById(idProduct))
    })
    
    .delete((req, res) => {
        const {id} = req.params
        if(id){
            const deleted = await productsApi.deleteById(id)
            res.json(deleted)
            return
        }
    })

export { productsRouter };