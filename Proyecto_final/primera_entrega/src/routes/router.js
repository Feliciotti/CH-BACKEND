const { Router } = require('express');
const router = Router();

const { ProductsAPI } = require('../api')
const api = new ProductsAPI('./products.txt');

async function uploadProducts() {
    await api.save({ timestamp: Date.now(), title: 'Album', description: 'ssdkfskdfskdfdf!', photo: 'https://image.shutterstock.com/image-vector/img-file-document-icon-260nw-1356823577.jpg', price: 500, stock: 250 })
    await api.save({ timestamp: Date.now(), title: 'Remera', description: 'ssdkfskdfskdfdf!', photo: 'https://image.shutterstock.com/image-vector/img-file-document-icon-260nw-1356823577.jpg', price: 1000, stock: 350 })
    await api.save({ timestamp: Date.now(), title: 'Buzo', description: 'ssdkfskdfskdfdf!', photo: 'https://image.shutterstock.com/image-vector/img-file-document-icon-260nw-1356823577.jpg', price: 1200, stock: 200 })
    await api.save({ timestamp: Date.now(), title: 'Mochila', description: 'ssdkfskdfskdfdf!', photo: 'https://image.shutterstock.com/image-vector/img-file-document-icon-260nw-1356823577.jpg', price: 1200, stock: 100 })
};

uploadProducts()

router.route('/productos')
    .get(async (req, res) => {
        const products = await api.getAll()
        res.send(products)
    })
    .post((req, res) => {
        const newProduct = req.body
        api.save(newProduct)
        res.send(api.ultimo())
    })

router.route('/productos/:id?')
    .get((req, res) => {
        const idProduct = req.params.id
        if (idProduct > api.getAll().length) {
            res.send({error: 'el producto no existe'})
        }
        res.send(api.getById(idProduct))
    })

    .put((req, res) => {
        const idProduct = req.params.id
        const {title, description, photo, price, stock} = req.body
        const result = api.updateById(idProduct, {title, description, photo, price, stock})

        if (result === -1) res.send('No se encontró el producto')
        res.send('Actualizado')
    })
    
    .delete((req, res) => {
        const idProduct = [req.params.id]
        api.deleteById(idProduct)
        res.json({
            "status": "200",
            "id": req.params.id
        })
    })

module.exports = router;