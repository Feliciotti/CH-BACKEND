import {MongoClient, ObjectId} from 'mongodb';
import settings from '../../settings.js';

const client = new MongoClient(settings.mongoAtlas.uri)
await client.connect()
const database = client.db('ecommerce')


class MongoContainer {
    constructor(colectionName){
        this.colection = database.collection(colectionName)
    }

    async showAll() {
        try {
            const array = await this.colection.find().toArray()
            
            return array
        } catch (error) {
            throw new Error(error)        
        }
    }

    async save(e){
        try {
            const newElement = await this.colection.insertOne(e)
            return newElement
        } catch (error) {
            throw new Error(error)
        }
    }

    async getById(id){
        try {
            const result = await this.colection.findOne({_id: ObjectId(id)})
            return result
        } catch (error) {
            return error
        }
    }

    async updateById(id, newData){
        try {
            const result = this.colection.findOneAndUpdate({_id:ObjectId(id)}, {$set: newData})
            return result
        } catch (error) {
            throw new Error(error)
        }
    }

    async deleteById(id){
        try {

            const result = await this.colection.deleteOne({_id: ObjectId(id)})
            return result

            
        } catch (error) {
            throw new Error(error)
        }
    }
}

export {MongoContainer}