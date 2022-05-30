const isAdmin = (req, res, next) => {
    const {admin} = req.query

    if(!admin) return res.status(401).json({message: 'No es admin. REGRESA A LA FORMA HUMILDE QUE MERECES'})

    next()
};

export {isAdmin};