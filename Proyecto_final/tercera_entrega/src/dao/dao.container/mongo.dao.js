import { ObjectId } from 'mongodb'
import { database } from '../../db/mongoDB.js'

class MongoContainer {
    constructor(collectionDB){
        this.collection = database.collection(collectionDB)
    }

    async getAll() {
        try {
            const array = await this.collection.find().toArray()
            return array
        } catch (error) {

            throw new Error(error)        
        }
    }

    async save(e){
        try {
            await this.collection.insertOne(e)

            return `${e.title}, bajo id: ${e._id}`

        } catch (error) {
            throw new Error(error)
        }
    }

    async getById(id){
        try {
            const resultado = await this.collection.findOne({_id: ObjectId(id)})
            return resultado

        } catch (error) {
            return error
        }
    }

    async updateById(id, newData){
        try {
            const updated = this.collection.findOneAndUpdate({_id:ObjectId(id)}, {$set: newData})
            return updated

        } catch (error) {
            throw new Error(error)
        }
    }

    async deleteById(id){
        try {

            const deleted = await this.collection.deleteOne({_id: ObjectId(id)})
            return deleted
            
        } catch (error) {
            throw new Error(error)
        }
    }
};

export { MongoContainer }