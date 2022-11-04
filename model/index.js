import AWS from 'aws-sdk'

AWS.config.update({
    region: 'ap-northeast-2',
    endpoint: new AWS.Endpoint('http://localhost:8000')
})

export default class DB {
    constructor () {
        this.conn = new AWS.DynamoDB.DocumentClient({ convertEmptyValues: true })
    }

    async getItem () {
        return await this.conn.scan({ TableName: 'database' }).promise()
    }
 }