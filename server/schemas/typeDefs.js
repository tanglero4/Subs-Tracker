const { gql } = require('apollo-server-express');

const typeDefs = gql`

type User {
    _id: ID
    username: String
    email: String
    password: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
  }

type Subscription {
  _id: ID
  name: String
  price: Int
  active: Boolean
  pay_date: Date
}


`


module.exports = typeDefs