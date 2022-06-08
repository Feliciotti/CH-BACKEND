import mongoose from 'mongoose';
import settings from './settings.js';

const client =
mongoose.connect(settings.mongoAtlas.URI)
    .then(db => console.log('Database connected'))
    .catch(err => console.log(err))

export { client }