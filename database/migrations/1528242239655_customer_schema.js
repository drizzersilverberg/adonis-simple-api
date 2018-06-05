'use strict'

const Schema = use('Schema')

class CustomerSchema extends Schema {
  up () {
    this.create('customers', (table) => {
      table.increments()
      table.string('name')
      table.text('description')
      table.timestamps()
    })
  }

  down () {
    this.drop('customers')
  }
}

module.exports = CustomerSchema
