'use strict'

import DB from './model'

const db = new DB()

export const getItem = async (event) => {
  if (event['httpMethod'] !== 'GET') {
    return {
      statusCode: 404,
      body: JSON.stringify({
        messge: 'This is an api that does not meet the conditions'
      })
    }
  }

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'DynamoDB connected! http://localhost:8000',
      items: await db.getItem()
    })
  }
}
