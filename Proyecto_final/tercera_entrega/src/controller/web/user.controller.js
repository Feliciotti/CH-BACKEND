import { User } from "../../models/User.model.js";

async function getUser(req, res){
    const user = await User.find({user: req.user.id})
    res.render('home', { user })
}

export {
    getUser
}