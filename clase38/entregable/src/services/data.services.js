import { entries } from "../dao/data.dao.js";

async function getData() {
    return entries
}

export { getData }