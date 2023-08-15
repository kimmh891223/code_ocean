import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($firstName: String!, $lastName: String!, $username: String!, $email: String!, $password: String!) {
    addUser(firstName: $firstName, lastName: $lastName, username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_CODE = gql`
  mutation addCodes($title: String!, $content: String!, $programmingLanguage: String!, $username: String!) {
    addCodes(title: $title, content: $content, programmingLanguage: $programmingLanguage, username: $username) {
      title
      content
      programmingLanguage
      username
    }
  }
`;

export const DELETE_CODE = gql`
  mutation deleteCode($codeId: ID!) {
    deleteCode(codeId: $codeId) {
      _id
    }
  }
  `

export const UPDATE_CODE = gql`
  mutation updateCode($codeId: ID!, $title: String!, $content: String!) {
    updateCode(codeId: $codeId, title: $title, content: $content) {
      title
      content
      programmingLanguage
    }
  }
  `