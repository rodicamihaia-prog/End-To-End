const { Router} = require('express')
countryController = require('../controllers/countries')

const countryRouter = Router()

countryRouter.get('/', countryController.index)

module.exports = countryRouter