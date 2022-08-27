import { MongoContainer } from '../model/index.js'

class MongoService extends MongoContainer{
    constructor(){
        this.mngoDao = new MongoContainer()
    }

    async getArray() {
        try {
            const array = await this.mngoDao.getAll().toArray()
            return array
        } catch (error) {

            throw new Error(error)        
        }
    }

    async add(e){
        try {
            await this.mngoDao.save(e)

            return `${e.title}, bajo id: ${e._id}`

        } catch (error) {
            throw new Error(error)
        }
    }

    async eId(id){
        try {
            await this.mngoDao.getById(id)

        } catch (error) {
            return error
        }
    }

    async update(id, newData){
        try {
            await this.mngoDao.updateById(id, newData)

            return this.eId(id)

        } catch (error) {
            throw new Error(error)
        }
    }

    async erase(id){
        try {

            await this.mngoDao.delete(id)

            return ('Deleted')
            
        } catch (error) {
            throw new Error(error)
        }
    }
};

export { MongoService }