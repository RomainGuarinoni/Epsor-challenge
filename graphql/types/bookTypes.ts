import { Field, ID, Int, ObjectType } from 'type-graphql';

@ObjectType({ description: 'The book model' })
export class Book {
  @Field(() => ID)
  _id: string;

  @Field()
  name: string;

  @Field(() => Int)
  nbPages: number;
}
