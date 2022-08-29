import { productsDao, cartsDao } from '../db.controller.js';

// -------------------------------
async function getCart(req, res) {
    try {
        const carts = await cartsDao.getAll()
        res.status(200).json(carts)
    } catch (error) {
        res.json(error)
    }
}
async function postCart(req, res) {
    try {
        const { title } = req.body
        const cart = await cartsDao.add({title, products: []})

        res.status(200).json(cart)
    } catch (error) {
        res.json(error)
    }
}

async function deleteCart(req, res) {
    const { id } = req.params
    const deleted = await cartsDao.delete(id)

    res.send(deleted)
}

async function getCartProducts(req, res) {
    try {
        const {id} = req.params
        const cartProducts = await cartsDao.getById(id)

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

        const cart = await cartsDao.getById(id)
        const product = await productsDao.getById(productId)
        cart.products =  [...cart.products, product]

        const result = await cartsDao.update(id, cart);
        res.status(201).json(result);

    } catch (error) {
        res.json(error)
    }
}

async function postOrder(req, res){
    try{
        
    }catch(error) {

    }
}

// -------------------------------
export { 
    getCart,
    postCart,
    deleteCart,
    getCartProducts,
    postCartProducts
}; // to index