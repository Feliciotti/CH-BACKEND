async function getCart(req, res) {
    try {
        const carts = await cartFactory.getAll()
        res.status(200).json(carts)
    } catch (error) {
        res.json(error)
    }
}
async function postCart(req, res) {
    try {
        const { title } = req.body
        const cart = await cartFactory.save({title, products: []})

        res.status(200).json(cart)
    } catch (error) {
        res.json(error)
    }
}

async function deleteCart(req, res) {
    const id = req.params.id 
    const deleted = await cartFactory.deleteById(id)

    res.send(deleted)
}

async function getCartProducts(req, res) {
    try {
        const {id} = req.params
        const cartProducts = await cartFactory.getById(id)

        if(!cartProducts.products)
            return res.json({message: 'Carrito no encontrado'})

        res.json(cartProducts.products)

    } catch (error) {
        res.json(error)
    }
}

async function postCartProducts(req, res) {
    try {
        const {id} = req.params
        const {productId} = req.body
        const cart = await cartFactory.getById(id)
        const product = await productsFactory.getById(productId)
        cart.products =  [...cart.products, product]

        const result = await cartFactory.updateById(id, cart);
        res.status(201).json(result);

    } catch (error) {
        res.json(error)
    }
}


export { 
    getCart,
    postCart,
    deleteCart,
    getCartProducts,
    postCartProducts
};