import { MongoClient } from 'mongodb';
import { mongo } from '../../config/index.js'

const client = new MongoClient(mongo.db.uri)
await client.connect()
const database = client.db(mongo.db.collection)

export { database }