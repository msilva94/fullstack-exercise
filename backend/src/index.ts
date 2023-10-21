import express, { Express } from 'express';
import cors from 'cors';
import apiRoutes from './routes';

const app: Express = express();

app.use(cors());

app.use('/api', apiRoutes);

app.listen(8000, () => console.log('app is running'));