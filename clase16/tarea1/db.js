const options = {
    client:  'mysql',
    connection: {
        host: '127.0.0.1',
        user: 'root',
        password: '',
        database: 'ecommerce'
    },
    pool: {min: 2, max: 10}
};

module.exports = { options }