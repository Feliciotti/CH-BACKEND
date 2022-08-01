import { isAdmin } from '../middleware/admin.js';

async function getProduct(req, res) {
    const products = await productsFactory.getAll()
    res.status(200).send(products)
}

async function postProduct(req, res) {
    const { title, price, thumbnail, desc, stock } = req.body
    if (!title|| !price || !thumbnail || !desc || !stock) return res.send('Completar todos los campos')

    let added = await productsFactory.save({ title, price, thumbnail, desc, stock })

    res.status(201).send(`Agregado: ${added}`)
}

async function putProduct(isAdmin, req, res){
    const { id } = req.params
    const {title, price, thumbnail, desc, stock} = req.body

    const result = productsFactory.updateById(id, {title, price, thumbnail, desc, stock})

    if (id === -1) res.status(404).send('No se encontró el producto')

    res.status(200).json(result)
}

async function delProduct(isAdmin, req, res){
    const {id} = req.params

    const deleted = await productsFactory.deleteById(id)

    res.send(deleted)
}

async function getPById(isAdmin, req, res){
    const id = req.params.id

    let idMax = await productsFactory.getAll()

    if (id > idMax.length) {
        res.status(404).send({error: 'el producto no existe'})
    }

    let product = await productsFactory.getById(id)

    res.status(200).send(product)
}

export {
    getProduct,
    postProduct,
    putProduct,
    delProduct,
    getPById
}