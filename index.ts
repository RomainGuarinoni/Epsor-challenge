import 'reflect-metadata';
import Express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { createConnection } from 'typeorm';

import {
  buildSchema,
  Resolver,
  Query,
  Arg,
  InputType,
  Field,
} from 'type-graphql';

const PORT = process.env.PORT || 3000;

@Resolver()
export class HelloResolver {
  @Query(() => String)
  async HelloWorld(@Arg('name') name: string) {
    return 'Welcome World ' + name;
  }
}

async function start() {
  try {
    await createConnection();
    console.log('💾 Connection to mongoDB successfull');
  } catch (err) {
    console.log(
      '❌ Error happened while connecting to mongoDB',
      JSON.stringify(err),
    );
  }

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
