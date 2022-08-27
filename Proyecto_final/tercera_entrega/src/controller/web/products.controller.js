import { productsDao } from '../db.controller.js';

// -------------------------------
async function getProduct(req, res) {
    const products = await productsDao.getArray()
    res.status(200).send(products)
}

async function postProduct(req, res) {
    const { title, price, thumbnail, desc, stock } = req.body
    if (!title|| !price || !thumbnail || !desc || !stock) return res.send('Completar todos los campos')

    let added = await productsDao.add({ title, price, thumbnail, desc, stock })

    res.status(201).send(`Agregado: ${added}`)
}

async function putProduct(req, res){
    const { id } = req.params
    const {title, price, thumbnail, desc, stock} = req.body

    const result = productsDao.update(id, {title, price, thumbnail, desc, stock})

    if (id === -1) res.status(404).send('No se encontró el producto')

    res.status(200).json(result)
}

async function delProduct(req, res){
    const {id} = req.params

    const deleted = await productsDao.delete(id)

    res.send(deleted)
}

async function getById(req, res){
    
    const {id} = req.params

    let idMax = await productsDao.getArray()

    if (id > idMax.length) {
        res.status(404).send({error: 'el producto no existe'})
    }

    let product = await productsDao.eId(id)

    res.status(200).send(product)
}

// -------------------------------
export {
    getProduct,
    postProduct,
    putProduct,
    delProduct,
    getById
} // to index