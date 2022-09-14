const isAdmin = async (req, res, next) => {

    const user = req.user

    const array = []
    array.push(user)

    array.role = array.map(role => role.name)

    // console.log(user, array.role);
    
    if(user.role != 'admin') return res.json({message: 'Regresa a la forma humilde que mereces!'})

    next()
}

export { isAdmin };