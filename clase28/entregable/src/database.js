import mongoose from 'mongoose';
import {} from 'dotenv/config'

const client =
mongoose.connect(process.env.URI)
    .then(db => console.log('Database connected'))
    .catch(err => console.log(err))

export { client }