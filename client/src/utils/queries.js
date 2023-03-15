import { gql } from '@apollo/client';

export const QUERY_USER = gql`
query user($userId: ID!) {
  user(userId: $userId) {
    _id
    username
    email
    subCount
    subs {
      _id
      subName
      subCost
    }
  }
}
`;

export const QUERY_SUB = gql`
  query getSub {
  subscriptions {
    _id
    subName
    subCost
    }
}
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      subscriptions {
        _id
        name
        price
        pay_date
        active
      }
    }
  }
`;



