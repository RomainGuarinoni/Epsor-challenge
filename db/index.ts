import Mongoose from 'mongoose';

export default async function connectionDB() {
  try {
    await Mongoose.connect('mongodb://localhost:27017/epsor-challenge-mongo');
    console.log('💾 Connection to mongoDB successfull');
  } catch (err) {
    console.log(
      '❌ Error happened while connecting to mongoDB',
      JSON.stringify(err),
    );
    throw new Error(err);
  }
}
