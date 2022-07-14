import { Router } from 'express';
import { fork } from 'child_process';
import { logger } from '../../logs/log.js';

const apiRandom = Router();

apiRandom.route('/api/random')
    .get((req, res) => {

        const forked = fork('src/api-random/random.js')

        forked.send('start')
        forked.on('message', msg => {
            res.send(msg)
        })

        logger.info('ok')
    });

export { apiRandom }
