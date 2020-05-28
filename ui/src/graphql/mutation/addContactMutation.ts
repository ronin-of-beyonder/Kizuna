import gql from "graphql-tag";

export default gql`
  mutation AddContact($username: String, $timestamp: Float) {
    addContact(username: $username, timestamp: $timestamp) {
      id
      username
      existing
      registered
      multiple
      duplicate
      outoforder
      uninitialized
      notfound
      invalidop
    }
  }
`;
