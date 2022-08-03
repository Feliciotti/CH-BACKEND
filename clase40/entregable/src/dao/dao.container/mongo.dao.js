import { ObjectId } from 'mongodb'
import { MongoClientDB } from '../../db/db.container/mongoDB.js'

class MongoContainer {
    constructor(){
        this.collection = new MongoClientDB()
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

        } catch (error) {
            throw new Error(error)
        }
    }

    async getById(id){
        try {
            const result = await this.collection.findOne({_id: ObjectId(id)})
            return result

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
}

export { MongoContainer }