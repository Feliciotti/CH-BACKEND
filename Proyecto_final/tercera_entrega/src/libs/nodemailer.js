import { createTransport } from "nodemailer";
import 'dotenv/config';

const TEST_MAIL = 'melyna2@ethereal.email'
const TEST_PASS = 'A1Dk2343dzAXGU6WbD'

const transporter = createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth:{
        user: TEST_MAIL,
        pass: TEST_PASS
    }
});

const mailOptions = {
    from: 'ecommerce',
    to: TEST_MAIL,
    subjet: 'New user'
}

export {
    transporter,
    mailOptions
}