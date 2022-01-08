import Mongoose from 'mongoose';

const connectMongoDB = async () => {
  try {
    await Mongoose.connect('mongodb://mongodb:27017/epsor-challenge-mongo');
    console.log('💾 Connection to mongoDB successfull');
  } catch (err) {
    console.log('❌ Error happened while connecting to mongoDB ');
    throw new Error(err);
  }
};

export default connectMongoDB;
