import { MongoClient } from 'mongodb';
import { mongo } from '../../config/index.js'

class MongoClientDB {
    constructor(){
        this.client = new MongoClient()
    }

    async connect() {
        try {
            this.client.connect(mongo.db.uri+mongo.db.collection)

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

export { MongoClientDB }