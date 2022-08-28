import { ObjectId } from 'mongodb'

// class MongoContainer {
//     constructor(collectionDB){
//         this.collection = database.collection(collectionDB)
//     }
class MongoContainer {
    constructor(){
        this.collection = new MongoClientDB()
    }

    async getAll() {
        try {
            await this.collection.find()

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

export { MongoContainer }