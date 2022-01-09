import Mongoose from 'mongoose';

interface Book {
  _id: string;
  name: string;
  nbPages: number;
}

// We disable the auto generated _id
const bookSchema = new Mongoose.Schema<Book>(
  {
    _id: {
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
  },
  { _id: false },
);

export default Mongoose.model<Book>('Book', bookSchema);
