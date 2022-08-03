import 'dotenv/config';
import { initializeApp, applicationDefault } from "firebase-admin/app";
import { getFirestore } from 'firebase-admin/firestore'
import { firebase } from '../../../config/index.js';

initializeApp({
    credential: applicationDefault(),
    databaseURL: firebase.url
  });

const db = getFirestore()

class FirebaseContainer {
    constructor(collectionName){
        this.collection = db.collection(collectionName)
    }

    async getAll() {
        try {
            const querySnapshot = await this.collection.get()

            return querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }))


        } catch (error) {
            throw new Error(error)
        }
    }

    async save(e){
        try {
            await this.collection.add(e)

        } catch (error) {
            throw new Error(error)
        }
    }

    async getById(id){
        try {
            const item = await this.collection.doc(id).get()

            return item.data

        } catch (error) {
            return error
        }
    }

    async updateById(id, newData){
        try {
            const item = await this.collection.doc(id).update(newData)
            return item
        } catch (error) {
            throw new Error(error)
        }
    }

    async deleteById(id){
        try {
            await this.collection.doc(id).delete()

        } catch (error) {
            throw new Error(error)
        }
    }

}

export { FirebaseContainer }