import { gql } from "apollo-server";

export const typeDefs = gql`
  # a book object
  type Book {
    "the title of the book"
    title: String
    "the author of the book"
    author: String
    "the unique ID of the book"
    id: Int
    "if the book is in stock or not"
    available: Boolean
  }

  # a book query
  type Query {
    books: [Book]
  }

  # an input type to be reused where needed
  input NewBook {
    title: String
    author: String
    id: Int
    available: Boolean
  }

  # @TODO setup mutation and subscriptions
  # # A mutation to create a new book
  # type mutation {
  #   CreateBook(input: NewBook): Post {
  #   }
  # }

  # # A subscription that can be used when a new book is created
  # type Subscription {
  #   BookCreated: Post
  # }
`;
