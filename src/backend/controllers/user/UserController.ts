import {UserService} from "../../services/userService";
import { Request, Response } from "express";
import UserModel, {PasswordVerify} from "../../models/userModel";
import addUser from "../../../Core domain/car-store/application/interactors/index";


export class UserController {

    async register(req: Request, res: Response, next) {
        try {
            const user = req.body
            addUser.execute(user)
            res.json('Utilisateur ajouter')
            next()
        } catch (e) {
            throw new Error(e)
        }
    }

    async login(req: Request, res: Response, next) {
        const { email, password } = req.body;

        return UserModel.findOne({ email })
            .then(user => {
                if(!user) {
                    const message = "Utilisateur inconnu"
                    return res.status(404).json({ message })
                } else {
                    PasswordVerify(user, password, res)
                }
            })
            .catch(err => res.status(500).send(err))
    }

    async deleteUser(req: Request, res: Response, next) {
        try {
            const userService = new UserService()
            await userService.userDelete(req.params.id)
            res.json('Utilisateur supprimé')
            next()
        } catch (e) {
            throw new Error(e)
        }
    }

     async getUser(req: Request, res: Response, next) {
        try {
            const userService = new UserService()
            const user = await userService.getUser(req.params.id)
            res.json(user)
            next()
        } catch (e) {
            throw new Error(e)
        }
    }

    async getUsers(req: Request, res: Response, next) {
        try {
            const userService = new UserService()
            const users = await userService.getUsers()
            res.json(users)
            next()
        } catch (e) {
            throw new Error(e)
        }
    }
}







//

//

//


