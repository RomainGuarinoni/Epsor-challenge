import Mongoose from 'mongoose';

const bookSchema = new Mongoose.Schema({
  uuid: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  nbPages: {
    type: Number,
    required: true,
  },
});

export default Mongoose.model('book', bookSchema);
