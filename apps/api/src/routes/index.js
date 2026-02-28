import { Router } from 'express';
import healthCheck from './health-check.js';
import emailRouter from './email.js';

const router = Router();

export default () => {
    router.get('/health', healthCheck);
    router.use('/', emailRouter);

    return router;
};