import kafka from './index';

export default async function createTopic() {
  const admin = kafka.admin();

  try {
    await admin.connect();

    await admin.createTopics({
      topics: [
        {
          topic: 'book',
          numPartitions: 1,
        },
      ],
    });

    console.log('✏️ Kafka topic created');
  } catch (err) {
    console.log(
      '❌ Error happened while creating kafka topic',
      JSON.stringify(err),
    );
    throw new Error(err);
  }
}
