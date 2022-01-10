import kafka from './index';

const admin = kafka.admin();

export default async function createPartition() {
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

    console.log('✏️ Kafka book topic created');

    await admin.disconnect();
  } catch (err) {
    if (err.msg === 'Topic with this name already exists') {
      console.log('✏️ Topic book already exists', JSON.stringify(err));
    } else {
      console.log(
        '❌ Error happened while creating the kafka topic',
        JSON.stringify(err),
      );
    }
  }
}
