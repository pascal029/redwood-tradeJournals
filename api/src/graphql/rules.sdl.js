export const schema = gql`
  type Rule {
    id: Int!
    description: String!
    user:User!
  }

  type Query {
    rules: [Rule!]! @requireAuth
    rule(id: Int!): Rule @requireAuth
  }

  input CreateRuleInput {
    description: String!
  }

  input UpdateRuleInput {
    description: String
  }

  type Mutation {
    createRule(input: CreateRuleInput!): Rule! @requireAuth
    updateRule(id: Int!, input: UpdateRuleInput!): Rule! @requireAuth
    deleteRule(id: Int!): Rule! @requireAuth
  }
`
