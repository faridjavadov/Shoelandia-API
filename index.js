import express from 'express'
import { userRoutes } from './routes/userRoutes.js';
import { ConnectMongo } from './config/db.js';
import { userProductRoutes } from './routes/userProductRoutes.js';

const app = express();
app.use(express.json());

ConnectMongo();

app.use('/api/auth', userRoutes)
app.use('/api/product',userProductRoutes)

app.listen(8080,()=>{
    console.log('Server is running...');
})