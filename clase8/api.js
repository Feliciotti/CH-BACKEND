class ProductsAPI {
    constructor() {
        this.products = []
    };

    save(product){

        const productsList =  this.products;

        let id
        if (productsList.length === 0) {
            id = 1;
        } else {
            id = productsList[productsList.length - 1].id + 1;
        };
        product.id = id
        productsList.push(product);

    };

    getById(id){
        const productById = this.products.find(function (product) {
            return product.id == id;
        })
        return productById

    };

    deleteById(idToDelete){
        const ObjtoDelete = this.products.findIndex( product => product.id === idToDelete);
        this.products.splice(ObjtoDelete, 1 );
    };

    updateById(id, newData){
        const productIndex = this.products.findIndex(product => product.id === id)
        if (productIndex === -1) return -1

        this.products[productIndex] = { ...this.products[productIndex], title: newData.title, price: newData.price }
    };

    ultimo(){
        const products =  this.products
        const ultimoProducto = products[products.length - 1]
        return ultimoProducto
    };

    getAll(){
        return this.products
    };


}



module.exports = ProductsAPI;