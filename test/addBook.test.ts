import 'reflect-metadata';
import { GraphQLSchema, graphql } from 'graphql';
import createSchema from '../utils/createSchema';

jest.mock(
  '../kafka/producer',
  () => () =>
    new Promise<void>((resolve) => {
      resolve();
    }),
);

describe('Test the mutation of bookResolver', () => {
  let schema: GraphQLSchema;

  beforeAll(async () => {
    schema = await createSchema();
  });

  it('Should send a kafka message and return the book created', async () => {
    const mutation = `mutation {
        addBook(_id : "1", name : "Romain", nbPages : 5) {
          name,
          _id,
          nbPages
        }
      }`;

    const { data } = await graphql(schema, mutation);

    expect(data?.addBook.name).toEqual('Romain');
    expect(data?.addBook._id).toEqual('1');
    expect(data?.addBook.nbPages).toEqual(5);
  });

  it('Should return an error because missing inputs for mutation', async () => {
    const mutation = `mutation {
        addBook(_id : "1", name : "Romain") {
          name,
          _id,
          nbPages
        }
      }`;

    const result = await graphql(schema, mutation);
    expect(result.data).toBeUndefined();
    expect(result.errors).toHaveLength(1);
  });

  it('Should return an error because missing subfields ', async () => {
    const mutation = `mutation {
      addBook(_id : "1", name : "Romain", nbPages : 5) 
    }`;

    const result = await graphql(schema, mutation);

    expect(result.data).toBeUndefined();
    expect(result.errors).toHaveLength(1);
  });
});
