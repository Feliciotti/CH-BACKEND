/**
 * ProductsController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

    get: async function (req, res) {
        Products.find()
        res.status(201).send(products)
    },
    
    create: async function (req, res) {

        const { title, price, thumbnail, desc, stock } = req.body
        if (!title|| !price || !thumbnail || !desc || !stock) return res.send('Completar todos los campos')
        
        await Products.create({
            title, price, thumbnail, desc, stock
        })
    
        res.status(201).send(`Agregado`)
    },
    
    update: async function (req, res){
        const {title, price, thumbnail, desc, stock} = req.body
        
        await Products.update({
            title, price, thumbnail, desc, stock
        })
    
    
        res.status(200).json(product)
    },
    
    destroy: async function (req, res){
        const {id} = req.params.id
    
        await Products.destroy({id})
    
        res.send('deleted')
    },
    
    findOne: async function (req, res){
        const {id} = req.params
    
        const product = await Products.findOne({id})


        res.status(200).send(product)
    }

};