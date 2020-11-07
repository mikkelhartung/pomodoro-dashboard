import { gql } from '@apollo/client'

export const USERS = gql`
  query GetUsers {
    users {
      name
      email
    }
  }
`
