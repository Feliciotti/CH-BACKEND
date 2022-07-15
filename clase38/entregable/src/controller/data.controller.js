import { getData } from '../services/data.services.js';
import { logger } from '../logs/log.js';

async function getDataController(req, res) {
    logger.info('ok')
    const data = await getData();
    res.status(200).json(data);
}

export { getDataController }