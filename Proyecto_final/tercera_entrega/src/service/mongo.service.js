import { MongoContainer } from '../models/index.js'

class MongoService extends MongoContainer{
    constructor(e){
        super(e)
    }

    async getArray() {
        try {
            const array = await super.getAll().toArray()
            return array
        } catch (error) {

            throw new Error(error)        
        }
    }

    async add(e){
        try {
            await super.save(e)

            return `${e.title}, bajo id: ${e._id}`

        } catch (error) {
            throw new Error(error)
        }
    }

    async getById(id){
        try {
            await super.getById(id)

        } catch (error) {
            return error
        }
    }

    async update(id, newData){
        try {
            await super.updateById(id, newData)

            return this.getById(id)

        } catch (error) {
            throw new Error(error)
        }
    }

    async delete(id){
        try {

            await super.deleteById(id)

            return ('Deleted')
            
        } catch (error) {
            throw new Error(error)
        }
    }
};

export { MongoService }