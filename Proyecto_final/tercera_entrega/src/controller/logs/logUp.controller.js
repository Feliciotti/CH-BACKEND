import { User } from '../../models/User.model.js';

async function logupForm (req, res){
    await res.render('logup')
}

async function logup(req, res){
    const {name, email, password, age, address, phoneNumber} = req.body
    const emailUser =  await User.findOne({email: email})


    if(emailUser){
        res.render('logupErr')
    } else {
        const newUser = new User({
            name,
            email,
            password,
            img,
            age,
            address,
            phoneNumber
        })
        newUser.password = await newUser.encryptPassword(password)

        await newUser.save()

        res.redirect('login')
    }
}

export {
    logupForm,
    logup
}