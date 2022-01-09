import { Book } from '../types/bookTypes';
import BookDb from '../../db/models/book';
import { Arg, Mutation, Query, Resolver } from 'type-graphql';

@Resolver()
export class BookResolver {
  @Query(() => [Book])
  async books(): Promise<Book[]> {
    const books = BookDb.find();
    return books;
  }

  @Mutation(() => Book)
  async addBook(
    @Arg('_id') _id: string,
    @Arg('name') name: string,
    @Arg('nbPages') nbPages: number,
  ): Promise<Book> {
    const book = await BookDb.create<Book>({
      _id,
      name,
      nbPages,
    });

    await book.save();

    return book;
  }
}
