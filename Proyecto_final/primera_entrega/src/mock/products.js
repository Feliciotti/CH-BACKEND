import faker from 'faker'
faker.locale = 'es'

function createNproducts(n) {
    const products = []
    for (let i = 1; i <= n; i++) {
        const product = createProducts(i)
        products.push(product)
    };

    return products
};

function createProducts(id) {
    const product = {
        title: faker.commerce.product(),
        price: faker.commerce.price(500, 5000, 0, '$'),
        thumbnail: `${faker.image.imageUrl()}?${isNaN(id) ? 1 : id}`,
        description: faker.commerce.productDescription(),
        stock: faker.datatype.number({ max: 250 })
    }
    if (id) {
        product.id = id
    };

    return product
};

export {
    createNproducts,
    createProducts
}