import '../../middleware/passport.js'

async function singupForm (req, res){
    await res.render('singup')
}

async function singup(req, res){
    const {name, email, password, age, address, phoneNumber} = req.body
    const emailUser =  await User.findOne({email: email})

    if(emailUser){
        res.render('logupErr')
    } else {
        const newUser = new User({name, email, password, age, address, phoneNumber})
        newUser.password = await newUser.encryptPassword(password)

        await newUser.save()

        res.redirect('login')
    }
}