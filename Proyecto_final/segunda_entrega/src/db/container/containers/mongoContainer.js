
import {MongoClient, ObjectId} from 'mongodb'
import { mongo } from '../../../config/index.js'

const client = new MongoClient(mongo.uri)
await client.connect()
const database = client.db('ecommerce')


class MongoContainer {
    constructor(collectionName){
        this.coleccion = database.collection(collectionName)
    }

    async getAll() {
        try {
            const array = await this.coleccion.find().toArray()
            return array
        } catch (error) {
            
            throw new Error(error)        
        }
    }

    async save(e){
        try {
            const added = await this.coleccion.insertOne(e)
            
            return added

        } catch (error) {
            throw new Error(error)
        }
    }

    async getById(id){
        try {
            const resultado = await this.coleccion.findOne({_id: ObjectId(id)})
            return resultado

        } catch (error) {
            return error
        }
    }

    async updateById(id, newData){
        try {
            const updated = this.coleccion.findOneAndUpdate({_id:ObjectId(id)}, {$set: newData})
            return updated
        } catch (error) {
            throw new Error(error)
        }
    }

    async deleteById(id){
        try {

            const deleted = await this.coleccion.deleteOne({_id: ObjectId(id)})
            return deleted
            
        } catch (error) {
            throw new Error(error)
        }
    }
}

export { MongoContainer }