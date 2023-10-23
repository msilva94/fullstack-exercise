import { Router } from 'express';
import gridRoutes from './grid';

const router = Router();

router.use('/grid', gridRoutes);

export default router;