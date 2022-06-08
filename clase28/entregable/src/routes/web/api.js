import { Router } from 'express';
import { fork } from 'child_process';

const random = Router();




random.route('/api/randoms')
    .get((req, res) => {
        const min = 1
        const max = 1000

        const output = {}

        for (let i = 0; i < 10000; i++) {
            let number = Math.floor(Math.random() * (max - min) + min);
            
            if(output[number]){
                output[number]++
            } else {
                output[number] = 1
            }
        }
        res.send(output)
    });

export { random }
