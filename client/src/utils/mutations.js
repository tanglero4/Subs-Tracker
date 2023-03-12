import { gql } from '@apollo/client';

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
  addUser(username: $username, email: $email, password: $password) {
    token
    user {
      username
      email
      _id
    }
  }
}
`;

export const ADD_SUB = gql`
  mutation addSub($subName: String!, $subCost: String!) {
  addSub(subName: $subName, subCost: $subCost) {
    _id
    subName
    subCost
  }
}
`;




export const LOGIN_USER = gql`
 mutation login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
    user {
      _id
      username
      email
    }
  }
}
`;

