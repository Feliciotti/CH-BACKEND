import { User } from "../../model/User.model.js";

// -------------------------------
async function getUser(req, res){
    const user = await User.find({user: req.user.id})
    res.render('home', { user })
}

async function getProfile(req, res) {
    const user = await User.findOne({user: req.user.id}).lean()
    res.render('profile', { user })
}

// -------------------------------

export {
    getUser,
    getProfile
} //to index