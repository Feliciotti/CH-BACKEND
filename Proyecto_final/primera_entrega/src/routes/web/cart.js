import { Router } from 'express';
import { cartApi, productsApi } from '../api/indexAPIS.js';

const cartRouter = Router();

cartRouter.route('/carrito')
    .get (async(req, res) =>{
        try {
            const carts = await cartApi.getAll()
            res.status(200).json(carts)
        } catch (error) {
            res.json(error)
        }
    })
    .post(async (req, res) => {
        try {
            const { name } = req.body
            const cart = await cartApi.save({name, products: []})
    
            res.status(200).json(cart)
        } catch (error) {
            res.json(error)
        }
    });

cartRouter.route('/carrito/:id')
    .delete((req, res) => {
        const idCart = [req.params.id]
        cartApi.deleteById(idCart)
        res.json({
            "status": "200",
            "id": req.params.id
        })
    });
    
cartRouter.route('/carrito/:id/productos')
    .get((req, res) => {
        const idCart = req.params.id
        if (idCart > cartApi.getAll().length) {
            res.send({error: 'el carrito no existe'})
        }

        res.send(cartApi.getProductsInCart(idCart))
    })

    .post( async (req, res) => {
        try {
            const {id} = req.params
            const {productId} = req.body
            const cart = await cartApi.getById(id)
            const product = await productsApi.getById(productId)
            cart.products =  [...cart.products, product]
            
            const result = await cartApi.update(id, carrito)
    
            res.status(201).json(result)
    
        } catch (error) {
            res.json(error)
        }
    });

export { cartRouter };