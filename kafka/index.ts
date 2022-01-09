import { Kafka } from 'kafkajs';

const kafka = new Kafka({
  clientId: 'epsor-kafka',
  brokers: ['localhost:9092'],
});

export default kafka;
