import { 
    GraphQLID,
    GraphQLInt,
    GraphQLObjectType,
    GraphQLString,
 } from "graphql";

const ProductType = new GraphQLObjectType({
    name: "Product",
    description: "Product type",
    fields: () => ({
      id: { type: GraphQLID },
      title: { type: GraphQLString },
      price: { type: GraphQLInt },
      thumbnail: { type: GraphQLString },
      desc: { type: GraphQLString },
      stock: { type: GraphQLInt }
    }),
  });
  
  export { ProductType };