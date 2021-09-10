following the link: 

[Apollo Blog](https://www.apollographql.com/blog/graphql/examples/building-a-graphql-api/)


```npm init --yes``` 

*install dependencies*
```npm install --save apollo-server graphql```

*create index.js file"
```touch index.js```

*create a schema, resolvers, server instance*

*run the server*
```node index.js```

[Apollo Docs](https://www.apollographql.com/docs/apollo-server/data/data-sources/)


*Adding data sources to Apollo Server*
ou provide your DataSource subclasses to the ApolloServer constructor

*caching*
Memcached

*RESTDataSource reference*
[github official repo](https://github.com/apollographql/apollo-server/tree/main/packages/apollo-datasource-rest)

```npm install apollo-datasource-rest```

To define a data source, extend the RESTDataSource class and implement the data fetching methods that your resolvers require. Data sources can then be provided via the dataSources property to the ApolloServer constructor, as demonstrated in the Accessing data sources from resolvers section below.


microservices
https://softchris.github.io/pages/serverless-graphql-one.html#resources