import {} from 'dotenv/config';

export default {
    fileSystem: {
        path: './db/files'
    },
    mongoAtlas: {
        client: process.env.SELECTED_DB,
        uri: "mongodb+srv://amy:mongopassnro00@ecommerce.q5uzu.mongodb.net/?retryWrites=true&w=majority"
    },
    sqlite3: {
        client: 'sqlite3',
        connection: {
            filename: `./db/files/ecommerce.sqlite`
        },
        useNullAsDefault: true
    },
    mariaDB: {
        client: 'mysql',
        connection: {
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'ecommerce'
        }
    }
};