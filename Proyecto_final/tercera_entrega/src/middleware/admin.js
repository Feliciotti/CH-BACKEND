import { User } from "../models/index.js"

const isAdmin = async (req, res, next) => {

    const admin = await User.findOne({user: req.user.id}).lean()
    
    if(admin.role != 'admin') return res.json({message: 'Regresa a la forma humilde que mereces!'})

    next()
}

export { isAdmin }