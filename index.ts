import 'reflect-metadata';
import Express from 'express';
import { ApolloServer } from 'apollo-server-express';
import connectionDB from './db/index';
import createSchema from './utils/createSchema';
import createPartition from './kafka/createPartition';
import runKafkaConsumer from './kafka/consumer';

const PORT = process.env.PORT || 3000;

async function start() {
  // We start all the services of the app : MongoDB, kafka, graphQl

  await connectionDB();

  const schema = await createSchema();

  await createPartition();

  await runKafkaConsumer();

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
