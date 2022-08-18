import { logOut } from "../../controller/index.js";
import { Router } from "express";

//---------------------------------------

const logoutLink = Router ()

logoutLink.route('/logout')
    .get( logOut )

export { logoutLink }