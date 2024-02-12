import { gql } from '@apollo/client'

export const GET_PROGRAM = gql`
  query GetProgram($limit: Int!) {
    program(limit: $limit) {
      id
      name
      thumnail {
        alt
        id
        url
      }
    }
  }
`
