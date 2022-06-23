import { Router } from 'express';
import { prdcts } from '../../server.js';

const productsRouter = Router();

productsRouter.route('/productos')
    .get(async (req, res) => {
        const products = await prdcts.getAll()
        res.status(200).send(products)
        }
    )
    .post(async (req, res) => {
        const { title, price, thumbnail, description, stock } = req.body
        if (!title|| !price || !thumbnail || !description || !stock) return res.send('Completar todos los campos')
        prdcts.save({ title, price, thumbnail, description, stock })
        res.status(201).send(`Item ${prdcts.ultimo()} agregado`)
    }
    )

productsRouter.route('/productos/:id')
    .put(async (req, res) => {
        const { id } = req.params
        const {title, description, photo, price, stock} = req.body

        const result = prdcts.updateById(id, {title, description, photo, price, stock})

        if (id === -1) res.status(404).send('No se encontró el producto')

        res.status(200).json(result)
    })

productsRouter.route('/productos/:id?')
    .get(async (req, res) => {
        const idProduct = req.params.id
        if (idProduct > prdcts.getAll().length) {
            res.send({error: 'el producto no existe'})
        }
        res.send(prdcts.getById(idProduct))
    })
    
    .delete(async (req, res) => {
        const {id} = req.params
        if(id){
            const deleted = await prdcts.deleteById(id)
            res.json(deleted)
            return
        }
    })

export { productsRouter };