import { productsDao } from '../db.controller.js';

// -------------------------------

async function getProduct(req, res) {
    const products = await productsDao.getAll()
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
    if (id === -1) res.status(404).send('No se encontró el producto')

    const updated = await productsDao.update(id, {title, price, thumbnail, desc, stock})

    res.status(200).json(updated)
}

async function delProduct(req, res){
    const {id} = req.params

    let idMax = await productsDao.getAll()

    if (id > idMax.length) {
        res.status(404).send({error: 'el producto no existe'})
    }

    const deleted = await productsDao.delete(id)

    res.send(deleted)
}

async function getById(req, res){
    
    const { id } = req.params

    let idMax = await productsDao.getAll()

    if (id > idMax.length) {
        res.status(404).send({error: 'el producto no existe'})
    }

    let product = await productsDao.getById(id)

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