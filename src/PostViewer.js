import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';



export const GET_POSTS = gql`
  query GetPosts {
    posts {
      id
      someId
      body
    }
  }
`;

export const GET_ONE_POST = gql`
  query GetPost {
    post(id: 1) {
      id
      someId
      body
    }
  }
`;

export default () => (
    <Query query={GET_ONE_POST}>
    {({ loading, data }) => !loading && (
            <div key={data.post.id}>
              <h1>{data.post.someId}</h1>
              <p>{data.post.body}</p>
            </div>
    )}
  </Query>

);
