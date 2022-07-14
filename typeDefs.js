import { gql } from "apollo-server";

export const typeDefs = gql`
  # a book object
  type Book {
    "the title of the book"
    title: String!
    "the author of the book"
    author: String!
    "the unique ID of the book"
    id: ID!
    "if the book is in stock or not"
    available: Boolean
  }

  # a book query
  type Query {
    books: [Book]
  }

  # A mutation to create a new book
  type Mutation {
    createBook(
      title: String!
      author: String!
      id: ID!
      available: Boolean
    ): Book
    updateBook(
      title: String!
      author: String!
      id: ID!
      available: Boolean
    ): Book
  }

  # A subscription that can be used when a new book is created
  type Subscription {
    newBook: Book!
  }
`;
