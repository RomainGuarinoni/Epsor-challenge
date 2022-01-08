import { Book } from '../models/book';
import { Arg, Mutation, Query, Resolver } from 'type-graphql';

@Resolver()
export class BookResolver {
  @Query(() => [Book])
  async books(): Promise<Book[]> {
    const books = Book.find();
    return books;
  }

  @Mutation(() => Book)
  async addBook(
    @Arg('id') id: string,
    @Arg('name') name: string,
    @Arg('nbPages') nbPages: number,
  ): Promise<Book> {
    const book = Book.create({
      id,
      name,
      nbPages,
    }).save();

    return book;
  }
}
