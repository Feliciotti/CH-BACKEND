const db = {
    client:  'mysql',
    connection: {
        host: '127.0.0.1',
        user: 'root',
        password: '',
        database: 'clase22'
    },
    pool: {min: 2, max: 10}
};

export { db }