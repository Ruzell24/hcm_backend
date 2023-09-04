import express from 'express';
import bodyParser from 'body-parser';
import database from '@service/database';
import userRouter from '@api/user/route.js';
import timeRouter from '@api/calendar/route.js';
import swagger from '@service/docs/index';
import cors from 'cors';

const app = express();

app.use(
    cors({
        origin: '*', // Replace with your client app's origin
    })
);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

database.connectToDatabase();

app.use('/api-docs', swagger.swaggerUi.serve, swagger.swaggerUi.setup(swagger.swaggerSpec));
app.use('/api/user', userRouter.router)
app.use('/api/calendar', timeRouter.router)

app.get('/api', (req, res) => {
    res.send('Hello Worlssssssd')
})


export default app;