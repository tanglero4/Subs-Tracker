const { gql } = require('apollo-server-express');

const typeDefs = gql`

type User {
    _id: ID
    username: String
    email: String
    password: String
    subscriptions: [Subscription]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Subscription {
    _id: ID
    name: String
    price: Float
    active: Boolean
    pay_date: String
  }

  type Query {
    me: User
    allSubs: [Subscription]
    findSub(subId: ID!): Subscription
  }

  type Mutation {
    addSub(name: String!, price: Float! pay_date: String ): Subscription
    deleteSub(name: String!): Subscription
    updateSubscription(name: String!, price: Float!, active: Boolean!, pay_date: String!): Subscription
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
  }





`


module.exports = typeDefs