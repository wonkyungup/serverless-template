import { MongoClient } from 'mongodb'

const url = 'mongodb://localhost:27017'
const dbName = 'Local'
const collectName = 'documents'

export default class DB {
    constructor() {
        this._client = new MongoClient(url)
    }

    async collection() {
        await this._client.connect()

        const db = this._client.db(dbName)
        const collection = db.collection(collectName)

        if (collection) {
            return collection
        }
    }

    async getItem () {
        try {
            return (await this.collection()).find({}).toArray()
        } catch (err) {
            return 'DB ERROR :: getItem'
        }
    }
}