import { Router } from 'express';
import { createNFakeProducts } from './faker.js'
import { ProductsFiles } from '../dao/fs.js';

const products = Router();

products.route('/productos')
    .get((req, res) => {
        res.send(ProductsFiles.getAll())
    })
    .post((req, res) => {
        const newProduct = req.body
        ProductsFiles.save(newProduct)
        res.send(ProductsFiles.ultimo())
    })

products.route('/productos/:id')
    .get((req, res) => {
        const idProduct = req.params.id
        if (idProduct > ProductsFiles.getAll().length) {
            res.send({error: 'el producto no existe'})
        }
        res.send(ProductsFiles.getById(idProduct))
    })

    .put((req, res) => {
        const idProduct = req.params.id
        const {title, price} = req.body
        const result = ProductsFiles.update(idProduct, {title, price})

        if (result === -1) res.send('No se encontró el producto')
        res.send('Actualizado')
    })
    
    .delete((req, res) => {
        const idProduct = [req.params.id]
        ProductsFiles.deleteById(idProduct)
        res.json({
            "status": "200",
            "id": req.params.id
        })
    })

export { products }