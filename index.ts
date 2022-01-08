import 'reflect-metadata';
import Express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { buildSchema, Resolver, Query } from 'type-graphql';

const PORT = process.env.PORT || 3000;

@Resolver()
class HelloResolver {
  @Query(() => String)
  async HelloWorld() {
    return 'Hello World';
  }
}

async function start() {
  const schema = await buildSchema({
    resolvers: [HelloResolver],
  });

  const apolloServer = new ApolloServer({ schema });

  const app = Express();

  apolloServer.applyMiddleware({ app });

  try {
    app.listen(PORT, () => {
      console.log('🔌 Server is listening on http://localhost:' + PORT);
      console.log(`📕 graphql visualizer on http://localhost:${PORT}/graphql`);
    });
  } catch (err) {
    console.log(
      '❌ Error happened while starting the server',
      JSON.stringify(err),
    );
  }
}

start();
