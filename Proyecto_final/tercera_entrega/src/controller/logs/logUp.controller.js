import { User, Role } from '../../models/index.js';
import { transporter } from '../../libs/index.js';

// -------------------------------
async function logupForm (req, res){
    await res.render('logup')
}

async function logup(req, res){
    const {name, email, password, age, address, phoneNumber, role} = req.body
    const emailUser =  await User.findOne({email: email})

    if(emailUser){
        res.render('logupErr')
    } else {
        //creating new user
        const newUser = new User({
            name,
            email,
            password,
            //string of img path to src/public
            // img: req.file.path,
            age,
            address,
            phoneNumber
        })

        newUser.password = await newUser.encryptPassword(password)

        if (role){
            //searchs the role claimed by the new user and assigns to it
            const getRole = await Role.find({name: {$in: role} })
            newUser.role = getRole.map(role => role._id)
        } else {
            //if the new user doesn't claims a role, gets assigns 'user' role by default
            const role = await Role.findOne({name: 'user'})
            newUser.role = [role._id]
        }
        
         // Saving user in mongodb
        await newUser.save()
            // try {
            //     transporter.sendMail({
            //         from: "'ecommerce', <melyna2@ethereal.email>",
            //         to: 'melyna2@ethereal.email',
            //         subject: 'New user registered',
            //         html: `
            //             <h1>New user information</h1>
            //             <ul>
            //                 <li>Name: ${name}</li>
            //                 <li>e-mail: ${email}</li>
            //                 <li>Phone number: ${phoneNumber}</li>
            //                 <li>Address: ${address}</li>
            //                 <li>Age: ${age}</li>
            //                 <li>Registed at: ${Date().toLocaleString()}</li>
            //             </ul>
            //         `
            //     });
            //     console.log('sended');
            
            // }catch(error){
            //     console.log(error);
            // }
        
    }

    res.redirect('login')
}

// -------------------------------

export {
    logupForm,
    logup
}; // to index