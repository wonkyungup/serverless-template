'use strict'

export const hello = async () => {
  return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Hello world'
      })
  }
}
