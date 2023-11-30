export const schema = gql`
  type Journal {
    id: Int!
    pair: String!
    imageBefore: String
    imageAfter: String
    description: String!
    user:User!
  }

  type Query {
    journals: [Journal!]! @requireAuth
    journal(id: Int!): Journal @requireAuth
  }

  input CreateJournalInput {
    pair: String!
    imageBefore: String
    imageAfter: String
    description: String!
  }

  input UpdateJournalInput {
    pair: String
    imageBefore: String
    imageAfter: String
    description: String
  }

  type Mutation {
    createJournal(input: CreateJournalInput!): Journal! @requireAuth
    updateJournal(id: Int!, input: UpdateJournalInput!): Journal! @requireAuth
    deleteJournal(id: Int!): Journal! @requireAuth
  }
`
