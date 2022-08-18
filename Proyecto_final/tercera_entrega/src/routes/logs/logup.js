import { logUp } from "../../controller/index.js";
import { Router } from "express";

//---------------------------------------

const logupLink = Router ()

logupLink.route('/logup')
    .get( logUp )

export { logupLink }