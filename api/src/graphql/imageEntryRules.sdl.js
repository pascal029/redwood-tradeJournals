export const schema = gql`
  type ImageEntryRule {
    id: Int!
    title: String!
    url: String!
  }

  type Query {
    imageEntryRules: [ImageEntryRule!]! @requireAuth
    imageEntryRule(id: Int!): ImageEntryRule @requireAuth
  }

  input CreateImageEntryRuleInput {
    title: String!
    url: String!
  }

  input UpdateImageEntryRuleInput {
    title: String
    url: String
  }

  type Mutation {
    createImageEntryRule(input: CreateImageEntryRuleInput!): ImageEntryRule!
      @requireAuth
    updateImageEntryRule(
      id: Int!
      input: UpdateImageEntryRuleInput!
    ): ImageEntryRule! @requireAuth
    deleteImageEntryRule(id: Int!): ImageEntryRule! @requireAuth
  }
`
