import { cartsDao, ordersDao } from '../db.controller.js';
import { transporter } from '../../libs/index.js';

async function postOrder(req, res){
    try {
        const { cart_id } = req.body
        const buyer = await req.user.email
        const buyerCart = await cartsDao.getById(cart_id)

        let buyerSelection = buyerCart.products.map(e => e.title)
        let status = 'generated'
        let allOrders = await ordersDao.getAll()

        const order_number = allOrders.length + 1

        const newOrder = {
            from: buyer,
            order_number: order_number,
            order: buyerSelection,
            at: Date().toLocaleString(),
            status: status
        }

        await ordersDao.add(newOrder)
            try {
                transporter.sendMail({
                    from: `'ecommerce', <${process.env.NODEMAILER}>`,
                    to: process.env.NODEMAILER,
                    subject: 'New order',
                    html: `
                        <h1>New order generated</h1>
                        <ul>
                            <li>From: ${buyer}</li>
                            <li>Purchased items: ${buyerSelection}</li>
                            <li>At: ${newOrder.at} </li>
                            <li>Phone number: ${req.user.phoneNumber}</li>
                            <li>Send to address: ${req.user.address}</li>
                        </ul>
                    `
                });
                console.log('sended');
            
            }catch(error){
                console.log(error);
            }
 
        res.status(200).json('Orden generada')

    } catch (error) {
        res.json(error)
    }
}

export {
    postOrder
}