let books = [
  {
    title: "The Awakening",
    author: "Kate Chopin",
    id: 1,
    available: true,
  },
];

export const resolvers = {
  Query: {
    books: () => {
      return books;
    },
  },
  Mutation: {
    createBook: (parent, args) => {
      const book = {
        title: args.title,
        author: args.author,
        id: args.id,
        available: args.available,
      };
      books.push(book);
      return book;
    },
  },
};
