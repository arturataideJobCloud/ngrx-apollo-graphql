### Motivation
![Motivation](https://github.com/jobcloud/marketplace-fe-apollo/blob/master/assets/images/motivation.png "Motivation")


### Installation
To preform this step please note that the you first need to login with npm cli (credentials in 1password).

    $ git clone https://github.com/jobcloud/marketplace-fe-apollo.git
    $ cd marketplace-fe-apollo
    $ npm install

### Usage

#### Run server locally
You can run the server in three different environments. Please not that the GraphQL Playground will only have the Docs, Schemas and Introspection in the Dev environment.


    $ npm start
    or
    $ npm run start:stage
    or
    $ npm run start:prod

The server will be running on port `8000`


Then the graphql endpoint will be available on `http://localhost:8000/graphql`

### Endpoints

There are two distinct endpoints in this server.
- `/graphql` query or mutate all the integrated APIs.
- `/health` check the current status of our services (e.g. https://jobcloud.ai) depending on the current environment


### Security
- **Helmet**: Improve Server Headers: See [docs](https://github.com/helmetjs/helmet)
- **CORS**: Only requests sent from `environment.appUrl` are being accepted.
- **Rate Limit**: Rate limit defined in crutial endpoints via `graphql-rate-limit`. (See [Directives Used](##directivesused))
- More to come...

### Testing and Linting

This project uses Jasmine to bootstrap the tests.

    $ npm test && npm run lint

### API Reference
Available at `http://localhost:8000/graphql` when the server in running, under the "DOCS" tab,


### Project Reference

- [NestJS](https://docs.nestjs.com/)
- [Apollo Server](https://www.apollographql.com/docs/apollo-server/)
- [How To GraphQL](https://www.howtographql.com/)
- [GraphQL](https://graphql.org/learn/)