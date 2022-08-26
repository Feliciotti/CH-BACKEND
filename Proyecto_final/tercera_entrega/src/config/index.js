const mongo = {
    db: {
        database: 'ecommerce',
        uri: process.env.MONGO_DB_URI
    }
};

const firebase = {
    url: 'https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-pb2mu%40ecommerce-backend-76179.iam.gserviceaccount.com'
};

const files = {
    route: 'db/files',
};
  
export { mongo, files, firebase};