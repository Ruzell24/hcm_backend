import express from 'express';
import bodyParser from 'body-parser';
import database from '@service/database';
import userRouter from '@api/user/route.js';
import swagger from '@service/docs/index';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

database.connectToDatabase();

app.use('/api-docs', swagger.swaggerUi.serve, swagger.swaggerUi.setup(swagger.swaggerSpec));
app.use('/api/user', userRouter.router)

app.get('/', (req, res) => {
    res.send('Hello Worlssssssd')
})


export default app;