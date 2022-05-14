const database = require('../models')

class UserController {
    static async takeAllUsers(req, res){
        try {
            const allUsers = await database.Users.findAll()
            return res.status(200).json(allUsers)
        } catch (error){
            return res.status(500).json(error.message)
        }
    }
    static async takeOneUser(req, res) {
        const { id } = req.params
        try{
            const oneUser = await database.Users.findOne({
                where:{
                    id:Number(id)
                }
            })
            return res.status(200).json(oneUser)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async CreateUser(req, res){
        const newUser = req.body
        try {
            const newUserCreated = await database.Users.create(newUser)
            return res.status(201).json(newUserCreated)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
}

module.exports = UserController