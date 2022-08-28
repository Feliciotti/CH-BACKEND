import { ObjectId } from 'mongodb'
import { MongoDB } from '../../db/index.js'

class MongoDao extends MongoDB {
    constructor(e){
        super(e)
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
            await this.collection.findOne({_id: ObjectId(id)})

        } catch (error) {
            return error
        }
    }

    async updateById(id, newData){
        try {
            this.collection.findOneAndUpdate({_id:ObjectId(id)}, {$set: newData})

        } catch (error) {
            throw new Error(error)
        }
    }

    async deleteById(id){
        try {

            await this.collection.deleteOne({_id: ObjectId(id)})
            
        } catch (error) {
            throw new Error(error)
        }
    }
};

export { MongoDao }