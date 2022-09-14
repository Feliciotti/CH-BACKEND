import { User } from "../../models/index.js";

// -------------------------------
async function getUser(req, res){
    const user = req.user.name
    console.log(user);
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