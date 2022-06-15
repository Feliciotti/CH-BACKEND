import db from '../options/db.js'
import sqLITE from '../options/sqLITE.js'
import { SQLcontainer } from '../container/SQLapi.js'

const prdcts = new SQLcontainer( db, 'products');
const mssgs = new SQLcontainer( sqLITE, 'messagesRecord' );

export { prdcts, mssgs }