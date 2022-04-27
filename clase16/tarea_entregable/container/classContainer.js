const knex = require('knex');

class Container {
    constructor(config){
        this.config = config;
        this.knex = knex(config)
    };
};

class ContainerProducts extends Container {
    constructor(config){
        super(config)
    };

    saveProducts(product){
        knex('products').insert(product)
        .then(() => {
            console.log('product inserted');
        })
        .catch( err => {
            console.log(err);
        })
        .finally(() => {
            knex.destroy();
        });
    };
};

class ContainerMessages extends Container {
    constructor(config){
        super(config)
    };

    saveMessages(message){
        knex('messagesRecord').insert(message)
        .then(() => {
            console.log('message inserted');
        })
        .catch( err => {
            console.log(err);
        })
        .finally(() => {
            knex.destroy();
        });
    };
};

module.exports = ContainerProducts, ContainerMessages