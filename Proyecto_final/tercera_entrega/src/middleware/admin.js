const isAdmin = (req, res, next) => {
    const { admin } = req.query

    if(!admin) return res.json({message: 'Regresa a la forma humilde que mereces!'})

    next()
}



export { isAdmin }