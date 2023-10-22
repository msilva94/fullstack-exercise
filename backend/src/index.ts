import express, { Express, Response } from 'express';
import cors from 'cors';
import path from 'path';
import apiRoutes from './routes';

const app: Express = express();
const PORT = 8000;

app.use(cors());

app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', apiRoutes);

app.get('*', (_, res: Response) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.listen(PORT, () => console.log('app is running'));