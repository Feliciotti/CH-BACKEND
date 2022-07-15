import { Router } from 'express';
import { getDataController } from '../../controller/data.controller.js';

const routerInfo = new Router();

routerInfo.get('/', getDataController)

export { routerInfo }
