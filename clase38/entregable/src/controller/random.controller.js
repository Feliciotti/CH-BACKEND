import { getForked } from '../services/random.services.js';
import { logger } from '../logs/log.js';

async function getForkedController(req, res) {

    const forked = await getForked();
    res.status(200).json(forked);
    logger.info('ok')
}

export { getForkedController }