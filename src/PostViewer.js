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

/*
    <Query query={GET_ONE_POST}>
    {({ loading, data }) => !loading && (
      <Table>
        <thead>
          <tr>
            <th>Author</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
            <tr key={data.post.id}>
              <td>{data.post.someId}</td>
              <td>{data.post.body}</td>
            </tr>
        </tbody>
      </Table>
    )}
  </Query>


*/




    /*
  <Query query={GET_POSTS}>
    {({ loading, data }) => !loading && (
      <Table>
        <thead>
          <tr>
            <th>Author</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          {data.posts.map(post => (
            <tr key={post.id}>
              <td>{post.someId}</td>
              <td>{post.body}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    )}
  </Query>
  */