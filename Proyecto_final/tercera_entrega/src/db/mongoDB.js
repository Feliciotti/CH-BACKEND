// import { MongoClient } from 'mongodb';
// import { mongo } from '../config/index.js'

// const client = new MongoClient(mongo.db.uri)
// await client.connect()
// const database = client.db(mongo.db.database)

import { MongoClient } from 'mongodb';
import { mongo } from '../config/index.js'

class database {
    constructor(){
        this.client = new MongoClient()
    }

    async connect() {
        try {
            this.client.connect(mongo.db.uri + mongo.db.collection,{
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useFindAndModify: false,
                useCreateIndex: true
            })

            console.log('connected');
            
        } catch (error){
            console.log(error);
        }
    }

    async disconnect(){
        try {
            await this.client.connection.close()
            console.log('disconnected');
        } catch(error){
            console.log(error);
        }
    }

}

export { database }