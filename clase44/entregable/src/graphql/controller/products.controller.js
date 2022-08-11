import {
    GraphQLFloat,
    GraphQLList,
    GraphQLNonNull,
    GraphQLString,
    GraphQLID,
    GraphQLInt
} from "graphql";

import { productsDao } from '../../controller/db.controller.js';
import { ProductType } from '../types/Products.js'


// -------- FUNCTIONS --------

const getProducts = {
    type: new GraphQLList(ProductType),
    description: 'return a string',
    resolve: async () => {
        const products = await productsDao.getAll()
        return products
    }
};

const productById = {
    type: ProductType,
    args: {
        id: { type: GraphQLID }
    },
    resolve: async (_, { id }) => {
        const product = await productsDao.getById(id)
        console.log(product);
        return product
    }
};

const postProduct = {
    type: ProductType,
    args: {
        title: { type: new GraphQLNonNull(GraphQLString) },
        price: { type: new GraphQLNonNull(GraphQLFloat) },
        thumbnail: { type: new GraphQLNonNull(GraphQLString) },
        desc: {type: new GraphQLNonNull(GraphQLString) },
        stock: {type: new GraphQLNonNull(GraphQLFloat) }
    },
    resolve: async (_, { title, price, thumbnail, desc, stock }) => {
        const added = await productsDao.save({
          title,
          price,
          thumbnail,
          desc,
          stock
        });
        console.log(added);
        return added;
      },
};

const putProduct = {
    type: ProductType,
    args: {
        id: { type: GraphQLID },
        title: { type: GraphQLString },
        price: { type: GraphQLFloat },
        thumbnail: { type: GraphQLString },
        desc: {type: GraphQLString },
        stock: {type: GraphQLFloat }
    },
    resolve: async(_, {id, title, price, thumbnail, desc, stock}) =>{
        const result = productsDao.updateById(
            id,
            {
                title,
                price,
                thumbnail,
                desc,
                stock
            }
        )
        return result
    }
}

const delProduct = {
    type: ProductType,
    args: {
        id: { type: GraphQLID }
    },
    resolve: async (_, { id }) => {
        const deleted = await productsDao.deleteById(id)
        return deleted;
      }
}

const ProductsController = {
    mutations: {
        postProduct,
        putProduct,
        delProduct
    },
    queries: {
        getProducts,
        productById
    }
}

export { ProductsController }