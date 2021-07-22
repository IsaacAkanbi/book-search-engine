const {Books, Users} = require('../models');

const resolvers = {
    Query: {
        books: async () => {
          return Books.find({});
        },
        users: async () => {
         return Users.find({});
        },
    },
    Mutation: {
      createBooks: async () => {
        return books;
      },
      createUser: async ({}) => {
        return user;
      },
    },
};

module.exports = resolvers;