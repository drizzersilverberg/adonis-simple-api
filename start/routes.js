'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

const Route = use('Route')

Route.get('/', ({ request }) => {
  return { greeting: 'Hello world in JSON' }
})

Route.get('customers', 'CustomerController.index')
Route.post('customers', 'CustomerController.store')
Route.get('customers/:id', 'CustomerController.show')
Route.patch('customers/:id', 'CustomerController.update')
Route.delete('customers/:id', 'CustomerController.destroy')
