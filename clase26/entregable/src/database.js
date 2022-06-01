import mongoose from 'mongoose';
import settings from './settings.js';

const client =
mongoose.connect(settings.mongoAtlas.uri)
    .then(db => console.log('Database connected'))
    .catch(err => console.log(err))

export { client }