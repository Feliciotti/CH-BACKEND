// -------- MIDDLEWARE --------
import { isAdmin } from '../middleware/admin.js';

import { ProductsFactory } from '../factory/products.factory.js'

// ------- DB SELECT ---------
const DB = process.env.SELECTED_DB || 'mongo'
const productsDao = ProductsFactory.create(DB)

// ------- to use in carts -------
export { productsDao }
//--------------------------------



// -------- FUNCTIONS --------
async function getProduct(req, res) {
    const products = await productsDao.getAll()
    res.status(200).send(products)
}

async function postProduct(req, res) {
    const { title, price, thumbnail, desc, stock } = req.body
    if (!title|| !price || !thumbnail || !desc || !stock) return res.send('Completar todos los campos')

    let added = await productsDao.save({ title, price, thumbnail, desc, stock })

    res.status(201).send(`Agregado: ${added}`)
}

async function putProduct(isAdmin, req, res){
    const { id } = req.params
    const {title, price, thumbnail, desc, stock} = req.body

    const result = productsDao.updateById(id, {title, price, thumbnail, desc, stock})

    if (id === -1) res.status(404).send('No se encontró el producto')

    res.status(200).json(result)
}

async function delProduct(isAdmin, req, res){
    const {id} = req.params

    const deleted = await productsDao.deleteById(id)

    res.send(deleted)
}

async function getPById(isAdmin, req, res){
    const id = req.params.id

    let idMax = await productsDao.getAll()

    if (id > idMax.length) {
        res.status(404).send({error: 'el producto no existe'})
    }

    let product = await productsDao.getById(id)

    res.status(200).send(product)
}

export {
    getProduct,
    postProduct,
    putProduct,
    delProduct,
    getPById
}