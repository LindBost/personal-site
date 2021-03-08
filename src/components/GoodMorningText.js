import React from 'react'
import gql from 'graphql-tag';
import { useQuery } from 'react-apollo';

const GoodMorgingText = ({sendId}) => {


    console.log('sendId', sendId)
    const GET_ONE_POST = gql`
    query GetPost {
      post(id: ${sendId}) {
        id
        someId
        body
      }
    }
  `;

    const { loading, error, data } = useQuery(GET_ONE_POST)

    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`
    console.log('data', data)
    return <h1>{data.post.body}</h1>
}


export default GoodMorgingText;