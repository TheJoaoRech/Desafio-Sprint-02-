const bodyParser = require('body-parser')
const users = require('./userRoute')

module.exports = app => {
    app.use(bodyParser.json())
    app.use(users)
}