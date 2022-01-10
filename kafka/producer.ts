import kafka from './index';
import { Book } from '../graphql/types/bookTypes';

const producer = kafka.producer();

export default async function produceKafkaMessage(msg: Book) {
  try {
    await producer.connect();

    await producer.send({
      topic: 'book',
      messages: [
        {
          value: JSON.stringify(msg),
        },
      ],
    });

    console.log('✉️ Kafka producer send a message');
  } catch (err) {
    console.log(
      '❌ Error happened while connecting the Kafka producer',
      JSON.stringify(err),
    );
    throw new Error(err);
  }
}
