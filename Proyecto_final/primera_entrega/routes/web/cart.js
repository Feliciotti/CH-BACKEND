import { Router } from 'express';
import { cartsApi, productsApi } from '../../container/index.js';

const cartRouter = Router();

cartRouter.route('/carrito')
    .get (async (req, res) =>{
        try {
            const carts = await cartsApi.getAll()
            res.status(200).json(carts)
        } catch (error) {
            res.json(error)
        }
    })
    .post(async (req, res) => {
        try {
            const { name } = req.body
            const cart = await cartsApi.save({name, products: []})

            res.status(200).json(cart)
        } catch (error) {
            res.json(error)
        }
    });

cartRouter.route('/carrito/:id')
    .delete(async (req, res) => {

        const id = req.params.id 
        const deleted = await cartsApi.deleteById(id)

        res.send(deleted)
    });
    
cartRouter.route('/carrito/:id/productos')
    .get( async (req, res) => {
        try {
            const {id} = req.params
            const cartProducts = await cartsApi.getById(id)

            if(!cartProducts.products)
                return res.json({message: 'Carrito no encontrado'})

            res.json(cartProducts.products)

        } catch (error) {
            res.json(error)
        }
    })

    .post( async (req, res) => {
        try {
            const {id} = req.params
            const {productId} = req.body
            const cart = await cartsApi.getById(id)
            const product = await productsApi.getById(productId)
            cart.products =  [...cart.products, product]

            const result = await cartsApi.updateById(id, cart);
            res.status(201).json(result);
    
        } catch (error) {
            res.json(error)
        }
    });

export { cartRouter };