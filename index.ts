import 'reflect-metadata';
import Express from 'express';
import { ApolloServer } from 'apollo-server-express';
import connectionDB from './db/index';
import createSchema from './utils/createSchema';

const PORT = process.env.PORT || 3000;

async function start() {
  // Connect to MongoDB
  await connectionDB();

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
