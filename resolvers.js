const books = [
  {
    title: "The Awakening",
    author: "Kate Chopin",
    id: 1,
    available: true,
  },

  {
    title: "City of Glass",
    author: "Paul Auster",
    id: 2,
    available: false,
  },
];

export const resolvers = {
  Query: {
    books: () => {
      return books;
    },
  },
};
