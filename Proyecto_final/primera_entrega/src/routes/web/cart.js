import { Router } from 'express';
import { cartDao, productsDao } from '../../daos/index.js';

const cartRouter = Router();

cartRouter.route('/carrito')
    .get (async(req, res) =>{
        try {
            const carts = await cartDao.getAll()
            res.status(200).json(carts)
        } catch (error) {
            res.json(error)
        }
    })
    .post(async (req, res) => {
        try {
            const { name } = req.body
            const cart = await cartDao.save({name, products: []})
    
            res.status(200).json(cart)
        } catch (error) {
            res.json(error)
        }
    });

cartRouter.route('/carrito/:id')
    .delete((req, res) => {
        const idCart = [req.params.id]
        cartDao.deleteById(idCart)
        res.json({
            "status": "200",
            "id": req.params.id
        })
    });
    
cartRouter.route('/carrito/:id/productos')
    .get((req, res) => {
        const idCart = req.params.id
        if (idCart > cartDao.getAll().length) {
            res.send({error: 'el carrito no existe'})
        }

        res.send(cartDao.getProductsInCart(idCart))
    })

    .post( async (req, res) => {
        try {
            const {id} = req.params
            const {productId} = req.body
            const cart = await cartDao.getById(id)
            const product = await productsDao.getById(productId)
            cart.products =  [...cart.products, product]
            
            const result = await cartDao.update(id, carrito)
    
            res.status(201).json(result)
    
        } catch (error) {
            res.json(error)
        }
    });

export { cartRouter };