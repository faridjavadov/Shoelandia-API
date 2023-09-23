import express from 'express'
import { userController } from '../controllers/userController.js';
import { userProductController } from '../controllers/userProductController.js';

export const userRoutes = express.Router();

userRoutes.get('/',userController.getAllData)
userRoutes.post('/login',userController.login)
userRoutes.post('/register',userController.register)
userRoutes.post('/confirmcode',userController.userConfirm)
userRoutes.post('/forgotpassword',userController.forgetPassword)
userRoutes.post('/deleteuser',userController.deleteUser)
userRoutes.put('/edituser',userController.editUser)
