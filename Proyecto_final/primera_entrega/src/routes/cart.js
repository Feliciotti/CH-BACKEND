const { Router } = require('express');
const router = Router();

const { ProductsAPI } = require('../api')

const apiCart = new ProductsAPI('./carts.txt');



router.route('/carrito')
    .get (async(req, res) =>{
        const carts = await apiCart.getAll()
        res.send(carts)
    }
    )
    .post(async (req, res) => {
        async function uploadProductsToCart() {
            await apiCart.save({ timestamp: Date.now(), products: [] })
        };
        uploadProductsToCart();
        res.send('Carrito creado')
    })

router.route('/carrito/:id')
    .delete((req, res) => {
        const idCart = [req.params.id]
        apiCart.deleteById(idCart)
        res.json({
            "status": "200",
            "id": req.params.id
        })
    })
    
router.route('/carrito/:id/productos')
    .get((req, res) => {
        const idCart = req.params.id
        if (idCart > apiCart.getAll().length) {
            res.send({error: 'el carrito no existe'})
        }

        res.send(apiCart.getProductsInCart(idCart))
    })

    .post( async (req, res) => {
        const {idCart, idProduct} = req.params
        const product = await products.getById(idProduct)
        const cart = await cart.getCart(idCart)

        cart.product.push(product)

        const updatedCart = await cart.updateById(idCart, cart)

})

router.route('/carrito/:id/productos/:id_prod')
    .delete((req, res) => {
        const idProduct = req.params.id
        if (idProduct > api.getAll().length) {
            res.send({error: 'el producto no existe'})
        }
        res.send(api.getById(idProduct))
})
