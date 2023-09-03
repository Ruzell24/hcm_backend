import express from 'express';
import connectToDatabase from './service/database';
import userRouter from '@api/user/route.js';
import swagger from './service/docs/index';

const app = express();


connectToDatabase();

app.use('/api-docs', swagger.swaggerUi.serve, swagger.swaggerUi.setup(swagger.swaggerSpec));
app.use('/api/user', userRouter.router)

app.get('/', (req, res) => {
    res.send('Hello Worlssssssd')
})


export default app;