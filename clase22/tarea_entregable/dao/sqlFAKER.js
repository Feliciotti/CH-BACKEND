import db from '../options/db.js';
import { createNFakeProducts } from '../mock/faker.js';
import { SQLcontainer } from '../container/SQLapi.js';

const prdctsFaker = new SQLcontainer( db, createNFakeProducts(5));

export { prdctsFaker}