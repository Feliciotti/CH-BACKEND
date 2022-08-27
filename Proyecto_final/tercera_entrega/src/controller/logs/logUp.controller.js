import { User } from '../../model/User.model.js';
import { transporter, mailOptions } from "../../libs/index.js";

// -------------------------------
async function logupForm (req, res){
    await res.render('logup')
}

async function logup(req, res){
    const {name, email, password, age, address, phoneNumber} = req.body
    const emailUser =  await User.findOne({email: email})

    console.log(req.file.path);


    if(emailUser){
        res.render('logupErr')
    } else {
        const newUser = new User({
            name,
            email,
            password,
            img: req.file.path,
            age,
            address,
            phoneNumber
        })
        // newUser.password = await newUser.encryptPassword(password)

        await newUser.save()

        const newInfo = []

        newInfo.push

        if(newUser){
            try {
                const info = await transporter.sendMail(mailOptions);
                console.log(info);
            
            }catch(error){
                console.log(error);
            }
        }

        res.redirect('login')
    }
}
// -------------------------------

export {
    logupForm,
    logup
}; // to index