import { Router } from 'express';
import { fork } from 'child_process';

const apiRandom = Router();

apiRandom.route('/api/random')
    .get((req, res) => {

        const forked = fork('./api-random/random.js')
        forked.on('message', msg => {
            if(msg == 'sended'){
                res.end(`${output}`)
            }
        })
    });

export { apiRandom }
