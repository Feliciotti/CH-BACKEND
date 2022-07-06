import fs from 'fs';
import { files } from '../../../config/index.js';

class FScontainer{
    constructor(fileName) {
        this.fileName = `${files.route}/${fileName}.json`;
    };
    
    async getAll() {
        try {
            const array = await fs.promises.readFile(this.route, "utf-8");
            const arrayParsed = JSON.parse(array);
            return arrayParsed;
        } catch (err) {
            if(err.code === 'ENOENT'){
                await fs.promises.writeFile(this.route, JSON.stringify([], null, 2))
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

            await fs.promises.writeFile(this.route, JSON.stringify(array, null, 2))

            return e.id

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

    async deleteById(id){
        try {
            const array = await this.getAll();  
            const index = array.findIndex(product => product.id == id);

            if (index == -1) {
                return `No se puede borrar. Item: ${id} no encontrado.`;
            }
            array.splice(index, 1)

            await fs.promises.writeFile(this.route,
                JSON.stringify(array, null, 2),
                (err) => {err});

            return('Deleted')
            
        } catch (error){
            error
        }
    };

    async updateById(id, newData) {
        try {
            const array = await this.getAll();
    
            const index = array.findIndex((e) => e.id == id);

            if (index == -1) {
                return `No se encontro el item: ${id}.`;
            }
            // acá lo que hacemos es acceder a la posición del elemento, y le asignamos un nuevo objeto,
            //copiando todas las propiedades que ya tiene el elemento y reemplazando con las propiedades
            //de newData
            array[index] = { ...array[index], ...newData };

            await fs.promises.writeFile(this.route, JSON.stringify(array, null, 2));
    
            return array[index];

        } catch (error) {
            return error;
        }
    }

    async delete(){
        try {
            await fs.promises.writeFile(this.route, JSON.stringify([], null, 2))
        } catch (error) {
            throw new Error(error)
        };
    };
    
};

export { FScontainer }