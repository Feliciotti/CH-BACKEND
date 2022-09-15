import { User } from "../../models/index.js";

// -------------------------------
async function getUser(req, res){
    const user = req.user.name
    console.log(user);
    res.render('home', { user })
}

async function getProfile(req, res) {
    const userId = await req.user.id
    let user = await User.findOne({_id: userId}).lean()

    res.render('profile', { user })
}

// -------------------------------

export {
    getUser,
    getProfile
} //to index