import knex from 'knex';

class SQLcontainer {

    constructor(setting, table) {
        this.knex = knex(setting)
        this.table = table
    }

    async getAll() {
        try {
            const all = this.knex.select('*').from(this.table)
            return all
        } catch (error) {
            throw new Error(error)
        }
    }
    
    async save(e) {
        try {
            return this.knex.insert(e).into(this.table)
        } catch (error) {
            throw new Error(error)
        }
    }

    async getByID(id) {
        try {
            const objet = this.knex.select('*').from(this.table).where('id', id)
            return objet
        } catch (error) {
            throw new Error(error)
        }
    }

    async updateByID(id) {
        try {
            this.knex.from(this.table).where('id', id.id).update(id)
            return ('Updated!')
        } catch (error) {
            throw new Error(error)
        }
    }

    async deleteById(id) {
        try {
            return this.knex.delete().from(this.table).where('id', id)
        } catch (error) {
            throw new Error(error)
        }
    }

    async lastAdded(){
        const array = await this.getAll();  
        const lastAdded = array[array.length - 1]
        return lastAdded
    };

    async deleteAll() {
        try {
            return this.knex.delete().from(this.table)
        } catch (error) {
            throw new Error(error)
        }
    }

    async destroy() {
        await this.knex.destroy();
    }
}

export { SQLcontainer }