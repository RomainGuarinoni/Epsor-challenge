import { ObjectType, Field, ID, Int } from 'type-graphql';
import { Entity, BaseEntity, ObjectIdColumn, Column } from 'typeorm';

@ObjectType()
@Entity()
export class Book extends BaseEntity {
  @ObjectIdColumn()
  @Field(() => ID)
  id: string;

  @Column()
  @Field()
  name: string;

  @Column()
  @Field(() => Int)
  nbPages: number;
}
