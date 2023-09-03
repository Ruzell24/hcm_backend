import express from 'express';
import connectToDatabase from './service/database';
import userRouter from '@api/user/route.js';

const app = express();


connectToDatabase();

app.use('/api/user', userRouter.router)

app.get('/', (req, res) => {
    res.send('Hello Worlssssssd')
})


export default app;