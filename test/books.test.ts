import 'reflect-metadata';
import { graphql, GraphQLSchema } from 'graphql';
import BookDb from '../db/models/book';
import createSchema from '../utils/createSchema';

jest.mock('../db/models/book');

describe('Test the query of bookResolver', () => {
  const find = BookDb.find as jest.Mock;

  let schema: GraphQLSchema;

  beforeAll(async () => {
    schema = await createSchema();
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('Return the list of books', async () => {
    const query = `{
      books{
        name,
        _id,
        nbPages
      }
    }
    `;

    find.mockReturnValueOnce([
      {
        _id: '1',
        name: 'test Book',
        nbPages: 5,
      },
      {
        _id: '2',
        name: 'Great book',
        nbPages: 5,
      },
    ]);

    const result = await graphql(schema, query);

    expect(result.data?.books[0].name).toStrictEqual('test Book');
    expect(result.data?.books[0]._id).toStrictEqual('1');
    expect(result.data?.books[0].nbPages).toStrictEqual(5);
    expect(result.data?.books.length).toStrictEqual(2);
    expect(find)?.toHaveBeenCalledTimes(1);
  });

  it('Should return an error because missing subfields ', async () => {
    const query = `{
      books
    }
    `;

    const result = await graphql(schema, query);

    expect(result.data).toBeUndefined();
    expect(result.errors).toHaveLength(1);
  });
});
