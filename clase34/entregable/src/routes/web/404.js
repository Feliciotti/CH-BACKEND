import { Router } from 'express';
import { logger } from '../../logs/log.js';

const none = Router();

none.get('*', (req, res) => {
    logger.warn('404')
    res.status(404).send('404')
})

export {none}