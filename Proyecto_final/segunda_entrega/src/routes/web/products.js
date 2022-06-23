import { Router } from 'express';
import { productsDao } from '../../daos/index.js';

const productsRouter = Router();

productsRouter.route('/productos')
    .get(async (req, res) => {
        const products = await productsDao.getAll()
        res.status(200).send(products)
        }
    )
    .post(async (req, res) => {
        const { title, price, thumbnail, description, stock } = req.body
        if (!title|| !price || !thumbnail || !description || !stock) return res.send('Completar todos los campos')
        productsDao.save({ title, price, thumbnail, description, stock })
        res.status(201).send(`Item ${productsDao.ultimo()} agregado`)
    }
    )

productsRouter.route('/productos/:id')
    .put(async (req, res) => {
        const { id } = req.params
        const {title, description, photo, price, stock} = req.body

        const result = productsDao.updateById(id, {title, description, photo, price, stock})

        if (id === -1) res.status(404).send('No se encontró el producto')

        res.status(200).json(result)
    })

productsRouter.route('/productos/:id?')
    .get(async (req, res) => {
        const idProduct = req.params.id
        if (idProduct > productsDao.getAll().length) {
            res.send({error: 'el producto no existe'})
        }
        res.send(productsDao.getById(idProduct))
    })
    
    .delete(async (req, res) => {
        const {id} = req.params
        if(id){
            const deleted = await productsDao.deleteById(id)
            res.json(deleted)
            return
        }
    })

export { productsRouter };