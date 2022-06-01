import mongoose from 'mongoose'
import keys from "./keys.js";

const client =
mongoose.connect(keys.mongodb.URI)
    .then(db => console.log('Database connected'))
    .catch(err => console.log(err))

export { client }