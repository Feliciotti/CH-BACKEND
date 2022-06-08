import {} from 'dotenv/config'

export default {
    mongoAtlas: {
        SELECTED_DB: process.env.SELECTED_DB,
        URI: process.env.MONGO_DB_URI
    }
};
