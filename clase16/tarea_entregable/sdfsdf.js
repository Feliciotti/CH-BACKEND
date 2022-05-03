const { db } = require('./options/db');
const knex = require('knex')(db);

class ContainerSQL {
    constructor(config, table){
        this.knex = knex(config)
        this.table = table;
    };

    async save(item){
        try {
            await this.knex.insert(item).into(this.table)
            console.log('items inserted');
        } catch (err) {
            console.log(err);
        } finally {
            knex.destroy();
        }
    };

    async getAll(){
        const all = this.knex.from(this.table).select('*')
        return all
    };
};

const prdcts = new ContainerSQL( db, 'products');
prdcts.save({
    name: 'Auto nuevo',
    price: 20000000,
    photoURL: 'www.csdsc.com'
})


// module.exports = ContainerSQL