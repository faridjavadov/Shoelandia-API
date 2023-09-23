import { User } from "../models/userModel.js";

export const userProductController = {
    addCart: async (req, res) => {
        try {
            const filter = { email: req.body.email };

            await User.findOneAndUpdate(filter, {
                $push: {
                    cart: req.body.item
                }

            })
            res.send('Succesfully added to cart')

        } catch (error) {
            console.log(error);
        }
        console.log('added');

    },
    removeCart: async (req, res) => {
        try {
            const filter = { email: req.body.email };

            await User.findOneAndUpdate(filter, {
                $pull: {
                    cart: req.body.item
                }

            })
            res.send('Succesfully removed from cart')

        } catch (error) {
            console.log(error);
        }
    },
    addFavorite: async (req, res) => {
        try {
            const filter = { email: req.body.email };
            
            await User.findOneAndUpdate(filter, {
                $push: {
                    favorite: req.body.item
                    
                }

            })
            res.send('Succesfully added to favorite')

        } catch (error) {
            console.log(error);
        }
    },
    removeFavorite: async (req, res) => {
        try {
            const filter = { email: req.body.email };
            console.log(req.body.item);
            await User.findOneAndUpdate(filter, {
                $pull: {
                    favorite: req.body.item
                }

            })
            res.send('Succesfully removed from favorite')

        } catch (error) {
            console.log(error);
        }
    },
    getCartData: async (req, res) => {
        try {
            const data = await User.find({ email: req.body.email });
            res.send(data[0].cart)
        } catch (error) {

        }
    },
    getFavoriteData: async (req, res) => {
        try {
            const data = await User.find({ email: req.body.email });
            res.send(data[0].favorite)
           
        } catch (error) {

        }
    }   
}