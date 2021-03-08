
const express = require('express');
const cors = require('cors');
const graphqlHTTP = require('express-graphql');
const gql = require('graphql-tag');
const { buildASTSchema } = require('graphql');

const POSTS = [
  { author: "John Doe", body: "Hello world" },
  { author: "Jane Doe", body: "Hi, planet!" },
];

/*
const POSTS = [
    { someId: "1", body: "Godmorning" },
    { someId: "2", body: "Godevening" },
  ];*/

const schema = buildASTSchema(gql`
  type Query {
    posts: [Post]
    post(id: ID!): Post
  }

  type Post {
    id: ID
    author: String
    body: String
  }
`);

const mapPost = (post, id) => post && ({ id, ...post });

const root = {
  posts: () => POSTS.map(mapPost),
  post: ({ id }) => mapPost(POSTS[id], id),
};

const app = express();
app.use(cors());
app.use('/graphql', graphqlHTTP({
  schema,
  rootValue: root,
  graphiql: true,
}));

const port = process.env.PORT || 4000
app.listen(port);
console.log(`Running a GraphQL API server at localhost:${port}/graphql`);

//https://developer.okta.com/blog/2018/10/11/build-simple-web-app-with-express-react-graphql


/*
playground:

query {
  posts {
    id
    author
    body
  }
  post(id:1){
    id
    author
    body
  }
}

*/

/*
for graphQL added/changes files:
server/index.js - add
PostViewer.js - add
index.js - change
App.js - change
apollo.js - add
package.json - change
*/