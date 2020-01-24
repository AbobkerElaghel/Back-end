const { gql } = require('apollo-server-express');

module.exports = typeDefs = gql`
  type Query {
    users: [User!]!
  }
  
  type User {
    id: ID!
    firstName: String!
    lastName: String!
    password: String!
    age: Int!
    gender: String!
  }
  
  type Mutation {
    addUser(firstName: String!, lastName: String!, password: String!, age: Int!, gender: String!): User!
  }
`;