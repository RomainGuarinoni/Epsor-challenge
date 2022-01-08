import 'reflect-metadata';
import Express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { createConnection } from 'typeorm';
import createSchema from './utils/createSchema';

const PORT = process.env.PORT || 3000;

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

  const schema = await createSchema();

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
