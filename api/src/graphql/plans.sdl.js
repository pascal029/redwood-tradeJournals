export const schema = gql`
  type Plan {
    id: Int!
    pair: String!
    image: String
    description: String!
    user:User!
  }

  type Query {
    plans: [Plan!]! @requireAuth
    plan(id: Int!): Plan @requireAuth
  }

  input CreatePlanInput {
    pair: String!
    image: String
    description: String!
  }

  input UpdatePlanInput {
    pair: String
    image: String
    description: String
  }

  type Mutation {
    createPlan(input: CreatePlanInput!): Plan! @requireAuth
    updatePlan(id: Int!, input: UpdatePlanInput!): Plan! @requireAuth
    deletePlan(id: Int!): Plan! @requireAuth
  }
`
