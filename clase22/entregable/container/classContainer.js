import knex from 'knex';

class ContainerSQL {
    constructor(config, table){
        this.knex = knex(config)
        this.table = table;
    };

    async save(item){
        await this.knex.insert(item).into(this.table)
    };

    async getAll(){
        const all = this.knex.from(this.table).select('*')
        return all
    };
};


export { ContainerSQL }