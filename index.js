
//create schema
const { ApolloServer, gql } = require('apollo-server');
const typeDefs = gql` 

# Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

type Book {
    title: String!
    author: Author!
  }
  
type Author {
    name: String!
  }


type Library {
    branch: String!
    books: [Book!]
  }

# The "Query" type is special: it lists all of the available queries that
# clients can execute, along with the return type for each. In this
# case, the "books" query returns an array of zero or more Books (defined above).
type Query {
    libraries: [Library]
  }

`;

// Hardcoded data store
const books = [
    {
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      branch: 'riverside'
    },
    {
      title: 'Wuthering Heights',
      author: 'Emily Brontë',
      branch: 'downtown'
    },
  ];

const libraries = [
    {branch: 'downtown'},
    {branch: 'riverside'},
];
//While the schema defines the structure of our API, resolvers define where the data comes from.
//create the resolvers object and connect it to our books data.
// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
const resolvers = {
    Query: {
      libraries(){
          // Return our hardcoded array of libraries
          return libraries;
      }
    },
    Library: {
        // Filter the hardcoded array of books to only include
        // books that are located at the correct branch
        books(parent){
            return books.filter(book => book.branch === parent.branch);
        }    
    },
    Book: {
        // The parent resolver (Library.books) returns an object with the
        // author's name in the "author" field. Return a JSON object containing
        // the name, because this field expects an object.
        author(parent){
            return {
                name: parent.author
            };
        }
    }
        // Because Book.author returns an object with a "name" field,
        // Apollo Server's default resolver for Author.name will work.
        // We don't need to define one.
  };


// Pass schema definition and resolvers to the
// ApolloServer constructor
//const server = new ApolloServer({ typeDefs, resolvers });
//const { MemcachedCache } = require('apollo-server-cache-memcached');
const server = new ApolloServer({
    typeDefs,
    resolvers,
    /*plugins: [
        ApolloServerPluginLandingPageGraphQLPlayground({
          // options
        })
      ],*/
    /*cache: new MemcachedCache(
        ['memcached-server-1', 'memcached-server-2', 'memcached-server-3'],
        { retries: 10, retry: 10000 }, // Options
      ),*/
    /*dataSources: () => {
        return{
            MoviesAPI: new MoviesAPI(),
            personalizationAPI: new personalizationAPI(),
        };
    },*/

});
// Launch the server
server.listen().then(({url}) => {
    console.log(`server ready at ${url}`);
});