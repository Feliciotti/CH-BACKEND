import {
    getCart,
    postCart,
    deleteCart,
    getCartProducts,
    postCartProducts
} from '../../controller/cart.controller.js'

const cartRouter = Router();

cartRouter.route('/carrito')
    .get ( getCart )
    .post( postCart );

cartRouter.route('/carrito/:id')
    .delete( deleteCart );
    
cartRouter.route('/carrito/:id/productos')
    .get( getCartProducts )
    .post( postCartProducts);

export { cartRouter };