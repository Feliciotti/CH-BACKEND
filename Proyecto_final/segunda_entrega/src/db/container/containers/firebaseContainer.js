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
        this.coleccion = db.collection(collectionName)
    }

    async getAll() {
        try {
            const snapshot = this.coleccion

            return snapshot.docs.map(doc => doc.data());

        } catch (error) {
            throw new Error(error)        
        }
    }

    async save(e){
        try {
            const query = await this.getAll()

            let id = 1
            let doc = query.doc(`${id}`)
            const created = await doc.create( { e } )
            id++

            return created

        } catch (error) {
            throw new Error(error)
        }
    }

    async getById(id){
        try {
            const query = await this.getAll()

            const doc = query.doc(id)
            const item = await doc.get()
            const res = item.data()

            return res

        } catch (error) {
            return error
        }
    }

    async updateById(id, newData){
        try {
            const query = await this.getAll()

            const doc = query.doc(id)

            let item = await doc.update({newData});

            return `Actualizado: ${ item }`

        } catch (error) {
            throw new Error(error)
        }
    }

    async deleteById(id){
        try {
            const query = await this.getAll()

            const doc = query.doc(id);
            const item = await doc.delete()

            return `Eliminado: ${ item }`
            
        } catch (error) {
            throw new Error(error)
        }
    }
}

export { FirebaseContainer }