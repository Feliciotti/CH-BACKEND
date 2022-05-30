const login =(req, res, next) => {
    if (req.session?.nombre) {
        next()
    } else {
        res.redirect('/login')
    }
};

export {login};