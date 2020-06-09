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
    username: String!
  }
  type Contacts {
    agent_id: ID!
    timestamp: Float
    contacts: [ID]
    blocked: [ID]
  }
  type Query {
    allAgents: [Profile!]!
    me: Profile
    contacts: [Profile!]
    username(address: String): String!
    listBlocked: [ID]
  }
  type Mutation {
    createProfile(username: String): ProfileResult!
    deleteProfile(username: String): Boolean
    updateProfile(username: String): Boolean
    addContact(username: String, timestamp: Float): ProfileResult
    removeContact(username: String, timestamp: Float): ProfileResult
    blockContact(username: String, timestamp: Float): ProfileResult
    unblockContact(username: String, timestamp: Float): ProfileResult
  }
`;
