import gql from "graphql-tag";

/* 
Schema
- Types
-- Profile
- Queries
-- getAllagents()
-- me()
- Mutations
-- createProfile()
*/

export default gql`
  type Profile {
    id: ID!
    username: String
  }

  input ProfileInput {
    username: String!
  }

  type BooleanReturn {
    value: Boolean
  }

  type Query {
    allAgents: [Profile!]!
    me: Profile
  }

  type Mutation {
    createProfile(username: String): Profile!
    deleteProfile(username: String): Boolean
    updateProfile(profile: ProfileInput): Boolean
  }
`;
