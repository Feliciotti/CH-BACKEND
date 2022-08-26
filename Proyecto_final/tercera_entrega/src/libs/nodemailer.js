import { createTransport } from "nodemailer";

const TEST_MAIL = process.env.NODEMAILER
const TEST_PASS = process.env.NODEMAILER_PASS

const transporter = createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth:{
        user: TEST_MAIL,
        pass: TEST_PASS
    }
});

const mailOptions = {
    from: 'Node server',
    to: TEST_MAIL,
    subjet: 'testing',
    html: '<h1>HOLA</h1>'
}

try {
    const info = await transporter.sendMail(mailOptions);
    console.log(info);

}catch(error){
    console.log(error);
}