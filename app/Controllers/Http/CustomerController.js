'use strict'

const Customer = use('App/Models/Customer')

class CustomerController {
  async index ({ response }) {
    const customers = await Customer.all()
    response.status(200).json({
      message: 'Here are your customers',
      data: customers
    })
  }

  async store ({ request, response, params: { id } }) {
    const { name, description } = request.post()

    const customer = await Customer.create({ name, description })

    response.status(201).json({
      message: 'Successfuly created a new customer',
      data: customer
    })
  }

  async show ({ request, response, params: {id} }) {
    const customer = request.post().customer

    response.status(200).json({
      message: 'Here is your customer',
      data: customer
    })
  }

  async update ({ request, response, params: {id} }) {
    const { name, description, customer } = request.post()

    customer.name = name
    customer.description = description

    await customer.save()

    response.status(200).json({
      message: 'Successfuly updated the customer',
      data: customer
    })
  }

  async destroy ({request, response, params: {id} }) {
    const customer = request.post().customer

    await customer.delete()

    response.status(200).json({
      message: 'Successfuly deleted the customer',
      id
    })
  }
}

module.exports = CustomerController
