import { FScontainerDao } from '../model/index.js';

class FSservice extends FScontainerDao{
    constructor(){
        super()
        this.fsDao = new FScontainerDao
    }
    
    async getArray() {
        const array = await this.fsDao.getAll()

        return array
    };

    async add(e) {
        try {
            const array = await this.getArray();

            const lastAdded = array[array.length-1]
            e.id = lastAdded ? lastAdded.id + 1 : 1

            await this.fsDao.save(e)

            return `${e.title}, con id: ${e.id}`

        } catch (error) {
            return error
        };
    };

    async eId(id){
        try{
            const product = await this.fsDao.getById(id);

            return product

        }catch (error){
            throw new Error(error)
        }
    };

    async delete(id){
        try {
            const array = await this.getArray();  
            const index = array.findIndex(product => product.id == id);

            if (index == -1) {
                return `No se puede borrar. Item: ${id} no encontrado.`;
            } else{
                await this.fsDao.deleteById(id)
            }

            return('Deleted')
            
        } catch (error){
            error
        }
    };

    async update(id, newData) {
        try {
            const array = await this.getAll();
            const index = array.findIndex((e) => e.id == id);
            
            if (index == -1) {
                return `No se encontro el item: ${id}.`;
            } else {
               await this.fsDao.updateById(id, newData)
            }

            return array[index];

        } catch (error) {
            return error;
        }
    }

    async deleteAll(){
        try {
            await this.fsDao.delete()
        } catch (error) {
            throw new Error(error)
        };
    };
    
};

export { FSservice }