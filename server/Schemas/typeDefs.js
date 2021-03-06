const {gql} = require('apollo-server-express');

const typeDefs = gql`
 type Book {
     _id: ID!
     authors: String!
     description: String!
     bookId: String!
     image: String!
     link: String!
     tittle: String!
    }

 type User {
   _id: ID!
   username: String!
   email: String!
   password: String!
   }

 type Query {
   book: [Book]
   user: [User]
   }

   type Mutation {
    createBook(): Book
    createUser(): User
   }

`;

module.exports = typeDefs;