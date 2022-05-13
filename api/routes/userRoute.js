const { Router } = require ('express')
const UserController = require('../controllers/UserController')

const router = Router()

router.get('/api/v1/wallet', UserController.takeAllUsers)
router.get('/api/v1/wallet/:id', UserController.takeOneUser)

module.exports = router
