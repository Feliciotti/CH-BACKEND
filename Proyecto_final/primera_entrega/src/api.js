const fs = require('fs')

class ProductsAPI {
    constructor(route) {
        this.route = route
    };

    async save(product) {
        try {
            const productsList = await this.getAll();

            let id
            if (productsList.length === 0) {
                id = 1;
            } else {
                id = productsList[productsList.length - 1].id + 1;
            };
            product.id = id
            productsList.push(product);

            await fs.promises.writeFile(this.route, JSON.stringify(productsList, null, 2));

            return newId;

        } catch (error) {
            return error
        };
    };

    getById(id){
        const products = fs.readFileSync(this.route, "utf-8");
        const productsParsed = JSON.parse(products);        
        const productById = productsParsed.find(function (product) {
            return product.id == id;
        })
        return productById
    };
    
    
    deleteById(idToDelete){
        const products = fs.readFileSync(this.route, "utf-8");
        const ParsedProducts = JSON.parse(products);     
        const ObjtoDelete = ParsedProducts.findIndex( product => product.id === idToDelete);

        ParsedProducts.splice(ObjtoDelete, 1 );

        fs.promises.writeFile(this.route, JSON.stringify(ParsedProducts, null, 2))

    };

    updateById(id, newData){
        const products = fs.readFileSync(this.route, "utf-8");
        const productsParsed = JSON.parse(products);     
        const productIndex = productsParsed.findIndex(product => product.id === id)
        if (productIndex === -1) return -1

        productsParsed[productIndex] = { ...productsParsed[productIndex], title: newData.title, description: newData.description, photo: newData.photo, price: newData.price, stock: newData.stock }
    };
    
    ultimo(){
        const products =  fs.promises.readFile(this.route, "utf-8");
        const productsParsed = JSON.parse(products);
        const ultimoProducto = productsParsed[productsParsed.length - 1]
        return ultimoProducto
    };
    

    getProductsInCart(cartId){
        const products = fs.readFileSync(this.route, "utf-8");
        const productsParsed = JSON.parse(products);      
        const cartById = productsParsed.find(function (product) {
            return product.id == cartId;
        })  
        
        const productsInCart = cartById.forEach(productos =>{
            return productos
        });
        return productsInCart
    }

    updateCartById(id, newData){
        const products = fs.readFileSync(this.route, "utf-8");
        const productsParsed = JSON.parse(products);
        const productIndex = productsParsed.findIndex(product => product.id === id)
        if (productIndex === -1) return -1

        productsParsed[productIndex] = { ...productIndex[productIndex], products:[newData.products] }
    };

    async getAll() {
        try {
            const products = await fs.promises.readFile(this.route, "utf-8");
            const productsParsed = JSON.parse(products);
            return productsParsed;
        } catch (err) {
            if(err.code === 'ENOENT'){ // significa que el archivo no existe, por ende lo podemos crear con un array vacio
                await fs.promises.writeFile(this.route, JSON.stringify([], null, 2))
                return "Se creó el archivo";
            };
            return err
        };
    };

}


module.exports = {
    ProductsAPI: ProductsAPI
}