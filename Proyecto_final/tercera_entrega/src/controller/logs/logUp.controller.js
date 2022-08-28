import { User } from '../../models/index.js';
import { transporter } from "../../libs/index.js";

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
            try {
                transporter.sendMail({
                    from: "'ecommerce', <melyna2@ethereal.email>",
                    to: 'melyna2@ethereal.email',
                    subject: 'New user registered',
                    html: `
                        <h1>New user information</h1>
                        <ul>
                            <li>Name: ${name}</li>
                            <li>e-mail: ${email}</li>
                            <li>Phone number: ${phoneNumber}</li>
                            <li>Address: ${address}</li>
                            <li>Age: ${age}</li>
                            <li>Registed at: ${Date().toLocaleString()}</li>
                        </ul>
                    `
                });
                console.log('sended');
            
            }catch(error){
                console.log(error);
            }
        }

        res.redirect('login')
}

// -------------------------------

export {
    logupForm,
    logup
}; // to index