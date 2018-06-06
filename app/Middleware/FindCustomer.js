'use strict'

class FindCustomer {
  async handle ({ request }, next) {
    // call next to advance the request
    await next()
  }
}

module.exports = FindCustomer
