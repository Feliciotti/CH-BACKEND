import '../middleware/passport/local.js';


async function logOut(req, res) {
    await req.session.destroy()
    res.redirect('/')
};

export { logOut }