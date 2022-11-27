'use strict'

import DB from './model'

const db = new DB()

export const index = async (event) => {
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
      message: 'MongoDB connected! mongodb://localhost:27017',
      items: await db.getItem()
    })
  }
}