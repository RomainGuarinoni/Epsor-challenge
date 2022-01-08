import { buildSchema } from 'type-graphql';

import { BookResolver } from '../graphql/bookResolver';

export default async function createSchema() {
  return await buildSchema({
    resolvers: [BookResolver],
  });
}
