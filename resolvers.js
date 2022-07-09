let books = [
  {
    title: "The Awakening",
    author: "Kate Chopin",
    id: 1,
    available: true,
  },
];

const NEW_BOOK = "NEW_BOOK";

export const resolvers = {
  Query: {
    books: () => {
      return books;
    },
  },
  Mutation: {
    createBook: (parent, args, { pubsub }) => {
      const book = {
        title: args.title,
        author: args.author,
        id: args.id,
        available: args.available,
      };
      books.push(book);

      pubsub.publish(NEW_BOOK, {
        newBook: book,
      });
      return book;
    },
  },
  Subscription: {
    newBook: {
      subscribe: (_, __, { pubsub }) => pubsub.asyncIterator(NEW_BOOK),
    },
  },
};
