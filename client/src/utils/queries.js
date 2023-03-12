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
      description
    }
  }
}
`;

export const QUERY_SUB = gql`
  query getSub {
  subs {
    _id
    subName
    subCost
    }
}
`;




