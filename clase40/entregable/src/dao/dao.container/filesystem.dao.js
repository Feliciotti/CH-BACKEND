import fs from 'fs';
import { files } from '../../../config/index.js';

class FScontainer{
    constructor(fileName) {
        this.fileName = `${files.route}/${fileName}.json`;
    };
    
    async getAll() {
        try {
            await fs.promises.readFile(this.fileName, "utf-8");

        } catch (err) {

            return err
        };
    };d

    async save(e) {
        try {
            const array = await this.getAll();
            array.push(e);

            await fs.promises.writeFile(this.fileName, JSON.stringify(array, null, 2))

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

            array.splice(index, 1)

            await fs.promises.writeFile(this.fileName,
                JSON.stringify(array, null, 2),
                (err) => {err}
            );

        } catch (error){
            error
        }
    };

    async updateById(id, newData) {
        try {
            const array = await this.getAll();

            const index = array.findIndex((e) => e.id == id);

            array[index] = { ...array[index], ...newData };

            await fs.promises.writeFile(this.fileName, JSON.stringify(array, null, 2));

            return array[index];

        } catch (error) {
            return error;
        }
    }

    async delete(){
        try {
            await fs.promises.writeFile(this.fileName, JSON.stringify([], null, 2))
        } catch (error) {
            throw new Error(error)
        };
    };

};

export { FScontainer }