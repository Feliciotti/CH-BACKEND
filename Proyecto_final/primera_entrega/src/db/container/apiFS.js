import * as fs from 'fs/promises'
import settings from '../../settings.js'

class FScontainer{
    constructor(file) {
        this.file = `${settings.fileSystem.path}/${file}.json`
    };
    
    async getAll() {
        try {
            const array = await fs.promises.readFile(this.file, "utf-8");
            const arrayParsed = JSON.parse(array);
            return arrayParsed;
        } catch (err) {
            if(err.code === 'ENOENT'){ // significa que el archivo no existe, por ende lo podemos crear con un array vacio
                await fs.promises.writeFile(this.file, JSON.stringify([], null, 2))
                return "Se creó el archivo";
            };
            return err
        };
    };

    async save(e) {
        try {
            const array = await this.getAll();

            const lastAdded = array[array.length-1]
            
            e.id = lastAdded ? lastAdded.id + 1 : 1

            array.push(e);

            await fs.promises.writeFile(this.file, JSON.stringify(array, null, 2))

            return e

        } catch (error) {
            return error
        };
    };

    async getById(id){
        try{
            const array = await this.getAll();
            const result = array.find(product => product.id == id)
            return result
        }catch (error){
            throw new Error(error)
        }
    };
    
    async update(id, data){
        try {
            const array = await this.getAll();
            const index = array.findIndex(e => e.id === id);

            if (index === -1) return (`No se puede actualizar. Item: ${e.id} no encontrado.`)

            const updatedItem = {...array[index], ...data}
            array[index] = updatedItem

            await fs.writeFile(this.file, JSON.stringify(array))
            
            return updatedItem
            
        }catch(error){
            return new Error(error)
        }
    };

    async deleteById(id){
        const array = await this.getAll();  
        const index = array.findIndex(product => product.id === id);
        if (index == -1) {
            throw new Error(`No se puede borrar. Item: ${id} no encontrado.`)
        }
        array.splice(index, 1)
        try {
            await fs.writeFile(this.file, JSON.stringify(array, null, 2))
        } catch (error) {
            throw new Error(`${error}`)
        };
    };

    async delete(){
        try {
            await fs.writeFile(this.file, JSON.stringify([], null, 2))
        } catch (error) {
            throw new Error(error)
        };
    };
    
};


export {FScontainer}