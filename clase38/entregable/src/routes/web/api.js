import { Router } from 'express';
import { getForkedController } from '../../controller/random.controller.js';

const apiRandom = new Router();

apiRandom.get('/', getForkedController)

export { apiRandom }
