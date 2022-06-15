import { knex } from 'knex';
import settings from '../../settings.js';

class SQLcontainer {

    constructor(setting, table) {
        this.knex = knex(setting)
        this.table = table
    }

    
    async getAll() {
        try {
            return this.knex.select('*').from(this.table)
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
            return this.knex.select('*').from(this.table).where('id', id)
        } catch (error) {
            throw new Error(error)
        }
    }

    async updateByID(id) {
        try {
            return this.knex.from(this.table).where('id', id.id).update(id)
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

export {SQLcontainer}