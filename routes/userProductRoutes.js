import express from 'express'
import { userProductController } from '../controllers/userProductController.js';

export const userProductRoutes = express.Router();

userProductRoutes.post('/getcart',userProductController.getCartData)
userProductRoutes.post('/getfavorite',userProductController.getFavoriteData)

userProductRoutes.put('/addcart',userProductController.addCart)
userProductRoutes.put('/removecart',userProductController.removeCart)
userProductRoutes.put('/addfavorite',userProductController.addFavorite)
userProductRoutes.put('/removefavorite',userProductController.removeFavorite)