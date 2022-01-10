import { Book } from 'graphql/types/bookTypes';
import BookDb from '../db/models/book';

import kafka from './index';

const consumer = kafka.consumer({ groupId: 'bookConsumer' });

export default async function runKafkaConsumer() {
  try {
    await consumer.connect();

    await consumer.subscribe({
      topic: 'book',
    });

    console.log('🗒️ Kafka consumer subscribed to book topic');

    await consumer.run({
      eachMessage: async ({ message }) => {
        console.log('📬 Kafka consumer received a message');
        if (message.value) {
          const bookValue: Book = JSON.parse(message.value.toString());

          const book = await BookDb.create<Book>(bookValue);

          await book.save();

          console.log('☑️ New book saved to the db');
        }
      },
    });
  } catch (err) {
    console.log(
      '❌ Error happened while connecting the kafka consumer',
      JSON.stringify(err),
    );
    throw new Error(err);
  }
}
