const { Router } = require ('express')
const UserController = require('../controllers/UserController')

const router = Router()

router.get('/api/v1/wallet', UserController.takeAllUsers)
router.get('/api/v1/wallet/:id', UserController.takeOneUser)
router.post('/api/v1/wallet', UserController.CreateUser)
router.put('/api/v1/wallet/:id', UserController.UpdateUser)
router.delete('/api/v1/wallet/:id', UserController.DeleteUser)

module.exports = router
