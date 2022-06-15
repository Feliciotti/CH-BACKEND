import { Router } from 'express';
import { productsFS } from '../container/api.js'

const products = Router();

products.route('/productos')
    .get(async (req, res) => {
        const products = await productsFS.getAll()
        res.status(200).send(products)
        }
    )
    .post(async (req, res) => {
        const newProduct = req.body
        await productsFS.save(newProduct)
        const lastAdded = await productsFS.lastAdded()
        res.send(lastAdded)
    })

products.route('/productos/:id')
    .get(async (req, res) => {
        const idProduct = req.params.id
        if (idProduct > productsFS.getAll().length) {
            res.send({error: 'el producto no existe'})
        }
        res.send(productsFS.getById(idProduct))
    })

    .put(async (req, res) => {
        const id = req.params.id
        const {title, price, img} = req.body
        const result = await productsFS.update(id, {title, price, img})

        if (result === -1) res.send('No se encontró el producto')
        res.send('Actualizado')
    })
    
    .delete(async (req, res) => {
        const {id} = req.params
        if(id){
            const deleted = await productsFS.deleteById(id)
            res.json(deleted)
            return
        }
    })

export { products }