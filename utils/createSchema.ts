import { buildSchema } from 'type-graphql';

import { BookResolver } from '../graphql/resolvers/bookResolver';

export default async function createSchema() {
  return await buildSchema({
    resolvers: [BookResolver],
    validate: true,
  });
}
