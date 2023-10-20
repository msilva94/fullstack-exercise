import express, { Express } from 'express';
import apiRoutes from './routes';

const app: Express = express();

app.use('/api', apiRoutes);

app.listen(8000, () => console.log('app is running'));